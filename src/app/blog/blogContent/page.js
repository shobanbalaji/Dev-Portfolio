"use client";

import React, { use, useEffect, useState } from "react";
import { db } from "@/app/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
// import { useSearchParams } from "next/navigation";
import { Row, Col } from "react-bootstrap";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


export default function BlogDetail({ searchParams }) {
  const params = use(searchParams);
  const id = params.id;
  const [blogContent, setBlogContent] = useState(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const blogRef = doc(db, "blogs", id); // ✅ use doc() not collection()
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlogContent(blogSnap.data());
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    getBlogData();
  }, [id]);

  if (!blogContent) return <p>Loading...</p>;

  return (
<>

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
          <Col >
            <h1 style={{ border: "none" }}>{blogContent.heading}</h1>
          </Col>

          <Col  className="mt-2 d-flex justify-content-end align-center">
            <div
              className="p-3 rounded d-flex align-items-center"
              style={{
                cursor: "pointer",
                width: "fit-content",
                border: "1px solid #aaa",
              }}
              onClick={() => {
                setIsDark(!isDark);
              }}
            >
              {!isDark ? <MdDarkMode title="Dark mode" size={20}/> : <CiLight title="Light mode" size={20}/>}
            </div>
          </Col>
        </Row>
        <div dangerouslySetInnerHTML={{ __html: blogContent.content }} />
      
    </Row>
</>

  );
}
