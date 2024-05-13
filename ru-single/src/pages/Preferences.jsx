import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupAdditional = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: '',
    genderPreference: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Retrieve basic information from local storage or state
      const basicInfo = JSON.parse(localStorage.getItem('basicInfo'));
      const userData = { ...basicInfo, ...formData };
      await axios.post('/signup/preferences', userData);
      navigate('/login'); // Redirect to login page after signup
    } catch (error) {
      console.error('Error submitting additional details:', error);
    }
  };

  return (
    <div>
      <h2>Step 2: Additional Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="genderPreference">Gender Preference:</label>
          <input type="text" id="genderPreference" name="genderPreference" value={formData.genderPreference} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupAdditional;
