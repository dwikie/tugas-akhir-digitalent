import React from "react";
import { Row, Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <Row className="splash-screen">
      <Row className="splash-screen-indicator-wrapper">
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: "30px" }} />}
          style={{ marginBottom: "1.25rem" }}
        />
        <Typography.Text type={"secondary"}>Loading</Typography.Text>
      </Row>
    </Row>
  );
}
