import React from "react";
import { Button, Form, Typography } from "antd";

export default function DisplayPengajuanKPR(props) {
  const { url } = props.match;

  function handleGoToDokumenTambahan() {
    props.history.push(`${url}/dokumen-tambahan`);
  }

  function handleGoToPengajuanKPR() {
    props.history.push(`${url}/pengajuan-kpr`);
  }

  return (
    <>
      <Typography.Title
        level={3}
        style={{ textAlign: "center", margin: "10px 0" }}
      >
        Status Pengajuan
      </Typography.Title>

      <Form>
        <div className="mb-2">
          <td>
            {" "}
            No Induk KTP &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;:{" "}
          </td>
          <td> &ensp; 1234567891000910 </td>
        </div>

        <div className="mb-2">
          <td> Nama Lengkap &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;: </td>
          <td> &ensp;Agung Sunandar </td>
        </div>

        <div className="mb-2">
          <td> Tempat, Tanggal Lahir &nbsp;: </td>
          <td> &ensp; Bandung, 7 Juli 1980 </td>
        </div>

        <div className="mb-2">
          <td> Alamat saat ini &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; : </td>
          <td> &ensp; Jl. Raya Bojongsoang,No.180, Bandung</td>
        </div>

        <div className="mb-2">
          <td>
            {" "}
            Pekerjaan
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:
          </td>
          <td> &ensp; Seniman </td>
        </div>

        <div className="mb-2">
          <td> Pendapatan per bulan : </td>
          <td> &ensp; Rp 5.000.000</td>
        </div>

        <div>
          <label>
            {" "}
            Bukti Selfie KTP &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:{" "}
          </label>
          <Button type="link">file_selfie_ktp.pdf</Button>
        </div>

        <div>
          <label>
            {" "}
            Bukti Slip Gaji &ensp;&ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;&ensp;:{" "}
          </label>
          <Button type="link">file_slip_gaji.pdf</Button>
        </div>

        <div>
          <tr>
            <label>
              {" "}
              Status Verifikasi &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: &ensp;{" "}
            </label>
            <Button type="primary" onClick={handleGoToDokumenTambahan}>
              Pengajuan telah terverifikasi, silahkan isi kelengkapan dokumen
            </Button>
          </tr>
        </div>

        <Typography.Title
          level={3}
          style={{ textAlign: "center", margin: "15px 0" }}
        >
          Kelengkapan Data KPR
        </Typography.Title>
        <div className="mb-2">
          <td> Alamat Rumah &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;: </td>
          <td> &ensp;&ensp;Jl. Permai 5 No.11A,Komplek Cipadaung Permai</td>
        </div>

        <div className="mb-2">
          <td> Luas Tanah/Rumah &ensp;&ensp;&ensp;: </td>
          <td> &ensp;&ensp;500m2</td>
        </div>

        <div className="mb-2">
          <td>
            {" "}
            Harga Rumah &ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&ensp;&ensp;:
          </td>
          <td> &ensp;&ensp;Rp 500.000.000</td>
        </div>

        <div className="mb-2">
          <td>Jangka Pembayaran&ensp;&ensp;&ensp;:&ensp;</td>
          <td> &ensp;5 Tahun</td>
        </div>

        <div>
          <label>Dokumen Pendukung &ensp;:</label>
          <Button type="link">file_pendukung.pdf</Button>
        </div>

        <div>
          <tr>
            <label> Status Pengajuan KPR &ensp;: &ensp; </label>
            <Button type="primary">Ditolak</Button>
          </tr>
        </div>

        <div class="d-flex justify-content-end">
          <Button type="primary" onClick={handleGoToPengajuanKPR}>
            Reset Pengajuan KPR
          </Button>
        </div>
      </Form>
    </>
  );
}
