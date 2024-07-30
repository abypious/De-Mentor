import React, { useState } from 'react'
import './Login.css'


const Login = () => {

  const[action,setAction] = useState('');

  const register = () => {
    setAction('active');
  };

  const loginlink = () => {
    setAction('');
  };

  const resetlink = () =>{
    setAction('forgot')
  }

  const[show,setShow] = useState('');

  const handleshow = () => {
    setShow(!show)
  }



  return (
    <div>
      <h1 className='heading'>De-Mentor</h1>
      <div className={`wrapper ${action}`}>
        <div className="form-box login">

       <form action="">
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder='Email id' required/>
        </div>

        <div className="input-box">
          <input type={show?"text":"password"} placeholder='Password' required />
          <label onClick={handleshow}>Show</label>
        </div>
        
        <button type='submit'>Login</button>

        <div className="forgot">
          <a href="#" onClick={resetlink}>Forgot Password</a>
        </div>

        <div className="register">
          <p>Don't have an account? <a href="#" onClick={register}>Sign in</a></p>
              </div>
              </form>
      </div>
       
      <div className="form-box signin">
      <form action="">
        <h1>Sign in</h1>

        <div className="input-box">
          <input type="text" placeholder='Email id' required/>
        </div>

        <div className="input-box">
          <input type={show?"text":"password"} placeholder='Password' required />
          <label onClick={handleshow}>Show</label>
        </div>
        <div className="input-box">
        <input type={show?"text":"password"} placeholder='Confirm Password' required />
          <label onClick={handleshow}>Show</label>
        </div>
        
        <button type='submit'>Sign In</button>


        <div className="register">
          <p>Already have an account? <a href="#"onClick={loginlink} >Log In</a></p>
              </div>
      </form>
      </div> 

      <div className="form-box reset">
      <form action="">
        <h2 className='h2'>Reset Password</h2>

        <div className="input-box">
          <input type="text" placeholder='Email id' required/>
        </div>
        
        <button type='submit'>Send OTP</button>
      <p><a href="#" onClick={loginlink}>Go to Login Page</a></p>
      </form>
      </div> 

      </div>
      </div>


  )
}

export default Login
