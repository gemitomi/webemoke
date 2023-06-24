import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo8 from "../../../image/feedback_szulo_8.png";

export default function FeedBack8TP() {
    return (
        <div>
            <section className="feedback-parent">

<div className="feedback-parent-container">
    <div className="feedback-parent-head">
        <h1>T. P. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div className="feedback-parent-column">
        <div className="feedback-parent-img-container">
            <img src={FszSzulo8} alt=""/>
        </div>
        <div className="feedback-parent-text">
            <p>
                A dúlámtól mindkét szülésnél maximálisan megkaptam, 
                amit elvártam! Az elérhetőséget, a jelenlétet mindvégig, 
                az informálást, a támogatást, a bizalmat, a jó szavakat, bíztatást, 
                dícséretet, tanácsokat, a döntéshez az alternatívákat, a férj támogatását! És várandósság alatt is a sok infót, ami alapján másodszor már a megfelelő szülésznőt megtalálhattam…a sok tévhit eloszlatását, a baba méltó fogadásához az ötleteket…a szülés után tanácsokat a szoptatáshoz, később a mellgyulladás kezeléséhez tanácsokat, majd az altatás kialakításához javaslatokat (ez utóbbiak már nem elvárások voltak, ezeket “ráadásnak” kaptam, és nagyon hálás vagyok érte).
                
            </p>
        </div>
    </div>
    <p>Úgy gondolom, hogy a dúla egyáltalán nem veszi el a szülésznő munkáját, 
        hisz egy szülésznő teszi a dolgát, ami nem feladata dúlának, viszont a szülésznő munkája kiegészül azzal a plusszal, amit a dúla tesz hozzá, és nagy segítség abban, hogy a kismama tudatában van a dolgoknak, a fejében helyre van téve minden, nagyjából tudja, mi miért történik, a dúla által teremtett biztonságban (pl: egy zavaró műszer letakarása, kedvenc zene, illat, vagy egy masszázs, vagy egy borogatás, legyezés….) sokkal jobban haladhat a folyamat, és ezáltal kevesebb a komplikáció!
    </p>

    <p>
        A dúla nem fog infúziót bekötni, gátat metszeni, ctg-t feltenni, vérnyomást mérni, burkot repeszteni! Viszont a szülésznő se fog a wc-n a lábaim közt térdelni, és támogatni a fájások alatt! és nem fog a férjemnek szenvicset adni, zoknit húzni a lábamra, ha fázik, vagy épp borogatást készíteni a pocakomra….
    </p>

    <p>A dúlával a kapcsolat nem úgy alakul, mint a szülésznővel! Nem a kórházban gyorsan két szülés között hadarja el a kérdéseket a válaszomra. A dúla bármikor bármivel megkereshető, én nem éreztem, hogy a szülésznőt felhívhatnám mindenféle ügyes-bajos dolgommal, annál sokkal leterheltebb volt! Abban sem voltam biztos, hogy tudná-e ki vagyok, ha telefonon bemutatkozom… Az odafigyelés pedig nagyon fontos, és ezt a dúla sokkal inkább meg tudja adni, mint egy szülésznő!
        
    </p>

    <div className="feedback-parent-tags">
        <p>Címkék:</p>
        <i className="far fa-calendar"> 2016.09.18.</i>
        <Link to="/feedback">Visszajelzések</Link> 
        <Link to="/feedbackparents1">Visszajelzések szülőktől</Link>
    </div>

    <div className="feedback-parent-title">
        <h4 className="feedback-parent-title h4">További bejegyzések</h4>
    </div>

    <div className="feedback-parent-pag">
        <Link to="/feedback7cst" className="feedback-parent-pag1">Előző</Link>
        <Link to="/feedback9mg" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>




</section>
        </div>
      )
}
