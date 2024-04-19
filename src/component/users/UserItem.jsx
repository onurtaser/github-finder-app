import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='card bg-base-100 shadow-lg'>
        <div className="card-body flex-row items-center space-x-4">
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src={avatar_url} alt="" />
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>Visit Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem