import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default class AboutComponent extends Component {
  render() {
    return (
      <section className="about mb-5 pb-5 pt-5 about">
        <Container className="text-center">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <p>
            During the last decade our expertise shifted towards data processing
            and analysis. GeoCircle growing R&D team is practical and flexible,
            and its members have a background in geographic information systems,
            forestry, and agriculture. We want to ensure consistent and accurate
            data collection, processing and analysis to deliver a clear product
            that is applicable to our clients’ needs. Our company proudly serve
            government and private sector located in Indonesia. With our years
            experience and strong technical background, we aspire to spread our
            vision in the vast growing Indonesian market. We believe in our
            vision in promoting universal access to the GIS and Remote Sensing
            technology towards business sustainability, smart and participatory
            decision making, and promoting societal and environmental impact.
          </p>
        </Container>
      </section>
    );
  }
}
