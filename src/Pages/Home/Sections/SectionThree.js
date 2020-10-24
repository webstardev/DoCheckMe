import React from "react";

import Section3Bg from "../../../Assets/img/triangle-bg.png";
import AboutUsIcon1Img from "../../../Assets/img/about-us-icon1.png";
import AboutUsIcon2Img from "../../../Assets/img/about-us-icon2.png";
import AboutUsIcon3Img from "../../../Assets/img/about-us-icon3.png";

const SectionThree = () => {
  return (
    <div class="page-section pt-5" id="about-us">
      <div class="section-bg"></div>
      <div class="container">
        <div class="row">
          <div col="xs-12">
            <h1 class="title text-center mt-5 wow fadeInUp">About Us</h1>
            <p class="description text-center wow fadeInUp mb-5">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <div class="col-sm-12 col-lg-4 py-3 wow zoomIn">
            <div class="card-page">
              <div class="circle">
                <img src={AboutUsIcon1Img} alt="" />
              </div>
              <h5 class="card-title text-center mt-2 mb-3">EXAMPLE TEXT</h5>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-lg-4 py-3 wow zoomIn">
            <div class="card-page purple">
              <div class="circle white">
                <img src={AboutUsIcon2Img} alt="" />
              </div>
              <h5 class="card-title text-center mt-2 mb-3">EXAMPLE TEXT</h5>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-lg-4 py-3 wow zoomIn">
            <div class="card-page">
              <div class="circle">
                <img src={AboutUsIcon3Img} alt="" />
              </div>
              <h5 class="card-title text-center mt-2 mb-3">EXAMPLE TEXT</h5>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
