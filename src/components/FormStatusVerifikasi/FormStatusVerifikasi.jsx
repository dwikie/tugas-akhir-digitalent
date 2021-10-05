import { Form, Select } from "antd";
import React from "react";

export default function FormStatusVerifikasi({ onChange, onFinish }) {
  return (
    <Form name="verifikasi" onFinish={onFinish}>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onChange}
          allowClear
        >
          <Select.Option value="-">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
          <Select.Option value="other">other</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
}
