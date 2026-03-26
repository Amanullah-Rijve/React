import React from 'react'
import App from './App.jsx'

function UserCard({name,desc}) {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Desc: {desc}</p>
    </div>
  )
}

export default UserCard