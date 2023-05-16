import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation()
    return (
        <header>
            <section class="header">
                <Link to="/" class="logo">Békés Emőke</Link>

            <nav class="navbar">
                <div id="marker"></div>
                <ul>
              <li>
                <Link to="/">Főoldal</Link>
              </li>
              <li>
                <Link to="/about">Rólam</Link>
              </li>
            
              <li>  
              <Link to="/services">Szolgáltatások</Link>
                <ul className="dropdown">
                  <li><a href="#">Alkat 1.1</a></li>
                  <li><a href="#">Alkat 1.2</a></li>
                  <li><a href="#">Alkat 1.3</a></li>
                </ul>
              </li>
                
                
              <li>     
                <Link to="/dulakor">Békés Dúlakör</Link></li>
              <li>
                <Link to="/blog">Olvasnivaló</Link></li>
              <li>
                <Link to="/feedback">Visszajelzések</Link></li>
                <li>
                <Link to="/contact">Kapcsolat</Link>
                </li>
            </ul>
            </nav>

            <div id="menu-btn" class="fas fa-bars"></div>

            </section>
            <script src="app.js"></script>
        </header>
    )
}
