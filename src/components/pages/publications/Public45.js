import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public45Pic1 from "../../../image/publications/public-45-hero-az-egyes-vajudasi-poziciok-elonyei.png";
import Public45Pic2 from "../../../image/publications/public-45-az-egyes-vajudasi-poziciok-elonyei.jpg";

export default function Public45() {
  return (
    <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public45Pic1} alt="az egyes vajudasi poziciok elonyei"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Az egyes vajúdási pozíciók előnyei</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2008.  június 17.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications3" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public45Pic2} alt="az egyes vajudasi poziciok elonyei"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Ha vajúdáskor szabadon megválaszthatod azt a pozíciót, amelyik a legmegfelelőbb számodra, akkor valószínűleg ösztönösen megtalálod azt a testhelyzetet, amelyik a legkényelmesebb és a baba előrehaladásához is a legoptimálisabb.</b>
                        </p>
                        <p>
                            A vajúdás hosszú óráiban, amikor a fáradtság, esetleg a feladás jelei mutatkoznak rajtad, segít, ha változtatsz a pozíciódon, és egy újabb testhelyzetet, mozgást is kipróbálsz, ez átlendíthet a nehezebb pillanatokon. Mivel az anya ilyenkor nem tudja feltétlenül, hogy mikor lenne jó változtatni, érdemes a pároddal már előzőleg kipróbálni ezeket a pozíciókat, hogy ő is tudjon ebben segíteni.
                        </p>
                        
      
                    </div>
                </div>
                <p>
                    Az alábbiakban a különböző pózok és mozgások előnyeit ismertetem.
                </p>
                <p>
                    <b>Álló helyzet</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Felgyorsíthatja a vajúdást, ha ezt megelőzően az anya feküdt.</li>
                    <li className="blog-globale-has-before">Hasznosítja a gravitációt az összehúzódások alatt és között.</li>
                    <li className="blog-globale-has-before">A kontrakciók (méhösszehúzódások) kevésbé fájdalmasak és sokkal hatékonyabbak</li>
                    <li className="blog-globale-has-before">A második szakaszban növelheti a nyomásingert.</li>

                </ul>
                <p>
                    <b>Séta</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Az álló helyzet előnyein túl a mozgás változásokat idéz elő a medence ízesüléseiben, ezért segíti a magzat forgását és leszállását.</li>
                    
                </ul>

                <p>
                    <b>Álló helyzetben a partnerre, az ágyra vagy a vajúdólabdára támaszkodva</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Megszünteti a hátfájást.</li>
                    <li className="blog-globale-has-before">Sokkal pihentetőbb lehet, mint az állás.</li>
                    <li className="blog-globale-has-before">Tökéletes póz a hát masszírozásához.</li>
                </ul>


                <p>
                    <b>Lassú tánc</b>
                </p>
                <p>
                    (Az anya átkarolja a partnere nyakát, a fejét pedig a mellkasán vagy a vállán nyugtatja. A partner az anya törzsét öleli. Lassan ringatóznak a zene ritmusára.)
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">A fenti előnyökön túl az anyának jobb lesz a közérzete azáltal, hogy egy szeretett személy öleli.</li>
                    <li className="blog-globale-has-before">A zene és a ritmus növeli a komfortérzetet.</li>
                    <li className="blog-globale-has-before">A partner, azáltal, hogy a hátát szorítja, csökkenti a hátfájást is.</li>
                </ul>

                <p>
                    <b>Egyenes ülő helyzet</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Jó pihenőpóz.</li>
                    <li className="blog-globale-has-before">Némileg kihasználja a gravitációt.</li>
                    <li className="blog-globale-has-before">Magzati monitorizálás (CTG) mellett is alkalmazható.</li>
                </ul>

                <p>
                    <b>WC-n vagy szülőszéken ülve</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">A fentieken túl ellazítja a gátat, és ezzel segíti a magzat leszállását a szülőcsatornában.</li>
                </ul>

                <p>
                    <b>Ülő helyzetben támasszal előredőlve</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Megszünteti a hátfájást.</li>
                    <li className="blog-globale-has-before">Jó póz a hát masszírozásához.</li>
                    
                </ul>

                <p>
                    <b>Négykézláb</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Segít a hátfájás megszüntetésében.</li>
                    <li className="blog-globale-has-before">Lehetővé teszi a medence ringatását és a test mozgatását.</li>
                    <li className="blog-globale-has-before">Lehetővé teszi a hüvelyvizsgálatot.</li>
                    <li className="blog-globale-has-before">Megszünteti a nyomást az aranyérben</li>
                </ul>

                <p>
                    <b>Térdelve, előredőlve, a fejet pedig az ágyon vagy a vajúdólabdán nyugtatva</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Ugyanazok, mint a négykézlábas pozíciónál, de ebben a helyzetben kevesebb feszültség nehezedik a csuklóra és a kezekre.</li>
                    
                </ul>

                <p>
                    <b>Oldalfekvés</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Nagyon jó pihenőhelyzet.</li>
                    <li className="blog-globale-has-before">Sétával váltogatva gyorsíthatja a vajúdás menetét.</li>
                    <li className="blog-globale-has-before">Megszünteti az aranyérre gyakorolt nyomást.</li>
                    <li className="blog-globale-has-before">Segít leszállítani a túlzottan megemelkedett vérnyomást.</li>
                    <li className="blog-globale-has-before">Lehetővé teszi a könnyebb lazítást a kitolási erőfeszítések között.</li>
                    <li className="blog-globale-has-before">Fájdalomcsillapítás alkalmazása esetén is biztonságos póz.</li>
                </ul>

                <p>
                    <b>Guggolás</b>
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Megszünteti a hátfájást.</li>
                    <li className="blog-globale-has-before">Használja a gravitációt.</li>
                    <li className="blog-globale-has-before">Tágítja a medencét.</li>
                    <li className="blog-globale-has-before">Nehéz szülés esetén elősegítheti a magzat forgását és leszállását.</li>
                    <li className="blog-globale-has-before">A póz sokat segíthet, ha az anyának nincs nyomási ingere.</li>
                </ul>

                <p>
                    <b>Ölben guggolás</b>
                </p>
                <p>
                    (A partner a karfák nélküli széken ül, az anya szemből a partner ölébe ül, átölelve őt, a lábait a partner combjain szétterpesztve. A partner is átöleli őt, és szétterpeszti a combjait a méhösszehúzódások alatt, lehetővé téve, hogy az anya feneke beférjen a kitárt combjai közé. A kontrakciók között a partner összezárja a térdeit, így az anya kényelmesen rájuk ülhet.)
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">A guggolással összehasonlítva kevesebb feszültség jut a térdekre és a bokákra.</li>
                    <li className="blog-globale-has-before">A fáradt anyának nagyobb támaszt és kisebb erőfeszítést jelent.</li>
                    <li className="blog-globale-has-before">Elősegíti a jobb közérzetet, mivel az anyát egy szeretett hozzátartozója öleli.</li>
                </ul>

                <p>
                    <b>Támogatott guggolás</b>
                </p>
                <p>
                    (Az anya hátával a partnerének támaszkodik, aki a hóna alatt átöleli őt, és teljes súlyát megtartja. Az anya a kontrakciók között a saját lábain áll.)
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Lehetővé teszi, hogy a medence „képlékenyebb” legyen, így segítve a forogva alászálló magzatot.</li>
                    <li className="blog-globale-has-before">Kihasználja a gravitációt.</li>
                    <li className="blog-globale-has-before">Megnyújtja az anya törzsét, nagyobb teret biztosítva a magzat számára.</li>
                </ul>

                <p>
                    <b>Függeszkedés</b>
                </p>
                <p>
                    (A partner a szülőágyra ül úgy, hogy lábait a lábtartón alátámasztja, a combjait széttárva. Az anya háttal a partner lábai közé ül, karjaival annak lábszárait átkarolva. A partner combjaival óvatosan szorítja az anya oldalát. Az anya elengedi magát, s az egész súlyát a partner tartja. A kontrakciók között a saját lábára áll.)
                </p>
                <p>
                    Előnyei:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Ez a póz sokkal kevésbé megterhelő a partner számára.</li>
                    
                </ul>

        


                <p>
                    <a href="https://nlc.hu/baba/20080617/az_egyes_vajudasi_poziciok_elonyei/">https://nlc.hu/baba/20080617/az_egyes_vajudasi_poziciok_elonyei/</a>
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
