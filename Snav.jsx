import React from 'react'
import { Link } from "react-router-dom"
import './Snav.css';

export const Snav = () => {
  return (
    <div>
      <nav>
        <div>KDH</div>
        <ul>

          <li>
            <Link to="/">Register</Link>
          </li>
          <li>
            <Link to="/Slogin">login</Link>
          </li>
          <li>
            <Link to="/Sdashboard">dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};