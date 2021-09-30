import { Button } from "antd";
import React from "react";

export default function ButtonDownload({ text, ...rest }) {
  return <Button {...rest}>{text}</Button>;
}
