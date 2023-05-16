import React, {Fragment} from "react";
import { Link } from "react-router-dom";

function MenuItems() {
  return (
    <Fragment>
      <ul>
        <li>
          <div><Link to="/">Főoldal</Link></div>
        </li>
        <li>
          <div><Link to="/about">Rólam</Link></div>
        </li>
      
        <li>  
        <div><Link to="/services">Szolgáltatások</Link>
          <ul className="dropdown">
            <li><a href="#">Alkat 1.1</a></li>
            <li><a href="#">Alkat 1.2</a></li>
            <li><a href="#">Alkat 1.3</a></li>
          </ul></div>
        </li>    
        <li>     
          <div><Link to="/dulakor">Békés Dúlakör</Link></div>
        </li>
        <li>
          <div><Link to="/blog">Olvasnivaló</Link></div>
        </li>
        <li>
        <div><Link to="/feedback">Visszajelzések</Link></div>
        </li>
        <li>
        <div><Link to="/contact">Kapcsolat</Link></div>
        </li>
      </ul>
    </Fragment>
  )
}

export default function Header() {
    return (
        <header>
            <section class="header">
                <Link to="/" class="logo">Békés Emőke</Link>

            <nav class="navbar">
              <div id="marker"></div>
              <MenuItems/>
            </nav>

            <div className="menu-btn">
              <i className="fa fa-bars" aria-hidden="true"/>
            </div>

            <div className="mobile-menu">
              <MenuItems/> 
            </div>

            </section>
            
        </header>
    )
}
