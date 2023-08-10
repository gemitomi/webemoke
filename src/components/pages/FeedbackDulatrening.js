import React, { useEffect }  from "react";

import { Link } from "react-router-dom";
import "../../CSS/feedback.css";

import TrainingVissza from "../../image/trening_vissza.png"
import Citates from "../../image/citates.png";

export default function FeedbackDulatrening() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div className="feedback-section">
      <section className="feedback">
    
    <div className="feedback-slide-container">
        <div className="feedback-hero">
            <h1 className="feedback-title">Visszajelzés a Békés Dúlatréningről </h1>
        </div>
        <div className="feedback-slide-content">
            <div className="feedback-card-wrapper">
                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                
                        <p className="feedback-description">"Ebben a két napban az érzelmek teljes skáláján mozogtam. 
                            Örültem, szomorkodtam, féltem, feloldódtam, békét találtam."</p>
                        
                        
                    </div>
                </div>

                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"Köszönöm azt a szeretetet és alázatot, ahogy a csoportot kíséritek! A kedves, bátorító, közvetlen hozzáállást, ami segítette a megnyílásunkat."</p>
                        
                    </div>
                </div>

                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">
                            "A tréningen megszűnt a külvilág. 
                            Megszűntek a kinti gondok. Jól esett befelé figyelni. 
                            A csoport ereje segített megfogalmazni és kimondani, amit érzek, 
                            és ez határtalan megkönnyebbülést adott."
                        </p>
                        
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
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"Az előzetes elképzeléseimnél jóval többet kaptam a 
                            motivációs tréningen. Rálátást az erősségeimre és a gyengébb pontjaimra, 
                            iránymutatást, hogy mivel kell foglalkoznom a jövőben. 
                            Segített hangosan kimondani olyan dolgokat, amit azelőtt nem mertem, 
                            vagy nem is tudtam, hogy fáj vagy hiányzik."</p>
                        
                    </div>
                </div>

                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"Örülök, hogy minden csoporttag kedves és elfogadó személyiség volt. 
                            Nagyon jó volt látni, hogy mindenki meg tudott nyílni, 
                            ahogy egy-egy téma megérintette az embereket. 
                            Fantasztikus előadókat ismerhettem meg, alapos tudással, szemléletes, magas színvonalú előadással. 
                            Jól illeszkedtek egymáshoz a témák. Gratulálok a szervezéshez, a tréningvezetéshez és köszönöm az odaadó figyelmet."</p>
                        
                    </div>
                </div>

                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"Alázatot és szeretetet érzek. 
                            Az az állapot, amikor az elveszem-odaadom, megszerzem-adakozok, 
                            adok-kapok viszony értelmét veszti. Nagyon jó volt a meghitt együttlét 
                            – ez sok praktikumot felvonultató képzésekről hiányozni tud. 
                            Nekem ez legalább olyan fontos, mint a gyakorlati ismeretek"</p>
                        
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
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"Sok ilyet még! Ilyen intenzív élménytalajt. 
                            Ennnyire kézzelfogható történeteket, az életet a maga valójában. 
                            Énekelni lenne kedvem, amit a világon a legjobban szeretek! 
                            Hú, ezt a közeget kerestem!"</p>
                        
                    </div>
                </div>

                <div className="feedback-card">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"Csodálatos utazás volt. Kicsit félek belegondolni, hogy mi lett volna velem, ha nem teszem meg ezt az utat, vagy ha egyedül, asszonytársak nélkül kell végigjárnom. 
                            Tökéletes volt. Minden várakozást felülmúlt."</p>
                        
                    </div>
                </div>

                <div className="feedback-card-hidden">
                    <div className="feedback-image-content">
                        <span className="feedback-overlay"></span>

                        <div className="feedback-card-image">
                            <img src={TrainingVissza} alt="#" className="feedback-card-img"/>
                        </div>
                    </div>

                    <div className="feedback-tags">
                        <img src={Citates} width="100" height="100" loading="lazy" alt="Visszajelzés szülőktől"
                        className="img-feed-cover"/>
                        
                    </div>

                    <div className="feedback-card-content">
                        
                        <p className="feedback-description">"Csodálatos utazás volt. Kicsit félek belegondolni, hogy mi lett volna velem, ha nem teszem meg ezt az utat, vagy ha egyedül, asszonytársak nélkül kell végigjárnom. 
                            Tökéletes volt. Minden várakozást felülmúlt."</p>
                        
                    </div>
                </div>

                
            </div>
        </div>
                
    </div>
        
</section>
    </div>
  )
}
