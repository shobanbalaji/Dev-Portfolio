"use client";

import React from "react";
import Header from "../header/page";
import { Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import im from "../../assets/images/logo.jpeg";

const page = () => {
  const blogList = [
    {
      blogImage: im,
      blogName: "Portfolio Website",
      link: "https://mystore.com",
      blogDescription:"lorem ispum ......................................................................."

    },
    {
      blogImage: im,
      blogName: "E-commerce Store",
      link: "https://mystore.com",
      blogDescription:"lorem ispum ......................................................................."
    },
    {
      blogImage: im,
      blogName: "Blog Platform",
      link: "https://myblog.com",
      blogDescription:"lorem ispum ......................................................................."
    },
    {
      blogImage: im,

      blogName: "Task Manager App",
      link: "https://taskapp.com",
      blogDescription:"lorem ispum ......................................................................."
    },
  ];

  return (
    <div className="dev-blogs">
      <Header isBackground={false} menuColor={"#aaa"} />
      <h1 className="text-center py-3">/blogs</h1>
      <p className="text-center px-4 py-2">
        See my blogs, that I've wrote a tech contents may be its useful to you
      </p>

      <Row className="blog-container justify-content-between">
        {blogList.map((blog, index) => (
          <Col md={3} key={index} className="my-3">
            <Card className="blog-card shadow-sm rounded">
              <Image
                className="blog-image"
                variant="top"
                src={blog.blogImage}
                alt={blog.blogName}
              />
              <Card.Body>
                <h5 className="">{blog.blogName}</h5>
                <Link style={{ textDecoration: "none" }} href={blog.link}>
                  {blog.link}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default page;
