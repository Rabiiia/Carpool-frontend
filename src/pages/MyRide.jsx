import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";
import { getRide } from "../utils/rideFacade";

export default function MyRide() {
  const { id } = useParams();
  const [ ride, setRide ] = useState({});
  const [ waypoints, setWaypoints ] = useState({});

  useEffect(() => {
    (async () => {
      console.log("ID: ", id);
      const ride = await getRide(id); console.log("Ride: ", ride);
      setRide(ride);
      setWaypoints(ride.passengers.map((passenger) => ({location: `${passenger.location.address}, ${passenger.location.zipcode}`})));
    })();
  }, []);

  if (Object.keys(ride).length > 0) {
    return (
      <main className="container">
        <section className="row">
          {/* TODO: Ride requests */}
        </section>
        <section className="row h-100ivh">
          <div className="col">
            <div className="card h-100">
              <Map mapContainerClassName="card-body rounded-1" origin={ride.origin} destination={ride.destination} waypoints={waypoints}/>
            </div>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <>:(</>
    );
  }
};
