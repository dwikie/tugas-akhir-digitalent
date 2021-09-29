import React from "react";
import { Progress } from "antd";

import "./PageIndicator.css";

export default function PageIndicator() {
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    const progress = setTimeout(
      () =>
        setPercent((prevPercent) =>
          prevPercent < 60 ? prevPercent + Math.floor(Math.random() * 20) : 81,
        ),
      200,
    );
    return () => clearTimeout(progress);
  }, [percent]);

  return (
    percent < 100 && (
      <Progress
        strokeLinecap="square"
        percent={percent}
        showInfo={false}
        strokeWidth={3}
        size="small"
      />
    )
  );
}
