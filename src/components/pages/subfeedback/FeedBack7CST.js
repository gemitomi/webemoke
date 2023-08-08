import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo7 from "../../../image/feedback_szulo_7.png";

export default function FeedBack7CST() {
    return (
        <div>
               <section className="feedback-parent">

<div className="feedback-parent-container">
    <div className="feedback-parent-head">
        <h1>Cs. T. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div className="feedback-parent-column">
        <div className="feedback-parent-img-container">
            <img src={FszSzulo7} alt=""/>
        </div>
        <div className="feedback-parent-text">
            <p>
                Mi a terhesség vége felé kapcsolódtunk össze veled. 
                Nekem igazából előtte nem fordult meg a fejemben, hogy dúlát fogadjunk, 
                de amikor láttam, hogy a páromban mennyi kérdés, mennyi izgalom van, akkor 
                egyértelművé vált, hogy szeretném, ha te is ott lennél mellettünk szüléskor.
            </p>
            <p>És lám milyen jó, hogy így alakult! A hosszúra elhúzódott vajúdás és a hirtelen 
                komoly műtétté vált szülést nem tudom, hogy bírtuk volna nélküled. A férjemnek nyugtatás volt, hogy ott vagy, és kimehet levegőzni, szusszanni bármikor, hogy tudsz válaszolni a hirtelen jött kérdésekre, hogy  mi miért történik vajon. És segíteni tudtad, amikor az első pillanatokat, órát a pici vele töltötte, míg én a műtőben voltam.
            </p>
            <p>Nekem is jó volt, hogy ott vagy, teljesen ki tudtam kapcsolni, nem zökkentett ki semmi a nyugodtságból, még a fájdalom sem.</p>
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
        <Link to="/ha-nem-lettel-volna" className="feedback-parent-pag1">Előző</Link>
        <Link to="/a-dula-nem-veszi-el-a-szuleszno-munkajat" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>
        </div>
      )
}
