import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";

export default function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be inside of DashboardContext Provider");
  }
  return context;
}
