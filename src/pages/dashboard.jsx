import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import DashboardContainer from "../containers/Dashboard/DashboardContainer";
import DashboardProvider from "../context/DashboardContext";
import useAccount from "../hooks/useAccount";
import {
  DashboardPetugasRoutes,
  DashboardCustomerRoutes,
} from "../routes/dashboard.routes.js";

export default function Dashboard() {
  const [account] = useAccount();
  const { url } = useRouteMatch();

  return (
    <DashboardProvider>
      <Router>
        <Route
          path={url}
          render={() =>
            account.isPetugas ? (
              <DashboardContainer routes={DashboardPetugasRoutes} />
            ) : (
              <DashboardContainer routes={DashboardCustomerRoutes} />
            )
          }
        />
      </Router>
    </DashboardProvider>
  );
}
