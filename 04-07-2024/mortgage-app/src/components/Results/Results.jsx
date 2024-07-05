import React from "react";
import styles from "./results.module.css";

function Results({ results, viewOption }) {
  return (
    <div className={styles.showInput}>
      <h2>Your results</h2>
      <span className={styles.spanResults}>
        Your results are show below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </span>
      <div className={styles.showResults}>
        {viewOption === "interestOnly" && (
          <>
            <h4>Your monthly repayments</h4>
            <p className={styles.monthly}>{results.annualInstallment}</p>
            <hr />
            <h4>Total you'll repay over the term</h4>
            <p className={styles.total}>{results.totalInterest}</p>
          </>
        )}
        {viewOption === "totalMortgage" && (
          <>
            <h4>Your monthly repayments with Interest</h4>
            <p className={styles.monthly}>
              {results.totalMortgageWithInterest}
            </p>
            <hr />
            <h4>Total you'll repay over the term</h4>
            <p className={styles.total}>{results.annualInstallment}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Results;
