import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <nav>
    <ul>
      <li><Link to="/" > RU-Single </Link></li>
      <li>Profile</li> 
      {/* links to your profile settings */}
      <li>hamburger</li>
      {/* in the hamburger - share, logout, help etc */}

    </ul>
  </nav>;


};

export default Navbar;
