import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import { getToken } from '../utils/apiFacade.js';


function Header({setErrorMsg, session, setSession}) {


    return (
        <nav className="topnav">
            <NavLink end to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            {!getToken() ?
                <Login setSession={setSession} setErrorMsg={setErrorMsg}/> :
                <>
                    <NavLink to="/user"><i className="fa fa-fw fa-user"></i> User</NavLink>
                    <NavLink to="/find-ride"><i className="fa fa-fw fa-car"></i> Find ride</NavLink>
                    <NavLink to="/arrange-ride"><i className="fa fa-fw fa-car"></i> Arrange ride</NavLink>
                    <NavLink to="/my-ride"><i className="fa fa-fw fa-car"></i> My ride</NavLink>
                    {session.user.role == "admin" &&
                        <NavLink to="/crud"><i className="fa fa-fw fa-envelope"/> CRUD </NavLink>
                    }
                    <LoggedIn session={session} setSession={setSession}/>
                </>
            }
        </nav>

    );
}

export default Header;
