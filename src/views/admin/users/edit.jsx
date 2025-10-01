import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../../services/api";
import SidebarMenu from "../../../components/SidebarMenu";

const token = Cookies.get("token");

export default function UsersEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);

  const fetchDetailUser = async () => {
    //fetch data
    await api.get(`/api/user/${id}`).then((response) => {
      setName(response.data.data.name);
      setUsername(response.data.data.username);
    });
  };

  useEffect(() => {
    fetchDetailUser();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();

    api.defaults.headers.common["Authorization"] = token;
    await api
      .put(`/api/user/${id}`, {
        name: name,
        username: username,
        password: password,
      })
      .then(() => {
        navigate("/admin/user");
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
            <div className="card-header">EDIT USER</div>
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
                  <label className="mb-1 fw-bold">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="Username"
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-1 fw-bold">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password"
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
