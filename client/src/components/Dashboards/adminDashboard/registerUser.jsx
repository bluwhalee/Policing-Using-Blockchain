import React, { useState } from 'react';
import '../../../styles/Dashboards/registerFIR.css';
import axios from 'axios';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
      userType
    };

    try {
      await axios.post('http://localhost:1337/api/dashboard/admin/registeruser', formData);
      // Handle success
      console.log('FIR submitted successfully');
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setUserType('');
    } catch (error) {
      // Handle error
      console.error('Failed to submit FIR', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="report-form">
      <div className="input-group">
        <label htmlFor="name" className="input-label">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="input-field" required />
      </div>
      <div className="input-group">
        <label htmlFor="email" className="input-label">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input-field" required />
      </div>
      <div className="input-group">
        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="input-field" required />
      </div>
      <div className="input-group">
        <label htmlFor="userType" className="input-label">User Type</label>
        <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)} className="input-field" required>
          <option value="">Select User Type</option>
          <option value="1">Admin</option>
          <option value="2">Citizen</option>
          <option value="3">Investigator</option>
          <option value="4">Operator</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default RegisterUser;
