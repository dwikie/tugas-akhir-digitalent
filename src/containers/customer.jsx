import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Beranda from "../components/customer/beranda";
import DashboardHeader from "../components/dashboard-header";
import DokumenTambahan from "../components/customer/dokumen-tambahan";
import PengajuanKPR from "../components/customer/pengajuan-kpr";
import NotFound from "../pages/404";

export default function DashboardPetugas(props) {
  const { url } = props.match;
  const navItems = [
    {
      path: "/",
      label: "Beranda",
    },
    {
      path: "/buat-pengajuan",
      label: "Buat Pengajuan",
    },
  ];
  return (
    <Router>
      <DashboardHeader
        {...props}
        navItems={navItems}
        brand="Dashboard Customer"
      />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path={`${url}/`} component={Beranda} />
            <Route path={`${url}/buat-pengajuan`} component={PengajuanKPR} />
            <Route
              exact
              path={`${url}/dokumen-tambahan`}
              component={DokumenTambahan}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
}
