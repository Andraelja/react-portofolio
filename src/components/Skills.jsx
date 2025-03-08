import React from "react";
import { skills } from "./data"; // Import data skills
import img from "../assets/images/skill-photo.png";

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

            {skills.map((skill) => (
              <div key={skill.id} className="mb-3">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-white text-uppercase fw-semibold mb-0">
                    {skill.name}
                  </p>
                  <p className="text-white text-uppercase mb-0">
                    {skill.percentage}%
                  </p>
                </div>
                <div className="progress-bar">
                  <span
                    className="progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></span>
                </div>
              </div>
            ))}
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
