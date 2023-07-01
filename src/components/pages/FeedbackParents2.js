import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/feedback.css"

import FszSzulo7 from "../../image/feedback_szulo_7.png";
import FszSzulo8 from "../../image/feedback_szulo_8.png";
import FszSzulo9 from "../../image/feedback_szulo_9.png";
import FszSzulo10 from "../../image/feedback_szulo_10.png";
import FszSzulo11 from "../../image/feedback_szulo_11.png";
import FszSzulo12 from "../../image/feedback_szulo_12.png";
import SzuloVissz from "../../image/szuloi vissza.png";


export default function FeedbackParents2() {
    return (
        <div>
          <section className="feedback-section">
          <section className="feedback">
    
            <div className="feedback-slide-container">
              <div className="feedback-hero">
                  <h1 className="feedback-title">Visszajelzések szülőktől</h1>
              </div>
              <div className="feedback-slide-content">
                  <div className="feedback-card-wrapper">
                      <div className="feedback-card">
                          <div className="feedback-image-content">
                              <span className="feedback-overlay"></span>

                              <div className="feedback-card-image">
                                  <img src={FszSzulo7} alt="#" className="feedback-card-img"/>
                              </div>
                          </div>

                          <div className="feedback-tags">
                              <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                              className="img-feed-cover"/>
                          </div>

                          <div className="feedback-card-content">
                              <h2 className="feedback-name">És lám milyen jó, hogy így alakult!</h2>
                              <p className="feedback-description">Mi a terhesség vége felé 
                                  kapcsolódtunk össze veled. Nekem igazából előtte nem 
                                  fordult meg a fejemben, hogy dúlát fogadjunk, de amikor láttam, 
                                  hogy a páromban mennyi kérdés [...]</p>
                              <h3 className="feedback-author"> Cs. T. - anya</h3>
                              <button className="feedback-button"><Link to="/milyen-jo-hogy-igy-alakult">Bővebben</Link></button>
                          </div>
                      </div>

                      <div className="feedback-card">
                          <div className="feedback-image-content">
                              <span className="feedback-overlay"></span>

                              <div className="feedback-card-image">
                                  <img src={FszSzulo8} alt="#" className="feedback-card-img"/>
                              </div>
                          </div>

                          <div className="feedback-tags">
                              <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                              className="img-feed-cover"/>
                              
                          </div>

                          <div className="feedback-card-content">
                              <h2 className="feedback-name">A dúla nem veszi el a szülésznő munkáját</h2>
                              <p className="feedback-description">A dúlámtól mindkét szülésnél 
                                  maximálisan megkaptam, amit elvártam! Az elérhetőséget, 
                                  a jelenlétet mindvégig, az informálást, a támogatást, 
                                  a bizalmat, a jó szavakat [...]</p>
                              <h3 className="feedback-author"> T. P. - anya</h3>
                              <button className="feedback-button"><Link to="/a-dula-nem-veszi-el-a-szuleszno-munkajat">Bővebben</Link></button>
                          </div>
                      </div>

                      <div className="feedback-card">
                          <div className="feedback-image-content">
                              <span className="feedback-overlay"></span>

                              <div className="feedback-card-image">
                                  <img src={FszSzulo9} alt="#" className="feedback-card-img"/>
                              </div>
                          </div>

                          <div className="feedback-tags">
                              <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                              className="img-feed-cover"/>
                              
                          </div>

                          <div className="feedback-card-content">
                              <h2 className="feedback-name">Annyi mindent javasoltál és csináltál</h2>
                              <p className="feedback-description">Első szülésemnél nem fogadtam szülésznőt, 
                                  szerintem ez is nagyban befolyásolhatta a szülés kimenetelét. 
                                  Semmilyen figyelmet nem éreztem a részéről, részükről, ráadásul 
                                  váltották egymást [...]</p>
                              <h3 className="feedback-author"> M. G. - anya</h3>
                              <button className="feedback-button"><Link to="/annyi-mindent-javasoltál-es-csinaltal">Bővebben</Link></button>
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
                                    <img src={FszSzulo10} alt="#" className="feedback-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-card-content">
                                <h2 className="feedback-name"> Olyan, mint egy barátnő, csak hozzáértő</h2>
                                <p className="feedback-description">A dúlám már a terhesség legelejétől segít, 
                                    és olyan kérdéseket is fel lehetett tenni neki, 
                                    amivel egy szülésznőt nem illik zavarni.[...]</p>
                                <h3 className="feedback-author">K. K. - anya</h3>
                                <button className="feedback-button"><Link to="/olyan-mint-egy-baratno-csak-hozzaerto">Bővebben</Link></button>
                            </div>
                        </div>

                        <div className="feedback-card">
                            <div className="feedback-image-content">
                                <span className="feedback-overlay"></span>

                                <div className="feedback-card-image">
                                    <img src={FszSzulo11} alt="#" className="feedback-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                              
                            </div>

                            <div className="feedback-card-content">
                                <h2 className="feedback-name"> Létrejön egy olyan sprilituális kötelék</h2>
                                <p className="feedback-description">Amikor a kislányom megszületett,
                                    azt gondoltam, hogy ezt a csodát belülről átélve egyszerűen 
                                    nem lehet felfogni,  hogy ő egyszer csak itt van velünk [...]</p>
                                <h3 className="feedback-author">Ő. H. - anya</h3>
                                <button className="feedback-button"><Link to="/letrejon-egy-spiritualis-kötelek">Bővebben</Link></button>
                            </div>
                        </div>

                        <div className="feedback-card">
                            <div className="feedback-image-content">
                                <span className="feedback-overlay"></span>

                                <div className="feedback-card-image">
                                    <img src={FszSzulo12} alt="#" className="feedback-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                              
                            </div>

                            <div className="feedback-card-content">
                                <h2 className="feedback-name">Felkészített bennünket a szülésre</h2>
                                <p className="feedback-description">A dúlámtól odaadó támogatást vártam 
                                    a várandósság kilenc hónapja alatt. 
                                    Ez alatt azt értem, hogy bármi kérdésem volt, akármikor [...] </p>
                                <h3 className="feedback-author">H. E. - anya</h3>
                                <button className="feedback-button"><Link to="/felkeszitett-benunnket-a-szulesre">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feedback-button-btn-p">
                  <Link to="/szuloi-visszajelzesek-1">1</Link>
                  <Link to="/szuloi-visszajelzesek-2">2</Link>
                </div>
                        
              </div>
        
        </section>
      </section>
    </div>
  ) 
}
