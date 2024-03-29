import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog24Pic1 from "../../../image/blog/blog-24-hero-veluk-es-nem-ellenuk.png";
import Blog24Pic2 from "../../../image/blog/blog-24-veluk-es-nem-ellenuk.jpg";

export default function SubBlog24() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog24Pic1} alt="veluk-es-nem-ellenuk"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Velük és NEM ellenük</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. június 20.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog24Pic2} alt="veluk-es-nem-ellenuk"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            11 éve vagyok dúla. 11 éve kísérek különböző kórházakban szüléseket és épp ennyi ideje törekszem arra, hogy meg- és elismertessem a munkánkat a szülészeteken dolgozó egészségügyi személyzettel. Szeretném őket érteni, érezni a problémáikat és ismerni a gondolkodásmódjukat. Ezért ha csak tehetem, meghallgatom őket szülészeti konferenciákon és más fórumokon, előadásokat, beszélgetéseket vállalok a továbbképzéseiken, szakmai kerekasztalokon. 
                        </p>
                        

                    </div>
                </div>

                <p>
                    Minden várandós mamát, aki szeretné, hogy jelen legyek a szülésénél, még a várandósság idején elkísérek az orvosához, kezet nyújtok neki és lehetőséget biztosítok arra, hogy feltegye a kérdéseit, nehogy a szülőszobán alakuljon ki valamiféle feszültség vagy egyet nem értés. Ezt annyira fontosnak tartom, hogy valamennyi tanítványomat, dúlatársamat is erre bíztatom.
                </p>
                <p>
                    Én és a Békés Dúlakör minden dúlája számtalanszor mutattuk már meg a gyakorlatban, hogy nem az orvosok és szülésznők ellenében vagyunk a szülőszobán, hanem az ő munkájukat is segítjük azzal, hogy érzelmi és fizikai támogatásunkkal megkönnyítjük az anya vajúdását, akár lerövidítve ezzel a szülés idejét és csökkentve a beavatkozások szükségességét.
                </p>
                <p>
                    11 év kitartó munkája után most értetlenül állok az elmúlt hetek történéseivel szemben. Egyszerűen nem értem ugyanis, hogy miért van az, hogy gyakran olyan orvosok és szülésznők is lebeszélik a szülőket a dúlaválasztásról, akikről egyébként mi jó szívvel és pozitívan nyilatkozunk az anyáknak.
                </p>
                <p>
                    Hogyan lehetséges az, hogy a közös munka során megvalósul a kölcsönös tisztelet és a (látszólagos?) elfogadása a munkánknak, a szülés végeztével pedig megköszönik a jelenlétünket és a segítségünket, majd később azt mondják az anyának, hogy “én nem szeretem a dúlákat”/”szerintem felesleges választani ilyen segítőt”/”mi mindent tudunk, amit ők”.
                </p>
                <p>
                    Talán nem emlékeznek arra, hogy milyen megnyugtató tud számukra lenni, hogy egy átdolgozott nap után vagy az ügyeleti munkájuk ellátása mellett van valaki, akivel egy időre magára hagyhatják a szülő nőt és párját, míg esznek, az egyéb kötelezettségeiknek tesznek eleget vagy lepihennek? Talán elfelejtik, hogy gyakran nekik is konkrét segítséget nyújtunk azzal, hogy referálunk annak az időszaknak a történéseiről, amikor ők nem tartózkodtak benn a  szülőszobán, és hogy hányszor halljuk a vajúdás óráiban tőlük, hogy ők nem lennének képesek ennyit és így masszírozni, és hogy milyen jó, hogy mi tudjuk, hogy mit kezdjünk az anya félelmével és fájdalmával, mert őket az ilyen lelki dolgok kezelésére nem képezték ki?
                </p>
                <p>
                    Valamiért az anyákkal folytatott beszélgetéseikben gyakran már nem ismerik el azt az egyébként több szülész-nőgyógyász főorvos által is hangoztatott tényt, hogy a dúla az, aki  megszakítás nélkül, folyamatos és személyre szóló jelenléttel és támogatással tud a szülő nő mellett lenni, biztosítva ezzel a legmodernebb szülészeti ellátás egyik fontos elemét.
                </p>
                <p>
                    Persze vannak a konzervatív szemléletű orvosok, aki nem kísérik, hanem vezetik a szülést, a folyamatot csak testi oldalról ismerik és nem hisznek abban, hogy ez egy nagyon mély, a nők életében kiemelkedő jelentőségű esemény. Ők nyilván nem érzik a fontosságát annak, hogy milyen lesz az anya szülés- és a baba születésélménye, s mivel számukra az anyának és a babának csak a fizikai egészsége lényeges, így teljesen értelmetlennek tartják a munkánkat.
                </p>
                <p>
                    De mi van azoknak a fejében, akikhez azért fordulnak bizalommal a várandós mamák, mert a dúláktól hallottak róluk? Bekönyvelik az ajánlást és indulhat a lebeszélés?
                </p>
                <p>
                    Igen, tudom, mi dúlák is sokfélék vagyunk. De ha valakivel már kezet fogtak, ismerik és szemtől szembe el is ismerik a munkáját, akkor a hátunk mögött miért kell elrántani a kezüket?
                </p>
                <p>
                    A teljesen beteg egészségügy helyzetének ismeretében persze vannak válaszaim és sajnos már nincsenek illúzióim…
                </p>
                <p>
                    A hozzám eljutó sok, az anyák által mesélt vagy leírt szomorú szülésélmény ismeretében alapján az bánt a legjobban, hogy ennek sajnos a megszülető családok a legnagyobb kárvallottjai.
                </p>





                
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog2">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
