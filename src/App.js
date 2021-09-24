import "./App.css";
import "./style/css/Megamenu.css";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import FeatureComponent from "./components/FeatureComponent";
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
        <FeatureComponent/>
        <WhyUsComponent/>
        <AboutComponent/>
        <TeamComponent/>
        <FooterComponent/>
      </div>
    );
  }

}
