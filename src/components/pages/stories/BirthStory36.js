import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth36Pic1 from "../../../image/szulestort/szules-story-36-hero-tango-egy-gyermekert.png";
import Birth36Pic2 from "../../../image/szulestort/szules-story-36-hero-tango-egy-gyermekert.png";

export default function BirthStory36() {
  return <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth36Pic1} alt="tango-egy-gyermeker"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Tangó egy gyermekért</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                         <Link to="/stories2" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth36Pic2} alt="tango-egy-gyermekert"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Piazzolla zenéjére tangózni is fogok a párommal, méghozzá hálóingben, papucsban, vizesedéstől felpuffadt lábakkal. Ez az élmény örökre elkísér minket, melynek szerves része volt Emőke is. Nélküle nem sikerült volna…
                        </p>
                        <p>
                            Terhességi magas vérnyomással küzdöttem a várandósság alatt. Emőkével mi csak az utolsó harmadban találkoztunk, amikorra már az összes engem kezelő orvos császármetszéssel fenyegetett, annak ellenére,hogy nem fordult elő az ezt indokló fehérjevizelés. 
                        </p>
                        

                    </div>
                </div>

                <p>
                    Emőke kezdettől fogva azt erősítette bennem, hogy bízzak a természet erejében, és az ösztöneimben. Ha azt érzem, hogy képesek vagyunk Lujzimmal kéz a kézben végig menni az úton, egymást segítve, akkor ehhez ragaszkodjak, és meg fogom találni a megfelelő kórházat, orvost, szülésznőt, még ha a 34. héten mindez már szinte reménytelennek is látszott.
                </p>
                <p>
                    Édesanyám ismeretsége révén egy velem egykorú női nőgyógyászt találtam egy olyan kórházban, amely semmiképpen nem az alternatív szülést pártolja. És mégis. Dacára a konzervatív, medicinális szemléletnek, a magas vérnyomásnak, aznap az égiek kegyeltjei voltunk: Lujzink természetes úton, apa jelenlétében és segítségével, gátmetszés nélkül érkezett meg hozzánk, békés, szeretetteljes miliőbe.
                </p>
                <p>
                    Most már tudom, mekkora segítség, mennyire nélkülözhetetlen a dúla jelenléte a kiszolgáltatott szülő nő legnehezebb pillanataiban, nem kevésbé a bár felkészült, de mégis kissé megrettent apa támogatásában.
                </p>
                <p>
                    A véget nem érőnek tűnő vajúdás, fájdalom elviselhetővé vált, hogy Emőke adott egy pszichés időkeretet, mialatt pl: masszírozta a derekam, kikísért a wc-re, kezelte a CD-t, megörökítette a tangónkat, vízzel itatott egy szívószálon keresztül, vagy épp a szülésznővel, orvossal egyeztetett az állapotomról. Átlényegült, teljesen eggyé vált a természet folyamatával, csak mi voltunk a fontosak, láttam rajta, hogy szinte átéli, amit én. Még a páromra, Bercire is tudott figyelni, aki minden idegszálával, szíve minden szeretetével végig mellettem volt.
                </p>
                <p>
                    <i>„Már a medencénél jár Lujzi, már a szülőcsatornában, talán már csak tíz kontrakció, még öt, mindjárt megérkezik…, már látszik a kis feje!”</i>- bíztattak. Ekkor került elő Emőke csodaolaja, melynek köszönhetően a gátvédelem teljes volt, és nem került sor metszésre sem. Egy olyan kórházban, ahol ez elképzelhetetlen, főleg első szülő nőnél.
                </p>
                <p>
                    Miután magamhoz öleltem a kisbabánkat, Berci töltött vele – könnyek között- hosszabb időt. Ez a 45 perc örökre meghatározta a kapcsolatukat, ahogy a mienkét Lujzi születése, Emőkével.
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to="/stories2">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
  </div>;
}
