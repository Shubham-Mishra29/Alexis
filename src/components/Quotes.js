import React from "react";
import "../style/Quotes.css";

const Quotes = () => {
  return (
    <div className="quotes">
      <div className="main">
        <div className="box">

          <div className="top">
            <div className="heading">Get Instant Quotes</div>
            <div className="bar"></div>
          </div>

          <div className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>

          <div className="button">Get QUOTES</div>
          
        </div>
      </div>
    </div>
  );
};

export default Quotes;
