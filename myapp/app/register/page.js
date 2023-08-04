'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const registerUser = async (e) => {
    e.preventDefault();
  
    // Check the data being sent in the request
    console.log('Data to be sent:', {
      username: data.username,
      email: data.email,
      password: data.password
    });
  
    const res = await fetch(`/api/register`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      })
    });
  
    const user = await res.json();
    router.push('/login');
  };
  

  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={registerUser}>
        <input
          placeholder='Email'
          name='email'
          id='email'
          type='email'
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <input
          placeholder='Password'
          name='password'
          id='password'
          type='password'
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <input
          placeholder='Username'
          name='username'
          id='username'
          type='text'
          value={data.username}
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
        />
        <button type='submit'>Register</button>
      </form>
    </section>
  );
};

export default Register;
