import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="dev-footer">
      <div className="footer-container px-5 pt-5 pb-3">
        <h5 className="footer-title pt-5">SAY HELLO</h5>

        <Row className="justify-content-start footer-content">
          <Col md={4}>
            <h4> shobanbalaji.v@gmail.com</h4>
            <h4> t.me/shoban</h4>
          </Col>
          <Col md={4}>
            <h4> <Link href="/article" style={{textDecoration:"none", color:"inherit"}}> My shelf </Link></h4>
            <h4> <Link href="/project" style={{textDecoration:"none", color:"inherit"}}> My Works </Link></h4>
            <h4> <Link href="/resume" style={{textDecoration:"none", color:"inherit"}}> My Resume </Link></h4>
          </Col>
        </Row>


        <hr className="my-5 footer-strike"/>

        <Row className="footer-final justify-content-between">
          <Col> <h4> Copyrights shbnmllx</h4> </Col>
          <Col>
          <Row className="justify-content-end"> 
            <Col> <span style={{cursor:"pointer", fontSize:"15px"}}>TW </span> </Col>
            <Col> <span style={{cursor:"pointer", fontSize:"15px"}}>IG </span> </Col>
            <Col> <span style={{cursor:"pointer", fontSize:"15px"}}>LN </span> </Col>
          </Row>

          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
