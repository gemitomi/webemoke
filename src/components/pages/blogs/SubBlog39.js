import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog39Pic1 from "../../../image/blog/blog-39-hero-szulesfelkeszites-szardinian-3.png";
import Blog39Pic2 from "../../../image/blog/blog-39-szulesfelkeszites-szardinian-3.jpg";

export default function SubBlog39() {
  return (
  <div>
     <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog39Pic1} alt="szulesfelkeszites-szardinian-3"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Szülésfelkészítés Szardínián 3.</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. július 13.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog39Pic2} alt="szulesfelkeszites-szardinian-3"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Kinyílt az ajtó és valóban ott álltak ők.  Két helyes, mosolygós ember, Szandra és Mario. Egyikük magyar, másikuk osztrák, akik Szardínián találták meg a nyugalmat és a közös otthonukat.
                        </p>
                        <p>
                            Egy csodás panziót működtetnek Alghero közelében. Fantasztikus vendégszeretetüket, odafigyelő gondoskodásukat  az ottlétem első pillanatától az utolsóig élvezhettem én is. Olajfaliget, citromfák, kaktuszok, letisztult ízlésről tanúskodó hűvös szobák, új illatok, különleges fények, tiszta, éles színek és mediterrán ízek közé érkeztem. A minden érzékszervemet megmozgató első nap estéjén egy finom vacsora és egy üveg csodás, helyi vörösbor mellett ismerkedtünk egymással. 
                        </p>

                        

                    </div>
                </div>

                <p>
                    A többi napon Mario napközben a panzió és a vendégek körüli teendőket intézte, mi pedig Szandrával a panzió hűvös teraszán vagy a környéket bejárva beszélgettünk.
                </p>
                <p>
                    Mindketten úgy éreztük, nagyon hamar megteremtődött köztünk a bizalom, így igazán őszintén tudtunk beszélgetni egymással. Újra megtapasztaltam azt, hogy a dúla-anya viszony bizonyos szempontból más, mint egy pszichológus és a kliense között kialakuló kapcsolat. Máshol vannak benne a határok, sokkal közvetlenebb, hiszen a női tapasztalatok átadásával a dúla is többet mutathat a saját életéből, ahogy ezt a szó eredeti jelentése – az asszonytársi segítő – is kifejezi. Ugyanakkor ez a fajta kapcsolat nem jelenti azt, hogy a köztük lévő kommunikáció egyszerű női csevej, vagy amolyan “sztorizás”, hanem egy olyan kísérő folyamat, amelyben a dúla az értő figyelmével, a kérdéseivel és sokszor a hallgatásával teremti meg a lehetőségét annak, hogy az anya megfogalmazhassa és kimondhassa az érzéseit, válaszokat kapjon a kérdéseire és ezáltal rátaláljon a saját útjára. Nagyon fontosnak tartom ugyanis azt, hogy a hozzám fordulókat ne arra vezessem, amerre adott esetben én mennék, hanem, hogy segítsem őket abban, hogy a számukra legkedvezőbb irányba indulhassanak és a nekik legmegfelelőbb döntéseket hozzák.
                </p>
                <p>
                    A gyermekvárás hónapjaiban kísérni egy párt a szülővé válás folyamatában éppen ezért számomra éppoly izgalmas és gyönyörű munka, mint maga szülés óráiban való jelenlét.
                </p>
                <p>
                    Hogy Szardínián ez mitől volt különleges és egyedülálló, arról a folytatásban írok. 🙂
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog2">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
