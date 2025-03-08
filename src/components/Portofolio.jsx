import React from "react";
import img1 from "../assets/images/s.png";
import img2 from "../assets/images/ss.png";
import img3 from "../assets/images/sss.png";
const Portofolio = () => {
  return (
    <>
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <p className="text-orange fw-semibold">Portfolio</p>
        <h2 className="section-title mb-5">Selected Works</h2>

        <div className="swiper portfolio-wrapper">
          <div className="swiper-wrapper">
            <div className="swiper-slide d-flex flex-wrap">
              <div className="card mr-3 mb-3">
                <div className="card-body">
                  <img
                    src={img1}
                    className="card-img-top rounded mb-3"
                    alt=""
                  />
                  <h6 className="fw-semi-bold">Website Kecamatan</h6>
                  <a href="#" className="text-orange">
                    Detail Portfolio
                  </a>
                </div>
              </div>

              <div className="card mr-3 mb-3">
                <div className="card-body">
                  <img
                    src={img2}
                    className="card-img-top rounded mb-3"
                    alt=""
                  />
                  <h6 className="fw-semi-bold">Online Shop</h6>
                  <a href="#" className="text-orange">
                    Detail Portfolio
                  </a>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <img
                    src={img3}
                    className="card-img-top rounded mb-3"
                    alt=""
                  />
                  <h6 className="fw-semi-bold">Website UMKM</h6>
                  <a href="#" className="text-orange">
                    Detail Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Portofolio;
