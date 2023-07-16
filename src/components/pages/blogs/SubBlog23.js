import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog23Pic1 from "../../../image/blog/blog-23-hero-elmegyek-elmegyek-hosszu-utra-megyek-1.png";
import Blog23Pic2 from "../../../image/blog/blog-23-elmegyek-elmegyek-hosszu-utra-megyek-1.jpg";

export default function SubBlog23() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog23Pic1} alt="elmegyek-elmegyek-hosszu-utra-megyek-1"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Elmegyek, elmegyek, hosszú útra megyek… 1.</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. augusztus 04.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog23Pic2} alt="elmegyek-elmegyek-hosszu-utra-megyek-1"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Beszámoló a Hollandiában gyűjtött tapasztalataimról – 1. rész</b>
                        </p>
                        <p>
                            Nem tartom magam türelmetlen embernek, a dúlai hivatás pedig még inkább megtanította, hogy hogyan kell várakozni és mindamellett, hogy megtesszük a tőlünk telhetőt hagyni, engedni, hogy a dolgok változzanak. Az elmúlt hónapokban azonban néha fogyni látszott a türelmem. Úgy érzem, hogy a hazai szülészeti ellátásban néhány szempontból mintha inkább visszafelé kezdene forogni az idő kereke, így azt is egyre távolibbnak kezdtem érezni mind a magam, mind pedig a dúlatársaim tapasztalataiból kiindulva, hogy a segítői munkánk    – amely egyébként az egészségügyi személyzet munkáját is segíti – elismerésre talál a kórház falain belül is.
                        </p>

                    </div>
                </div>

                <p>
                    Így érlelődött meg bennem az a gondolat, hogy érdemes lenne körülnézni olyan országokban, ahol szintén dolgoznak dúlák, és beszélgetni velük arról, hogy ők milyen körülmények között, hogyan teszik ezt, milyen sikereik vannak és milyen nehézségekkel találják szemben magukat. 
                </p>
                <p>
                    Egyik, számomra nagyon kedves dúlatársam Julcsi, tavaly óta él párjával Hollandiában. Dúlaként és pszichológusként is most keresi a helyét, építi a kapcsolatait új lakóhelyén, Amszterdamban. Elhivatottságát és rátermettségét bizonyítja, hogy egyik szervezője volt az idén májusban Hágában megrendezett a Szülés mint emberi jog című konferenciának is. Beszélgettem vele is az elképzeléseimről, terveimről és végtelenül boldog voltam, amikor meghívott az otthonukba, valamint szervezett nekem néhány találkozót az ottani dúlákkal.
                </p>
                <p>
                    Amszterdam csodálatos város, bár ezt akkor még csak a képekről és olvasmányaimból tudtam. Az ott élő dúlák, beleértve Julcsit is, szintén azok. 🙂 Nagy izgalommal és várakozással készültem hát az útra.
                </p>
                <p>
                    Az odavezető utat busszal tettem meg, 24 óra alatt. Jó választásnak bizonyult, volt időm ráhangolódni az új élményekre, és megérkezni igazán gondolatban is.
                </p>
                <p>
                    <i>Folyt. köv.</i>
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
