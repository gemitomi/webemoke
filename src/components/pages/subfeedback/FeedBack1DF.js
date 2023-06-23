import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo1 from "../../../image/feedback_szulo_1.png";

export default function FeedBack1DF() {
  return (
    <div>
      <section class="feedback-parent">
        <div class="feedback-parent-container">
            <div class="feedback-parent-head">
                <h1>D. F. - anya</h1>
                <h2>Visszajelzés szülőktől</h2>
            </div>
            <div class="feedback-parent-column">
                <div class="feedback-parent-img-container">
                    <img src={FszSzulo1} alt=""/>
                </div>
                <div class="feedback-parent-text">
                    <p>
                        Első terhességem során Emőkét egy ismerősöm ajánlására 
                        azért kerestem meg, hogy dúlaként segítsen majd – bár 
                        kórházi körülmények között, mégis – minél természetesebben
                        szülni. Ennél sokkal többet kaptam tőle: anyává válásom 
                        során ő volt a biztos pont és a hiteles információforrás, 
                        ami két nagy ajándék manapság az információdömping és az 
                        üres ígéretek világában. Mivel Emőke általában egy másik 
                        dúlával együttműködve dolgozik, biztos lehettem benne, 
                        hogy a szülésnél lesz ott valaki, aki – miközben érti a 
                        szülés folyamatát, és támogatja annak minél természetesebb lefolyását –, 
                        kiigazodik a kórházi környezetben, és képes a kórházi személyzettel 
                        együttműködésben az orvosi szempontok mellett az én érdekeimet is képviselni. 
                        Erre nagy szükség volt, mert végül úgy alakult, hogy sem a választott szülésznő,
                        sem a választott orvos nem tudott jelen lenni a nagy napon. 
                        Emőke jelenléte viszont így is biztosította, hogy pozitív 
                        kórházi élményben legyen részem, annak ellenére is, hogy 
                        végül nem úgy alakultak a dolgok, ahogy elképzeltem. 
                        
                    </p>
                </div>
            </div>
            <p>Emőke tudása nagy mértékben hozzájárult ahhoz, hogy kisfiammal 
                egy szép és hosszú szoptatási élményben lehet részünk, a 
                csecsemőgondozással és gyermekneveléssel kapcsolatos tanácsai pedig, 
                melyekért bármikor fordulhatok hozzá, mindig megerősítenek anyai ösztöneimben, 
                vagy éppenséggel egy új nézőpontra világítanak rá, mindenesetre több mint 
                2 év távlatában maximálisan beigazolódni látszanak.<br/><b>Köszönöm, Emőke!</b></p>

            <div class="feedback-parent-tags">
                <p>Címkék:</p>
                <i class="far fa-calendar"> 2017.01.11.</i>
                <Link to="/feedback">Visszajelzések</Link> 
                <Link to="/feedbackparents1">Visszajelzések szülőktől</Link>
            </div>

            <div class="feedback-parent-title">
                <h4 class="feedback-parent-title h4">További bejegyzések</h4>
            </div>

            <div class="feedback-parent-pag">
                <Link to="/feedback2ft" class="feedback-parent-pag2">Következő</Link>
            </div>
            
        </div>
      </section>
    </div>
  )
}
