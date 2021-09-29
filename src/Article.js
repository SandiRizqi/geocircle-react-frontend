import "./App.css";
import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import FooterComponent from "./components/FooterComponent";
import WhyUsComponent from "./components/WhyUsComponent";
import NavbarMenuComponent from "./components/NavbarMenuComponent";
import { Container } from "react-bootstrap";
import CardComponent from "./components/CardComponent";
import axios from "axios";

const api = "http://127.0.0.1:8000/backend/api/";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(api + "products/").then((res) => {
      const photosData = res.data;
      this.setState({ data: photosData });
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div className="App">
        <NavbarMenuComponent />
        <NavbarComponent />
        <CarouselComponent />
        <Container>
          <div className="row pt-5">
            {this.state.data.map((data) => (
              <CardComponent
                key={data.slug}
                Title={data.title}
                Content={data.sort_desc}
                Time={data.modified}
                imgUrl={data.thumbnail}
              />
            ))}
          </div>
        </Container>
        <WhyUsComponent />
        <FooterComponent />
      </div>
    );
  }
}
