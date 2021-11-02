import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Alert } from "antd";
import { Button } from "../elements";
import useGlobal from "../../hooks/useGlobal";

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
          className="my-6"
          message={error}
          type="error"
          showIcon
          closable
          afterClose={() => setError(null)}
        />
      )}
      <Form
        form={form}
        onFinish={handleOnFinish}
        className="mt-4"
        layout="vertical"
        requiredMark="optional"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Mohon masukkan username",
            },
          ]}
        >
          <Input size="large" placeholder="Username" name="username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Mohon masukkan password",
            },
          ]}
        >
          <Input.Password size="large" placeholder="Password" name="password" />
        </Form.Item>
        <div className="mt-10">
          <Button
            htmlType="submit"
            prefixCls="w-full flex items-center justify-center"
            loading={loggingIn}
          >
            Masuk
          </Button>
        </div>
      </Form>
    </>
  );
}
