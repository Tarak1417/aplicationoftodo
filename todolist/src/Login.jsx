import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleData = (e) => {
    e.preventDefault();

    axios.get('http://localhost:3001/getuser')
      .then((result) => {
        setData(result.data);

        const user = result.data.find(user => user.email === email && user.password === password);

        if (user) {
          toast.success('Logged in');
          navigate("/Home");
        } else {
          toast.error('Invalid credentials');
        }
      })
      .catch(err => {
        console.error(err);
        toast.error('An error occurred');
      });
  };

  return (
    <div className="login-container">
      <p className="signup-link">Create account <span onClick={() => navigate("/sign")}>Sign Up</span></p>
      <h1 className="login-heading">Log In</h1>
      <form className="login-form" onSubmit={handleData}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="submit-button" type="submit">Sign In</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
