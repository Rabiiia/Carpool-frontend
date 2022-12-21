import { useEffect, useState } from "react";
import { SCHOOL_ENDPOINT } from "../settings";
import { getSchools } from "../utils/schoolFacade";

export default function Schools() {
  const [schools, setSchools] = useState([]);
  
  useEffect(() => {
    (async () => {
      const schools = await getSchools();
      setSchools(schools);
    })();
  }, []);

  return (
    <section className="row">
      <div className="card">
        <div className="card-title">
            <h2>List of Schools</h2>
        </div>
        <div className="card-body">

          <table className="table table-default">
            <thead className="bg-dark text-white">
              <tr>
                <td>School</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {schools.length > 0 && schools.map((school) => {
                return (
                  <tr key={school.id}>
                    <td>{school.name}</td>
                    <td>{school.location.address}, {school.location.zipcode}</td>
                  </tr>      
                );
              })}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  );
};
