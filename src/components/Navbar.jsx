import React from "react";
import { pageLinks } from "./data";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Andra Elja Prama
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {pageLinks.map((data) => {
              return (
                <li className="nav-item" key={data.id}>
                  <a href={data.href} className="nav-link">{data.text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
