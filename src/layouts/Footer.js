import React from 'react';
import { NavLink } from 'react-router-dom';

import { logo } from '../utils/Images';


function Footer() {

  return (

    <footer>
      <div className="container">

        <div className="head y-center space-between">
          <a href="index.html" className="logo y-center gap-1">
            <img src={logo} alt="logo" className="img-fix" />
            <h1>FitMe</h1>
          </a>
          <ul className="nav m-gap flex flex">
            <li>
              <NavLink to="/CaloriesPage" >
                calorie calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="/MenuPage">
                menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/DeliveryPage">
                delivery
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutPage">
                about us
              </NavLink>
            </li>
            <li>
              <NavLink to="/FAQPage">
                faq
              </NavLink>
            </li>
          </ul>
          <div className="contact y-center flex">
            Contact : <span><a href='mailto:mohamedermili5@gmail.com'> mohamedermili5@gmail.com</a></span>
          </div>
        </div>

        <div className="social x-center gap-1">
          <NavLink to=""><i className="fa-brands fa-facebook"></i></NavLink>
          <NavLink to=""><i className="fa-brands fa-instagram"></i></NavLink>
          <NavLink to=""><i className="fa-brands fa-twitter"></i></NavLink>
        </div>
        <div className="copeyright x-center">
          <p className="flex">
            Made With &#10084; By Ermili Mohamed ©
            <time dateTime="2022"> {new Date().getFullYear()}</time>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;