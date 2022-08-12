import React from 'react'
import { NavLink } from "react-router-dom";
import IMG from "../assets/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export  function Navbar() {
  return (
    <div className="header">
      <NavLink activeclassname="active" className="link" to="/home">
        <img src={IMG} alt="logo" className="logo" />
      </NavLink>
      <div className="navlink">
        <ul className="navbar">
          <li>
            <NavLink activeclassname="active" className="link" to="/home">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" className="link" to="/product">
              PRODUCT
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" className="link" to="/cart" >
              <ShoppingCartIcon />
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" className="link" to="/login">
              login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
