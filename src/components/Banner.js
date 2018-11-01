import React from 'react'
import { NavLink } from 'react-router-dom';
import './Banner.css'
 
const banner = (props) => {
  return (
    <div id="banner">
      <div className="inner">
        <h2 className="CompanyName">VUSEARCH</h2>
        <p>AI-DRIVEN MARKETING PLATFORM</p>
        <ul className="actions">
          <li><NavLink to="/buzz" exact className="button special">START</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default banner;