import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
const Footer = () => {

  const handleVoice = ()=>{
    console.log("render")
  }
  
  return (
    <footer className="dev-footer">
      <div className="footer-container px-5 pt-5 pb-3">
        <h5 className="footer-title pt-5">SAY HELLO</h5>

        <Row className="justify-content-start footer-content">
          <Col md={4}>
            <h4 typeof="email"> shobanbalaji.v@gmail.com</h4>
            <h4> t.me/shoban</h4>
          </Col>
          <Col md={4}>
            <h4> <Link href="/blog" style={{textDecoration:"none", color:"inherit"}}> My shelf </Link></h4>
            <h4> <Link href="/project" style={{textDecoration:"none", color:"inherit"}}> My Works </Link></h4>
            <h4> <Link href="/resume" style={{textDecoration:"none", color:"inherit"}}> My Resume </Link></h4>
          </Col>
        </Row>


        <hr className="my-3 footer-strike"/>

        <Row className="footer-final justify-content-between">
          <Col> <h4> Copyrights shbnmllx</h4> </Col>
          <Col>
          <Row className="justify-content-end"> 
            <Col md={1}> <Link href="/blog" style={{cursor:"pointer", fontSize:"15px", textDecoration:"none"}}>TW </Link> </Col>
            <Col md={1}> <Link href="/blog" style={{cursor:"pointer", fontSize:"15px", textDecoration:"none"}}>TW </Link> </Col>
            <Col md={1}> <Link href="/blog" style={{cursor:"pointer", fontSize:"15px", textDecoration:"none"}}>IG </Link> </Col>
            <Col md={1}> <Link href="/blog" style={{cursor:"pointer", fontSize:"15px", textDecoration:"none"}}>LN </Link> </Col>
          </Row>

            <h1 onClick={handleVoice}> seasam</h1>

          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
