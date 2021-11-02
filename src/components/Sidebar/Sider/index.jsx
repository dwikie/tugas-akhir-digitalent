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
      theme="dark"
      trigger={null}
      collapsible
      collapsed={isVisible}
      width="250"
      breakpoint={"xl"}
      collapsedWidth={collapsedWidth}
      onBreakpoint={(breakpoint) =>
        breakpoint ? setCollapsedWidth(0) : setCollapsedWidth(100)
      }
      className="py-6 relative"
    >
      <div className="sidebar-texture absolute top-0 left-0 w-full h-full opacity-10"></div>
      <div className="flex flex-col items-center mb-6 px-4 logo-wrapper">
        <img
          src="/home-loans-text.svg"
          alt="Home Loans"
          className="filter grayscale"
          width="110"
        />
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
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
