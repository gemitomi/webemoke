import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public65Pic1 from "../../../image/publications/public-65-hero-a-dulasagrol.png";
import Public65Pic2 from "../../../image/publications/public-65-a-dulasagrol.jpg";

export default function Public65() {
  return  (
    <div>
     <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public65Pic1} alt="a-dulasagrol"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">A dúlaságról</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2007.  szeptember 25.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/publications4" class="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public65Pic2} alt="a-dulasagrol"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A gyermeket váró nők jelentős része már a várandósság korai vagy középső szakaszában kiválasztja azt a társat, akit szeretne a szüléséhez is maga mellé hívni. De az utóbbi időben az is többször előfordul, hogy olyanok kértek tőlem találkozási lehetőséget, akik még csak a fogantatásra készülnek.
                            A dúla a várandós nővel, illetve a párjával a várandósság időszakában többször találkozik. Ezeknek a találkozásoknak a gyakorisága mindig az anya igényei szerint alakul. Egy-egy ilyen beszélgetés nem kötött időben zajlik, gyakorisága más és más, de a szülés kíséréséig a kapcsolatuk rendszerint nagyon elmélyültté és bizalmassá válik. 
                        </p>
                        
                    </div>
                </div>
                <p>
                    A dúla megismeri az anya érzelmeit, és odaforduló figyelmével, a felmerülő kérdések megválaszolásával, tanácsaival oldja az esetleges aggodalmait, félelmeit. Általában ellátogat a szülőpár otthonába, és ott találkozik, beszélget a leendő apával is. Kapcsolata az anyával a szülés lezajlása után sem szűnik meg, tudásával, tapasztalataival segíti a szülőket a gyermekágy időszakában is.
                </p>
                <p>
                    A dúla törekszik arra, hogy a szülésnél jelen lévő szakszemélyzet számára se legyen idegen. Ennek érdekében már a várandósság idején elkíséri az anyát az orvosához, illetve szülésznőjéhez, ahol bemutatkozik, és válaszol mindazon kérdésekre, amelyek a tevékenységével kapcsolatban felmerülnek.
                </p>
                <p>
                    A dúla nem helyettesíti az orvost, a szülésznőt vagy a védőnőt, az ő szerepe elsősorban az anya érzelmi támogatásában, a róla való szerető gondoskodásban rejlik.
                </p>
                <p>
                    A dúla a vajúdás és a szülés ideje alatt végig teljes figyelmével kíséri az anyát, érzékelve és követve minden olyan pillanatot, amikor támogatásra, bátorításra, megerősítésre, biztatásra van szüksége. Ezekben az órákban a fizikai támasz nyújtása (masszírozás, borogatás, különböző vajúdási pozíciók ajánlása) is jelentőssé válik.
                    <br/>A dúla segítő jelenléte a tapasztalatok alapján jelentősen csökkenheti az orvosi beavatkozások szükségességének gyakoriságát, mivel sokszor képes az anyát érzelmileg átsegíteni a szülés nehezebb pillanatain.
                </p>
                <p>
                    Jómagam hét éve kísérek szüléseket és három éve tartok dúlaképzéseket. Azt tapasztalom, hogy azok a nők, akik szeretnének maguk is dúlává válni, a saját szülésélményüktől megérintődve ezt két okból teszik. Vagy azért, mert azt szeretnék, hogy mások is hasonlóan éljék meg a gyermekük világrajövetelét, vagy éppen azért, hogy csak olyat ne kelljen átélniük.
                </p>
                <p>
                    A tréningen való részvételnek nem feltétele semmilyen egészségügyi végzettség, és az sem kizáró ok, ha valaki még nem szült.
                </p>
                <p>
                    A képzés célja, hogy segítsen elindítani a résztvevőket a dúlává válás útján. Ezen belül segítse feltárni a szülés körüli segítővé válás motivációit, és ezzel, valamint a legfontosabb információk, kapcsolatok rendelkezésre bocsátásával megfelelő alapot nyújtson a további tanuláshoz.
                </p>
                <p>
                    Ma Magyarországon többféle képzés is létezik. Eddig 7 alkalommal szerveztem és tartottam dúlaképzést a MODULE keretein belül. Idén ősztől trénertársammal ezt a tréninget kibővítve és elmélyítve az Élet-kör Életvezetési Tanácsadó és Képzési Központban visszük tovább.
                </p>
                <p>
                    Az Élet-kör dúlatréningje – az eddigi tréningek tapasztalatait felhasználva – ezentúl két hétvégéből áll. Ez a változtatás tágabb lehetőséget nyújt mind az önmagunkban való elmélyedésre, mind pedig a dúlai hivatással kapcsolatos praktikus információk feldolgozására. Az első együtt töltött hétvége neve alaptréning, amelyet kb. egy hónappal később követ a dúlatréning. Mindkét szakasz bentlakással zajlik.
                </p>
                <p>
                    Az Élet-kör-alaptréning nem más, mint egy női kör. Ebben a körben olyan alvó képességeink, fájdalmaink, örömeink, élményeink, tapasztalataink, emlékeink, belső történéseink, rejtett erőforrásaink ébrednek fel vagy mélyülnek, amelyeket mindennapjainkban kevésbé hasznosítunk. A női lét legjelentősebb fordulópontjai közül – mint a születés, a nővé válás, szülés, anyaság, menopauza – a szülés, születés élményének felidézése a legmegérintőbb ebben a két és fél napban. Akik dúlának készülnek, azok is ezt a tréninget végzik el, mielőtt a szakosító képzésre jelentkeznének, mivel olyan képességeinket is fejlesztik a gyakorlatok, amelyek a segítő kapcsolat nélkülözhetetlen eszközei (mint például értő figyelem, empátia, elfogadás).
                </p>
                <p>
                    Az alaptréninget követő dúlatréningen a szülés, születés területén dolgozó szakemberek adják át az ismereteiket, tapasztalataikat a hallgatóknak.
                </p>
                <p>
                    Témái: a várandósság, a vajúdás és a szülés testi és lelki változásai, a gyermekágy időszaka, a szoptatás, homeopátiás és aromaterápiás ismeretek, kommunikációs gyakorlatok, szüléssel kapcsolatos filmek megtekintése, és a gyakorló dúlák szüléstörténeteket is megosztanak a tréning résztvevőivel.
                </p>
                <p>
                    Ha kedvet éreztek ehhez a csodálatos élményeket adó hivatáshoz, szeretettel várlak benneteket!
                </p>
                <p>Emőke</p>


                <p>
                    <a href="https://nlc.hu/baba/20070925/a_dulasagrol/">https://nlc.hu/baba/20070925/a_dulasagrol/</a>
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications4">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
