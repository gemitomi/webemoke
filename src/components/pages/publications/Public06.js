import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public06Pic1 from "../../../image/publications/public-06-hero-adventi-gondolatok-az-elfogadasrol.png";
import Public06Pic2 from "../../../image/publications/public-06-adventi-gondolatok-az-elfogadasrol.jpg";

export default function Public06() {
    return (
        <div>
          <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public06Pic1} alt="Adveni-gondolatok-az-elfogadasrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Adventi gondolatok az elfogadásról</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. december 08.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                      <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public06Pic2} alt="Adveni-gondolatok-az-elfogadasrol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Nagy boldogság számomra, hogy a munkám egyben a hivatásom is, mely számtalan különleges élménnyel ajándékoz meg. Az egyik legizgalmasabb annak a megtapasztalása, hogy mennyire sokszínűek vagyunk mi nők.</b>
                        </p>
                        
                            
                    </div>
                </div>
                <p>
                    Nap mint nap kapok leveleket lányoktól, asszonyoktól. Vannak, akik konkrét kérdésekkel keresnek meg, és olyanok is, akik valamilyen élményüket szeretnék megosztani velem, gyakran éppen a fájdalmas vagy gyönyörű szülésük történetét. Írnak fővárosiak és vidékiek, gyermekre vágyók és sokgyermekes anyák, és hiába tudom, hogy milyen lehetőségeket rejt a világháló, mégis mindig meglepődök, ha valaki a tengerentúlról kér tőlem tanácsot.
                </p>
                <p>
                    Előfordul, hogy csak egy levélváltásnyit „beszélgetünk”, de éppúgy az is, hogy az oda-vissza menő levelekből aztán személyes találkozás, elmélyültebb kapcsolat is lesz.
                </p>
                <p>
                    Azok a nők pedig, akik azért keresnek fel, mert azt szeretnék, hogy segítőjük legyek a várandósság hónapjaiban és a gyermekük születésénél, olyan mély bizalommal ajándékoznak meg, amelyért nem tudok elég hálás lenni. A szülésre való felkészülés időszakában ugyanis nem csak a várandósság testi változásairól, a szülésről, a szülészetekről vagy a szoptatásról beszélgetünk, hanem sok minden másról is szó esik. Megismerhetem a múltjukat, a legfontosabb gyermekkori élményeiket, a családtagjaikkal való viszonyukat, a párjukat, az érzéseiket, a gondolataikat, az örömeiket és az esetleges szorongásaikat.
                </p>
                <p>
                    Szép és izgalmas feladat a különböző egyéniségű, világnézetű, szemléletű nők kísérése. Vannak közülük olyanok, akiket az első perctől nagyon közel érzek magamhoz és olyanok is, akiket a beszélgetések során kedvelek meg egyre jobban, de olyan nővel még nem találkoztam, akit ne szerettem volna meg.
                </p>
                <p>
                    Hogy lehet ez? Azt hiszem, ez a segítő szakma egyik nagy ajándéka. Ha ugyanis valaki hozzám fordul és megtisztel a bizalmával, ha megosztja velem a gondolatait, érzéseit, akkor nekem nem az a dolgom, hogy ítélkezzek vagy véleményt formáljak arról, amit hallok, hanem az, hogy megértsem amit mond és az én szubjektív álláspontomtól távolabb álló gondolatokat is el tudjam fogadni. Ha ez sikerül, akkor egyrészről a tőlem segítséget kérő azt kapja, amit szeretnék adni, tehát azt, hogy a kísérője és nem a vezetője leszek az anyaság felé vezető úton, másrészt én magam is rengeteget tanulok önmagamról és a világról azáltal, hogy mások nézőpontjából is ránézhetek ugyanarra a dologra.
                </p>
                <p>
                    Mindezek a gondolatok annak kapcsán jutottak eszembe, hogy olvasgattam a legutóbbi cikkem nyomán a fórumon megjelent véleményeket és egy kicsit megszólítva éreztem magam.
                </p>
                <p>
                    Mivel rengeteg levelet kaptam az email címemre is, ismét megállapítottam, hogy a szüléstörténetek bizony nagyon megmozgatják a női lelkeket. Ki így, ki úgy reagált az írásra, nyilvánvalóan a saját élettörténetének, élményeinek, megérintődésének megfelelően.
                </p>
                <p>
                    Hogy ki miért gondolja úgy, hogy a várandós meztelen női test visszataszító vagy hogy aki szabadon mozog esetleg táncol a vajúdás alatt az csak bohóckodik, hogy vajon hányan vannak, akik azt várják el az orvostól, hogy irányítsák őket és miért tartja úgy valaki, hogy hangot adni a vajúdás alatt illetlenség, erről érdemes lenne talán még beszélgetni akár itt, akár más fórumon.
                </p>
                <p>
                    Egy ilyen beszélgetésnek azonban szerintem csak akkor van értelme, ha mindannyiunkban megvan az elfogadás mások iránt.
                </p>
                <p>
                    Ha el tudjuk képzelni azt, hogy valakinek az segít a szülésénél, ha zenét hallgat, és van akinek az, ha megmondják neki, hogy mikor mit csináljon. Ha nem tartjuk elképzelhetetlennek, hogy egyikünknek segítség lehet, ha szabadon mozoghat és el tudjuk fogadni, hogy másvalaki pedig az egész vajúdása alatt inkább csendben fekszik. Az pedig, hogy ki miben hisz és ez neki mit jelent, úgy vélem, nem csak a szülésnél, hanem az élet minden területén nagy toleranciát és tiszteletet érdemlő kérdés.<br/>
                    ól tudom, hogy Magyarországon még nem mindenki és nem mindenhol választhatja meg azokat a körülményeket, ahol és ahogy szülni kíván, és ezért biztosan vannak olyanok, akikben ez frusztrációt vagy szomorúságot okoz. Ettől függetlenül szerintem nagyon jó lenne, ha beszélgetni tudnának a nők az alternatíváikról vagy éppen annak hiányáról, ha segíteni tudnának egymásnak az élményeik megosztásával és nem bélyegeznék alternatívnak azt, akinek volt és élt is a lehetőségeivel.
                </p>
                <p>
                    Mert mi nők tényleg ezerfélék vagyunk, mint ahogy a szüléstörténetek is azok. Volt már, hogy a kórházból kilépve az autómban zokogtam, annyira fájt az, ahogy ott az anyával a szülése alatt beszéltek. Máskor boldog vagyok, amikor például azt látom, hogy mekkora szerelem van a pár tagjai között és milyen örömmel várják a kisbabát. Néha energikus és sodró egy vajúdás, néha hosszú és csendes. A kisbabák valahol nagy tiszteletet és gyengédséget kapnak, máshol végig kell néznem, hogy szívtelenül, érzés nélkül, mint egy tárgyat pakolgatják őket ide-oda. Kísérhetek könnyű szüléseket és ott vagyok akkor is, ha a hosszú vajúdás után mégis fájdalmas, de szükségszerű beavatkozásokat kellenek.
                    <br/>Így hát az én élményeim is hol ilyenek, hol olyanok.
                </p>
                <p>
                    Egy biztos, mindig őszintén írok róluk, és nem bánkódom, ha beszámolhatok még olyan háborítatlan és szép szülésekről is, amelyet néhányan mézédesnek éreznek.
                </p>
                <h4>Békés adventi készülődést kívánok mindenkinek!</h4>
                <p>Emőke</p>

                <p>
                    <a href="https://nlc.hu/baba/20091208/nok_a_nokrol_-_adventi_gondolatok_az_elfogadasrol/">https://nlc.hu/baba/20091208/nok_a_nokrol_-_adventi_gondolatok_az_elfogadasrol/</a>
                </p>
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
