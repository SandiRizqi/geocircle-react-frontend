import { Container } from "@mui/material";
import React, { Component } from "react";

export default class NavbarMenuComponent extends Component {
  render() {
    return (
      <div className="d-flex" id="navmenu">
        <Container className="navmenu">
          <a href="#Qa"><strong>Terms and Conditions</strong></a>
          <a href="#Qa"><strong>FAQs</strong></a>
          <a href="#Qa"><strong>Contact us</strong></a>
        </Container>
      </div>
    );
  }
}
