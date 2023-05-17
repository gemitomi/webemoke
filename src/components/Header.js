import React, {Fragment, useState} from "react";
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
//6.1  2.55
export default function Header() {
  const [mobile_menu, set_mobil_menu] = useState(false)
    return (
        <header>
            <section class="header">
                <Link to="/" class="logo" onClick={e => set_mobil_menu(false)}>Békés Emőke</Link>

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
