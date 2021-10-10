import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FilePdfOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import Title from "../../../components/Title";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useHistory, useRouteMatch } from "react-router";
import DaftarPengajuanTable from "../../../components/DaftarPengajuanTable";
import { getAll } from "../../../services/pengajuan-service";
import Columns from "./TableColumns";
import DaftarPengajuanPagination from "../../../components/DaftarPengajuanPagination/DaftarPengajuanPagination";

export default function DaftarPengajuan() {
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
  const service = useMemo(() => getAll(1, 10), []);

  const breakPoint = useBreakpoint();

  const getPengajuan = useCallback(async () => {
    setIsTableLoading(true);
    try {
      const { data } = await service.start();
      setTableData(data);
      setIsTableLoading(false);
    } catch (error) {
      setTableError(error.message);
      setIsTableLoading(false);
    }
  }, [service]);

  useEffect(() => {
    getPengajuan();
    return () => {
      service.cancel();
      setTableData([]);
    };
  }, [getPengajuan, service]);

  function onTableRowClick(id_pengajuan) {
    push(`${url}/${id_pengajuan}`);
  }

  return (
    <Row gutter={[0, 16]} style={{ flexDirection: "column" }}>
      <Title title="Daftar Pengajuan" />

      <section className="container" id="daftar-pengajuan-action">
        <Row
          justify={"space-between"}
          style={{ flexDirection: breakPoint.md ? "row" : "column-reverse" }}
          gutter={[0, 20]}
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
      </section>
      <section className="container" id="daftar-pengajuan-table">
        <Row style={{ flexDirection: "column" }} gutter={[0, 16]}>
          <DaftarPengajuanTable
            columns={Columns}
            onTableRowClick={onTableRowClick}
            data={tableData}
            error={talbeError}
            loading={isTableLoading}
          />
          <Row justify="end">
            <DaftarPengajuanPagination />
          </Row>
        </Row>
      </section>
    </Row>
  );
}
