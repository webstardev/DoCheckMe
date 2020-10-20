import React, { useEffect } from "react";

import PatterSvg1 from "../../Assets/img/pattern_1.svg";
import Preview3Img from "../../Assets/img/app_preview_3.png";

import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import SectionFive from "./Sections/SectionFive";
import SectionSix from "./Sections/SectionSix";
import SectionSeven from "./Sections/SectionSeven";
import Footer from "./Sections/Footer";

const HomePage = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  );
};

export default HomePage;
