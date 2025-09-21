import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../../services/api";
import SidebarMenu from "../../../components/SidebarMenu";

const token = Cookies.get("token");

export default function UsersEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [validation, setValidation] = useState([]);

  const fetchDetailHome = async () => {
    //fetch data
    await api.get(`/api/home/${id}`).then((response) => {
      setJudul(response.data.data.judul);
      setDeskripsi(response.data.data.deskripsi);
    });
  };

  useEffect(() => {
    fetchDetailHome();
  }, []);

  const updateHome = async (e) => {
    e.preventDefault();

    api.defaults.headers.common["Authorization"] = token;
    await api
      .put(`/api/home/${id}`, {
        name: name,
        judul: judul,
        deskripsi: deskripsi,
      })
      .then(() => {
        navigate("/admin/home");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header">EDIT HOME</div>
            <div className="card-body">
              {validation.errors && (
                <div className="alert alert-danger mt-2 pb-0">
                  {validation.errors.map((error, index) => (
                    <p key={index}>
                      {error.path} : {error.msg}
                    </p>
                  ))}
                </div>
              )}
              <form onSubmit={updateHome}>
                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Judul</label>
                  <input
                    type="text"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    className="form-control"
                    placeholder="Judul"
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Deskripsi</label>
                  <textarea
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="form-control"
                    placeholder="Deskripsi"
                  />
                </div>

                <button type="submit" className="btn btn-sm btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
