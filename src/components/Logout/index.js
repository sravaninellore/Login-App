// Write your code here
import React from 'react'
import Message from '../Message'

const Logout = ({onLogout}) => {
  const handleLogout = () => {
    onLogout()
  }

  return (
    <div className="logout-container">
      <Message text="Welcome User" />
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
