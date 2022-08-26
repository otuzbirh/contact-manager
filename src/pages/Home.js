import React from 'react'
import Navbar from '../components/Navbar'
import { Stack } from '@mui/system'
import TableContacts from '../components/TableContats'

function Home() {
  return (
    <Stack>
        <Navbar />
        
        <TableContacts />
    </Stack>
  )
}

export default Home