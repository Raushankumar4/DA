import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Registers from "./pages/Registers";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
// import { Context } from "./main";
// import axios from "axios";

const App = () => {
  // const { isAuthenticated, setisAuthenticated, setUser } = useContext(Context);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/api/v1/user/patient/me",
  //         { withCredentials: true }
  //       );
  //       setisAuthenticated(true);
  //       setUser(response.data.user);
  //     } catch (error) {
  //       setisAuthenticated(false);
  //       setUser({});
  //     }
  //   };
  //   fetchUser();
  // }, [isAuthenticated]);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/registers" element={<Registers />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
