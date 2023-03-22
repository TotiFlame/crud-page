import React, { useState } from 'react';
import './styles/pages/App.css';
import Navbar from './components/Navbar';
import UserDropdown from './components/UserDropdown';
import CrudButton from './components/CrudButton';
import CardCreated from './components/CardCreated';

// import CrudInterface from './components/CrudInterface'

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="App">
      <Navbar toggleDropdown={toggleDropdown} hola="hola" />
      {showDropdown && <UserDropdown />}
      <div className="buttons-container">
        <CrudButton color="#88fc94" content="Create" />
        <CrudButton color="#aebafc" content="Filter" />
      </div>
      <div className="info-crud-container">
        <div className="info-crud">
          <div className="card-header">
            <span>Id</span>
            <span>Name</span>
            <span>Age</span>
            <span>C.I.</span>
          </div>
          <CardCreated />
        </div>
      </div>
    </div>
  );
}

export default App;
