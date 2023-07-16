import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog56Pic1 from "../../../image/blog/blog-56-hero-szeptemberben-ujra-lesz-dulakepzes.png";
import Blog56Pic2 from "../../../image/blog/blog-56-szeptemberben-ujra-lesz-dulakepzes.jpg";

export default function SubBlog56() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog56Pic1} alt="szeptemberben-ujra-lesz-dulakepzes"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Szeptemberben újra lesz dúlaképzés</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. augusztus 26.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog56Pic2} alt="szeptemberben-ujra-lesz-dulakepzes"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Emlékszem, milyen nagy izgalommal készültünk hat évvel ezelőtt trénertársammal az általunk meghirdetett és szervezett első dúlatréningre! A tematika összeállítása, átgondolása és az előadók meghívása mellett helyszínt kellett találnunk a vártnál nagyobb számú jelentkező elszállásolására, meg kellett szerveznünk a meleg étkezés és a tréninghez szükséges tárgyi feltételek biztosítását. Ma már ezek a szervezési feladatok jóval rutinosabban mennek, de van, ami azóta sem változott.
                        </p>
                        <p>
                            Az öröm, amit az aktuális képzés kezdetekor érzek, ugyanolyan nagy, mint akkoriban.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Mert igazán örömteli dolog személyesen találkozni azokkal a jelentkezőkkel, akikkel addig csak telefonon vagy emailen keresztül kommunikáltam, látni a várakozást a tekintetükben, meghallgatni, hogy honnan jöttek és miért szeretnének dúlák lenni és aztán mindent megtenni azért, hogy a tréning végeztével motivációjukban megerősödve, sok információval gazdagodva indulhassanak el a dúlává válás útján.
                </p>
                <p>
                    A csoportot kísérni számomra sok szempontból olyan, mint amikor egy vajúdó nőt kísérek, nagy figyelmet és odafordulást igényel, de pont ezért szeretem. Mindemellett izgalmas is, hiszen a tréning témáit közösen is alakítjuk azáltal, hogy nagyon sok kérdést, élményt, tapasztalatot hoznak a résztvevők, és ezzel ők maguk is gazdagítják az együtt töltött órákat.
                </p>
                <p>
                    A szeptember 17-én induló tréningre szeretettel várok mindenkit, akit a dúlai hivatás iránt érdeklődik. Részletes információ és jelentkezési lap itt a honlapomon, a <Link to="/dulatrening"><b>dúlatréning</b></Link> pont alatt található .
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
