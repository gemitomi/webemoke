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
      <section className="section service has-bg-image" aria-labelledby="service-label">
        <div className="container-services">

            <h1>Szolgáltatások</h1>

            <ul className="service-list">

                <li className="card-container">
                    <div className="services-card card-md" style={{'background': "#e8dee4"}}>

                        <div className="card-media">
                            <img src={EgyeniKonz}/>
                        </div>

                        <div>
                            <h3 className="card-title title-sm">Egyéni konzultáció</h3>

                            <p className="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="/egyenikonzultacio" className="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li className="card-container">
                    <div className="services-card card-md" style={{'background': "#cfdade"}}>

                        <div className="card-media">
                            <img src={CsaladTer}/>
                        </div>

                        <div>
                            <h3 className="card-title title-sm">Családterápia</h3>

                            <p className="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="/csaladterapia" className="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li className="card-container">
                    <div className="services-card card-md" style={{'background': "#d5e1df"}}>

                        <div className="card-media">
                            <img src={AnyavaVal}/>
                        </div>

                        <div>
                            <h3 className="card-title title-sm">Anyává válni anyanyelven</h3>

                            <p className="body-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                            </p>
                            <a href="/anyavavalas" className="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li className="card-container">
                    <div className="services-card card-md" style={{'background': "#d4b8c7"}}>

                        <div className="card-media">
                            <img src={NevTan}/>
                        </div>

                        <div>
                            <h3 className="card-title title-sm">Nevelési tanácsadás</h3>

                            <p className="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="/nevelesitanacsadas" className="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li className="card-container">
                    <div className="services-card card-md" style={{'background': "#e8dee4"}}>

                        <div className="card-media">
                            <img src={SzulFel}/>
                        </div>

                        <div>
                            <h3 className="card-title title-sm">Szülésfelkészítés</h3>

                            <p className="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="/szulesfelkeszites" className="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

                <li className="card-container">
                    <div className="services-card card-md" style={{'background': "#cfdade"}}>

                        <div className="card-media">
                            <img src={SzulEsemeny}/>
                        </div>

                        <div>
                            <h3 className="card-title title-sm">Szülésélmény feldolgozás</h3>

                            <p className="body-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <a href="/szuleselmenyfeldolg" className="services-btn btn-primary">Bővebben</a>
                        </div>

                    </div>
                </li>

            </ul>

        </div>
    </section>
    <section className="consultation4">
        <div className="consultation-btn-h2"><h2>Neked is segíthetek?<br/><br/><span>Szeretettel várom jelentkezésedet!</span></h2></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
    </section>

    </div>
  )
}
