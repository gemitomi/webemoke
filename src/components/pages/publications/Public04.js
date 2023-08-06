import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public04Pic1 from "../../../image/publications/public-04-hero-nem-konnyu-de-erdemes.png";
import Public04Pic2 from "../../../image/publications/public-04-nem-konnyu-de-erdemes.jpg";

export default function Public04() {
    return (
        <div>
           <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public04Pic1} alt="Nem-konnyu-de-erdemes"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Nem könnyű, de érdemes</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. január 05.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                      <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public04Pic2} alt="Nem-konnyu-de-erdemes"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Az elmúlt hetekben több gyermekvállalás előtt álló nő írt nekem levelet. Ki ilyen, ki olyan kérdéssel keresett meg, a közös bennük talán csak annyi volt, hogy mindannyian keresték az útjukat a várandósság és a szülés körüli információrengeteg sűrűjében.</b>
                        </p>
                        <br/>
                        <p>
                            Néhány napja én is eljátszottam a gondolattal, mi lenne, ha most várnám az első gyermekemet és nem dúla lennék, hanem valami egészen más foglalkozásom lenne. Az elsőszülöttem már elmúlt 18 éves, akkoriban alig voltak alternatívák, így most teljesen másként kezdhetnék hozzá.
                        </p>   
                            
                    </div>
                </div>
                <p>
                    Itt van mindjárt a legfontosabb változások egyike, a világháló, amely – mint az élet számtalan más kérdésénél a tájékozódásban – sokat segíthet gondolom, majd beütöm a keresőbe a várandósság és a szülés szavakat, és máris több ezer oldalra mehetek tovább. Választani nem könnyű, de talán elsőként érdemes megnéznem néhány olyan népszerű portált, amely kifejezetten anyáknak, várandósoknak készült. Mivel lennének konkrét kérdéseim és számítok más anyák tapasztalataira is, örömmel látom, hogy mindegyik általam kiszemelt honlapnak van fórumja, sőt azon belül pont olyan topicok, amelyek engem is érdekelnek.
                </p>
                <p>
                    A lelkesedésem azonban egyre inkább bizonytalanságba fordul, ahogy olvasgatni kezdek. Orvost vagy bábát válasszak? Ha orvost, kit? Ha szülésznőt inkább, akkor kit és hogyan? És egyáltalán, melyik kórházban lehet úgy szülni, ahogy én azt szeretném? Orvosokról, szülésznőkről pro és kontra mindenféle vélemény olvasható, de ezen nincs mit csodálkozni, rendkívül szubjektív az, hogy kinek ki a szimpatikus, mit vár el a szaksegítségtől. Na jó, akkor nézzünk körül gyorsan a szülészetek honlapjain, hátha közelebb jutok a válaszhoz! Szülésfelkészítő foglalkozások itt is, ott is vannak ma már. A témák ígéretesek, de vajon tartalmilag milyenek lehetnek? El kéne menni néhány helyre, meghallgatni, hogy kik és hogyan beszélnek például a szülés alatti fájdalomcsillapításról, a vajúdástámogatásról és a szoptatásról, merthogy engem ezek is érdekelnek. Még jó, hogy a várandósság 9 hónap, bár a munka mellett azért ez a tájékozódás nem kevés időt igényelne.
                </p>
                <p>
                    És mennyi megválaszolatlan kérdésem van még! Olvasgathatok arról érveket és ellenérveket, hogy hol jobb szülni, otthon vagy kórházban, hogy milyen az EDA és melyek a pozitív és negatív hatásai, de arról is, hogy ha császármetszéssel vagy hüvelyi úton jön világra a gyermekem, akkor annak mik lehetnek az előnyei és hátrányai. Sajnos ezeknek a véleményeknek egy részét nem tudom a magam számára hasznosítani, mert túl szubjektívnek érzem, inkább csak az látszik belőle, hogy milyen sokfélék vagyunk mi nők.
                </p>
                <p>
                    Viszont rádöbbenek néhány dologra. Kiderül, hogy szedhetnék többféle magzatvédő vitamint is, hogy a vércukor vizsgálat nem mindenhol egyformán történik, hogy az AFP sokszor téves eredményt ad, így akár felesleges aggodalmat is kelthet bennem, hogy a hálapénzek összege igen tág határok között mozog, hogy a gátmetszés simán elkerülhető, de nem mindenhol, hogy választhatok dúlát is, aki nem ugyanabban segít, mint a szülésznő, és hogy elképesztő különbségek vannak abban, hogy a kórházban töltött napok alatt milyen szoptatástámogatást kapok majd.
                </p>
                <p>
                    Egyre több tehát bennem a kérdés, és akkor még nem is beszéltem a H1N1-oltás körüli egymásnak sokszor ellentmondó információk tengeréről, a világgazdasági válság családokra is kiható következményeiről, a munkából kiesés és a visszaállás nehézségeiről, vagy mindazokról a dilemmákról, amelyekkel akkor találkozom, amikor belépek egy babaáruházba.
                </p>
                <p>
                    Vásároljak-e mellszívót, milyen a jó babakocsi, vegyünk-e kiságyat vagy még sokáig inkább az ágyunkban aludjon velünk a kicsi, melyik hordozókendőt válasszam, kell-e cumisüveg, melyik babakozmetikum a legjobb, egyáltalán szükséges-e külön babasamponnal mosnom majd a csecsemőm haját?
                </p>
                <p>
                    Húha! Hát őszintén mondom, nem lehet könnyű ma kismamának lenni!
                </p>
                <p>
                    Amikor én vártam immár 19 esztendeje az első gyermekemet, jóval kevesebb lehetőség közül választhattam és csak néhány könyvből, újságból tudtam tájékozódni. Nem mondom, hogy az volt a jó, de azt hiszem, bizonyos szempontból egyszerűbb volt akkor a helyzet.
                </p>
                <p>
                    Én két nagy kérdésre kerestem a választ: melyik az a kórház, ahová beengedik a férjemet is a szülésre, és ki az az orvos, aki vállalja a farfekvéses babám hüvelyi úton való világra segítését? Mindkét vágyam teljesült, és ez nagyon jó, de ma már sokkal több mindenre igyekeznék előre felkészülni.
                </p>
                <p>
                    Ami viszont akkor sem és most sem volt kérdés, hogy gyermeket szülni, nevelgetni nagyon-nagyon jó dolog, mi több, számomra a legfontosabb életfeladat.<br/> A másik persze a dúlaság. 
                </p>
                <p>
                    Ebben az évben is a legjobb tudásom szerint szeretném kísérni a szülővé válás útján a hozzám fordulókat, és a tapasztalataim átadásával segíteni mindazokat, akik még e csodás, gyönyörűséges, nap mint nap új kihívásokat és örömöket tartogató vállalás előtt állnak.
                </p>
                <p>
                    S mivel a szülés, születés mind az anya, mind pedig a gyermeke életének meghatározó eseménye, csak bíztatni tudok minden várandós nőt, hogy ne sajnálja rá az időt és éljen a tájékozódás nyomán megismert lehetőségekkel.
                </p>
                <p>Emőke</p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications">Publikációim</Link>
            </div>
        </div>
    </section>  
        </div>
      )
}
