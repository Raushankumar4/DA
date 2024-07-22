import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const Registers = () => {
  const { isAuthenticated, setisAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();
  const handleOnRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/patient/register",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          password,
          role: "Patient",
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setisAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section className="Container form-Component registeration_form">
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          reiciendis recusandae commodi sequi voluptas.
        </p>
        <form onSubmit={handleOnRegister}>
          <div>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="Enter FirstName"
              value={firstName}
            />
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Enter LastName"
              value={lastName}
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Enter Email"
              value={email}
            />
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="number"
              placeholder="Enter PhoneNumber"
              value={phone}
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setNic(e.target.value);
              }}
              type="number"
              placeholder="Enter NIC"
              value={nic}
            />
            <input
              onChange={(e) => {
                setDob(e.target.value);
              }}
              type="date"
              placeholder="Enter Date Of Birth"
              value={dob}
            />
          </div>
          <div>
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter Password"
              value={password}
            />
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p>Already Registered?</p>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", alignItems: "center" }}
            >
              Login Now
            </Link>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Registers;
