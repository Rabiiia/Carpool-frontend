import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FRONTEND_URL } from "../settings.js";
import { removeToken } from "../utils/apiFacade.js";
import { initialState } from "../App.jsx";

export default function LoggedIn({session, setSession}) {
  const logout = () => {
    removeToken();
    setSession(initialState) //initialstate er import fra App component
  };

  return (
    <div className="login-container">
      {session.user.isLoggedIn && <span>Hi, {session.user.username}! {session.user.role == "admin" && //replaced
      <span className="badge bg-dark">Admin</span>}</span>} 
      {/* <button onClick={logout}>Logout</button> */}
      <Link to={FRONTEND_URL} onClick={logout}>Logout</Link>
    </div>
  );
}
