import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 bg-neutral text-white shadow-lg'>
      <div className='container mx-auto'>
        
          <FaGithub className='inline pr-2 text-3xl'/>
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>

        <div className='flex-1'>
          <div className='flex justify-end'>
            <Link to="/" className='btn btn-ghost text-lg'>Home</Link>
            <Link to="/about" className='btn btn-ghost text-lg'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Github Finder",
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar