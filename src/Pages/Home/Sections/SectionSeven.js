import React from "react";

import styled from "styled-components";
import Carousel from "react-multi-carousel";
import VideoImg1 from "../../../Assets/img/video-back1.jpg";
import VideoImg2 from "../../../Assets/img/video-back2.jpg";
import VideoImg3 from "../../../Assets/img/video-back3.jpg";
import "react-multi-carousel/lib/styles.css";

const SectionSeven = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <ComponentContainer id="section-seven" className="page-section">
      <div className="container">
        <Carousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside
          infinite={true}
          transitionDuration={500}
          arrows
        >
          <HomeCarousel>
            <img src={VideoImg1} alt="carousel1" />
            <div className="content">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </HomeCarousel>
          <HomeCarousel>
            <img src={VideoImg2} alt="carousel1" />
            <div className="content">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </HomeCarousel>
          <HomeCarousel>
            <img src={VideoImg3} alt="carousel1" />
            <div className="content">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </HomeCarousel>
        </Carousel>
      </div>
    </ComponentContainer>
  );
};

export const ComponentContainer = styled.div`
  .react-multi-carousel-list {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const HomeCarousel = styled.div`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.43);
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
  img {
    width: 100%;
  }
  .content {
    padding: 20px 15px;
    h3 {
      color: #000 !important;
      font-size: 22px;
    }

    p {
      color: #000 !important;
      font-size: 10px;
      margin: 0;
    }
  }
`;

export default SectionSeven;
