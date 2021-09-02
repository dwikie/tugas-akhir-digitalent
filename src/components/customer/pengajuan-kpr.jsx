import React, { useState } from "react";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";

export default function PengajuanKPR() {
  const [validated, setValidated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      //go to
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h3 className="mb-4 text-center">Silahkan Isi Form Data Diri</h3>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          NIK
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control type="text" name="nik" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>NIK</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Nama Lengkap
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control type="text" name="nama" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Nama Lengkap</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Tempat, Tanggal Lahir
        </Form.Label>
        <Col xs={8} md={6} lg={7}>
          <Form.Group className="mb-2">
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Tempat Lahir</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={4} md={3} lg={3}>
          <Form.Group className="mb-2">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control"
              required
            />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Tanggal Lahir</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Alamat Lengkap
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control rows="3" as="textarea" name="nama" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Alamat Lengkap</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Pekerjaan
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control type="text" name="nama" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Pekerjaan</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Pendapatan Perbulan
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <InputGroup className="mb-3">
              <InputGroup.Text>Rp.</InputGroup.Text>
              <Form.Control
                className="rounded-top rounded-bottom"
                type="number"
                name="nama"
                required
                inputMode="numeric"
              />
              <Form.Control.Feedback type="invalid">
                Mohon masukkan <strong>Pendapatan Perbulan</strong>
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Bukti Selfie KTP
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control type="file" name="nama" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Bukti Selfie KTP</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-sm-0 mb-md-2">
        <Form.Label column md={3} lg={2}>
          Bukti Slip Gaji Suami dan/atau Istri
        </Form.Label>
        <Col xs={12} md={9} lg={10}>
          <Form.Group className="mb-2">
            <Form.Control type="file" name="nama" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan <strong>Bukti Slip Gaji</strong>
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <Button type="submit" className="d-flex align-items-center">
          <FaPaperPlane className="me-3" />
          Submit Pengajuan KPR
        </Button>
      </div>
    </Form>
  );
}
