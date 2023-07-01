import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public05Pic1 from "../../../image/publications/public-05-hero-tamogatas-a-szules-alatt.png";
import Public05Pic2 from "../../../image/publications/public-05-tamogatas-a-szules-alatt.jpg";

export default function Public05() {
    return (
        <div>
            <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public05Pic1} alt="Tamogatas-a-szules-alatt"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Támogatás a szülés alatt</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. december 22.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                      <Link to="/publications" class="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public05Pic2} alt="Tamogatas-a-szules-alatt"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Néhány nappal ezelőtt hazánkban tartott egy workshopot Debra Pascali Bonaro, a világ legnagyobb dúlaszervezetének (DONA) vezetője.</b>
                        </p>
                        <br/>
                        <p>
                            A tréningen már gyakorló dúlák illetve a hivatás iránt érdeklődő anyák, köztük nagy örömömre egy védőnő és szülésznők is részt vettek. A gyakorlati ismeretek átadása mellett Debra többször említést tett egy olyan nemzetközi szervezet kutatási eredményeiről (Cohrane Collaboration), amely az egészség és az orvostudomány számos területén végzett kutatások rendszerezett áttekintését követi nyomon.
                        </p>   
                            
                    </div>
                </div>
                <p>
                    A „Nők folyamatos támogatása a szülés alatt” című kutatást 2003-ban végezték el New Yorkban, 13 000 nő élményének feldolgozásával.
                    Arra a következtetésre jutottak, hogy azok a nők, akik a vajúdásuk és a szülésük alatt folyamatos érzelmi és fizikai támogatást kaptak, kisebb valószínűséggel igényeltek epidurális érzéstelenítést vagy bármilyen fájdalomcsillapítást, szülésük kevesebb százalékban végződött császármetszéssel, kevesebb volt a vákuummal vagy fogóval befejezett szülés és az anyák elégedettebbek voltak a szülésükkel.
                </p>
                <p>
                    Azokban az esetekben, amikor nem kórházi alkalmazottak, hanem például dúlák voltak a szüléstámogatók, ez a pozitív hatás még nagyobb mértékben érvényesült, mint akkor, amikor az egészségügyi személyzet volt a szülő nők mellett, annak ellenére, hogy a másik csoporthoz képest ők több képzésben részesültek.
                </p>
                <p>
                    A folyamatos érzelmi és fizikai támogatás mindenre kiterjedő hatásainak vizsgálata mellett, az új tanulmány ennek a típusú gondoskodásnak a hatásait különböző körülmények között is megvizsgálta.
                </p>
                <p>
                    A kutatás arra a jelentős felfedezésre mutatott rá, hogy valójában az számít, hogy a gondoskodást milyen minőségben jelen lévő személy végzi. Hatásosabb volt, amikor ez a személy nem a kórházi személyzet egyik tagja, hanem egy külsős volt és így nyújtott személyre szabott gondoskodást, hiszen ő teljes figyelmével tudott az anya felé fordulni.
                </p>
                <p>
                    Amellett, hogy ki a támogató személy, a tanulmányt írók azt is megfigyelték, hogy a folyamatos érzelmi és fizikai támogatás még hatásosabb volt, ha
                </p>
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">már a vajúdás elején elkezdődött,</li>
                    <li class="blog-globale-has-before">olyan környezetben zajlott, ahol nem tudtak rutinszerűen hozzáférni az epidurális érzéstelenítéshez vagy</li>
                    <li class="blog-globale-has-before">olyan környezetben történt, ahol a nőknek megengedték, hogy ők válasszák meg a szüléstámogató személyt (dúla, partner, barát, családtag).</li>
                </ul>
                <p>
                    A tanulmány szerzői mindezek alapján arra a következtetésre jutottak, hogy minden nőnek jár a támogatás a vajúdása és a szülése alatt.
                </p>
                <p>
                    Debra örömmel mesélte, hogy Obama elnök támogatja azt a javaslatot, hogy a vajúdás és szülés alatt a dúlák által nyújtott szolgáltatás kerüljön bele az alapbiztosításba, így amennyiben ez elfogadásra kerül, az USA-ban minden nő ingyenesen élvezheti majd a dúlai támogatás előnyeit.
                </p>
                <p>
                    Hasonló kutatások, összehasonlító vizsgálatok Magyarországon is fontosak lennének, de emellett persze kellenek elkötelezett dúlák és anyák, akik szeretnének hasonló eredményeket elérni, mert a folyamatos érzelmi és fizikai gondoskodás itthon is – mint ahogy a világon mindenütt – valóban minden szülő nőnek jár.
                </p>
                <p>
                    <a href="https://nlc.hu/baba/20091222/tamogatas_a_szules_alatt/">https://nlc.hu/baba/20091222/tamogatas_a_szules_alatt/</a>
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications">Publikációim</Link>
            </div>
        </div>
    </section> 
    </div>
  )
}
