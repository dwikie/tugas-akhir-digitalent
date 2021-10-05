import React from "react";
import { Row, Col, Skeleton } from "antd";

export default function DisplayRow({ data }) {
  return (
    <Row gutter={[16, 6]}>
      <Col xs={24} sm={8} md={6} lg={5} xl={4} xxl={3}>
        {data?.label ? (
          <span style={{ fontWeight: 500 }}>{data.label}</span>
        ) : (
          <Skeleton title={false} paragraph={{ rows: 1, width: "100%" }} />
        )}
      </Col>
      <Col xs={24} sm={16} md={18} lg={19} xl={20} xxl={21}>
        {data?.value ? (
          data.value
        ) : (
          <Skeleton title={false} paragraph={{ rows: 1, width: "100%" }} />
        )}
      </Col>
    </Row>
  );
}
