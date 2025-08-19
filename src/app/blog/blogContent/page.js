"use client";

import React, { useEffect, useState, Suspense } from "react";
import { db } from "@/app/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import { Row, Col } from "react-bootstrap";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function BlogDetailInner() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // ✅ get ?id=xxx
  const [blogContent, setBlogContent] = useState(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getBlogData = async () => {
      try {
        const blogRef = doc(db, "blogs", id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlogContent(blogSnap.data());
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    getBlogData();
  }, []);

  if (!blogContent) return <p>Loading...</p>;

  return (
    <Row
      className={`d-flex justify-content-center text-editor-section-${
        isDark ? "dark" : "light"
      }`}
    >
      <Row
        className="justify-content-between"
        style={{
          borderBottom: "2px solid #ececec",
          textTransform: "capitalize",
          paddingBottom: "0.4rem",
        }}
      >
        <Col>
          <h1 style={{ border: "none" }}>{blogContent.heading}</h1>
        </Col>

        <Col className="mt-2 d-flex justify-content-end align-center">
          <div
            className="p-3 rounded d-flex align-items-center"
            style={{
              cursor: "pointer",
              width: "fit-content",
              border: "1px solid #aaa",
            }}
            onClick={() => setIsDark(!isDark)}
          >
            {!isDark ? (
              <MdDarkMode title="Dark mode" size={20} />
            ) : (
              <CiLight title="Light mode" size={20} />
            )}
          </div>
        </Col>
      </Row>

      <div dangerouslySetInnerHTML={{ __html: blogContent.content }} />
    </Row>
  );
}

export default function BlogDetail() {
  return (
    <Suspense fallback={<p>Loading blog...</p>}>
      <BlogDetailInner />
    </Suspense>
  );
}
