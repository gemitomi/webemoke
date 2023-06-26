import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/olvasnivalok.css"

import Olvas1 from "../../image/blog_01.png";
import Olvas2 from "../../image/szulestortenet_.png";
import Olvas3 from "../../image/publik_01.png";


export default function Olvasnivalok() {
  return (
    <div>
      <section class="latestblog">
          <div class="latest-blog-container">
  
            <h2 class="latestblogsection-title latestblogheadline-md latesttext-center" id="portfolio-label">Olvasnivalók</h2>
  
            <ul class="latest-blog-portfolio-list">
  
              <li>
                <div class="latest-blog-portfolio-card">
  
                  <div class="card-banner latest-blog-img-holder" style={{"--width": "800", "--height": "540"}}>
                    <img src={Olvas1} width="800" height="540" loading="lazy"
                      alt="Blog" class="latest-blog-img-cover"/>
  
                      <Link to="/blog" class="latest-blog-btn-icon">
                      <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                    </Link>
                  </div>
  
                  <div >
  
                    <span class="latestblog-chip latestbloglabel-md">Olvasnivalók</span>
  
                    <h3 class="latestblogtitle-md">Blog</h3>                    
  
                    <Link to="/blog" class="latest-blog-btn ">Tovább</Link>
  
                  </div>
  
                </div>
              </li>
  
              <li>
                <div class="latest-blog-portfolio-card">
  
                  <div class="card-banner latest-blog-img-holder" style={{"--width": "800", "--height": "540"}}>
                    <img src={Olvas2} width="800" height="540" loading="lazy"
                      alt="Szulestortenetek" class="latest-blog-img-cover"/>
  
                      <Link to="/stories" class="latest-blog-btn-icon">
                      <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                    </Link>
                  </div>
  
                  <div >
  
                    <span class="latestblog-chip latestbloglabel-md">Olvasnivalók</span>
  
                    <h3 class="latestblogtitle-md">Szüléstörténetek</h3>
  
                    <Link to="/stories" class="latest-blog-btn">Tovább</Link>
  
                  </div>
  
                </div>
              </li>
  
              <li>
                <div class="latest-blog-portfolio-card">
  
                  <div class="card-banner latest-blog-img-holder" style={{"--width": "800", "--height": "540"}}>
                    <img src={Olvas3} width="800" height="540" loading="lazy"
                      alt="Publikacio" class="latest-blog-img-cover"/>
  
                      <Link to="/publications" class="latest-blog-btn-icon">
                      <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                    </Link>
                  </div>
  
                  <div>
  
                    <span class="latestblog-chip latestbloglabel-md">Olvasnivalók</span>
  
                    <h3 class="latestblogtitle-md">Publikációk</h3>
   
                    <Link to="/publications" class="latest-blog-btn">Tovább</Link>
  
                  </div>
  
                </div>
              </li>
            </ul>
          </div>
        </section>
    </div>
  )
}
