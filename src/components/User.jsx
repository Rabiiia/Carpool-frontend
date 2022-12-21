import React, { Component, useRef, useState, useEffect} from 'react'
import {BACKEND_URL} from '../settings.js';

const User = (props) => {
    
    const [user, setUser] = useState({})

    const inputRef = useRef();

    


    const fetchUser = async (id) => {
      return fetch(BACKEND_URL + "/api/users/"+ id)
        .then(response => {
          
          return response.json()
        })
        .then(data => {
            setUser(data)
            return data
        })
    }

    return (
    
    <div className="row">
    <div className=" col-lg-6">
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
                        console.log(await fetchUser(inputRef.current.value));
                        
                    }}
                >Submit</button>  
            </form>
            
            <table className="table table-default">
            <thead className="bg-dark text-white">
              <tr>
                <td>username</td>
                <td>name</td>
                <td>phone</td>
                <td>address</td>
                <td>zipcode</td>
                <td>role</td>
                <td>schoolId</td>
              </tr>
            </thead>
            <tbody>

            {user!=null &&
              <tr>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td> {user.address}</td>
                <td>{user.zipcode}</td>
                <td>{user.role}</td>
                <td> {user.schoolId}</td>
            </tr>
}
            </tbody>
            </table>
        </div>
        </div>
    );
    
 
}
export default User;
