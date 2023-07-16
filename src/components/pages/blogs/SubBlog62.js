import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog62Pic1 from "../../../image/blog/blog-62-hero-utitars.png";
import Blog62Pic2 from "../../../image/blog/blog-62-utitars.png";

export default function SubBlog62() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog62Pic1} alt="utitars"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Útitárs</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. július 22.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog62Pic2} alt="utitars"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Ismét készenlétben állok, egy hamarosan megszülető kisbaba érkezését várom.
                        </p>
                        <p>
                            A várandósság 37. hetétől egy kicsit már másképpen élem a mindennapjaimat. Persze nap nap után végzem az előre eltervezett dolgaimat, találkozom a hozzám fordulókkal, vezetem a háztartást, nevelem a gyerekeimet, de bizonyos dolgokban figyelmesebb vagyok. Az autómban a benzinszintet jelző mutatót nem engedem a nullához közelíteni, baráti összejöveteleken nem fogadok el egy korty alkoholt sem, mindenhová magammal viszem a telefonomat és nem kapcsolom ki a megbeszéléseken sem, csak legfeljebb lehalkítom.
                        </p>

                        

                    </div>
                </div>

                <p>
                    A naptáramban rendszeresen ellenőrzöm, hogy a másnapra tervezett találkozókra érkezők mobilszámát beírtam-e, hogy szükség esetén időben értesíteni tudjam őket arról, ha szüléshez mentem.
                </p>
                <p>
                    Esténként igyekszem minél előbb ágyba bújni, mert már jól tudom, hogy az esetek döntő többségében a kisbabák az éjjeli vagy hajnali órákat választják az útnak indulásra.
                </p>
                <p>
                    A szülésvonal száma legtöbbször tényleg éjjel szólal meg. A kórházba vezető úton rendszerint kísérőm is akad. Induláskor, amikor beülök az autómba és felnézek az égre, gyakran a kövér telihold mosolyog rám. Ilyenkor cinkosan összenézünk, hiszen ő tudja, hová indulok, én pedig tudom, hogy miért pont ma.
                </p>
                <p>
                    A kisbabák szeretik a teliholdat. Augusztusban, 24-ére gömbölyödik majd ki…
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
