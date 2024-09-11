import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='bg-sky-300 m-32 flex'>
      <div className="text-center flex w-full justify-center">

        <Link to='/create-room'><button className="transition transition-duration-700 ease-in-out flex my-[20%] mx-2 bg-white rounded-lg hover:bg-sky-200 hover:shadow-slate-600 shadow-inner p-2 text-sky-500">Create Room</button></Link>
        <Link to='/join-room'><button className="transition transition-duration-700 ease-in-out flex my-[25%] mx-2 bg-white rounded-lg hover:bg-sky-200 p-2 hover:shadow-slate-600 shadow-inner text-sky-500">Join Room</button></Link>
      </div>
    </div>
  )
}

export default LandingPage