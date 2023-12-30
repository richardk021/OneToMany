import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginMain from './components/LoginMain';
import './App.css';

const Login: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LoginMain />
      <Footer />
    </div>
  );
}

export default Login;