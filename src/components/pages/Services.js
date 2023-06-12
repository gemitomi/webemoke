import React from "react";
import "../../CSS/services.css"

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

            <h2 class="section-title headline-md text-center" id="service-label">Szolgáltatások</h2>

            <ul class="service-list">

                <li class="card-container">
                    <div class="services-card card-md">

                        <div class="card-media">
                            <img src={EgyeniKonz}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Egyéni konzultáció</h3>

                            <p class="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="#" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md">

                        <div class="card-media">
                            <img src={CsaladTer}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Családterápia</h3>

                            <p class="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="#" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md">

                        <div class="card-media">
                            <img src={AnyavaVal}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Anyává válni anyanyelven</h3>

                            <p class="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="#" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md">

                        <div class="card-media">
                            <img src={NevTan}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Nevelési tanácsadás</h3>

                            <p class="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="#" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md">

                        <div class="card-media">
                            <img src={SzulFel}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Szülésfelkészítés</h3>

                            <p class="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="#" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li class="card-container">
                    <div class="services-card card-md">

                        <div class="card-media">
                            <img src={SzulEsemeny}/>
                        </div>

                        <div>
                            <h3 class="card-title title-sm">Szülésélmény feldolgozás</h3>

                            <p class="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="#" class="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

            </ul>

        </div>
    </section>

    </div>
  )
}
