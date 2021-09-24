import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class WhyUsComponent extends Component {
  render() {
    return (
      <section className="mb-5 pt-5">
        <Container>
          <div className="section-title">
            <h2>Why you should choose us?</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 content-item">
              <span>01</span>
              <h4>Resolution</h4>
              <p>
                GeoCircle can provide satellite images ranging from low
                resolution to high resolution according to client needs
              </p>
            </div>
            <div className="col-lg-4 col-md-6 content-item">
              <span>02</span>
              <h4>Precision</h4>
              <p>
                To produce accurate analysis and information, we guarantee the
                accuracy and precision of the data that client will receive
              </p>
            </div>
            <div className="col-lg-4 col-md-6 content-item">
              <span>03</span>
              <h4>Flexible</h4>
              <p>
                We are flexible in accepting various order scales needed by
                clients, both small and large scale orders
              </p>
            </div>
            <div className="col-lg-4 col-md-6 content-item">
              <span>04</span>
              <h4>Fast</h4>
              <p>
                we deliver orders in a fast time and still maintain the quality
                of the data or products we provide
              </p>
            </div>
            <div className="col-lg-4 col-md-6 content-item">
              <span>05</span>
              <h4>Experience</h4>
              <p>
                our team has years of experience in geospatial data
                provisioning, data processing, and technology development such
                as Geo-AI for agriculture and the environment
              </p>
            </div>
            <div className="col-lg-4 col-md-6 content-item">
              <span>06</span>
              <h4>Open</h4>
              <p>
                we are open for discussion and consultation with consumers to
                support the maximum achievement of goals
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
