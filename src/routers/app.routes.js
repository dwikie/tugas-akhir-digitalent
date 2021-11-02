import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AuthenticatedRoute from "../configs/authenticated-route";
import useGlobal from "../hooks/useGlobal";
import { lazy } from "react";
import Register from "../pages/register";

const NotFound = lazy(() => import("../pages/404"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const Login = lazy(() => import("../pages/login"));

export default function AppRoutes() {
  const { account } = useGlobal();
  const [user] = account;
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <AuthenticatedRoute isAuthenticated={user?.role} path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>

      <Route exact path="/logout" render={() => <Redirect to="/login" />} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
