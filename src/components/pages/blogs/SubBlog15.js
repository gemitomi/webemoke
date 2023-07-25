import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog15Pic1 from "../../../image/blog/blog_15_hero_pozitiv_uzenetek_szerepe_2.png";
import Blog15Pic2 from "../../../image/blog/blog_15_a_pozitiv_uzenetek_2.png";

export default function SubBlog15() {
  return (
    <div>
      <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog15Pic1} alt="A pozitiv uzenetek szerepe a szulesnel - 1."/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A pozitív üzenetek szerepe a szülésnél - 1.</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2013. március 01.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog15Pic2} alt="A pozitiv uzenetek szerepe a szulesnel - 2."/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Sokan nem értik, miért kell manapság felkészülni a szülésre. Hiszen a szülés természetes folyamat, magától is lezajlik. Csakhogy a várandósság alatti vizsgálatok, az orvosi szakkifejezések sokasága, a szülés külső körülményei tele vannak jórészt tudattalan negatív szuggesztiókkal.
                        </p>
                        <p>
                            Az alábbi cikk – melyet két részletben közlök -, a Mindennapi Pszichológia 2009. decemberi számában jelent meg “Emőke, engem is megmasszíroz?” – címmel. Rist Lilla készített velem interjút egy olyan képzés tapasztalatairól, ahol arról tanultam, hogyan lehet pozitív szuggesztiókkal segíteni a vajúdó nőket. A SAS-ok (Szuggesztív Kommunikáció a Szomatikus orvoslásban kurzus) képzés megerősített  abban is, hogy emellett mennyire fontos a negatív üzeneteket is átírni.
                        </p>

                    </div>
                </div>

                <p>
                    – A szülő nő a vajúdás alatt megváltozott tudatállapotba kerül, ami fokozottan fogékonnyá teszi a szuggesztiókra – mondja Békés Emőke abban az aprócska, hangulatos budai lakásban, ahol a hozzá fordulókat fogadja. – Ezeknek a szuggesztióknak csak egy része verbális, gyakran a tudattalan üzeneteket a környezet is hordozza. Jártam olyan kórházban, amelyben a szülőszoba egyik fala tele volt gyógyszerekkel és műszerekkel. Az ilyen környezetbe érkező szülő nőben joggal vetődhet fel a szorongató kérdés:  „Ezekre itt  mind szükség lesz?” Gyakran tapasztalom, hogy az orvosláshoz szükséges eszközök látványa az apákra is erőteljesen hat. Egyik alkalommal, amikor egy párt kísértem gyermekük világra jövetelénél, a szülőszobára érkezésünk után arra lettem figyelmes, hogy az apa csak jön-megy, nyugtalanul járkál. Miután felismertem, hogy a környezettől szorong, és a táskámban lévő szép, színes kendőkkel leterítettem az egyébként nem használt műszeres polcot, csak azután tudott igazán jelen lenni és támogatni a párját.
                </p>
                <p>
                    <i>–  A kórházi személyzet mennyire nézi a strandkendős megoldást jó szemmel?</i>
                </p>
                <p>
                    Mindig mindent megkérdezek a személyzettől és ezt mosolyogva, kedvesen teszem. De a feszültségek elkerülése érdekében talán még fontosabb az, hogy az anya által választott szülészorvossal és szülésznővel már a várandósság idején találkozom. Ez az előzetes kapcsolatfelvétel arra szolgál, hogy bemutatkozzak és megkérdezzem, hogyan viszonyul ahhoz, hogy dúla is lesz a szülésnél, illetve tájékoztatni tudjam őt arról, hogy hogyan és miért leszek jelen. Ilyenkor alkalom adódik az esetleges félreértések tisztázására is. Az egyik leggyakoribb tévhit például az, hogy a dúla otthonszüléseket kísér és csak az intézményen kívüli szüléseket támogatja. Van, aki azzal élcelődik, hogy ha dúla vagyok, akkor biztos valamit fel akarok majd „dúlni”. Holott nincs kompetenciám szakmai kérdésekbe beleavatkozni, az én feladatom teljesen más. Egyre több szülésznő és orvos azonban tisztában van ma már azzal, hogy a dúla egy olyan fontos segítőtárs a vajúdás óráiban, aki jól ismeri az anya illetve a pár elképzeléseit, vágyait, érzéseit, mivel a kapcsolatuk a várandósság ideje alatt rendkívül elmélyül és bizalmassá válik. Ha  pedig az anya és a partnere biztonságban érzi magát, akkor könnyebben és gyorsabban halad a folyamat. Vannak olyan orvosok, akik felismerték, hogy ezzel végül is az ő munkájukat is segítem. Ha pedig ellenséges attitűddel találkozom, akkor először mindig megpróbálom megérteni, hogy aki velem szemben áll, az miért gondolja azt, amit mond. Sokszor tapasztalom egyébként, hogy az ilyenkor megnyilvánuló agresszió vagy elutasítás nem feltétlenül nekem szól. Lehet mögötte frusztráció vagy kimerültség is. A személyzet éppúgy „simogatásra” vágyhat, mint maga a vajúdó. Nem egyszer hangzott már el a kérdés orvosok szájából,  amikor látták, hogy masszírozom a kismama derekát, hogy „engem is megmasszíroz, Emőke?” És néha valóban elég egy-egy megértő mondat, mosoly vagy gesztus, hogy elfogadóbbá váljanak.
                </p>
                <p>...</p>
                <p>Folyt. köv.</p>
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

