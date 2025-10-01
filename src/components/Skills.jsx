import React, { useEffect, useState } from "react";
import img from "../assets/images/skill-photo.png";
import api from "../services/api";

const Skills = () => {
  const [skill, setSkill] = useState([]);

  const fetchSkill = async () => {
    try {
      const response = await api.get(`/api/skill`);
      setSkill(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data!", error);
    }
  }

  useEffect(() => {
    fetchSkill();
  }, []);
  return (
    <section className="skills-section" id="section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-7">
            <p className="text-orange fw-semi-bold">Skills</p>
            <h2 className="section-title text-white mb-5">
              Programming Skills
            </h2>

            <div className="row">
              {skill.map((item) => (
                <div key={item.id} className="col-md-6 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="text-white text-uppercase fw-semibold mb-0">
                      {item.nama}
                    </p>
                    <p className="text-white text-uppercase mb-0">
                      {item.persentase}%
                    </p>
                  </div>
                  <div className="progress-bar">
                    <span
                      className="progress"
                      style={{ width: `${item.persentase}%` }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-5 justify-content-between">
            <img src={img} className="skills-img mt-5" alt="Skills" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
