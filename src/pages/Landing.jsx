import React, {useState, useEffect}from 'react'
import { Link, useNavigate } from "react-router-dom";
import {REGISTRATION_ENDPOINT} from '../settings.js';

export default function Landing() {
  // const[id,idchange]=useState("");
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  
  const [fields, setFields] = useState({});

  useEffect(() => {
      document.querySelectorAll("#userForm input").forEach((input) => {
          document.getElementById(input.id).onchange = (event) => {console.log("hi");
              const field = event.target; //console.log(field.id + ": " + field.value);
              const fieldName = field.id.substring("create-".length); //console.log(fieldName);
              setFields(prevFields => ({...prevFields, [fieldName]: field.value}));
          };
      });
  }, []);


  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = {username, name, password, phone, address, zipcode};


    fetch(REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(fields)
    }).then((res) => {
      alert('Saved successfully.')
      //navigate('/');
    }).catch((err) => {
      console.log(err.message)
    }, [])
  }


  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit} id="userForm">
            <div className="card" style={{"textAlign": "left"}}>
              <div className="card-title">
                <h2>Create</h2>
              </div>
              <div className="card-body">

                <div className="row">

                  {/* <div className="col-lg-12">
                   <div className="form-group">
                       <label>ID</label>
                       <input value={id} disabled="disabled" className="form-control"></input>
                   </div>
               </div> */}

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Username</label>
                      <input onChange={e => setUserName(e.target.value)} className="form-control" id="create-username"></input>
                      {/* <span className="text-danger">Enter the name</span> */}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input onChange={e => setName(e.target.value)} className="form-control" id="create-name"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input onChange={e => setPassword(e.target.value)} className="form-control" id="create-password" type="password"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input onChange={e => setPhone(e.target.value)} className="form-control" id="create-phone"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input onChange={e => setAddress(e.target.value)} className="form-control" id="create-street"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Zipcode</label>
                      <input onChange={e => setZipcode(e.target.value)} className="form-control" id="create-zipcode"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>School ID</label>
                      <input onChange={e => setZipcode(e.target.value)} className="form-control" id="create-school-id"></input>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">Save</button>
                      {/* <Link to="/" className="btn btn-danger">Back</Link> */}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}