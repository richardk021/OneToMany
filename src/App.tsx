import React, {} from 'react';
import { useNavigate, Route, Routes, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/home';
import Login from './Login';
import './App.css';

const App: React.FC = () => {
  const navigate = useNavigate();
  navigate("/login");
  console.log('done')

  return (
    <Routes>
      <Route path="/" element={
      <div>
        <Navbar />
        <HomePage />
        <Footer />
      </div>} />

      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;