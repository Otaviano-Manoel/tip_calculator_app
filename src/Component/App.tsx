import React from 'react';
import './App.css';
import './AppResponsiveMobile.css';
import '../css/reset.css'
import logo from '../images/logo.svg'
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <img className='logo' src={logo} alt="Logo" />
      <Calculator />
    </div>
  );
}

export default App;
