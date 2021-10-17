import React from "react";
import { Row, Col, Skeleton } from "antd";

export default function DisplayRow({ data }) {
  return (
    <Row gutter={[8, 4]} style={{ marginBottom: ".5rem" }}>
      <Col xs={10} sm={8} md={6} lg={5} xl={4} xxl={3}>
        {data?.value ? (
          <span style={{ fontWeight: "bold" }}>{data.label}</span>
        ) : (
          <Skeleton
            title={false}
            loading
            paragraph={{ rows: 1, width: "100%" }}
          />
        )}
      </Col>
      <Col
        xs={24}
        sm={16}
        md={18}
        lg={19}
        xl={20}
        xxl={21}
        style={{ whiteSpace: "normal" }}
      >
        {data?.value ? (
          data.value
        ) : (
          <Skeleton
            title={false}
            loading={true}
            paragraph={{ rows: 1, width: "100%" }}
          />
        )}
      </Col>
    </Row>
  );
}
