import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/feedback.css";

import MuhelyVissza from "../../image/muhely_vissza.png";
import Citates from "../../image/citates.png";

export default function FeedbackDulamuhely() {
  return (
    <div className="feedback-section">
       <section className="feedback">
    
    <div className="feedback-slide-container">
        <div className="feedback-hero">
            <h1 className="feedback-title">Visszajelzés a Békés Dúlaműhelyről </h1>
        </div>
        <div className="feedback-slide-content">
            <div className="feedback-card-wrapper">
                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={MuhelyVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                
                        <p className="feedback-description">"Teljesen más ember lettem, mint amikor idejöttem. Megváltozott az embertársaimhoz való viszonyom."</p>
                        
                        
                    </div>
                </div>

                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={MuhelyVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"Az itt töltött másfél évnek köszönhetően a 
                            párkapcsolatomban, a szüleimmel és a gyermekeimmel is teljesen átalakultak 
                            a kapcsolataim."</p>
                        
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
                            <img src={MuhelyVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">
                            "Egy mély és tartalmas önismereti utat jártam be az elmúlt másfél évben. 
                            Rengeteget tanultam, és nem csak a dúlaságról, hanem önmagamról is. 
                            Mély blokkok oldódtak bennem, és már tudom, merre tartok. 
                            Megvan a célom és élvezem, amit csinálok!"
                        </p>
                        
                    </div>
                </div>

                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={MuhelyVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"A műhelymunka legnagyobb hozadéka számomra 
                            az a szemléletmód, ami átitatott minden témát. Alázat, szeretet, 
                            mellé lépés és hogy abban segítsek, amiben kérik. Szelídültem és nyitottabb lettem. 
                            Egyre inkább áthat ez a megértő, elfogadó hozzáállás az élet minden területén."</p>
                        
                    </div>
                </div>

                

                
            </div>
        </div>
                
    </div>
        
</section>
    </div>
  )
}
