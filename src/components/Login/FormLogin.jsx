import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Form, Input, Button, Typography, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import useGlobal from "../../hooks/useGlobal";

const { Text } = Typography;

export default function FormLogin() {
  const history = useHistory();
  const [loggingIn, setloggingIn] = useState(false);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();
  const { login } = useGlobal();

  const handleOnFinish = async (value) => {
    try {
      setloggingIn(true);
      await login(value);
      history.replace("/dashboard");
    } catch (err) {
      form.resetFields();
      switch (err.response.status) {
        case 404:
        case 401:
          setError("Username atau Password salah");
          form.getFieldInstance("username").focus();
          break;
        default:
          setError("Terjadi kesalahan: ", err.message);
          break;
      }
      setloggingIn(false);
    }
  };

  return (
    <>
      {error && (
        <Alert
          style={{ marginBottom: "-1.25rem", marginTop: "1.75rem" }}
          message={error}
          type="error"
          showIcon
          closable
          afterClose={() => setError(null)}
        />
      )}
      <Form
        id="login-form"
        style={{ margin: "2.75rem 0" }}
        form={form}
        onFinish={handleOnFinish}
      >
        <Form.Item
          name={["username"]}
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
            name="username"
          />
        </Form.Item>

        <Form.Item
          name={["password"]}
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
            name="password"
          />
        </Form.Item>

        <Row justify="space-between">
          <Button type="link" style={{ padding: 0 }}>
            <strong>Lupa Password</strong>
          </Button>
          <Button
            type="primary"
            loading={loggingIn}
            htmlType="submit"
            style={{ display: "flex", alignItems: "center" }}
          >
            <strong>Masuk</strong>
          </Button>
        </Row>
      </Form>
      <Text type="secondary">
        Belum punya akun ? daftar <Link to="/register">disini</Link>
      </Text>
    </>
  );
}
