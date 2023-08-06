import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public44Pic1 from "../../../image/publications/public-44-hero-a-vajudolabda.png";
import Public44Pic2 from "../../../image/publications/public-44-a-vajudolabda.jpg";

export default function Public44() {
  return (
  <div>
     <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public44Pic1} alt="a-vajudolabda"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A vajúdólabda</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2008.  július 01.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications3" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public44Pic2} alt="a-vajudolabda"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Ma már egyre több szülészeten megtalálható a nagyméretű, felfújható vajúdólabda.</b>
                        </p>
                        <p>
                            Van, ahol gyakran alkalmazzák és ajánlják is a kipróbálását a vajúdás alatt, de hallok olyan történeteket is az anyáktól, amikor kifejezetten kérniük kellett, vagy egyenesen lebeszélték őket a használatáról. Pedig a labda csökkenti a szülési fájdalmakat és segíti a vajúdási folyamatot.

                        </p>
                        
      
                    </div>
                </div>
                <p>
                    Három alapvető pozícióban lehet használni: ülve, térdelve és előredőlve, állva és előredőlve.
                </p>
                <p>
                    <b>Mindhárom pozícióban számos előnye van:</b>
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">segíti a csípőringatást és más mozdulatokat,</li>
                    <li className="blog-globale-has-before">könnyen végezhető rajta ritmikus mozgás,</li>
                    <li className="blog-globale-has-before">lehetővé teszi a kényelmes súlypontáthelyezést,</li>
                    <li className="blog-globale-has-before">kihasználja a gravitációt a kontrakciók alatt és között,</li>
                    <li className="blog-globale-has-before">elősegíti a legelőnyösebb testhelyzetek felvételét a vajúdás alatt,</li>
                    <li className="blog-globale-has-before">segíti a legjobb pihenési helyzet megtalálását,</li>
                    <li className="blog-globale-has-before">felgyorsíthatja a vajúdást,</li>
                    <li className="blog-globale-has-before">segít abban, hogy a kontrakciók kevésbé fájdalmasak és sokkal hatékonyabbak legyenek.</li>
                </ul>
                <p>
                    <b>A labdán ülés jótékony hatásai:</b>
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">segíti a medencealap ellazulását,</li>
                    <li className="blog-globale-has-before">támogatja a gátat, mindenféle egyéb nyomás nélkül.</li>
                </ul>
                <p>
                    <b>Ha az anya térdel vagy áll, és így hajol előre a labdára, akkor ezzel a pozícióval a labda használata:</b>
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">segíti a hátfájás megszüntetését,</li>
                    <li className="blog-globale-has-before">lehetővé teszi a hátmasszázst,</li>
                    <li className="blog-globale-has-before">megszünteti az aranyérre ható nyomást,</li>
                    <li className="blog-globale-has-before">segíti a magzat leszállását,</li>
                    <li className="blog-globale-has-before">nehéz szülés esetén segítheti a magzat megfordulását,</li>
                    <li className="blog-globale-has-before">kiküszöböli a csuklóra és a kezekre nehezedő feszültséget, amelyet a négykézlábra állás okoz.</li>
                </ul>
                <p>
                    Érdemes tehát már a várandósság előtt érdeklődni arról, hogy található-e a szülőszobán vajúdólabda. Ha esetleg nem, megéri vásárolni is, mert a szülés után is használható. A labdán ugrálva például megnyugtathatjuk a nyűgös babánkat, és az erőnlétünk, a rugalmasságunk helyreállításában is segítségünkre lehet.
                </p>
                <p>
                    A gyerek(ek) születése után is több évig jó szolgálatot tesz, az én labdám például ma már a lányaim kedvelt játék- és tornaszere a kertben.
                </p>


                <p>
                    <a href="https://nlc.hu/baba/20080701/a_vajudolabda/">https://nlc.hu/baba/20080701/a_vajudolabda/</a>
                </p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications3">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
