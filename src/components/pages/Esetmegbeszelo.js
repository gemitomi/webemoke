import React from "react";
import { Link } from "react-router-dom";
import '../../CSS/esetmegbeszelo.css'; 
import EsetMeg from "../../image/eset_csop.png"

export default function Esetmegbeszelo() {
  return (
    <div>
      <section className="esetmegbeszelo">

        <div className="esetmegbeszelo-container">
            <div className="esetmegbeszelo-head">
                <h1>Esetmegbeszélő csoport</h1>    
            </div>
            <div className="esetmegbeszelo-column">
                <div className="esetmegbeszelo-img-container">
                    <img src={EsetMeg} alt=""/>
                </div>
                <div className="esetmegbeszelo-text">
                    
                    <ul className="esetmegbeszelo-list">
                        <li className="esetmegbeszelo-has-before">Dúla vagy? Esetleg védőnő vagy szülésznő?</li>
                        <li className="esetmegbeszelo-has-before">Várandósokat, szüléseket kísérsz?</li>
                        <li className="esetmegbeszelo-has-before">Megérint, kérdéseket ébreszt benned egy-egy történet, amelynek szereplője vagy a munkád során?</li>
                        <li className="esetmegbeszelo-has-before">Szükségét érzed, hogy mint segítő, te is segítséget kaphass a dúlatársaidtól?</li>
                        <li className="esetmegbeszelo-has-before">Mesélnél, kérdeznél, meghallgatnál?</li>
                        
                    </ul>
                </div>
            </div>
            

            <p>Jelentkezz emailben és gyere - akár alkalomszerűen is - a havi rendszerességgel zajló esetmegbeszélő csoportba!</p>
            <h4><a href="mailto:info@bekesemoke.hu"> <i className="fas fa-envelope"></i> info@bekesemoke.hu</a></h4>
        </div>
        
      </section>
    </div>
  ) 
}
//<div className="consultation-btn-box" >
         // <Link to="/contact" className="consultation-btn"><span>Kapcsolatfelvétel</span></Link>
        //</div>