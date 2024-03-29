import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public46Pic1 from "../../../image/publications/public-46-hero-tengerviz-szulofold.png";
import Public46Pic2 from "../../../image/publications/public-46-tengerviz-szulofold.jpg";

export default function Public46() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public46Pic1} alt="tengerviz-szulofold"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Tengervíz, szülőföld</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2008.  június 06.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications3" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public46Pic2} alt="tengerviz-szulofold"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Többen kérdezik tőlem, hogy lehet-e, érdemes-e messzire, más országba utazni, nyaralni várandósan. Arról már írtam korábban, hogy mire érdemes ügyelni, miket kell indulás előtt végiggondolni. Most egy személyes élményemet szeretném megosztani az olvasóimmal.</b>
                        </p>
                        <p>
                            
                        </p>
                        
      
                    </div>
                </div>
                <p>
                    Hat évvel ezelőtt történt. Nyár volt, július. A lányaim élvezték az iskolaszünetet és izgatottan várták a nyaralást. Olaszországba készültünk, a tengerpartra, oda, ahol a tökéletes kikapcsolódás várt ránk.
                </p>
                <p>
                    A tenger számomra a végtelen nyugalmat jelenti. Az egyetlen hely, ahol minden feszültség és felesleges gondolat kimosódik belőlem. Gyógyít, ha lebegek a tetején, ha a felszíne alá merülök, de akkor is, ha a partján ülök, és csak a tekintetemet hintáztatom a hullámain. Vágytam, hogy újra lássam és újra halljam a hullámok csobbanását.
                </p>
                <p>
                    Egy csodálatos helyre érkeztünk. A kisváros kanyargó, macskaköves utcácskái mellett a tenger vastag, meleg homokos partja várt bennünket. Eszter lányomat akkor már öt hónapja hordtam a szívem alatt. Jól éreztük magunkat mindannyian. Rengeteget úsztunk és hancúroztunk a gyerekekkel a vízben. Nagyokat sétáltunk a több kilométer hosszú parton, beszélgettünk, és közben kagylókat, csigákat gyűjtöttünk. A déli meleg elől a szobáinkba bújtunk, aludtunk, olvasgattunk.
                </p>
                <p>
                    A legjobban a késő délutánokat szerettem. A lemenő nap fényében a kis nyugszékemben ülve néztem, ahogy a lányaink játszanak a vízben az apukájukkal, és közben napoztattam a pocakomat. Elképzeltem a kisbabát, ahogy a magzatvízben lubickol. Nem volt nehéz, hiszen élénken rúgkapált apró kezeivel, lábaival. Nagyon élveztem, hogy várandós vagyok. Kék volt a fürdőruhám, és kék a strandkendőm is, amellyel védtem a pocakomat, ha erősebben sütött a nap. Kék volt az ég, és kék a tenger is.
                </p>
                <p>
                    Úgy éreztem, minden tökéletes. Egyetlen dolog volt, amelyet nem értettem. Általában a nyaralás utolsó napjaiban már szomorúan számolgatjuk az órákat, mennyi is van még, amit itt tölthetünk. Számolgatás most is volt, de én most egyáltalán nem éreztem szomorúságot. Vajon miért? – tűnődtem.
                </p>
                <p>
                    A válasz néhány órával azelőtt érkezett meg, mielőtt a falunkba értünk volna. Ekkor léptük át ugyanis az országhatárt. Az út jobb oldalán egy nagy tábla állt, rajta öles betűkkel: MAGYAR KÖZTÁRSASÁG.
                </p>
                <p>
                    A szülőföldem. Itt születtem, és itt szültem a gyermekeimet.
                </p>
                <p>
                    Noha nem volt semmilyen okom az aggodalomra, nem utalt semmi arra, hogy ez most esetleg másképp történhet, mégis végtelen megkönnyebbülést éreztem, hogy hazaértünk. Akkortól nyert igazán értelmet számomra ez a szó: szülőföld.
                </p>
                <p>
                    Azóta megkülönböztetett figyelemmel kísérem azoknak az ismerőseimnek a várandósságát és szülésük történetét, akik valamilyen oknál fogva nem a szülőhazájukban hozzák világra a gyermeküket.
                </p>
                <p>
                    Eszter nemsokára hatéves lesz. Régóta kérlel minket, hogy vigyük el egyszer a homokos tengerpartra. Most újra csomagolunk. Pontosan oda megyünk, ahol hat évvel ezelőtt jártunk. Alig várom, hogy az ölembe vegyem a kedvenc nyugszékemben, és elmeséljem neki, milyen érzés volt ott üldögélnem, amikor ő még a pocakomban volt.
                </p>
                <p>
                    Aztán kézen fogjuk, és immár öten bóklásszuk végig a hosszú partszakaszt, a legszebb kagylókat keresve.
                </p>
            

                


                <p>
                    <a href="https://nlc.hu/baba/20080610/tengerviz_szulofold/">https://nlc.hu/baba/20080610/tengerviz_szulofold/</a>
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
