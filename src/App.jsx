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
  user: {
    isLoggedIn: false,
  },
};

export function mapToken(token, setSession) {
  const payload = decodeToken(token); //console.log(payload);
  setSession({
    user: {
      id: payload["id"],
      username: payload["username"],
      role: payload["role"],
      isLoggedIn: true,
    },
    expires: payload["exp"],
  });
}

function App(props) {
  const [session, setSession] = useState(initialState);

  async function checkToken(token) {
    console.log("Checking token");
    if ((token = await verifyToken(token))) {
      setToken(token);
      mapToken(token, setSession);
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
        <Route path="/user" element={<User />} />
        <Route path="/find-ride" element={<FindRide />} />

        <Route path="*" element={<h1>Page Not Found !!!!</h1>} />
       
        {!getToken() ?
          <>
            {/* Pages you can only see when you're logged OUT */}
            <Route path="/" element={<Landing />} />

          </> :
          <>
            {/* Pages you can only see when you're logged IN */}
            <Route path="/" element={<Home session={session} />} />
            <Route path="/arrange-ride" element={<ArrangeRide user={session.user} />} />
            <Route path="/my-ride" element={<MyRide />} />
            <Route path="/contact" element={<Contact address={obj} />} />

            {/* Pages you can only see when you're ADMIN */}
            {session.user.role == "admin" &&
              <Route path="/crud" element={<CRUD />} />
            }
          </>
        }
      </Routes>
    </>
  );
}

export default App;
