import React from "react";
import { Table } from "react-bootstrap";

export default function DisplayPengajuanKPR(props) {
  const { url } = props.match;

  function handleGoToDokumenTambahan() {
    props.history.push(`${url}/dokumen-tambahan`);
  }

  return (
    <>
      <h3 className="text-center mb-3">Status Pengajuan</h3>
      <Table striped>
        <tbody>
          <tr>
            <td>Nama</td>
            <td>xxx</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>xxx</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>xxx</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
