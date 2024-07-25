import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import RegistrationForm from './pages/Registration/RegistrationForm';
import Admin from './pages/AdminPage/Admin';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
