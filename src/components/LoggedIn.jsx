import React, {useEffect, useState} from "react";
import { initialState } from "../App.jsx";
import { FRONTEND_URL } from "../settings.js";
import facade from "../utils/apiFacade.js";
import { Link } from "react-router-dom";

export default function LoggedIn({user,setUser}) {

    const logout = () => {
        facade.removeToken() //removetoken replacing logout
        setUser(initialState) //initialstate er import fra App component
        
    }

    return (            
    
        <div className="login-container">
            {user.isLoggedIn && <span>Hi, {user["username"]}! {user["role"] == "admin" && //replaced
            <span className="badge bg-dark">Admin</span>}</span>} 
            {/* <button onClick={logout}>Logout</button> */}
            <Link to={FRONTEND_URL} onClick={logout}>Logout</Link>
           
        </div>
    )

}
