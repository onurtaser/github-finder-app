import React from 'react'

function About() {
  return (
    <>
      <h1 className='text-6xl mb-4 text-white'>Github Finder</h1>
      <p className='mb-4 text-2xl text-white font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
    </>
  )
}

export default About