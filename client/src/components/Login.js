import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = () => {
  
  const { push } = useHistory();

  const initialState = {
    username: '',
    password: ''
  };

  const [credentials, setCredentials] = useState(initialState);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
    .then(req => {
      localStorage.setItem('token', req.data.payload);
      push('/protected');
    })
    .catch(err => {
      console.log(err)
    });
  };

  return (
    <>
      <div>
        <form onSubmit={login}>
          <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
          />
          <input
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
          />
          <button onClick={login}>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
