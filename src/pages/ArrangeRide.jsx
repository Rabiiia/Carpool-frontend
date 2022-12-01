import Map from "../components/Map";
import {useEffect, useState} from "react";
import {createRide} from "../utils/rideFacade.js";

export default function ArrangeRide({user}) {
    const [route, setRoute] = useState(undefined);
    const [fields, setFields] = useState({});

    useEffect(() => {
        document.querySelectorAll("#routeForm input").forEach((input) => {
            document.getElementById(input.id).onchange = (event) => {
                const field = event.target; //console.log(field.id + ": " + field.value);
                setFields(prevFields => ({...prevFields, [field.id]: field.value}));
            };
        });
    }, [route]);

    const submitForm = async (event) => {
        event.preventDefault();
        const commit = {
            origin: fields["origin"],
            destination: fields["destination"],
            arrival: new Date(fields["arrivalDate"] + "T" + fields["arrivalTime"]).getTime(),
            seats: fields["seats"]
        }
        let ride; if ((ride = await createRide(commit))["id"]) {
            console.log("Ride '" + ride.id + "' was successfully created");
            console.log(ride);

            // TODO: Redirect to MyRide
        }
    }

    return (
        <main className="container">
            { !route ?
                <section className="row">
                    <div className="col-4">
                        <button className="btn btn-outline-secondary w-100 mb-3"
                                onClick={() => setRoute({commute: "school"})}>Commute to school</button>
                        <button className="btn btn-outline-secondary w-100 mb-3"
                                onClick={() => setRoute({commute: "home"})}>Commute home</button>
                    </div>
                </section> :
                <>
                    <section className="row">
                        <h2>Arrange a ride</h2>
                        <div className="col">
                            <div className="card mb-3">
                                <form className="card-body" id="routeForm" onSubmit={submitForm}>
                                    <div className="row">
                                        <div className="col-3">
                                            <label className="form-label" htmlFor="origin">Origin:</label>
                                        </div>
                                        <div className="col-3">
                                            <label className="form-label" htmlFor="destination">Destination:</label>
                                        </div>
                                        <div className="col-3">
                                            <label className="form-label" htmlFor="arrivalDate">Arrival:</label>
                                        </div>
                                        <div className="col-1">
                                            <label className="form-label" htmlFor="seats">Seats:</label>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <input className="form-control" type="text" id="origin"/>
                                        </div>
                                        <div className="col-3">
                                            <input className="form-control" type="text" id="destination"/>
                                        </div>
                                        <div className="col-3">
                                            <div className="input-group mb-3">
                                                <input className="form-control" type="date" id="arrivalDate"/>
                                                <input className="form-control" type="time" id="arrivalTime"/>
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <input className="form-control" type="number" id="seats"/>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-primary w-100" type="submit">Arrange ride</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className="row h-100ivh">
                        <div className="col">
                            <div className="card h-100">
                                <Map mapContainerClassName="card-body rounded-1" /*origin={user.address} destination={user.school.address}*//>
                            </div>
                        </div>
                    </section>
                </>
            }
        </main>
    );
}