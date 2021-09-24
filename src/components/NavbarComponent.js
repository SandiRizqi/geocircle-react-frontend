import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/css/Megamenu.css";
import MegamenuComponent from "./MegamenuComponent";


import {
  Navbar,
  Container,
  Nav,
  Modal,
  Button,
} from "react-bootstrap";

function LoginComponent() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Nav.Link href="#deets" onClick={handleShow}>
        <strong>Login</strong>
      </Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="text-muted">Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-grid gap-2">
          <label className="text-muted">
            {" "}
            Choose one of the tree login account bellow, to login safely!
          </label>
          <Button variant="dark" size="lg" className="mt-2" id="githubIcon">
            <i class="icofont-github"></i> Github
          </Button>
          <Button variant="danger" size="lg">
            <i class="icofont-google-plus"></i> Google
          </Button>
          <Button variant="primary" size="lg" id="linkedinIcon">
            <i class="icofont-linkedin"></i> LinkedIn
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <strong>GeoCircle</strong>
          </Navbar.Brand>
          <Navbar.Toggle style={{border:"none", boxShadow:"none" }} aria-controls="responsive-navbar-nav"><i class="icofont-navigation-menu"></i></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <MegamenuComponent/>
              <Nav.Link href="/article">Articles</Nav.Link>
              <Nav.Link href="#/projects">Projects</Nav.Link>
            </Nav>
           
            <Nav>
              <LoginComponent></LoginComponent>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
