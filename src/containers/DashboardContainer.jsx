import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import SwitchMotion from "../configs/switch-motion";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import PageIndicator from "../components/PageIndicator/PageIndicator";

const { Content } = Layout;

export default function DashboardContainer({ routes }) {
  const [sidebarItems, setSidebarItems] = useState([]);
  const dashboardRoutes = useMemo(() => routes, [routes]);

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
      <Layout style={{ position: "relative", minHeight: "calc(100vh - 64px)" }}>
        <Router>
          <Sidebar sidebarItems={sidebarItems} />
          <Suspense fallback={<PageIndicator />}>
            <Content
              style={{
                padding: "1.25rem",
                boxShadow: "0px 0px 8px 2px inset #33333315",
              }}
            >
              <div
                className="content bg-white px-3 py-4"
                style={{
                  boxShadow: "0px 0px 8px 2px #33333310",
                  overflow: "hidden",
                }}
              >
                <SwitchMotion routes={dashboardRoutes} />
              </div>
            </Content>
          </Suspense>
        </Router>
      </Layout>
    </Layout>
  );
}
