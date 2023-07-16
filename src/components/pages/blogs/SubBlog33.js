import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog33Pic1 from "../../../image/blog/blog-33-hero-dulamesek-esteje.png";
import Blog33Pic2 from "../../../image/blog/blog-33-dulamesek-esteje.jpg";

export default function SubBlog33() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog33Pic1} alt="dulamesek-esteje"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Dúlamesék estéje</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. november 30.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog33Pic2} alt="dulamesek-esteje"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A múlt hét második felében ismét dúlatréning volt. A képzés azon alkalma, amikor a 4 nap alatt több előadó – pl. testtudatoktató, pszichológus, aromaterapeuta, bába, szoptatási tanácsadó – adnak át fontos ismereteket azoknak, akik e csodálatos hivatás iránt érdeklődnek.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Valójában ennél sokkal, de sokkal több történik. A résztvevők ugyanis napokig együtt élnek, sokat beszélgetnek, közösen gondolkodnak az előadókkal és a hallottak általában jelentősen megmozgatják az érzéseiket. Sírunk, nevetünk, mesélünk, tapasztalatokat szerzünk, elbizonytalanodunk, megerősödünk és épülünk a közös munkában.
                </p>
                <p>
                    A tréning egyik legszebb pontja a dúlamesék estéje, amikor tapasztalt dúlák jönnek el, hogy szüléskíséréseik történetét meséljék el a “dúlatojásoknak”.
                </p>
                <p>
                    Egybeolvasztó, meghitt, igazi női körös este ez. Én is nagyon szeretem. Szívet melengető élmény megélni azt, hogy azok, akik nemrégiben még a hallgatók között ültek, ma már mesélni tudnak a dúlaságukról, arról, hogy hogyan indultak el és milyen érzésekkel kísérik a megszülető családokat.
                </p>
                <p>
                    És nagyon jó, hogy dúlakörünknek, a Békés Dúlakörnek ilyen fantasztikus, érzékeny, odaadó nők a tagjai.
                </p>


            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog2">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
