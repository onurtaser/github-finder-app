import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function NotFound() {
  return (
    <div className='text-center'>
      <h1 className='text-white font-bold text-7xl mb-5'>Oops!</h1>
      <p className='text-white text-3xl font-light mb-5'>404 - Page not found!</p>
      <Link to="/" className='btn btn-primary btn-lg text-white'>
        <FaHome />
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound