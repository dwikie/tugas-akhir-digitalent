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
import DetailPengajuan from "../../components/petugas/detail-pengajuan";
import ListPengajuan from "../../components/petugas/list-pengajuan";
import Beranda from "../../components/petugas/beranda";
import NotFound from "../../pages/404";
import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";

const { Content } = Layout;

export default function DashboardPetugas(props) {
  const { url } = useRouteMatch();

  const siderItems = [
    {
      label: "Beranda",
      icon: HomeOutlined,
      to: `${url}`,
    },
    {
      label: "Pengajuan",
      icon: FileSearchOutlined,
      to: `${url}/pengajuan`,
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
                <Route exact path={`${url}`} component={Beranda} />
                <Route
                  exact
                  path={`${url}/pengajuan`}
                  component={ListPengajuan}
                />
                <Route
                  exact
                  path={`${url}/pengajuan/:id`}
                  component={DetailPengajuan}
                />
                <Route path={`${url}/*`} component={NotFound} />
              </Switch>
            </div>
          </Content>
        </Router>
      </Layout>
    </Layout>
  );
}
