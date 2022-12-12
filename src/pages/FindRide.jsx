import {useEffect, useState, useRef} from "react";
import {BACKEND_URL} from '../settings.js';
import {getAllRides} from "../utils/rideFacade.js";

export default function FindRide() {

    const [ride, setRide] = useState({})
    
    const inputRef = useRef();


    const fetchRideByDestination = async (destination) => {
      return fetch(BACKEND_URL + "/api/rides/"+ destination)
        .then(response => {
          
          return response.json()
        })
        .then(data => {
            setRide(data)
            return data
        })
    }

    return (
    <div className="row">
    <div className="col-lg-6">
        <br></br>
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
                        console.log(inputRef.current.value)
                        inputRef.current.focus()
                        console.log(await fetchRideByDestination(inputRef.current.value));
                        
                    }}
                >Submit</button>  
            </form>
            
            <table className="table table-default">
            <thead className="bg-dark text-white">
              <tr>
                <td>Origin</td>
                <td>Destination</td>
                <td>Arrival</td>
                <td>seats</td>
                <td>username</td>
                <td>address</td>
                <td>phone</td>
                <td>zipcode</td>
                <td>name</td>
                <td>role</td>
                <td>schoolId</td>
                <td>passengers</td>
              </tr>
            </thead>
            <tbody>
            {ride.length > 0 && (
                ride.map((ride, index) => (
                <tr key={index}>  
                <td>{ride.origin}</td>
                <td>{ride.destination}</td>
                <td>{ride.arrival}</td>
                <td>{ride.seats}</td>
                <td>{ride.driver.username}</td>
                <td>{ride.driver.address}</td>
                <td>{ride.driver.phone}</td>
                <td>{ride.driver.zipcode}</td>
                <td>{ride.driver.name}</td>
                <td>{ride.driver.role}</td>
                <td>{ride.driver.schoolId}</td>
                <td>{ride.passengers}</td>
                </tr>
                )
                ))}
                </tbody>
          </table>
            </div>
        </div>
    );
         

//  LIST OF RIDES

    const [rides, setRides] = useState([]);

    useEffect(() => {
        (async () => {
            const rides = await getAllRides();
            setRides(prevRides => ({...prevRides, rides}))
        })()
    }, []);

    useEffect(() => {
        console.log(rides);
    }, [rides]);

    return (
        <ul>
            {rides.length > 0 && rides.map((ride, index) =>
                <li key={index}>
                    {ride.id}<br/>
                    {ride.origin}<br/>
                    {ride.destination}<br/>
                    {ride.arrival}<br/>
                    {ride.driver}<br/>
                    {ride.passengers}<br/>
                </li>
            )}
        </ul>
    );
}
