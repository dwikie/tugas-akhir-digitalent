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
      className={`${prefixCls || null} ${buttonThemes(
        type,
        variant,
      )} py-2.5 px-4 rounded-md transition-colors duration-300 relative leading-6 flex items-center`}
      type={htmlType}
      disabled={loading}
    >
      {children} {loading && <LoadingOutlined className="ml-4" />}
    </button>
  );
}
