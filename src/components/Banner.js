import React from 'react'
import { NavLink } from 'react-router-dom';
import './Banner.css'

import landingPageHTML from '../april/index.html'; // !! unknown, added by Dave

const Banner = (props) => {
  return (
    // <p>hello world</p>
    <div dangerouslySetInnerHTML={ {__html: landingPageHTML} } />
    // <div id="banner">
    //   <div className="inner">
    //     <h2 className="CompanyName">VUSEARCH</h2>
    //     <p>AI-DRIVEN MARKETING PLATFORM</p>
    //     <ul className="actions">
    //       <li><NavLink to="/buzz" exact className="button special">START</NavLink></li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Banner;
