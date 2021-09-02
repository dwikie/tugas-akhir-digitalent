import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/src/stylesheets/datepicker.scss";
import { AiFillCalendar } from "react-icons/ai";

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
      <h1>Silahkan Isi Form Data Diri</h1>
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label column sm="2">
              Nomor induk KTP
            </Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan NIK
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan nama lengkap
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <Form.Group className="mb-2">
            <Form.Label>Tempat, Tanggal Lahir</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan tempat, tanggal lahir
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Form.Group className="mb-2">
            <AiFillCalendar />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableMonthYearDropdown
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Alamat saat ini</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan alamat saat ini
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Pekerjaan</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan pekerjaan
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Pendapatan per bulan</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Mohon pendapatan per bulan
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Bukti Selfie KTP</Form.Label>
            <Form.Control type="file" required />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan bukti selfie KTP
            </Form.Control.Feedback>
            <Button variant="link">contoh selfie</Button>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-2">
            <Form.Label>Bukti Slip Gaji Suami dan/atau Istri</Form.Label>
            <Form.Control type="file" required   />
            <Form.Control.Feedback type="invalid">
              Mohon masukkan bukti slup gaji suami dan/atau istri
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <br/>
      <div className="d-flex justify-content-end">
        <Button type="submit">Submit Pengajuan KPR</Button>
      </div>
    </Form>
  );
}
