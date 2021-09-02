import React from "react";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Customer from "../containers/customer";
import Petugas from "../containers/petugas";
import { FaRegQuestionCircle } from "react-icons/fa";
import NotFound from "./404";

export default function Dashboard(props) {
  const { url } = props.match;
  const handleLogout = () => {
    props.history.push("/logout");
  };
  return (
    <Router>
      {/* Development Purpose */}
      <Nav variant="tabs" defaultActiveKey={`${url}/customer`}>
        <Nav.Item>
          <Link
            className="nav-link"
            style={{ marginRight: "1rem" }}
            to={`${url}/customer`}
          >
            Dashboard Customer
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to={`${url}/petugas`}>
            Dashboard Petugas
          </Link>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route
          path={`${url}/customer`}
          component={(x) => <Customer {...x} handleLogOut={handleLogout} />}
        />

        <Route
          path={`${url}/petugas`}
          component={(x) => <Petugas {...x} handleLogOut={handleLogout} />}
        />

        <Route path={`${url}`}>
          <Redirect to={`${url}/customer`} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
