import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/feedback.css"

import SzuloVissza from "../../image/szuloi vissza.png"
import PartnerVissza from "../../image/partner_vissza.png"

import TrainingVissza from "../../image/trening_vissza.png"
import MuhelyVissza from "../../image/muhely_vissza.png"

export default function Feedback() {
  return (
    <div className="subfeedback-section">
      <section className="subfeedback-sub">
        <div className="subfeedback-slide-container">
          <div className="subfeedback-hero">
              <h1 className="subfeedback-title">Visszajelzések</h1>
          </div>
          <div className="subfeedback-slide-content">
            <div className="subfeedback-card-wrapper">
              <div className="subfeedback-card">
                <div className="subfeedback-image-content">
                  <span className="subfeedback-overlay"></span>

                  <div className="subfeedback-card-image">
                      <img src={SzuloVissza} alt="#" className="subfeedback-card-img"/>
                  </div>
                </div>

                <div className="subfeedback-card-content">
                  <h2 className="subfeedback-name">Visszajelzés szülőktől</h2>
                  
                  <button className="subfeedback-button"><Link to="/szuloi-visszajelzesek-1">Tovább</Link></button>
                </div>
              </div>

              <div className="subfeedback-card">
                <div className="subfeedback-image-content">
                  <span className="subfeedback-overlay"></span>

                  <div className="subfeedback-card-image">
                      <img src={PartnerVissza} alt="#" className="subfeedback-card-img"/>
                  </div>
                </div>                     
                <div className="subfeedback-card-content">
                  <h2 className="subfeedback-name">Visszajelzés partnerektől</h2>
                  
                  <button className="subfeedback-button"><Link to="/partneri-visszajelzesek">Tovább</Link></button>
                </div>
              </div> 
            </div>
          </div> 
        </div>  
      </section>
      <section className="subfeedback-sub">
        <div className="subfeedback-slide-container">
          <div className="subfeedback-slide-content">
              <div className="subfeedback-card-wrapper">
                <div className="subfeedback-card">
                  <div className="subfeedback-image-content">
                    <span className="subfeedback-overlay"></span>

                    <div className="subfeedback-card-image">
                        <img src={TrainingVissza} alt="#" className="subfeedback-card-img"/>
                    </div>
                  </div>

                  <div className="subfeedback-card-content">
                    <h2 className="subfeedback-name">Visszajelzés a Békés Dúlatréningről</h2>
                    
                    <button className="subfeedback-button"><Link to="/dulatrening-visszajelzesek">Tovább</Link></button>
                  </div>
                </div>

                <div className="subfeedback-card">
                  <div className="subfeedback-image-content">
                    <span className="subfeedback-overlay"></span>
                    <div className="subfeedback-card-image">
                        <img src={MuhelyVissza} alt="#" className="subfeedback-card-img"/>
                    </div>
                  </div>

                  <div className="subfeedback-card-content">
                    <h2 className="subfeedback-name">Visszajelzés a Békés Dúlaműhelyről</h2>
                    <button className="subfeedback-button"><Link to="/dulamuhely-visszajelzesek">Tovább</Link></button>
                  </div>
                </div>
              </div>
          </div>
        </div>   
      </section>       
    </div>
  ) 
}
