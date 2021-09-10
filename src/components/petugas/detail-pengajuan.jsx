import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function DetailPengajuan() {
  const { params } = useRouteMatch();
  return <div>Detail Pengajuan {params.id}</div>;
}
