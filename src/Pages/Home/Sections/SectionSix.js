import React from "react";

import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import HeroBg from "../../../Assets/img/section6-bg.png";
import AvatarImg from "../../../Assets/img/avatar.jpg";

const SectionSix = () => {
  return (
    <ComponentContainer
      id="section-four"
      className="page-section py-5"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <StyledContainer className="py-5">
        <Title className="wow zoomIn">Our Client</Title>
        <Row>
          <Col
            md={6}
            ms={6}
            xs={12}
            className="user-col wow zoomIn"
            data-wow-delay="100ms"
          >
            <UserInfo>
              <div className="user-avatar">
                <div
                  className="img-div"
                  style={{ backgroundImage: `url(${AvatarImg})` }}
                  alt="avatar"
                ></div>
              </div>
              <div className="avatar-content">
                <h5
                  style={{ fontWeight: 800, color: "#242f51" }}
                  className="mt-1 mb-1"
                >
                  ZOLTAN NEMETH
                </h5>
                <h5 style={{ color: "#929396", margin: 0 }}>
                  CEO of Pixler Lab
                </h5>
              </div>
            </UserInfo>
          </Col>
          <Col
            md={6}
            ms={6}
            xs={12}
            className="user-col wow zoomIn"
            data-wow-delay="200ms"
          >
            <UserInfo>
              <div className="user-avatar">
                <div
                  className="img-div"
                  style={{ backgroundImage: `url(${AvatarImg})` }}
                  alt="avatar"
                ></div>
              </div>
              <div className="avatar-content">
                <h5
                  style={{ fontWeight: 800, color: "#242f51" }}
                  className="mt-1 mb-1"
                >
                  ZOLTAN NEMETH
                </h5>
                <h5 style={{ color: "#929396", margin: 0 }}>
                  CEO of Pixler Lab
                </h5>
              </div>
            </UserInfo>
          </Col>
          <Col
            md={6}
            ms={6}
            xs={12}
            className="offset-md-3 user-col wow zoomIn"
            data-wow-delay="400ms"
          >
            <UserInfo>
              <div className="user-avatar">
                <div
                  className="img-div"
                  style={{ backgroundImage: `url(${AvatarImg})` }}
                  alt="avatar"
                ></div>
              </div>
              <div className="avatar-content">
                <h5
                  style={{ fontWeight: 800, color: "#242f51" }}
                  className="mt-1 mb-1"
                >
                  ZOLTAN NEMETH
                </h5>
                <h5 style={{ color: "#929396", margin: 0 }}>
                  CEO of Pixler Lab
                </h5>
              </div>
            </UserInfo>
          </Col>
          <Col
            md={6}
            ms={6}
            xs={12}
            className="user-col wow zoomIn"
            data-wow-delay="300ms"
          >
            <UserInfo>
              <div className="user-avatar">
                <div
                  className="img-div"
                  style={{ backgroundImage: `url(${AvatarImg})` }}
                  alt="avatar"
                ></div>
              </div>
              <div className="avatar-content">
                <h5
                  style={{ fontWeight: 800, color: "#242f51" }}
                  className="mt-1 mb-1"
                >
                  ZOLTAN NEMETH
                </h5>
                <h5 style={{ color: "#929396", margin: 0 }}>
                  CEO of Pixler Lab
                </h5>
              </div>
            </UserInfo>
          </Col>
          <Col
            md={6}
            ms={6}
            xs={12}
            className="user-col wow zoomIn"
            data-wow-delay="400ms"
          >
            <UserInfo>
              <div className="user-avatar">
                <div
                  className="img-div"
                  style={{ backgroundImage: `url(${AvatarImg})` }}
                  alt="avatar"
                ></div>
              </div>
              <div className="avatar-content">
                <h5
                  style={{ fontWeight: 800, color: "#242f51" }}
                  className="mt-1 mb-1"
                >
                  ZOLTAN NEMETH
                </h5>
                <h5 style={{ color: "#929396", margin: 0 }}>
                  CEO of Pixler Lab
                </h5>
              </div>
            </UserInfo>
          </Col>
        </Row>
      </StyledContainer>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0;

  @media (max-width: 768px) {
    background-size: 200%;
  }
`;

const StyledContainer = styled(Container)`
  .user-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 767px) {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
`;

const Title = styled.h1`
  font-size: 41px;
  color: #671afe !important;
  font-weight: 800;
  margin-top: 42px;
  text-align: center;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

const UserInfo = styled.div`
  width: auto;
  height: 102px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  .user-avatar {
    width: 102px;
    height: 102px;
    border-radius: 51px;
    border: 1px solid #671afe;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .img-div {
      width: 98px;
      height: 98px;
      border: 3px solid white;
      border-radius: 50px;
    }
  }
  .avatar-content {
    z-index: 1;
    margin-left: -13px;
    border: 1px solid #671afe;
    padding: 5px 15px 5px 19px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export default SectionSix;
