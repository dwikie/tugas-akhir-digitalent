import React from "react";
import { Alert, Table, Skeleton } from "antd";

export default function TableDaftarPengajuan({
  data,
  columns,
  error,
  loading,
  onTableRowClick,
}) {
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
        pagination={false}
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
