import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown} from "react-bootstrap";


export default class ProductMenuComponent extends Component {
  render() {
    return (
      <NavDropdown
        className="pr-2 align-text-top"
        title="Products"
        id="basic-nav-dropdown" 
      >
        
      </NavDropdown>
    );
  }
}
