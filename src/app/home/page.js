"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import { Row, Col } from "react-bootstrap";
import Header from "../header/page";
import Image from "next/image";
import backgroundShape from "../../assets/shapes/homeScreenShape.svg";
import shape3 from "../../assets/shapes/shape3.svg";
import shape2 from "../../assets/shapes/shape2.svg";
import shoban from "../../assets/images/handsome.jpeg";
import backgroundShape1 from "../../assets/shapes/project.svg"
const HomePage = () => {

  const nav = useRouter();
  return (
    <>
      <Header />

      <section className="home-screen-section">
        <Row className="home-screen" style={{ height: "80vh" }}>
          <Col md={8} sm={12} className="px-5 dev-content">
            <h1>
              {" "}
              Full-Stack Web <br /> Developer
            </h1>
            <p className="content-p">
              {" "}
              I build scalable full stack applications focused on performance and user experience.
            </p>

            <Row className="text-white py-3 dev-sub-intro d-flex">
              <Col className="ps-0">
                <p>
                  Highly skilled at progressive enhancement,
                   design systems & UI Engineering.
                </p>
              </Col>
              <Col>
                <p>
                  Proven experience building successful products  for
                  clients across several countries.
                </p>
              </Col>
            </Row>

            <Image
              src={backgroundShape}
              height={500}
              width={470}
              alt="backgroundShape"
              className="backgroundShape"
              style={{
                objectFit: "cover",
                pointerEvents: "none",
                borderRadius: "15px",
              }}
              onContextMenu={(e) => e.preventDefault()}
            />
          </Col>
          <Col md={4} sm={12} className="px-5 dev-image">
            {" "}
            <Image
              alt="image"
              src={shoban}
              height={290}
              width={290}
              className="developer-profile"
              onContextMenu={(e) => e.preventDefault()}
              style={{
                position: "relative",
                top: "60px",
                right: "140px",
                borderRadius: "20px",
              }}
            />
          </Col>
        </Row>
      </section>

      <section className="developer-expertise-section container">
        <Row className="developer-expertise-container">
          <Col
            md={6}
            className="developer-expertise-col developer-expertise-col-left"
          >
            <Row className="developer-expertise-row">
              <Col className="expertise-content">
                <h2 className="expertise-title">Design</h2>
                <p className="expertise-description">
                  When building JavaScript applications, I combine design
                  awareness with technical execution. I leverage the right
                  tools—but can also work without them—to create clean,
                  intuitive interfaces and resilient architectures. I prioritize
                  user experience, performance, and scalability throughout the
                  development process.
                </p>
              </Col>
              <Col className="expertise-image">
                <Image src={shape3} alt="shape" height={250} width={250} />
              </Col>
            </Row>
          </Col>

          <Col
            md={6}
            className="developer-expertise-col developer-expertise-col-right"
          >
            <Row className="developer-expertise-row">
              <Col className="expertise-image">
                <Image src={shape2} alt="shape" height={250} width={250} />
              </Col>
              <Col className="expertise-content">
                <h2 className="expertise-title">Engineering</h2>
                <p className="expertise-description">
                  I’m well-versed in building JavaScript applications with the
                  right tools and frameworks. I’m equally capable of working
                  independently of them to deliver fast, resilient, and scalable
                  solutions. Performance and scalability are always top
                  priorities in my development approach.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

      <section className="project-section">
        <Row className="align-items-center project-section-container">
          <Col md={6} className="p-5 project-section-content">
            <h2> Over the years,</h2>

            <p>
              Over the past year, I’ve contributed to a wide range of projects,
              taking on both frontend and backend responsibilities. My work
              spans from business tools to system modules, with a strong focus
              on scalable and maintainable code.
            </p>

            <p>
              Played a major role in developing and enhancing Finance-related
              modules. This included transaction management, financial
              reporting, and integrating third-party services to support
              real-time financial operations.
            </p>
            <p>
              Built and improved LMS modules to support dynamic content
              delivery, progress tracking, and role-based access. Focused on
              delivering a smooth and engaging learning experience across user
              types.
            </p>
            <p>
              Delivered multiple frontend projects using modern JavaScript
              frameworks. Prioritized performance, accessibility, and responsive
              design while building clean, intuitive interfaces across various
              devices.
            </p>
            <p>
              Worked across various backend technologies, contributing to API
              design, authentication, and data modeling. This full stack
              exposure has strengthened my ability to architect end-to-end
              solutions and collaborate across teams.
            </p>
          </Col>

          <Col md={6} className="p-5 project-section-background">
            <Image
              alt="im"
              src={backgroundShape1}
              className="project-background-image"
              height={700}
              width={600}
            />
          </Col>
        </Row>
      </section>

      <section className="dev-article pt-4">
        <Row className="article-container container">
          <Col
            md={6}
            className="article-content article-first-part"
            style={{ borderRight: "1px solid blue" }}
          >
            <h2 className="article-header">
              I build & <br /> design stuff
            </h2>

            <p className="article-paragraph">
              Open source projects, web apps and experimentals.
            </p>

            <button
              className="article-move-button"
              onClick={() => nav.push("/project")}
            >
              {" "}
              See My Works
            </button>
          </Col>

          <Col md={6} className="article-content article-second-part ps-5">
            <h2 className="article-header">
              I write,
              <br /> sometimes
            </h2>

            <p className="article-paragraph">
              About design, frontend dev, learning <br /> and life.
            </p>

            <button
              className="article-move-button"
              onClick={() => nav.push("/article")}
            >
              {" "}
              Read My Article
            </button>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default HomePage;
