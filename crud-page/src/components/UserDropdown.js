import React from 'react';
import '../styles/components/UserDropdown.css';
import { BiLogOutCircle } from 'react-icons/bi';
import { RiSettings3Line } from 'react-icons/ri';

function UserDropdown() {
  return (
    <div className="user-dropdown">
      <ul>
        <li className="menu-links">
          <RiSettings3Line style={{ marginRight: '5px' }} /> Settings
        </li>
        <li className="menu-links">
          <BiLogOutCircle style={{ marginRight: '5px' }} /> Logout
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
