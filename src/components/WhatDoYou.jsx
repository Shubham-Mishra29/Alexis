import React from 'react'
import '../style/whatdoyou.css';

const WhatDoYou = () => {
  return (
    <div className='whatdoyou'>
      <div className="main">
        <div className="top">
          <div className="heading">What Do You Ship?</div>
          <div className="bar"></div>
        </div>

        <div className="bottom">
          <div className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>

          <div className="button"><a href="">LEARN MORE</a></div>
        </div>
      </div>
    </div>
  )
}

export default WhatDoYou