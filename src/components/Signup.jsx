import { Avatar, Button, TextField } from '@mui/material'
import React from 'react'
const Signup = () => {
  return (
    <div><center><br />
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkcR_2JljO04TVfKtdb6TaZd878i5FvtQXw&s" >
      </Avatar>
<TextField id="filled-basic" label="name" variant="filled" /><br />
<TextField id="standard-basic" label="phone" variant="standard" /><br />
</center>
<Button variant="contained">enter</Button>
<br />
    </div>

 
  )
}

export default Signup

