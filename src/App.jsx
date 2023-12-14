import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import './App.css'
import Navbar from "./navbar";
import RegistrationForm from "./RegistrationForm";
import SideNav from "./SideNav";
function App() {

  return (
    <div style={{
    
    }}>
      <Router>
        <Routes>
          <Route path="/Signin" element={<Signin />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="Registrationform" element={<Navbar/><SideNav/><RegistrationForm/>}/>
      
        </Routes>
      </Router>



    </div>
  )
}

export default App
