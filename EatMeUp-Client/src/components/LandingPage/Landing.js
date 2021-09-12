import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Landing = () => {

  const history = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault();


  }

  return (
    <div>
      <button
      onClick={logoutHandler}
      >Logout</button>
    </div>
  )
}

export default Landing
