import React, { useState } from 'react'
import "./Login.css";
const Login = () => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
  return (
    <div className='login'>
      <form className='login__form'>
        <h1>Login Here</h1>
        <label>Email</label>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit' className='submit__btn'>LOGIN</button>
      </form>
    </div>
  )
}

export default Login;
