"use client";

import React, { useEffect, useState } from "react";
import Header from "../header/page";
import { Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import im from "../../assets/images/logo.jpeg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { slugify } from "../utils/slugify";

const Page = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const getBlogContent = async () => {
      const blogRef = collection(db, "blogs");
      const blogData = (await getDocs(blogRef)).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const blogReturns = blogData.map((blog) => ({
        blogImage: im,
        blogName: blog?.heading,
        blogDescription: blog?.description,
        slug: slugify(blog?.heading),
        id: blog?.id,
      }));

      setBlogList(blogReturns);
    };
    getBlogContent();
  }, []);

  return (
    <div className="dev-blogs">
      <Header isBackground={false} menuColor={"#aaa"} />
      <h1 className="text-center py-3">/blogs</h1>
      <p className="text-center px-4 py-2">
        See my blogs, that I've wrote a tech contents may be its useful to you
      </p>

      <Row className="blog-container justify-content-between">
        {blogList?.map((blog, index) => (
          <Col md={3} key={index} className="my-3">
            <Card className="blog-card shadow-sm rounded">
              <Image className="blog-image" src={im} alt="blog image" />
              <Card.Body>
                {/* ✅ Slug-based Link */}
                <h5>
                  <Link href={`/blog/blogContent?id=${blog.id}`}>{blog.blogName}</Link>
                </h5>
                <p>{blog?.blogDescription}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Page;
