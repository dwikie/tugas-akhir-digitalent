import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Alert, message as Toast } from "antd";
import { register } from "../../services/user-management-service";
import { elements } from "../";

export default function FormRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [form] = Form.useForm();
  const { replace } = useHistory();

  const handleOnFinish = async (value) => {
    try {
      setIsLoading(true);
      await register(value).start();
      setMessage({
        value: "Selamat, akun anda berhasil dibuat!",
        type: "success",
      });
      setTimeout(() => {
        replace("/login");
        Toast.success("Silahkan login untuk melanjutkan");
      }, 3000);
    } catch (err) {
      form.resetFields();
      switch (err.response.status) {
        case 400:
          setMessage({ value: "Username sudah terdaftar", type: "error" });
          form.getFieldInstance("username").focus();
          break;
        default:
          setMessage({
            value: `Terjadi kesalahan: , ${err.message}`,
            type: "error",
          });
          break;
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      {message && (
        <Alert
          className="my-6"
          message={message?.value}
          type={message.type}
          showIcon
          closable
          afterClose={() => setMessage(null)}
        />
      )}
      <Form
        form={form}
        onFinish={handleOnFinish}
        className="mt-4"
        layout="vertical"
        autoComplete="off"
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

        <Form.Item
          label="Konfirmasi Password"
          name="confirm-password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Mohon masukkan konfirmasi password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Konfirmasi passord tidak valid"),
                );
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            placeholder="Ketik Ulang Password"
            name="confirm-password"
            visibilityToggle={false}
          />
        </Form.Item>
        <div className="mt-10">
          <elements.Button
            htmlType="submit"
            prefixCls="w-full flex items-center justify-center"
            loading={isLoading}
          >
            Daftar
          </elements.Button>
        </div>
      </Form>
    </>
  );
}
