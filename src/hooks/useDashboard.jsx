import React from "react";
import { DashboardContext } from "../context/DashboardContext";

export default function useDashboard() {
  const context = React.useContext(DashboardContext);
  if (!context) {
    throw new Error("useUser must be inside of DashboardContext Provider");
  }
  return context;
}
