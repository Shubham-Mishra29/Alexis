import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import logo from "../assests/logo.png";
import icon from "../assests/icon.png";
import phn from "../assests/phn.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
      if (window.scrollY >= 200) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="Navbar">
        <div className={colorChange ? "nav_colorChange" : "nav"}>
                  {/* <div className="nav"> */}
                  <div className="outer">
                    <div>
                      <img src={logo} />
                    </div>

                    <div className="inner">
                      {/* Links */}

                      <li>
                        <a href="/">Home</a>
                      </li>
                      {/* <li><a href="">Services</a></li> */}
                      <li>
                        <Link to="/services">Services </Link>
                      </li>

                      <li>
                        <Link to="/gallery">Gallery </Link>
                      </li>
                      <li>
                        <a href="">Blog</a>
                      </li>                      
                      <li>
                        <a href="">Careers</a>
                      </li>
                      <li>
                        <a href="">ContactUs</a>
                      </li>

                      <div className="phn">
                        <div>
                          <img src={phn} alt="" />
                        </div>
                        <div>
                          <a href="tel:65123456789">+65 123 456 789</a>
                        </div>
                      </div>
                    </div>

                    <div className="login">
                      <a href="">
                        {/* <div><img src={icon} alt="" /></div> */}
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path className="icon"
                            d="M8.5 8C10.71 8 12.5 6.21 12.5 4C12.5 1.79 10.71 0 8.5 0C6.29 0 4.5 1.79 4.5 4C4.5 6.21 6.29 8 8.5 8ZM8.5 10C5.83 10 0.5 11.34 0.5 14V15C0.5 15.55 0.95 16 1.5 16H15.5C16.05 16 16.5 15.55 16.5 15V14C16.5 11.34 11.17 10 8.5 10Z"
                            fill="white"
                          />
                        </svg>
                        {/* <div>CLIENT LOGIN</div> */}
                        CLIENT LOGIN
                      </a>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Navbar