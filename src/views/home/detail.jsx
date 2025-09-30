import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function DetailPage() {
  const { id } = useParams();
  const [portofolio, setPortofolio] = useState({});

  const fetchDetail = async () => {
    try {
      const response = await api.get(`/api/portofolio/${id}`);
      setPortofolio(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data!", error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-5">
              <img
                src={portofolio.foto}
                alt={portofolio.nama}
                className="mb-4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "4px solid #f0f0f0",
                }}
              />
              <h2 className="fw-bold mb-3">{portofolio.nama}</h2>
              <p className="text-muted fs-5">{portofolio.deskripsi}</p>
              <hr className="my-4" />
              <Link
                to="/"
                className="btn btn-outline-secondary px-4 rounded-pill"
              >
                ← Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
