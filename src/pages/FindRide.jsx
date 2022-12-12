import { useEffect, useState, useRef } from "react";
import { BACKEND_URL } from "../settings.js";
import { sendRequest } from "../utils/requestFacade.js";
import Map from "../components/Map.jsx";
import { getRidesByDestination } from "../utils/rideFacade.js";

export default function FindRide() {
  const [rides, setRides] = useState([]);
  const [ride, setRide] = useState(undefined);
  const inputRef = useRef();

  if (ride == undefined) {
    return (
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={(event) => {event.preventDefault()}}>
            <input
              ref={inputRef}
              required
              type="search"
              placeholder="Search...."
            />
            <button
              type="submit"
              onClick={async() => {
                console.log(inputRef.current.value);
                inputRef.current.focus();
                const rides = await getRidesByDestination(inputRef.current.value);
                console.log(rides);
                setRides(rides);
              }}
            >Submit</button>  
          </form>
            
          <table className="table table-default">
            <thead className="bg-dark text-white">
              <tr>
                <td>Origin</td>
                <td>Destination</td>
                <td>Arrival</td>
                <td>Seats</td>
                <td>Driver</td>
                <td>(from school)</td>
                <td>Passengers</td>
              </tr>
            </thead>
            <tbody>
              {rides.length > 0 && rides.map((ride) =>
                <tr key={ride.id}>
                  {console.log(ride)}
                  <td>{ride.origin}</td>
                  <td>{ride.destination}</td>
                  <td>{ride.arrival}</td>
                  <td>{ride.seats}</td>
                  <td>{ride.driver.name}</td>
                  <td>{ride.driver.school.name}</td>
                  <td>{ride.passengers.length}</td>
                  <td><button onClick={() => setRide(ride)}>View ride</button></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <main className="container">
        <section className="row">
          <h2></h2>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <span>{ride.origin}</span>
                  <span>{ride.destination}</span>
                  <span>{ride.arrival}</span>
                  <span>{ride.seats}</span>
                  <span>{ride.driver.name}</span>
                  <span>{ride.driver.username}</span>
                  <span>{ride.driver.school.name}</span>
                  <span>{ride.driver.phone}</span>
                </div>
                <div className="row">
                  {ride.passengers.length > 0 && ride.passengers.map((passenger) =>
                  <span>{passenger.name}</span>
                  )}
                </div>
                <div className="row">
                  <span><button onClick={() => sendRequest(ride.id)}>Apply for a seat at this ride</button></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row h-100ivh">
          <div className="col">
            <div className="card h-100">
              <Map mapContainerClassName="card-body rounded-1" origin={ride.origin} destination={ride.destination} waypoints={[]}/>
            </div>
          </div>
        </section>
      </main>
    );
  }
};
