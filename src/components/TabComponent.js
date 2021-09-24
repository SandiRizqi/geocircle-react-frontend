import React, { Component } from "react";
import { Tab, Col, Row, Nav } from "react-bootstrap";

export default class TabComponent extends Component {
  render() {
    return (
      <Tab.Container className="mb-5" id="tab" defaultActiveKey="first">
        <Row>
          <Col sm={2} className="ml-1">
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h1>WORLDVIEW SATELLITE IMAGERY</h1>
                <p>The WorldView-3 satellite sensor was licensed by the National Oceanic and Atmospheric Administration  to collect in addition to the standard Panchromatic and Multispectral bands, eight-band short-wave infrared (SWIR) and 12 CAVIS imagery. The WorldView-3 satellite was successfully launched on August 13, 2014. Watch satellite launch. WorldView-3 is the first multi-payload, super-spectral, high-resolution commercial satellite sensor operating at an altitude of 617 km. WorldView-3 satellite provides 31 cm panchromatic resolution, 1.24 m multispectral resolution, 3.7 m short wave infrared resolution and 30 m CAVIS resolution. The satellite has an average revisit time of  day and is capable of collecting up to 680,000 km2 per day.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h1>PLEIADES SATELLITE IMAGERY</h1>
                <p>Pléiades is an optical satellite constellation providing very high-resolution products  with a 20km swath. Both the space and the ground segment have been designed to provide information in record time, offering daily revisit capacity to any point on the globe and outstanding acquisition capabilities to meet the full spectrum of civil and military requirements. The Pléiades constellation is the right answer to extract accurate information and bring powerful insight to make informed decisions. The constellation comprises two satellites, Pléiades 1A and Pléiades 1B, operating in the same phased orbit and fitted with cutting-edge technologies such as fiber-optic gyros and control moment gyros, which enable Pléiades to deliver exceptional roll, pitch and yaw (slew) agility as well as to increase the number of acquisitions above the defined area, therefore making the whole system perfect for emergency response and change detection.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h1>SPOT SATELLITE IMAGERY</h1>
                <p>The constellation includes two Earth observation optical satellites designed to provide data till 2023. They are fitted out with two New AstroSat Optical Modular Instruments (NAOMI), represented by high-resolution pushbroom imagers and are based on Korsch-type telescope technology. Along with Reference 3D’s high location accuracy, the technology allows users to obtain high quality ortho images as well as broad-swath satellite imagery as a complementary to the Pléiades Very High Resolution data. SPOT 6 & SPOT 7 operate in the same orbit with Pléiades 1A and Pléiades 1B forming 4-satellites constellation.</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
