import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog54Pic1 from "../../../image/blog/blog-54-hero-szuleselmeny.png";
import Blog54Pic2 from "../../../image/blog/blog-54-szuleselmeny.jpg";

export default function SubBlog54() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog54Pic1} alt="szuleselmeny"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Szülésélmény</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. október 06.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog54Pic2} alt="szuleselmeny"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Idén tavasszal megismertem egy kedves, fiatal lányt. Dórinak hívják, pszichológus hallgató.  Szakdolgozatának megírása előtt állt amikor találkoztunk, és a szülésről, születésről, a szülés élményéről és a dúlai hivatásról beszélgettünk. Szeretném segíteni az ő munkáját, ezért kérek minden olyan anyát, akinek  egy gyermeke van, és ő még három év alatti, töltse ki és küldje vissza a kérdőívet Dórinak.
                        </p>
                        <p>
                            Úgy gondolom, érdekes utazás is lehet az akkori érzések, élmények felidézése.
                        </p>
                        <p>
                            Dóri levele és a link, ahol a kérdőív elérhető:
                        </p>
                        

                    </div>
                </div>

                <p>
                    <i>Kedves Édesanya!</i>
                </p>
                <p>
                    <i>Az ELTE végzős pszichológia szakos hallgatójaként szakdolgozatomban a szülés körüli élmények vizsgálatával foglalkozom. A kérdőívben szereplő kérdések az Őn szülés során megélt élményeire, tapasztalataira, érzéseire vonatkoznak.
                    <br/>A kérdőív kitöltése teljesen anonim és körülbelül 15 percet vesz igénybe.</i>
                </p>
                <p>http://spreadsheets.google.com/viewform?formkey=dFRhclFkb3VRTUliWEtTX3hoX1V0aEE6MQ</p>
                <p>
                    <i>Kérem segítse munkámat válaszaival! Előre is köszönöm együttműködését!

                        <br/>Lefánti Dóra</i>
                </p>


            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
