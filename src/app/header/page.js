"use client";
import React, { useState, useEffect, useRef} from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

const Header = ({isBackground=true}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef()

  const handleShowMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const navigationMenu = [
    {
      name: "Blog",
      link: "./blog",
    },
    {
      name: "Project",
      link: "$",
    },
    {
      name: "Contact",
      link: "./contact",
    },
  ];
  return (
    <>
      <Row>
        <Col md={8}  className="header-logo" style={{ ...( !isBackground && { backgroundColor: "inherit"} )}}>
          <h3
            className="py-5 ps-5 header-logo-text"
            onClick={()=>window.location.reload()}
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              width:"fit-content",
              ...( !isBackground && { color: "blue"} )
            }}
          >
            {" "}
            shbnmllx
          </h3>
        </Col>
        <Col md={4} sm={3} className="header-menu text-end" style={{ ...( !isBackground && { background: 'none' } )}}>
          <div className="header-menu-bar py-5" style={{paddingRight:"3rem"}}>
            <button
            ref={menuRef}
              onClick={handleShowMenu}
              style={{ border: "none", background: "transparent" }}
            >
              {" "}
              X{" "}
            </button>
          </div>

          {menuOpen && (
            <>
              <div className="open-menu-bar">
                <div className="d-grid my-2">
                  {navigationMenu.map((nav, index) => (
                    <Link
                      key={index}
                      href={nav.link}
                      className=" text-white py-1"
                      style={{ textDecoration: "none", width: "fit-content" }}
                    >
                      {" "}
                      {nav.name}{" "}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </Col>
          
      </Row>
    </>
  );
};

export default Header;
