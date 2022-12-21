import React, {useState, useEffect}from 'react'
import { Link, useNavigate } from "react-router-dom";
import {USER_ENDPOINT, SCHOOL_ENDPOINT} from '../settings.js';

export default function Landing() {
  // const[id,idchange]=useState("");
  /*const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [schoolId, setSchoolId] = useState("");*/

  const [fields, setFields] = useState({});

  useEffect(() => {
    document.querySelectorAll("#userForm input").forEach((input) => { //console.log("Input: ", input);
      document.getElementById(input.id).onchange = (event) => { //console.log("hi");
        const field = event.target; //console.log(field.id + ": " + field.value);
        const fieldName = field.id.substring("create-user-".length); //console.log(fieldName);
        setFields(prevFields => ({...prevFields, [fieldName]: field.value}));
      };
    });
  }, []);


  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = {username, name, password, phone, address, zipcode, schoolId};


    console.log("Fields: ", fields);
    fetch(USER_ENDPOINT, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(fields)
    }).then((res) => {
      //alert('Saved successfully.');
    }).catch((err) => {
      console.log(err.message)
    }, [])
  }


  return (
    <main className="container">
      <section className="row">
        <div className="col-8">
          <form className="container" onSubmit={handlesubmit} id="userForm">
            <div className="card" style={{"textAlign": "left"}}>
              <div className="card-title">
                <h2>Create Student</h2>
              </div>
              <div className="card-body">

                <div className="row">

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>E-mail</label>
                      <input type="text" className="form-control" id="create-user-email"></input>
                      {/* <span className="text-danger">Enter the name</span> */}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" id="create-user-name"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" id="create-user-password"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input text="text" className="form-control" id="create-user-phone"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Address</label>
                        <label>Zipcode</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" id="create-user-address"></input>
                        <input type="number" className="form-control" id="create-user-zipcode"></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>School id</label>
                      <input type="number" className="form-control" id="create-user-school"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-primary w-20" type="submit">Save</button>
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
}


