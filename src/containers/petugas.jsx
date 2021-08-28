import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Beranda from "../components/petugas/beranda";
import DashboardHeader from "../components/dashboard-header";
import DetailPengajuan from "../components/petugas/detail-pengajuan";
import ListPengajuan from "../components/petugas/list-pengajuan";
import NotFound from "../pages/404";

export default function DashboardPetugas(props) {
  const { url } = props.match;
  const navItems = [
    {
      path: "/",
      label: "Beranda",
    },
    {
      path: "/list-pengajuan",
      label: "List Pengajuan",
    },
  ];
  return (
    <Router>
      <DashboardHeader
        {...props}
        navItems={navItems}
        brand="Dashboard Petugas"
      />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path={`${url}/`} component={Beranda} />
            <Route path={`${url}/list-pengajuan`} component={ListPengajuan} />
            <Route
              exact
              path={`${url}/detail-pengajuan/:id`}
              component={DetailPengajuan}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
}
