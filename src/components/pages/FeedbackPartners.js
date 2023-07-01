import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/feedback.css";

import FpPartner1 from "../../image/feedback_partner_1.png";
import FpPartner2 from "../../image/feedback_partner_2.png";
import FpPartner3 from "../../image/feedback_partner_3.png";
import FpPartner4 from "../../image/feedback_partner_4.png";
import FpPartner5 from "../../image/feedback_partner_5.png";
import PartnerVissza from "../../image/partner_vissza.png";


export default function FeedbackPartners() {
    return (
        <div>
          <section className="feedback-section">
            <section className="feedback">
    
              <div className="feedback-slide-container">
                <div className="feedback-hero">
                    <h1 className="feedback-title">Visszajelzések szakmai partnerektől</h1>
                </div>
                <div className="feedback-slide-content">
                    <div className="feedback-card-wrapper">
                        <div className="feedback-card">
                            <div className="feedback-image-content">
                              <span className="feedback-overlay"></span>

                              <div className="feedback-card-image">
                                <img src={FpPartner1} alt="#" className="feedback-card-img"/>
                              </div>
                            </div>

                            <div className="feedback-tags">
                              <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                              className="img-feed-cover"/>
                              
                            </div>

                            <div className="feedback-card-content">
                              <h2 className="feedback-name">Nyitott fülekre és szívekre találok </h2>
                              <p className="feedback-description">Szeretem a dúlákat. 
                                Kedves, alázatos, ugyanakkor öntudatos segítők. 
                                Alázat alatt szakmai alázatot értek. 
                                Azt, amire minden segítő foglalkozású [...]</p>
                              <h3 className="feedback-author">Rózsa Ibolya - IBCLC szoptatási tanácsadó</h3>
                              <button className="feedback-button"><Link to="/nyitott-fulekre-es-szivekre-talalok">Bővebben</Link></button>
                            </div>
                          </div>

                          <div className="feedback-card">
                              <div className="feedback-image-content">
                                  <span className="feedback-overlay"></span>

                                  <div className="feedback-card-image">
                                      <img src={FpPartner2} alt="#" className="feedback-card-img"/>
                                  </div>
                              </div>

                              <div className="feedback-tags">
                                  <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                                  className="img-feed-cover"/>
                                  
                              </div>

                              <div className="feedback-card-content">
                                  <h2 className="feedback-name">Kezdetekől fogva</h2>
                                  <p className="feedback-description">Mindig öröm olyan nőkkel találkozni, 
                                      akik elhívást éreznek arra, hogy asszonytársaiknak segítséget nyújtsanak, 
                                      főleg a női létnek egy olyan kiemelten fontos időszakában, 
                                      mint a várandósság [...]</p>
                                  <h3 className="feedback-author">Hoppál Bori - testtudat oktató</h3>
                                  <button className="feedback-button"><Link to="/kezdetektol-fogva">Bővebben</Link></button>
                              </div>
                          </div>

                        <div className="feedback-card">
                            <div className="feedback-image-content">
                                <span className="feedback-overlay"></span>

                                <div className="feedback-card-image">
                                    <img src={FpPartner3} alt="#" className="feedback-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-tags">
                                <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-card-content">
                                <h2 className="feedback-name">Együtt gondolkodni</h2>
                                <p className="feedback-description">
                                    Azért megyek szívesen tanítani a dúlatréningre, 
                                    mert munkám során tapasztalom azt, hogy milyen sok fiatal 
                                    párnak van elengedhetetlen szüksége a szülés előtti [...]
                                </p>
                                <h3 className="feedback-author">Andrek Andrea - pszichológus</h3>
                                <button className="feedback-button"><Link to="/egyutt-gondolkodni">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
                
</section>


<section className="feedback">

    <div className="feedback-slide-container">
        <div className="feedback-slide-content">
            <div className="feedback-card-wrapper">
                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={FpPartner4} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        <h2 className="feedback-name">Aki tudja a szakmáját, tudja a kompetenciáit</h2>
                        <p className="feedback-description">A Békés Dúlakörben végzett szakemberekről
                             – még ha természetszerűen nem is ugyanolyanok – tudom, 
                             hogy magas szinten képzettek, motiváltak, önismeretben dolgozók [...]</p>
                        <h3 className="feedback-author">Rákócziné Krämer Ágnes - szülésznő</h3>
                        <button className="feedback-button"><Link to="/aki-tudja-szakmáját-tudja-kompetenciait">Bővebben</Link></button>
                    </div>
                </div>

                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={FpPartner5} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        <h2 className="feedback-name">A szülésnél teljes legyen a támogatói kör</h2>
                        <p className="feedback-description">Nekem a munkám 50%-kal 
                            könnyebb volt egy dúlával  és egy jó szülésznővel, 
                            mintha egyedül kísértem volna a szülést. Én sem voltam [...]</p>
                        <h3 className="feedback-author">Dr. Kosztin Árpád szülész-nőgyógyász</h3>
                        <button className="feedback-button"><Link to="/a-szulesnel-teljes-legyen-a-tamogatoi-kor">Bővebben</Link></button>
                    </div>
                </div>

                
            </div>
        </div>
                
    </div>
        
</section>
            
          </section>
        </div>
      ) 
}
