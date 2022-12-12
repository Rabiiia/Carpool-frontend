import React, { useState, useEffect } from "react";
import { json, Route, Routes } from "react-router-dom";
import { FRONTEND_URL } from "./settings.js";
import {
  getToken,
  verifyToken,
  decodeToken,
  removeToken,
  setToken,
} from "./utils/apiFacade";

import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import User from "./components/User.jsx";
import FindRide from "./pages/FindRide";
import ArrangeRide from "./pages/ArrangeRide.jsx";
import MyRide from "./pages/MyRide.jsx";
import CRUD from "./pages/CRUD";
import Contact from "./pages/Contact.jsx";

export const initialState = {
  user: {
    isLoggedIn: false,
  },
};

export function jsonToSession(json, setSession) {
  const payload = decodeToken(json.token); //console.log(payload);
  const user = json.user; console.log(user);
  setSession({
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
      phone: user.phone,
      address: user.address,
      school: user.school,
      role: user.role,
      isLoggedIn: true,
    },
    expires: payload["exp"],
  });
}

function App(props) {
  const [session, setSession] = useState(initialState);

  async function checkToken(token) {
    console.log("Checking token");
    let json;
    if ((json = await verifyToken(token))) {
      setToken(json.token);
      jsonToSession(json, setSession);
    } else {
      console.log("Session expired");
      alert("Your session has expired. Please log in again.");
      removeToken();
    }
  }

  useEffect(() => {
    if (getToken()) {
      (async () => {
        await checkToken(getToken());
      })();
      setTimeout(async () => {
        await checkToken(getToken());
      }, session.expires * 1000);
    }
  }, []);

  const now = new Date();

  const obj = {
    name: "TestName",
    street: "TestStreet",
    town: "TestTown",
    country: "TestCountry",
  };

  return (
    <>
      <Header session={session} setSession={setSession} />
      <Routes>
        {/* Pages you can always see */}
        <Route path={FRONTEND_URL + "/user"} element={<User />} />
        <Route path={FRONTEND_URL + "/find-ride"} element={<FindRide />} />

        <Route path="*" element={<h1>Page Not Found !!!!</h1>} />
       
        {!getToken() ?
          <>
            {/* Pages you can only see when you're logged OUT */}
            <Route path={FRONTEND_URL} element={<Landing />} />

          </> :
          <>
            {/* Pages you can only see when you're logged IN */}
            <Route path={FRONTEND_URL + "/"} element={<Home session={session} />} />
            <Route path={FRONTEND_URL + "/arrange-ride"} element={<ArrangeRide user={session.user} />} />
            <Route path={FRONTEND_URL + "/ride/:id"} element={<MyRide />} />
            <Route path={FRONTEND_URL + "/contact"} element={<Contact address={obj} />} />

            {/* Pages you can only see when you're ADMIN */}
            {session.user.role == "admin" &&
              <Route path={FRONTEND_URL + "/crud"} element={<CRUD />} />
              // <Route path="/list" element={<LIST />} />
            }
          </>
        }
      </Routes>
    </>
  );
}

export default App;
