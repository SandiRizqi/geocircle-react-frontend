import "./App.css";
import React, { Component } from 'react'
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import FormComponent from "./components/FormComponent";
import WhyUsComponent from "./components/WhyUsComponent";
import NavbarMenuComponent from "./components/NavbarMenuComponent";
import { Container } from "react-bootstrap";


export default class Article extends Component {
    render() {
        return (
            <div className="App">
                <NavbarMenuComponent/>
                <NavbarComponent/>
                <Container>
                    <FormComponent className="h-100"/>
                </Container>
                <WhyUsComponent/>
                <FooterComponent/>
            </div>
        )
    }
}
