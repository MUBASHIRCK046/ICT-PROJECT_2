import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
const Name = () => {
    var[name, setName] = useState("")
    
  return (
    <div>
      <h2>Welcome {name}</h2>
      <Button variant="contained" color="error" onClick={() => setName("Karuna")}>NIHAD</Button> &nbsp;&nbsp;
      <Button variant="contained" color="success" onClick={() => setName("Mubashir")}>Mubashir</Button>&nbsp;&nbsp;
      <Button variant="contained" color="primary" onClick={() => setName("George")}> George</Button>&nbsp;&nbsp;
    </div>
  )
}

export default Name
