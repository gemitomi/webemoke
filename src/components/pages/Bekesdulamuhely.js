import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/bekesdulamuhely.css"

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
      </section>
    </div>
  )
}
