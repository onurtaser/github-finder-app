import React from 'react'
import UserList from '../component/users/UserList'
import UserSearch from '../component/users/UserSearch'

function Home() {
  return (
    <div>
      <UserSearch />
      <UserList />
    </div>
  )
}

export default Home