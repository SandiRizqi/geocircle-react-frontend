import React from "react";

function ProductItemsComponent(props) {
  return (
    <div>
      <div className="row mt-1 mb-5">
        <div className="col-lg-3 mt-5 col-aligncenter" id="product-item">
          <div className="mt-5">
            <i className="icofont-gears icofont-4x product-logo"></i>
            <div className="title product-title white">Products</div>
            <div className="cat-desc mleft">
              Our main products are consist of Satellite Imagery Provider, GIS
              and Remote Sensing Analysis, and Geo-Artificial Intelligence
              Services and Products
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row ml-5">
            <div className="col-lg-3 mt-5">
              <div className="product-box mleft">
                <div className="title">Geo-Artificial Intelligence</div>
                <div className="description">
                  Geospatial artificial intelligence combines methods in spatial
                  science (remote sensing and geographic information systems or
                  GIS) and Artificial Intelligence
                  <br />
                  <a className="product-link" href="#/wordlview">
                    Geo-AI Service <i class="icofont-double-right"></i>
                  </a>
                  <br />
                  <a className="product-link" href="#/wordlview">
                    Geo-AI software/program <i class="icofont-double-right"></i>
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5">
              <div className="product-box mleft">
                <div className="title">GIS and Remote Sensing Analysis</div>
                <div className="description">
                  Advance in technology has made geographic information systems
                  more valuable than ever. Professionals who depend on a GIS to
                  help make important decisions based on geospatial information.
                  <i class="icofont-double-right"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5">
              <div className="product-box mleft">
                <div className="title">Data Post-Processing and Layouting</div>
                <div className="description">
                  Geospatial artificial intelligence combines methods in spatial
                  science (remote sensing and geographic information systems or
                  GIS), Artificial Intelligence, data mining, and
                  high-performance computing{" "}
                  <i class="icofont-double-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mt-5">
              <div className="product-box mleft">
                <div className="title">Satellite Imagery</div>
                <div className="description">
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
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5">
              <div className="product-box mleft">
                <div className="title">Web Development</div>
                <div className="description">
                  Responding to the need for an integrated spatial information
                  system, we developed a geographic information system that is
                  easily accessible and capable of being part of a decision
                  support system tool for users.
                  <i class="icofont-double-right"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5">
              <div className="product-box mleft">
                <div className="title">Training</div>
                <div className="description">
                  Geospatial training, especially in the field of GIS and remote
                  sensing at the basic, intermediate, and advanced levels, and
                  also special training that is applicable.
                  <i class="icofont-double-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemsComponent;
