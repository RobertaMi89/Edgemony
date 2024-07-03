import React, { useState } from "react";
import styles from "./form.module.css";
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
      <div className={styles.containerWrapper}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Contact US</h1>
          <div>
            <div className={styles.fullName}>
              <div className={styles.name}>
                <label>First Name *</label>
                <br />
                <input
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  className={errors.name ? "input-error" : ""}
                />
              </div>
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              <div className={styles.surname}>
                <label>Last Name *</label>

                <br />
                <input
                  name="surname"
                  value={input.surname}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}
            <div className={styles.email}>
              <label>Email *</label>
              <input name="email" value={input.email} onChange={handleChange} />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className={styles.queryLabel}>
              <label>Query Type *</label>
            </div>
            <div className={styles.query}>
              <br />
              <fieldset className={styles.radioLeft}>
                <input
                  type="radio"
                  id="generalEnquiry"
                  name="queryType"
                  value="generalEnquiry"
                  onChange={handleChange}
                />
                <label htmlFor="generalEnquiry">General Enquiry</label>
              </fieldset>
              <fieldset className={styles.radioRight}>
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
            </div>
            <div className={styles.message}>
              <label htmlFor="message">Message *</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                cols="50"
                value={input.message}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && (
                <p style={{ color: "red" }}>{errors.message}</p>
              )}
            </div>
            <div className={styles.check}>
              <input type="checkbox" name="check" />
              <label htmlFor="name">
                I consent to being contacted by the team *
              </label>
            </div>
          </div>
          <input type="submit" value="Submit" className={styles.submit} />
        </form>
        <p>{input.name}</p>
        <p>{input.surname}</p>
        <p>{input.email}</p>
        <p>{input.queryType}</p>
        <p>{input.message}</p>
      </div>
    </>
  );
}

export default Form;
