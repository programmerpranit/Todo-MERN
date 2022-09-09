import React from 'react'

const Login = () => {
  return (
  <>
  <div className='flex justify-center bg-slate-900 m-6 rounded-lg flex-col'>
    <h1 className='text-white text-3xl m-5'>Login</h1>
    <div className='flex-col text-white m-5 '>
      <div className='m-2'>
      <h3 className='text-white'>Username</h3>
        <input className='rounded-sm' type="text" placeholder='Enter Username' />
      </div>
      <div className='m-2'>
        <h3 className='text-white'>Password</h3>
        <input className='rounded-sm' type="password" placeholder='Enter Password' />
      </div>
    </div>
  </div>
   
  </>
  )
}

export default Login