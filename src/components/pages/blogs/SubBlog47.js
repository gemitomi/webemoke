import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog47Pic1 from "../../../image/blog/blog-47-hero-ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-1.png";
import Blog47Pic2 from "../../../image/blog/blog-47-ahogy-egy-szuleszorvos-latja-a-dulasagot-és a-jovot-1.jpg";

export default function SubBlog47() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog47Pic1} alt="ahogy-egy-szuleszorvos-latja-a-dulasagot-1"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Ahogy egy szülészorvos látja a dúlaságot – 1.rész</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. április 06.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog47Pic2} alt="ahogy-egy-szuleszorvos-latja-a-dulasagot-1"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Néhány hónappal ezelőtt a Kossuth Rádió Vendég a háznál című műsorában egy olyan párral készítettek interjút, akiknek két gyermekük születésénél is jelen lehettem. A műsor készítői úgy gondolták, hogy a szülők és a dúla mellett egy szülész-nőgyógyász orvost is megkérdeznek arról, hogy neki milyen tapasztalatai vannak a dúlás szülésekről.
                        </p>
                        

                    </div>
                </div>

                <p>
                    A következőkben – két részletben –  a riporter kérdéseit és az orvos válaszait idézem:
                </p>
                <p>
                    <b>Ön hosszú évek óta találkozik a praxisában dúlákkal. Milyen tapasztalatai vannak?</b>
                </p>
                <p>
                    “27 éve dolgozom szülész-nőgyógyászként, ebből 17 évet egy vidéki kórházban töltöttem, ami nagyon jó gyakorlat, nagyon jó tanulólecke volt a szülészet-nőgyógyászatban, de érdekes, hogy a dúlákkal, és a dúlákkal együtt történő szülést igazában csak 7-8 éve élem meg, tapasztalom meg. Csak pozitív élményem van a dúlákkal történő szülésről, és ezt nem azért mondom, mert rádióinterjút adok, és pozitívan akarok megnyilvánulni a dúlákról. A dúlának van egy olyan szerepe a szülésnél, amit a szülésznő és az orvos nem tud betölteni.
                </p>
                <p>
                    A terhesgondozás során a 9 hónap alatt én rendszeresen találkozom a kismamákkal, ennek a gondozásnak megvannak a fázisai. Kialakul egy kapcsolat a szülész-nőgyógyász és a terhes között, a 35. héttől pedig már magzati szívhangokat is hallgatunk, és mivel ezt általában a szülésznők végzik, valamilyen kapcsolat kialakul a szülésznő és a szülő nő között is. De nem alakul ki egy olyan szoros kapcsolat, mint amilyen kialakulhat a dúla és a szülő nő között. Mert a dúla az, aki lelkileg és fizikailag igazán tudja támogatni az anyát. Tehát a dúla ismeri a családot, ismeri a férjet, a korábbi gyerekeket esetleg, úgyhogy amikor a kismama jön szülni a szülőszobára, szinte kéz a kézben jönnek a dúlával és nekem nem sok dolgom van.
                </p>
                <p>
                    Igazából a terhesgondozás alatt és a szülés folyamán is a dúla pótolja azt, amit a szülésznő és én nem tudunk lelkileg nyújtani. Tehát a dúla ott van a szülőszobán végig a kismamával, és egy olyan hangulat alakul ki köztük a szülőszobán, hogy én nem is szoktam ebbe igazán beleszólni, szinte kívülállóként veszek részt. A szülésznővel együtt nyomon követjük a szülést, hogy minden a megfelelő mederben zajlik-e, tehát óránként megnézzük, hogy megfelelő tendenciában halad-e a szülés, de egyébként szinte magára hagyom a dúlát a szülő nővel és a papával. Ezek a szülések nagyon jó hangulatban zajlódnak le.
                </p>
                <p>
                    <b>Mennyivel másabbak az ilyen szülések ahol dúla is jelen van?</b>
                </p>
                <p>
                    Azért másabbak, mert a szülő nő a szülési folyamat során egy pillanatra sem érzi magát egyedül.
                </p>
                <p>
                    <b>Lehet azt mondani, hogy ezek akkor könnyebb szülések, vagy akkor itt kevesebb beavatkozásra van szükség, vagy egyszerűen csak jobban érzi magát az anyuka ettől, vagy könnyebben is születik a baba, vagy hamarabb születik, van ilyenféle vonatkozása is?</b>
                </p>
                <p>
                    Igen, mivel nem érzi magát egyedül a mama, tehát ott van mellette valaki olyan, akit ő korábbról ismer, akiben megbízik, aki tudja az ő szokásait, akit bármikor megkérdezhet, hogy mi lesz a következő lépés, mit várhatok? Rosszabb lesz-e, jobb lesz-e, mit fog esetleg csinálni az orvos, mi lesz a szülésznő következő lépése, tehát ott van mindig valaki, akit nyugodtan megkérdezhet, és ez mindenképpen elősegíti azt, hogy ha fizikailag nem is, de lelkileg könnyebben menjen a szülés, a kismama türelmesebb legyen.  Ez az egymást jól ismerő páros, tehát dúla és a szülő nő egysége szinte nyugalomra int minket, orvost és szülésznőt is, hogy még nyugodtan várhatunk éstürelemmel követhetjük a szülést. Én ennek nem csak az érzelmi, de orvosi és szülőszobai szempontból is mindenképpen csak az előnyét tudom kihangsúlyozni.”
                </p>
                <p>
                    Vendég a háznál – MR1 Kossuth Rádió
                </p>
                <p>
                    (A kép illusztráció.)
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
