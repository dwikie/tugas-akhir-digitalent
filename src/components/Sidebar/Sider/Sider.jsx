import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Layout, Menu } from "antd";

export default function SidebarSider({ menuItems, isVisible }) {
  const [collapsedWidth, setCollapsedWidth] = useState(80);
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    return () => null;
  }, []);

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
              onClick={(e) => {
                if (e.key === pathname) return;
                history.push(item.to);
              }}
            >
              {item.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
}
