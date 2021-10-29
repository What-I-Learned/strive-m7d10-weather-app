import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useState, useRef, useCallback, useEffect } from "react";
import React from "react";
import mapStylesDark from "../styles/map/mapStyles-dark";
import mapStylesLight from "../styles/map/mapStyles-light";
import MaterialUISwitch from "../styles/switchBtn";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const containerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
};

const center = {
  lat: 55.545,
  lng: 12.7,
};
const options = {
  disableDefaultUI: true,
  minZoom: 8,
  maxZoom: 18,
};

function GoogleMaps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });

  const [theme, setTheme] = useState("dark");

  const themeStyles = {
    light: mapStylesLight,
    dark: mapStylesDark,
  };

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={{ ...options, styles: themeStyles[theme] }}
      zoom={12}
      onLoad={onMapLoad}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}

      {/* <h1>{darkMode}</h1> */}
      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          //   value={darkMode}
          label="Theme switch"
          onChange={handleChange}
        />
      </FormGroup>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMaps;
