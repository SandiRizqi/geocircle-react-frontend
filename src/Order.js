import React, { Component } from 'react'
import NavbarMenuComponent from './components/NavbarMenuComponent'
import NavbarComponent from './components/NavbarComponent'
import MapComponent from './components/MapComponent'


export default class Order extends Component {
    render() {
        return (
            <div className="App">
                <NavbarMenuComponent/>
                <NavbarComponent/>
                <MapComponent/>
            </div>
        )
    }
}
