import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../../services/api";
import SidebarMenu from "../../../components/SidebarMenu";

export default function HomeIndex() {
  const [home, setHome] = useState([]);
  const fetchDataHome = async () => {
    const token = Cookies.get("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = token;

        try {
          const response = await api.get("/home");
          setHome(response.data.data);
        } catch (error) {
          console.error("Terjadi kesalahan saat mengambil data!");
        }
    } else {
      console.error("Token tidak tersedia!");
    }
  };

  useEffect(() => {
    fetchDataHome();
  }, []);

  const deleteHome = async (id) => {
    const token = Cookies.get("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = token;

        try {
          await api.delete(`/home/${id}`);
          fetchDataHome();
        } catch (error) {
          console.error("There was an error deleting the home!", error);
        }
    } else {
      console.error("Token is not available!");
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
            <div className="card-header d-flex justify-content-between align-items-center">
              <span>HOME</span>
              <Link
                to="/admin/home/create"
                className="btn btn-sm btn-success rounded shadow-sm border-0"
              >
                ADD HOME
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th scope="col">Judul</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Foto</th>
                    <th scope="col" style={{ width: "17%" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {home.length > 0 ? (
                    home.map((home, index) => (
                      <tr key={index}>
                        <td>{home.judul}</td>
                        <td>{home.deskripsi}</td>
                        <td className="text-center">
                          {home.foto ? (
                            <img
                              src={home.foto}
                              alt={home.judul}
                              style={{ width: "80px", height: "80px", objectFit: "cover" }}
                            />
                          ) : (
                            <span className="text-muted">No Image</span>
                          )}
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/admin/home/edit/${home.id}`}
                            className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2"
                          >
                            EDIT
                          </Link>
                          <button
                            onClick={() => deleteHome(home.id)}
                            className="btn btn-sm btn-danger rounded-sm shadow border-0"
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        <div className="alert alert-danger mb-0">
                          Data Belum Tersedia!
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
