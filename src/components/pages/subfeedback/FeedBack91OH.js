import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo11 from "../../../image/feedback_szulo_11.png";

export default function FeedBack91OH() {
    return (
        <div>
           <section className="feedback-parent">

<div className="feedback-parent-container">
    <div className="feedback-parent-head">
        <h1>Ő. H. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div className="feedback-parent-column">
        <div className="feedback-parent-img-container">
            <img src={FszSzulo11} alt=""/>
        </div>
        <div className="feedback-parent-text">
            <p>
                Amikor a kislányom megszületett, azt gondoltam, hogy ezt a csodát 
                belülről átélve egyszerűen nem lehet felfogni,  hogy ő egyszer csak itt van velünk, pár perce pedig még nem volt….én ehhez, a teremtő energiához képest oly kicsiny vagyok… Akkor éreztem át először életemben a saját halandóságomat és egyben az élet legteljesebb csodáját, amihez Te is kellettél. A dúla és az anya, baba között ekkor meggyőződésem, hogy létrejön egy olyan sprilituális kötelék, ami életünk végéig elkísér, még ha soha többé nem találkozunk, ez akkor is ott van létezőként. Te akaratlanul is ezeket a sprilituális köteléket gyűjtöd, és nem hiszem, hogy ennél van nemesebb, felemelőbb hivatás.
                
            </p>
        </div>
    </div>
    <p></p>

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
        <Link to="/olyan-mint-egy-baratno-csak-hozzaerto" className="feedback-parent-pag1">Előző</Link>
        <Link to="/felkeszitett-benunnket-a-szulesre" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section> 
        </div>
    )
}
