import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CSS/gyik_kepzes.css";
import { addIcons, IonIcon } from "ionicons";




export default function Gyik() {
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

return (
    
    <div>
      <section className="faq-section faq" aria-label="frequently asked questions">
        <div className="faq-container">

          <div className="faq-card-left">
            <h2 className="h2 section-title">Gyakori kérdések a képzésről<br/><span>Ha kérdésed van, lépj kapcsolatba velem!</span></h2>
            <div className="faq-btn-container">
            <center><Link to="/contact" className="latest-blog-btn">Kapcsolatfelvétel</Link></center>
            </div>  
          </div>

          <ul className="faq-grid-list">

            <li>
              <div className="faq-card">

                <button className="card-action" data-accordion-action>
                  <h3 className="h3 card-title">
                    01. Ha dúlává szeretnék válni, ehhez kell-e valamilyen egészségügyi végzettség?
                  </h3>

                 
                </button>

                <div className="card-content">
                  <p>
                    Nem. 
                  </p>
                  <p>
                    A dúlává válásnak nem feltétele az egészségügyi végzettség, hiszen a dúlák nem látnak el klinikai feladatokat. A dúlatréning első hétvégéjén, a motivációs tréningen tekintenek rá a résztvevők azokra a készségekre és képességekre (pl. empátia, elfogadás, kommunikáció),
                    amelyek szükségesek ahhoz, hogy jól tudjanak segíteni.
                  </p>
                  <p>
                    Az alaptréning során tanulnak a várandósság, a vajúdás és a szülés, valamint a gyermekágyas
                    időszak anatómiai, élettani és lelki változásairól, és magáról a folyamatról, valamint megismerik a
                    leggyakoribb szülészeti beavatkozások előnyeit, hátrányait, kockázatait, tehát informáltak e
                    témákban, de nem rendelkeznek egészségügyi végzettséggel.
                  </p>
                  <p>
                    Ugyanakkor egyre többen érdeklődnek a dúlatréning iránt védőnők és szülésznők is, akiknek van egészségügyi végzettségük,
                    és akiket természetesen szívesen és örömmel látok.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="faq-card">

                <button className="card-action" data-accordion-action>
                  <h3 className="h3 card-title">
                    02. Feltétele a dúlává válásnak a saját szülési tapasztalat?
                  </h3>

                  
                </button>

                <div className="card-content">
                  <p>
                    Nem. 
                  </p>
                  <p>
                    Természetesen a saját szülésélmény nagyon fontos alapja ennek a segítői szakmának, 
                    de nem kizárólagos feltétele. Lehet, hogy valaki még nem szült, de kiváló empatikus készséggel, 
                    remek dúlai attitűddel és alapos önismerettel bír, ezáltal jobb segítő lehet annál, aki ugyan szült már, 
                    de a fentiekkel nem, vagy csak kevéssé rendelkezik.</p>
                </div>

              </div>
            </li>

            <li>
              <div className="faq-card">

                <button className="card-action" data-accordion-action>
                  <h3 className="h3 card-title">
                    03. Szükséges-e a motivációs tréningen akkor is részt vennem, ha van már mögöttem önismereti munka?
                  </h3>
                </button>
                <div className="card-content">
                  <p>
                    Igen
                  </p>
                  <p>
                    Mert ennek a hétvégének több, speciális célja is van.
                  </p>
                  <p>Egyrészt arra tekintünk rá önismereti munka során, hogy a dúlai hivatás gyakorlásához, 
                    milyen képességek, készségek szükségesek, ezekkel ki, hogyan áll, milyen élethelyzetből érkeztek,
                    hogyan fér az életetekbe az, hogy mások szülését kísérjétek, és képet adok arról is, 
                    milyen keretek között, hogyan dolgozik egy dúla, milyen nehézségei, kihívásai és örömei 
                    vannak ennek a segítői hivatásnak a mai egészségügyi rendszerben.
                  </p>
                  <p>
                    Másrészt a csoporttagok megismerhetnek engem, a szemléletemet, a Békés dúlák alapelveit, és
                    így mindenki el tudja dönteni még a dúla alaptréning előtt, hogy szimpatikus-e számára mindaz,
                    amit nyújtani tudok.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div className="faq-card">

                <button className="card-action" data-accordion-action>
                  <h3 className="h3 card-title">
                    04. Még szoptatom a kisbabámat, de nagyon szeretnék részt venni a tréningen.
                     Milyen hosszúak a tréningnapok? Vihetem magammal a babámat is?
                  </h3>

                 
                </button>

                <div className="card-content">
                  <p>
                    A csoportmunka nagyon intenzív és bensőséges együttlétet jelent. 
                    Sok a személyes, intim megosztás és az egész tréning alatt nagyon figyelünk egymásra, 
                    a bennünk és a másokban zajló folyamatokra is. Így azt tanácsolom, 
                    hogy amíg a figyelmed nem tud teljes mértékben önmagadra irányulni, inkább várj meg egy olyan időpontot, 
                    amikor már a babádat jó szívvel tudod másra bízni. Minél többet tudsz beletenni, 
                    annál többet tudsz majd elvinni is belőle.
                  </p>

                  <p>A tréning napjai hosszúak, általában 20-21 óra körül zárunk egy-egy napot, 
                    éppen ezért igény szerint lehetőséget biztosítunk a tréningen az ott alvásra is. 
                    Mivel a tréning elvégzésének feltétele a teljes idejű részvétel, így nem ideális azoknak, 
                    akik még gyakran szoptatnak, vagy a babájuk esti elalvására haza kell érniük.
                  </p>

                  <p>De mivel évente általában két-három alkalommal szervezek tréninget, egyszer mindenkinek 
                    eljön az az idő, amikor teljes figyelmével velünk tud tartani.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="faq-card">

                <button className="card-action" data-accordion-action>
                  <h3 className="h3 card-title">
                    05. A dúla alaptréning elvégzése után már kísérhetek szüléseket?
                  </h3>

                  
                </button>

                <div className="card-content">
                  <p>
                    Igen, ha úgy érzed, hogy erre készen állsz. Ezt a motivációs, önismereti hétvége és a 
                    4 napos alaptréning után mindenki jól meg szokta tudni ítélni. Amennyiben úgy érzed, hogy a 
                    tudásodat még szívesen mélyítenéd, és szeretnél együtt dolgozni tovább a csoportod tagjaival, 
                    örömmel várlak a <Link to="/bekesdulamuhely">Békés Dúlaműhelybe,</Link> ami egy további 150-170 órás közös munkát jelent. 
                  </p>

                </div>

              </div>
            </li>

            <li>
                <div className="faq-card">
  
                  <button className="card-action" data-accordion-action>
                    <h3 className="h3 card-title">
                      06. Ha elvégeztem az alaptréninget, és szüléseket kísérek, hogyan tudom majd feldolgozni azokat, ha erre szükségem lenne? 
                          Tudsz ebben segíteni?
                    </h3>
  
                    
                  </button>
  
                  <div className="card-content">
                    <p>
                        Igen, természetesen.
                    </p>

                    <p>
                      Havi rendszerességgel tartok  <Link to="/esetmegbeszelo">esetmegbeszélőket,</Link> ahol lehetősége van minden dúlának feldolgoznia a munkája során történteket, 
                      választ kapni a kérdéseire és megerősítést kapni a társaitól, ha erre lenne szüksége. 
                      A rendszeres esetmegbeszélés nagyon fontos pillére a munkánknak, rengeteget tanulunk egymás kíséréseinek történeteiből is, 
                      amelyet a legnagyobb titoktartási szabály mellett osztunk meg egymással.
                    </p> 
                    <p>
                      Emellett igény szerint egyéni szupervíziót is biztosítok minden dúla számára.
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
