import React, {useState}from 'react'
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from '../utils/settings';

const Create = () => {

     // const[id,idchange]=useState("");
   const[userName,setUserName]=useState("");
   const[name,setName]=useState("");
   const[phone,setPhone]=useState("");
   const[address,setAddress]=useState("");
   const[zipcode,setZipcode]=useState("");
  

 
  
  const handlesubmit=(e)=>{
    e.preventDefault();
    const userdata ={userName,name,phone,address, zipcode};
  
    

    fetch(BASE_URL,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userdata)
    }).then((res)=>{
      alert('Saved successfully.')
      navigate('/');
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  

 return (
 <div> 

<div className="row">
<div className="offset-lg-3 col-lg-6">
<form className="container" onSubmit={handlesubmit}>

<div className="card" style={{"textAlign":"left"}}>
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
                  <label>userName</label>
                  <input  onChange={e=>setUserName(e.target.value)} className="form-control"></input>
                   {/* <span className="text-danger">Enter the name</span> */}
              </div>
          </div>

          <div className="col-lg-12">
              <div className="form-group">
                  <label>Name</label>
                  <input  onChange={e=>setName(e.target.value)} className="form-control"></input>
              </div>
          </div>

          <div className="col-lg-12">
              <div className="form-group">
                  <label>Phone</label>
                  <input  onChange={e=>setPhone(e.target.value)} className="form-control"></input>
              </div>
          </div>

          <div className="col-lg-12">
              <div className="form-group">
                  <label>Address</label>
                  <input  onChange={e=>setAddress(e.target.value)} className="form-control"></input>
              </div>
          </div>

          <div className="col-lg-12">
              <div className="form-group">
                  <label>Zipcode</label>
                  <input  onChange={e=>setZipcode(e.target.value)} className="form-control"></input>
              </div>
          </div>


          <div className="col-lg-12">
              <div className="form-group">
                  <button className="btn btn-success" type="submit">Save</button>
                  <Link to="/" className="btn btn-danger">Back</Link>
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






export default Create;