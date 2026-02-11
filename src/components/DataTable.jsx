import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useState } from 'react'

const DataTable = () => {
  const [user, setUser] = useState([])

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
  setUser(res.data)
  console.log(res.data)
  })


  return (
    <div>
      <h2>Table</h2><center>
      <TableContainer>
        
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>usename</TableCell>
                    <TableCell>id</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                   {user.map((val) => {
                       return (

                <TableRow>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.username}</TableCell>
                    <TableCell>{val.id}</TableCell>
                </TableRow>
                       )
        })}

            </TableBody> 
                

      </TableContainer>
      </center>
    </div>
  )
}

export default DataTable


