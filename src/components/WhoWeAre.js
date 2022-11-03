import React from "react";
import "../style/WhoWeAre.css";
import Group from "../assests/Group.png";

const WhoWeAre = () => {
  return (
    <>
      <div className="wwr_outer">
        <div className="leftside">
            <div className="content">
              <div className="heading">Who We Are</div>

              <div className="bar"></div>

              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. 
                <br/>
                <br/>
                It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
        </div>

        <div className="rightside">
          <img src={Group} alt="" />
        </div>

      </div>
    </>
  );
};

export default WhoWeAre;
