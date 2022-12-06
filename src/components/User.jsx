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
        <div>
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
            {user!=null &&
              <div>
                <h3>Username: {user.username}</h3>
                <h3>Name: {user.name}</h3>
                <h3>Phone: {user.phone}</h3>
                <h3>Address: {user.address}</h3>
                <h3>Zipcode: {user.zipcode}</h3>
                <h3>Role: {user.role}</h3>
            </div>
            }
        </div>
    );

    
}
export default User;
