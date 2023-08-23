import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog8Pic1 from "../../../image/blog/blog_08_hero_ki_fel.png";
import Blog8Pic2 from "../../../image/blog/blog_08_ki_fel.png";
import Blog8Pic3 from "../../../image/blog/blog_08_a_ki_fel.jpg";

export default function SubBlog08() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
      <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog8Pic1} alt="Ki fel a szulestol?"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Ki fél a szüléstől?</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2016. december 04.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog8Pic3} alt="Ki fel a szulestol?"/>
                    </div>
                    <div className="blog-globale-text">
                        <p><b>Ki fél a szüléstől?</b></p>
                        <p>
                            Talán meglepő, de az elmúlt években egyre gyakrabban tapasztalom azt, hogy nem az anya, hanem maga a szülészorvos.
                        </p>
                        <p>
                            <i>“Fenyegető, hüvelyi szülésre készülök!” </i>– hangzott egy szülész-nőgyógyász szájából, és én döbbenetemből ocsúdva azóta is próbálom értelmezni, vajon mi fenyegeti?
                        </p>

                    </div>
                </div>

                <p>
                    15 éve kísérek szüléseket kórházakban, különböző orvosokkal és szülésznőkkel. Ez alatt az idő alatt nagyon sokféle személyiségű, szemléletű emberrel dolgoztam együtt. Mivel az orvos és  szülésznő is része annak a támogatói körnek, akik az anyát a várandósság és a szülés időszakában körülveszik, fontosnak tartom, hogy megértsem, mit miért, mire alapozva mondanak.
                </p>

                <p>
                    Tegnap egy olyan a várandóssága elején járó nővel találkoztam, aki arra szeretett volna választ kapni tőlem, hogy ő veszélyeztetett-e a jelenlegi állapotában. Nem feladatom és nem is tettem meg, hogy az általa elmondottak alapján ezt eldöntsem, de a kérdése hallatán az a válasz jutott elsőként eszembe, hogy az attól is függ, melyik orvossal beszél.
                </p>

                <p>Mert  a következőket tapasztalom. Vannak olyan orvosok, akik szerint:</p>

                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">“a várandósság folyamatát szigorúan követni kell”,</li>
                    <li className="blog-globale-has-before">“a terhes nő számtalan veszélynek van kitéve”,</li>
                    <li className="blog-globale-has-before">“biztonságosabb a kiírt napon elindítani a szülést, mint tovább várni”,</li>
                    <li className="blog-globale-has-before">“jobb vágni (gátat, hasat), mint nem”,</li>
                    <li className="blog-globale-has-before">“a szülés, akut, életveszélyes állapot”.</li>
                </ul>

                <p>
                    Ez utóbbit egy császármetszéssel foglalkozó szakmai konferencián hallottam egy szólásra emelkedő szülészorvostól, és azonnal sajnálni kezdtem nem csak a vele szülő nőket, hanem őt magát is. Hogyan lehet lelkileg bírni azt, hogy évtizedek óta úgy megy be dolgozni a kórházba, hogy nap mint nap életeket kell mentenie? Mekkora stressz és felelősség ez, hány tonna súlya alatt roskadozik folyamatosan? És ez mit eredményez?
                </p>

                <p>
                    Igen, tudom, hogy szakmailag az orvosok vállalják a felelősséget a szülés kimeneteléért. (Mint ahogy a buszvezetőknek, az óvónőknek, a mérnököknek, a légi irányítóknak és tulajdonképpen minden felnőtt embernek, akinek döntéseket kell hoznia, ugyanennek a tudatában kell élnie és végeznie a munkáját). Persze nem mindegy, hogy egy-egy döntésnek milyen a súlya, hiszen annak következményeit is vállalni kell.
                </p>

                <p>
                    Érthető, hogy a szülők egészséges kisbabát szeretnének, hogy az egyre fejlettebb ultrahang diagnosztikának és a várandósság alatti szűrővizsgálatoknak köszönhetően ezt egyre nagyobb valószínűséggel meg is tudják nekik ígérni, így aztán a szülés folyamatában is minimalizálni szeretnék az orvosok a kockázatokat. Ráadásul az elmúlt években megnőtt a műhiba perek száma, így ez is oka annak, hogy egy döntési helyzetben az orvosok a számukra biztonságosabb utat választják.
                </p>

                <p>
                    Természetesen tisztában vagyok azzal, hogy nem minden várandósság és szülés halad a normális, élettani mederben. Tisztelettel és mély elismeréssel adózok azok előtt az orvosok előtt, akik figyelmükkel, tudásukkal és helyzetfelismerésükkel adott esetben valóban életeket mentenek. Voltam olyan szüléseknél, születéseknél jelen, ahol a beavatkozásoknak nagyon komoly okai voltak, és ahol az orvosok a lehető legjobb döntéseket hozták meg.
                </p>

                <p>
                    De hová vezet az, ha egy egészséges folyamatot félelmekkel telve irányítanak? Mit eredményezhet, ha az orvos fél a felelősségvállalástól, az ügyeletvezetőtől, a felelősségre vonástól, a nemzetközi szakirodalomban megjelent szülészeti és pszichológiai tanulmányok megismerésétől, a nők szüléskor megnyilvánuló érzéseitől vagy a saját megérintődésétől?
                </p>

                <p>
                    Sajnos sok esetben sürgetést, szükségtelen beavatkozásokat, hibás döntéseket és az ezekből fakadó rossz következtetéseket, valamint testileg és/vagy lelkileg megsérült anyákat és babákat.
                </p>

                <p>
                    <b>Jobb félni, mint megijedni?</b>
                </p>

                <p>
                    Értem a mondás igazságát és nem is vitatom. De mégsem hiszem, hogy jó az, ha – miként egy szülészorvos jellemezte az osztálya jelenlegi helyzetét – <i>” a félelem uralja a szülőszobát”</i>.
                </p>
            </div>

            <div className="blog-global-tags">
              <p>Címkék:</p>
              <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog">Blog</Link>
            </div>
        </div>
    </section>
    <section className="consultation4">
        <div className="consultation-btn-h2"><h3>KÉRDEZNI VAGY MONDANI SZERETNÉL VALAMIT AZ OLVASOTTAKKAL KAPCSOLATBAN?<br/><br/><span>Szeretettel várom jelentkezésedet!</span></h3></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
    </section> 

    </div>
  )
}

