import {useState} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../settings.js";

export default function Map({mapContainerClassName}) {
    const [center, setCenter] = useState({ lat: 56.26392, lng: 11.501785 });//{ lat: 56.26392, lng: 9.501785 }); // DK
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        region: "DK",
        language: "da"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <GoogleMap
            zoom={7}
            center={center}
            mapContainerClassName={mapContainerClassName}
        ></GoogleMap>
    );
}
