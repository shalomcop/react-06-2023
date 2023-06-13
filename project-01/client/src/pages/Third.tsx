import React from 'react'
import { Link } from 'react-router-dom'

const Third = () => {
   

  return (
    <div>
        <h1>Third page</h1>
        <Link to='/'>GO to main page</Link>
        <br/>
        <Link to="/second">Go to Second Page</Link>
    </div>
  )
}

export default Third