import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout.";
import DashboardProvider from "../contexts/DashboardContext";
import useGlobal from "../hooks/useGlobal";
import {
  DashboardPetugasRoutes,
  DashboardCustomerRoutes,
} from "../routers/dashboard.routes.js";

export default function Dashboard() {
  const { account } = useGlobal();
  const [user] = account;
  const { url } = useRouteMatch();

  return (
    <DashboardProvider>
      <Router>
        <Route
          path={url}
          render={() =>
            user?.role === "officer" ? (
              <DashboardLayout routes={DashboardPetugasRoutes} />
            ) : (
              <DashboardLayout routes={DashboardCustomerRoutes} />
            )
          }
        />
      </Router>
    </DashboardProvider>
  );
}
