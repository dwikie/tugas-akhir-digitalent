import React, { useState } from "react";
import { useLocation } from "react-router";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

export default function SidebarSider({ menuItems, isVisible }) {
  const [collapsedWidth, setCollapsedWidth] = useState(80);
  const { pathname } = useLocation();
  function handleLinkClick(item) {
    return function (e) {
      if (item.to === pathname) {
        e.preventDefault();
      }
    };
  }

  return (
    <Layout.Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={isVisible}
      breakpoint={"xl"}
      collapsedWidth={collapsedWidth}
      onBreakpoint={(breakpoint) =>
        breakpoint ? setCollapsedWidth(0) : setCollapsedWidth(80)
      }
      style={{ zIndex: 1 }}
    >
      <Menu theme="light" mode="inline" selectedKeys={[pathname]}>
        {Array.from(menuItems).map((item) => {
          return (
            <Menu.Item
              key={item.to}
              icon={<item.icon style={{ display: "flex" }} />}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link
                to={item.to}
                style={{ color: "inherit" }}
                onClick={handleLinkClick(item)}
              >
                {item.label}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
}
