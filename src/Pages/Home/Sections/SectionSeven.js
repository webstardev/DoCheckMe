import React from "react";

const SectionSeven = () => {
  return (
    <div id="pricing" className="page-section">
      <div className="container">
        <div className="content">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 wow fadeInUp">
              <h1 className="title mb-4 text-center">Pricing</h1>
              <p className=" mb-5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                inventore maxime ipsa eligendi quibusdam velit maiores adipisci
                odit, exercitationem cumque iusto at debitis reiciendis a, ipsum
                aliquam reprehenderit. Sed, delectus.
              </p>
              <div className="pricing-date-picker">
                <a href="#" className="active">
                  Monthly
                </a>
                <a href="#">Annually</a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="pricing-table mt-5 pb-5 wow fadeInUp">
                    <div className="top-pane py-5 w-100">
                      <div className="price-line mt-5 mb-4">
                        <h1 className="text-center">$0</h1>
                        <h5> / month</h5>
                      </div>
                      <h5 className="text-center mb-2">Business Class</h5>
                      <h6 className="text-center mb-2">
                        For small teams or Office
                      </h6>
                    </div>
                    <h6 className="mt-5 mb-0">Drag & Drop Builder</h6>
                    <h6 className="mt-5 mb-0">1000's of Templates</h6>
                    <h6 className="mt-5 mb-0">Blog Support Tools</h6>
                    <h6 className="mt-5 mb-0">eCommerce Store</h6>
                    <button className="btn-plan mt-5">Start free trail</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pricing-table mt-5 pb-5 wow fadeInUp">
                    <div className="top-pane py-5 w-100">
                      <div className="price-line mt-5 mb-4">
                        <h1 className="text-center">$99</h1>
                        <h5> / month</h5>
                      </div>
                      <h5 className="text-center mb-2">Pro Master</h5>
                      <h6 className="text-center mb-2">
                        For Best opportunties
                      </h6>
                    </div>
                    <h6 className="mt-5 mb-0">Drag & Drop Builder</h6>
                    <h6 className="mt-5 mb-0">1000's of Templates</h6>
                    <h6 className="mt-5 mb-0">Blog Support Tools</h6>
                    <h6 className="mt-5 mb-0">eCommerce Store</h6>
                    <button className="btn-plan mt-5">Subscribe Now</button>
                    <h6 className="mt-5" style={{ color: "#2500f9" }}>
                      Or Start 14 days trial
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
