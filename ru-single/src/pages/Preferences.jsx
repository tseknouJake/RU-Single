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
      await axios.post('/signup/preferences', userData).then((response) => {
        console.log('Signup successful:', response.data);
      });
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
          <div>
            <input type="checkbox" id="male" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="checkbox" id="female" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div>
          <label htmlFor="genderPreference">Gender Preference:</label>
          <div>
            <input type="checkbox" id="malePreference" name="genderPreference" value="Male" checked={formData.genderPreference === "Male"} onChange={handleChange} />
            <label htmlFor="malePreference">Male</label>
          </div>
          <div>
            <input type="checkbox" id="femalePreference" name="genderPreference" value="Female" checked={formData.genderPreference === "Female"} onChange={handleChange} />
            <label htmlFor="femalePreference">Female</label>
          </div>
          <div>
            <input type="checkbox" id="biPreference" name="genderPreference" value="Bi" checked={formData.genderPreference === "Bi"} onChange={handleChange} />
            <label htmlFor="biPreference">Bi</label>
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupAdditional;
