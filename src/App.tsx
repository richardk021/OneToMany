import React, {} from 'react';
import { useNavigate, Route, Routes, Link } from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import HomePage from './pages/home';

const App: React.FC = () => {
  // const navigate = useNavigate();

  return (
      <div>
        <Navbar />
        <HomePage/>
        <Footer />
      </div>

  );
}

export default App;