import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public62Pic1 from "../../../image/publications/public-62-hero-a-szulesi-tervrol.png";
import Public62Pic2 from "../../../image/publications/public-62-a-szulesi-tervrol.jpg";

export default function Public62() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public62Pic1} alt="a-szulesi-tervrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A szülési tervről</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2007. október 30.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications4" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public62Pic2} alt="a-szulesi-tervrol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Korábban Áginak írott válaszom kapcsán már említettem, hogy mennyire fontos, hogy végiggondoljuk, összegyűjtsük és leírjuk, majd az orvosunkkal megbeszéljük a szülés körülményeivel kapcsolatos elképzeléseinket.</b>
                        </p>
                        <p>
                            A szülési terv elnevezés talán nem a legpontosabb kifejezés, mert többekben kelti azt a képzetet, hogy ez esetleg valamiféle rugalmatlan, kőbe vésett elgondolások összessége egy olyan helyzetben, amiben bármi megtörténhet a tervektől eltérően is.
                        </p>
                        
      
                    </div>
                </div>
                <p>
                    Könnyen lehet, hogy az előzetes elképzeléseit maga a szülőnő változtatja meg a vajúdás folyamán, és az is lehet, hogy orvosilag indokolt esetben ezen a szakszemélyzet kénytelen változtatni. Mégis kulcsfontosságúnak tartom azt, hogy a várandós nő leírja és ennek nyomán megbeszélje mindazokat a kívánságait és elképzeléseit, amelyek számára fontosak ahhoz, hogy biztonságban érezhesse magát. Az alábbiakban néhány szempontot nyújtok ahhoz, hogy hogyan épüljön fel a szülési terv.
                </p>
                <p>
                    <b>Kezdjünk tervezni!</b>
                </p>
                <p>
                    Ajánlott tartalmaznia egy rövid bevezető részt, melyben írhatsz magadról, arról, hogy miért ezt a helyszínt választottad, és hogy miért fontos neked a szülési terv.<br/>
                    Például:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Voltak-e nehézségeid ezen vagy a korábbi várandósságaid alkalmával (meddőség, vetélés, fizikai vagy érzelmi problémák)?</li>
                    <li className="blog-globale-has-before">Vannak-e félelmeid?</li>
                    <li className="blog-globale-has-before">Vannak-e különleges kívánságaid, vallási vagy kulturális elvárásaid?</li>
                </ul>
                <p>
                    Adj felvilágosítást arról, hogy kik lesznek a kísérőid (apa, dúla, más családtag), és hogy a természetes vagy a medikalizált szülést tekinted-e fontosabbnak.
                </p>
                <p>
                    Ha esetleg aggályaid, félelmeid vannak, akkor érdemes ezekről is írnod. Ha aggódsz a babád egészségéért, félsz a kórháztól, a beavatkozásoktól, vagy zavar az ismeretlen emberek jelenléte a szülés alatt, vagy korábbi rossz élményeid vannak a kórházi tartózkodásról, ezekről mind ejts szót!
                    <br/>Ha felfeded ezeket az érzéseidet, akkor ez segíthet abban, hogy az orvos és a szülésznő érzékenyebb és odafigyelőbb gondozásban tudjon majd részesíteni.
                </p>
                <p>
                    <b>Hogyan szeretnél szülni?</b>
                </p>
                <p>
                    Ezt követhetik a vajúdásra, majd a szülésre vonatkozó kéréseid, kívánságaid.<br/>
                     Például:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">A férjem végig velem lehessen a vajúdás és a szülés alatt, illetve a szülést követő 24-72 órában.</li>
                    <li className="blog-globale-has-before">Ha szükségem van rá, a férjemen kívül még egy hozzátartozóm és egy segítő velem lehessen a vajúdásnál, a szülésnél és a szülés utáni órákban. A választott orvosomon és az általam megválasztott hozzátartozókon kívül más ne legyen jelen a vajúdásnál, szülésnél és a baba fogadásánál.</li>
                    <li className="blog-globale-has-before">Olyan testhelyzetben szülhessek, amit én választok (guggolva, félig ülve, ülve, négykézláb a padlón, hozott matracon, állva, feküdve).</li>
                    <li className="blog-globale-has-before">Az adott fizikai körülmények keretein belül megválaszthassam a teret, ha a zuhany alatt esne jól vajúdni, akkor ez megtörténhessen. Vajúdás alatt szabadon mozoghassak, járkálhassak, ihassak, gyümölcsöt, szőlőcukrot fogyaszthassak, esetleg ehessek.</li>
                    <li className="blog-globale-has-before">Ha egyedül esne jól vajúdni, erre is lehetőség legyen. Ha sötétre vagy félhomályra van szükségem, besötétíthessük a helyiséget.</li>
                    <li className="blog-globale-has-before">Kérem, hogy a szülést ne gyorsítsák komplikációmentes helyzetben. Ezen a magzatburok megrepesztését, oxitocin alkalmazását, különböző gyógyszerek, fájdalomcsillapítók adását, a méhszáj ujjal való tágítását, hasra gyakorolt nyomást, rutinszerű infúzió adását értem.</li>
                    <li className="blog-globale-has-before">Kérem, hogy ne alkalmazzanak folyamatosan CTG-t, csak időszakosan ellenőrizzék CTG-vel a szívhangot.</li>
                    <li className="blog-globale-has-before">A saját ruhámban lehessek a vajúdás, szülés és a kórházi tartózkodás alatt.</li>
                    <li className="blog-globale-has-before">Lássanak el információval, amennyiben igénylem, és ha komplikációnak még csak a gyanúja is felmerül, úgy mondják el mind a komplikációmentes esetre, mind a komplikációra vonatkozó alternatívákat.</li>
                    <li className="blog-globale-has-before">Gátvédelem alkalmazását kérem a gátmetszés elkerülésére.</li>
                    <li className="blog-globale-has-before">A köldökzsinórt csak akkor vágják el, amikor megszűnt a pulzálás benne mind a baba, mind a lepény felőli oldalon.</li>
                    <li className="blog-globale-has-before">Adjanak legalább egy órát a lepény spontán megszületésére. Várják meg, míg magától megszületik a szoptatással elősegítve. Oxitocinnal se befolyásolják a folyamatot.</li>
                
                </ul>
                <p>
                    <b>Hogyan teljenek az első napok anyaként?</b>
                </p>
                <p>
                    Az újszülött gondozására vonatkozó rész tartalmazza azt, hogy miként szeretnéd, hogy bánjanak a babáddal a szülést követő első órákban és napokban.
                </p>
                <p>
                    Ezt érdemes külön lapra írni abban az esetben, ha az újszülött ellátását a szülészeten nem a szülésznő, hanem a csecsemőgondozók végzik, hiszen akkor ezekről a kívánságaidról őket kell tájékoztatni.
                </p>
                <p>Például:</p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">A baba megszületése utáni közvetlen percekben és órában hagyják őt mellettem és a testemen, időt hagyva az ismerkedésre, a mell megtalálására és a szopásra. Csak egy óra múlva vigyék el mérni. Problémamentes esetben csak a legszükségesebb vizsgálatokra kerüljön ekkor sor a látóterünkön belül, édesapja karjaiban.</li>
                    <li className="blog-globale-has-before">Kérem, hogy a babát ne fürdessék meg.</li>
                    <li className="blog-globale-has-before">Szeretném, hogy a baba velem maradhasson nappal és éjszaka egyaránt.</li>
                </ul>
                <p>
                    <b>Felkészülni a váratlanra!</b>
                </p>
                <p>
                    Fontos lehet, hogy legyen a szülési tervnek olyan része is, amely akkor segíthet, ha esetleg valamely váratlan esemény következik be.
