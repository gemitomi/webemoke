import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackpartners.css"

import FpPartner5 from "../../../image/feedback_partner_5.png";

export default function PfeedBack5kr() {
    return (
        <div>
            <section className="feedback-partner">

                <div className="feedback-partner-container">
                    <div className="feedback-partner-head">
                        <h1>Dr. Kosztin Árpád szülész-nőgyógyász</h1>
                        <h2>Visszajelzés szakmai partnerektől</h2>
                    </div>
                    <div className="feedback-partner-column">
                        <div className="feedback-partner-img-container">
                            <img src={FpPartner5} alt=""/>
                        </div>
                        <div className="feedback-partner-text">
                            <p>
                                Nekem a munkám 50%-kal könnyebb volt egy dúlával  és egy jó szülésznővel, 
                                mintha egyedül kísértem volna a szülést. Én sem voltam addig dúla-párti, amíg meg nem éltem, hogy milyen egy dúlával együtt dolgozni.
                            </p>
                                
                            <p>
                                A dúla pontosan azt pótolja – és ezt felvállalom bármikor – amit szülésznő és az orvos nem tud nyújtani a szülő nőnek, hogy a szülésnél teljes legyen a támogatói kör.
                            </p>
                                
                            <p>
                                Remélem hogy majd mi, orvosok is felnövünk hozzá és remélem, hogy egyre több szülő nő kéri, hogy legyen mellette dúla a szülésnél, mert a dúlának a jelenléte, egyáltalán semmilyen mértékben nem csökkenti az orvos és szülésznő jelentőségét.
                            </p>
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
                        <Link to="/aki-tudja-szakmajat-tudja-kompetenciait" className="feedback-parent-pag1">Előző</Link>
                    </div>
                    
                </div>

                <div className="sub-feedback-container">
                    <div className="sub-feedback-partner-head">
                        <h1>Dr. Kosztin Árpád szülész-nőgyógyász</h1>
                        <h2>Visszajelzés szakmai partnerektől</h2>
                    </div>
                    <div className="sub-feedback-partner-column">
                        <div className="sub-feedback-partner-img-container">
                            <img src={FpPartner5} alt=""/>
                        </div>
                        <div className="sub-feedback-partner-text">
                            <p>
                                Nekem a munkám 50%-kal könnyebb volt egy dúlával  és egy jó szülésznővel, 
                                mintha egyedül kísértem volna a szülést. Én sem voltam addig dúla-párti, amíg meg nem éltem, hogy milyen egy dúlával együtt dolgozni.
                            </p>
                                
                            <p>
                                A dúla pontosan azt pótolja – és ezt felvállalom bármikor – amit szülésznő és az orvos nem tud nyújtani a szülő nőnek, hogy a szülésnél teljes legyen a támogatói kör.
                            </p>
                                
                            <p>
                                Remélem hogy majd mi, orvosok is felnövünk hozzá és remélem, hogy egyre több szülő nő kéri, hogy legyen mellette dúla a szülésnél, mert a dúlának a jelenléte, egyáltalán semmilyen mértékben nem csökkenti az orvos és szülésznő jelentőségét.
                            </p>
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
                    <Link to="/aki-tudja-szakmajat-tudja-kompetenciait" className="feedback-parent-pag1">Előző</Link>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}
