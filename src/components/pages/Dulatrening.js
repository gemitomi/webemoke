import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../../CSS/dulatrening.css"

import BekesDulaTr from "../../image/dula_trening_subpage.png";
import BekesDulaWs from "../../image/dula_muhely_subpage.png";
import BekesDulaEset from "../../image/dula_esetmegbeszelo_subpage.png";
import BekesDulaGyik from "../../image/gyik_subpage.png";

export default function Dulatrening() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <section className="dulasubpage">
        <div className="dula-subpage-container">

          <h1 className="subpagesection-title subpageheadline-md subpagetext-center">Dúlatréning</h1>

          <ul className="dula-subpage-portfolio-list">

            <li>
              <div className="dula-subpage-portfolio-card">

                <div className="card-banner dula-subpage-img-holder" style={{"--width": "800", "--height": "540"}}>
                  <img src={BekesDulaTr} width="800" height="540" loading="lazy"
                    alt="bekes dulatrening" className="dula-subpage-img-cover"/>

                  <Link to="/bekesdulatrening" className="dula-subpage-btn-icon">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </Link>
                </div>

                <div>

                  <span className="dula-subpage-chip subpagelabel-md">Alaptréning</span>

                  <h3 className="subpagetitle-md">Békés Dúlatréning</h3>

                  

                  <Link to="/bekesdulatrening" className="dula-subpage-btn">Tovább</Link>

                </div>

              </div>
            </li>

            <li>
              <div className="dula-subpage-portfolio-card">

                <div className="card-banner dula-subpage-img-holder" style={{"--width": "800", "--height": "540"}}>
                  <img src={BekesDulaWs} width="800" height="540" loading="lazy"
                    alt="bekes dulamuhely" className="dula-subpage-img-cover"/>

                  <Link to="/bekesdulamuhely" className="dula-subpage-btn-icon">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </Link>
                </div>

                <div>

                  <span className="dula-subpage-chip subpagelabel-md">Továbbképzés</span>

                  <h3 className="subpagetitle-md">Békés Dúlaműhely</h3>

                  

                  <Link to="/bekesdulamuhely" className="dula-subpage-btn">Tovább</Link>

                </div>

              </div>
            </li>

            <li>
              <div className="dula-subpage-portfolio-card">

                <div className="card-banner dula-subpage-img-holder" style={{"--width": "800", "--height": "540"}}>
                  <img src={BekesDulaEset} width="800" height="540" loading="lazy"
                    alt="Esetmegbeszelo csoport" className="dula-subpage-img-cover"/>

                  <Link to="/esetmegbeszelo" className="dula-subpage-btn-icon">
                    <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                  </Link>
                </div>

                <div>

                  <span className="dula-subpage-chip subpagelabel-md">Csoportok</span>

                  <h3 className="subpagetitle-md">Esetmegbeszélő csoport</h3>

                  

                  <Link to="/esetmegbeszelo" className="dula-subpage-btn">Tovább</Link>

                </div>

              </div>
            </li>

            <li>
                <div className="dula-subpage-portfolio-card">
  
                  <div className="card-banner dula-subpage-img-holder" style={{"--width": "800", "--height": "540"}}>
                    <img src={BekesDulaGyik} width="800" height="540" loading="lazy"
                      alt="gyakori kerdesek" className="dula-subpage-img-cover"/>
  
                    <Link to="/gyakori-kerdesek-a-kepzesekrol" className="dula-subpage-btn-icon">
                      <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                    </Link>
                  </div>
  
                  <div>
  
                    <span className="dula-subpage-chip subpagelabel-md">Kérdések</span>
  
                    <h3 className="subpagetitle-md">Gyakori kérdések</h3>
  
                    
  
                    <Link to="/gyakori-kerdesek-a-kepzesekrol" className="dula-subpage-btn">Tovább</Link>
  
                  </div>
  
                </div>
              </li>

            
            

          </ul>
        </div>

      
    </section>
    </div>
  )
}





