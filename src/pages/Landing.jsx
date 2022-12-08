import React, {useState, useEffect}from 'react'
import { Link, useNavigate } from "react-router-dom";
import {REGISTRATION_ENDPOINT, CREATE_SCHOOL, LIST_SCHOOL} from '../settings.js';

export default function Landing() {
  // const[id,idchange]=useState("");
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [schoolId, setSchoolId] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [location, setLocation] = useState("");

  const [data, setData] = useState(null);

  
  useEffect(() => {
    fetch(LIST_SCHOOL,)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setData(data)
    })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



    const handlesubmit2 = (e) => {
    e.preventDefault();
    const schooldata = {schoolName, location};


    fetch(CREATE_SCHOOL, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(schooldata)
    }).then((res) => {
      alert('Saved successfully.')
    }).catch((err) => {
      console.log(err.message)
    }, [])
  }


  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = {username, name, password, phone, address, zipcode, schoolId};


    fetch(REGISTRATION_ENDPOINT, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(userdata)
    }).then((res) => {
      alert('Saved successfully.')
    }).catch((err) => {
      console.log(err.message)
    }, [])
  }


  return (
    <div>
     <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
        <div className="card" style={{"textAlign": "left"}}>
          <div className="card-title">
            <h2>Create Student</h2>
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
                <label>userName</label>
                <input onChange={e => setUserName(e.target.value)} className="form-control"></input>
                {/* <span className="text-danger">Enter the name</span> */}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Name</label>
                <input onChange={e => setName(e.target.value)} className="form-control"></input>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control"></input>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Phone</label>
                <input onChange={e => setPhone(e.target.value)} className="form-control"></input>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Address</label>
                <input onChange={e => setAddress(e.target.value)} className="form-control"></input>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Zipcode</label>
                <input onChange={e => setZipcode(e.target.value)} className="form-control"></input>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>School id</label>
                <input onChange={e => setSchoolId(e.target.value)} className="form-control"></input>
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
    </div>
    <br></br>
   

    <div className="row">
     <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handlesubmit2}>
            <div className="card" style={{"textAlign": "left"}}>
              <div className="card-title">
                <h2>Create School</h2>
              </div>
              <div className="card-body">

                <div className="row">

              
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>school name</label>
                      <input onChange={e => setSchoolName(e.target.value)} className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>school location</label>
                      <input onChange={e => setLocation(e.target.value)} className="form-control"></input>
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
        </div>


    <div className="container">
      <br></br>
      <div className="card">
        <div className="card-title">
            <h2>List of Schools</h2>
        </div>
        <div className="card-body">
          <table className="table table-default">
            <thead className="bg-dark text-white">
              <tr>
                <td>School name</td>
                <td>Location</td>
              </tr>
            </thead>
            <tbody>
            {data?.length && data.map( (school) => {
                        return (
                        <tr key={school.id}>
                        <td> {school.schoolName}</td>
                        <td> {school.location}</td>
                        </tr>      
            )
        })}     
            </tbody>
          </table>
        </div>
      </div>
    </div>


    </div>
  );
}


