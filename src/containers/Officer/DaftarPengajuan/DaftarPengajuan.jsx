import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FilePdfOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Title from "../../../components/Title";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useHistory, useRouteMatch } from "react-router";
import DaftarPengajuanTable from "../../../components/DaftarPengajuanTable";
import { GetAllSubmission } from "../../../services/SubmissionServices";
import Columns from "./TableColumns";
import ModalDaftarPengajuan from "../../../components/ModalDaftarPengajuan";
import { Button } from "../../../components/elements";
import ReportStyle from "./ReportStyle";
// import DaftarPengajuanPagination from "../../../components/DaftarPengajuanPagination/DaftarPengajuanPagination";

export default function DaftarPengajuan() {
  const { url } = useRouteMatch();
  const { push } = useHistory();
  // const { search } = useLocation();

  // const initialPage = useRef(new URLSearchParams(search).get("page"));
  const [tableData, setTableData] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [talbeError, setTableError] = useState("");
  const [isTableLoading, setIsTableLoading] = useState(true);
  // const [page, setPage] = useState(() =>
  //   isNaN(initialPage.current) ? 1 : parseInt(initialPage.current),
  // );
  const service = useMemo(() => GetAllSubmission(), []);
  const breakPoint = useBreakpoint();

  const getPengajuan = useCallback(async () => {
    setIsTableLoading(true);
    try {
      const { result } = await service.start();
      setTableData(result);
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

  function hideModal() {
    setModalVisibility(false);
  }

  const showModal = async () => {
    try {
      setModalVisibility(true);
      const { result } = await service.start();
      setReportData(result);
    } catch {
      service.cancel();
      setReportData([]);
    }
  };

  return (
    <Row gutter={[0, 24]} style={{ flexDirection: "column" }}>
      <Col>
        <Title title="Daftar Pengajuan" />
      </Col>
      <Row
        justify={"end"}
        style={{ flexDirection: breakPoint.md ? "row" : "column-reverse" }}
        gutter={[0, 24]}
      >
        <Col sm={24} md={8}>
          <Button
            prefixCls="justify-between"
            onClick={async () => await showModal()}
            style={{ width: "100%" }}
            text="Download Daftar Pengajuan"
          >
            <FilePdfOutlined /> Download List Pengajuan
            <div></div>
          </Button>
          <ModalDaftarPengajuan
            reportStyle={ReportStyle}
            data={reportData}
            modalVisibility={modalVisibility}
            hideModal={hideModal}
          />
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
