//import useContext
import React, { useContext } from 'react';

//import context
import { AuthContext } from '../context/AuthContext';

//import react router dom
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../views/home/index.jsx";
import Register from "../views/auth/register.jsx";
import Login from "../views/auth/login.jsx";
import Dashboard from "../views/admin/dashboard/index.jsx";
import UsersIndex from '../views/admin/users/index.jsx';
import CreateUser from '../views/admin/users/create.jsx';
import EditUser from '../views/admin/users/edit.jsx';
export default function AppRoutes() {

    //destructure context "isAuthenticated"
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/register" */}
            <Route path="/register" element={
                isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Register />
            } />

            {/* route "/login" */}
            <Route path="/login" element={
                isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Login />
            } />

            {/* route "/admin/dashboard" */}
            <Route path="/admin/dashboard" element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
            } />

            {/* route "/admin/user" */}
            <Route path="/admin/user" element={
                isAuthenticated ? <UsersIndex /> : <Navigate to="/login" replace />
            } />

            <Route path="/admin/user/create" element={
                isAuthenticated ? <CreateUser /> : <Navigate to="/login" replace />
            } />

            <Route path="/admin/user/edit/:id" element={
                isAuthenticated ? <EditUser /> : <Navigate to="/login" replace />
            } />
        </Routes>
    );
}