import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../../services/api";
import SidebarMenu from "../../../components/SidebarMenu";

const token = Cookies.get("token");

export default function PortofolioEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [nama, setNama] = useState("");
  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [validation, setValidation] = useState([]);

  const fetchDetailPortofolio = async () => {
    try {
      const response = await api.get(`/api/portofolio/${id}`);
      setNama(response.data.data.nama);
      if (response.data.data.foto) {
        setPreview(`/uploads/${response.data.data.foto}`); // sesuaikan path foto di server
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetailPortofolio();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFoto(file);
    setPreview(URL.createObjectURL(file));
  };

  const updatePortofolio = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama", nama);
    if (foto) {
      formData.append("foto", foto);
    }

    api.defaults.headers.common["Authorization"] = token;
    try {
      await api.put(`/api/portofolio/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/admin/portofolio");
    } catch (error) {
      setValidation(error.response.data);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header">EDIT PORTOFOLIO</div>
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
              <form onSubmit={updatePortofolio}>
                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Nama</label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="form-control"
                    placeholder="Nama"
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Foto</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="img-thumbnail mt-2"
                      width="200"
                    />
                  )}
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
