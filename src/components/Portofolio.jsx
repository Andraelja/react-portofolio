import React from "react";
import { portofolio } from "./data";

const Portofolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <p className="text-orange fw-semibold">Portfolio</p>
        <h2 className="section-title mb-5">Selected Works</h2>

        <div className="swiper portfolio-wrapper">
          <div className="swiper-wrapper">
            <div className="swiper-slide d-flex flex-wrap">
              {portofolio.map((data) => (
                <div key={data.id} className="card mr-3 mb-3">
                  <div className="card-body">
                    <img
                      src={data.image}
                      className="card-img-top rounded mb-3"
                      alt={data.title}
                    />
                    <h6 className="fw-semi-bold">{data.title}</h6>
                    <a href={data.link} className="text-orange">
                      Detail Portfolio
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
