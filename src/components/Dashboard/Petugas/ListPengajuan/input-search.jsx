import React from "react";
import { Input } from "antd";

export default function InputSearch({ placeholder, ...rest }) {
  return <Input allowClear placeholder={placeholder} {...rest} />;
}
