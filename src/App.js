import React from "react";
import "./App.css";

import BgHeroImg from "./Assets/img/bg_hero_1.png";
import AppPreviewImg from "./Assets/img/app_preview_1.png";
import PatterSvg1 from "./Assets/img/pattern_1.svg";
import Preview3Img from "./Assets/img/app_preview_3.png";

import FaceBookIconImg from "./Assets/img/social-facebook-icon.png";
import TwitterIconImg from "./Assets/img/social-twitter-icon.png";
import InstagramIconImg from "./Assets/img/social-instagram-icon.png";
import WhatsAppIconImg from "./Assets/img/social-whatsapp-icon.png";
import GooglePluskIconImg from "./Assets/img/social-googleplus-icon.png";
import YoutubeIconImg from "./Assets/img/social-youtube-icon.png";

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light navbar-floating">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../assets/img/logo.png" alt="" width="240" />
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

      <div className="page-hero-section bg-image hero-home-1">
        <img src={BgHeroImg} className="bg_hero_1" alt="bg_hero_1" />
        <div className="hero-caption pt-5">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 wow fadeInUp">
                <h1 className="mb-1">DOCHECKME</h1>
                <h1 className="mb-1" style={{ fontWeight: 800 }}>
                  DOCHECKME
                </h1>
                <p className="mb-4">
                  LOREM IPSM DOLOR SIT
                  <br />
                </p>
                <div className="input-box">
                  <input placeholder="Text Here / Input text" />
                  <button>GO</button>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                <div className="img-place mobile-preview floating-animate">
                  <img src={AppPreviewImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section mt-5" id="about-us">
        <div className="container">
          <div className="row">
            <div col="xs-12">
              <h1 className="title text-center mt-5 wow fadeInUp">About Us</h1>
              <p className="description text-center wow fadeInUp mb-5">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
            <div className="col-sm-12 col-lg-4 py-3 wow zoomIn">
              <div className="card-page">
                <div className="circle">
                  <img src="../assets/img/about-us-icon1.png" alt="" />
                </div>
                <h5 className="card-title text-center mt-2 mb-3">
                  EXAMPLE TEXT
                </h5>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 py-3 wow zoomIn">
              <div className="card-page purple">
                <div className="circle white">
                  <img src="../assets/img/about-us-icon2.png" alt="" />
                </div>
                <h5 className="card-title text-center mt-2 mb-3">
                  EXAMPLE TEXT
                </h5>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 py-3 wow zoomIn">
              <div className="card-page">
                <div className="circle">
                  <img src="../assets/img/about-us-icon3.png" alt="" />
                </div>
                <h5 className="card-title text-center mt-2 mb-3">
                  EXAMPLE TEXT
                </h5>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="position-realive bg-image"
        style={{ backgroundImage: { PatterSvg1 } }}
      >
        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 py-3">
                <div className="img-place mobile-preview shadow wow zoomIn">
                  <img src="../assets/img/app_preview_2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 py-3 mt-lg-5">
                <div className="iconic-list">
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                      <span className="mai-cube"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>Powerful Features</h5>
                      <p className="fs-small">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore
                      </p>
                    </div>
                  </div>
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-info fg-white rounded-circle">
                      <span className="mai-shield"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>Fully Secured</h5>
                      <p className="fs-small">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore
                      </p>
                    </div>
                  </div>
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                      <span className="mai-desktop-outline"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>Easy Monitoring</h5>
                      <p className="fs-small">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
                <h1 className="mb-4">Ecommerce business opperate easilly</h1>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quos, molestiae, perspiciatis laboriosam quia placeat
                  recusandae repudiandae corrupti similique delectus, aliquam
                  commodi possimus eveniet optio magnam quis vel. Reiciendis,
                  fuga excepturi.
                </p>
                <a href="#" className="btn btn-outline-primary rounded-pill">
                  How it works
                </a>
              </div>
              <div className="col-lg-5 py-3">
                <div className="img-place mobile-preview shadow wow zoomIn">
                  <img src={Preview3Img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section bg-dark fg-white">
        <div className="container">
          <h1 className="text-center">Why Choose Mobster</h1>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-3 py-3">
              <div className="card card-body border-0 bg-transparent text-center wow zoomIn">
                <div className="mb-3">
                  <img src="../assets/img/icons/rocket.svg" alt="" />
                </div>
                <p className="fs-large">Very Fast</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="200ms"
              >
                <div className="mb-3">
                  <img src="../assets/img/icons/testimony.svg" alt="" />
                </div>
                <p className="fs-large">Happy Client</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="400ms"
              >
                <div className="mb-3">
                  <img src="../assets/img/icons/promotion.svg" alt="" />
                </div>
                <p className="fs-large">Free Ads</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="600ms"
              >
                <div className="mb-3">
                  <img src="../assets/img/icons/coins.svg" alt="" />
                </div>
                <p className="fs-large">Save Money</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="800ms"
              >
                <div className="mb-3">
                  <img src="../assets/img/icons/support.svg" alt="" />
                </div>
                <p className="fs-large">24/7 Support</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="1000ms"
              >
                <div className="mb-3">
                  <img src="../assets/img/icons/laptop.svg" alt="" />
                </div>
                <p className="fs-large">Full Features</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="page-section bg-image bg-image-overlay-dark"
        style={{ backgroundImage: "url(../assets/img/bg_testimonials.jpg)" }}
      >
        <div className="container fg-white">
          <div className="row">
            <div className="col-md-8 col-lg-6 offset-lg-1 wow fadeInUp">
              <h2 className="mb-5 fg-white fw-normal">Customer Stories</h2>
              <p className="fs-large font-italic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia voluptates facere explicabo! Rerum necessitatibus cum
                qui veritatis reprehenderit, neque sapiente consequatur atque
                eaque molestias, est, quod totam quo laudantium ratione.
              </p>
              <p className="fs-large fg-grey fw-medium mb-5">
                John Doe, UI Designer
              </p>

              <a href="#" className="btn btn-outline-light rounded-pill">
                Read Stories <span className="mai-chevron-forward"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 py-3 mb-5 mb-lg-0">
              <div className="img-place w-lg-75 wow zoomIn">
                <img src="../assets/img/illustration_contact.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-5 py-3">
              <h1 className="wow fadeInUp">
                Need a help? <br />
                Don't worry just contact us
              </h1>

              <form method="POST" className="mt-5">
                <div className="form-group wow fadeInUp">
                  <label for="name" className="fw-medium fg-grey">
                    Fullname
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>

                <div className="form-group wow fadeInUp">
                  <label for="email" className="fw-medium fg-grey">
                    Email
                  </label>
                  <input type="text" className="form-control" id="email" />
                </div>

                <div className="form-group wow fadeInUp">
                  <label for="message" className="fw-medium fg-grey">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    className="form-control"
                    id="message"
                  ></textarea>
                </div>

                <div className="form-group mt-4 wow fadeInUp">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        id="pricing"
        className="page-section bg-image"
        style={{ backgroundImage: "url(../assets/img/pattern_2.svg)" }}
      >
        <div className="container">
          <div className="content">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 wow fadeInUp">
                <h1 className="title mb-4 text-center">Pricing Plan</h1>
                <p className="mb-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores inventore maxime ipsa eligendi quibusdam velit maiores
                  adipisci odit, exercitationem cumque iusto at debitis
                  reiciendis a, ipsum aliquam reprehenderit. Sed, delectus.
                </p>
                <div className="pricing-date-picker mb-4">
                  <a href="#" className="active">
                    Monthly
                  </a>
                  <a href="#">Annually</a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="pricing-table p-5">
                      <div className="top-pane my-4">
                        <div className="price-line mb-4">
                          <h1 className="text-center">$0</h1>
                          <h5> / month</h5>
                        </div>
                        <h5 className="text-center">Business Class</h5>
                        <h6 className="text-center">
                          For small teams or Office
                        </h6>
                      </div>
                      <h6>Drag & Drop Builder</h6>
                      <h6>1000's of Templates</h6>
                      <h6>Blog Support Tools</h6>
                      <h6>eCommerce Store</h6>
                      <button>Start free trail </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container py-5 text-center">
          <h1 className="wow fadeInUp mb-5">doCheckMe</h1>
          <ul className="footer-link wow fadeInUp mb-5" data-wow-delay="200ms">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">how it Work</a>
            </li>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">Our Client</a>
            </li>
            <li>
              <a href="#">Video</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul className="social-link wow fadeInUp" data-wow-delay="200ms">
            <li>
              <a href="#">
                <img src={FaceBookIconImg} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={TwitterIconImg} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={InstagramIconImg} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={WhatsAppIconImg} alt="whatsapp" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={GooglePluskIconImg} alt="googleplus" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={YoutubeIconImg} alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container py-2" id="copyright" data-wow-delay="200ms">
        <p className="py-0 text-center">
          Copyright© Sarathkumar Coimbatore 2019. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default App;
