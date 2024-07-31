import React, { useState } from 'react'
import './Login.css'
import {app} from '../firebase'

const Login = () => {

  const[action,setAction] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      app.auth().createUserWithEmailAndPassword(email, password)
      console.log("account created !!")
    } catch(err){
      console.log(err)
    }
  }

  const register = () => {
    setAction('active');
  };

  const loginlink = () => {
    setAction('');
  };

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
          <a href="#">Forgot Password</a>
        </div>

        <div className="register">
          <p>Don&apos;t have an account? <a href="#" onClick={register}>Sign in</a></p>
              </div>
              </form>
      </div>
       
      <div className="form-box signin">
      <form action="" className='login-form' onSubmit={handleSubmit}>
        <h1>Sign in</h1>

        <div className="input-box">
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Email id' required/>
        </div>

        <div className="input-box">
          <input type={show?"text":"password"} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
          <label onClick={handleshow}>Show</label>
        </div>
        <div className="input-box">
        <input type={show?"text":"password"} placeholder='Confirm Password' required />
          <label onClick={handleshow}>Show</label>
        </div>
        
        <button type='submit'>Sign in</button>


        <div className="register">
          <p>Already have an account? <a href="#"onClick={loginlink} >Log in</a></p>
              </div>
      </form>
      </div> 

      </div>
      </div>


  )
}

export default Login
