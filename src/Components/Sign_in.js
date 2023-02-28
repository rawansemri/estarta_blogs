import React from 'react';
import "./Sign_in.css";
export const Sign_in = () => {
  return (
    <div className='Sign_in'>
        <h2>Sign in</h2>
        <input className='email' type="email" placeholder='E-mail'></input>
        <input className='pass' type="password" placeholder='Password'></input>
        <button className='btnSignin'>Sign in</button>
        <a className='signup'>Don't have an account?</a>
    </div>
  )
}
