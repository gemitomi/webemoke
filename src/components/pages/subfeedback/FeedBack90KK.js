import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo10 from "../../../image/feedback_szulo_10.png";

export default function FeedBack90KK() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
               <section className="feedback-parent">

<div className="feedback-parent-container">
    <div className="feedback-parent-head">
        <h1>K. K. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div className="feedback-parent-column">
        <div className="feedback-parent-img-container">
            <img src={FszSzulo10} alt=""/>
        </div>
        <div className="feedback-parent-text">
            <p>
                A dúlám már a terhesség legelejétől segít, és olyan kérdéseket is fel lehetett tenni neki, amivel egy szülésznőt nem illik zavarni. Őt emailben is meg lehetett kérdezni, naponta többször is felhívhattam – olyan, mint egy barátnő, csak hozzáértő. Ért a terhességhez, ért a szüléshez, ért a csecsemőgondozáshoz és ért a lélekhez.
                
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
        <Link to="/annyi-mindent-javasoltál-es-csinaltal" className="feedback-parent-pag1">Előző</Link>
        <Link to="/letrejon-egy-spiritualis-kotelek" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>
        </div>
      )
}
