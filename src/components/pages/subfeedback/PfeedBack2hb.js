import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackpartners.css"

import FpPartner2 from "../../../image/feedback_partner_2.png";


export default function PfeedBack2hb() {
  return (
    <div>
        <section className="feedback-partner">

<div className="feedback-partner-container">
    <div className="feedback-partner-head">
        <h1>Hoppál Bori -testtudat oktató</h1>
        <h2>Visszajelzés szakmai partnerektől</h2>
    </div>
    <div className="feedback-partner-column">
        <div className="feedback-partner-img-container">
            <img src={FpPartner2} alt=""/>
        </div>
        <div className="feedback-partner-text">
            <p>
                Mindig öröm olyan nőkkel találkozni, akik elhívást éreznek arra, hogy asszonytársaiknak segítséget nyújtsanak, főleg a női létnek egy olyan kiemelten fontos időszakában, mint a várandósság, a szülés és a gyermekágyi időszak.
            </p>
            <p>
                Emőke munkásságát több mint egy évtizede kísérem figyelemmel. Embersége, hitelessége, szakmaisága már a legelején kimagasló volt, de hosszú évek tapasztalatával és az állandó tovább fejlődés igényével párosulva mára a legmagasabb színvonalat képviseli.
            </p>
            <p>
                Számomra megtiszteltetés, hogy a kezdetektől meghívott előadója vagyok a dúlaképzéseknek.
            </p>
            
        </div>
    </div>
    <p>A várandós test élettani változásairól hozok ismereteket. 
        Ez a tudás azért lényeges, mert ennek birtokában a dúlák képesek 
        megnyugtató válaszokat adni kismamáiknak az esetlegesen felmerülő 
        testi panaszokra. A várandós test változásai mellett a női test sokféle szépségének, bölcsességének és saját ritmusainak tiszteletéről, a női körök gyógyító hatásáról, a bennünk lakozó női erőről is mesélek. Nagyon fontosnak tartom, hogy a tárgyi/szakmai tudás mellett egyfajta érzékenység/tudatosság is felébredjen a jelenlévőkben a saját és más nők testi-lelki szükségletei felé és merjenek erre a belső hangra figyelni.🙂 Az otthonos, barátságos helyszín, a meghitt, egymásra figyelős hangulat kiváló közeget teremt az információk mélységében való elsajátításához.

    </p>
    <p>
        Mindig feltöltődve, jó hangulatban jövök el a tréningről.
    </p>

    <div className="feedback-partner-tags">
        <p>Címkék:</p>
        <i className="far fa-calendar"> 2016. 11. 09.</i>
        <Link to="/feedback">Visszajelzések</Link> 
        <Link to="/partneri-visszajelzesek">Visszajelzések szakmai partnerektől</Link>
    </div>

    <div className="feedback-partner-title">
        <h4 className="feedback-partner-title h4">További bejegyzések</h4>
    </div>

    <div className="feedback-partner-pag">
        <Link to="//nyitott-fulekre-es-szivekre-talalok" className="feedback-parent-pag1">Előző</Link>
        <Link to="/egyutt-gondolkodni" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>
    </div>
    )
}
