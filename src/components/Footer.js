import React from "react";
import SocialLinks from "./micro/SocialLinks";

export default function Footer() {
  return (
    <footer>
      <section class="footer">
        <div class="box-container">
          <div class="box">
              <a href="#"> <i class="fas fa-angle-right"></i> GYIK</a>
              <a href="#"> <i class="fas fa-angle-right"></i> Adatkezelési Tájékoztató</a>
              <a href="#"> <i class="fas fa-angle-right"></i> Impressum</a>
          </div>

          <div class="box">
              <a href="#"> <i class="fas fa-phone"></i> +36-70-948-5481</a>
              <a href="mailto:bekes.emoke@gmail.com"> <i class="fas fa-envelope"></i> bekes.emoke@gmail.com</a>
              <a href="http://maps.google.com/?q=Budaörs+napsugar+setany+4" target="_blank"> <i class="fas fa-map"></i> Budaörs, Napsugár sétány 4. II/13.</a>
              <a href="https://hu-hu.facebook.com/people/B%C3%A9k%C3%A9s-Em%C5%91ke-csal%C3%A1dk%C3%ADs%C3%A9r%C5%91-d%C3%BAla/100042636705062/"> <i class="fab fa-facebook-f"></i>Facebook</a>
          </div>
        </div>

        <div class="credit"> Copyright ©2023 <a href="https://webrabbit.hu">WebRabbit</a> | All rights reserved</div>
      </section>
      
        
    </footer>
  )
}

