import React from "react";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Layout, Row, Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import useDashboard from "../../hooks/useDashboard";
import useGlobal from "../../hooks/useGlobal";
import { Button } from "../elements";

const { Header } = Layout;

export default function Navbar() {
  const { isSidebarVisible } = useDashboard();
  const { logout } = useGlobal();
  const [isVisible, setIsVisible] = isSidebarVisible;

  function handleCollapsed() {
    setIsVisible((isVisible) => !isVisible);
  }

  const menu = (
    <Menu className="rounded-lg">
      <Menu.Item onClick={logout} key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header className="relative p-0 flex items-center z-10">
        <Row
          justify="space-between"
          align="middle"
          style={{ flex: 1, padding: "1.5rem 1.25rem" }}
        >
          <Col>
            <Button htmlType="button" type="outlined" onClick={handleCollapsed}>
              {isVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Col>
          <Col>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar
                className="bg-primary"
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
    </>
  );
}
