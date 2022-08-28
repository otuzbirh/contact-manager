import './App.css';
import AddContact from './pages/AddContact';
import Navbar from "./components/Navbar"
import { Stack } from '@mui/system'
import TableContacts from './components/TableContats'
import { Link, Routes, Route, Switch, BrowserRouter } from "react-router-dom"
import Edit from './pages/Edit';


function App() {
  return (
    <div className="App">


      <Navbar />
            <br></br>
      <div className='container'>

  
 
    <Routes>



     <Route path="/" exact element={ <TableContacts  /> } />
     <Route path="/addContact" exact element={ <AddContact /> } />
     <Route path="/edit-contact/:id" exact element= { <Edit />} />

      </Routes>
    
      </div>
    </div>
  );
}

export default App;
