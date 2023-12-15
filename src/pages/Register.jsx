import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Your Chat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type="text" placeholder='display Name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" placeholder=''/>
                <button>Sign Up!</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}

export default Register