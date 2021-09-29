import React, { useEffect, useMemo, useRef, useState } from "react";
import { Alert, Table } from "antd";
import { useHistory, useRouteMatch } from "react-router";
import SListPengajuan from "../../../../services/SPengajuan";

export default function TableListPengajuan() {
  const _service = useMemo(() => new SListPengajuan(), []);
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  const { url } = useRouteMatch();
  const { push } = useHistory();

  useEffect(() => {
    const populateTableData = async () => {
      try {
        const { data } = await _service.get.start();
        setTableData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    populateTableData();
    return () => {
      _service.get.cancel();
      setTableData([]);
    };
  }, [_service]);

  function handleActionEditButton(id) {
    push(`${url}/${id}`);
  }

  const columns = useRef([
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
      render: (text, row, index) => index + 1,
    },
    {
      title: "Tanggal Pengajuan",
      dataIndex: "tanggalPengajuan",
      key: "tanggalPengajuan",
      render: () => "Senin, 23 Agustus",
    },
    {
      title: "Nama",
      dataIndex: "nama_lengkap",
      key: "nama",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value) => {
        switch (value) {
          case 1:
            return "Menunggu Konfirmasi";
          case 2:
            return "Dibatalkan";
          case 3:
            return "Disetujui";
          case 4:
            return "Selesai";
          default:
            return "-";
        }
      },
    },
    {
      title: "Rekomendasi",
      dataIndex: "rekomendasi",
      key: "rekomendasi",
      render: () => "Iya",
    },
  ]);

  return (
    <>
      {isError ? (
        <Alert
          message={`Opps! ${isError}`}
          type="error"
          showIcon
          style={{ marginBottom: 20 }}
        />
      ) : null}
      <Table
        dataSource={tableData}
        rowKey={(record) => record.id_pengajuan}
        columns={columns.current}
        loading={isLoading}
        onRow={(record) => {
          return {
            onClick: () => handleActionEditButton(record.id_pengajuan),
            style: {
              cursor: "pointer",
            },
          };
        }}
      />
    </>
  );
}
