import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackpartners.css"
import "../../../CSS/feedbackpartnerssub.css"

import FpPartner1 from "../../../image/feedback_partner_1.png";

export default function PfeedBack1rzs() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <section className="feedback-partner">

<div className="feedback-partner-container">
    <div className="feedback-partner-head">
        <h1>Rózsa Ibolya - IBCLC szoptatási tanácsadó</h1>
        <h2>Visszajelzés szakmai partnerektől</h2>
    </div>
    <div className="feedback-partner-column">
        <div className="feedback-partner-img-container">
            <img src={FpPartner1} alt=""/>
        </div>
        <div className="feedback-partner-text">
            <p>
                Szeretem a dúlákat. Kedves, alázatos, ugyanakkor öntudatos segítők. 
                Alázat alatt szakmai alázatot értek. Azt, amire minden segítő foglalkozású embernek szüksége van. 
            </p>
            <p>
                Fontosnak tartom a dúlatréninget, örülök, hogy újabb jó szemléletű dúlák fognak részt venni a kismamák támogatásában a tréning után. Szeretek hozzátok menni, mindig kellemes a hangulat. 
                Előadóként úgy érzem, nyitott fülekre és szívekre találok nálatok.
            </p>
            <p>
                Minden szüléskörüli segítőnek szüksége van ezekre az ismeretekre. A dúla már a várandósság alatt bizalmi kapcsolatba kerül a kismamával. A bizalom talaján állva a szoptatási kérdésekben is könnyebb segítenie. 
                Különösen fontosak ezek az ismeretek a postpartum dúláknak.
            </p>
            <p>
                A tréningen csupa izgalmas, érdekes kérdést járunk körül. Mindent, ami segíti a dúlákat abban, hogy jobban értsék a szoptatással kapcsolatos legfontosabb alap tudnivalókat, de elsősorban a szemléletre helyezem a hangsúlyt és a jó gyakorlatra.
            </p>
            <p>
                Eddig mindig nagyon jól éreztem magam a tréningeken.
            </p>
        </div>
    </div>
    <p></p>

    <div className="feedback-parent-tags">
        <p>Címkék:</p>
        <i className="far fa-calendar"> 2016. 11. 09.</i>
        <Link to="/feedback">Visszajelzések</Link> 
        <Link to="/partneri-visszajelzesek">Visszajelzések szakmai partnerektől</Link>
    </div>

    <div className="feedback-parent-title">
        <h4 className="feedback-parent-title h4">További bejegyzések</h4>
    </div>

    <div className="feedback-parent-pag">
        <Link to="/kezdetektol-fogva" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>

<div className="sub-feedback-container">
<div className="sub-feedback-partner-head">
        <h1>Rózsa Ibolya - IBCLC szoptatási tanácsadó</h1>
        <h2>Visszajelzés szakmai partnerektől</h2>
    </div>
    <div className="sub-feedback-partner-column">
        <div className="sub-feedback-partner-img-container">
            <img src={FpPartner1} alt=""/>
        </div>
        <div className="sub-feedback-partner-text">
            <p>
                Szeretem a dúlákat. Kedves, alázatos, ugyanakkor öntudatos segítők. 
                Alázat alatt szakmai alázatot értek. Azt, amire minden segítő foglalkozású embernek szüksége van. 
            </p>
            <p>
                Fontosnak tartom a dúlatréninget, örülök, hogy újabb jó szemléletű dúlák fognak részt venni a kismamák támogatásában a tréning után. Szeretek hozzátok menni, mindig kellemes a hangulat. 
                Előadóként úgy érzem, nyitott fülekre és szívekre találok nálatok.
            </p>
            <p>
                Minden szüléskörüli segítőnek szüksége van ezekre az ismeretekre. A dúla már a várandósság alatt bizalmi kapcsolatba kerül a kismamával. A bizalom talaján állva a szoptatási kérdésekben is könnyebb segítenie. 
                Különösen fontosak ezek az ismeretek a postpartum dúláknak.
            </p>
            <p>
                A tréningen csupa izgalmas, érdekes kérdést járunk körül. Mindent, ami segíti a dúlákat abban, hogy jobban értsék a szoptatással kapcsolatos legfontosabb alap tudnivalókat, de elsősorban a szemléletre helyezem a hangsúlyt és a jó gyakorlatra.
            </p>
            <p>
                Eddig mindig nagyon jól éreztem magam a tréningeken.
            </p><i className="far fa-calendar"> 2016. 11. 09.</i>
            <br/>
            <span>Címkék:</span>
        </div>
    </div>
    

    <div className="feedback-parent-tags">
        
        
        <Link to="/feedback">Visszajelzések</Link> 
        <Link to="/partneri-visszajelzesek">Visszajelzések  partnerektől</Link>
    </div>

    <div className="feedback-partner-title">
        <h4 className="feedback-partner-title h4">További bejegyzések</h4>
    </div>

    <div className="feedback-partner-pag">
        <Link to="/kezdetektol-fogva" className="feedback-parent-pag2">Következő</Link>
    </div>
     
</div>


</section> 
    </div>
  )
}
