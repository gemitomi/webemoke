import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog14Pic1 from "../../../image/blog/blog_14_hero_dulatrening_ujra.png";
import Blog14Pic2 from "../../../image/blog/blog_14_dulatrening_ujra.jpg";

export default function SubBlog14() {
  return (
    <div>
      <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog14Pic1} alt="Dulatrening ujra"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Dúlatréning - újra</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2013. szeptember 04.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog14Pic2} alt="Dulatrening ujra"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Még tizenkét nap várakozás. Aztán két, különleges nap. A dúlatréning önismereti, motivációs hétvégéje közeledik.</b>
                        </p>
                        <p>
                            Nagyon várom már. Évente kétszer tartok dúla alapképzést, melyre  folyamatosan érkeznek a postaládámba a jelentkezési lapok. Jönnek a csoportba fiatal és idősebb nők, aki között vannak anyák, nagymamák és olyanok is, akik még csak készülődnek a szülői szerepre. Jönnek, mert vonzza őket valamiért a dúlai hivatás, szeretnének tudni többet arról, hogy hogyan segíthetnének a többi nőnek abban az időszakban, amikor anyává válnak.
                        </p>


                    </div>
                </div>

                <p>
                    Készülnek erre a hétvégére, hogy sokat hallhassanak, tanulhassanak tőlünk, mi pedig várjuk, megszólítjuk, megkérdezzük őket. Mi, a képzés trénerei az elmúlt évek valamennyi csoportjánál azt tapasztaltuk, hogy szinte percek alatt kialakul a bizalom és az a biztonságérzet, amely lehetővé teszi, hogy a csoport tagjai  – beleértve minket is – őszintén  meséljenek az életükről, a motivációikról, női szerepeikről. Mély, nagyon töltekezős és olykor megrendítő megosztások ezek, amelyekből mindannyian sokat tanulunk. Látszólag csak beszélgetünk, miközben nagyon komoly belső munka folyik.
                </p>
                <p>
                    Fontosnak tartjuk, hogy mindenki tisztán lássa, hogy miért szeretne segítői munkát végezni és azt is, hogy milyen a háttere és elköteleződése ehhez a teljes figyelmet igénylő munkához. Erről szól a képzés első hétvégéje.
                </p>
                <p>
                    Egy lehetőség, hogyha megérintett a szülés, születés csodája, kicsit önmagaddal lehess egy biztonságot adó női körben.
                </p>
                <p><b>Téged is várlak! 🙂</b></p>
            </div>
        </div>
        <div class="blog-global-tags">
              <p>Címkék:</p>
              <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog">Blog</Link>
        </div>
      </section>
      <section className="consultation4">
          <div className="consultation-btn-h2"><h3>KÉRDEZNI VAGY MONDANI SZERETNÉL VALAMIT AZ OLVASOTTAKKAL KAPCSOLATBAN?<br/><br/><span>Szeretettel várom jelentkezésedet!</span></h3></div>
          <div className="consultation-btn-box" >
            <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
          </div>
      </section> 
    </div>
  )
}

