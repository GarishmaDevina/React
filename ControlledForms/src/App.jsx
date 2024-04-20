import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleRegister = (userData) => {
   
    setUsers(prevUsers => [...prevUsers, userData]);
    console.log([userData]);
  };

  const handleLogin = (loggedInUser) => {
    console.log('Logged in user:', loggedInUser);
    alert("your Log in Success")
    
  };

  return (
    <div style={{textAlign:'center'}}>
      <RegistrationForm onRegister={handleRegister} />
      <LoginForm users={users} onLogin={handleLogin} />
    </div>
  );
};

export default App;
