import React from "react";

import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Section4BgImg from "../../../Assets/img/section4-bg.png";

const SectionFour = () => {
  return (
    <ComponentContainer id="section-four" className="page-section">
      <StyledContainer>
        <Row>
          <Col md={7} sm={12} className="left-panel">
            <img
              className="section3-bg wow zoomIn"
              src={Section4BgImg}
              alt="section3-bg"
            />
          </Col>
          <Col md={5} sm={12} className="right-panel">
            <Title className="wow zoomIn" data-wow-delay="100ms">
              How It is Work
            </Title>
            <Description className="wow zoomIn" data-wow-delay="200ms">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
              viverra maecenas accumsan lacus vel facilisis.
            </Description>
          </Col>
        </Row>
      </StyledContainer>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  padding-bottom: 0;
`;

const StyledContainer = styled(Container)`
  .left-panel {
    @media (max-width: 992px) {
      flex: 0 0 100%;
      max-width: 100%;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
  .right-panel {
    @media (max-width: 992px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  .section3-bg {
    width: 966px;
    margin-left: -330px;
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

export default SectionFour;
