import "./App.css";
import "./style/css/Megamenu.css";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import { Container } from "react-bootstrap";
import AboutComponent from "./components/AboutComponent";
import WhyUsComponent from "./components/WhyUsComponent";
import TeamComponent from "./components/TeamComponent";
import FooterComponent from "./components/FooterComponent";
import NavbarMenuComponent from "./components/NavbarMenuComponent";
import React, { Component } from "react";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMenuComponent/>
        <NavbarComponent />        
        <CarouselComponent />
        <Container className="mb-5">
          <div className="row mt-1 row no-gutters mb-3">
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="icon-box">
                <div className="icon">
                  <i className="icofont-brain-alt icofont-3x"></i>
                </div>
                <div className="title">Geo-Artificial Intelligence</div>
                <div className="description">
                  Geospatial artificial intelligence combines methods in spatial
                  science (remote sensing and geographic information systems or
                  GIS), Artificial Intelligence, data mining, and
                  high-performance computing to extract meaningful knowledge
                  from spatial big data.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="icon-box">
                <div className="icon">
                  <i className="icofont-web icofont-3x"></i>
                </div>
                <div className="title">Web Development</div>
                <div className="description">
                  Responding to the need for an integrated spatial information
                  system, we developed a geographic information system that is
                  easily accessible and capable of being part of a decision
                  support system tool for users, based on opensource tools and
                  technology.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="icon-box">
                <div className="icon">
                  <i className="icofont-image icofont-3x"></i>
                </div>
                <div className="title">Satellite Imagery</div>
                <div className="description">
                  Advance in technology has made geographic information systems
                  more valuable than ever. Today’s systems are more powerful and
                  more complex than their recent predecessors. Professionals who
                  depend on a GIS to help make important decisions based on
                  geospatial information.
                </div>
              </div>
            </div>
          </div>
        </Container>
        <WhyUsComponent/>
        <AboutComponent/>
        <TeamComponent/>
        <FooterComponent/>
        

      </div>
    );
  }

}
