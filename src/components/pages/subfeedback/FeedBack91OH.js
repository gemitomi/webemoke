import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo11 from "../../../image/feedback_szulo_11.png";

export default function FeedBack91OH() {
    return (
        <div>
           <section class="feedback-parent">

<div class="feedback-parent-container">
    <div class="feedback-parent-head">
        <h1>Ő. H. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div class="feedback-parent-column">
        <div class="feedback-parent-img-container">
            <img src={FszSzulo11} alt=""/>
        </div>
        <div class="feedback-parent-text">
            <p>
                Amikor a kislányom megszületett, azt gondoltam, hogy ezt a csodát 
                belülről átélve egyszerűen nem lehet felfogni,  hogy ő egyszer csak itt van velünk, pár perce pedig még nem volt….én ehhez, a teremtő energiához képest oly kicsiny vagyok… Akkor éreztem át először életemben a saját halandóságomat és egyben az élet legteljesebb csodáját, amihez Te is kellettél. A dúla és az anya, baba között ekkor meggyőződésem, hogy létrejön egy olyan sprilituális kötelék, ami életünk végéig elkísér, még ha soha többé nem találkozunk, ez akkor is ott van létezőként. Te akaratlanul is ezeket a sprilituális köteléket gyűjtöd, és nem hiszem, hogy ennél van nemesebb, felemelőbb hivatás.
                
            </p>
        </div>
    </div>
    <p></p>

    <div class="feedback-parent-tags">
        <p>Címkék:</p>
        <i class="far fa-calendar"> 2016.09.18.</i>
        <Link to="/feedback">Visszajelzések</Link> 
        <Link to="/feedbackparents1">Visszajelzések szülőktől</Link>
    </div>

    <div class="feedback-parent-title">
        <h4 class="feedback-parent-title h4">További bejegyzések</h4>
    </div>

    <div class="feedback-parent-pag">
        <Link to="/feedback90kk" class="feedback-parent-pag1">Előző</Link>
        <Link to="/feedback92he" class="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section> 
        </div>
    )
}
