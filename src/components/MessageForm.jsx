import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, phone, email, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <section className="Message-Conatiner">
        <h2>Send Us A Message</h2>
        <form onSubmit={handleOnSubmitForm} className="">
          <div>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="Enter First Name"
              value={firstName}
            />
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Enter First Name"
              value={lastName}
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Enter Email Address"
              value={email}
            />
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
            />
          </div>
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            value={message}
          ></textarea>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default MessageForm;
