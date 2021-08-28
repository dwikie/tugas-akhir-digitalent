import "./App.css";
import { GlobalProvider } from './configs/context';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Login } from "./pages/login";
import { DashboardCustomer } from './pages/dashboard-customer';
import { DashboardPetugas } from "./pages/dashboard-agent";

function App() {
  return (
      <Router>
        {/* Link/Anchor */}
        <Link style={{marginRight: "1.25rem"}} to="/login">Login</Link>
        <Link style={{marginRight: "1.25rem"}} to="/dashboard-customer">Dashboard Customer</Link>
        <Link style={{marginRight: "1.25rem"}} to="/dashboard-petugas">Dashboard Petugas</Link>
        {/* Route Point */}
        <Route exact path="/">
            <Redirect to="/login"/>
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard-customer" component={DashboardCustomer}/>
        <Route path="/dashboard-petugas" component={DashboardPetugas}/>
      </Router>
    )
}

export default GlobalProvider(App);
