import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog51Pic1 from "../../../image/blog/blog-51-hero-gondolatok-a-bizalomrol-es-a-biztonsagrol.png";
import Blog51Pic2 from "../../../image/blog/blog-51-gondolatok-a-bizalomrol-es-a-biztonsagrol.jpg";

export default function SubBlog51() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog51Pic1} alt="gondolatok-a-bizalomrol-es-a-biztonsagrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Gondolatok a bizalomról és a biztonságról</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. október 26.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog51Pic2} alt="gondolatok-a-bizalomrol-es-a-biztonsagrol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Több mint két hete, hogy a rendőrség őrizetbe vette Dr. Geréb Ágnest, és már 22 éve, hogy nem születik megnyugtató szabályozás az intézményen kívüli szülések feltételeiről. Ez alatt az idő alatt közel 3 500 nő hozta világra a gyermekét otthon, ők is, és a az őket segítő bábáik is vállalva azokat a kockázatokat, amelyek a szabályozatlanságokból erednek.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Az elmúlt napokban rengeteg állásfoglalás jelent meg illetve hangzott el a médiában a témával kapcsolatban. Jogászok, szülészorvosok, bábák, közéleti személyiségek, politikusok, még nem szült nők és gyermekes anyák, apák mondták el véleményüket. Több internetes fórumon pedig azóta is meglehetősen indulatos, egymás álláspontját sokszor meg nem értő viták zajlanak a felelősségről, a szülés és születés élményének jelentőségéről, a háborítatlanságról, a felesleges beavatkozásokról, a komplikációk gyakoriságáról, a más országokban zajló otthonszülési gyakorlatról és a magzat érdekeiről.
                </p>
                <p>
                    A vélemények különbözősége érdekes módon pont az azonosságukból fakad. Abban ugyanis mindenki egyetért, hogy a legfontosabb az, hogy az anyák megnyugtató körülmények között, biztonságban adjanak életet gyermekeiknek.
                </p>
                <p>
                    Hogy a biztonságérzet kinek mit jelent, az persze nagyon különböző lehet. Vannak, akik számára a kórház, vannak, akiknek az otthonuk, míg másoknak egy születésház jelentené a biztonságos helyszínt a babájuk világra hozatalához.
                </p>
                <p>
                    De szülés helyszínétől függetlenül más szempontok is befolyásolják az anyák biztonságérzetét. Ezek közül az egyik legfontosabb az, hogy az anya megbízzon azokban a személyekben, akik mellette vannak a vajúdás és a szülés óráiban. Az anya által választott bába, orvos, szülésznő, dúla vagy a társ jelenléte ugyanis nagyon megnyugtató a vajúdó nő számára, amennyiben a kapcsolatuk a bizalmon alapul.
                </p>
                <p>
                    A legnagyobb probléma ebben a kialakult helyzetben az, hogy az otthonszülés törvényi szabályozatlansága sokakban most bizalmatlanságot és bizonytalanságot szül.
                </p>
                <p>
                    Vélhetően azok közül, akik otthon szeretnék a gyermeküket megszülni, többen tanácstalanok, szoronganak, hiszen nem bíznak abban, hogy ezt a közeljövőben az otthonukban biztonságban megtehetik, és mivel nem akarnak kórházba menni, ráadásul bizalmatlanok az egészségügyi ellátással szemben is.
                </p>
                <p>
                    Az elmúlt napok vitái nyomán jól látható, hogy sokan vannak azonban olyanok is, akiknek a jelenlegi, helyenként  túlmedikalizált szülészeti ellátás úgy jó, ahogy van. Számukra az elsődleges szempont a külső kontroll adta biztonság, és nem tartják jelentősnek a szülés, születés minőségének rájuk és a gyermekeikre gyakorolt lélektani hatásait.
                </p>
                <p>
                    Talán az anyák közti vitában most e két tábor képviselői a leghangosabbak. Olvasva az internetes hozzászólásokat számomra rendkívül meglepő és megdöbbentő, hogy gyakran milyen intoleráns, a másikat megbélyegző módon, bántó hangnemben ütköztetik a véleményüket.  
                </p>
                <p>
                    Sajnos a kialakult helyzetnek egyéb hozadékai is tapasztalhatók. Az elmúlt héten egy budapesti kórház szülészetén szerzett tapasztalataim azt bizonyítják,  hogy a Geréb Ágnes ellen indított újabb büntetőeljárás az orvosok és a szülésznők között is szélsőséges indulatokat gerjeszt, miközben sem ők, sem a közvélemény nem ismeri pontosan sem  a jelenlegi, sem a korábbi esetek pontos körülményeit.
                </p>
                <p>
                    Ráadásul a legnagyobb problémának azt látom, hogy sokan nem értik, hogy az otthonszülés ügye, az intézményen kívüli szülés feltételeinek megteremtése, a szabad választás jogának a biztosítása nem azonos azzal a kérdéssel, hogy ők éppen mit gondolnak személy szerint Geréb Ágnes szakmai tudásáról, felkészültségéről, személyiségéről vagy kommunikációjáról. A szubjektív véleményalkotás joga természetesen őket is, mint mindenkit megillet.
                </p>
                <p>
                    Az azonban nagyon rossz hatással van egy éppen vajúdó anyára, ha az orvos egy általa szükségesnek ítélt beavatkozás mellett úgy érvel, hogy „Ezt a Geréb Áginál lehet, de nálam nem!” Az effajta, a helyzethez méltatlan és emberileg sértő kommunikáció nem segíti az egyébként is kórházi szülést választó nőt abban, hogy egy ilyen amúgy is nehéz helyzetben informált döntést tudjon hozni. És a példa sajnos nem egyedi.
                </p>
                <p>
                    Az otthonszülés törvényi szabályozatlanságából fakadó következmények hatásai tehát a kórház falain belülre is begyűrűznek. A múlt héten volt módom megtapasztalni azt is, hogy a kórházi szülésfelkészítőre érkező anyák kérdéseiből milyen sok esetben sugárzott a bizalmatlanság. Az őszintén és türelmesen válaszoló, hiteles információkat nyújtó vezető szülésznőnek nem kevés idejébe került, hogy válaszaival megpróbálja megnyugtatni az anyákat. Mivel a jó szülés egyik legfontosabb alapja a bizalom, könnyen belátható, hogy ennek hiánya hogyan hat a kórházban zajló szülésekre is.  

                </p>
                <p>
                    Márpedig a kórházba készülő párok közül ma már egyre többen megfogalmazzák azt az igényüket, hogy a megfelelő szakmai kísérés mellett korrekt tájékoztatást kapjanak, és hogy figyelembe vegyék az egyedi – és egyáltalán nem megvalósíthatatlan – kéréseiket (pl. azt, hogy az orvosok tiszteljék az intimitás iránti vágyukat, ne gyorsítsák szükségtelenül a folyamatot, ha van dúlájuk, akkor az egészségügyi személyzet az ő tudásukat, munkájukat elfogadva kísérje a szülést vagy azt, hogy humánusabban fogadják a megszületett babájukat.)
                </p>
                <p>
                    A Nemzeti Erőforrás Minisztérium állásfoglalása szerint a szülő nőnek joga van megválasztani a szülése helyszínét. Ideje lenne elfogadni, hogy a nők néhány százalékának erre van igénye, és biztosítani számukra mindazokat a feltételeket, amelyek megléte esetén ez számukra egy valós, minden szempontból biztonságos és megnyugtató döntés lehet.
                </p>
                <p>
                    Komoly nehézségeket és akadályt jelent, hogy az állam nem teremt megfelelő körülményeket az otthonszüléshez. A bábák nem kapnak az államtól a munkájuk végzéséhez szükséges szakmakódot és  a Szülészeti és Nőgyógyászati Szakmai Kollégium is veszélyesnek és kerülendőnek tartja ma Magyarországon az otthonszülést, és nem érzi sürgetőnek gyakorlott bábák tapasztalatainak figyelembe vételével elkészíteni a szabályozást.
                </p>
                <p>
                    Bízom abban, hogy a helyzet tarthatatlanságát felismerve és az anyák igényeit figyelembe véve, hamarosan elkezdődik végre az érdemi munka ez ügyben.
                </p>
                <p>
                    A törvényi szabályozás azonban véleményem szerint önmagában még nem elég.
                </p>
                <p>
                    A tisztességes, nyílt kommunikáció, az egymás munkájának, tudásának elfogadása a bábák és a szülészorvosok részéről egyaránt, elemi feltétele az intézményen kívüli szülés biztonságos hátterének megteremtéséhez.
                </p>
                <p>
                    Ina May Gaskin, a világ egyik legnagyobb tapasztalatával rendelkező bábája, nemrégiben Magyarországon járt, és többek között arról is beszélt, hogy az Amerikai Egyesült Államokban sem könnyű a bábák helyzete és elfogadottsága. Az, hogy ez neki mégis sikerült, az a szakmai tudása mellett annak az attitűdnek köszönhető, amellyel kivívta az egészségügyi személyzet partnerségét.
                </p>
                <p>
                    <i> „Sehová sem jutunk azzal, ha sértegetjük azt, aki másként gondolkodik a szülésről. Mindkét fél tud a másiktól tanulni. Ha valamilyen okból egy szülő nővel a kórházba megyünk, el kell fogadnunk, hogy az orvosok területén vagyunk és nem nekünk kell ott irányítani.”</i> – mondta a Szombathelyen tartott előadásán.
                </p>
                <p>
                    Én és a Békés Dúlakör dúlái, Ina May Gaskin gondolatával azonosulva a várandósság idején információk nyújtásával és érzelmi támogatással bátorítjuk a szülőket arra, hogy választ találjanak a bennük felmerülő valamennyi kérdésre, a szülés óráiban pedig folyamatos jelenlétet és figyelmet biztosítva igyekszünk mindent megtenni az anya, az apa és a baba biztonságának növelése érdekében.
                </p>
                <p>
                    Egyelőre a kórházak falain belül, de reméljük, hogy a törvényi szabályozás elkészülte után – számunkra is biztonságos feltételek között – születésházakban vagy a családok otthonában is.
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
