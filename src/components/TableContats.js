import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from "../api/contact";
import axios from "axios";


export default function TableContacts() {

  const [contacts, setContacts] = React.useState([])

  function getAllContacts() {
    axios.get("http://localhost:3003/contacts")
      .then( (res) => {
        setContacts(res.data)
      });
    
      
    }

  React.useEffect(() => {

   getAllContacts()

  }, [])

  // const retrieveContacts = async () => {
  //   const response = await api.get("/contacts");
  //     return response.data
  // }

  // React.useEffect(() => {
  //     const getAllContacts = async () => {
  //       const allContacts = retrieveContacts()
  //       setContacts(allContacts)
  //       console.log(allContacts)
  //     }
      
  //     getAllContacts()

  // }, [])

  return (
    <TableContainer sx={{ maxWidth: 600 }} component={Paper}>
    <hr></hr>
    {
   
    console.log(contacts)
    }
      <Table sx={{ maxWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{contact.id}</TableCell>
              <TableCell align="right">{contact.name}</TableCell>
              <TableCell align="right">{contact.phone}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
