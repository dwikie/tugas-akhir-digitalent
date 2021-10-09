import { Drawer, Menu } from "antd";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function SidebarDrawer({ isVisible, closeSidebar, menuItems }) {
  const { pathname } = useLocation();
  function handleLinkClick(item) {
    return function (e) {
      if (item.to === pathname) {
        e.preventDefault();
        return;
      }
      closeSidebar();
      return;
    };
  }

  return (
    <Drawer
      title="Home Loans"
      placement="left"
      push={400}
      visible={isVisible}
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
            >
              <Link
                to={item.to}
                onClick={handleLinkClick(item)}
                style={{ color: "inherit" }}
              >
                {item.label}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Drawer>
  );
}
