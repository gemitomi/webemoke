import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog41Pic1 from "../../../image/blog/blog-41-hero-bekes-dulak.png";
import Blog41Pic2 from "../../../image/blog/blog-41-bekes-dulak.jpg";

export default function SubBlog41() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog41Pic1} alt="bekes-dulak"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Békés Dúlák</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. június 25.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog41Pic2} alt="bekes-dulak"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <i>2011. június 4. szombat</i>
                        </p>
                        <p>
                            Eljött a várva várt esemény, a Békés Dúlaműhely 1. csoportjának záróvizsga napja, ahol a dúlák előbb írásban, majd szóban is számot adtak a tudásukról.
                        </p>
                        <p>
                            A csoport tagjai két évvel ezelőtt döntöttek úgy, hogy az alapképzés után tovább szeretnék bővíteni az ismereteiket annak érdekében, hogy minél felkészültebben segíthessék a hozzájuk forduló anyákat és párjaikat.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Megtisztelőnek éreztem, hogy a segítségemet kérték, így jött hát létre a Békés Dúlaműhely 2009 áprilisában. Azóta havi rendszerességgel találkoztunk, rendszeresen készültünk és megbeszéltünk, feldolgoztunk témákat. A tagok a közös munka során úgy érezték, hogy az én szemléletemmel azonosulva, hasonló alapelvek mentén szeretnének szüléseket kísérni.

                </p>
                <p>
                    A közös tanulások, együttlétek folyamán igazán meghitt, összetartó női körré is alakultunk. Barátokká váltunk, így a szakmai kérdések megvitatása mellett fontossá vált számunkra életünk örömeinek, gondjainak megosztása is. A záróvizsga így aztán nem a kapcsolat lezárását jelentette számunkra, hanem az ismereteink összegzése mellett egyfajta ünnepet is.
                </p>
                <p>
                    Az, hogy ez a nap az emlékeinkben valóban ünnepnapként marad meg, azt a vizsgabizottság két neves tagjának is köszönhetjük. Békési Beáta klinikai szakpszichológus, az Aktív Szülés Program vezetője és Nyulas Jolán, a Szent Imre Kórház vezető szülésznője nagy odafigyeléssel és őszinte érdeklődéssel értékelték az írásbeli teszteket és hallgatták a dúlák szóbeli feleleteit. Az ezek nyomán kialakult beszélgetés és a tapasztalatcsere igazán oldott, jó hangulatban zajlott, és nagyon hasznosnak bizonyult mindannyiunk számára.
                </p>
                <p>
                    Nem tudom, ki izgult jobban: a vizsgázók, vagy a vizsgáztatók, esetleg én, aki egyfajta mentoruk, kísérőjük voltam ebben az elmúlt két esztendőben. Mindenesetre nagyon büszke vagyok rájuk és arra, hogy amikor megkérdeztem tőlük, hogy mit írjak a záróvizsgát tanúsító oklevelükre azt kérték, hogy azt, hogy ők <b>Békés dúlává</b> váltak.
                </p>
                <p>
                    És a név – mint tudjuk – kötelez. 
                </p>
                <p>
                    Valamennyien egyetértünk ugyanis abban, hogy alapvető fontosságú, hogy a szülés óráiban az anya körül ne legyen feszültség, ezért tőlünk telhetően mindent megteszünk annak érdekében, hogy a szülőszobán partneri együttműködésben, az egészségügyi személyzet munkáját és kompetenciáját tiszteletben tartva kísérjük a szüléseket.
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
