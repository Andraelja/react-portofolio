//import useContext
import React, { useContext } from "react";

//import context
import { AuthContext } from "../context/AuthContext";

//import react router dom
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../views/home/index.jsx";
import Register from "../views/auth/register.jsx";
import Login from "../views/auth/login.jsx";
import Dashboard from "../views/admin/dashboard/index.jsx";
import UsersIndex from "../views/admin/users/index.jsx";
import CreateUser from "../views/admin/users/create.jsx";
import EditUser from "../views/admin/users/edit.jsx";
import HomeIndex from "../views/admin/home/index.jsx";
import HomeCreate from "../views/admin/home/create.jsx";
import HomeEdit from "../views/admin/home/edit.jsx";
import PortofolioIndex from "../views/admin/portofolio/index.jsx";
import PortofolioCreate from "../views/admin/portofolio/create.jsx";
import PortofolioEdit from "../views/admin/portofolio/edit.jsx";
import DetailPage from "../views/home/detail.jsx";
import SkillIndex from "../views/admin/skill/index.jsx";
import CreateSkill from "../views/admin/skill/create.jsx";
import EditSkill from "../views/admin/skill/edit.jsx";

export default function AppRoutes() {
  //destructure context "isAuthenticated"
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/register" */}
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/login" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* route "/login" */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />

      {/* route "/admin/dashboard" */}
      <Route
        path="/admin/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/detail/:id"
        element={
          isAuthenticated ? <DetailPage /> : <Navigate to="/login" replace />
        }
      />

      {/* route "/admin/user" */}
      <Route
        path="/admin/user"
        element={
          isAuthenticated ? <UsersIndex /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/admin/user/create"
        element={
          isAuthenticated ? <CreateUser /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/admin/user/edit/:id"
        element={
          isAuthenticated ? <EditUser /> : <Navigate to="/login" replace />
        }
      />

      {/* route "/admin/home" */}
      <Route
        path="/admin/home"
        element={
          isAuthenticated ? <HomeIndex /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/admin/home/create"
        element={
          isAuthenticated ? <HomeCreate /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/admin/home/edit/:id"
        element={
          isAuthenticated ? <HomeEdit /> : <Navigate to="/login" replace />
        }
      />

      {/* route "/admin/portofolio" */}
      <Route
        path="/admin/portofolio"
        element={
          isAuthenticated ? <PortofolioIndex /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/admin/portofolio/create"
        element={
          isAuthenticated ? <PortofolioCreate /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/admin/portofolio/edit/:id"
        element={
          isAuthenticated ? <PortofolioEdit /> : <Navigate to="/login" replace />
        }
      />

      {/* Skill */}
      <Route
        path="/admin/skill"
        element={
          isAuthenticated ? <SkillIndex /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/admin/skill/create"
        element={
          isAuthenticated ? <CreateSkill /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/admin/skill/edit/:id"
        element={
          isAuthenticated ? <EditSkill /> : <Navigate to="/login" replace />
        }
      />

    </Routes>
  );
}
