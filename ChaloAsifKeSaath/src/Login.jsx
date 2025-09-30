import React from 'react'

function Login() {
  return (
    <form >
        <div className='mb-3'>
            <label for="exampleInputEmail" className='form-label' >Email</label>
            <input type="email"   style={{backgroundColor: 'yellow'}}/>
        </div>
        <label for="inputpassword">password</label>
        <input type="password" />
        <button>Login</button>
        <button>submitt</button>
    </form>
  )
}

export default Login