import { Map, GoogleApiWrapper } from "google-maps-react";
import React from "react";

const mapStyles = {
  width: "100%",
  height: "100%",
};
class App extends React.Component {
  apiKey = process.env.REACT_APP_GOOGLE_MAPS_API;
  render() {
    console.log(this.apiKey);
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
})(App);
