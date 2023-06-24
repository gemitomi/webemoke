import React from "react";
import { Link } from "react-router-dom";
import '../../CSS/esetmegbeszelo.css'; 
import EsetMeg from "../../image/eset_csop.png"

export default function Esetmegbeszelo() {
  return (
    <div>
      <section class="esetmegbeszelo">

        <div class="esetmegbeszelo-container">
            <div class="esetmegbeszelo-head">
                <h1>Esetmegbeszélő csoport</h1>    
            </div>
            <div class="esetmegbeszelo-column">
                <div class="esetmegbeszelo-img-container">
                    <img src={EsetMeg} alt=""/>
                </div>
                <div class="esetmegbeszelo-text">
                    
                    <ul class="esetmegbeszelo-list">
                        <li class="esetmegbeszelo-has-before">Dúla vagy? Esetleg védőnő vagy szülésznő?</li>
                        <li class="esetmegbeszelo-has-before">Várandósokat, szüléseket kísérsz?</li>
                        <li class="esetmegbeszelo-has-before">Megérint, kérdéseket ébreszt benned egy-egy történet, amelynek szereplője vagy a munkád során?</li>
                        <li class="esetmegbeszelo-has-before">Szükségét érzed, hogy mint segítő, te is segítséget kaphass a dúlatársaidtól?</li>
                        <li class="esetmegbeszelo-has-before">Jólesne tapasztalatokat cserélni más szülés körüli segítőkkel?</li>
                        <li class="esetmegbeszelo-has-before">Mesélnél, kérdeznél, meghallgatnál?</li>
                        
                    </ul>
                </div>
            </div>
            <h4>Gyere és ülj közénk!</h4>

            <p>Mindegy, hogy hol, dúlaként vagy más szakma képviselőjeként segítesz a várandós anyáknak, beszéljünk egymással a tapasztalatainkról!</p>
        </div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="consultation-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
      </section>
    </div>
  ) 
}
