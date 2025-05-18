"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import { Row, Col } from "react-bootstrap";
import Header from "../header/page";
import Image from "next/image";
import backgroundShape from "../../assets/shapes/homeScreenShape.svg";
import shape3 from "../../assets/shapes/shape3.svg";
import shape2 from "../../assets/shapes/shape2.svg";
import shoban from "../../assets/images/handsome.png";
import backgroundShape1 from "../../assets/shapes/project.svg"
const HomePage = () => {

  const nav = useRouter();
  return (
    <>
      <Header />
      <section className="home-screen-section">
        <Row className="home-screen" style={{ height: "80dvh" }}>
          <Col md={8} sm={12} className="px-5 dev-content">
            <h1>
              {" "}
              Full-Stack Web <br /> Developer
            </h1>
            <p className="content-p">
              {" "}
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>

            <Row className="text-white py-3 dev-sub-intro d-flex">
              <Col>
                <p>
                  Highly skilled at progressive enhancement,
                  <br /> design systems & UI Engineering.
                </p>
              </Col>
              <Col>
                <p>
                  Proven experience building successful products <br /> for
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
            />
          </Col>
          <Col md={4} sm={12} className="px-5 dev-image">
            {" "}
            <Image
              alt="image"
              src={shoban}
              height={290}
              width={290}
              style={{
                position: "relative",
                top: "60px",
                right: "140px",
              }}
            />
          </Col>
        </Row>
      </section>

      <section className="hero-section container">
        <Row className="hero-row">
          <Col md={6} className="hero-col hero-col-left">
            <Row className="hero-inner-row">
              <Col className="hero-text">
                <h2 className="hero-title">Design</h2>
                <p className="hero-description">
                  In building JavaScript applications, I'm equipped with just
                  the right tools, and can absolutely function independently of
                  them to deliver fast, resilient solutions optimized for scale
                  — performance and scalability are priorities on my radar.
                </p>
              </Col>
              <Col className="hero-image-col">
                <Image src={shape3} alt="shape" height={250} width={250} />
              </Col>
            </Row>
          </Col>

          <Col md={6} className="hero-col hero-col-right">
            <Row className="hero-inner-row">
              <Col className="hero-image-col">
                <Image src={shape2} alt="shape" height={250} width={250} />
              </Col>
              <Col className="hero-text">
                <h2 className="hero-title">Engineering</h2>
                <p className="hero-description">
                  In building JavaScript applications, I'm equipped with just
                  the right tools, and can absolutely function independently of
                  them to deliver fast, resilient solutions optimized for scale
                  — performance and scalability are priorities on my radar.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

      <section className="project-section">
        <Row className="align-items-center">
          <Col md={6} className="p-5 ">
            <h2> Over the years,</h2>

            <p>
              I've built products for companies and businesses around the globe
              ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </p>

            <p>
              Currently, I work at Shopify as a Senior Frontend Engineer
              crafting thoughtful and inclusive experiences that adhere to web
              standards for over 3 million merchants across the world.
            </p>
            <p>
              Before now, I was Principal Frontend Engineer at hellotax, where I
              worked on a suite of tools and services tailored towards automated
              VAT compliance for multi-channel sellers in Europe.
            </p>
            <p>
              Prior tobhellotax, I was Senior frontend engineering consultant
              with Pixel2HTML, building JavaScript applications and interfaces
              for orgs and individuals.
            </p>
            <p>
              I once also led the frontend team at Conectar, an e-learning
              startup through building multiple React applications into a single
              robust learning platform.
            </p>
          </Col>
          <Col md={6} className="p-5">
            <Image alt="im" src={backgroundShape1} className=""  height={700} width={600}/>
          </Col>
        </Row>
      </section>

      <section className="dev-article pt-4">
        <Row className="article-container container">
          <Col
            md={6}
            className="article-content"
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

          <Col md={6} className="article-content ps-5">
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
