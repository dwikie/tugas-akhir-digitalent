import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import buttonThemes from "./themes";

export default function Button({
  htmlType,
  variant,
  type,
  description,
  loading,
  prefixCls,
  children,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={`${prefixCls && prefixCls} ${buttonThemes(
        type,
        variant,
      )} py-2.5 px-4 rounded-sm transition-colors duration-300 relative`}
      type={htmlType}
      disabled={loading}
    >
      {children} {loading && <LoadingOutlined className="ml-4" />}
    </button>
  );
}
