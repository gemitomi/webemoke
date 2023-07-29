import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/bekesdulamuhely.css"
import "../../CSS/bekesdulaslider.css"

import BekesDulaWork from "../../image/dula_muhely.png"

export default function Bekesdulamuhely() {
  return (
    <div>
      <section className="bekesdulamuhely">

        <div className="bekesdulamuhely-container">
            <div className="bekesdulamuhely-head">
                <h1>Békés Dúlaműhely</h1>
                <h2>továbbképzés</h2>
            </div>
            <div className="bekesdulamuhely-column">
                <div className="bekesdulamuhely-img-container">
                    <img src={BekesDulaWork} alt=""/>
                </div>
                <div className="bekesdulamuhely-text">
                    <p>
                        A Békés Dúlaműhely a már <Link to="/bekesdulatrening">alapszintű tréningen</Link> részt vett 
                        dúláknak nyújt továbbképzési lehetőséget.
                    </p>
                    <p>A csoport tagjai havonta egy napot töltenek együtt azzal a céllal, hogy saját tudásuk, tapasztalataik megosztásával, 
                      illetve meghívott előadók segítségével dolgozzák fel a dúlai hivatással kapcsolatos témákat. A műhely tematikája 
                      nagyrészt előre kidolgozott, emellett a résztvevők igényeinek megfelelően áll össze. Az adott témákat közös munka 
                      keretében dolgozzuk ki, melyek helyzetgyakorlatokkal és az aktuális esetek feldolgozásával egészülnek ki.
                    </p>
                </div>
            </div>

            <p>A műhely 2009 tavaszán alakult. A csoport tagjai a 15 alkalmas továbbképzés után sikeres írásbeli és szóbeli záróvizsgát 
                tettek és ezzel Békés szülésfelkészítő és szüléskísérő dúlává váltak, valamint tajaivá válhatnak a Békés Dúlakörnek. 
                Azóta további hat csoport végzett a műhelyben, három csoport pedig most végzi a továbbképzést.
            </p>

            <div className="bekesdulamuhely-details">
                <div className="bekesdulamuhelyBx">
                    <ul className="bekesdulamuhely-list">
                        <li className="bekesdulamuhely-has-before">Ha részt vettél már alapszintű dúlatréningen (nem feltétele a jelentkezésnek az, hogy hol és mikor), és szeretnéd elmélyíteni a tudásodat, bővíteni az ismereteidet,</li>
                        <li className="bekesdulamuhely-has-before">ha gyakorló dúlaként fontosnak érzed, hogy megoszthasd a tapasztalataidat a társaiddal vagy éppen mások tapasztalataiból szeretnél tanulni,</li>
                        <li className="bekesdulamuhely-has-before">ha vágysz arra, hogy együtt dolgozz és beszélgess olyanokkal, akik ugyanígy éreznek, és</li>
                        <li className="bekesdulamuhely-has-before">szeretnél tagja lenni egy elfogadó női körnek,</li>
                        
                    </ul>
                    <h4>szeretettel várlak a Békés Dúlaműhelybe!</h4>
                </div>
            </div>

            <p>A műhely vezetője: <b>Békés Emőke</b></p>


        </div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="consultation-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
        <section className="dulaslider-section dulaslider-testi" aria-labelledby="dulaslider-testi-label">
    <div className="dulaslider-container">
      <ul className="dulaslider-slider">
        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "#e8dee4"}}>
            <div className="dulaslider-card-content">     
              <blockquote className="dulaslider-body-sm">
              A műhelymunka legnagyobb hozadéka számomra az a szemléletmód, ami átitatott minden témát. Alázat, szeretet, mellé lépés és hogy abban segítsek, amiben kérik. Szelídültem és nyitottabb lettem. Egyre inkább áthat ez a megértő, elfogadó hozzáállás az élet minden területén.
              </blockquote>
            </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              Egy mély és tartalmas önismereti utat jártam be az elmúlt másfél évben. Rengeteget tanultam, és nem csak a dúlaságról, hanem önmagamról is. Mély blokkok oldódtak bennem, és már tudom, merre tartok. Megvan a célom és élvezem, amit csinálok!
              </blockquote>
           </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              Teljesen más ember lettem, mint amikor idejöttem. Megváltozott az embertársaimhoz való viszonyom.<br/>
              </blockquote><br/><br/>
            </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              Az itt töltött másfél évnek köszönhetően a párkapcsolatomban, a szüleimmel és a gyermekeimmel is teljesen átalakultak a kapcsolataim.<br/>
              </blockquote><br/><br/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
      </section>
 
    </div>
  )
}
