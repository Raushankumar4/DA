import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [doctorfirstName, setDoctorFirstName] = useState("");
  const [doctorlastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState("");
  const [department, setDepartment] = useState("");

  const departmentsArray = [
    "",
    "Pediatrics",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Dermatology",
    "Neurology",
    "Radiology",
    "Oncology",
    "Physical THerapy",
    "ENT",
    "Dermatology",
  ];
  const navigateTo = useNavigate();
  const [doctors, setdoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      // console.log(`data coming ${data.doctors}`);
      setdoctors(data.doctors);
    };
    fetchDoctors();
  }, []);

  const handleOnAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_Date: appointmentDate,
          doctor_firstName: doctorfirstName,
          doctor_lastName: doctorlastName,
          address,
          hasVisited: hasVisitedBool,
          department,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      navigateTo = "/";
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <section className="Container form-Component Appointment_form">
        <h2>Appointment</h2>

        <form onSubmit={handleOnAppointment}>
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
            <select
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split("");
                setFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              value={`${doctorfirstName} ${doctorlastName}`}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor.doctorDepartment === department)
                .map((doctor, index) => {
                  return (
                    <option
                      key={index}
                      value={`${doctor.firstName} ${doctor.lastName}`}
                    >
                      {doctor.firstName} {doctor.lastName}
                    </option>
                  );
                })}
            </select>
            <input
              onChange={(e) => setAppointmentDate(e.target.value)}
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
            />
          </div>
          <div>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {departmentsArray.map((depart, index) => {
                return (
                  <option key={index} value={depart}>
                    {depart}
                  </option>
                );
              })}
            </select>
          </div>
          <textarea
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Address"
            rows="10"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p>Have you Visited Before ?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onClick={(e) => {
                setHasVisited(e.target.checked);
              }}
              style={{ flex: "none", width: "20px" }}
            />
          </div>
          <div>
            <button type="submit">GET APPOINTMENT</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AppointmentForm;
