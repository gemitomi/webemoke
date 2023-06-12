import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/szulesfelkeszites.css"
import SzulesFelk from "../../image/szulesfelkeszites_2.png";
import SzulfelLista from "../../image/szulesfelkeszites_1.png"

export default function SzulesFelkeszites() {
  return (
    <div>
      <section className="szulfel">
      <div className='szulfel-container'>
        
        <div className='szulfel-col-left'>
          <div className="szulfel-text">
            <h1>Szülésfelkészítés</h1>  
            <span>Online is!</span><hr/>
          
            <h3>Szülésre, szülői szerepre való felkészítés</h3>
            
            <p>Gyermeket vállalni, szülőnek lenni az egyik legnagyobb életfeladat. Hatalmas kaland és óriási felelősség, kiapadhatatlan örömforrás és állandó készültség. Örök tanulás magunkról, a világ újrafelfedezése a gyermekeink szemével, találkozás a múltunkkal és a hozott mintáinkkal, ezek továbbörökítése vagy éppen új minták mutatása.</p>

            
            </div>
        </div>
        <div className="szulfel-col-right">
        <div className="szulfel-imgBx">
          <img  src={SzulesFelk} alt='' />
        </div>
      </div>
      </div>
      </section>
      <section className="szulfel-container-bottom">
        <p>Szülő mindenkiből lehet. Nem kell hozzá végzettség, nem egy szakma, amit iskolában tanítanak. Egyre többen készülnek azonban tudatosan erre a szerepre.</p>
        <p>A várandósság egy olyan életszakasz, amelyben igen jelentős változások zajlanak testi és lelki szinten egyaránt. Nem véletlenül nevezzük “más-állapot”-nak is. A kilenc hónap alatt számtalan kérdés, érzés fogalmazódik meg a leendő szülőkben, amelyekre a legkülönbözőbb módon és forrásokból (pl. internet, könyvek, barátok, családtagok tapasztalatai) kereshetik a válaszokat.</p>
        <p>Ahogy megfogalmazódnak a kérdések és megszületnek a válaszok, általában úgy erősödik a szülőkben az a felismerés, hogy az sem mindegy, hogyan és milyen körülmények között születik meg majd a gyermekük. Felelős, informált döntést azonban csak az tud hozni, aki ismeri a lehetőségeit. Ezek ismeretét különösen fontosnak tartom azért is, mert a magyarországi szülészeteken a lehetőségek nagyon különbözőek lehetnek.</p>
      </section>
      <section className="szulfel-help">
        <div>
          <h3>Hogyan és miként tudlak segíteni én ezen az úton?</h3>
          <p>Szülésre és a szülői szerepre felkészítő beszélgetésekre invitállak. Ennek formája lehet <b>egyéni,</b> melyek személyre szabott témákkal, a neked leginkább megfelelő időpontban és általad választott gyakorisággal zajlanak.
          De ha jobban vonz az, hogy nagyobb körben, tapasztalatokat cserélve más párokkal készülődj, akkor válaszd a <b>csoportos</b> szülésfelkészítőt! Bizonyos témákra vendéget is hívok, így a szülés, születés területén dolgozó szakemberek vagy gyakorló szülőtársak is megosztják a tudásukat a csoporttagokkal.</p>
        </div>
      </section>
      <section className="szulfel-list">
      
        <div className="szulfel-listbox">
          <div className="szulfel-list-image">
            <img  src={SzulfelLista} alt='' />
          </div>
          <div className="separator-box"><span className="separator"></span></div>
          <div className="szulfel-h4">
            <h4>Néhány téma a teljesség igénye nélkül:</h4>
          </div>
          
          <div className="szulfel-lista">
          <ul>
            <li>A várandósság testi és lelki változásai</li>
            <li>Kell-e, lehet-e tervezni a szülést?</li>
            <li>Mit kérhetek, mely szempontokat érdemes mérlegelnem, mielőtt eldöntöm, hogy melyik kórházban és kiknek a segítségével szeretném világra hozni a gyemekemet?</li>
            <li>Apák a szülőszobán – Miben segíthet egy társ és miért fontos, hogy ő is biztonságban érezze magát?</li>
            <li>A vajúdás és a szülés szakaszai és ezek jellemzői</li>
            <li>Vajúdástámogatás – vajúdást könnyítő technikák, pozíciók, természetes fájdalomcsillapító módszerek</li>
            <li>“Amint a kezdet, úgy a vég” – azaz intimitás a szülőszobán</li>
            <li>Az újszülött</li>
            <li>Az első órák, napok jelentősége</li>
            <li>A szoptatás</li>
            <li>A gyermekágyas időszak</li>
            <li>Szüleink gyermekéből gyermekünk szülőjévé válni</li>
            <li>Gyermekünk első éve és a családdá válás</li>
            <li>Segítők a szülés körül – a szülésznő, az orvos, a védőnő és a dúla feladatai, kompetenciái, partneri együttműködésük előnyei a szülő nő számára</li>
            <li>Kistestvér születik – a nagyobb gyermek felkészítése a testvér érkezésére</li>
          </ul>
          </div>
        </div> 
      </section>
      <section className="szulfel-bottom-section">
        <div className='szulfel-bottom'>
          <div className="szulfel-bottom-box">
            <p className="szulfel-bottom-text"><b>Szülésfelkészítő csoport csak elegendő jelentkező esetén indul,</b><br/> erről kérlek, érdeklődj a <b>+36 70 9485-481-es</b> számon!
            <br/><br/>
            A foglalkozásokba bármelyik alkalommal bekapcsolódhatsz, de előzetes jelentkezést kérek a lentebbi elérhetőségek valamelyikén.</p>
          </div>
        </div>
      </section>
      <section className="szulfel-btn-section">
        <div className="szulfel-btn-box">
          <h2>Az egyéni szülésfelkészítés érdekel?<br/><span>Hívj vagy írj nekem!</span></h2></div>
          <div className="szulfel-btn-btn">
          <Link to="/contact" class="szulfel-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
      </section>
    </div>
  )
}
