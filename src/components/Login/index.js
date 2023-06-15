// Write your code here
import React from 'react'
import Message from '../Message'

const Login = ({onLogin}) => {
  const handleLogin = () => {
    onLogin()
  }

  return (
    <div className="login-container">
      <Message text="Please Login" />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login
