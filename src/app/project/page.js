'use client';

import React from 'react';
import Header from '../header/page';
import { Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

const Projects = () => {
  const projectList = [
    {
      image: "/images/project1.png",
      name: "Portfolio Website",
      link: "https://myportfolio.com"
    },
    {
      image: "/images/project2.png",
      name: "E-commerce Store",
      link: "https://mystore.com"
    },
    {
      image: "/images/project3.png",
      name: "Blog Platform",
      link: "https://myblog.com"
    },
    {
      image: "/images/project4.png",  
      name: "Task Manager App",
      link: "https://taskapp.com"
    }
  ];

  return (
    <div className="dev-works">
      <Header isBackground={false} />
      <h1 className="text-center py-4">/Projects</h1>
      <p className="text-center py-2">See my work that I've worked on in the past</p>

      <Row className="project-container justify-content-between">
        {projectList.map((project, index) => (
          <Col md={4} key={index} className="my-3">
            <Card className='project-card shadow-sm'>
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <h5 className=''>{project.name}</h5>
                <Link style={{textDecoration:"none"}} href={project.link}>
                {project.link}
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
