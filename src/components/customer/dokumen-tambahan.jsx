import React, { useState } from "react";
import { 
  Button, 
  Form, 
  Row,
  Select, 
  Col 
} from "react-bootstrap";

export default function DokumenTambahan() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
 
    // Gunakan attribute "name" dari input.
    console.log(formData.get("alamat"))
    console.log(formData.get("luas_tanah"))
    console.log(formData.get("harga_rumah"))
    console.log(formData.get("jangka"))
    console.log(formData.get("dokumen"))
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Silahkan Isi Form Kelengkapan Data</h1>

      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label column sm="2">Alamat Rumah</Form.Label>
            <Form.Control
              name="alamat"
              type="text"
              placeholder=""
              required 
            />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan Alamat Rumah
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Luas Tanah/Rumah</Form.Label>
            <Form.Control
              name="luas_tanah" 
              type="text"
              placeholder="m2"
              required 
            />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan luas tanah/rumah
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Harga Rumah (Nett)</Form.Label>
            <Form.Control
              name="harga_rumah"
              type="text"
              placeholder=""
              required
            />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan harga rumah
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Jangka Pembayaran</Form.Label>
            <Form.Select name="jangka" type="text" required>
              <option value="">Pilih jumlah tahun</option>
              <option value="1">1 Tahun</option>
              <option value="2">2 Tahun</option>
            </Form.Select>
  
            <Form.Control.Feedback type="invalid">
              Mohon masukkan jangka pembayaran
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Dokumen Pendukung</Form.Label>
            <Form.Control
              name="dokumen"
              type="file"
              required
            />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan dokumen pendukung dalam bentuk .pdf
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <br></br>
      <div className="d-flex justify-content-end">
        <Button variant="warning" type="submit">Submit Kelengkapan Data & Ajukan</Button>
      </div>
    </Form>
  );
}