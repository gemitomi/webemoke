import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public70Pic1 from "../../../image/publications/public-70-hero-az-apas-szulesrol.png";
import Public70Pic2 from "../../../image/publications/public-70-az-apas-szulesrol.png";

export default function Public70() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public70Pic1} alt="az-apas-szulesrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Az apás szülésről</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2007. augusztus 14.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications4" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public70Pic2} alt="az-apas-szulesrol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>Első babánkat várjuk a párommal együtt. A kérdésem az lenne, hogy a szülésnél hogy tud segíteni nekem a párom, ha benn lesz a szülőszobában.

                                <br/>Ugyanis még gondolkozik rajta, hogy bejöjjön-e majd, de szerintem csak az a problémája, hogy nem tudja, mit fog ott csinálni, és nem akar felesleges emberként téblábolni az orvos és a szülésznő mellett.
                                Arra lennék kíváncsi, hogy mit tegyen, hogy tud nekem segíteni, hogy masszírozzon stb.<br/>
                                <br/>Várom válaszodat!<br/>Üdvözlettel:Szilvi</i>
                        </blockquote>
                        
      
                    </div>
                </div>
                
                <p>
                    <b>Kedves Szilvi!</b>
                </p>
                <p>
                    Ha egy apa úgy dönt, hogy szeretne jelen lenni gyermeke születésekor, és ezt a párja is igényli, akkor már nem lehet felesleges a szülőszobán. Pusztán az, hogy jelen van, óriási támaszt jelenthet a vajúdás óráiban. Az ő támogatása elsősorban érzelmi jellegű, szeretetével, figyelmével segíthet át majd a vajúdás nehezebb pillanatain.
                </p>
                <p>
                    Az apa és a baba korai kötődése szempontjából is nagy jelentősége van annak, ha az apa is átéli azokat a pillanatokat, amikor a gyermeke a világra jön. Olyan ez, mint amikor egy kör bezárul. Egy amerikai dúlától hallottam ezt a gyönyörű gondolatot: az apa ad egy szerelmi ajándékot az anyának, és az anya 9 hónap múlva visszaadja azt.
                </p>
                <p>
                    Azt gondolom, hogy ezen a különleges alkalmon az a fontos, hogy együtt éljétek át a gyermeketek világra érkezésének pillanatait, és az apának ez ne egy feladat legyen, ahol a külső szemlélők számára meg kell felelni.
                </p>
                <p>
                    Természetesen léteznek olyan vajúdást könnyítő technikák (masszírozás, borogatás), amikkel segíteni tud fizikailag is. Ezeket a technikákat szívesen megmutatom a szülésfelkészítő foglalkozásaimon, és ott természetesen ki is próbálhatjátok a különböző pozíciókat.
                </p>
                <p>
                    Jó, ha a párod odafigyel arra, hogy eleget igyál. Érdemes a vajúdás alatt elvesztett folyadékot szénsavmentes ásványvízzel vagy gyümölcslével folyamatosan pótolni. A vajúdás korai szakaszában ennivalóval is kínálhat, később inkább már csak egy-egy kocka csokoládé vagy szőlőcukor esik jól, ezek azonban sok energiát adnak.
                </p>
                <p>
                    A vajúdó nő általában elfelejtkezik arról, hogy gyakran pisiljen, pedig a folyamat haladásának szempontjából fontos, hogy ne legyen tele a hólyagja. Ha a párod erre emlékeztet, és kikísér a WC-re, ezzel szintén sokat segíthet.
                </p>
                <p>
                    Az aktív vajúdási szakban, amikor a nők gyakran izzadnak, nagyon kellemesen frissít a hideg vizes törülköző, amivel a homlokodat, nyakadat tudja felfrissíteni, de van olyan, akinek a legyezés esik ilyenkor a legjobban.
                </p>
                <p>
                    Amikor elérkezik egy-egy holtpont, akkor segíthet azzal, ha egy új testhelyzetet javasol. Minden kis változtatás továbblendíthet, még akár olyanok is, amikor csak a környezetet változtatja egy kicsit meg (pl. ha eddig csukva volt az ablak, akkor kinyitja, vagy ha égett a lámpa, akkor lekapcsolja).
                    A kitolási szakban pedig óriási támaszod lehet a szó szoros és átvitt értelmében is. Lehet, hogy a kezét szorongatod, lehet, hogy a karjaival tart, de a biztató, bátorító, esetleg a meghatottságtól el-elcsukló hangjai biztosan rengeteget jelentenek majd.
                </p>
                <p>
                    Meggyőződésem, hogy ha a figyelmével, szeretetével fordul feléd, akkor úgy fog tudni támogatni, hogy az neked a legjobb legyen.
                </p>
                <p>Emőke</p>


                <p>
                    <a href="https://nlc.hu/baba/20070814/az_apas_szulesrol/">https://nlc.hu/baba/20070814/az_apas_szulesrol/</a>
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
