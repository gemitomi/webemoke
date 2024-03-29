import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public48Pic1 from "../../../image/publications/public-48-hero-felelm-a-szulestol.png";
import Public48Pic2 from "../../../image/publications/public-48-felelem-a-szulestol.jpg";

export default function Public48() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public48Pic1} alt="felelem-a-szulestol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Félelem a szüléstől</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. május 27.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications3" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public48Pic2} alt="felelem-a-szulestol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>22 éves és 22 hetes kismama vagyok. 🙂 A terhességem teljes mértékben problémamentes, csupán néhány természetes, vele járó kellemetlenség fordul néha elő. Nagyon várjuk már a picit, és kezdettől fogva tudatosan készülök az érkezésére. Igyekszem megfelelően táplálkozni, mozogni és pihenni is, amennyit csak lehet.<br/>
                            <br/>Mint minden kismama, bevallom, egy kicsit félek a szüléstől, de nem szükséges rossznak érzem, hanem inkább valami nagyon szép és jó kezdetének.</i>
                        </blockquote>
                        
      
                    </div>
                </div>
                <blockquote>
                    <i>Viszont szeretnék tanácsot kérni. Az orvosom nagyon kedves, barátságos és figyelmes, aki 30 éve van a pályán, ami számomra sok szempontból jó, de előítéletet is kelt bennem. Ő a szüléseket már rutinszerűen, forgatókönyv szerint vezeti le. (Bár, ha a körülmények engedik, akkor az első szempont számára az anyuka és a baba kényelme.)<br/>
                    <br/>Sajnos, arra azonban nem kaptam választ, hogy orvosi segítség nélkül (gondolok itt például az EDA-ra vagy a gátmetszésre) hogyan lehet enyhíteni a fájdalmakat, és segíteni a babának a könnyű kibújást. Létezik valamilyen módszer, amellyel elviselhetőbbé lehet tenni a fájdalmat, könnyebbé tenni a szülést? Valamilyen felkészülés?<br/>
                <br/>Az orvosom a terhestornát javasolta, illetve a szülésfelkészítő tanfolyamot, de ezek sajnos egyáltalán nem győztek meg. Barátságtalannak tűnt, és a kismamák sem nyilatkoztak erről igazán meggyőzően.<br/>
                    <br/>Szerinted mivel segíthetek a babámnak, hogy a születése a lehető legkisebb megrázkódtatást jelentse a számára, és hogy nekem is könnyebb legyen?<br/>
                <br/>Enikő</i>
                </blockquote>
                <p>
                    <b>Kedves Enkő!</b>
                </p>
                <p>
                    A várandósság időszaka egy nő életének az egyik legizgalmasabb életszakasza. Mind fizikai, mind lelki értelemben óriási változások zajlanak ilyenkor. Számtalan érzés bukkan fel, és rengeteg kérdés foglalkoztatja ezekben a hónapokban az anyát. A leggyakrabban felmerülő kérdések egyike, hogy hogyan lehet majd megbirkózni a fájdalommal.
                </p>
                <p>
                    A tapasztalatom az, hogy a fájdalomtól való félelmet már azzal igen hatékonyan meg lehet szelídíteni, ha beszélünk róla. Persze nem mindegy, hogy kivel és hogyan. Ha egy várandós olyan szüléstörténeteket hall, amely alapján a fájdalom valami legyőzhetetlen, megzabolázhatatlan és elviselhetetlen erőnek tűnik, az nyilván csak növeli a szorongását. Ha azonban olyan könyveket olvas, olyan filmeket néz vagy olyan gondolatokat hall erről, amelyben a fájdalom mint segítő erő, pozitív energia jelenik meg, akkor az segít abban, hogy ne elmenekülni akarjon előle.
                </p>
                <p>
                    Az ilyen témájú beszélgetésekben jó partnered lehet egy dúla vagy egy holisztikus szemléletű szülésznő.
                </p>
                <p>
                    Dúlaként a legnagyobb és legfontosabb feladatomnak a várandósság idején azt tartom, hogy lehetőséget biztosítsak arra, hogy minden, az anyában felmerülő kérdés megválaszolásra kerüljön, és hogy minden érzés kimondódjon és meghallgatásra találjon. Ez az egyik alapja annak, hogy az anya aztán bízni tudjon a saját testében és erejében, és a lehető legnagyobb eséllyel induljon a természetes szülés felé. Nagyon sokan számolnak be arról, hogy az ilyen beszélgetések után mennyire felszabadultnak és erősnek érzik magukat.
                </p>
                <p>
                    Talán nem „hazabeszélés”, ha nem én írok arról, hogy hogyan lehet a legnagyobb eséllyel szülni kórházban gyógyszeres beavatkozás nélkül, hanem Ina May Gaskinnek, a világ legismertebb bábájának a szavait idézem erről:
                </p>
                <p>
                    <i>„Több mint tizenegy gondosan összeállított felmérés szól a dúlák mellett. Egész egyszerűen a dúlák jelenléte a felére csökkenti a szükségtelen császármetszések valószínűségét. Szintén felére csökken a fogóműtét és a vákuum valószínűsége. És ez még nem minden! A dúla jelenléte lerövidíti a vajúdási időt, mivel jelentősen csökken a stressz-szint, a fájdalom és az aggodalom.”*</i>
                </p>
                <p>
                    Nemrégiben egy szülészeti osztály vezető főorvosa egy szakmai fórumon egyenesen úgy fogalmazott, hogy a XXI. század leghatékonyabb fájdalomcsillapítási módja a szülészetben az egyénre szabott, személyes gondoskodás.
                </p>
                <p>
                    Természetesen ezt egy szülőnő ideális esetben nemcsak a dúlától, hanem a szülésznőtől is megkaphatja.
                </p>
                <p>
                    A várandósság alatti torna vagy a szülésfelkészítő beszélgetések akkor igazán jók és hatékonyak, ha a felmerülő kérdésekre az ott jelen lévő minden kismama kielégítő és pontos választ kap. Persze az sem mindegy, hogy mit. Épp a napokban járt nálam egy várandós nő, aki azt mesélte, hogy alig várta, hogy a kórház által szervezett szülésfelkészítőn elérkezzen az az alkalom, amikor a szülésznőkkel lehet beszélgetni. Ettől a találkozótól azt várta, hogy néhány olyan kérdésére kapjon megnyugtató választ, amelyek az ottani szokásokkal kapcsolatosak. A hallottak nem csak azért bizonytalanították el még jobban, mert kategorikusak voltak és a szabályokhoz való merev ragaszkodást sugallták, hanem mert a hangnem is meglehetően hűvös és ellentmondást nem tűrő volt.
                </p>
                <p>
                    Ha a szülésedhez olyan segítőket hívsz, akik szeretettel, tisztelettel és empatikusan támogatnak majd, akkor ők nagyon sokat tudnak segíteni neked.
                </p>
                <p>
                    Egyrészt azért, mert pl. egy jó dúla vagy szülésznő az érzelmi támogatáson túl ismer olyan technikákat, amelyekkel enyhíteni tudja a fájdalmadat. Biztatni tud, hogy szabadon megtaláld azt a pozíciót, amely neked a legkényelmesebb, de javasolhat is ilyeneket, ha szükséges. Homeopátiás szereket, illóolajokat, borogatást, masszázst alkalmaz, vagy szeretetével, erőt adó mondataival segít átlendülni a vajúdás nehezebb pillanatain.
                </p>
                <p>
                    Másrészt már a várandósság alatt tud segíteni abban, hogy megismerd a lehetőségeidet, és hogy meg tudd fogalmazni a saját és a kisbabád ellátásával kapcsolatos igényeidet.
                </p>
                <p>
                    Szüléseket nem lehet rutinszerűen kísérni, hiszen minden nő és minden vajúdás más és más. Ha ez forgatókönyvszerűen zajlik, akkor azt a szülést vezetik és nem kísérik, és ennek már nincs köze a háborítatlansághoz.
                </p>
                <p>
                    Ha az igényeidről érdemben tudsz beszélni az orvosoddal is, akkor mindezek adhatják meg azt a biztonságot, amely hozzásegít egy beavatkozásoktól mentes, szép szüléshez.
                </p>
                <p>Emőke</p>
                <p>* Ina May Gaskin: Útmutató szüléshez (Jaffa Kiadó, 2006).</p>


                <p>
                    <a href="https://nlc.hu/baba/20080527/felelem_a_szulestol/">https://nlc.hu/baba/20080527/felelem_a_szulestol/</a>
                </p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications3">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
