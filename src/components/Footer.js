import React from "react";
import SocialLinks from "./micro/SocialLinks";
import { Link } from "react-router-dom";
import Pdf from '../document/Adatkezelesi_tajekoztato.pdf';


export default function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="box-container">
          <div className="box">
              <Link to="/gyakori-kerdesek-a-kepzesekrol"> <i className="fas fa-angle-right"></i> GYIK</Link>
              <Link to={Pdf} target="_blank"> <i className="fas fa-angle-right"></i> Adatkezelési Tájékoztató</Link>
              <Link to="/felhasznalasi-feltetelek"> <i className="fas fa-angle-right"></i> Felhasználási feltételek</Link>
          </div>

          <div className="box">
              <Link to="tel:+36-70-948-5481"><i className="fas fa-phone"></i>+36-70-948-5481</Link>
              <Link to="mailto:figyelekrad@bekesemoke.hu"> <i className="fas fa-envelope"></i> figyelekrad@bekesemoke.hu</Link>
              <Link to="http://maps.google.com/?q=Budaörs+napsugar+setany+4" target="_blank"> <i className="fas fa-map"></i> Budaörs, Napsugár sétány 4. II/13.</Link>
              <Link to="https://hu-hu.facebook.com/people/B%C3%A9k%C3%A9s-Em%C5%91ke-csal%C3%A1dk%C3%ADs%C3%A9r%C5%91-d%C3%BAla/100042636705062/" target="_blank"> <i className="fab fa-facebook-f"></i>Facebook</Link>
          </div>
        </div>
        <div className="credit"> Copyright ©2023 <Link to="https://webrabbit.hu"> | <span>WebRabbit</span></Link> | All rights reserved
        </div>
      </section>
      
        
    </footer>
  )
}

