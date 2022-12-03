import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import { getToken } from '../utils/apiFacade.js';
import { FRONTEND_URL } from '../settings.js';


function Header({setErrorMsg, user, setUser}) {


    return (
        <nav className="topnav">
            <NavLink end to={FRONTEND_URL}><i className="fa fa-fw fa-home"></i> Home</NavLink>
            {!getToken() ?
                <Login setUser={setUser} setErrorMsg={setErrorMsg}/> :
                <>
                    <NavLink to={FRONTEND_URL + "/user"}><i className="fa fa-fw fa-user"></i> User</NavLink>
                    <NavLink to="/find-ride"><i className="fa fa-fw fa-car"></i> Find ride</NavLink>
                    <NavLink to="/arrange-ride"><i className="fa fa-fw fa-car"></i> Arrange ride</NavLink>
                    <NavLink to="/my-ride"><i className="fa fa-fw fa-car"></i> My ride</NavLink>
                    {user.role == "admin" &&
                        <NavLink to="/crud"><i className="fa fa-fw fa-envelope"/> CRUD </NavLink>
                    }
                    <LoggedIn user={user} setUser={setUser}/>
                </>
            }
        </nav>

    );
}

export default Header;
