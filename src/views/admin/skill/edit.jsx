import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../../services/api";
import SidebarMenu from "../../../components/SidebarMenu";

const token = Cookies.get("token");

export default function UsersEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nama, setNama] = useState("");
  const [persentase, setPersentase] = useState("");
  const [validation, setValidation] = useState([]);

  const fetchDetailSkill = async () => {
    await api.get(`/api/skill/${id}`).then((response) => {
      setNama(response.data.data.nama);
      setPersentase(response.data.data.persentase);
    });
  };

  useEffect(() => {
    fetchDetailSkill();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();

    api.defaults.headers.common["Authorization"] = token;
    await api
      .put(`/api/skill/${id}`, {
        nama: nama,
        persentase: persentase,
      })
      .then(() => {
        navigate("/admin/skill");
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
            <div className="card-header">EDIT SKILL</div>
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
              <form onSubmit={updateUser}>
                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Nama Skill</label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="form-control"
                    placeholder="Nama Skill"
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Persentase</label>
                  <input
                    type="number"
                    value={persentase}
                    onChange={(e) => setPersentase(e.target.value)}
                    className="form-control"
                    placeholder="Persentase"
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
