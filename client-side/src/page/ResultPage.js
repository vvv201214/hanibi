import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Resultpage.css"; // Import your CSS file

const ResultPage = () => {
  return (
    <div className="result-container">
      <p className="success-message">Congratulations! Your form has been submitted successfully.</p>
      <Link className="home-link" to="/">
        Back to Homepage
      </Link>
    </div>
  );
};

export default ResultPage;
