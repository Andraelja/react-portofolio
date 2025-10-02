import React, { useEffect, useState } from "react";
import { portofolio } from "./data";
import api from "../services/api";
import { Link } from "react-router-dom";

const Portofolio = () => {
  const [portofolio, setPortofolio] = useState([]);

  const fetchDataPortofolio = async () => {
    try {
      const response = await api.get("/api/portofolio");
      if (response.data.data.length > 0) {
        setPortofolio(response.data.data);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data!", error);
    }
  };

  useEffect(() => {
    fetchDataPortofolio();
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <p className="text-orange fw-semibold">Portfolio</p>
        <h2 className="section-title mb-5">Selected Works</h2>

        <div className="swiper portfolio-wrapper">
          <div className="swiper-wrapper">
            <div className="swiper-slide d-flex flex-wrap gap-2">
              <div className="row">
                {portofolio.map((data) => (
                  <div className="col-md-4">
                    <div key={data.id} className="card mr-3 mb-3">
                      <div className="card-body">
                        <img
                          src={data.foto}
                          className="card-img-top rounded mb-3"
                          alt={data.nama}
                        />
                        <h6 className="fw-semi-bold">{data.nama}</h6>
                        <Link to={`/detail/${data.id}`} className="text-orange">
                          Detail Portofolio
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
