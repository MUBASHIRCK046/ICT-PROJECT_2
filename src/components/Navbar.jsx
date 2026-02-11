import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" >
        <Toolbar>
            <Typography variant="h6" component="div" align="left" sx={{ flexGrow: 1 }}>
                MyApp &nbsp;
                <Link to="/login">
                <Button color="herit">Login</Button>
                </Link>
                <Link to="/Signup">
                <Button color="inherit">Signup</Button>
                </Link>
                <Link to="/Datatable">
                <Button color="inherit">Datatable</Button>
                </Link>
                <Link to="/Statebasic">
                <Button color="satebasic">Statebasic</Button>
                </Link>
                <Link to="/Count">
                <Button color="count">Count</Button>
                </Link>
                 <Link to="/Name">
                <Button color="inherit">Name</Button>
                </Link>
                <Link to ="/cards">
                <Button color="inherit">Cards</Button>
                </Link>
                
            </Typography>
            
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
