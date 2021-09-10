import React from "react";
import DashboardProvider from "../context/DashboardContext";
import DashboardRoutes from "../routes/DashboardRoutes";

export default function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardRoutes />
    </DashboardProvider>
  );
}
