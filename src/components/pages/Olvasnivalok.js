import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/olvasnivalok.css"

import Olvas1 from "../../image/blog_01.png";
import Olvas2 from "../../image/szulestortenet_.png";
import Olvas3 from "../../image/publik_01.png";


export default function Olvasnivalok() {
  return (
    <div>
      <section className="latestblog">
          <div className="latest-blog-container">
  
            <h2 className="latestblogsection-title latestblogheadline-md latesttext-center" id="portfolio-label">Olvasnivalók</h2>
  
            <ul className="latest-blog-portfolio-list">
  
              <li>
                <div className="latest-blog-portfolio-card">
  
                  <div className="card-banner latest-blog-img-holder" style={{"--width": "800", "--height": "540"}}>
                    <img src={Olvas1} width="800" height="540" loading="lazy"
                      alt="Blog" className="latest-blog-img-cover"/>
  
                      <Link to="/blog" className="latest-blog-btn-icon">
                      <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                    </Link>
                  </div>
  
                  <div >
  
                    <span className="latestblog-chip latestbloglabel-md">Olvasnivalók</span>
  
                    <h3 className="latestblogtitle-md">Blog</h3>                    
  
                    <Link to="/blog" className="latest-blog-btn ">Tovább</Link>
  
                  </div>
  
                </div>
              </li>
  
              <li>
                <div className="latest-blog-portfolio-card">
  
                  <div className="card-banner latest-blog-img-holder" style={{"--width": "800", "--height": "540"}}>
                    <img src={Olvas2} width="800" height="540" loading="lazy"
                      alt="Szulestortenetek" className="latest-blog-img-cover"/>
  
                      <Link to="/stories" className="latest-blog-btn-icon">
                      <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                    </Link>
                  </div>
  
                  <div >
  
                    <span className="latestblog-chip latestbloglabel-md">Olvasnivalók</span>
  
                    <h3 className="latestblogtitle-md">Szüléstörténetek</h3>
  
                    <Link to="/stories" className="latest-blog-btn">Tovább</Link>
  
                  </div>
  
                </div>
              </li>
  
              <li>
                <div className="latest-blog-portfolio-card">
  
                  <div className="card-banner latest-blog-img-holder" style={{"--width": "800", "--height": "540"}}>
                    <img src={Olvas3} width="800" height="540" loading="lazy"
                      alt="Publikacio" className="latest-blog-img-cover"/>
  
                      <Link to="/publications" className="latest-blog-btn-icon">
                      <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                    </Link>
                  </div>
  
                  <div>
  
                    <span className="latestblog-chip latestbloglabel-md">Olvasnivalók</span>
  
                    <h3 className="latestblogtitle-md">Publikációim</h3>
   
                    <Link to="/publications" className="latest-blog-btn">Tovább</Link>
  
                  </div>
  
                </div>
              </li>
            </ul>
          </div>
        </section>
    </div>
  )
}
