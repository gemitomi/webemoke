import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/feedback.css"

import FszSzulo1 from "../../image/feedback_szulo_1.png";
import FszSzulo2 from "../../image/feedback_szulo_2.png";
import FszSzulo3 from "../../image/feedback_szulo_3.png";
import FszSzulo4 from "../../image/feedback_szulo_4.png";
import FszSzulo5 from "../../image/feedback_szulo_5.png";
import FszSzulo6 from "../../image/feedback_szulo_6.png";
import SzuloVissz from "../../image/szuloi vissza.png";


export default function FeedbackParents1() {
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
                                <img src={FszSzulo1} alt="#" className="feedback-card-img"/>
                            </div>
                        </div>

                          <div className="feedback-tags">
                              <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                              className="img-feed-cover"/>
                          </div>

                          <div className="feedback-card-content">
                            <h2 className="feedback-name">Anyává válásom során ő volt a biztos pont</h2>
                            <p className="feedback-description">Első terhességem során Emőkét egy ismerősöm
                                ajánlására azért kerestem meg, hogy dúlaként segítsen majd – bár 
                                kórházi körülmények között [...]</p>
                            <h3 className="feedback-author">D. F. - anya</h3>
                            <button className="feedback-button">
                            <Link to="/feedback1df">Bővebben</Link>  
                            </button>
                          </div>
                      </div>

                      <div className="feedback-card">
                          <div className="feedback-image-content">
                              <span className="feedback-overlay"></span>

                              <div className="feedback-card-image">
                                  <img src={FszSzulo2} alt="#" className="feedback-card-img"/>
                              </div>
                          </div>

                            <div className="feedback-tags">
                              <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                              className="img-feed-cover"/>
                            </div>

                          <div className="feedback-card-content">
                              <h2 className="feedback-name">Egészségesen megszületett a kislányom</h2>
                              <p className="feedback-description">Mielőtt a kislányom megszületett volna, 
                                  azt állította egy nőgyógyász, hogy a hormonjaim rendetlenkednek, 
                                  így nehezebben foganhat meg. Egy másik orvos [...]</p>
                              <h3 className="feedback-author">F. T. - anya</h3>
                              <button className="feedback-button"><Link to="/feedback2ft">Bővebben</Link></button>
                          </div>
                      </div>

                      <div className="feedback-card">
                          <div className="feedback-image-content">
                              <span className="feedback-overlay"></span>

                              <div className="feedback-card-image">
                                  <img src={FszSzulo3} alt="#" className="feedback-card-img"/>
                              </div>
                          </div>

                          <div className="feedback-tags">
                              <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                              className="img-feed-cover"/>
                              
                          </div>

                          <div className="feedback-card-content">
                              <h2 className="feedback-name">Nem volt kérdés számomra a dúlaválasztás</h2>
                              <p className="feedback-description">
                                  Második gyermekem születéséhez nemcsak szülésznőt választottam, 
                                  hanem dúlát is. Fontos volt számomra hogy ismerjem azt az orvost és szülésznő[...]
                              </p>
                              <h3 className="feedback-author">N. Zs.- anya</h3>
                              <button className="feedback-button"><Link to="/feedback3nzs">Bővebben</Link></button>
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
                                    <img src={FszSzulo4} alt="#" className="feedback-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-card-content">
                                <h2 className="feedback-name">Egyszerre, és nem felváltva!</h2>
                                <p className="feedback-description">Amikor a kislányommal várandós lettem, a teljes tudatlanságból 
                                    indultam utánanézni, milyen is lesz az a kilenc hónap, és maga 
                                    a szülés. Szépen fokozatosan [...]</p>
                                <h3 className="feedback-author">S. Gy. - anya</h3>
                                <button className="feedback-button"><Link to="/feedback4sgy">Bővebben</Link></button>
                            </div>
                        </div>

                        <div className="feedback-card">
                            <div className="feedback-image-content">
                                <span className="feedback-overlay"></span>

                                <div className="feedback-card-image">
                                    <img src={FszSzulo5} alt="#" className="feedback-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-card-content">
                                <h2 className="feedback-name">Orvos vagyok, mégis sokat jelentettél</h2>
                                <p className="feedback-description">Nekem ott sem voltál a szülésemkor, 
                                    mert csak a felkészülésben kértük a segítségedet, 
                                    mégis szorosan összekapcsolódsz a szívemben [...]</p>
                                <h3 className="feedback-author">B. B. - anya</h3>
                                <button className="feedback-button"><Link to="/feedback5bb">Bővebben</Link></button>
                            </div>
                        </div>

                        <div className="feedback-card">
                            <div className="feedback-image-content">
                                <span className="feedback-overlay"></span>

                                <div className="feedback-card-image">
                                    <img src={FszSzulo6} alt="#" className="feedback-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-card-content">
                                <h2 className="feedback-name">Ha nem lettél volna</h2>
                                <p className="feedback-description">A dúla, azaz Te, 
                                    számomra azt a fajta lelki támogatást nyújtottad, 
                                    amire az első gyermekét váró tudatlan kismamának szüksége 
                                    van az első hónapoktól egészen a szülésig. 
                                    Rengeteg kérdés felmerül [...]</p>
                                <h3 className="feedback-author">D. V. - anya</h3>
                                <button className="feedback-button"><Link to="/feedback6dv">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feedback-button-btn-p">
                  <Link to="/feedbackparents1">1</Link>
                  <Link to="/feedbackparents2">2</Link>
                </div>
            </div>
        </section>
      </section>
    </div>
  ) 
}
