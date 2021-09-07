import React, { useState } from "react";
import { Button, Form, Row, Select, Col, InputGroup } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

export default function FormDokumenTambahan() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (e) => {
    setValidated(true);
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Alamat Saat Ini
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control
              rows="3"
              as="textarea"
              name="alamat-rumah"
              required
              style={{ maxHeight: "100px" }}
            />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Alamat Rumah</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Luas Tanah/Rumah
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              name="luas-tanah-rumah"
              placeholder="m²"
              required
            />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Luas Tanah/Rumah</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Harga Rumah
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <InputGroup className="mb-3">
              <InputGroup.Text>Rp.</InputGroup.Text>
              <Form.Control
                className="rounded-top rounded-bottom"
                type="number"
                name="harga-rumah"
                required
                inputMode="numeric"
              />
              <Form.Control.Feedback type="invalid">
                Mohon masukkan <strong>Harga Rumah</strong>
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Jangka Pembayaran
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Select name="jangka-pembayaran" required>
              <option selected disabled value="" hidden>
                - Pilih Jangka Pembayaran -
              </option>
              <option value="1">1 Tahun</option>
              <option value="2">2 Tahun</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Jangka Pembayaran</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Dokumen Pendukung
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control type="file" name="selfie-ktp" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Dokumen Pendukung</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex justify-content-end my-3">
        <Button type="submit" className="d-flex align-items-center">
          <FaPaperPlane className="me-3" />
          Submit Dokumen Tambahan dan Ajukan KPR
        </Button>
      </div>
    </Form>
  );
}
