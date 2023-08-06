import React from "react";
import { Link } from "react-router-dom";
import Masonry from 'react-masonry-css';
import "../../CSS/feedback.css";
import "../../CSS/feedbackpartners.css";

import FpPartner1 from "../../image/feedback_partner_1.png";
import FpPartner2 from "../../image/feedback_partner_2.png";
import FpPartner3 from "../../image/feedback_partner_3.png";
import FpPartner4 from "../../image/feedback_partner_4.png";
import FpPartner5 from "../../image/feedback_partner_5.png";
import PartnerVissza from "../../image/partner_vissza.png";


export default function FeedbackPartners() {
    const breakpoints = {
        default: 3,
        1080: 2,
        710: 1
    }



    return (
        <div>
          <div className="feedback-partner-div">
            <div className="feedback-partner">
           
              <div className="feedback-partner-slide-container">
                <div className="feedback-partner-hero">
                    <h1 className="feedback-partner-title">Visszajelzések szakmai partnerektől</h1>
                </div>


                <div className="feedback-partner-slide-content">
                    <Masonry
                            breakpointCols={breakpoints}
                            className="my-masonry-grid-feedback"
                            columnClassName="my-masonry-grid_column-feedback">
                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                              <span className="feedback-partner-overlay"></span>

                              <div className="feedback-partner-card-image">
                                <img src={FpPartner1} alt="#" className="feedback-partner-card-img"/>
                              </div>
                            </div>

                            <div className="feedback-partner-tags">
                              <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                              className="img-feed-cover"/>
                              
                            </div>
                            
                            <div className="feedback-partner-card-content">
                              <h2 className="feedback-partner-name">Nyitott fülekre és szívekre találok </h2>
                              <p className="feedback-partner-description">Szeretem a dúlákat. 
                                Kedves, alázatos, ugyanakkor öntudatos segítők. 
                                Alázat alatt szakmai alázatot értek. 
                                Azt, amire minden segítő foglalkozású [...]</p>
                              <h3 className="feedback-partner-author">Rózsa Ibolya - IBCLC szoptatási tanácsadó</h3>
                              <button className="feedback-partner-button"><Link to="/nyitott-fulekre-es-szivekre-talalok">Bővebben</Link></button>
                            </div>
                          </div>
                          </div>}




                          {<div className="feedback-partner-card-wrapper">
                          <div className="feedback-partner-card">
                              <div className="feedback-partner-image-content">
                                  <span className="feedback-partner-overlay"></span>

                                  <div className="feedback-partner-card-image">
                                      <img src={FpPartner2} alt="#" className="feedback-partner-card-img"/>
                                  </div>
                              </div>

                              <div className="feedback-partner-tags">
                                  <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                                  className="img-feed-cover"/>
                                  
                              </div>

                              <div className="feedback-partner-card-content">
                                  <h2 className="feedback-partner-name">Kezdetekől fogva</h2>
                                  <p className="feedback-partner-description">Mindig öröm olyan nőkkel találkozni, 
                                      akik elhívást éreznek arra, hogy asszonytársaiknak segítséget nyújtsanak, 
                                      főleg a női létnek egy olyan kiemelten fontos időszakában, 
                                      mint a várandósság [...]</p>
                                  <h3 className="feedback-partner-author">Hoppál Bori - testtudat oktató</h3>
                                  <button className="feedback-partner-button"><Link to="/kezdetektol-fogva">Bővebben</Link></button>
                              </div>
                              
                          </div>
                        </div>}

                        
                        {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FpPartner3} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Együtt gondolkodni</h2>
                                <p className="feedback-partner-description">
                                    Azért megyek szívesen tanítani a dúlatréningre, 
                                    mert munkám során tapasztalom azt, hogy milyen sok fiatal 
                                    párnak van elengedhetetlen szüksége a szülés előtti [...]
                                </p>
                                <h3 className="feedback-partner-author">Andrek Andrea - pszichológus</h3>
                                <button className="feedback-partner-button"><Link to="/egyutt-gondolkodni">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>}
                    
                    {<div className="feedback-partner-card-wrapper">
                            <div className="feedback-partner-card">
                                <div className="feedback-partner-image-content">
                                    <span className="feedback-partner-overlay"></span>

                                    <div className="feedback-partner-card-image">
                                        <img src={FpPartner4} alt="#" className="feedback-partner-card-img"/>
                                    </div>
                                </div>

                                <div className="feedback-partner-tags">
                                    <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                                    className="img-feed-cover"/>
                                    
                                </div>

                                <div className="feedback-partner-card-content">
                                    <h2 className="feedback-partner-name">Aki tudja a szakmáját, tudja a kompetenciáit</h2>
                                    <p className="feedback-partner-description">A Békés Dúlakörben végzett szakemberekről
                                        – még ha természetszerűen nem is ugyanolyanok – tudom, 
                                        hogy magas szinten képzettek, motiváltak, önismeretben dolgozók [...]</p>
                                    <h3 className="feedback-partner-author">Rákócziné Krämer Ágnes - szülésznő</h3>
                                    <button className="feedback-partner-button"><Link to="/aki-tudja-szakmajat-tudja-kompetenciait">Bővebben</Link></button>
                                </div>
                            </div>
                    </div>}

                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FpPartner5} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés partnerektől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">A szülésnél teljes legyen a támogatói kör</h2>
                                <p className="feedback-partner-description">Nekem a munkám 50%-kal 
                                    könnyebb volt egy dúlával  és egy jó szülésznővel, 
                                    mintha egyedül kísértem volna a szülést. Én sem voltam [...]</p>
                                <h3 className="feedback-partner-author">Dr. Kosztin Árpád szülész-nőgyógyász</h3>
                                <button className="feedback-partner-button"><Link to="/a-szulesnel-teljes-legyen-a-tamogatoi-kor">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>} 
                </Masonry>                     
            </div>
            </div>
            </div>
            </div>
        </div>
    ) 
}
