import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/anyavavalas.css"

import Frankfurt from "../../image/frankfurt_a.png"
import Ciprus from "../../image/ciprusi-anyuka.jpg"
import Sardinia from "../../image/szardinia-szandra.jpg"


export default function Anyavavalas() {
  return (
    <div>
      <section className="anya-section anya-testi" aria-labelledby="anya-testi-label">
        <div className="anya-container">

          <h2 className="anya-headline-md anya-section-title anya-text-center" id="anya-testi-label">Anyává válni anyanyelven</h2>
          <p className="anya-client-title">Az elmúlt években és napjainkban is nagyon sok fiatal költözik külföldre. 
            Közelebbi vagy a hazájuktól távolabbi országokban élnek, tanulnak, dolgoznak és egyre többen ott alapítanak családot is.<br/>
            <br/>A várandósság minden nő életében egy olyan érzékeny időszak, amikor nagyon sok érzés, gondolat, kérdés fogalmazódik meg a szüléssel,
            szülővé válással kapcsolatban.<br/>
            <br/>Az a vágy, hogy ezekről az anyanyelvén beszélgethessen egy dúlával, néhány éve arra inspirált egy Szardínián élő magyar várandós nőt,
            hogy írjon nekem. Egyáltalán nem számított a távolság, felejthetetlen emlékké vált a közös felkészülés és az együtt töltött összes percünk.
            Az anya ma már Ausztriában él a családjával, de ez mit sem számít, továbbra is tartjuk a kapcsolatot, ír vagy hív, ha pl. gyermekneveléssel kapcsolatos kérdései vannak.<br/>
            
            <br/>Aztán jött egy levél Ciprusról, majd Németországból, skype hívás Amerikából, és legutóbb Franciaországból. 
            Teljesen mindegy, hogy a földgolyó melyik pontjáról, az első levélváltás, beszélgetés után mindig elindult egy csodaszép folyamat,
            egy-egy igazán különleges kapcsolat és kísérés, melynek egyik legnagyobb ajándéka a határokat nem ismerő szeretet és bizalom.<br/>
            
            <br/>Volt, aki a várandósság végén úgy döntött, hogy itthon, a szülőföldjén szüli meg a gyermekét, és volt, aki nem tudott vagy nem akart hazajönni.
            De mindannyian egyetértenek abban, hogy az anyává válás időszakában nagy segítség volt számukra, hogy az anyanyelvükön tudtak beszélni az érzéseikről
            és kaptak információkat a pl. a várandósságról, szülésről, szoptatásról.</p>

          <ul className="anya-slider">

            <li className="anya-slider-item anya-card-container">
                <div className="anya-card anya-card-lg" style={{"background-color": "#e8dee4"}}>

                    <figure className="anya-card-media">
                    <img src={Frankfurt} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                        className="anya-img-cover"/>
                    </figure>

                    <div className="anya-card-content">

                    <h1 className="anya-client-name">"Oly távol vagy tőlem mégis közel..."</h1>
                    
                    <blockquote className="anya-body-sm">
                        „Kisbabátok lesz? De jó! És van már dúlád?“ – kérdezte egy nap a kolléganőm. 
                        „Mi az a dúla?“- kérdeztem vissza én. Valahogy így kezdődött az egész. 
                        Mindez Németországban, Frankfurtban, a cég kávézójában történt, olyan 12 hetes lehettem… 
                        Ezután kolléganőm elmesélte, hogy ők Emőkével szülték meg első gyermeküket és a másodiknál – mikor ők is már kint […]
                    </blockquote>

                    <Link to="/storymother1" className="anya-btn anya-btn-primary">Bővebben</Link>

                    </div>
                </div>
            </li>

            <li className="anya-slider-item anya-card-container">
              <div className="anya-card anya-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>

                <figure className="anya-card-media">
                  <img src={Sardinia} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                    className="anya-img-cover"/>
                </figure>

                <div className="anya-card-content">
                  
                  <h1 className="anya-client-name">Szülni a szülőföldön - a szardiniai élménybeszámoló</h1>
                  <blockquote className="anya-body-sm">
                    A férjem osztrák állampolgár, és van egy panziónk Szardínián. 
                    Első látásra beleszerettünk a szigetbe, és elhatároztuk, hogy ott fogunk letelepedni, családot alapítani.
                    Mikor kiderült, hogy babát várok, gyors fejszámolás után rájöttünk, hogy a pici pont a „főszezonba” érkezik,
                    és mivel a férjem mindenképpen velem akart lenni a nagy napon, szóba se jöhetett, hogy hazajövök szülni.
                  </blockquote>

                  <Link to="/storymother2" className="anya-btn anya-btn-primary">Bővebben</Link>

                </div>
              </div>
            </li>

            <li className="anya-slider-item anya-card-container">
              <div className="anya-card anya-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>

                <figure className="anya-card-media">
                  <img src={Ciprus} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                    className="anya-img-cover"/>
                </figure>

                <div className="anya-card-content">

                  <h1 className="anya-client-name">Anyává válni Cipruson</h1>

                  <blockquote className="anya-body-sm">
                    Mása a nevem. Cipruson élek a kislányommal, és a férjemmel.
                    Mikor arról kezdtünk el beszélgetni a férjemmel, hogy most már idehívnánk magunkhoz a kisbabánkat, 
                    én már akkor tudtam, hogy a férjemen kívül szeretném, ha lenne dúlánk, aki végigkísér ezen az úton minket.
                    Így elkezdtem olvasgatni az interneten, ki is az a dúla és mit csinál. Rátaláltam a Békés Dúlakörre,...
                  </blockquote><br/><br/>
                  <Link to="/storymother3" className="anya-btn anya-btn-primary">Bővebben</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="consultation4">
        <div className="consultation-btn-h2"><h2>Neked is segíthetek?<br/><span>Szeretettel várom jelentkezésedet!</span></h2></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
      </section>
    </div>
  ) 
}
