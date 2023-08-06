import React from "react";
import { Link } from "react-router-dom";
import Masonry from 'react-masonry-css';
import "../../CSS/feedback.css";
import "../../CSS/feedbackpartners.css";

import FszSzulo1 from "../../image/feedback_szulo_1.png";
import FszSzulo2 from "../../image/feedback_szulo_2.png";
import FszSzulo3 from "../../image/feedback_szulo_3.png";
import FszSzulo4 from "../../image/feedback_szulo_4.png";
import FszSzulo5 from "../../image/feedback_szulo_5.png";
import FszSzulo6 from "../../image/feedback_szulo_6.png";
import FszSzulo7 from "../../image/feedback_szulo_7.png";
import FszSzulo8 from "../../image/feedback_szulo_8.png";
import FszSzulo9 from "../../image/feedback_szulo_9.png";
import FszSzulo10 from "../../image/feedback_szulo_10.png";
import FszSzulo11 from "../../image/feedback_szulo_11.png";
import FszSzulo12 from "../../image/feedback_szulo_12.png";
import SzuloVissz from "../../image/szuloi vissza.png";


export default function FeedbackParents1() {
  
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
                    <h1 className="feedback-partner-title">Visszajelzések szülőktől</h1>
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
                                <img src={FszSzulo1} alt="#" className="feedback-partner-card-img"/>
                              </div>
                            </div>

                            <div className="feedback-partner-tags">
                              <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                              className="img-feed-cover"/>
                              
                            </div>
                            
                            <div className="feedback-partner-card-content">
                              <h2 className="feedback-partner-name">Anyává válásom során ő volt a biztos pont </h2>
                              <p className="feedback-partner-description">Első terhességem során Emőkét egy ismerősöm
                                ajánlására azért kerestem meg, hogy dúlaként segítsen majd – bár 
                                kórházi körülmények között [...]</p>
                              <h3 className="feedback-partner-author">D. F. - anya</h3>
                              <button className="feedback-partner-button"><Link to="/anyava-valasom-soran-volt-a-biztos-pont">Bővebben</Link></button>
                            </div>
                          </div>
                          </div>}




                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo2} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Egészségesen megszületett a kislányom</h2>
                                <p className="feedback-partner-description">Mielőtt a kislányom megszületett volna, 
                                azt állította egy nőgyógyász, hogy a hormonjaim rendetlenkednek, 
                                így nehezebben foganhat meg. Egy másik orvos [...]</p>
                                <h3 className="feedback-partner-author">F. T. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/egeszsegesenmegszuletett-a-kislanyom">Bővebben</Link></button>
                            </div>
                            
                        </div>
                    </div>}

                        
                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo3} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Nem volt kérdés számomra a dúlaválasztás</h2>
                                <p className="feedback-partner-description">
                                Második gyermekem születéséhez nemcsak szülésznőt választottam, 
                                  hanem dúlát is. Fontos volt számomra hogy ismerjem azt az orvost és szülésznő [...]
                                </p>
                                <h3 className="feedback-partner-author">N. Zs.- anya</h3>
                                <button className="feedback-partner-button"><Link to="/nem-volt-kerdes-a-dulavalasztas">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>}
                    
                    {<div className="feedback-partner-card-wrapper">
                            <div className="feedback-partner-card">
                                <div className="feedback-partner-image-content">
                                    <span className="feedback-partner-overlay"></span>

                                    <div className="feedback-partner-card-image">
                                        <img src={FszSzulo4} alt="#" className="feedback-partner-card-img"/>
                                    </div>
                                </div>

                                <div className="feedback-partner-tags">
                                    <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                    className="img-feed-cover"/>
                                    
                                </div>

                                <div className="feedback-partner-card-content">
                                    <h2 className="feedback-partner-name">Egyszerre, és nem felváltva!</h2>
                                    <p className="feedback-partner-description">Amikor a kislányommal várandós lettem, a teljes tudatlanságból 
                                    indultam utánanézni, milyen is lesz az a kilenc hónap, és maga 
                                    a szülés. Szépen fokozatosan  [...]</p>
                                    <h3 className="feedback-partner-author">S. Gy. - anya</h3>
                                    <button className="feedback-partner-button"><Link to="/egyszerre-nem-felvaltva">Bővebben</Link></button>
                                </div>
                            </div>
                    </div>}

                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo5} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Orvos vagyok, mégis sokat jelentettél</h2>
                                <p className="feedback-partner-description">Nekem ott sem voltál a szülésemkor, 
                                    mert csak a felkészülésben kértük a segítségedet, 
                                    mégis szorosan összekapcsolódsz a szívemben [...]</p>
                                <h3 className="feedback-partner-author">B. B. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/orvos-vagyok-megis-sokat-jelentetel">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>} 

                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo6} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Ha nem lettél volna</h2>
                                <p className="feedback-partner-description">A dúla, azaz Te, 
                                    számomra azt a fajta lelki támogatást nyújtottad, 
                                    amire az első gyermekét váró tudatlan kismamának szüksége 
                                    van az első hónapoktól egészen a szülésig. 
                                    Rengeteg kérdés felmerül [...]</p>
                                <h3 className="feedback-partner-author">D. V. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/ha-nem-lettel-volna">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>} 

                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo7} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">És lám milyen jó, hogy így alakult!</h2>
                                <p className="feedback-partner-description">Mi a terhesség vége felé 
                                  kapcsolódtunk össze veled. Nekem igazából előtte nem 
                                  fordult meg a fejemben, hogy dúlát fogadjunk, de amikor láttam, 
                                  hogy a páromban mennyi kérdés [...]</p>
                                <h3 className="feedback-partner-author">Cs. T. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/milyen-jo-hogy-igy-alakult">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>} 

                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo8} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">A dúla nem veszi el a szülésznő munkáját</h2>
                                <p className="feedback-partner-description">A dúlámtól mindkét szülésnél 
                                  maximálisan megkaptam, amit elvártam! Az elérhetőséget, 
                                  a jelenlétet mindvégig, az informálást, a támogatást, 
                                  a bizalmat, a jó szavakat [...]</p>
                                <h3 className="feedback-partner-author">T. P. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/a-dula-nem-veszi-el-a-szuleszno-munkajat">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>}

                    
                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo9} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Annyi mindent javasoltál és csináltál</h2>
                                <p className="feedback-partner-description">Első szülésemnél nem fogadtam szülésznőt, 
                                  szerintem ez is nagyban befolyásolhatta a szülés kimenetelét. 
                                  Semmilyen figyelmet nem éreztem a részéről, részükről, ráadásul 
                                  váltották egymást [...]</p>
                                <h3 className="feedback-partner-author">M. G. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/annyi-mindent-javasoltál-es-csinaltal">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>}
                    
                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo10} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Olyan, mint egy barátnő, csak hozzáértő</h2>
                                <p className="feedback-partner-description">A dúlám már a terhesség legelejétől segít, 
                                    és olyan kérdéseket is fel lehetett tenni neki, 
                                    amivel egy szülésznőt nem illik zavarni.[...]</p>
                                <h3 className="feedback-partner-author">K. K. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/olyan-mint-egy-baratno-csak-hozzaerto">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>}
  
                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo11} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Létrejön egy olyan sprilituális kötelék</h2>
                                <p className="feedback-partner-description">Amikor a kislányom megszületett,
                                    azt gondoltam, hogy ezt a csodát belülről átélve egyszerűen 
                                    nem lehet felfogni,  hogy ő egyszer csak itt van velünk [...]</p>
                                <h3 className="feedback-partner-author">D. V. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/letrejon-egy-spiritualis-kotelek">Bővebben</Link></button>
                            </div>
                        </div>
                    </div>}

                    {<div className="feedback-partner-card-wrapper">
                        <div className="feedback-partner-card">
                            <div className="feedback-partner-image-content">
                                <span className="feedback-partner-overlay"></span>

                                <div className="feedback-partner-card-image">
                                    <img src={FszSzulo12} alt="#" className="feedback-partner-card-img"/>
                                </div>
                            </div>

                            <div className="feedback-partner-tags">
                                <img src={SzuloVissz} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                className="img-feed-cover"/>
                                
                            </div>

                            <div className="feedback-partner-card-content">
                                <h2 className="feedback-partner-name">Felkészített bennünket a szülésre</h2>
                                <p className="feedback-partner-description">A dúlámtól odaadó támogatást vártam 
                                    a várandósság kilenc hónapja alatt. 
                                    Ez alatt azt értem, hogy bármi kérdésem volt, akármikor [...]</p>
                                <h3 className="feedback-partner-author">H. E. - anya</h3>
                                <button className="feedback-partner-button"><Link to="/felkeszitett-benunnket-a-szulesre">Bővebben</Link></button>
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
