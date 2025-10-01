import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../../services/api";
import SidebarMenu from "../../../components/SidebarMenu";

export default function SkillIndex() {
  const [skill, setSkill] = useState([]);
  const fetchDataSkill = async () => {
    const token = Cookies.get("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = token;
        try {
          const response = await api.get("/api/skill");
          setSkill(response.data.data);
        } catch (error) {
          console.error("There was an error fetching the skill!", error);
        }
    } else {
      console.error("Token is not available!");
    }
  };

  useEffect(() => {
    fetchDataSkill();
  }, []);

  const deleteSkill = async (id) => {
    const token = Cookies.get("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = token;

        try {
          await api.delete(`/api/skill/${id}`);
          fetchDataSkill();
        } catch (error) {
          console.error("There was an error deleting the skill!", error);
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
              <span>SKILLS</span>
              <Link
                to="/admin/skill/create"
                className="btn btn-sm btn-success rounded shadow-sm border-0"
              >
                ADD SKILL
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th scope="col">Nama Skill</th>
                    <th scope="col">Persentase</th>
                    <th scope="col" style={{ width: "17%" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {skill.length > 0 ? (
                    skill.map((skill, index) => (
                      <tr key={index}>
                        <td>{skill.nama}</td>
                        <td>{skill.persentase}%</td>
                        <td className="text-center">
                          <Link
                            to={`/admin/skill/edit/${skill.id}`}
                            className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2"
                          >
                            EDIT
                          </Link>
                          <button
                            onClick={() => deleteSkill(skill.id)}
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
