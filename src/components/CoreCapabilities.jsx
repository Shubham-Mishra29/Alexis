import React from "react";
import "../style/CoreCapabilities.css";
// import maintenance from "../assests/maintenance.png";

const CoreCapabilities = () => {
  return (
    <div className="corecapabilities">
      <div className="main">
        {/* top */}
        <div className="top">
          <div className="heading">CORE CAPABILITIES</div>
          <div className="bar"></div>
        </div>

        {/* bottom */}
        <div className="bottom">
          {/* columns */}

          <div className="col col1">
            <div className="box box1">
              <div className="iconleft">
                {/* <img src={maintenance} alt="" /> */}
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="maintenance"
                    d="M11.844 11.1461L5.40798 4.71106L5.68598 4.43406C5.74057 4.37907 5.78164 4.31214 5.80594 4.23855C5.83023 4.16497 5.83709 4.08675 5.82598 4.01006L5.61698 2.54006C5.60744 2.47292 5.58436 2.40842 5.54911 2.35049C5.51387 2.29255 5.46721 2.24239 5.41198 2.20306L2.47098 0.103057C2.38935 0.0438865 2.29175 0.0107716 2.19098 0.00805664V0.0100566C2.12376 0.0087393 2.05697 0.0209899 1.9946 0.0460757C1.93223 0.0711615 1.87556 0.108567 1.82798 0.156057L0.145977 1.83606C0.0625281 1.9199 0.0115097 2.03062 0.00198895 2.14853C-0.00753183 2.26644 0.0250616 2.38391 0.0939768 2.48006L2.19398 5.42206C2.23309 5.47707 2.28293 5.52359 2.34051 5.55883C2.39808 5.59406 2.46219 5.61727 2.52898 5.62706L3.99998 5.83606C4.07698 5.8475 4.15559 5.8408 4.22955 5.81649C4.30351 5.79218 4.37077 5.75095 4.42598 5.69606L4.70098 5.41806L11.137 11.8541L11.844 11.1461ZM23.47 1.10206C23.638 1.11206 23.807 1.13506 23.976 1.13506L22.071 3.03906C22.0066 3.10561 21.9616 3.1884 21.9406 3.27858C21.9196 3.36876 21.9236 3.46294 21.952 3.55106L22.745 5.93006C22.794 6.07606 22.915 6.19706 23.062 6.24606L25.44 7.03906C25.616 7.09706 25.822 7.04906 25.952 6.91806L27.854 5.01606C27.845 6.04506 27.572 7.05606 26.825 7.80306C25.783 8.84306 24.319 9.17006 22.989 8.81806C22.9041 8.79672 22.8153 8.79757 22.7308 8.82051C22.6464 8.84345 22.5693 8.88772 22.507 8.94906L8.93898 22.5181C8.87781 22.5805 8.83373 22.6577 8.81097 22.7421C8.7882 22.8265 8.78752 22.9153 8.80898 23.0001C9.15998 24.3301 8.83398 25.7941 7.79298 26.8361C7.04398 27.5821 6.03498 27.8561 5.00598 27.8661L6.90798 25.9631C7.03798 25.8331 7.08798 25.6261 7.02898 25.4511L6.23598 23.0721C6.21088 22.9988 6.16936 22.9322 6.11459 22.8774C6.05982 22.8227 5.99325 22.7812 5.91998 22.7561L3.54098 21.9631C3.45268 21.9349 3.3584 21.9313 3.26821 21.9526C3.17802 21.9739 3.09533 22.0194 3.02898 22.0841L1.12498 23.9881C1.13298 22.9581 1.40598 21.9481 2.15498 21.1991C3.19598 20.1581 4.66098 19.8321 5.99198 20.1841C6.07651 20.205 6.16501 20.204 6.24904 20.1811C6.33306 20.1581 6.40981 20.1141 6.47198 20.0531L20.044 6.48406C20.1051 6.42159 20.1492 6.34446 20.172 6.26005C20.1947 6.17564 20.1954 6.0868 20.174 6.00206C19.823 4.67106 20.148 3.20706 21.19 2.16406C21.6841 1.66928 22.3003 1.31394 22.976 1.13406C23.137 1.09206 23.304 1.09106 23.472 1.10206H23.47ZM13.524 11.1641C13.641 11.1641 13.75 11.2021 13.853 11.2601L11.251 13.8611C11.1744 13.7333 11.1431 13.5835 11.1621 13.4358C11.1812 13.2881 11.2495 13.1511 11.356 13.0471L13.038 11.3651C13.1015 11.3009 13.1772 11.2502 13.2607 11.2158C13.3442 11.1815 13.4337 11.1642 13.524 11.1651V11.1641ZM18.597 14.2741L28.296 23.9711C28.3612 24.0343 28.4131 24.11 28.4486 24.1936C28.484 24.2773 28.5023 24.3672 28.5023 24.4581C28.5023 24.5489 28.484 24.6388 28.4486 24.7225C28.4131 24.8062 28.3612 24.8818 28.296 24.9451L24.935 28.3071C24.872 28.3725 24.7964 28.4246 24.7128 28.4602C24.6292 28.4958 24.5393 28.5141 24.4485 28.5141C24.3576 28.5141 24.2677 28.4958 24.1841 28.4602C24.1005 28.4246 24.025 28.3725 23.962 28.3071L14.262 18.6071L15.235 17.6351L24.935 27.3341L25.642 26.6271L15.942 16.9271L16.917 15.9531L26.617 25.6531L27.323 24.9451L17.624 15.2461L18.597 14.2741Z"
                    fill="#555862"
                  />
                </svg>
              </div>

              <div className="contentleft">
                <div className="headingleft">Domestic delivery</div>
                <div className="textleft">
                No matter where you’re shipping to, just book online and get it delivered 
                </div>
              </div>
            </div>
            <div className="box box2">
              <div className="iconleft">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="maintenance"
                    d="M11.844 11.1461L5.40798 4.71106L5.68598 4.43406C5.74057 4.37907 5.78164 4.31214 5.80594 4.23855C5.83023 4.16497 5.83709 4.08675 5.82598 4.01006L5.61698 2.54006C5.60744 2.47292 5.58436 2.40842 5.54911 2.35049C5.51387 2.29255 5.46721 2.24239 5.41198 2.20306L2.47098 0.103057C2.38935 0.0438865 2.29175 0.0107716 2.19098 0.00805664V0.0100566C2.12376 0.0087393 2.05697 0.0209899 1.9946 0.0460757C1.93223 0.0711615 1.87556 0.108567 1.82798 0.156057L0.145977 1.83606C0.0625281 1.9199 0.0115097 2.03062 0.00198895 2.14853C-0.00753183 2.26644 0.0250616 2.38391 0.0939768 2.48006L2.19398 5.42206C2.23309 5.47707 2.28293 5.52359 2.34051 5.55883C2.39808 5.59406 2.46219 5.61727 2.52898 5.62706L3.99998 5.83606C4.07698 5.8475 4.15559 5.8408 4.22955 5.81649C4.30351 5.79218 4.37077 5.75095 4.42598 5.69606L4.70098 5.41806L11.137 11.8541L11.844 11.1461ZM23.47 1.10206C23.638 1.11206 23.807 1.13506 23.976 1.13506L22.071 3.03906C22.0066 3.10561 21.9616 3.1884 21.9406 3.27858C21.9196 3.36876 21.9236 3.46294 21.952 3.55106L22.745 5.93006C22.794 6.07606 22.915 6.19706 23.062 6.24606L25.44 7.03906C25.616 7.09706 25.822 7.04906 25.952 6.91806L27.854 5.01606C27.845 6.04506 27.572 7.05606 26.825 7.80306C25.783 8.84306 24.319 9.17006 22.989 8.81806C22.9041 8.79672 22.8153 8.79757 22.7308 8.82051C22.6464 8.84345 22.5693 8.88772 22.507 8.94906L8.93898 22.5181C8.87781 22.5805 8.83373 22.6577 8.81097 22.7421C8.7882 22.8265 8.78752 22.9153 8.80898 23.0001C9.15998 24.3301 8.83398 25.7941 7.79298 26.8361C7.04398 27.5821 6.03498 27.8561 5.00598 27.8661L6.90798 25.9631C7.03798 25.8331 7.08798 25.6261 7.02898 25.4511L6.23598 23.0721C6.21088 22.9988 6.16936 22.9322 6.11459 22.8774C6.05982 22.8227 5.99325 22.7812 5.91998 22.7561L3.54098 21.9631C3.45268 21.9349 3.3584 21.9313 3.26821 21.9526C3.17802 21.9739 3.09533 22.0194 3.02898 22.0841L1.12498 23.9881C1.13298 22.9581 1.40598 21.9481 2.15498 21.1991C3.19598 20.1581 4.66098 19.8321 5.99198 20.1841C6.07651 20.205 6.16501 20.204 6.24904 20.1811C6.33306 20.1581 6.40981 20.1141 6.47198 20.0531L20.044 6.48406C20.1051 6.42159 20.1492 6.34446 20.172 6.26005C20.1947 6.17564 20.1954 6.0868 20.174 6.00206C19.823 4.67106 20.148 3.20706 21.19 2.16406C21.6841 1.66928 22.3003 1.31394 22.976 1.13406C23.137 1.09206 23.304 1.09106 23.472 1.10206H23.47ZM13.524 11.1641C13.641 11.1641 13.75 11.2021 13.853 11.2601L11.251 13.8611C11.1744 13.7333 11.1431 13.5835 11.1621 13.4358C11.1812 13.2881 11.2495 13.1511 11.356 13.0471L13.038 11.3651C13.1015 11.3009 13.1772 11.2502 13.2607 11.2158C13.3442 11.1815 13.4337 11.1642 13.524 11.1651V11.1641ZM18.597 14.2741L28.296 23.9711C28.3612 24.0343 28.4131 24.11 28.4486 24.1936C28.484 24.2773 28.5023 24.3672 28.5023 24.4581C28.5023 24.5489 28.484 24.6388 28.4486 24.7225C28.4131 24.8062 28.3612 24.8818 28.296 24.9451L24.935 28.3071C24.872 28.3725 24.7964 28.4246 24.7128 28.4602C24.6292 28.4958 24.5393 28.5141 24.4485 28.5141C24.3576 28.5141 24.2677 28.4958 24.1841 28.4602C24.1005 28.4246 24.025 28.3725 23.962 28.3071L14.262 18.6071L15.235 17.6351L24.935 27.3341L25.642 26.6271L15.942 16.9271L16.917 15.9531L26.617 25.6531L27.323 24.9451L17.624 15.2461L18.597 14.2741Z"
                    fill="#555862"
                  />
                </svg>
              </div>

              <div className="contentleft">
                <div className="headingleft">International delivery</div>
                <div className="textleft">
                  Lowest shipping rates to your overseas destination. 
                </div>
              </div>
            </div>

            <div className="box box3">
              <div className="iconleft">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="maintenance"
                    d="M11.844 11.1461L5.40798 4.71106L5.68598 4.43406C5.74057 4.37907 5.78164 4.31214 5.80594 4.23855C5.83023 4.16497 5.83709 4.08675 5.82598 4.01006L5.61698 2.54006C5.60744 2.47292 5.58436 2.40842 5.54911 2.35049C5.51387 2.29255 5.46721 2.24239 5.41198 2.20306L2.47098 0.103057C2.38935 0.0438865 2.29175 0.0107716 2.19098 0.00805664V0.0100566C2.12376 0.0087393 2.05697 0.0209899 1.9946 0.0460757C1.93223 0.0711615 1.87556 0.108567 1.82798 0.156057L0.145977 1.83606C0.0625281 1.9199 0.0115097 2.03062 0.00198895 2.14853C-0.00753183 2.26644 0.0250616 2.38391 0.0939768 2.48006L2.19398 5.42206C2.23309 5.47707 2.28293 5.52359 2.34051 5.55883C2.39808 5.59406 2.46219 5.61727 2.52898 5.62706L3.99998 5.83606C4.07698 5.8475 4.15559 5.8408 4.22955 5.81649C4.30351 5.79218 4.37077 5.75095 4.42598 5.69606L4.70098 5.41806L11.137 11.8541L11.844 11.1461ZM23.47 1.10206C23.638 1.11206 23.807 1.13506 23.976 1.13506L22.071 3.03906C22.0066 3.10561 21.9616 3.1884 21.9406 3.27858C21.9196 3.36876 21.9236 3.46294 21.952 3.55106L22.745 5.93006C22.794 6.07606 22.915 6.19706 23.062 6.24606L25.44 7.03906C25.616 7.09706 25.822 7.04906 25.952 6.91806L27.854 5.01606C27.845 6.04506 27.572 7.05606 26.825 7.80306C25.783 8.84306 24.319 9.17006 22.989 8.81806C22.9041 8.79672 22.8153 8.79757 22.7308 8.82051C22.6464 8.84345 22.5693 8.88772 22.507 8.94906L8.93898 22.5181C8.87781 22.5805 8.83373 22.6577 8.81097 22.7421C8.7882 22.8265 8.78752 22.9153 8.80898 23.0001C9.15998 24.3301 8.83398 25.7941 7.79298 26.8361C7.04398 27.5821 6.03498 27.8561 5.00598 27.8661L6.90798 25.9631C7.03798 25.8331 7.08798 25.6261 7.02898 25.4511L6.23598 23.0721C6.21088 22.9988 6.16936 22.9322 6.11459 22.8774C6.05982 22.8227 5.99325 22.7812 5.91998 22.7561L3.54098 21.9631C3.45268 21.9349 3.3584 21.9313 3.26821 21.9526C3.17802 21.9739 3.09533 22.0194 3.02898 22.0841L1.12498 23.9881C1.13298 22.9581 1.40598 21.9481 2.15498 21.1991C3.19598 20.1581 4.66098 19.8321 5.99198 20.1841C6.07651 20.205 6.16501 20.204 6.24904 20.1811C6.33306 20.1581 6.40981 20.1141 6.47198 20.0531L20.044 6.48406C20.1051 6.42159 20.1492 6.34446 20.172 6.26005C20.1947 6.17564 20.1954 6.0868 20.174 6.00206C19.823 4.67106 20.148 3.20706 21.19 2.16406C21.6841 1.66928 22.3003 1.31394 22.976 1.13406C23.137 1.09206 23.304 1.09106 23.472 1.10206H23.47ZM13.524 11.1641C13.641 11.1641 13.75 11.2021 13.853 11.2601L11.251 13.8611C11.1744 13.7333 11.1431 13.5835 11.1621 13.4358C11.1812 13.2881 11.2495 13.1511 11.356 13.0471L13.038 11.3651C13.1015 11.3009 13.1772 11.2502 13.2607 11.2158C13.3442 11.1815 13.4337 11.1642 13.524 11.1651V11.1641ZM18.597 14.2741L28.296 23.9711C28.3612 24.0343 28.4131 24.11 28.4486 24.1936C28.484 24.2773 28.5023 24.3672 28.5023 24.4581C28.5023 24.5489 28.484 24.6388 28.4486 24.7225C28.4131 24.8062 28.3612 24.8818 28.296 24.9451L24.935 28.3071C24.872 28.3725 24.7964 28.4246 24.7128 28.4602C24.6292 28.4958 24.5393 28.5141 24.4485 28.5141C24.3576 28.5141 24.2677 28.4958 24.1841 28.4602C24.1005 28.4246 24.025 28.3725 23.962 28.3071L14.262 18.6071L15.235 17.6351L24.935 27.3341L25.642 26.6271L15.942 16.9271L16.917 15.9531L26.617 25.6531L27.323 24.9451L17.624 15.2461L18.597 14.2741Z"
                    fill="#555862"
                  />
                </svg>
              </div>

              <div className="contentleft">
                <div className="headingleft">Handy tools</div>
                <div className="textleft">
                From weighing a parcel, calculating delivery rates, custom packaging, & parcel tracking, we have it all!
                </div>
              </div>
            </div>
          </div>

          {/* Ellipse Image */}
          <div className="col col2"></div>

          <div className="col col3">
            <div className="box box1">
              <div className="contentright">
                <div className="headingright">Ecommerce Integrations</div>
                <div className="textright">
                You may easily integrate your online store and store your products with us.
                </div>
              </div>

              <div className="iconright">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="maintenance"
                    d="M11.844 11.1461L5.40798 4.71106L5.68598 4.43406C5.74057 4.37907 5.78164 4.31214 5.80594 4.23855C5.83023 4.16497 5.83709 4.08675 5.82598 4.01006L5.61698 2.54006C5.60744 2.47292 5.58436 2.40842 5.54911 2.35049C5.51387 2.29255 5.46721 2.24239 5.41198 2.20306L2.47098 0.103057C2.38935 0.0438865 2.29175 0.0107716 2.19098 0.00805664V0.0100566C2.12376 0.0087393 2.05697 0.0209899 1.9946 0.0460757C1.93223 0.0711615 1.87556 0.108567 1.82798 0.156057L0.145977 1.83606C0.0625281 1.9199 0.0115097 2.03062 0.00198895 2.14853C-0.00753183 2.26644 0.0250616 2.38391 0.0939768 2.48006L2.19398 5.42206C2.23309 5.47707 2.28293 5.52359 2.34051 5.55883C2.39808 5.59406 2.46219 5.61727 2.52898 5.62706L3.99998 5.83606C4.07698 5.8475 4.15559 5.8408 4.22955 5.81649C4.30351 5.79218 4.37077 5.75095 4.42598 5.69606L4.70098 5.41806L11.137 11.8541L11.844 11.1461ZM23.47 1.10206C23.638 1.11206 23.807 1.13506 23.976 1.13506L22.071 3.03906C22.0066 3.10561 21.9616 3.1884 21.9406 3.27858C21.9196 3.36876 21.9236 3.46294 21.952 3.55106L22.745 5.93006C22.794 6.07606 22.915 6.19706 23.062 6.24606L25.44 7.03906C25.616 7.09706 25.822 7.04906 25.952 6.91806L27.854 5.01606C27.845 6.04506 27.572 7.05606 26.825 7.80306C25.783 8.84306 24.319 9.17006 22.989 8.81806C22.9041 8.79672 22.8153 8.79757 22.7308 8.82051C22.6464 8.84345 22.5693 8.88772 22.507 8.94906L8.93898 22.5181C8.87781 22.5805 8.83373 22.6577 8.81097 22.7421C8.7882 22.8265 8.78752 22.9153 8.80898 23.0001C9.15998 24.3301 8.83398 25.7941 7.79298 26.8361C7.04398 27.5821 6.03498 27.8561 5.00598 27.8661L6.90798 25.9631C7.03798 25.8331 7.08798 25.6261 7.02898 25.4511L6.23598 23.0721C6.21088 22.9988 6.16936 22.9322 6.11459 22.8774C6.05982 22.8227 5.99325 22.7812 5.91998 22.7561L3.54098 21.9631C3.45268 21.9349 3.3584 21.9313 3.26821 21.9526C3.17802 21.9739 3.09533 22.0194 3.02898 22.0841L1.12498 23.9881C1.13298 22.9581 1.40598 21.9481 2.15498 21.1991C3.19598 20.1581 4.66098 19.8321 5.99198 20.1841C6.07651 20.205 6.16501 20.204 6.24904 20.1811C6.33306 20.1581 6.40981 20.1141 6.47198 20.0531L20.044 6.48406C20.1051 6.42159 20.1492 6.34446 20.172 6.26005C20.1947 6.17564 20.1954 6.0868 20.174 6.00206C19.823 4.67106 20.148 3.20706 21.19 2.16406C21.6841 1.66928 22.3003 1.31394 22.976 1.13406C23.137 1.09206 23.304 1.09106 23.472 1.10206H23.47ZM13.524 11.1641C13.641 11.1641 13.75 11.2021 13.853 11.2601L11.251 13.8611C11.1744 13.7333 11.1431 13.5835 11.1621 13.4358C11.1812 13.2881 11.2495 13.1511 11.356 13.0471L13.038 11.3651C13.1015 11.3009 13.1772 11.2502 13.2607 11.2158C13.3442 11.1815 13.4337 11.1642 13.524 11.1651V11.1641ZM18.597 14.2741L28.296 23.9711C28.3612 24.0343 28.4131 24.11 28.4486 24.1936C28.484 24.2773 28.5023 24.3672 28.5023 24.4581C28.5023 24.5489 28.484 24.6388 28.4486 24.7225C28.4131 24.8062 28.3612 24.8818 28.296 24.9451L24.935 28.3071C24.872 28.3725 24.7964 28.4246 24.7128 28.4602C24.6292 28.4958 24.5393 28.5141 24.4485 28.5141C24.3576 28.5141 24.2677 28.4958 24.1841 28.4602C24.1005 28.4246 24.025 28.3725 23.962 28.3071L14.262 18.6071L15.235 17.6351L24.935 27.3341L25.642 26.6271L15.942 16.9271L16.917 15.9531L26.617 25.6531L27.323 24.9451L17.624 15.2461L18.597 14.2741Z"
                    fill="#555862"
                  />
                </svg>
              </div>
            </div>

            <div className="box box2">
              <div className="contentright">
                <div className="headingright">Bulk Parcels</div>
                <div className="textright">
                Sellers with large volume of shipments may easily upload orders
                </div>
              </div>

              <div className="iconright">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="maintenance"
                    d="M11.844 11.1461L5.40798 4.71106L5.68598 4.43406C5.74057 4.37907 5.78164 4.31214 5.80594 4.23855C5.83023 4.16497 5.83709 4.08675 5.82598 4.01006L5.61698 2.54006C5.60744 2.47292 5.58436 2.40842 5.54911 2.35049C5.51387 2.29255 5.46721 2.24239 5.41198 2.20306L2.47098 0.103057C2.38935 0.0438865 2.29175 0.0107716 2.19098 0.00805664V0.0100566C2.12376 0.0087393 2.05697 0.0209899 1.9946 0.0460757C1.93223 0.0711615 1.87556 0.108567 1.82798 0.156057L0.145977 1.83606C0.0625281 1.9199 0.0115097 2.03062 0.00198895 2.14853C-0.00753183 2.26644 0.0250616 2.38391 0.0939768 2.48006L2.19398 5.42206C2.23309 5.47707 2.28293 5.52359 2.34051 5.55883C2.39808 5.59406 2.46219 5.61727 2.52898 5.62706L3.99998 5.83606C4.07698 5.8475 4.15559 5.8408 4.22955 5.81649C4.30351 5.79218 4.37077 5.75095 4.42598 5.69606L4.70098 5.41806L11.137 11.8541L11.844 11.1461ZM23.47 1.10206C23.638 1.11206 23.807 1.13506 23.976 1.13506L22.071 3.03906C22.0066 3.10561 21.9616 3.1884 21.9406 3.27858C21.9196 3.36876 21.9236 3.46294 21.952 3.55106L22.745 5.93006C22.794 6.07606 22.915 6.19706 23.062 6.24606L25.44 7.03906C25.616 7.09706 25.822 7.04906 25.952 6.91806L27.854 5.01606C27.845 6.04506 27.572 7.05606 26.825 7.80306C25.783 8.84306 24.319 9.17006 22.989 8.81806C22.9041 8.79672 22.8153 8.79757 22.7308 8.82051C22.6464 8.84345 22.5693 8.88772 22.507 8.94906L8.93898 22.5181C8.87781 22.5805 8.83373 22.6577 8.81097 22.7421C8.7882 22.8265 8.78752 22.9153 8.80898 23.0001C9.15998 24.3301 8.83398 25.7941 7.79298 26.8361C7.04398 27.5821 6.03498 27.8561 5.00598 27.8661L6.90798 25.9631C7.03798 25.8331 7.08798 25.6261 7.02898 25.4511L6.23598 23.0721C6.21088 22.9988 6.16936 22.9322 6.11459 22.8774C6.05982 22.8227 5.99325 22.7812 5.91998 22.7561L3.54098 21.9631C3.45268 21.9349 3.3584 21.9313 3.26821 21.9526C3.17802 21.9739 3.09533 22.0194 3.02898 22.0841L1.12498 23.9881C1.13298 22.9581 1.40598 21.9481 2.15498 21.1991C3.19598 20.1581 4.66098 19.8321 5.99198 20.1841C6.07651 20.205 6.16501 20.204 6.24904 20.1811C6.33306 20.1581 6.40981 20.1141 6.47198 20.0531L20.044 6.48406C20.1051 6.42159 20.1492 6.34446 20.172 6.26005C20.1947 6.17564 20.1954 6.0868 20.174 6.00206C19.823 4.67106 20.148 3.20706 21.19 2.16406C21.6841 1.66928 22.3003 1.31394 22.976 1.13406C23.137 1.09206 23.304 1.09106 23.472 1.10206H23.47ZM13.524 11.1641C13.641 11.1641 13.75 11.2021 13.853 11.2601L11.251 13.8611C11.1744 13.7333 11.1431 13.5835 11.1621 13.4358C11.1812 13.2881 11.2495 13.1511 11.356 13.0471L13.038 11.3651C13.1015 11.3009 13.1772 11.2502 13.2607 11.2158C13.3442 11.1815 13.4337 11.1642 13.524 11.1651V11.1641ZM18.597 14.2741L28.296 23.9711C28.3612 24.0343 28.4131 24.11 28.4486 24.1936C28.484 24.2773 28.5023 24.3672 28.5023 24.4581C28.5023 24.5489 28.484 24.6388 28.4486 24.7225C28.4131 24.8062 28.3612 24.8818 28.296 24.9451L24.935 28.3071C24.872 28.3725 24.7964 28.4246 24.7128 28.4602C24.6292 28.4958 24.5393 28.5141 24.4485 28.5141C24.3576 28.5141 24.2677 28.4958 24.1841 28.4602C24.1005 28.4246 24.025 28.3725 23.962 28.3071L14.262 18.6071L15.235 17.6351L24.935 27.3341L25.642 26.6271L15.942 16.9271L16.917 15.9531L26.617 25.6531L27.323 24.9451L17.624 15.2461L18.597 14.2741Z"
                    fill="#555862"
                  />
                </svg>
              </div>
            </div>

            <div className="box box3">
              <div className="contentright">
                <div className="headingright">24*7 support</div>
                <div className="textright">
                We ensure to support your business. Our support team of freight experts is on-call 24 hours a day.
                </div>
              </div>

              <div className="iconright">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="maintenance"
                    d="M11.844 11.1461L5.40798 4.71106L5.68598 4.43406C5.74057 4.37907 5.78164 4.31214 5.80594 4.23855C5.83023 4.16497 5.83709 4.08675 5.82598 4.01006L5.61698 2.54006C5.60744 2.47292 5.58436 2.40842 5.54911 2.35049C5.51387 2.29255 5.46721 2.24239 5.41198 2.20306L2.47098 0.103057C2.38935 0.0438865 2.29175 0.0107716 2.19098 0.00805664V0.0100566C2.12376 0.0087393 2.05697 0.0209899 1.9946 0.0460757C1.93223 0.0711615 1.87556 0.108567 1.82798 0.156057L0.145977 1.83606C0.0625281 1.9199 0.0115097 2.03062 0.00198895 2.14853C-0.00753183 2.26644 0.0250616 2.38391 0.0939768 2.48006L2.19398 5.42206C2.23309 5.47707 2.28293 5.52359 2.34051 5.55883C2.39808 5.59406 2.46219 5.61727 2.52898 5.62706L3.99998 5.83606C4.07698 5.8475 4.15559 5.8408 4.22955 5.81649C4.30351 5.79218 4.37077 5.75095 4.42598 5.69606L4.70098 5.41806L11.137 11.8541L11.844 11.1461ZM23.47 1.10206C23.638 1.11206 23.807 1.13506 23.976 1.13506L22.071 3.03906C22.0066 3.10561 21.9616 3.1884 21.9406 3.27858C21.9196 3.36876 21.9236 3.46294 21.952 3.55106L22.745 5.93006C22.794 6.07606 22.915 6.19706 23.062 6.24606L25.44 7.03906C25.616 7.09706 25.822 7.04906 25.952 6.91806L27.854 5.01606C27.845 6.04506 27.572 7.05606 26.825 7.80306C25.783 8.84306 24.319 9.17006 22.989 8.81806C22.9041 8.79672 22.8153 8.79757 22.7308 8.82051C22.6464 8.84345 22.5693 8.88772 22.507 8.94906L8.93898 22.5181C8.87781 22.5805 8.83373 22.6577 8.81097 22.7421C8.7882 22.8265 8.78752 22.9153 8.80898 23.0001C9.15998 24.3301 8.83398 25.7941 7.79298 26.8361C7.04398 27.5821 6.03498 27.8561 5.00598 27.8661L6.90798 25.9631C7.03798 25.8331 7.08798 25.6261 7.02898 25.4511L6.23598 23.0721C6.21088 22.9988 6.16936 22.9322 6.11459 22.8774C6.05982 22.8227 5.99325 22.7812 5.91998 22.7561L3.54098 21.9631C3.45268 21.9349 3.3584 21.9313 3.26821 21.9526C3.17802 21.9739 3.09533 22.0194 3.02898 22.0841L1.12498 23.9881C1.13298 22.9581 1.40598 21.9481 2.15498 21.1991C3.19598 20.1581 4.66098 19.8321 5.99198 20.1841C6.07651 20.205 6.16501 20.204 6.24904 20.1811C6.33306 20.1581 6.40981 20.1141 6.47198 20.0531L20.044 6.48406C20.1051 6.42159 20.1492 6.34446 20.172 6.26005C20.1947 6.17564 20.1954 6.0868 20.174 6.00206C19.823 4.67106 20.148 3.20706 21.19 2.16406C21.6841 1.66928 22.3003 1.31394 22.976 1.13406C23.137 1.09206 23.304 1.09106 23.472 1.10206H23.47ZM13.524 11.1641C13.641 11.1641 13.75 11.2021 13.853 11.2601L11.251 13.8611C11.1744 13.7333 11.1431 13.5835 11.1621 13.4358C11.1812 13.2881 11.2495 13.1511 11.356 13.0471L13.038 11.3651C13.1015 11.3009 13.1772 11.2502 13.2607 11.2158C13.3442 11.1815 13.4337 11.1642 13.524 11.1651V11.1641ZM18.597 14.2741L28.296 23.9711C28.3612 24.0343 28.4131 24.11 28.4486 24.1936C28.484 24.2773 28.5023 24.3672 28.5023 24.4581C28.5023 24.5489 28.484 24.6388 28.4486 24.7225C28.4131 24.8062 28.3612 24.8818 28.296 24.9451L24.935 28.3071C24.872 28.3725 24.7964 28.4246 24.7128 28.4602C24.6292 28.4958 24.5393 28.5141 24.4485 28.5141C24.3576 28.5141 24.2677 28.4958 24.1841 28.4602C24.1005 28.4246 24.025 28.3725 23.962 28.3071L14.262 18.6071L15.235 17.6351L24.935 27.3341L25.642 26.6271L15.942 16.9271L16.917 15.9531L26.617 25.6531L27.323 24.9451L17.624 15.2461L18.597 14.2741Z"
                    fill="#555862"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreCapabilities;
