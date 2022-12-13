import { useEffect, useState } from "react";
import { SCHOOL_ENDPOINT } from "../settings";

export default function CreateSchool() {
  const [fields, setFields] = useState({});

  useEffect(() => {
    document.querySelectorAll("#create-school-form input").forEach((input) => { //console.log("Input: ", input);
      document.getElementById(input.id).onchange = (event) => { //console.log("hi");
        const field = event.target; console.log(field.id + ": " + field.value);
        const fieldName = field.id.substring("create-school-".length); //console.log(fieldName);
        setFields(prevFields => ({...prevFields, [fieldName]: field.value}));
      };
    });
  }, []);

  const handlesubmit2 = (e) => {
    e.preventDefault();
    console.log(fields);

    fetch(SCHOOL_ENDPOINT, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(fields)
    }).then((res) => {
      alert('Saved successfully.')
    }).catch((err) => {
      console.log(err.message)
    }, [])
  }

  return (
    <main className="container">
      <section className="row">
        <div className="col-8">
          <form className="container" onSubmit={handlesubmit2} id="create-school-form">
            <div className="card" style={{"textAlign": "left"}}>
              <div className="card-title">
                <h2>Create School</h2>
              </div>
              <div className="card-body">

                <div className="row">
                  
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>School</label>
                      <input type="text" className="form-control" id="create-school-name"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" id="create-school-address"></input>
                        <input type="number" className="form-control" id="create-school-zipcode"></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-primary w-20"  type="submit">Save</button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
