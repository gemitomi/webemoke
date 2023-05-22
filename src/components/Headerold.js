import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";

import NavbarMob from "./NavbarMob";

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
        <div><Link to="#">Szolgáltatások</Link>
          <ul className="dropdown">
            <li><a href="#">Egyéni konzultáció</a></li>
            <li><a href="#">Családterápia</a></li>
            <li><a href="#">Anyává válás</a></li>
            <li><a href="#">Nevelési tanácsadás</a></li>
            <li><a href="#">Szülés felkészítés</a></li>
            <li><a href="#">Szülésélmény feldolgozás</a></li>
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

export default function Headerold() {
  const [mobile_menu, set_mobil_menu] = useState(false)
    return (
       
            <section class="header">
                <Link to="/" class="logo" onClick={e => set_mobil_menu(false)}>Békés Emőke</Link>

            <nav class="navbar">
              <div id="marker"></div>
              <MenuItems/>
            </nav>

            <nav className=""></nav>

           
            {
              mobile_menu&&
              <div>
                <NavbarMob/>
                <div className="close-menu" onClick={e => set_mobil_menu(!mobile_menu)}/>
              </div>
            }
            
            

            </section>
       
      )
}

/*<div className="menu-btn">
              
<i className="fa fa-bars" aria-hidden="true" onClick={e => set_mobil_menu(!mobile_menu)}/>
</div>*/
