import React from "react";
import { useMemo } from "react";
import GoogleMaps from "simple-react-google-maps";


const Maps = () => {
  const center = useMemo(() =>({lat:-32.9460738, lng: -60.6425259}), [])

  return (
    <div>
        <GoogleMaps
        apiKey={"AIzaSyBdQ-twabwTNDHlnurFnQhn29AgGuU7zDs"}
        style={{height:"500px", width:"100%"}}
        center={center}
        zoom={15}
        >
            
        </GoogleMaps>
    </div>
  );
};

export default Maps;
