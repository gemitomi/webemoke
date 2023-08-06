import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public71Pic1 from "../../../image/publications/public-71-hero-az-elalvasrol.png";
import Public71Pic2 from "../../../image/publications/public-71-az-elalvasrol.png";

export default function Public71() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public71Pic1} alt="az-elalvasrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Az elalvásról</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2007. augusztus 07.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications4" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public71Pic2} alt="az-elalvasrol"/>
                    </div>
                    <div className="blog-globale-text">
                      <p>
                          <b>Kedves Emőke!</b>
                      </p>
                      <blockquote>
                          <i>Kislányom nemrégen töltötte be a 8. hónapját, 9100 g és 68 cm. A testi és szellemi fejlődésével semmi problémám, hiszen már 5,5 hónaposan felállt, ma pedig már a bútorok mellett szalad, és kézen fogva is szépen totyog, sokat mosolyog, kiegyensúlyozott baba, amíg el nem érkezik az esti lefekvés ideje.<br/>Soha nem aludta még át az éjszakát, amikor a fogai jöttek, volt, hogy félóránként kelt fel, és csak a cici tudta megnyugtatni. Már kint vannak az alsók, illetve most bújnak a felső fogacskái.</i>
                      </blockquote>
                    </div>
                </div>
                <blockquote>
                    <i>Amikor az oltásokat kapta, mindig belázasodott, így magunk mellé vettük az ágyba, de sajnos erről a mai napig nem sikerült leszoktatnunk. Próbáltuk már, hogy hadd sírjon, de volt, hogy 1-1,5 órán keresztül is keservesen sírt, ezt pedig már én nem tudtam elviselni. Most ott tartunk, hogy a kiságya oda van tolva a mi ágyunk mellé, és az egyik oldalról a rácsot leszedtük, de még így sem a helyén alszik, hanem félig átlógva odabújik hozzám.
                        <br/>Már régen kialakítottuk az esti rutint: 20 órakor pancsi, utána egy kis levezető játék még apával, utána pedig vacsi (260 ml tápszer), amibe belealszik. Legkésőbb 21-21.30-kor már szundikál, de hajnalban 2-3 alkalommal is felkel, és enni kér. Próbáltam csak sima vizet, illetve teát adni neki, de szó szerint ellöki a kis kezeivel a cumisüveget, csak a cicit hajlandó elfogadni.</i>
                </blockquote>
                <blockquote>
                    <i>Kérdéseim a következők lennének:
                    <br/>Normális dolog, hogy egy 8 hónapos baba nem hajlandó egyedül elaludni, csak a cumisüveggel vagy a cicivel a szájában, amikor én altatom? (Ha az apja altatja el, akkor hosszú nyűglődés után elalszik a cumijával is.) Mi lesz, ha már nem fogom szoptatni, akkor mivel fog elaludni?<br/>Mit tehetnék, hogy végre átaludja az éjszakákat?<br/>
                    <br/>A válaszokat előre is köszönöm.<br/>Üdvözlettel: Dóra</i>
                </blockquote>
                <p>
                    <b>Kedves Dóra!</b>
                </p>
                <p>
                    Ahhoz, hogy sikerüljön közelebb kerülni ahhoz, hogy mi az oka annak, hogy a kisbabád éjjel többször is felébred, érdemes néhány dolgot végiggondolni.
                </p>
                <p>
                    A gyermekek egészen 2-3 éves korukig éjjelente többször is felébrednek rövidebb időre, egy-egy álmodó alvási szak után. Az a kérdés, hogy vissza tudnak-e maguktól aludni, vagy sem. Ez általában akkor sikerül, ha ugyanabban a helyzetben ébrednek fel, mint ahogy elaludtak. Ha például a ti esetetekben a kislányod szoptatás közben a karjaidban alszik el, akkor az újbóli elalvásnál is ezt fogja igényelni. A baba ugyanis azt tanulja meg, hogy a cici/cumisüveg egyenlő az alvással. Ezért aztán, ha éjjel felébred, minden alkalommal követelni fogja az altatást, ami neki az evéssel egyenlő. Ebből a helyzetből azonban van kiút.
                </p>
                <p>
                    Nem írtál arról, hogy napközben hányszor, mennyit és általában ugyanabban az időben alszik-e a kislányod. Féléves kor után a kisbaba éjszakánként általában 10-12 órát alszik, nappal pedig kétszer, lehet, hogy hosszabban, de az is lehet, hogy rövidebben. Ha nappal esetleg túl sokat alszik, akkor érdemes felébreszteni.
                </p>
                <p>
                    Nagyon jó, hogy kialakítottátok az esti szertartásokat. Ennek a megszokott ismétlődése, állandósága komoly segítség ahhoz, hogy megértse, most az alvás felé haladtok, az következik. Érdemes azonban a sorrendiséget megcserélni. Mivel a kellemes meleg víz általában elálmosítja a babákat, én az apával való hancúrozás után fürdetném, így az élénk, vidám együttlétet követné egy nyugodtabb, ellazítóbb cselekvés. Ha ragaszkodik ahhoz a baba (és nyilván a megszokás miatt ezt fogja tenni), hogy közvetlenül az elalvás előtt kapjon még enni, akkor törekedj arra, hogy ne evés közben aludjon el, hanem még ébren legyen, amikor az ágyba fekteted, akár a kiságya, akár a családi ágy az alvás helye.
                </p>
                <p>
                    Azt kell ugyanis megértenie, hogy az ágyba fektetés azt jelenti, hogy el kell aludnia. Kezdetben nyilván tiltakozni fog. Ha sír, mindig menj vissza hozzá, és biztosítsd arról, hogy ott vagy a közelében, simogasd meg, de ne vedd ki! Ha újra sír, újra menj oda hozzá, maradhatsz is egy kicsit az ágya mellett, megfoghatod a kezét is, ha akarja, de ne légy aktív. Így fogja megérteni, hogy egyrészt visszajössz, másrészt, hogy nem kelhet fel.
