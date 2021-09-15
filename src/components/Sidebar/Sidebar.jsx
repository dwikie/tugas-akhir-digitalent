import React from "react";
import { Grid } from "antd";
import useDashboard from "../../hooks/useDashboard";
import SidebarSider from "./Sider/Sider";
import SidebarDrawer from "./Drawer/Drawer";

export default function Sidebar({ sidebarItems }) {
  const gridBreakpoint = Grid.useBreakpoint();

  const { sidebar, setSidebar } = useDashboard();

  function closeSidebar() {
    setSidebar({ ...sidebar, isVisible: !sidebar.isVisible });
  }

  return (
    <>
      {gridBreakpoint.lg ? (
        <>
          <SidebarSider
            isVisible={sidebar.isVisible}
            menuItems={sidebarItems}
            closeSidebar={closeSidebar}
          />
        </>
      ) : (
        <SidebarDrawer
          isVisible={sidebar.isVisible}
          menuItems={sidebarItems}
          closeSidebar={closeSidebar}
        />
      )}
    </>
  );
}
