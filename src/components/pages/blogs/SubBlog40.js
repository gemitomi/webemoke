import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog40Pic1 from "../../../image/blog/blog-40-hero-szulesfelkeszites-szardinian-2.png";
import Blog40Pic2 from "../../../image/blog/blog-40-szulesfelkeszites-szardinian-2.jpg";

export default function SubBlog40() {
  return (
  <div>
     <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog40Pic1} alt="szulesfelkeszites-szardinian-2"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Szülésfelkészítés Szardínián 2.</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. július 11.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog40Pic2} alt="szulesfelkeszites-szardinian-2"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Megérkezés</b>
                        </p>
                        <p>
                            A repülés élménye leírhatatlan. Elképesztő, mély, felejthetetlen katarzis. Határtalan érzés, határokon innen és túl. A látvány lenyűgöző volt. Fák, mezők, falvak, szántóföldek, tekergő utak, pamacsfelhők, és a kék árnyalatai: tengerkékek és égszínkékek.
                        </p>

                    </div>
                </div>

                <p>
                    17 óra 18 percet mutatott az órám, mikor leszálltunk. Arra gondoltam, hogy a vendéglátóim már itt várnak rám és talán ők is ugyanúgy izgulnak, mint én. S míg a gép a földön egyre lassabban gurult, több kérdés is kergette egymást a fejemben. Vajon szimpatikusnak találnak majd? És hogyan fog zajlani a szülésfelkészítés itt, Szardínián? Elég lesz ez a néhány nap, hogy megválaszolódjanak a felmerült kérdések? Nem lesz az anya számára túl fárasztó és tömény a sok információ? Jól fogok tudni segíteni attól függetlenül, hogy nem ismerem az itteni egészségügyi viszonyokat? Tudok-e majd koncentrálni olyan körülmények között,  ahová máskor a teljes kikapcsolódás élményéért utazok? 
                </p>
                <p>
                    Aztán néhány perc múlva már a bőröndömet szorongatva álltam a fotocellás ajtó előtt. Tudtam, hogy még egy lépés és kinyílik az ajtó, meglátom őket, és abban a pillanatban elkezdődik életem egyik legizgalmasabb munkája.  🙂
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
