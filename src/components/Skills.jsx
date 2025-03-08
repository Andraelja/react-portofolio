import React from "react";
import img from '../assets/images/skill-photo.png'
const Skills = () => {
  return (
    <section className="skills-section" id="section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-7">
            <p className="text-orange fw-semi-bold">Skills</p>
            <h2 className="section-title text-white mb-5">
              Programming Skills
            </h2>

            {/* HTML */}
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-white text-uppercase fw-semibold mb-0">
                  HTML
                </p>
                <p className="text-white text-uppercase mb-0">90%</p>
              </div>
              <div className="progress-bar">
                <span className="progress" style={{ width: "90%" }}></span>
              </div>
            </div>

            {/* CSS */}
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-white text-uppercase fw-semibold mb-0">
                  CSS
                </p>
                <p className="text-white text-uppercase mb-0">90%</p>
              </div>
              <div className="progress-bar">
                <span className="progress" style={{ width: "90%" }}></span>
              </div>
            </div>

            {/* JavaScript */}
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-white text-uppercase fw-semibold mb-0">JS</p>
                <p className="text-white text-uppercase mb-0">70%</p>
              </div>
              <div className="progress-bar">
                <span className="progress" style={{ width: "70%" }}></span>
              </div>
            </div>

            {/* PHP */}
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-white text-uppercase fw-semibold mb-0">
                  PHP
                </p>
                <p className="text-white text-uppercase mb-0">80%</p>
              </div>
              <div className="progress-bar">
                <span className="progress" style={{ width: "80%" }}></span>
              </div>
            </div>

            {/* MySQL */}
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-white text-uppercase fw-semibold mb-0">
                  MySQL
                </p>
                <p className="text-white text-uppercase mb-0">80%</p>
              </div>
              <div className="progress-bar">
                <span className="progress" style={{ width: "80%" }}></span>
              </div>
            </div>

            {/* Laravel */}
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-white text-uppercase fw-semibold mb-0">
                  Laravel
                </p>
                <p className="text-white text-uppercase mb-0">50%</p>
              </div>
              <div className="progress-bar">
                <span className="progress" style={{ width: "50%" }}></span>
              </div>
            </div>
          </div>

          {/* Gambar */}
          <div className="col-md-5 justify-content-between">
            <img
              src={img}
              className="skills-img mt-5"
              alt="Skills"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
