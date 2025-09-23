import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";

export default function SidebarMenu() {
  const navigate = useNavigate();

  //destructure context "setIsAuthenticated"
  const { setIsAuthenticated } = useContext(AuthContext);

  // method to handle logout
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");

    setIsAuthenticated(false);

    // redirect to login
    navigate("/login", { replace: true });
  };

  return (
    <div className="card border-0 rounded shadow-sm">
      <div className="card-header">MAIN MENU</div>
      <div className="card-body">
        <div className="list-group">
          <Link
            to="/admin/dashboard"
            className="list-group-item list-group-item-action"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/user"
            className="list-group-item list-group-item-action"
          >
            Users
          </Link>
          <Link
            to="/admin/home"
            className="list-group-item list-group-item-action"
          >
            Home
          </Link>
          <Link
            to="/admin/portofolio"
            className="list-group-item list-group-item-action"
          >
            Portofolio
          </Link>
          <a
            onClick={logout}
            className="list-group-item list-group-item-action"
            style={{ cursor: "pointer" }}
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
