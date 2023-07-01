import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackpartners.css"

import FpPartner4 from "../../../image/feedback_partner_4.png";

export default function PfeedBack4kg() {
    return (
        <div>
            <section className="feedback-partner">

<div className="feedback-partner-container">
    <div className="feedback-partner-head">
        <h1>Rákócziné Krämer Ágnes - szülésznő</h1>
        <h2>Visszajelzés szakmai partnerektől</h2>
    </div>
    <div className="feedback-partner-column">
        <div className="feedback-partner-img-container">
            <img src={FpPartner4} alt=""/>
        </div>
        <div className="feedback-partner-text">
            <p>
                A Békés Dúlakörben végzett szakemberekről – még ha természetszerűen nem is ugyanolyanok – tudom, hogy magas szinten képzettek, motiváltak, önismeretben dolgozók, azaz összefoglalva: minőségi munka várható tőlük. Ehhez a magam részéről igyekszem a felkért témában nemcsak tudásanyagot, hanem egy kis szemléletet is adni.
            </p>
            <p>
                Rengeteg önjelölt, alulképzett, saját élményeit nem megfelelően kezelő vagy éppen azt kompenzálni vágyó segítő van a “piacon”. Szükségesnek tartom egy olyan tudásanyag elsajátítását, ahol nem az a cél, hogy kis bábákat képezzünk, de az igen, hogy a dúlák a várandóssággal, szüléssel, születéssel, gyerekágyas időszakkal kapcsolatos témákban elmélyült tudással rendelkezzenek, hogyha valamit kérdeznek tőlük, ne a “szomszéd Mari néni” szintjén tudjanak választ adni. Az, aki tudja a szakmáját, tudja a kompetenciáit, pontosan tudja mikor kell máshoz irányítani a hozzá fordulót (Ez velünk, szülésznőkkel is így van.)
            </p>
            <p>
                Számomra megtiszteltetés, hogy a kezdetektől meghívott előadója vagyok a dúlaképzéseknek.
            </p>
            
        </div>
    </div>
    <p>A dúlatréningre sok évnyi tapasztalatomat (amiben benne van a saját személyes tanulásom akár a kognitív szakmai szinten, akár önismereti szinten), a történeteimet, amiket megéltem és a prezentációhoz a szokásos segédeszközeimet viszem.
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
        <Link to="/egyutt-gondolkodni" className="feedback-parent-pag1">Előző</Link>
        <Link to="/a-szulesnel-teljes-legyen-a-tamogatoi-kor" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>
        </div>
    )
}
