import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo12 from "../../../image/feedback_szulo_12.png";

export default function FeedBack92HE() {
    return (
        <div>
            <section class="feedback-parent">

<div class="feedback-parent-container">
    <div class="feedback-parent-head">
        <h1>H. E. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div class="feedback-parent-column">
        <div class="feedback-parent-img-container">
            <img src={FszSzulo12} alt=""/>
        </div>
        <div class="feedback-parent-text">
            <p>
                A dúlámtól odaadó támogatást vártam a várandósság kilenc hónapja alatt. 
                Ez alatt azt értem, hogy bármi kérdésem volt, akármikor, és akármekkora hülyeség is, felhívhattam, és ő válaszolt, vagy épp megnyugtatott, vagy épp elgondolkodtatott. Havonta egyszer személyesen is találkoztunk, de lehetett volna többször is ha igényeltem volna, és mindenről szó esett, ami a lelkemben-testemben zajlódott aktuálisan, megismerte a páromat, felkészített bennünket a szülésre, és beszélgettünk a szülővé válásról – ezek olyan dolgok, amivel egy szülésznőt, vagy egy agyonterhelt szülészt nem zaklatnék.
                
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
        <Link to="/feedback91oh" class="feedback-parent-pag1">Előző</Link> 
        
    </div>
    
</div>




</section>
        </div>
    )
}
