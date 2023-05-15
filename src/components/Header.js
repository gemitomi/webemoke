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
                <Link to="/">Főoldal</Link>
                <Link to="/about" className={location.pathname === "/about"? "active":""}>Rólam</Link>
                <Link to="/services">Szolgáltatások</Link>
                <Link to="/dulakor">Békés Dúlakör</Link>
                <Link to="/blog">Olvasnivaló</Link>
                <Link to="/feedback">Visszajelzések</Link>
                <Link to="/contact">Kapcsolat</Link>
            </nav>

            <div id="menu-btn" class="fas fa-bars"></div>

            </section>
            <script src="app.js"></script>
        </header>
    )
}
