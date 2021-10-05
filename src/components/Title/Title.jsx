import { Col, Divider, Typography } from "antd";
import React from "react";

export default function Title({ title, style, ...rest }) {
  return (
    <Col>
      <Typography.Title level={5} style={{ textAlign: "center", ...style }}>
        {title}
      </Typography.Title>
      <Divider />
    </Col>
  );
}
