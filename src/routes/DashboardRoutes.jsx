import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { DeAuthenticate } from "../configs/authenticate";
import DashboardCustomer from "../containers/Dashboard/DashboardCustomer";
import DashboardPetugas from "../containers/Dashboard/DashboardPetugas";
import useAccount from "../hooks/useAccount";
import NotFound from "../pages/404";

export default function DashboardRoutes() {
  const [isSiderCollapsed, setIsSIderCollapsed] = useState(true);
  const [account] = useAccount();
  const { url } = useRouteMatch();
  const history = useHistory();

  const handleLogout = () => {
    DeAuthenticate();
    history.replace("/logout");
  };

  const handleSiderCollapsed = () => {
    setIsSIderCollapsed(!isSiderCollapsed);
  };

  return (
    <Router>
      <Switch>
        <Route path={`${url}/petugas`}>
          {account.isPetugas ? (
            <DashboardPetugas
              handleLogout={handleLogout}
              siderCollapsed={[isSiderCollapsed, handleSiderCollapsed]}
            />
          ) : (
            <Redirect to={`${url}/customer`} />
          )}
        </Route>

        <Route path={`${url}/customer`}>
          {!account.isPetugas ? (
            <DashboardCustomer
              handleLogout={handleLogout}
              siderCollapsed={[isSiderCollapsed, handleSiderCollapsed]}
            />
          ) : (
            <Redirect to={`${url}/petugas`} />
          )}
        </Route>

        <Redirect
          exact
          path={`${url}`}
          to={account.isPetugas ? `${url}/petugas` : `${url}/customer`}
        />

        <Route path={`${url}/*`} component={NotFound} />
      </Switch>
    </Router>
  );
}
