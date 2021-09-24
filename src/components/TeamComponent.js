import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class TeamComponent extends Component {
  render() {
    return (
      <section className="mb-5 pt-5 pl-5 pr-5 pb-5">
        <Container>
          <div className="section-title">
            <h2>Team</h2>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3 col-md-3 mt-3 content-item">
              <img
                src="https://avatars.githubusercontent.com/u/26809652?v=4"
                width="100"
                height="100"
                className="rounded-circle shadow mb-3 gci-logo"
                alt=""
              ></img>
              <h5>Anugrah Sandi Rizqi</h5>
              <span className="text-muted">
                <strong>Founder - CTO</strong>
              </span>
              <p>
                Forestry and Agriculture background with years of experience in
                GIS, Remote Sensing, and Artificial Intelligence for Environment
                and Agriculture
              </p>
            </div>
            <div className="col-lg-3 col-md-3 mt-3 content-item">
              <img
                src="https://geo-circle.sgp1.cdn.digitaloceanspaces.com/geo-circle/media/product_PP/thumbnail_eba483105f904d7a8219af7d621cf9a7.png"
                width="100"
                height="100"
                className="rounded-circle  shadow mb-3 gci-logo"
                alt=""
              ></img>
              <h5>Yanuar Ardian Bomantara</h5>
              <span className="text-muted">
                <strong>Founder - Chief of Product and Development</strong>
              </span>
              <p>
                GeoInformation Science background with years of experience in
                agriculture and management
              </p>
            </div>
            <div className="col-lg-3 col-md-3 mt-3 content-item">
              <img
                src="https://geo-circle.sgp1.cdn.digitaloceanspaces.com/geo-circle/static/images/Fahmi_PP.png"
                width="100"
                height="100"
                className="rounded-circle shadow mb-3 gci-logo"
                alt=""
              ></img>
              <h5>Fahmi Indris</h5>
              <span className="text-muted">
                <strong>Data Analyst</strong>
              </span>
              <p>
                Data processing and analyst, Years of experience in environment
                and forestry sector.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 mt-3 content-item">
              <img
                src="https://geo-circle.sgp1.cdn.digitaloceanspaces.com/geo-circle/static/images/Habib_PP.jpg"
                width="100"
                height="100"
                className="rounded-circle  mb-3 gci-logo"
                alt=""
              ></img>
              <h5>Habib Husyien A.</h5>
              <span className="text-muted">
                <strong>Data Analyst</strong>
              </span>
              <p>
                Data processing and analyst, Years of experience in environment
                and geographic sector.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
