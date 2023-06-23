import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo5 from "../../../image/feedback_szulo_5.png";

export default function FeedBack5BB() {
    return (
        <div>
                <section class="feedback-parent">

<div class="feedback-parent-container">
    <div class="feedback-parent-head">
        <h1>B. B. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div class="feedback-parent-column">
        <div class="feedback-parent-img-container">
            <img src={FszSzulo5} alt=""/>
        </div>
        <div class="feedback-parent-text">
            <p>
                Nekem ott sem voltál a szülésemkor, mert csak a felkészülésben kértük a segítségedet, 
                mégis szorosan összekapcsolódsz a szívemben a fiam születésével… 🙂
                
            </p>
            <p>Látod én orvos vagyok, nem éreztem magam tudatlannak, sok szülésen vettem részt korábban. 
                Mégis sokat jelentettél, pedig fogadott szülésznőm is volt. Vele nem sokat találkoztam. Megbeszéltük, hogy mit szeretnék a szüléskor, megmutatta az osztályt, de lehetetlen lett volna lelki felkészítésről beszélni. Veled bármit, bármikor megbeszélhettem. És a férjem is.

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
        <Link to="/feedback4sgy" class="feedback-parent-pag1">Előző</Link>
        <Link to="/feedback6dv" class="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>
        </div>
      )
}
