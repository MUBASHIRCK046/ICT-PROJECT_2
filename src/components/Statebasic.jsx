import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
  var [name, setname] = useState("MUBASHIR")
  var [grr, setgrr] = useState("")

  const inputHandler = (e) => {
    console.log(e.target.value)
    setname(e.target.value)
  }

  const cartoon = () => {
    setgrr(name)
  }

  return (
    <div>
      <h1>welcome {grr}</h1><br />
      <TextField variant='outlined' onChange={inputHandler} /><br /><br />
      <button onClick={cartoon}>submit</button>
    </div>
  )
}

export default Statebasic
