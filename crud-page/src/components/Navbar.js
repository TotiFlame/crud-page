import React from 'react';
import '../styles/components/Navbar.css';

function Navbar(props) {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="logo-container">
            <h3>CRUD</h3>
          </div>
          <div className="user-container" onClick={props.toggleDropdown}>
            {/* USER IMAGE WILL UPLOAD */}
            <img src={require('../images/Santi.jpg')} alt="" />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
