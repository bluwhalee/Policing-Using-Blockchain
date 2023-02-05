import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginPage.css';
import jwtDecode from 'jwt-decode'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const  response  = await axios.post('http://localhost:1337/api/login', { email, password });
      const user = response.data.user
      if(user)
      {
        localStorage.setItem("user",user);
      }
      navigate('/dashboard')
      
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login-page-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Login</h1>
        <div className="form-group">
          <input type="email" className="form-input" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required/>
          <input type="password" className="form-input" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required/>
        </div>
        <button type="submit" className="form-submit">Login</button>
      </form>
    </div>
  )}

export default LoginPage;