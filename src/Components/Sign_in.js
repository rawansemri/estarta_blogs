import React from 'react';
import "./Sign_in.css";
import {Helmet} from 'react-helmet';
export const Sign_in = () => {
  return (
    <div className='Sign_in'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Sign in</title>
      </Helmet>
      <h2>Sign in</h2>
      <input className='email' type="email" placeholder='E-mail'></input>
      <input className='pass' type="password" placeholder='Password'></input>
      <button className='btnSignin'>Sign in</button>
      <a className='signup'>Don't have an account?</a>
    </div>
  )
}
