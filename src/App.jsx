import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import './App.css'

function App() {

  return (
    <div style={{
    
    }}>
      <Router>
        <Routes>
          <Route path="/Signin" element={<Signin />}/>
          <Route path="/Signup" element={<Signup />}/>
        </Routes>
      </Router>



    </div>
  )
}

export default App
