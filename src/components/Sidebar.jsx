import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import useDashboard from "../hooks/useDashboard";

const { Sider } = Layout;

export default function Sidebar(props) {
  const siderItems = props.siderItems;
  const { sidebar } = useDashboard();
  const [collapsedWidth, setCollapsedWidth] = useState(80);
  const history = useHistory();

  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={sidebar.isCollapsed}
      breakpoint="md"
      collapsedWidth={collapsedWidth}
      onBreakpoint={(breakpoint) =>
        breakpoint ? setCollapsedWidth(0) : setCollapsedWidth(80)
      }
      style={{ zIndex: 1 }}
    >
      <Menu theme="light" mode="inline" defaultSelectedKeys={["Beranda"]}>
        {Array.from(siderItems).map((item) => {
          return (
            <Menu.Item
              key={item.label}
              icon={<item.icon style={{ display: "flex" }} />}
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => history.push(item.to)}
            >
              {item.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}
