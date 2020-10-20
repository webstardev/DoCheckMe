import React from "react";

import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import HeroBg from "../../../Assets/img/section6-bg.png";
import AvatarImg from "../../../Assets/img/avatar.jpg";

const SectionSix = () => {
  return (
    <ComponentContainer
      id="section-four"
      className="page-section"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <StyledContainer>
        <Title className="wow zoomIn" data-wow-delay="100ms">
          Our Client
        </Title>
        <Row>
          <Col md={6} ms={6} xs={12}>
            <UserInfo>
              <div
                className="img-div"
                style={{ backgroundImage: `url(${AvatarImg})` }}
                alt="avatar"
              ></div>
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
`;

const StyledContainer = styled(Container)``;

const Title = styled.h1`
  font-size: 41px;
  color: #671afe !important;
  font-weight: 800;
  margin-top: 42px;
  text-align: center;
`;

const UserInfo = styled.div`
  .user-avatar {
    width: 102px;
    height: 102px;
    border: 1px solid #671afe;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-div {
      border: 5px solid white;
      border-radius: 41px;
    }
  }
`;

export default SectionSix;
