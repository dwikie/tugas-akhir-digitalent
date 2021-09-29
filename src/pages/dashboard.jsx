import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import DashboardContainer from "../containers/DashboardContainer";
import DashboardProvider from "../context/DashboardContext";
import useGlobal from "../hooks/useGlobal";
import {
  DashboardPetugasRoutes,
  DashboardCustomerRoutes,
} from "../routes/dashboard.routes.js";

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
            user?.isPetugas ? (
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
