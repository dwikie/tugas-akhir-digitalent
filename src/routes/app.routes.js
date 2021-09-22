import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AuthenticatedRoute from "../configs/authenticated-route";
import useAccount from "../hooks/useAccount";

import NotFound from "../pages/404";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

export default function AppRoutes() {
  const [account] = useAccount();

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />

        <AuthenticatedRoute
          isAuthenticated={account?.isLoggedIn}
          path="/dashboard"
        >
          <Dashboard />
        </AuthenticatedRoute>

        <Route exact path="/logout" render={() => <Redirect to="/login" />} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
