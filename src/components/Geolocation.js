import React, { Component } from "react";
import { render } from "react-dom";


var lat = 0
var lon = 0
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      lat = position.coords.latitude
      lon = position.coords.longitude

    });
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}
export default Geolocation