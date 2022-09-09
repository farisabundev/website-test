import React from "react";

const Contact = ({ phoneNumber }) => {
  return (
    <div id="contact">
      <div>
        <label>PT. ABC</label>
        <br />
        <label>Jl Setiabudi no 33</label>
        <br />
        <label>{phoneNumber || "021-12345678"}</label>
      </div>
    </div>
  );
};

export default Contact;
