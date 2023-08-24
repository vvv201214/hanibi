import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../style/Formpage.css";

const FormPage = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    name: '',
    dob: '',
  });

  useEffect(() => {
    // fetching detail of user
    fetchDataAndPrefill();
  }, []);

  const fetchDataAndPrefill = async () => {
    try {
      const response = await fetch(`http://localhost:8080/forms/${username}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    formData.username = username;
    try {
      // Implement form submission
      const response = await fetch('http://localhost:8080/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/result');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      <p className="message">Please fill details.</p>
      <div className="form-container">
      
      <div className="form-group">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-input"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Phone Number:</label>
        <input
          type="number"
          className="form-input"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-input"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Date of Birth:</label>
        <input
          type="date"
          className="form-input"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-group">
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
    </>

  );
};

export default FormPage;
