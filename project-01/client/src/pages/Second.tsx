import React from 'react'
import { Link } from 'react-router-dom'

const Second = () => {
   

  return (
    <div>
        <h1>Second page</h1>
        <Link to='/'>GO to main page</Link>
        <br/>
        <Link to="/third">Go to third page</Link>
    </div>
  )
}

export default Second