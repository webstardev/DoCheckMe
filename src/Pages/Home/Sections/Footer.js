import React from "react";

import FaceBookIconImg from "../../../Assets/img/social-facebook-icon.png";
import TwitterIconImg from "../../../Assets/img/social-twitter-icon.png";
import InstagramIconImg from "../../../Assets/img/social-instagram-icon.png";
import WhatsAppIconImg from "../../../Assets/img/social-whatsapp-icon.png";
import GooglePluskIconImg from "../../../Assets/img/social-googleplus-icon.png";
import YoutubeIconImg from "../../../Assets/img/social-youtube-icon.png";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
