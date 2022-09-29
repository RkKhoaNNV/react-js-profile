import React from "react";
// import NavLink from "react-router-dom";
import "./style.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        className="nav"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
          delay: 0.8,
        }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "block",
          transition: "top 0.3s",
        }}
      >
        {scrollPosition <= 90 && (
          <div className="main-menue">
            <ul>
              <li>
                <a href="#home"> Home </a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#connect">Connect</a>
              </li>
            </ul>
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Nav;
