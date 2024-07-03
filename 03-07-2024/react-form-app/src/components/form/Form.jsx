import React, { useState } from "react";
import "./form.module.css";

function Form() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    queryType: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    queryType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    const requiredFields = ["name", "surname", "email", "message"];
    requiredFields.forEach((field) => {
      if (!input[field]) {
        newErrors[field] = "This field is required.";
      }
    });

    if (!input.queryType) {
      newErrors.queryType = "Please select a query type";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert(`Message Sent!`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Contact US</h1>
        <div>
          <label>First Name *</label>
          <input
            name="name"
            value={input.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <label>Last Name *</label>
          <input name="surname" value={input.surname} onChange={handleChange} />
          {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}
          <label>Email *</label>
          <input name="email" value={input.email} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <label>Query Type *</label>
          <fieldset>
            <input
              type="radio"
              id="generalEnquiry"
              name="queryType"
              value="generalEnquiry"
              onChange={handleChange}
            />
            <label htmlFor="generalEnquiry">General Enquiry</label>
          </fieldset>
          <fieldset>
            <input
              type="radio"
              id="supportRequest"
              name="queryType"
              value="supportRequest"
              onChange={handleChange}
            />
            <label htmlFor="supportRequest">Support Request</label>
          </fieldset>
          {errors.queryType && (
            <p style={{ color: "red" }}>{errors.queryType}</p>
          )}
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            cols="50"
            value={input.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          <input type="checkbox" /> I consent to being contacted by the team *
        </div>
        <input type="submit" value="Submit" />
      </form>
      <p>{input.name}</p>
      <p>{input.surname}</p>
      <p>{input.email}</p>
      <p>{input.queryType}</p>
      <p>{input.message}</p>
    </>
  );
}

export default Form;
