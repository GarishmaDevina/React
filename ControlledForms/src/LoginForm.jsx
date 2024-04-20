import React, { useState } from 'react';

const LoginForm = ({ users, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = users.find(user => user.email === formData.email && user.password === formData.password);
    if (user) {
     
      onLogin(user);
      
      setFormData({
        email: '',
        password: ''
      });
    } else {
      alert('Invalid..! Recheck your email or password..!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{color:"green"}}>Login</h2>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      /><br/><br/>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      /><br/><br/>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
