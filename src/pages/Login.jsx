import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Your Chat</span>
            <span className='title'>Login</span>
            <form action="">
              
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                
                <button>Sign In!</button>
            </form>
            <p>you don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login