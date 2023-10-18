import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="btn-box">
        <button onClick={() => navigate("/dashboard/profile")}>
          Go to Profile
        </button>
        <button onClick={() => navigate("/")}>Log Out</button>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
