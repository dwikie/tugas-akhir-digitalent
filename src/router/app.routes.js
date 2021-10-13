import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AuthenticatedRoute from "../configs/authenticated-route";
import useGlobal from "../hooks/useGlobal";
import { lazy } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, rigth: "-100px" }}
          animate={{ opacity: 1, right: 0 }}
          exit={{ opacity: 0, left: "-100px" }}
        >
          <Login />
        </motion.div>
      </Route>

      <Route path="/register">
        <motion.div
          initial={{ opacity: 0, rigth: "-100px" }}
          animate={{ opacity: 1, right: 0 }}
          exit={{ opacity: 0, left: "-100px" }}
        >
          <Register />
        </motion.div>
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
