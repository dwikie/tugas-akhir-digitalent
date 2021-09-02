import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
// import ReactDOM from 'react-dom';

// export default function PengajuanKPR() {
//   return <div>Buat Pengajuan KPR</div>;
// }
export default function PengajuanKPR(props) {
  return (
    <div className="wrapper">
      <h1>Form Customer</h1>
      <form>
        <fieldset>
          <label>
            <p>Nama Lengkap</p>
            <input name="name" />
          </label>
          <p></p>
          <label>
            <p>No KTP Pemohon</p>
            <input name="noktp" />
          </label>
          <p></p>
          <label>
            <p>Tanggal Penerbitan KTP</p>
            <input name="tanggalpenerbitan" />
          </label>
          <p></p>
          <label>
            <p>Tanggal Kadaluarsa</p>
            <input name="tanggalkadaluarsa" />
          </label>
          <p></p>
          <label>
            <p>TTL</p>
            <input name="TTL" />
          </label>
          <p></p>
          <label>
            <p>Status Perkawinan</p>
            <input name="statuskawin" />
          </label>
          <p></p>
          <label>
            <p>Jumlah Tanggungan</p>
            <input name="statuskawin" />
          </label>
          <p></p>
          <label>
            <p>Pendidikan Terakhir</p>
            <input name="statuskawin" />
          </label>
          <p></p>
          <label>
            <p>Warga Negara</p>
            <input name="warganegara" />
          </label>
          <p></p>
          <label>
            <p>Nama Gadis Ibu Kandung</p>
            <input name="namagadisibukandung" />
          </label>
          <p></p>
          <label>
            <p>Nomor NPWP</p>
            <input name="namagadisibukandung" />
          </label>
          <p></p>
          <label>
            <p>Status Rumah</p>
            <input name="namagadisibukandung" />
          </label>
          <p></p>


        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


