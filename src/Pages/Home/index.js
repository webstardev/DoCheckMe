import React, { useEffect } from "react";

import PatterSvg1 from "../../Assets/img/pattern_1.svg";
import Preview3Img from "../../Assets/img/app_preview_3.png";

import AboutUsIcon1Img from "../../Assets/img/about-us-icon1.png";
import AboutUsIcon2Img from "../../Assets/img/about-us-icon2.png";
import AboutUsIcon3Img from "../../Assets/img/about-us-icon3.png";

import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import Footer from "./Sections/Footer";
import SectionSeven from "./Sections/SectionSeven";

const HomePage = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionSeven />
      <Footer />
    </>
  );
};

export default HomePage;
