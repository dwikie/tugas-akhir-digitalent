import React, { useEffect, useState, useCallback } from "react";
import { Alert, Table, Skeleton } from "antd";
import { useHistory, useLocation } from "react-router";

// Render dummy data sebanyak 50
const peoples = [];
for (let i = 1; i <= 50; i++) {
  peoples.push({
    alamat: "Bojongsoang no.180 Bandung",
    bukti_gaji: "798735247/files/doc_downloads/test.pdf",
    bukti_ktp: "798735247/files/doc_downloads/test.pdf",
    id_cust: i,
    id_pengajuan: i,
    nama_lengkap: `${i} Nama Orang`,
    nik: "12345678910",
    pekerjaan: "Seniman",
    pendapatan_perbulan: 5000000,
    status: 3,
    tanggal_lahir: "07/08/1980",
    tempat_lahir: "Bandung",
  });
}

export default function TableDaftarPengajuan({
  data,
  columns,
  error,
  loading,
  onTableRowClick,
}) {
  const [isPage, setIsPage] = useState(1);
  const [isPageSize, setIsPageSize] = useState(10);

  const { push } = useHistory();
  const { search } = useLocation();

  const getPaginationId = useCallback(() => {
    const regex = /\d+/g;
    if (!search) {
      return null;
    } else {
      const resultId = search.match(regex);
      const id = parseInt(resultId[0]);

      setIsPage(id);
    }
  }, [search]);

  useEffect(() => {
    getPaginationId();
  }, [getPaginationId]);

  // console.log(idPage);
  // console.log("ini search", search);

  return (
    <>
      {error ? (
        <Alert
          data-testid="alert-daftar-pengajuan"
          message={`Terjadi kesalahan. ${error}`}
          type="error"
          showIcon
          style={{ marginBottom: 20 }}
        />
      ) : null}
      <Table
        data-testid="table-daftar-pengajuan"
        pagination={{
          pageSize: isPageSize,
          current: !search ? 1 : isPage,
          onChange: (page, pageSize) => {
            // push(`/dashboard/pengajuan?page=${page}`)
            push({
              pathname: "/dashboard/pengajuan",
              search: `?page=${page}`,
            });
            setIsPage(page);
            setIsPageSize(pageSize);
          },
        }}
        dataSource={data}
        rowKey={(record) => record.id_pengajuan}
        columns={columns}
        locale={{
          emptyText: loading && (
            <Skeleton
              data-testid="skeleton-daftar-pengajuan"
              active={true}
              paragraph={{ width: "100%", rows: 5 }}
              title={false}
            />
          ),
        }}
        onRow={(record) => {
          return {
            onClick: () => onTableRowClick(record.id_pengajuan),
            style: {
              cursor: "pointer",
            },
          };
        }}
      />
    </>
  );
}
