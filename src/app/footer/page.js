"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
const Footer = () => {
  const [openResumeDownloadModal, setOpenResumeDownloadModal] = useState(false);
  const [resumeLink, setResumeLink] = useState("");

  const handleClose = () => setOpenResumeDownloadModal(false);
  const handleShow = () => setOpenResumeDownloadModal(true);

  // get the resume link dynamically 
  useEffect(()=>{
    const getLink = async()=>{
      try {
        const ref = doc(db, "drive", "resume");
        const snapshot = (await getDoc(ref)).data();
        setResumeLink(snapshot.link)
      } catch (error) {
        setResumeLink("")
      }
    }
    getLink()
  },[])

  return (
    <>
      <Modal
        className="download-resume-modal"
        show={openResumeDownloadModal}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton className="p-1" />
        <Modal.Title className="ps-3"> Hello,</Modal.Title>
        <Modal.Body>
          <div className="resume-content">
            <p className="resume-text">
              I truly appreciate you taking the time to explore my work and
              portfolio. If you'd like to know about my skills, experience, and
              the value I can bring to your team or project, feel free to check
              out my resume.
            </p>

              <Button className="resume-btn" disabled = {!resumeLink }>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{textDecoration:"none", color:"inherit"}}
            >
                
                
                📄 Get My Resume
            </a>
                </Button>
          </div>
        </Modal.Body>
      </Modal>

      <footer className="dev-footer">
        <div className="footer-container px-5 pt-5 pb-3">
          <h5 className="footer-title pt-5">SAY HELLO</h5>

          <Row className="justify-content-start footer-content">
            <Col md={4}>
              <h4 typeof="email"> shobanbalaji.v@gmail.com</h4>
              <h4> t.me/shoban</h4>
            </Col>
            <Col md={4}>
              <h4>
                {" "}
                <Link
                  href="/blog"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  My shelf{" "}
                </Link>
              </h4>
              <h4>
                {" "}
                <Link
                  href="/project"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  My Works{" "}
                </Link>
              </h4>
              <h4
                onClick={() => {
                  setOpenResumeDownloadModal(!openResumeDownloadModal);
                }}
                href="javascript:void(0)"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                {" "}
                My Resume{" "}
              </h4>
            </Col>
          </Row>

          <hr className="my-3 footer-strike" />

          <Row className="footer-final justify-content-between align-items-center">
            <Col>
              <h4>Copyrights shbnmllx</h4>
            </Col>
            <Col className="d-flex justify-content-end gap-3">
              {/* <Link
              href="/blog"
              style={{
                cursor: "pointer",
                fontSize: "15px",
                textDecoration: "none",
                color:"inherit"
              }}
            >
              TW
            </Link>
            <Link
              href="/blog"
              style={{
                cursor: "pointer",
                fontSize: "15px",
                textDecoration: "none",
                color:"inherit"
              }}
            >
              FB
            </Link> */}
              <Link
                href="https://github.com/shobanbalaji"
                target="_blank"
                style={{
                  cursor: "pointer",
                  fontSize: "15px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                GH
              </Link>
              <Link
                href="https://www.linkedin.com/in/shobanbalaji-v/"
                target="_blank"
                style={{
                  cursor: "pointer",
                  fontSize: "15px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                LN
              </Link>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
