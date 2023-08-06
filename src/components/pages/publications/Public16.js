import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public16Pic1 from "../../../image/publications/public-16-hero-varandosan-nehez-az-alvas.png";
import Public16Pic2 from "../../../image/publications/public-16-varandosan-nehez-az-alvas.jpg";

export default function Public16() {
  return (
    <div>
        <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public16Pic1} alt="varandosan nehez az alvas"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Várandósan nehéz az alvás</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. augusztus 04.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public16Pic2} alt="varandosan nehez az alvas"/>
                    </div>
                    <div className="blog-globale-text">
                        <blockquote>
                            <b><i>Kedves Emőke!</i></b>
                        </blockquote>
                            
                        <blockquote>
                            <i>"Nyolcadik hónapban járó várandós kismama vagyok. (Már a megnevezésen is sokat gondolkodtam. A “várandós” kifejezést találtam a legpontosabbnak, mert valóban várakozom, hogy végre megismerhessem azt a kis embert, akivel már egy ideje együtt élek, aki már egy ideje a mindennapjaim része, és akit remélem, nem nagyon gyötör meg odabent az én idekinti tehetetlenségem.)</i>
                        </blockquote>
      
                    </div>
                </div>
                <blockquote>
                    <i>Igyekszem mozgatni a testemet napközben, tornagyakorlatokat végzek az egészségünk (a baba meg én) és a fáradtság (én) érdekében. Valószínűleg fáradt is vagyok, mert ha olvasni kezdek az ágyban, egy-két oldal után elnyom az álom. Mindezek mellett vagy ellenére egész éjjel csak szendergek. Könnyen felriadok, és akkor rögtön ráébredek minden testi fájdalmamra, illetve óránként járok a mosdóba. Végtelenül kimerít a kialvatlanság, és (bár tudom, ez igazán nem jó gondolat) már rettegek az éjszakától. A reggel a megváltás, amikor végre “igazoltan” lehetek ébren, persze napközben rám tör néha az álmosság, hiszen sok kimarad az éjszakából.<br/>
                        A kérdésem tehát: mit tehetek, hogy ki tudjam pihenni magam?<br/>
                        <br/>Válaszod előre is nagyon szépen köszönve:<br/>Olga</i>
                </blockquote>
                <p>
                    <b>Kedves Olga!</b>
                </p>
                <p>
                    Bár ez téged biztos nem vígasztal, ezzel a panaszoddal nem vagy egyedül.
                </p>
                <p>
                    A legtöbb várandósnak az utolsó hónapban vannak ilyen jellegű alvásproblémái. A megnövekedett méh és annak súlya, a szívre és a keringésre háruló fokozottabb terhelés és az egyéb igen jelentős testi változások önmagukban is elegendőek ahhoz, hogy nehezebb legyen megszakítás nélkül pihenni éjszaka.
                </p>
                <p>
                    A fizikális változások mellett azonban gyakran az anya lelkiállapota is befolyással van arra, hogy hogyan alszik. A várandós nő életének sorsfordító változása előtt áll. Az utolsó hetekben már valószínűleg egyre jobban foglalkoztatja a közelgő szülésének, és az azt követő időszaknak az eseményei. Sokan vannak olyanok, akiknek ha felébrednek, azonnal járni kezd az agyuk (emlékszem én is hányféleképpen képzeltem el ilyenkor, hogyan fogok szülni), és ezért nem tudnak aztán visszaaludni, de az is lehet, hogy az álmok szintjén jelentkeznek nyugtalanító gondolatok vagy feldolgozatlan élmények.
                </p>
                <p>
                    Ingeborg Stadelmann bába szerint az utolsó hónapok alvászavarainak a hátterében az áll, hogy a baba jelez, üzen az édesanyjának az éjszakai mozgolódással, mintegy figyelmeztetve az anyját arra, hogy az éjszakák átalvására egy ideig nem sok esély lesz.
                </p>
                <p>
                    A Magyarországon is megjelent A bába válaszol című könyvében a szerző még valamit megemlít a lehetséges okok közül:
                </p>
                <p>
                    <i>„Nem az anya szervezete képtelen az éjszakai pihenésre, hanem a gyerek nyüzsög addig, amíg az anyja helyzetet nem változtat, vagy nem áll fel. Az anya talán azért nem kap lábikragörcsöket vagy azért nem lesz hólyagproblémája, mert felállt, s közben a gyerek ellátása is javul a méhlepényen keresztül, mert az anya mozgása miatt élénkül a vérkeringés.”</i>
                </p>
                <p>
                    Természetesen, amellett hogy ezt el tudod fogadni, érthető, hogy vágysz a pihenésre.
                </p>
                <p>
                    <b>Mit érdemes megpróbálni?</b>
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">Kerüld a késői vacsorát!</li>
                    <li className="blog-globale-has-before">Minden étkezésnél kövesd azt az elvet, hogy inkább többször keveset!</li>
                    <li className="blog-globale-has-before">Gondoskodj napközben a megfelelő folyadékbevitelről, és ne este igyál sokat!</li>
                    <li className="blog-globale-has-before">Tévézés helyett inkább olvass, relaxálj!</li>
                    <li className="blog-globale-has-before">Elalvás előtt szellőztesd ki alaposan a hálószobát!</li>
                    <li className="blog-globale-has-before">Ha éjjel felébredsz, és rövid időn belül nem tudsz visszaaludni, akkor kelj fel és sétálj, ugyanis nem szerencsés, ha a „nem alvás” és a „nem tudok aludni” jelensége a tudatodban összekapcsolódik!</li>
                    <li className="blog-globale-has-before">Próbáld ki, hogy mikor érzed kipihentebbnek magad, ha napközben is többször el-elszunyókálsz, vagy esetleg mélyebb éjjel az álmod, ha napközben nem alszol!</li>
                    <li className="blog-globale-has-before">Előbbi esetben kapcsold ki a telefonod, és biztosíts magadnak nyugodt körülményeket a napközbeni pihenéshez egy nap akár többször is!</li>
                    <li className="blog-globale-has-before">Ha úgy érzed, hogy vannak megválaszolatlan kérdéseid a szüléssel kapcsolatban, keress olyan embert (pl. dúlát, a párodat, barátnőt vagy a szülésznődet), akivel jó ezekről beszélgetni!</li>
                    <li className="blog-globale-has-before">Készíts nyugtató fürdőt, amely mézben vagy tejszínben elkevert muskátli, levendula, mandarin, rózsa, szantálfa és cédrus illóolajából!</li>
                    <li className="blog-globale-has-before">Kérj a párodtól egy kellemes, lazító masszázst lefekvés előtt!</li>
                    <li className="blog-globale-has-before">Mivel igen sokféle homeopátiás szer létezik az alvászavarok enyhítésére, ezért érdemes lenne egy jó homeopata orvossal is konzultálnod, hogy a Te panaszaidnak leginkább megfelelő szert tudja ajánlani.</li>
                    
                </ul>
                <p>Bízom benne, hogy tudtam segíteni, pihentetőbb napokat és éjszakákat kívánok a gyermekvárás utolsó heteire!</p>
                <p>Emőke</p>

                <p>
                    <a href="https://nlc.hu/baba/20090804/varandosan_nehez_az_alvas_-_a_dula_valaszol/">https://nlc.hu/baba/20090804/varandosan_nehez_az_alvas_-_a_dula_valaszol/</a>
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
