import React from "react";
import { Grid } from "antd";
import useDashboard from "../../hooks/useDashboard";
import SidebarSider from "./Sider";
import SidebarDrawer from "./Drawer";

export default function Sidebar({ sidebarItems }) {
  const gridBreakpoint = Grid.useBreakpoint();
  const { isSidebarVisible } = useDashboard();
  const [isVisible, setIsVisible] = isSidebarVisible;

  function closeSidebar() {
    setIsVisible((isVisible) => !isVisible);
  }

  if (gridBreakpoint.lg) {
    return (
      <SidebarSider
        isVisible={isVisible}
        menuItems={sidebarItems}
        closeSidebar={closeSidebar}
      />
    );
  }
  return (
    <SidebarDrawer
      isVisible={!isVisible}
      menuItems={sidebarItems}
      closeSidebar={closeSidebar}
    />
  );
}
