import React, { useState } from 'react';
import './styles/pages/App.css';
import Navbar from './components/Navbar';
import UserDropdown from './components/UserDropdown';
import CrudButton from './components/CrudButton';

// import CrudInterface from './components/CrudInterface'

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="App">
      <Navbar toggleDropdown={toggleDropdown} hola = 'hola'/>
      {showDropdown && <UserDropdown />}
      <div className="info-crud-container">
        <div className="info-crud">
          <CrudButton content="Create"/>
        </div>
      </div>
    </div>
  );
}

export default App;
