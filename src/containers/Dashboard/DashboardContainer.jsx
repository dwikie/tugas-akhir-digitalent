import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const { Content } = Layout;

export default function DashboardContainer({ routes }) {
  const [sidebarItems, setSidebarItems] = useState([]);

  useEffect(() => {
    setSidebarItems(
      Array.from(routes)
        .filter((route) => route.sidebarNav)
        .map((item) => ({
          to: item.path,
          icon: item.sidebarNav.icon,
          label: item.sidebarNav.label,
        })),
    );
  }, [routes]);

  return (
    <Layout>
      <Navbar />
      <Layout className="site-layout">
        <Router>
          <Sidebar sidebarItems={sidebarItems} />
          <Content
            style={{
              padding: "1.25rem",
              minHeight: "calc(100vh - 64px)",
            }}
          >
            <div className="content bg-white px-3 py-4">
              <Switch>
                {Array.from(routes).map((route, index) => (
                  <Route
                    key={`dashboard-route-${index}`}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                ))}
              </Switch>
            </div>
          </Content>
        </Router>
      </Layout>
    </Layout>
  );
}
