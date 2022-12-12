import { useState } from "react";
import { LoadScript, useLoadScript, DirectionsRenderer, GoogleMap } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../settings.js";
import { useEffect } from "react";

export default function Map({origin, destination, waypoints, mapContainerClassName}) {
    const [ state, setState ] = useState({});
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        region: "DK",
        language: "da",
    });

    const fetchDirections = async () => {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,//waypoints.shift().location,
          destination: destination,//waypoints.pop().location,
          waypoints: waypoints,
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setState({ directions: result });
          } else {
            setState({ error: result });
          }
        }
      );
    };

    useEffect(() => {
      if (isLoaded) {
        fetchDirections();
      }
    }, [origin, destination]);
    
    if (isLoaded) {
      return (
        <GoogleMap
          mapContainerClassName={mapContainerClassName}
          onLoad={fetchDirections}
        >
          <DirectionsRenderer directions={state.directions}/>
        </GoogleMap>
      );
    } else {
      return <div>Loading...</div>;
    }
}
