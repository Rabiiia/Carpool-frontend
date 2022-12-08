import React, {useEffect, useState} from "react";
import { initialState } from "../App.jsx";
import facade from "../utils/apiFacade.js";

export default function LoggedIn({session, setSession}) {

    const logout = () => {
        facade.removeToken() //removetoken replacing logout
        setSession(initialState) //initialstate er import fra App component
        
    }

    return (            
    
        <div className="login-container">
            {session.user.isLoggedIn && <span>Hi, {session.user.username}! {session.user.role == "admin" && //replaced
            <span className="badge bg-dark">Admin</span>}</span>} 
            <button onClick={logout}>Logout</button>
            {/* But when you deploy then the button above - >
            <Link to={DROPLET_FOLDER} onClick={logout}>Logout</Link>. You can make it into a button inside Link i guess but dont know how */}
        </div>
    )

}
