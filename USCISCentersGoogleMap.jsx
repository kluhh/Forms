import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {
  containerStyle,
  locationLatLong,
} from "./uscisCentersGoogleMapCoordinates";
import debug from "sabio-debug";
import PropTypes from "prop-types";

const _logger = debug.extend("USCISCenterLocationGoogleMap");

const API_GOOGLE_AUTO_COMPLETE = process.env.REACT_APP_GOOGLE_AUTO_COMPLETE;

function USCISCentersGoogleMap({ markersFromEditButtonSync }) {
  _logger("logger is enabled");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_GOOGLE_AUTO_COMPLETE,
  });

  const [map, setMap] = useState(null);

  const onUnmount = useCallback(
    function callback(map) {
      setMap(map);
    },
    [map]
  );

  function centerAdjust() {
    let newCenter = locationLatLong.texasServiceCenter;

    var arrayOfCenters = [
      null,
      locationLatLong.nebraskaServiceCenter,
      locationLatLong.californiaServiceCenter,
      locationLatLong.texasServiceCenter,
      locationLatLong.potomacServiceCenter,
      locationLatLong.vermontServiceCenter,
      locationLatLong.USCenter,
    ];

    newCenter = arrayOfCenters[markersFromEditButtonSync.markerId];
    return newCenter;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerAdjust()}
      zoom={
        markersFromEditButtonSync.markerId
          ? markersFromEditButtonSync.zoomLevel
          : 4
      }
      onUnmount={onUnmount}
    >
      <Marker
        title="Nebraska Service Center"
        position={locationLatLong.nebraskaServiceCenter}
        animation="drop"
      ></Marker>
      <Marker
        title="California Service Center"
        position={locationLatLong.californiaServiceCenter}
      ></Marker>
      <Marker
        title="Texas Service Center"
        position={locationLatLong.texasServiceCenter}
      ></Marker>
      <Marker
        title="Potomac Service Center"
        position={locationLatLong.potomacServiceCenter}
      ></Marker>
      <Marker
        title="Vermont Service Center"
        position={locationLatLong.vermontServiceCenter}
      ></Marker>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

USCISCentersGoogleMap.propTypes = {
  markersFromEditButtonSync: PropTypes.shape({
    zoomLevel: PropTypes.number.isRequired,
    markerId: PropTypes.number.isRequired,
  }),
};

export default USCISCentersGoogleMap;