Ehhez bizony sok türelem kell, de a szeretetteljes következetesség meghozza az eredményt, és a baba rövidesen megtanul egyedül elaludni.
                </p>
                <p>
                    Az elalvásban a cumizás is segíthet ésszerű használat mellett. Ha a sírás helyett szop valamit, akkor a cumizás vigaszt jelenthet neki, és nem ártalmas.
                </p>
                <p>
                    Eszter lányom ebben a korában szívesen játszott különböző mintájú rongyikákkal, mígnem észrevettük, hogy az egyik pöttyöset kedveli a leginkább. Az esti szopinál ezt is a kezébe adtam, és hamarosan elmaradhatatlan „társa” lett. Szopás közben gyűrögette, és ez a kellemes élmény a „pötyi rongyi” anyagának simogatásával kapcsolódott össze. Így nem volt nehéz őt elalvás előtt leemelnem a mellemről, hiszen a rongyit vitte magával az ágyba, és ott pillanatok alatt elaludt. (Eszter most 4 és fél éves, a „pötyi rongyi” már lyukas és áttetsző, de még mindig elmaradhatatlan az elalvásnál, sőt, az óvodai beszokásnál is komoly szolgálatot tett.)
                </p>
                <p>
                    De ilyen nagy érzelmi jelentőségű tárgy lehet valamilyen puha állatfigura is. A legfontosabb, hogy legalább kettő (minimum egy tartalék is) legyen belőle. A kisgyermekek alvásáról, a családi ágyról és az alvásproblémákról bővebben Patricia Noll – Hartmut Horn: Aludj, kicsim, aludjál… című könyvében olvashatsz, amely az Egmont Kiadó gondozásában jelent meg 2001-ben. Az e témával foglalkozó könyvek közül a legjobbnak tartom, szívből ajánlom.
                </p>


                <p>
                    <a href="https://nlc.hu/baba/20070807/az_elalvasrol/">https://nlc.hu/baba/20070807/az_elalvasrol/</a>
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
