import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo">Your Chat</span>
    <div className="user">
      <img src='https://plus.unsplash.com/premium_photo-1682787494953-33e83bc527d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
      {/* <span>{currentUser.displayName}</span> */}
      <button onClick={()=>console.log('hello')}>logout</button>
    </div>
  </div>
  )
}

export default Navbar