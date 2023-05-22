import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";

import Logo from "../image/logo-icon.png"

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
            <li><a href="/egyenikonzultacio">Egyéni konzultáció</a></li>
            <li><a href="/csaladterapia">Családterápia</a></li>
            <li><a href="/anyavavalas">Anyává válni anyanyelven</a></li>
            <li><a href="/nevelesitanacsadas">Nevelési tanácsadás</a></li>
            <li><a href="/szulesfelkeszites">Szülés felkészítés</a></li>
            <li><a href="/szuleselmenyfeldolg">Szülésélmény feldolgozás</a></li>
          </ul></div>
        </li> 
        <li>     
          <div><Link to="/dulatrening">Dúlatréning</Link>
          <ul className="dropdown">
            <li><a href="/bekesdulatrening">Békés Dúlatréning - alapképzés</a></li>
            <li><a href="/bekesdulamuhely">Békés Dúlaműhely - továbbképzés</a></li>
            <li><a href="/esetmegbeszelo">Esetmegbeszélő csoport</a></li>
            <li><a href="/gyik">Gyakori kérdések a képzésekről</a></li>
          </ul>
          </div>
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
//6.1  2.55
export default function Header() {
  const [mobile_menu, set_mobil_menu] = useState(false)
    return (
        <header>
            <section class="header">
                <Link to="/" class="logo" onClick={e => set_mobil_menu(false)}><img src={Logo} alt="" /></Link>

            <nav class="navbar">
              <div id="marker"></div>
              <MenuItems/>
            </nav>

            <div className="menu-btn">
              <i className="fa fa-bars" aria-hidden="true" onClick={e => set_mobil_menu(!mobile_menu)}/>
            </div>

            {
              mobile_menu&&
              <div className="mobile-menu" onClick={e => set_mobil_menu(!mobile_menu)}>
                <MenuItems/> 
                <div className="close-menu" onClick={e => set_mobil_menu(!mobile_menu)}/>
              </div>
            }
            
            

            </section>
            
        </header>
    )
}