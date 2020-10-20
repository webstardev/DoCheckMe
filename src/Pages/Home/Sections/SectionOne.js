import React from "react";

import AppLogoImg from "../../../Assets/img/logo.png";

const SectionOne = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-floating">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={AppLogoImg} alt="" width="240" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-lg-5 mt-3 mt-lg-0">
            <li className="nav-item dropdown active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How it Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Feature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Client
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Video
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SectionOne;
