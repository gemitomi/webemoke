import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo4 from "../../../image/feedback_szulo_4.png";

export default function FeedBack4SGY() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <section className="feedback-parent">

<div className="feedback-parent-container">
    <div className="feedback-parent-head">
        <h1>S. Gy. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div className="feedback-parent-column">
        <div className="feedback-parent-img-container">
            <img src={FszSzulo4} alt=""/>
        </div>
        <div className="feedback-parent-text">
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
            <i className="far fa-calendar"> 2016.09.18.</i>
            <p>Címkék:</p>
        </div>
    </div>
    <p></p>

    <div className="feedback-parent-tags">
        
        
        <Link to="/feedback">Visszajelzések</Link> 
        <Link to="/szuloi-visszajelzesek-1">Visszajelzések szülőktől</Link>
    </div>
    
    <div className="feedback-parent-title">
        <h4 className="feedback-parent-title h4">További bejegyzések</h4>
    </div>

    <div className="feedback-parent-pag">
        <Link to="/nem-volt-kerdes-a-dulavalasztas" className="feedback-parent-pag1">Előző</Link>
        <Link to="/orvos-vagyok-megis-sokat-jelentetel" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>

        </div>
      )
}
