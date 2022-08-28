import React from 'react'

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import styles from "./../components/styles.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function EditUser() {


  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");


  const data = {
    name: name,
    phone: phone,
  
  }

  const {id} = useParams()

 

   React.useEffect(() => {
    console.log("id of user: ", id)
  
      axios.get(`http://localhost:3003/contacts/${id}`).then((res) => {

         setName(res.data.name)
         setPhone(res.data.phone)
          
        })

      console.log("use effect", data)
   }, []);



  const navigate = useNavigate();


  function updateContact(e) {
    e.preventDefault()
    axios.put(`http://localhost:3003/contacts/${id}`, data).then(navigate("/"));
  }



  return (
    <div className="form">

      <h1>Update Contact</h1>
      <br></br>
      <TextField 
          name="name"
          label="Name"
          onChange={(e) =>  setName(e.target.value)  }
          value={name}
         />
         <br></br>
          <TextField 
            name="phone"
            label="Phone"
            onChange={(e) => e.target.value}
            value={phone}    
         />
         <br></br>
         <Button variant="contained" onClick={updateContact}>Update</Button>

    </div>
  )
  }


export default EditUser