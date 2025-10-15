import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../../CSS/EgyeniKonzultacio.css"
import "../../CSS/csaladterapia.css"
import SzulTeraphy from "../../image/szulosegre_csaladi_eletre_felkeszítes.png";

export default function Csaladdavalas() {
  useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
      <div>
        <section className="family-consultation">
      
        <div className='family-consultaion-container'>
          
          <div className='family-text-container'>
            <h1>Szülőségre és a családi életre felkészítés</h1>
            <br/>
            
            <hr/>
            <p>
              Családkísérő dúlaként tapasztalom és anyaként is megéltem, hogy amikor egy nő gyermeket vár, nagyon sokat informálódik, olvas, kérdez. Az internet hihetetlen mennyiségű – sokszor egymásnak ellentmondó – információt, tanácsot kínál, emellett számos szülésfelkészítő, szülőknek szóló önsegítő könyv elérhető, a barátnők, nőrokonok hasznos vagy olykor kéretlen tanácsairól nem is beszélve.
              <br/>
              A várandós nő fantáziáját a szüléshez közeledve egyre jobban foglalkoztatja, hogy milyen lesz a szülés, a kisbaba, a gyermekágyas időszak és hogyan telnek majd a mindennapok családként.
              <br/>
            </p>
          </div>
          <div className="family-consultation-image">
            <img  src={SzulTeraphy} alt='' />
          </div>
        </div>
      </section>

      <section className="family-container-bottom">
        <p>
          Váratlan érzések, kérdések, kétségek jelenhetnek meg. Aggodalom, eufória, lelkiismeretfurdalás, büszkeség, magabiztosság és szorongás, öröm és elbizonytalanodás váltakozhat a szülőkben akár egy napon belül is, hiszen a kisbaba megszületése utáni időszak egyszerre gyönyörű és gazdagító, ugyanakkor sok lemondással és átalakulással járó folyamat.
          </p><p>
          Az első egy-két év úgynevezett normatív krízis, azaz az emberi élet természetes szakaszváltásához kötődő lelki megterhelés, ami bár élettani, mégis gyakran váratlanul éri a párt. 
          Életben kell tartani a kisbabát, gondoskodni a szükségleteiről, felismerni a jelzéseit, megismerni őt. Emellett a szülőknek a saját szükségleteikre is oda kell figyelni, kapcsolódni párként úgy, hogy közben jóval kevesebb idő jut a pihenésre, alvásra is. Ez bizony embert próbáló feladat.
          </p><p>
          A családdá válás folyamatában, amely során lányból anyává, fiúból apává, vagy később az egy gyermekes szülőségből több gyermekes szülőkké kell válniuk, olyan kérdések kerülnek előtérbe, amelyeket talán eddig még nem is gondoltak át tudatosan:
          Mit hoztunk a származási családból? Milyen mintákat szeretnénk tovább vinni és mit nem? Elég jó szülei vagyunk/leszünk-e a gyermekünknek? Hol jelöljük ki a családunk határait? Hogyan alakítsuk ki a mi kis családunk szokásait, rítusait, szabályait? Kitől kérjünk segítséget és miben? A szülői szerepünk megélése mellett hogyan kapcsolódjunk párként egymáshoz is? 
          </p>
          <p><span><b>Miben és hogyan és tudok segíteni?</b></span></p>
          <p>
          25 éve kísérek párokat a szülővé válás folyamatában, erőforrásközpontúan, ítélkezésmentesen és egyén(ek)re szabottan. Mivel sok olyan pár fordult hozzám a családi életükkel kapcsolatos kérdésekkel, elakadásokkal, akiket korábban dúlaként kísértem a gyermekvárás időszakában és a szülés óráiban, megismerkedtem a rendszerszemléletű pá- és családterápia eszköztárával és elvégeztem a Magyar Családterápiás Egyesület képzését.
          </p><p>
          Ha tudatosabban szeretnél a pároddal készülni a szülői szerepre vagy már megszületett a kisbabátok és hasonló kérdések foglalkoztatnak, szívesen segítek, hogy a válaszokat megtaláljátok.
          </p><p>
          Mivel tudom, hogy várandósan vagy egy kisbabával olykor nehéz elindulni otthonról a segítőhöz, a hozzám vezető utat nem kell bejárnotok, én megyek oda, ahol most a legtöbb változás zajlik: az otthonotokba. Ha nagyon nagy lenne köztünk a földrajzi távolság, akár online is kapcsolódhatunk.
        </p>
        <br/>
        <br/>
        <br/>
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
