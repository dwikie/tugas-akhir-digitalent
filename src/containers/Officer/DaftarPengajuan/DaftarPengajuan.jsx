import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FilePdfOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Input, Row, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useHistory, useRouteMatch } from "react-router";
import DaftarPengajuanTable from "../../../components/DaftarPengajuanTable";
import SPengajuan from "../../../services/SPengajuan";
import Columns from "./TableColumns";
// import DaftarPengajuanPagination from "../../../components/DaftarPengajuanPagination/DaftarPengajuanPagination";

export default function DaftarPengajuan() {
  const service = useMemo(() => new SPengajuan(), []);

  const { url } = useRouteMatch();
  const { push } = useHistory();
  // const { search } = useLocation();

  // const initialPage = useRef(new URLSearchParams(search).get("page"));

  const [tableData, setTableData] = useState([]);
  const [talbeError, setTableError] = useState("");
  const [isTableLoading, setIsTableLoading] = useState(true);
  // const [page, setPage] = useState(() =>
  //   isNaN(initialPage.current) ? 1 : parseInt(initialPage.current),
  // );

  const breakPoint = useBreakpoint();

  const getPengajuan = useCallback(async () => {
    setIsTableLoading(true);
    try {
      const { data } = await service.getAll.start();
      setTableData(data);
      setIsTableLoading(false);
    } catch (error) {
      setTableError(error.message);
      setIsTableLoading(false);
    }
  }, [service.getAll]);

  useEffect(() => {
    getPengajuan();
    return () => {
      service.getAll.cancel();
      setTableData([]);
    };
  }, [getPengajuan, service.getAll]);

  function onTableRowClick(id_pengajuan) {
    push(`${url}/${id_pengajuan}`);
  }

  return (
    <Row gutter={[0, 24]} style={{ flexDirection: "column" }}>
      <Col>
        <Typography.Title level={5} style={{ textAlign: "center" }}>
          Daftar Pengajuan
        </Typography.Title>
        <Divider />
      </Col>
      <Row
        justify={"space-between"}
        style={{ flexDirection: breakPoint.md ? "row" : "column-reverse" }}
        gutter={[0, 24]}
      >
        <Col sm={24} md={8}>
          <Input placeholder="Cari.." allowClear />
        </Col>
        <Col sm={24} md={8}>
          <Button
            style={{ width: "100%" }}
            icon={<FilePdfOutlined />}
            text="Download Daftar Pengajuan"
          >
            Download List Pengajuan
          </Button>
        </Col>
      </Row>
      <DaftarPengajuanTable
        columns={Columns}
        onTableRowClick={onTableRowClick}
        data={tableData}
        error={talbeError}
        loading={isTableLoading}
      />
      {/* <Row justify="end">
        <DaftarPengajuanPagination />
      </Row> */}
    </Row>
  );
}
