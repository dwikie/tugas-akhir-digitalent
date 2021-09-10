import React from "react";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Row, Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const { Header } = Layout;

export default function Navbar(props) {
  const [isCollapsed, setIsCollapsed] = props.siderCollapsed;

  function handleCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  const menu = (
    <Menu>
      <Menu.Item
        onClick={props.handleLogout}
        key="logout"
        icon={<LogoutOutlined />}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="bg-white"
      style={{ padding: 0, display: "flex", alignItems: "center", zIndex: 1 }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{ flex: 1, padding: "0 1.25rem" }}
      >
        <Col>
          <Button
            onClick={handleCollapsed}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Col>
        <Col>
          <Dropdown overlay={menu}>
            <Avatar
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}
