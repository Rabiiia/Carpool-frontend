import React, { Component, useRef, useState, useEffect} from 'react'

const User = (props) => {
    
    const [user, setUser] = useState({})

    const inputRef = useRef();

    


    const fetchUser = async (id) => {
      return fetch("http://localhost:8080/api/info/"+id)
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
                <h3>{user.username}</h3>
                <h3>{user.name}</h3>
                <h3>{user.phone}</h3>
                <h3>{user.address}</h3>
                <h3>{user.zipcode}</h3>
                <h3>{user.role}</h3>
            </div>
            }
        </div>
    );

    
}
export default User;
