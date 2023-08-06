import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackpartners.css"

import FpPartner3 from "../../../image/feedback_partner_3.png";

export default function PfeedBack3aa() {
    return (
        <div>
             <section className="feedback-partner">

<div className="feedback-partner-container">
    <div className="feedback-partner-head">
        <h1>Andrek Andrea - pszichológus</h1>
        <h2>Visszajelzés szakmai partnerektől</h2>
    </div>
    <div className="feedback-partner-column">
        <div className="feedback-partner-img-container">
            <img src={FpPartner3} alt=""/>
        </div>
        <div className="feedback-partner-text">
            <p>
                Azért megyek szívesen tanítani a dúlatréningre, 
                mert munkám során tapasztalom azt, hogy milyen sok fiatal párnak van elengedhetetlen szüksége a szülés előtti, alatti és utáni érzelmi kísérésre. A dúla az egyetlen olyan személy, aki betöltheti ezt a rendkívül lényeges híd szerepet. A mai ifjú szülők nagy részének gyakran konfliktusokkal terhelt a saját szüleivel való viszonya, a dúla lehet ezért az a személy, aki a kritikus pillanatokban kizárólag a fiatal szülők igényeit szem előtt tartva tud jelen lenni számukra és meghallani való igényeiket. Az értékítéletes mentes tartás és kísérés készségének eléréséhez alapos képzésre és elmélyült önismereti munkára van szükség. Szakmai tudásomon túl az állandó önismereti munka jelentőségét kívánom közvetíteni ebben a segítő szakmában is.
            </p>
            <p>
                Emőke munkásságát több mint egy évtizede kísérem figyelemmel. Embersége, hitelessége, szakmaisága már a legelején kimagasló volt, de hosszú évek tapasztalatával és az állandó tovább fejlődés igényével párosulva mára a legmagasabb színvonalat képviseli.
            </p>
            <p>Számomra minden tréning felemelő élmény, hiszen elkötelezett, csillogó szemű emberekkel együtt gondolkodni, tapasztalatokat megosztani mindig gazdagító élmény.</p>
            
            
        </div>
    </div>
    <p>

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
        <Link to="/kezdetektol-fogva" className="feedback-parent-pag1">Előző</Link>
        <Link to="/aki-tudja-szakmajat-tudja-kompetenciait" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>

<div className="sub-feedback-container">
    <div className="sub-feedback-partner-head">
        <h1>Andrek Andrea - pszichológus</h1>
        <h2>Visszajelzés szakmai partnerektől</h2>
    </div>
    <div className="sub-feedback-partner-column">
        <div className="sub-feedback-partner-img-container">
            <img src={FpPartner3} alt=""/>
        </div>
        <div className="sub-feedback-partner-text">
        <p>
                Azért megyek szívesen tanítani a dúlatréningre, 
                mert munkám során tapasztalom azt, hogy milyen sok fiatal párnak van elengedhetetlen szüksége a szülés előtti, alatti és utáni érzelmi kísérésre. A dúla az egyetlen olyan személy, aki betöltheti ezt a rendkívül lényeges híd szerepet. A mai ifjú szülők nagy részének gyakran konfliktusokkal terhelt a saját szüleivel való viszonya, a dúla lehet ezért az a személy, aki a kritikus pillanatokban kizárólag a fiatal szülők igényeit szem előtt tartva tud jelen lenni számukra és meghallani való igényeiket. Az értékítéletes mentes tartás és kísérés készségének eléréséhez alapos képzésre és elmélyült önismereti munkára van szükség. Szakmai tudásomon túl az állandó önismereti munka jelentőségét kívánom közvetíteni ebben a segítő szakmában is.
            </p>
            <p>
                Emőke munkásságát több mint egy évtizede kísérem figyelemmel. Embersége, hitelessége, szakmaisága már a legelején kimagasló volt, de hosszú évek tapasztalatával és az állandó tovább fejlődés igényével párosulva mára a legmagasabb színvonalat képviseli.
            </p>
            <p>Számomra minden tréning felemelő élmény, hiszen elkötelezett, csillogó szemű emberekkel együtt gondolkodni, tapasztalatokat megosztani mindig gazdagító élmény.</p>
            
            <i className="far fa-calendar"> 2016. 11. 09.</i>
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
    <Link to="/kezdetektol-fogva" className="feedback-parent-pag1">Előző</Link>
        <Link to="/aki-tudja-szakmajat-tudja-kompetenciait" className="feedback-parent-pag2">Következő</Link>
    </div>
     
</div>

        </section>

        </div>
    )
}
