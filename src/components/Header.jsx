import React from "react";
import imgHeader from "../assets/images/ndra-removebg-preview.png";

const Header = () => {
  return (
    <section className="header-section" id="header">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-7 mt-5">
            <h3 className="header-title">Hallo, saya Andra</h3>
            <p className="header-desc">
              Halo! Saya Andra Elja Prama, seorang pengembang web dengan keahlian di HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, dan Laravel. 
              Saya bersemangat dalam menciptakan desain web yang menarik dan aplikasi web yang dinamis. 
              Mari berkolaborasi untuk mewujudkan proyek web yang luar biasa bersama!
            </p>

            <div className="header-skills">
              <a href="#" className="header-skill">
                Web Development <i className="bx bx-right-arrow-alt"></i>
              </a>
              <a href="#" className="header-skill">
                Front End <i className="bx bx-right-arrow-alt"></i>
              </a>
              <a href="#" className="header-skill">
                Back End <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="d-flex stats-container mt-5">
              <div className="stats-box">
                <h2 className="header-skill fw-bold mb-0">01+</h2>
                <p className="text-secondary">Year of <br /> Experience</p>
              </div>
              <div className="stats-box">
                <h2 className="header-skill fw-bold mb-0">10k+</h2>
                <p className="text-secondary">Happy <br /> Customers</p>
              </div>
            </div>
          </div>

          <div className="col-md-5 text-center">
            <img src={imgHeader} className="header-img" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
