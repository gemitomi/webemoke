import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog37Pic1 from "../../../image/blog/blog-37-hero-szivembe-zart-csaladjaim-talalkozoja.png";
import Blog37Pic2 from "../../../image/blog/blog-37-szivembe-zart-csaladjaim-talalkozoja.png";

export default function SubBlog37() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog37Pic1} alt="szivembe-zart-csaladjaim-talalkozoja"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Szívembe Zárt Családjaim találkozója</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011 augusztus 23.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog37Pic2} alt="szivembe-zart-csaladjaim-talalkozoja"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Egy áprilisi napon történt, hogy ráébredtem, pont 10 éve vagyok dúla. Arra gondoltam, hogy is ünnepelhetném meg szebben ezt a kerek évfordulót, ha nem azokkal a családokkal, akiket abban az időszakban kísértem, amikor a gyermeküket várták. Írtam hát nekik egy meghívót és arra kértem őket, ha van kedvük, tartsanak velem egy közös piknikre augusztus végén.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Hamarosan jöttek is a válaszok. “Igen!” “Ott leszünk!” “Feltétlenül elmegyünk!” “Számíthatsz ránk!” – írták.  Nagyon örültem és a jelentkezők számának a növekedésével világossá vált, hogy ez  egy igazi, nagy találkozó lesz. Teltek-múltak a hetek, hónapok és a lelkesedésünk a találkozás öröméért nem csökkent. Lázas szervezésbe és levelezésbe kezdtem, írtam nekik szorgosan a Hírmondókat és vártam, hogy múljanak a napok.
                </p>
                <p>
                    Ma már tudom, hogy a hétvégén 130-an piknikezünk együtt, a néhány hetes csecsemőktől az iskolás gyerekekig. Csupa olyan szülő és család, akik a szívemnek nagyon kedvesek, és akiktől rengeteget tanultam. Lesz bográcsozás, sok otthonról hozott fincsi sütemény, közös játék, beszélgetés, számtalan ölelés, és készül majd egy nagy-nagy családi fotó is, amin minden kicsi és nagy rajta lesz. 
                </p>
                <p>
                    Már csak néhány nap…
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
