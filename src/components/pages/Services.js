import React, {CSSProperties} from "react";
import "../../CSS/services.css"
import { Link } from "react-router-dom";


import EgyeniKonz from "../../image/egyenikonzultacio.png"
import CsaladTer from "../../image/csaladterapia.png"
import AnyavaVal from "../../image/anyavavalas.png"
import NevTan from "../../image/nevelesitanacsadas.png"
import SzulFel from "../../image/szulesfelkeszites.png"
import SzulEsemeny from "../../image/szuleselmenyfeldolgozas.png"

export default function Services() {
  return (
    <div>      
      <section class="section service has-bg-image" aria-labelledby="service-label">
        <div class="container-services">

            <h1>Szolgáltatások</h1>

            <ul class="service-list">

                <li class="card-container">
                    <div class="services-card card-md" style={{'background': "#e8dee4"}}>

                        <div class="card-media">
                            <img src={EgyeniKonz}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Egyéni konzultáció</h3>

                            <p class="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="/egyenikonzultacio" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md" style={{'background': "#cfdade"}}>

                        <div class="card-media">
                            <img src={CsaladTer}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Családterápia</h3>

                            <p class="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="/csaladterapia" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md" style={{'background': "#97bcc7"}}>

                        <div class="card-media">
                            <img src={AnyavaVal}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Anyává válni anyanyelven</h3>

                            <p class="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="/anyavavalas" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md" style={{'background': "#d4b8c7"}}>

                        <div class="card-media">
                            <img src={NevTan}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Nevelési tanácsadás</h3>

                            <p class="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="/nevelesitanacsadas" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md" style={{'background': "#a7638b"}}>

                        <div class="card-media">
                            <img src={SzulFel}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Szülésfelkészítés</h3>

                            <p class="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="/szulesfelkeszites" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md" style={{'background': "#d5e1df"}}>

                        <div class="card-media">
                            <img src={SzulEsemeny}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Szülésélmény feldolgozás</h3>

                            <p class="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="/szuleselmenyfeldolg" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

            </ul>

        </div>
    </section>

    </div>
  )
}
