import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Form, Input, Button, Typography, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { register } from "../../services/user-management-service";

const { Text } = Typography;

export default function FormRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

  const handleOnFinish = async (value) => {
    try {
      setIsLoading(true);
      await register(value).start();
    } catch (err) {
      form.resetFields();
      switch (err.response.status) {
        case 400:
          setError("Username sudah terdaftar");
          form.getFieldInstance("username").focus();
          break;
        default:
          setError("Terjadi kesalahan: ", err.message);
          break;
      }
      setIsLoading(false);
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
        autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
          />
        </Form.Item>

        <Row justify="end">
          <Button
            type="primary"
            loading={isLoading}
            htmlType="submit"
            style={{ display: "flex", alignItems: "center" }}
          >
            <strong>Daftar</strong>
          </Button>
        </Row>
      </Form>
      <Text type="secondary">
        Sudah punya akun ? masuk <Link to="/login">disini</Link>
      </Text>
    </>
  );
}
