import React from 'react'

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import styles from "./../components/styles.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
 
function AddContact() {


  const [formData, setFormData] = React.useState({
    name: " ",
    phone: " ",
    nameError: " ",
    phoneError: " "
  })

  const data = {
    name: formData.name,
    phone: formData.phone
  }

  const [submittedOnce, setSubmittedOnce] = React.useState(false)

  const navigate = useNavigate();

  function handleSubmit() {
    setSubmittedOnce(true)
    if(formData.name === " ") {
      setFormData(prevFormData => { 
        return {
          ...prevFormData,
          nameError: "Name is required"
        }
      })
    } 
    else if (formData.phone === " ") {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          phoneError: "Phone is required"
        }
      })
    }
    else { 
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          phoneError: " ",
          nameError: " "
        }
      })
    console.log(formData)

    
    
      axios.post("http://localhost:3003/contacts", data).then(navigate("/"));

    }
  }

 

  function handleChange(e) {
    e.preventDefault()

    const {name, value} = e.target

    setFormData( prevFormData => {
      return {
      ...prevFormData,
      [name]: value
      }
    }
    ) 
  }



  return (
    <div className="form">

      <h1>Add Contact</h1>
      <br></br>
      <TextField 
          error={!!formData.nameError && submittedOnce}
          name="name"
          label="Name"
          onChange={handleChange}
          value={formData.name}
          helperText={ formData.nameError ? formData.nameError : " " }
         />
         <br></br>
          <TextField
            error={!!formData.phoneError && submittedOnce}
            name="phone"
            label="Phone"
            onChange={handleChange}
            value={formData.phone}
            helperText={formData.phoneError ? formData.phoneError : " "}
         />
         <br></br>
         <Button variant="contained" onClick={handleSubmit}>Submit</Button>

    </div>
  )
}

export default AddContact