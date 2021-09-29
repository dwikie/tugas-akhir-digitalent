import React from "react";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Layout,
  Row,
  Dropdown,
  Menu,
  Typography,
  Space,
} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import useDashboard from "../../hooks/useDashboard";
import useGlobal from "../../hooks/useGlobal";

const { Header } = Layout;

export default function Navbar() {
  const { isSidebarVisible } = useDashboard();
  const { logout } = useGlobal();
  const [isVisible, setIsVisible] = isSidebarVisible;

  function handleCollapsed() {
    setIsVisible((isVisible) => !isVisible);
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={logout} key="logout" icon={<LogoutOutlined />}>
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
          <Space size={18}>
            <Button
              onClick={handleCollapsed}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {isVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Typography.Title level={4} style={{ margin: 0 }}>
              Home Loans A
            </Typography.Title>
          </Space>
        </Col>
        <Col>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Avatar
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}
