import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='flex justify-center bg-slate-900 m-6 rounded-lg flex-col w-min '>
        <h1 className='text-3xl m-5 text-white rounded-md p-2'>Sign-Up</h1>
        <div className='flex-col ml-5 mb-5 '>
          <div>
            <h3 className='text-white text-lg p-2 mb-1'>Full Name</h3>
            <input className='rounded-sm w-96 p-2 ml-2' placeholder='Enter Full Name' />
          </div>
          <div>
            <h3 className='text-white text-lg p-2 mb-1'>Email</h3>
            <input className='rounded-sm w-96 p-2 ml-2 mr-5' placeholder='Enter Email' />
          </div>
          <div>
            <h3 className='text-white text-lg p-2 mb-1 mr-5'>Password</h3>
            <input className='rounded-sm w-96 p-2 ml-2' placeholder='Enter Password' />
          </div>

        </div>



      </div>

    </>
  )
}

export default Signup