import { Container } from "@mui/material";
import React, { Component } from "react";

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="d-flex footer">
        <Container>
          <div className="row  mb-4 mt-2">
            <div className="col-lg-3  col-aligncenter" id="product-item">
              <div className="mt-4">
              <img
                src="https://geo-circle.sgp1.cdn.digitaloceanspaces.com/geo-circle/static/images/logo.png"
                width="50" height="50"
                className="rounded-circle shadow gci-logo"
                alt=""
              ></img>
                <div className="title product-title white">GeoCircle</div>
                <div className="description mb-2">
                  we provide hight quality data, fast delivery, flexible order
                  and interactive platform for geo-scientist to share each
                  others
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row ml-5">
                <div className="col-lg-4 mt-4">
                  <div className="product-box mleft">
                    <div className="title">Products</div>
                    <div className="description">
                      <a className="product-link" href="#/wordlview">
                        Geo-AI Service <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Geo-AI software/program{" "}
                        <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/spot">
                        SPOT 6/7 image <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Worldlview image <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Pleiades image <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        GeoEye image <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Quickbird image <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Web Development <i class="icofont-double-right"></i>
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="product-box mleft">
                    <div className="title">Services</div>
                    <div className="description">
                      <a className="product-link" href="#/wordlview">
                        GIS and Remote Sensing Analysis{" "}
                        <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Post-Processing and Layouting{" "}
                        <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Training <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Articles <i class="icofont-double-right"></i>
                      </a>
                      <br />
                      <a className="product-link" href="#/wordlview">
                        Projects <i class="icofont-double-right"></i>
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-4">
                  <div className="product-box mleft">
                    <div className="title">Contact us</div>
                    <div className="social-logo">
                      <a href="#insta">
                        <i class="icofont-instagram"></i>
                      </a>
                      <a href="#insta">
                        <i class="icofont-linkedin"></i>
                      </a>
                      <a href="#insta">
                        <i class="icofont-brand-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                  <div className="cat-desc mleft">
                    copyright@2021 geo-circle.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