Bár a babák túlnyomó többsége egészségesen születik, mégis van némi esély arra, hogy valami nem úgy alakul. Ez a lehetőség a legtöbb várandós szülőt nyomasztja valamilyen szinten. Hasznos lehet előre gondolni arra, hogy miként szeretnéd, ha kezelnék azokat a helyzeteket, amit pl. a császármetszés, a koraszülés vagy a betegség jelent. Ezt azért tartom nagyon fontosnak, ha ezek az események következnek be, akkor számos döntést kell majd olyan állapotban meghoznod, amikor nagyon csalódott leszel, és esetleg gondolkodni sem tudsz majd higgadtan.
Valószínűleg nem lesz szükség a váratlan eseményekre vonatkozó tervedre, de ha mégis, ez később sokat jelenthet majd neked.
                </p>
                <p>
                    <b>FONTOS!</b>
                </p>
                <p>
                    <b>A szülési terv elkészítéséhez időre, gondolkodásra és információgyűjtésre van szükség. Érdemes úgy megfogalmazni, hogy a hangvétele tiszteletteljes és rugalmas legyen.</b>
                </p>
                <p>
                    Az orvossal történő partneri egyeztetés segíthet abban, hogy képet tudj alkotni arról, hogy milyen ellátásra számíthatsz a szülés alatt és közvetlenül az azt követő időszakban.
                    <br/>Láttam már erre többször példát, hogy az egyeztetés során mondatról mondatra átbeszélve a leírtakat, az orvos az aláírásával is ellátta az anya szülési tervét, ezzel is kifejezve, hogy ismeri és elfogadja a kívánságait.
                </p>
                <p>
                    Hangsúlyozva a szülési terv előnyeit és célszerűségét, arra is biztatlak, hogy légy rugalmas önmagaddal szemben is, hiszen a szülés során könnyen lehet, hogy több mindent másképpen érzel majd jónak.
                </p>


                <p>
                    <a href="https://nlc.hu/baba/20071030/a_szulesi_tervrol/">https://nlc.hu/baba/20071030/a_szulesi_tervrol/</a>
                </p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications4">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
  )
}

