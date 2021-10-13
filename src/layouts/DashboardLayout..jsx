import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchMotion from "../configs/switch-motion";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import PageIndicator from "../components/PageIndicator/PageIndicator";

const { Content } = Layout;

export default function DashboardLayout({ routes }) {
  const [sidebarItems, setSidebarItems] = useState([]);
  const dashboardRoutes = useMemo(() => routes, [routes]);
  const switchAnimation = {
    initial: {
      y: -10,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
    },
  };

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
                className="content bg-white"
                style={{
                  padding: "1.75rem 1rem",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 8px 2px #33333310",
                  overflow: "hidden",
                }}
              >
                <SwitchMotion
                  animate={switchAnimation.animate}
                  initial={switchAnimation.initial}
                  exit={switchAnimation.exit}
                  routes={dashboardRoutes}
                />
              </div>
            </Content>
          </Suspense>
        </Router>
      </Layout>
    </Layout>
  );
}
