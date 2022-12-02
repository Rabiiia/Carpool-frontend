import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Contact from "./pages/Contact.jsx";
import Landing from "./pages/Landing.jsx";
import CRUD from "./pages/CRUD";
import ArrangeRide from "./pages/ArrangeRide.jsx";
import MyRide from "./pages/MyRide.jsx";
import Header from "./components/Header.jsx";
import User from "./components/User.jsx";
import { useEffect } from "react";
import {
  getToken,
  verifyToken,
  decodeToken,
  removeToken,
  setToken,
} from "./utils/apiFacade";
import FindRide from "./pages/FindRide";

export const initialState = {
  //username: null,
  //role: null,
  isLoggedIn: false,
};

export function updateUser(token, setUser) {
  const payload = decodeToken(token); //console.log(payload);
  setUser({
    id: payload["id"],
    username: payload["username"],
    role: payload["role"],
    isLoggedIn: true,
  });
}

function App(props) {
  const [user, setUser] = useState(initialState);

  //denne function reruns everytime page is refreshed
  // bemærk denne function er async, fordi verifyToken function return a promise.
  // and async await unpacks that promise
  async function checkToken(token) {
    console.log("Checking token");
    if ((token = await verifyToken(token))) {
      setToken(token);
      updateUser(token, setUser);
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
      })(); //< async anonymous function is being called right away ()
      setTimeout(async () => {
        await checkToken(getToken());
      }, 1000 * 60 * 30);
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
      <Header user={user} setUser={setUser} />
      <Routes>
        {/* Pages you can always see */}
        <Route path="/user" element={<User />} />
        <Route path="/find-ride" element={<FindRide />} />

        <Route path="*" element={<h1>Page Not Found !!!!</h1>} />
       
        {!getToken() ?
          <>
            {/* Pages you can only see when you're logged OUT */}
            <Route path="/" element={<Landing user={user} />} />

          </> :
          <>
            {/* Pages you can only see when you're logged IN */}
            <Route path="/" element={<Home user={user} />} />
            <Route path="/arrange-ride" element={<ArrangeRide user={user} />} />
            <Route path="/my-ride" element={<MyRide />} />
            <Route path="/contact" element={<Contact address={obj} />} />

            {/* Pages you can only see when you're ADMIN */}
            {user.role == "admin" &&
              <Route path="/crud" element={<CRUD />} />
            }
          </>
        }
      </Routes>
    </>
  );
}

export default App;
