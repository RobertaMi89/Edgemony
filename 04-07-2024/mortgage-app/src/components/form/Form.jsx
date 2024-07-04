import React, { useState } from "react";
import styles from "./form.module.css";
import Svg from "../SvgFile.jsx";
function Form() {
  const initialInputState = {
    mortgageAmount: "",
    termYears: "",
    interestRate: "",
    viewOption: "",
  };

  const initialErrorState = {
    mortgageAmount: "",
    termYears: "",
    interestRate: "",
    viewOption: "",
  };

  const initialResultState = {
    annualInstallment: "",
    totalInterest: "",
    totalMortgageWithInterest: "",
  };

  const [input, setInput] = useState(initialInputState);
  const [errors, setErrors] = useState(initialErrorState);
  const [results, setResults] = useState(initialResultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    const requiredFields = ["mortgageAmount", "termYears", "interestRate"];
    requiredFields.forEach((field) => {
      if (!input[field]) {
        newErrors[field] = "This field is required.";
      }
    });

    if (!input.viewOption) {
      newErrors.viewOption = "Please select a view option.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      calculateResults();
    }
  };

  const calculateResults = () => {
    const P = parseFloat(input.mortgageAmount);
    const r = parseFloat(input.interestRate) / 100;
    const n = parseInt(input.termYears);

    const annualRate = r;
    const numPayments = n;
    const annualInstallment =
      (P * (annualRate * Math.pow(1 + annualRate, numPayments))) /
      (Math.pow(1 + annualRate, numPayments) - 1);
    const totalMortgageWithInterest = annualInstallment * numPayments;
    const totalInterest = totalMortgageWithInterest - P;

    setResults({
      annualInstallment: annualInstallment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalMortgageWithInterest: totalMortgageWithInterest.toFixed(2),
    });
  };

  const handleClear = () => {
    setInput(initialInputState);
    setErrors(initialErrorState);
    setResults(initialResultState);
  };
  return (
    <>
      <div className={styles.containerWrapper}>
        <form className={styles.mortgageFform} onSubmit={handleSubmit}>
          <div className={styles.header}>
            <h1>Mortgage Calculator</h1>
            <span className={styles.clearAll} onClick={handleClear}>
              Clear All
            </span>
          </div>
          <div>
            <div className={styles.amount}>
              <label>Mortgage Amount</label>
              <input
                name="mortgageAmount"
                value={input.mortgageAmount}
                onChange={handleChange}
                className={errors.mortgageAmount ? "input-error" : ""}
              />
              {errors.mortgageAmount && (
                <p style={{ color: "red" }}>{errors.mortgageAmount}</p>
              )}
            </div>
            <div className={styles.mortgageTermRate}>
              <div className={styles.mortgageTerm}>
                <label>Mortagage Term</label>
                <br />
                <input
                  name="termYears"
                  value={input.termYears}
                  onChange={handleChange}
                  className={errors.termYears ? "input-error" : ""}
                />
                {errors.termYears && (
                  <p style={{ color: "red" }}>{errors.termYears}</p>
                )}
              </div>
              <div className={styles.interestRate}>
                <label>Interest Rate</label>

                <br />
                <input
                  name="interestRate"
                  value={input.interestRate}
                  onChange={handleChange}
                  className={errors.interestRate ? "input-error" : ""}
                />
                {errors.interestRate && (
                  <p style={{ color: "red" }}>{errors.interestRate}</p>
                )}
              </div>
            </div>

            <div className={styles.mortagageType}>
              <label>Mortgage Type</label>
            </div>
            <div className={styles.query}>
              <br />
              <fieldset className={styles.repayment}>
                <input
                  type="radio"
                  id="interestOnly"
                  name="viewOption"
                  value="interestOnly"
                  onChange={handleChange}
                />
                <label htmlFor="Repayment">Repayment</label>
              </fieldset>
              <fieldset className={styles.interestOnly}>
                <input
                  type="radio"
                  id="totalMortgage"
                  name="viewOption"
                  value="totalMortgage"
                  onChange={handleChange}
                />
                <label htmlFor="InterestOnly">Interest Only</label>
              </fieldset>
              {errors.viewOption && (
                <p style={{ color: "red" }}>{errors.viewOption}</p>
              )}
            </div>
          </div>
          <div className={styles.submitBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#133041"
                d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
              />
            </svg>
            <input
              type="submit"
              value="Calculate Repayments"
              className={styles.submit}
            />
          </div>
        </form>

        <div className={styles.resultDefault}>
          <Svg sty />
        </div>
        <div className={styles.showInput}>
          <h2>Results</h2>
          {input.viewOption === "interestOnly" && (
            <>
              <p>Total Interest: {results.totalInterest}</p>
              <p>Annual Installment: {results.annualInstallment}</p>
            </>
          )}
          {input.viewOption === "totalMortgage" && (
            <>
              <p>
                Total Mortgage with Interest:{" "}
                {results.totalMortgageWithInterest}
              </p>
              <p>Annual Installment: {results.annualInstallment}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Form;
