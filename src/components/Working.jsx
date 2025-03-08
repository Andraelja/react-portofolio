import React from "react";
import { timeline } from "./data";

const Working = () => {
  return (
    <>
      <section className="timeline-section" id="timeline">
        <div className="container">
          <p className="text-orange fw-semibold">Time Line</p>
          <h2 className="section-title mb-5">Study Period</h2>

          {timeline.map((data) => (
            <div key={data.id} className="row py-3 border-bottom">
              <div className="col md-4">{data.period}</div>
              <div className="col md-4">{data.title}</div>
              <div className="col md-4">{data.institution}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="contact">
        <div className="container">
          <div className="row align-item-center justify-content-between">
            <div className="col-md-6">
              <p className="text-orange fw-semibold">Contact</p>
              <h2 className="section-title mb-5">Get In Touch</h2>

              <p className="text-secondary mb-3">
                Please fill out the from on this section on contact with me. Or
                call between 9:00 a.m and 8:00 p.m. ET, Monday throught Friday
              </p>

              <div className="dflex align-item-center gap-2 mb-3">
                <i className="bx bx-map-pin text-orange fs-5"></i>
                <div className="mb-0">9812 Andra Elja, Duri, Riau</div>
              </div>

              <div className="dflex align-item-center gap-2 mb-3">
                <i className="bx bx-phone-call text-orange fs-5"></i>
                <div className="mb-0">+62 831 7388 6797</div>
              </div>

              <div className="dflex align-item-center gap-2 mb-3">
                <i className="bx bx-envelope text-orange fs-5"></i>
                <div className="mb-0">andraeljaprama@gmail.com</div>
              </div>
            </div>

            <div className="col-md-5">
              <form action="#">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="form-control-rounded-0 mb-2"
                />
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="form-control-rounded-0 mb-2"
                />
                <br />
                <textarea
                  name="body"
                  placeholder="Message"
                  id="body"
                  cols="30"
                  rows="3"
                ></textarea>
                <br />
                <br />
                <button className="btn btn-orange w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Working;
