import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Tooltip,
  ScaleControl,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import { Sidebar, Tab } from "react-leaflet-sidebarv2";
import projectsData from "../data/projects.json";
import ProductsListComponent from "./ProductsListComponent";
import { ListGroup } from "react-bootstrap";

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: [],
      lat: -2,
      lng: 119,
      zoom: 5.5,
      collapsed: false,
      selected: "dataset",
      image: "sentinel-1-grd",
    };
  }

  onClose() {
    this.setState({ collapsed: true });
  }

  onOpen(id) {
    this.setState({
      collapsed: false,
      selected: id,
    });
  }

  componentDidMount() {
    this.setState({ point: projectsData.features });
  }

  render() {
    return (
      <section className="map">
        <Sidebar
          id="sidebar"
          collapsed={this.state.collapsed}
          selected={this.state.selected}
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
          position="right"
        >
          <Tab id="dataset" header="Datasets" icon="icofont-home">
            <div className="row mt-2">
              <ListGroup>
                <ListGroup.Item variant="success">
                  Sentinel-1 GRD{" "}
                  <Button
                    className="btn btn-success"
                    onClick={() =>
                      this.setState({
                        selected: "result",
                        image: "sentinel-1-grd",
                      })
                    }
                  >
                    Sentinel-1 GRD
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  Sentinel-1 GRD{" "}
                  <Button
                    className="btn btn-success"
                    onClick={() =>
                      this.setState({
                        selected: "result",
                        image: "sentinel-2-l1c",
                      })
                    }
                  >
                    Sentinel-2 L1C
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Tab>

          <Tab id="result" header="Result" icon="icofont-layers white">
            <div>
              <ProductsListComponent jenisCitra={this.state.image} />
            </div>
          </Tab>
          <Tab
            id="settings"
            header="Settings"
            icon="icofont-gears"
            anchor="bottom"
          >
            <p>Settings dialogue.</p>
          </Tab>
        </Sidebar>
        <Map
          id="mapId"
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          scrollWheelZoom={true}
        >
          <LayersControl position="topleft">
            <LayersControl.BaseLayer checked name="Satellite">
              <TileLayer url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay checked name="projects history">
              <LayerGroup>
                {this.state.point.map((point) => (
                  <Marker
                    key={point["properties"]["ORIG_FID"]}
                    position={[
                      point["geometry"]["coordinates"][1],
                      point["geometry"]["coordinates"][0],
                    ]}
                  >
                    <Tooltip direction="bottom">
                      {point["properties"]["LABEL"]}
                    </Tooltip>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>

          <ScaleControl />
        </Map>
      </section>
    );
  }
}
