import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const Dashboard = ({ roles = [] }) => {

    const role = JSON.parse(localStorage.getItem("role"));

    return !roles.length || roles.includes(role)
      ? (<div>Dashboard - for private layout</div>)
      : <Navigate to="/unauthorized" replace />;
      
}

export default Dashboard;