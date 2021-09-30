import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import useGlobal from "../../hooks/useGlobal";
import Checkbox from "antd/lib/checkbox/Checkbox";

const { Text, Link } = Typography;

export default function FormLogin() {
  const history = useHistory();
  const [loggingIn, setloggingIn] = useState(false);
  const [form] = Form.useForm();
  const { account, login } = useGlobal();
  const [, setUser] = account;

  const handleOnFinish = async (value) => {
    try {
      setloggingIn(true);
      await login(value);
      setUser({ ...value, isLoggedIn: true });
      history.replace("/dashboard");
    } catch (err) {
      setloggingIn(false);
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
          name={["login", "username"]}
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
          name={["login", "password"]}
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

        <Form.Item
          name="isPetugas"
          valuePropName="checked"
          initialValue={false}
        >
          <Checkbox>Petugas</Checkbox>
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
