import React from 'react'
import "../style/Clients.css";
import logo1 from "../assests/logo1.png";
import logo2 from "../assests/logo2.png";
import logo3 from "../assests/logo3.png";
import logo4 from "../assests/logo4.png";

const Clients = () => {
  return (
    <div className="clients">
        <div className="main">
            <div className="top">
                <div className="heading">SOME OF OUR CLIENTS</div>
                <div className="bar"></div>
            </div>
            <div className="bottom">
                <div className="logo1"><img src={logo1} alt="" /></div>
                <div className="logo2"><img src={logo2} alt="" /></div>
                <div className="logo3"><img src={logo3} alt="" /></div>
                <div className="logo4"><img src={logo4} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Clients