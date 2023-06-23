import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo4 from "../../../image/feedback_szulo_4.png";

export default function FeedBack4SGY() {
    return (
        <div>
            <section class="feedback-parent">

<div class="feedback-parent-container">
    <div class="feedback-parent-head">
        <h1>S. Gy. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div class="feedback-parent-column">
        <div class="feedback-parent-img-container">
            <img src={FszSzulo4} alt=""/>
        </div>
        <div class="feedback-parent-text">
            <p>
                Amikor a kislányommal várandós lettem, a teljes tudatlanságból indultam 
                utánanézni, milyen is lesz az a kilenc hónap, és maga a szülés. Szépen 
                fokozatosan kialakult bennem a kép, milyen is egy természetes lefolyású 
                szülés, és szerettem volna én is így megélni. Tudtam, éreztem, ez egyedül 
                a párommal nem fog menni, mindenképp szükséges a dúla segítsége a kórházi 
                körülmények között. Emőke, nagyon boldog vagyok, hogy te voltál ott velünk!
                A kórházválasztásnál az volt az első szempont, hogy engedjék be a szülőszobába 
                az apuka mellett a dúlát is. Egyszerre, és nem felváltva!
                Eztán kerestem olyan orvost, aki szintén örül a dúla jelenlétének, mert tudja, 
                hogy így neki is könnyebb dolga lesz. Szerintem a szülésznő is fontos, hiszen 
                fizikai szinten ő felügyeli a szülés folyamatát. De ő nem lehet jelen végig, 
                hiszen más feladatai is vannak, illetve vele más minőségű a kapcsolat. 
                Bármilyen kedves és figyelmes is, vele nem alakulhat ki mély lelki, bizalmi 
                kapcsolat az utolsó hetek néhány ctg vizsgálati ideje alatt. 
                A dúla viszont már a várandósság idején teljes figyelmével a kismama felé fordul, 
                neki bármilyen kérdést fel lehet tenni, olyat is, amit  lehet senki mástól nem tudna, vagy nem merne az anya megkérdezni. Így kialakul egy mély bizalmi kapcsolat, és a szülés idejére már teljes biztonságban érezheti magát az anyuka, sőt az apuka is.
                
            </p>
        </div>
    </div>
    <p></p>

    <div class="feedback-parent-tags">
        <p>Címkék:</p>
        <i class="far fa-calendar"> 2016.09.18.</i>
        <Link to="/feedback">Visszajelzések</Link> 
        <Link to="/feedbackparents1">Visszajelzések szülőktől</Link>
    </div>
    
    <div class="feedback-parent-title">
        <h4 class="feedback-parent-title h4">További bejegyzések</h4>
    </div>

    <div class="feedback-parent-pag">
        <Link to="/feedback3nzs" class="feedback-parent-pag1">Előző</Link>
        <Link to="/feedback5bb" class="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>

        </div>
      )
}
