import { useEffect } from "react";
import { useState } from "react";
import "../style/Carousel.css";
import logo from "../assests/logo.png";
import icon from "../assests/icon.png";
import phn from "../assests/phn.png";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import instagram from "../assests/instagram.png";
import whatsapp from "../assests/whatsapp.png";
import {NavLink } from "react-router-dom";
function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [colorChange, setColorchange] = useState(false);

  let timeOut = null;

  useEffect(() => {
    // timeOut =
    //   autoPlay &&
    //   setTimeout(() => {
    //     slideRight();
    //   }, 5000);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />

              {/* Carousel Overlay */}
              <div className="card_overlay">
                {/* Navbar */}
                <div className={colorChange ? "nav_colorChange" : "nav"}>
                  {/* <div className="nav"> */}
                  <div className="outer">
                    <div>
                      <img src={logo} />
                    </div>

                    <div className="inner">
                      {/* Links */}

                      <li>
                      <NavLink exact to="/">Home</NavLink>
                      </li>
                      {/* <li><a href="">Services</a></li> */}
                      <li>
                        <NavLink to="/services">Services </NavLink>
                      </li>

                      <li>
                        <NavLink to="/gallery">Gallery </NavLink>
                      </li>
                      <li>
                        <a href="">Blog</a>
                      </li>                      
                      <li>
                        <a href="">Careers</a>
                      </li>
                      <li>
                      <NavLink to="/contactus">ContactUs </NavLink>
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

                <div className="card_content">
                  <h1 className="card_heading">{image.heading}</h1>
                  <h3 className="card_subHeading">{image.subHeading}</h3>
                  <a href="" className="card_button">
                    {image.button}
                  </a>
                  <a
                    href="https://wa.me/65123456789"
                    target="_blank"
                    className="whatsapp"
                  >
                    <img src={whatsapp} alt="" />
                  </a>
                </div>
              </div>

              <div className="social_media">
                {/* <a href=""><i class="fa-brands fa-facebook" style={{color : "white"}}></i></a> */}
                <a href="" className="facebook">
                  <img src={facebook} alt="" />
                </a>
                <a href="" className="twitter">
                  <img src={twitter} alt="" />
                </a>
                <a href="" className="instagram">
                  <img src={instagram} alt="" />
                </a>
              </div>
            </div>
          );
        })}

        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
