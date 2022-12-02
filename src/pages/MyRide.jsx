import Map from "../components/Map";

export default function MyRide() {
    return (
        <>
            <div className="container">
                Map:
                <div className="card">
                    <Map mapContainerClassName="card-body"/>
                </div>
            </div>
        </>
    );
}
