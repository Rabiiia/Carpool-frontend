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
    <div className="offset-lg-3 col-lg-6">
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
            

            {ride!=null &&
              <div>
                {/* <h3>{ride.id}</h3> */}
                <h3>{ride.origin}</h3>
                <h3>{ride.destination}</h3>
                <h3>{ride.arrival}</h3>
                <h3>{ride.seats}</h3>
                {/* <h3>{ride.driver.id}</h3>
                <h3>{ride.driver.username}</h3>
                <h3>{ride.driver.address}</h3>
                <h3>{ride.driver.phone}</h3>
                <h3>{ride.driver.zipcode}</h3>
                <h3>{ride.driver.name}</h3>
                <h3>{ride.driver.role}</h3>
                <h3>{ride.driver.schoolId}</h3>
                <h3>{ride.passengers}</h3> */}
            </div>
            }
        </div>
        </div>
    );
    



    // const [rides, setRides] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const rides = await getAllRides();
    //         setRides(prevRides => ({...prevRides, rides}))
    //     })()
    // }, []);

    // useEffect(() => {
    //     console.log(rides);
    // }, [rides]);

    // return (
    //     <ul>
    //         {rides.length > 0 && rides.map((ride, index) =>
    //             <li key={index}>
    //                 {ride.id}<br/>
    //                 {ride.origin}<br/>
    //                 {ride.destination}<br/>
    //                 {ride.arrival}<br/>
    //                 {ride.driver}<br/>
    //                 {ride.passengers}<br/>
    //             </li>
    //         )}
    //     </ul>
    // );
}
