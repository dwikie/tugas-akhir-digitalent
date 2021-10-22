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
    <Layout className="dashboard">
      <Router>
        <Sidebar sidebarItems={sidebarItems} />
        <Layout className="relative min-h-screen">
          <div className="sidebar-texture absolute top-0 left-0 w-full h-full"></div>
          <Navbar />
          <Suspense fallback={<PageIndicator />}>
            <Content className="py-4 px-4 sm:px-16 z-50">
              <div className="px-6 py-8 container mx-auto bg-white rounded-lg sm:rounded-md shadow-lg">
                <SwitchMotion
                  animate={switchAnimation.animate}
                  initial={switchAnimation.initial}
                  exit={switchAnimation.exit}
                  routes={dashboardRoutes}
                />
              </div>
            </Content>
          </Suspense>
        </Layout>
      </Router>
    </Layout>
  );
}
