import {useEffect, useState} from "react";
import {getAllRides} from "../utils/rideFacade.js";

export default function FindRide() {
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
