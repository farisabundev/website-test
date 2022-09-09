import React, { useState } from "react";
import Contact from "./contact";

const Footer = () => {
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleBtnPhoneNumber = () => {
    setPhoneNumber(phoneNumberInput);
    setPhoneNumberInput("");
  };

  return (
    <footer id="footer">
      <div className="row container-fluid my-3">
        <div className="col">
          <label>No Telp.</label>
          <div>
            <input
              className="form-input"
              value={phoneNumberInput}
              onChange={(e) => setPhoneNumberInput(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary mt-2"
            onClick={() => handleBtnPhoneNumber()}
          >
            Go
          </button>
        </div>
        <div className="col">
          <Contact phoneNumber={phoneNumber} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
