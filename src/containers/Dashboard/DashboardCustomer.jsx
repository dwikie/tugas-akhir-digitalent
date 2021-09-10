import React from "react";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import DokumenTambahan from "../../components/customer/dokumen-tambahan";
import PengajuanKPR from "../../components/customer/pengajuan-kpr/pengajuan-kpr";
import NotFound from "../../pages/404";
import Beranda from "../../components/customer/beranda";
import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";

const { Content } = Layout;

export default function DashboardCustomer(props) {
  const { url } = useRouteMatch();

  const siderItems = [
    {
      label: "Beranda",
      icon: HomeOutlined,
      to: `${url}`,
    },
    {
      label: "Buat Pengajuan",
      icon: FileSearchOutlined,
      to: `${url}/buat-pengajuan`,
    },
  ];

  return (
    <Layout>
      <Navbar
        handleLogout={props.handleLogout}
        siderCollapsed={props.siderCollapsed}
      />
      <Layout className="site-layout">
        <Router>
          <Sidebar
            siderCollapsed={props.siderCollapsed}
            siderItems={siderItems}
          />
          <Content
            style={{
              padding: "1.25rem",
              minHeight: "calc(100vh - 64px)",
            }}
          >
            <div className="content bg-white px-3 py-4">
              <Switch>
                <Route exact path={`${url}/`} component={Beranda} />
                <Route
                  path={`${url}/buat-pengajuan`}
                  component={PengajuanKPR}
                />
                <Route
                  exact
                  path={`${url}/dokumen-tambahan`}
                  component={DokumenTambahan}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Content>
        </Router>
      </Layout>
    </Layout>
  );
}
