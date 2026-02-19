import React from 'react'
import { Link } from 'react-router'

function Hometitle() {
  return (
    <div id='title'>
      <h1>Terror Data System</h1>
      <Link id='but' to={"/qwestion"}>qwestion</Link>
    </div>
  )
}

export default Hometitle
