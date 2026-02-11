import React from 'react'

const Login = () => {
  return (
    <div>
        <h3>loginPage </h3>
       email: <input type="email" name="email" id="email" />
        <br />
        <br />
        password:<input type="password" name="password" id="password" />
        <br />
        <br />
        <button>Login</button>

    </div>
  )
}

export default Login