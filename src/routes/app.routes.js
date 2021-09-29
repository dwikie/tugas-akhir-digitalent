import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AuthenticatedRoute from "../configs/authenticated-route";
import useGlobal from "../hooks/useGlobal";
import { lazy } from "react";
import { motion } from "framer-motion";

const NotFound = lazy(() => import("../pages/404"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const Login = lazy(() => import("../pages/login"));

export default function AppRoutes() {
  const { account } = useGlobal();
  const [user] = account;
  return (
    <Switch>
      <Route path="/login">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Login />
        </motion.div>
      </Route>

      <AuthenticatedRoute isAuthenticated={user?.isLoggedIn} path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>

      <Route exact path="/logout" render={() => <Redirect to="/login" />} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
