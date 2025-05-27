"use client";

import React from "react";
import Header from "../header/page";
import { Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import im from "../../assets/images/logo.jpeg";

const Projects = () => {
  const projectList = [
    {
      projectImage: im,
      projectName: "Portfolio Website",
      link: "https://mystore.com",
      projectDescription:"lorem ispum ......................................................................."

    },
    {
      projectImage: im,
      projectName: "E-commerce Store",
      link: "https://mystore.com",
      projectDescription:"lorem ispum ......................................................................."
    },
    {
      projectImage: im,
      projectName: "Blog Platform",
      link: "https://myblog.com",
      projectDescription:"lorem ispum ......................................................................."
    },
    {
      projectImage: im,

      projectName: "Task Manager App",
      link: "https://taskapp.com",
      projectDescription:"lorem ispum ......................................................................."
    },
  ];

  return (
    <div className="dev-blogs">
      <Header isBackground={false} menuColor={"#aaa"} />
      <h1 className="text-center pt-4">/Projects</h1>
      <p className="text-center py-2 px-4">See my work that I've worked on in the past</p>

      <Row className="blog-container justify-content-between">
        {projectList.map((blog, index) => (
          <Col md={3} key={index} className="my-3">
            <Card className="blog-card shadow-sm rounded">
              <Image
                className="blog-image"
                variant="top"
                src={blog.projectImage}
                alt={blog.projectName}
              />
              <Card.Body>
                <h5 className="">{blog.projectName}</h5>
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

export default Projects;
