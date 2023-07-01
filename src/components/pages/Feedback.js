import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/feedback.css"

import SzuloVissza from "../../image/szuloi vissza.png"
import PartnerVissza from "../../image/partner_vissza.png"

import TrainingVissza from "../../image/trening_vissza.png"
import MuhelyVissza from "../../image/muhely_vissza.png"

export default function Feedback() {
  return (
    <div className="feedback-section">
      <section className="feedback-sub">
        <div className="feedback-slide-container">
          <div className="feedback-hero">
              <h1 className="feedback-title">Visszajelzések</h1>
          </div>
          <div className="feedback-slide-content">
            <div className="feedback-card-wrapper">
              <div className="feedback-card">
                <div className="feedback-image-content">
                  <span className="feedback-overlay"></span>

                  <div className="feedback-card-image">
                      <img src={SzuloVissza} alt="#" className="feedback-card-img"/>
                  </div>
                </div>

                <div className="feedback-card-content">
                  <h2 className="feedback-name">Visszajelzés szülőktől</h2>
                  
                  <button className="feedback-button"><Link to="/szuloi-visszajelzesek-1">Tovább</Link></button>
                </div>
              </div>

              <div className="feedback-card">
                <div className="feedback-image-content">
                  <span className="feedback-overlay"></span>

                  <div className="feedback-card-image">
                      <img src={PartnerVissza} alt="#" className="feedback-card-img"/>
                  </div>
                </div>                     
                <div className="feedback-card-content">
                  <h2 className="feedback-name">Visszajelzés partnerektől</h2>
                  
                  <button className="feedback-button"><Link to="/partneri-visszajelzesek">Tovább</Link></button>
                </div>
              </div> 
            </div>
          </div> 
        </div>  
      </section>
      <section>
        <div className="feedback-slide-container">
          <div className="feedback-slide-content">
              <div className="feedback-card-wrapper">
                <div className="feedback-card">
                  <div className="feedback-image-content">
                    <span className="feedback-overlay"></span>

                    <div className="feedback-card-image">
                        <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                    </div>
                  </div>

                  <div className="feedback-card-content">
                    <h2 className="feedback-name">Visszajelzés a Békés Dúlatréningről</h2>
                    
                    <button className="feedback-button"><Link to="/dulatrening-visszajelzesek">Tovább</Link></button>
                  </div>
                </div>

                <div className="feedback-card">
                  <div className="feedback-image-content">
                    <span className="feedback-overlay"></span>
                    <div className="feedback-card-image">
                        <img src={MuhelyVissza} alt="#" className="feedback-card-img"/>
                    </div>
                  </div>

                  <div className="feedback-card-content">
                    <h2 className="feedback-name">Visszajelzés a Békés Dúlaműhelyről</h2>
                    <button className="feedback-button"><Link to="/dulamuhely-visszajelzesek">Tovább</Link></button>
                  </div>
                </div>
              </div>
          </div>
        </div>   
      </section>       
    </div>
  ) 
}
