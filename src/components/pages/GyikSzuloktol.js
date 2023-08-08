import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CSS/gyik_kepzes.css";
import { addIcons, IonIcon } from "ionicons";

export default function GyikSzuloktol() {
    useEffect(() => {
        const toggleAccordion = (event) => {
          event.currentTarget.classList.toggle("active");
        };
    
        const accordionAction = document.querySelectorAll("[data-accordion-action]");
        accordionAction.forEach((element) => {
          element.addEventListener("click", toggleAccordion);
        });
    
        return () => {
          accordionAction.forEach((element) => {
            element.removeEventListener( "click", toggleAccordion);
          });
        };
      }, []);
    
    return (
        
        <div>
          <section className="faq-section faq" aria-label="frequently asked questions">
            <div className="faq-container">
    
              <div className="faq-card-left">
                <h2 className="h2 section-title">Gyakori kérdések a szülőktől<br/><span>Ha kérdésed van, lépj kapcsolatba velem!</span></h2>
                <div className="faq-btn-container">
                <center><Link to="/contact" className="latest-blog-btn">Kapcsolatfelvétel</Link></center>
                </div>  
              </div>
    
              <ul className="faq-grid-list">
    
                <li>
                  <div className="faq-card">
    
                    <button className="card-action" data-accordion-action>
                      <h3 className="h3 card-title">
                        01. Mi a különbség a dúla és a szülésznő tevékenysége között?
                      </h3>
    
                     
                    </button>
    
                    <div className="card-content">
                      <p>
                        A dúla és a szülésznő lehetőségei és feladatai nem ugyanazok, épp ezért jól kiegészítik egymást.
                        </p><p>
                        A <b>szülésznő</b> az, aki szakmai szempontból kíséri a szülés folyamatát, tehát ő az, aki szívhangot hallgat, belső, hüvelyi vizsgálatot végez, ha szükséges gyógyszert ad vagy infúziót köt be. Ő áll kapcsolatban a szülészorvossal, és amíg az orvos nincs jelen, ő referál rendszeresen az anya állapotáról. A szülésznő védi a gátat és ő (vagy az orvos) kezébe érkezik a kisbaba. A szülésznővel az anyák általában kevesebb alkalommal találkoznak, mint a dúlával, hiszen sok esetben csak a várandósság vége felé veszik fel velük a kapcsolatot.
                        </p><p>
                         A jelenlegi törvényi szabályozás értelmében az állami kórházakban nem választható szülésznő. Ez azt jelenti, hogy egy adott műszakban egy szülésznő egyszerre több anya vajúdását is nyomon követi, emellett számos adminisztrációs és egyéb teendő is hárul rá. Emiatt szinte lehetetlen, hogy megszakítások nélkül tudja támogatni a szülő nőt. A magánintézmények nagyobb részében lehet szülésznőt is választani, de itt is előfordulhat, hogy egy időben több szülést is kísérnek.
                        </p><p>
                        A dúla az az egyedüli kísérő, aki egy időben biztosan csak egy szülő nőre figyel. A vajúdás alatt megszakítás nélküli jelenlétével érzelmileg, fizikailag és információkkal is támogatja az anyát, masszíroz, borogatást készít, vajúdási pozíciókat javasol, ha szükséges, biztosítja az anya illetve a párja számára a lehető legideálisabb környezetet és miliőt, bátorítja és megerősíti az anyát és –
                        ha kell – átlendíti őt a nehezebb pillanatokon.
                        </p><p>
                        Különbség a tevékenységünkben az is, hogy a szülésznők a gyermekágyas hetekben már nem
                        kísérik az anyát, azaz nem mennek el az otthonukba, feladatuk a kórházi szülés után lezárul.
                        </p><p>
                        A <b>dúla</b> akár már a fogantatás előtti időszaktól, a várandósság teljes ideje alatt, a szülés óráiban, valamint a gyermekágyas időszakban is a szülők rendelkezésére áll.
                      </p>
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div className="faq-card">
    
                    <button className="card-action" data-accordion-action>
                      <h3 className="h3 card-title">
                        02. Miért érdemes dúlát választani, ha ott lesz velem a férjem is a szülésnél?
                      </h3>
                    </button>
    
                    <div className="card-content">
                      <p>
                        A tapasztalataim és a szülői visszajelzések egyértelműen azt mutatják, hogy a dúla jelenléte mindkettőjüknek nagyon sokat jelent, mert azt segíti, hogy mindketten biztonságban érezhessék magukat. <b>Az apa ugyanis nem kísérő, hanem az egyik, érzelmileg bevonódó szülő. A dúla tehát a pár kísérője.</b>
                        </p><p>
                        Jelenléte egy nagyon érzékeny, állandó figyelmet és jó helyzetfelismerést igénylő szolgálat. Ez azt jelenti, hogy mindig tudnia, éreznie kell, hogy a párnak mire van szüksége. Ha ők ketten szeretnének együtt lenni, ha az anya a párjától kéri a támogatást, akkor hátrébb lép és szinte észrevétlenné válik. Ha az anyának a dúlai támogatásra van szüksége, akkor ezt úgy teszi, hogy az apa se veszítse el a kompetenciaérzését, hiszen attól, hogy a vajúdó nő a dúlától kéri mondjuk a masszírozást, attól számára a párja jelenléte érzelmileg még nagyon fontos.
                        </p><p>
                        A vajúdás és a szülés óráiban az apák általában igénylik, hogy folyamatosan kapjanak
                        információt, megerősítést arról, hogy a folyamat hol tart és hogyan halad. Az, hogy van mellettük valaki, aki megszakítás nélküli jelenlétével és figyelmével követi a folyamatot, akitől lehet kérdezni, illetve aki akkor is a párjuk mellett marad, ha ők valamiért egy kis időre kilépnének a szülőszobából, nagyon megnyugtató számukra. A dúla tehát az apa jóllétére is figyel.
                        </p>
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div className="faq-card">
    
                    <button className="card-action" data-accordion-action>
                      <h3 className="h3 card-title">
                        03. Egyedül menjek először hozzád vagy vihetem a páromat is?
                      </h3>
    
                      
                    </button>
    
                    <div className="card-content">
                      <p>
                        Már az első találkozáskor nagy szeretettel várom a párodat is. Semmi sem kötelező, de mindenre van lehetőség, így minden alkalommal eldönthetitek, hogy egyedül vagy együtt jöttök. Bármi jó, ami nektek jó.
                        </p><p>
                        Arra is van példa, hogy csak az apa kér tőlem egy beszélgetést, és akkor az anya nem jön, hiszen lehetnek olyan kérdések, vagy megosztani valók, amelyek csak őt foglalkoztatják.
                        </p><p>
                        Általában a felkészülésben az apák is örömmel részt vesznek, és ez nem csak azért fontos, mert igénylik a praktikus vagy konkrét információkat, hanem azért is, mert ez segíti a kompetens szülővé válás folyamatát.
                        </p>
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div className="faq-card">
    
                    <button className="card-action" data-accordion-action>
                      <h3 className="h3 card-title">
                        04. Hány alkalommal érdemes felkeresni téged a szülés előtt?
                      </h3>
    
                     
                    </button>
    
                    <div className="card-content">
                      <p>
                        A találkozások gyakorisága és egy-egy találkozó időtartama mindig a te/ti igénye(ite)k szerint alakul. Számomra az a fontos, hogy ne maradjanak benned ki nem mondott gondolatok vagy fel nem tett kérdések.
                        </p><p>
                        Lehetőséget biztosítok arra, hogy a várandósság, a szülés és a gyermekágyas időszakkal
                        kapcsolatos információkon túl kívül minden olyan témát megbeszéljünk, ami foglalkoztat ebben az életszakaszban.
                        </p><p>
                        A szülővé válás időszaka sok olyan kérdést, gondolatot érlel a leendő anyában és apában, amiről
                        szívesen beszélnek, ha arra figyelmet szentelünk. Ilyen pl. az otthonról hozott szülői minták, az anyaság vagy karrier kérdése, a különböző gyermeknevelési elvek, a szexualitás témaköre, de hosszan sorolhatnám még.
                        </p><p>
                        Alapvetően tehát a találkozókon mindig azzal a témával foglalkozunk, amit az anya vagy az apa igényel. Ezeknek a találkozóknak az is a célja, hogy egymást minél jobban megismerhessük és épüljön köztünk a bizalom. Ebből adódóan elmondható, hogy minél gyakrabban találkozunk, annál inkább el tud mélyülni a kapcsolat, és így én személyre szabottabban tudok segíteni.
                        </p><p>
                        Általánosságban azt mondanám, hogy kb. havonta szoktunk találkozni a hozzám forduló
                        anyákkal/párokkal, de van, akivel ennél gyakrabban vagy ritkábban.
                        Egyre többen keresnek meg már a várandósságuk előtt is, a fogantatásra készülve.
                    </p>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div className="faq-card">
    
                    <button className="card-action" data-accordion-action>
                      <h3 className="h3 card-title">
                        05. Hogyan fogadják az orvosok a kórházakban a dúlák jelenlétét?
                      </h3>
    
                      
                    </button>
    
                    <div className="card-content">
                      <p>
                        Jelenleg ez nagyon változó. A munkaerőhiány és az ebből fakadó leterheltség miatt még
                        sohasem volt ennyire szüksége a támogatásunkra az egészségügyi személyzetnek is, mégis
                        sokszor nagy ellenállásba ütközünk.
                    </p>
                    <p>
                        Számos előítélet van a tevékenységünkkel kapcsolatban, és ezek sokszor valóban nem
                        tapasztalati tényeken alapulnak.
                    </p>
                    <p>
                        A <Link to="/dulakor">Békés Dúlakör</Link> szakmai vezetőjeként rendszeresen részt veszek szakmai fórumokon,
                        konferenciákon, ahol pontosan informálhatom az egészségügyben dolgozókat a dúlahatásról és
                        a kompetenciáinkról. (Bővebben lsd. még a <Link to="/dulahatas-kutatasok-eredmenyek">Dúlahatás – kutatások, eredmények</Link> c. aloldalt.) 
                    </p>
                    <p>
                        Igyekszem a szülészeti osztályok vezetőivel személyes egyeztetéseken tisztázni, hogy az általam képzett dúla <Link to="/dulakor">(a Békés Dúlakör tagjai)</Link> milyen keretek között dolgoznak, mit tesznek és mit nem. Professzionális működésünket a Szervezeti és Működési Szabályzatunk, Etikai Kódexünk elfogadása és az érvényes tagsági igazolványuk is biztosítja.
                      </p>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                    <div className="faq-card">
      
                      <button className="card-action" data-accordion-action>
                        <h3 className="h3 card-title">
                          06. Kísérsz-e jelenleg szüléseket?
                        </h3>
      
                        
                      </button>
      
                      <div className="card-content">
                        <p>
                            Szüléseket már nem kísérek az unokám megérkezése óta. A lányom szülésének kísérése olyan katartikus élmény volt számomra, ami felgyorsította azt a folyamatot, amire a kiégés megelőzése érdekében amúgy is készültem. De teljes szívemmel és minden igyekezetemmel segítem azóta                     is a hozzám fordulókat a várandósság hónapjaiban, a gyermekágyas időszakban vagy a későbbi életszakaszokban dúlaként, illetve hamarosan már végzett pár- és családterapeutaként is.
                        </p>
                        
                      </div>
      
                    </div>
                  </li>

                  <li>
                    <div className="faq-card">
      
                      <button className="card-action" data-accordion-action>
                        <h3 className="h3 card-title">
                          07. Ha igényeljük, eljössz-e az otthonunkba a gyermekágyas időszakban?
                        </h3>
      
                        
                      </button>
      
                      <div className="card-content">
                        <p>
                            Igen, természetesen.
                        </p>
                        <p>
                            Számomra egy család kísérése addig tart, amíg szükségük van rám. A szülés után a legtöbb pár szeretné, hogy ellátogassak az otthonukba. Ez a találkozó lehetőséget biztosít arra, hogy átbeszéljük a szülés élményét, és legjobb tudásom szerint igyekszem megválaszolni minden olyan kérdést, amely a kisbaba ellátása vagy a szoptatás körül felmerül.
                        </p>
                        <p>
                            Mindemellett ezek a találkozók lehetőséget biztosítanak arra is, hogy kimondódhassanak az
                            anyává, apává válás folyamata során megélt érzések, kérdések. Mivel a gyermek születése körüli
                            időszakot élettani, azaz normatív krízisnek tekintjük, teljesen természetes, sőt, preventív jellegű,
                            ha a párok nyíltan, őszintén beszélhetnek egy olyan segítővel, aki maximális elfogadással
                            támogatja őket a szülővé válás folyamatában.
                        </p>
                        
                      </div>
      
                    </div>
                  </li>
    
              </ul>
    
            </div>
          </section>
        </div>
      )
}
