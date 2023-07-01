import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo3 from "../../../image/feedback_szulo_3.png";

export default function FeedBack3NZS() {
    return (
        <div>
            <section className="feedback-parent">

<div className="feedback-parent-container">
    <div className="feedback-parent-head">
        <h1>N. Zs. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div className="feedback-parent-column">
        <div className="feedback-parent-img-container">
            <img src={FszSzulo3} alt=""/>
        </div>
        <div className="feedback-parent-text">
            <p>
                Második gyermekem születéséhez nemcsak szülésznőt választottam, 
                hanem dúlát is. Fontos volt számomra, hogy ismerjem azt az orvost és 
                szülésznőt, akik a szülésemet kísérik, mert nem akartam a szülőszobán 
                idegen arcokat magam körül. Gátvédelemben szerettem volna szülni, 
                ez volt a legfontosabb dolog, amit a szülésznőtől vártam. 
                Mellette  azonban szükségem volt valakire, aki nem tagja az egészségügyi 
                személyzetnek, hanem “civil” – mint én, mégis érti és érzi azt, amin átmegyek 
                vajúdás közben. Lehet akármilyen jó egy szülésznő, ő is a kórházi személyzet 
                része, és bizonyos fokú kiszolgáltatottság érzésem volt vele is.Nem volt tehát kérdés számomra, 
                hogy dúlát fogok választani.Utóbb kiderült, ez azért is jó ötlet volt,mert a páromat is támogatni tudta abban, hogy ő hogyan segíthet nekem.
                
            </p>
        </div>
    </div>
    <p>  
         
        Mindenkinek megvolt a maga szerepe a szülésem körül, a szülésznő CTG-zett, 
        vizsgált, ha kellett segített, miközben a dúla masszírozott, borogatott, bíztatott. 
        Néha, csak egy pillanatra megérintette a vállamat – de ez az érintés mindig a legjobbkor jött.
    </p>

    <p>A dúlai figyelem és törődés egy nehezen megfogalmazható gondoskodás, sokszor csak egy apró mozdulat, egy-egy szó, mondat, ami azonban a szülőszobán hatalmas erőt tud adni.  
        A következő szülésemet is dúlás kíséréssel tervezem, és remélem, hogy olyan háborítatlan és szép élmény lesz mint a második.</p>

        <div className="feedback-parent-tags">
            <p>Címkék:</p>
            <i className="far fa-calendar"> 2016.09.18.</i>
            <Link to="/feedback">Visszajelzések</Link> 
            <Link to="/szuloi-visszajelzesek-1">Visszajelzések szülőktől</Link>
        </div>

    <div className="feedback-parent-title">
        <h4 className="feedback-parent-title h4">További bejegyzések</h4>
    </div>

    <div className="feedback-parent-pag">
        <Link to="/egeszsegesenmegszuletett-a-kislanyom" className="feedback-parent-pag1">Előző</Link>
        <Link to="/egyszerre-nem-felvaltva" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>
        </div>
      )
}
