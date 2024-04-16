import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from "../../context/github/GithubContext"

function UserSearch() {

    const [text, setText] = useState("")

    const {users, searchUsers, clearUsers} = useContext(GithubContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === "") {
            alert("Please enter something")
        } else {
            searchUsers(text)

            setText("")
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8'>
        <div>
            <form onSubmit={handleSubmit} className='relative'>
                <input type="text" value={text} onChange={handleChange} placeholder='Search' className='bg-gray-200  w-full input input-lg text-black'/>
                <button type='submit' className='absolute top-0 right-0 btn btn-lg rounded-l-none w-36'>GO</button>
            </form>
        </div>
        {users.length > 0 && (
        <div>
            <button onClick={clearUsers} className="btn btn-ghots btn-lg">Clear</button>
        </div>
        )}    
    </div>
  )
}

export default UserSearch