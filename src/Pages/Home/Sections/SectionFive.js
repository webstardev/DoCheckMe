import React from "react";

import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import HeroBgImg from "../../../Assets/img/sectoin5-bg.png";
import SectionIcon1 from "../../../Assets/img/section5-icon1.png";
import SectionIcon2 from "../../../Assets/img/section5-icon2.png";
import SectionIcon3 from "../../../Assets/img/section5-icon3.png";

const SectionFive = () => {
  return (
    <ComponentContainer id="section-four" className="page-section">
      <StyledContainer>
        <Row>
          <Col md={5} sm={12} className="left-panel">
            <Title className="wow zoomIn">Featured USers</Title>
            <Description className="wow zoomIn" data-wow-delay="100ms">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </Description>
            <Content className="mt-5">
              <div className="item-div mb-4 wow zoomIn" data-wow-delay="200ms">
                <div
                  className="icon-div"
                  style={{ backgroundImage: `url(${SectionIcon1})` }}
                ></div>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </Description>
              </div>
              <div className="item-div mb-4 wow zoomIn" data-wow-delay="400ms">
                <div
                  className="icon-div"
                  style={{ backgroundImage: `url(${SectionIcon2})` }}
                ></div>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </Description>
              </div>
              <div className="item-div mb-5 wow zoomIn" data-wow-delay="500ms">
                <div
                  className="icon-div"
                  style={{ backgroundImage: `url(${SectionIcon3})` }}
                ></div>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </Description>
              </div>
              <button
                className="btn-learnmore wow zoomIn"
                data-wow-delay="600ms"
              >
                Learn More
              </button>
            </Content>
          </Col>
          <Col md={7} sm={12} className="right-panel">
            <img
              className="hero-bg wow zoomIn"
              src={HeroBgImg}
              alt="section5 bg"
              data-wow-delay="700ms"
            />
          </Col>
        </Row>
      </StyledContainer>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  padding-top: 0;
`;

const StyledContainer = styled(Container)`
  .left-panel {
    padding-top: 200px;
    @media (max-width: 992px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    @media (max-width: 768px) {
      padding-top: 50px;
    }
  }
  .right-panel {
    @media (max-width: 992px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }
  .hero-bg {
    width: 966px;
    @media (max-width: 1559px) {
      margin-left: -150px;
      width: 765px;
      min-width: auto;
    }

    @media (max-width: 992px) {
      position: relative;
      margin: 0 auto;
      width: 100%;
    }
  }
`;
const Title = styled.h1`
  font-size: 41px;
  color: #595cef !important;
  font-weight: 800;
  margin-top: 42px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #7f7f7f;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  .item-div {
    display: flex;
    .icon-div {
      width: 70px;
      height: 70px;
      flex: 0 0 70px;
      background-position: center center;
      background-repeat: no-repeat;
      margin: 0 12px 0 0;
    }
  }

  .btn-learnmore {
    width: 165px;
    height: 58px;
    border-radius: 29px;
    color: white;
    border: none;
    outline: none;
    box-shadow: none;
    background-color: #2500f9;
    @media (max-width: 768px) {
      align-self: center;
    }
  }
`;

export default SectionFive;
