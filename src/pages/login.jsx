import React, { useEffect, useState } from "react";
import { Col, Row, Card, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import FormLogin from "../components/Login/FormLogin";

const { Title } = Typography;

export default function Login() {
  const breakPoint = useBreakpoint();
  const [cardBorder, setCardBorder] = useState(true);
  const [cardShadow, setCardShadow] = useState(true);

  useEffect(() => {
    setCardBorder(!breakPoint.xs);
    setCardShadow(!breakPoint.xs);
  }, [breakPoint]);

  return (
    <main>
      <Row
        justify="center"
        align="middle"
        gutter={0}
        style={{ minHeight: "100vh" }}
      >
        <Col xs={24} sm={20} md={12} lg={10} xl={8} xxl={6}>
          <Card
            bordered={cardBorder}
            style={{
              boxShadow: cardShadow ? "2px 2px 10px 1px #33333315" : "none",
            }}
          >
            <Title level={3} style={{ textAlign: "center" }}>
              Home Loans A
            </Title>
            <FormLogin />
          </Card>
        </Col>
      </Row>
    </main>
  );
}
