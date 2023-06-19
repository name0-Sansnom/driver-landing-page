import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "react-phone-input-2/lib/style.css";
import cities from "cities.json";
import "./form.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("Email:", email);
    console.log("Phone:", phone);
    // console.log("City:", city);
    console.log("Agree to Terms:", agreeToTerms);
  };

  return (
    <Form onSubmit={handleSubmit} className="form_box">
      <div className="form_txt">
        <h3>Become a Bolt Driver</h3>
        <p>
          if you have multiple cars or drivers{" "}
          <a href="google.com">sign up as a fleet owner</a>
        </p>
      </div>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone number</Form.Label>
        <PhoneInput
          // country="nl"
          enableSearch
          // enableAreaCodes={["ca"]}
          value={phone}
          onChange={(value) => setPhone(value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCity">
        {/* <Form.Label>City</Form.Label> */}
        <select
          className="form-select"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
          {cities.map((name) => (
            <option key={name.city} value={name.city}>
              {name.city}
            </option>
          ))}
        </select>
        <Form.Label> Select City</Form.Label>
        <div className="d-flex">
          <CountryDropdown
            value={country}
            onChange={(val) => setCountry(val)}
            className="form-select me-2"
          />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => setRegion(val)}
            className="form-select"
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-3 agreement" controlId="formCheckbox">
        <Form.Check
          type="checkbox"
          label={
            <>
              I agree to the <a href="http://google.com">Term of Service</a> and{" "}
              <a href="http://google.com">Privacy and policy</a>
            </>
          }
          checked={agreeToTerms}
          onChange={(event) => setAgreeToTerms(event.target.checked)}
        />
      </Form.Group>

      <div className="d-grid submit">
        <Button variant="submit" type="submit">
          Sign Up As A Driver
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
