import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DashboardHeader(props) {
  const { url } = props.match;
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Dashboard Petugas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={`${url}/`} className="nav-link">
                Beranda
              </Link>
              <Link to={`${url}/list-pengajuan`} className="nav-link">
                List Pengajuan
              </Link>
              <Nav.Link onClick={props.handleLogOut}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
