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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate()

  function deleteContact(id) {
      axios.delete(`http://localhost:3003/contacts/${id}`).then(getAllContacts());
  }

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
    <>
    <h1>Contacts:</h1>
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
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact, key) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{key + 1}</TableCell>
              <TableCell align="right">{contact.name}</TableCell>
              <TableCell align="right">{contact.phone}</TableCell>
              <TableCell align="right">
                <EditIcon onClick={() => {navigate(`/edit-contact/${contact.id}`)}} /> 
                <DeleteIcon onClick={() => {deleteContact(contact.id)} } />
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
