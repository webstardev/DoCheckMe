import React from "react";

import BgHeroImg from "../../../Assets/img/bg_hero_1.png";
import AppPreviewImg from "../../../Assets/img/app_preview_1.png";

const SectionTwo = () => {
  return (
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
  );
};

export default SectionTwo;
