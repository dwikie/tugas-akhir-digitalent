import "./App.css";
import { GlobalProvider } from "./configs/context";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Login } from "./pages/login";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route exact path="/logout">
          <Redirect to="/login" />
        </Route>

        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default GlobalProvider(App);
