import React from "react";
import { Form, Button } from "react-bootstrap";

export default function DisplayPengajuanKPR(props) {
  const { url } = props.match;
  console.log(url);
  function handleGoToDokumenTambahan() {
    props.history.push(`${url}/dokumen-tambahan`);
  }
  return (
    <div>
      <th> Data Diri Anda </th>
      <Form>
        <div className="mb-2">
          <td>
            {" "}
            No Induk KTP &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;:{" "}
          </td>
          <td> &ensp;1234567891000910 </td>
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
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;:{" "}
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
          <Button variant="link">file_selfie_ktp.pdf</Button>
        </div>
        <div>
          <label>
            {" "}
            Bukti Slip Gaji &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; :{" "}
          </label>
          <Button variant="link">file_slip_gaji.pdf</Button>
        </div>
        <div>
          <tr>
            <label>
              {" "}
              Status Verifikasi &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: &ensp;{" "}
            </label>
            <Button onClick={handleGoToDokumenTambahan}>
              Terverifikasi, Lengkapi Persyaratan Dokumen Tambahan
            </Button>
          </tr>
        </div>
      </Form>
    </div>
  );
}
