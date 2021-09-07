import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { authenticate } from "../../configs/auth";

const { Text, Link } = Typography;

export default function FormLogin() {
  const { replace } = useHistory();
  const [loginLoading, setLoginLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOnFinish = async (value) => {
    try {
      setLoginLoading(true);
      await authenticate(value);
      replace("/dashboard");
    } catch (err) {
      setLoginLoading(false);
      throw new Error(err);
    }
  };

  return (
    <>
      <Form
        id="login-form"
        style={{ margin: "2.75rem 0" }}
        form={form}
        onFinish={handleOnFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Mohon masukkan username",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ marginRight: "8px" }} />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Mohon masukkan password",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ marginRight: "8px" }} />}
            placeholder="Password"
          />
        </Form.Item>
        <Row justify="space-between">
          <Button type="link" style={{ padding: 0 }}>
            <strong>Lupa Password</strong>
          </Button>
          <Button
            type="primary"
            loading={loginLoading}
            htmlType="submit"
            style={{ display: "flex", alignItems: "center" }}
          >
            <strong>Login</strong>
          </Button>
        </Row>
      </Form>
      <Text type="secondary">
        Belum punya akun ? daftar <Link underline>disini</Link>
      </Text>
    </>
  );
}
