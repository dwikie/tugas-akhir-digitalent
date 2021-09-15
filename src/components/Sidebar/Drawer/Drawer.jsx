import { Drawer, Menu } from "antd";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

export default function SidebarDrawer({ isVisible, closeSidebar, menuItems }) {
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    return () => null;
  }, []);

  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      push={400}
      visible={!isVisible}
      onClose={closeSidebar}
      bodyStyle={{ padding: 0 }}
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["Beranda"]}
        selectedKeys={[pathname]}
      >
        {Array.from(menuItems).map((item) => {
          return (
            <Menu.Item
              key={item.to}
              icon={<item.icon style={{ display: "flex" }} />}
              style={{ display: "flex", alignItems: "center" }}
              onClick={(e) => {
                if (e.key === pathname) return;
                history.push(item.to);
                closeSidebar();
              }}
            >
              {item.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </Drawer>
  );
}
