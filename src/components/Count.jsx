import { Button } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var[count,setcount]=useState(0)
    const Increment=()=>
        setcount(count+1)
    const Dicrement=()=>
        setcount(count-1)

  return (
    <div>
    <h1>  Count:{count}</h1>
    <Button variant='contained'color='success' onClick={()=>setcount(count+1)}>ADD</Button>&nbsp;
    <Button variant='contained'color='error'onClick={()=>setcount(count-1)}>SUBTRACT</Button>
    </div>
  )
}

export default Count
