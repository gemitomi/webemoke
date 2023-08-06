import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public60Pic1 from "../../../image/publications/public-60-hero-a-dula-es-az-apa.png";
import Public60Pic2 from "../../../image/publications/public-60-a-dula-es-az-apa.png";

export default function Public60() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public60Pic1} alt="a-dula-es-az-apa"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A dúla és az apa</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2007. november 27.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications3" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public60Pic2} alt="a-dula-es-az-apa"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Amikor egy pár felkeres azzal, hogy szeretnék, ha ott lennék a babájuk születésénél, nagy hangsúlyt fektetek arra, hogy megtudjam, melyikükben vetõdött fel ez a gondolat, és hogy egyetértenek-e ebben.</b>
                        </p>
                        <p>
                            A tapasztalataim szerint az igény legtöbbször a várandós nőben merül fel, és gyakran az apák ezzel az ötlettel szemben ambivalens érzéseket táplálnak. Úgy érzik, hogy meg tudják majd adni azt a támogatást a párjuknak, amire szükségük van, tudják, hogyan segítsenek. Azt gondolják, hogy másnak a jelenléte zavarhatja a köztük lévő intim kapcsolatot.
                        </p>
                        
      
                    </div>
                </div>
                <p>
                    A bizalom kialakítása ugyanolyan fontos az apával is, mint az anyával, így számomra sokat jelent, ha ismerem ezeket az érzéseket, és tudunk erről beszélni. Jó esetben már a szülés előtt megszűnnek az apa fenntartásai, de olyan is volt már, hogy valaki a szülés utáni gyermekágyas találkozás alkalmával vallott arról, hogy csak a vajúdás óráiban értette meg és érezte át a dúlai támogatás jelentőségét.
                </p>
                <p>
                    Amikor a vajúdás megkezdődik, általában az apa és az anya egyaránt megkönnyebbül, ha a szülésznő vagy a dúla velük marad és segít.
                    <br/>Marshall H. Klaus, John H. Kennell és Phyllis H. Klaus amerikai szerzők a The Doula Book című könyvükben így írnak erről:
                </p>
                <p>
                    <i>„Meggyőződésünk, hogy az apa nem lehet az anya dúlája. Egy apa nagyon ritkán képes pillanatról pillanatra értékelni, hogy mi történik az anyával, hogy a változások a normális vajúdás részei-e. Könnyebb számára, ha érzelmi támogatást nyújthat az anyának, míg a dúla mindkettőjükkel törődik.<br/>
                        A férfiak gyakran nehéznek találják megfigyelni, elfogadni és megérteni a nők ösztönös viselkedését a vajúdás és a szülés során. Ehelyett általában megpróbálják a vajúdó nőt önkontroll alatti racionális állapotban tartani.
                        Az apa aggodalmainak és félelmeinek növekedésével eltávolodhat az anya érzelmi állapotától, és úgy érezheti, át kell vennie az irányítást. Ezenkívül előfordulhat lámpaláz, túlzott aktivitás, túlzott beszéd vagy passzivitás is, miközben lehetséges, hogy e reakcióknak pont az ellentéte lenne a megfelelő az anya számára. A dúla segíteni tud a férfinak, hogy harmóniába kerüljön az anya érzelmi állapotával.</i>
                </p>
                <p>
                    <i>Ha a dúla elérhető mind az anya, mind az apa számára, akkor képesek a saját feladataiknak megfelelni: az anya előrehalad a szüléssel, kéri és megkapja, amire szüksége van, megfelelő és megértő módon, az apa a lehető legtöbb támogatást nyújtja, és mégis a saját képességeinek és érzéseinek megfelelő mértékben segít, anélkül, hogy kellemetlenül érezné magát.

                        <br/>A dúlának minden esetben érzékelnie kell, hogy milyen a pár kapcsolata. Ha minden rendben megy, és megfelelően együtt tudnak működni, a dúla félrevonul, de a háttérből továbbra is figyeli az eseményeket. Segíti az apát abban, hogy megfelelő módon vegyen részt a folyamatban, például megmutatja neki, hogyan masszírozza az anya hátát.
                        
                        <br/>A szülés-születés hátterében általában egy párkapcsolat áll, ami mindig összetett. Előfordulhat, hogy az apa tudat alatt a halandóság, a szexualitás, a szülési folyamattal való azonosulás, az apaság, valamint a szerepével kapcsolatos megoldatlan problémákkal küzd. Tehát nagyon sokféle érzelem kísérheti a szülést.
                        
                        <br/>A dúla azonban viszonylag szilárd marad. Azok a nők, akik dúlákká akarnak válni, segíteni akarnak más nőknek, bizonyos empátiával viszonyulnak a szüléshez. Képzésük során lehetőségük van megérteni saját személyes hozzáállásukat a szüléshez, és megtanulják nem kivetíteni saját érzelmi szükségleteiket a vajúdó nőre.
                        
                        <br/>A gyakorlott dúla tudja, hogy mikor legyen erőteljes a jelenléte és támogatása, és mikor üljön csak nyugodtan, míg a szülőnő saját teste folyamataival dolgozik. A dúla számára könnyebb, mint az apa számára, hogy átváltson az irányító vagy tanácsadó szerepről egy nyugodtabb, bátorító szerepre, vagy bármely más szükséges szerepre, ahogy az események változnak a vajúdás során. Az apához hasonlóan a dúla sem orvosként vagy szülésznőként van jelen, a szüléssel kapcsolatos tapasztalata mégis olyan nyugalmat és tudást jelent, amely nagyon hasznos lehet. S képességeinek és érzékenységének köszönhetően segítheti a kommunikációt a nő vagy a pár és a szakemberek között.
                        
                        <br/><br/>Az anyáktól szinte mindig ezt hallani: „maga a tudat, hogy a férjem ott van, és fogja a kezem, szinte a legfontosabb dolog volt nekem – közben bízni tudtam a dúla szavaiban és cselekedeteiben, elengedhettem magam, biztonságban éreztem magam, bíztam abban, hogy a tapasztaltsága átsegít minket.
                        
                        <br/>Az apák egy dúla segítségével képesek olyan mértékben részt venni, ahogy az nekik megfelel. Így teljes mértékben át tudják élni gyermekük születésének örömét és csodáját. Az anya és az apa számára így közös élmény lesz a születés – megindító, inspiráló és szeretetteljes élmény.”</i>
                </p>


                <p>
                    <a href="https://nlc.hu/baba/20071127/a_dula_es_az_apa/">https://nlc.hu/baba/20071127/a_dula_es_az_apa/</a>
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
