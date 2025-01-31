import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Header() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/test">기본문법</Nav.Link>
              <NavDropdown title="설문" id="basic-nav-dropdown">
                <NavDropdown.Item href="/survey/Question">
                  설문조사
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/survey/Summary">
                  설문통계
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/memo">한줄메모장</Nav.Link>
              <Nav.Link href="/guestbook">방명록</Nav.Link>
              <Nav.Link href="/productlist">상품관리</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
