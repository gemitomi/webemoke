import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/EgyeniKonzultacio.css"
import "../../CSS/csaladterapia.css"
import CsalTeraphy from "../../image/csaladterapia-img.png";

export default function Csaladterapia() {
  return (
  <div>
     <section className="family-consultation">
      
        <div className='family-consultaion-container'>
          
          <div className='family-text-container'>
            <h1>Családterápia</h1>
            <br/>
            <span>online is</span>
            <hr/>
            <p>
              A rendszerszemléletű pár- és családterápiás képzés elvégzésére a hozzám forduló családok
              inspiráltak.
              <br/>
              Azokkal a párokkal ugyanis, akiket a várandósság és a szülés időszakában dúlaként kísértem, legtöbbször olyan intim, mély bizalmi kapcsolat alakult ki, hogy a későbbiekben is hozzám fordultak, ha valamilyen elakadásuk támadt a családi életük folyamán. Párkapcsolati, nevelési kérdésekkel vagy a tágabb családjukban kialakult nehezebb helyzetekkel kerestek meg, akár évekkel a gyermekük születése után. Azt mondták, hogy hiába nem vagyok családterapeuta, a bizalmuk irányomban olyan erős, hogy velem szeretnék megosztani a történetüket.
            </p>
          </div>
          <div className="family-consultation-image">
            <img  src={CsalTeraphy} alt='' />
          </div>
        </div>
      </section>

      <section className="family-container-bottom">
        <p>
          Ez számomra egyszerre jelentett óriási felelősséget és megtiszteltetést. Úgy éreztem, hogy   ha egy terápiás kapcsolat legfőbb alapja, a bizalom megvan irányomba, akkor a szakmai ismereteket is kötelességem elsajátítani.
          </p><p>
          Jelenleg már a több éves képzési folyamatom végén járok, a vizsgadolgozatom megírása és
          megvédése van még előttem. Szupervíziós támogatással, kíséréssel és terapeutatárssal együtt már vállalhatok és vállalok is párokat, családokat és ez nagy biztonságot jelent. Természetesen nem csak azokat várom, akik a családdá válás időszakában vannak, hanem bárki mást is, aki megtisztel a bizalmával.
          </p><p>
          Szemléletem legfontosabb alapelvei az emberekhez való ítélkezésmentes, empatikus kapcsolódás, az erőforrásközpontú megközelítés és annak a szem előtt tartása, hogy a klienseim vannak otthon a saját életükben és nem én. Szakmai tudásommal és emberi hozzáállásommal tehát abban szeretném segíteni őket a terápiás folyamatban, hogy a számukra legjobb megoldásokat tudják megtalálni az aktuális élethelyzetükre.
        </p>
      </section>

      <section className="family-consultation-citateBx">
        <p className="family-consultation-citate-text">
          
        
        blablabla
        
        
        <h6>Penelope Leach – Picik és kicsik (Park Könyvkiadó 1991)</h6>

        </p>
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
