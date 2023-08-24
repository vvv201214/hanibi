// Homepage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Homepage.css'; // Import your CSS file

const Homepage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = () => {
    // if username is null then return
    if(!username){
      window.alert("Please enter username.")
      return;
    }
    navigate(`/form/${username}`);
  };

  return (
    <div className="homepage-container">
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        className="input-field"
        placeholder="Enter your username"
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Homepage;
