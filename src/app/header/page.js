"use client";
import React, { useState, useEffect, useRef} from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { LuAudioLines } from "react-icons/lu";


const Header = ({isBackground=true, menuColor = "white"}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const nav = useRouter(null);

  const handleShowMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Close menu on outside click
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  const navigationMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "./blog",
    },
    {
      name: "Project",
      link: "./project",
    },
    {
      name: "Contact",
      link: "./contact",
    },
  ];

    const audioRef = useRef(null);


  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  
  return (
    <header>
      <Row>
        <Col  className="header-logo" style={{ ...( !isBackground && { backgroundColor: "inherit"} )}}>
          <audio  ref={audioRef} src="/audio/intro1.mp3" type="audio/mpeg" />
         <div className="d-flex justify-content-between align-items-center pe-3"> 
          <h3
            className="py-5 ps-5 header-logo-text"
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
            <span onClick={()=>nav.push('/')}> Shbnmllx </span>
            <span> <LuAudioLines className="menu-bar-web" onClick={handlePlayPause} style={{cursor:"pointer"}} size={18} color={menuColor}  title="voice of shoban"/> </span>  
          </h3>

          <GiHamburgerMenu className="menu-bar-mobile"  ref={menuRef} onClick={handleShowMenu} size={23} color={menuColor}/>

        </div>

        </Col>
        <Col md={4} sm={3} className="header-menu text-end" style={{ ...( !isBackground && { background: 'none' } )}}>
          <div className="header-menu-bar py-5" style={{paddingRight:"3rem"}}>
          <GiHamburgerMenu className="menu-bar-web"  ref={menuRef} onClick={handleShowMenu} size={23} color={menuColor} style={{cursor:"pointer"}}/>
          </div>


        </Col>
          
      </Row>
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
    </header>
  );
};

export default Header;
