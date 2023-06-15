import React from "react";
import { Link } from "react-router-dom";
import "../CSS/bekes_dulatrening.css"


import ProfilePic from "../image/bekes_emoke_1.png"
import EgyeniKonz from "../image/egyenikonzultacio.png"
import CsaladTer from "../image/csaladterapia.png"
import AnyavaVal from "../image/anyavavalas.png"
import NevTan from "../image/nevelesitanacsadas.png"
import SzulFel from "../image/szulesfelkeszites.png"
import SzulEsemeny from "../image/szuleselmenyfeldolgozas.png"
import DulaTraining from "../image/dula_treningek.png" 
import DulaWorkshop from "../image/dula_muhely.png" 
import EventConsulting from "../image/eset_csop.png" 
import Circle4 from "../image/circle4.jpg"
import Circle5 from "../image/circle5.jpg"
import Post1 from "../image/post1.png"
import Post2 from "../image/post2.png"
import Post3 from "../image/post3.png"
import Post4 from "../image/post4.png"
import Post5 from "../image/post5.png"
import Post6 from "../image/post6.png"
import SzuloVissza from "../image/szuloi vissza.png"
import PartnerVissza from "../image/partner_vissza.png"
import TrainigVissza from "../image/trening_vissza.png"
import MuhelyVissza from "../image/muhely_vissza.png"

import Location1 from "../image/location_1.png"
import Mail1 from "../image/mail_1.png"
import Call1 from "../image/call_1.png"



export default function LandingPage() {
    return (
        <div>
            <section class="home-about">

                <div className="image"> 
                    <img src={ProfilePic} alt="" />
                </div>
                <div class="content">
                    <h1>Békés Emőke<br/><span>dúla, képzésben lévő családterapeuta</span></h1>
                    <p>Három gyermekes édesanya, nő, szerető társ, a Békés Dúlakör szakmai vezetője vagyok.
                    Egy boldog ember, hiszen két évtizede, hogy megtaláltam azt a hivatást, amelyet nagyon szeretek. Szülésfelkészítő, családkísérő dúla  vagyok.</p>
                    <Link to="/about" class="btn"><span>Bővebben</span></Link>
                </div>
            </section>

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

            <section className="consultation4">
                <div className="consultation-btn-h2">
                    <h2>Segíthetek?</h2></div>
                <div className="consultation-btn-box" >
                    <Link to="/contact" class="consultation-btn"><span>Kapcsolatfelvétel</span></Link>
                </div>
            </section> 

            <section>
            <div class="education collection text-center" aria-labelledby="collection-label">
        <div class="container">

          <h2 class="h2 section-title" id="collection-label">
                Dúlatréning
          </h2>

          <ul class="grid-list">

            <li>
                 <div class="collection-card">

                    <figure class="card-banner img-holder" style={{"width": "400", "height": "400"}}>
                        <img src={DulaTraining} width="300" height="300" loading="lazy"
                        alt="Dúlatréning" class="img-cover"/>
                    </figure>

                    <div class="card-content">

                        <h3 class="h3 card-title">Békés Dúlatréning<br/><span>alapképzés</span></h3>

                        <a href="#" class="collection-btn">
                            <span class="span">Bővebben</span>
                        </a>

                    </div>

                </div>
            </li>

            <li>
              <div class="collection-card">

                    <figure class="card-banner img-holder" style={{"width": "400", "height": "400"}}>
                        <img src={DulaWorkshop} width="300" height="300" loading="lazy"
                        alt="Dúlaműhely" class="img-cover"/>
                    </figure>

                    <div class="card-content">

                        <h3 class="h3 card-title">Békés Dúlaműhely<br/><span>továbbképzés</span></h3>

                        <a href="#" class="collection-btn">
                            <span class="span">Bővebben</span>
                        </a>

                    </div>

                </div>
            </li>

            <li>
                <div class="collection-card">

                    <figure class="card-banner img-holder" style={{"width": "400", "height": "400"}}>
                        <img src={EventConsulting} width="300" height="300" loading="lazy"
                        alt="Esetmegbeszélő csoport" class="img-cover"/>
                    </figure>

                    <div class="card-content">

                     <h3 class="h3 card-title">Esetmegbeszélő<br/><span>csoport</span></h3>

                     <a href="#" class="collection-btn">
                        <span class="span">Bővebben</span>

                     </a>

                    </div>

                </div>
            </li>

          </ul>

        </div>
    </div>

    <div class="dula-education">
        <div class="education-faq">
            <a href="#" class="education-btn btn-prim">Gyakori kérdések a képzésekről</a>
        </div>
    </div>
    </section>

        <section class="blog-section">
            <div class="blog-container">

                <div class="title-wrapper">

                    <div>
                    <p class="section-subtitle">
                        Olvasnivaló
                    </p>

                    <h2 class="h2 lp-section-title" id="service-label">Blog & Történetek</h2>
                    </div>

                    <p class="section-text">
                    Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the drana risus tincidunt convallis
                    velit orci congue tortor eu dignissim ipsum suam non odio. Pellenta esuntion miss the imperdiet metus
                    ornare.
                    </p>

                </div>
                <div class="slider" data-slider>

                    <ul class="slider-container service-list" data-slider-container>

                        <li class="slider-item" data-slider-item>
                            <div class="service-card">

                                <div class="card-icon">
                                    <img src={Post1} width="300" height="300"alt="Kia dúla és miben segít?" class="w-100"/>
                                </div>

                                <h3 class="h3 card-title">Ki a dúla és miben segít?</h3>

                                <p class="card-text">
                                    Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                </p>

                                <span class="text-lg author">Békés Emőke</span>

                                <a href="#" class="btn">Bővebben</a>

                                <a href="#" class="layer-link" aria-label="More about"></a>

                            </div>
                        </li>
                        <li class="slider-item" data-slider-item>
                            <div class="service-card">

                                <div class="card-icon">
                                    <img src={Post2} alt=""/>
                                </div>

                                <h3 class="h3 card-title">Dúlahatás - kutatások, eredmények</h3>

                                <p class="card-text">
                                    Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                </p>

                                <span class="text-lg author">Békés Emőke</span>

                                <a href="#" class="btn">Bővebben</a>

                                <a href="#" class="layer-link" aria-label="More about"></a>

                            </div>
                        </li>

                        <li class="slider-item" data-slider-item>
                            <div class="service-card">

                                <div class="card-icon">
                                    <img src={Post3} alt=""/>
                                </div>

                                <h3 class="h3 card-title">Dúlatréningre menni jó</h3>

                                <p class="card-text">
                                    Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                </p>

                                <span class="text-lg author">Békés Emőke</span>

                                <a href="#" class="btn">Bővebben</a>

                                <a href="#" class="layer-link" aria-label="More about my eCommerce service"></a>

                            </div>
                        </li>

                        <li class="slider-item" data-slider-item>
                            <div class="service-card">

                                <div class="card-icon">
                                    <img src={Post4} alt=""/>
                                </div>

                                <h3 class="h3 card-title">A Lány és a Kisfiú</h3>

                                <p class="card-text">
                                    Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                </p>

                                <span class="text-lg author">Békés Emőke</span>

                                <a href="#" class="btn">Bővebben</a>

                                <a href="#" class="layer-link" aria-label="More about"></a>

                            </div>
                        </li>

                        <li class="slider-item" data-slider-item>
                            <div class="service-card">

                                <div class="card-icon">
                                    <img src={Post5} alt=""/>
                                </div>

                                <h3 class="h3 card-title">Nyílt hétvége a Békés Dúlakörrel</h3>

                                <p class="card-text">
                                    Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                </p>

                                <span class="text-lg author">Békés Emőke</span>

                                <a href="#" class="btn">Bővebben</a>

                                <a href="#" class="layer-link" aria-label="More about my Digital Marketing service"></a>

                            </div>
                        </li>

                        <li class="slider-item" data-slider-item>
                            <div class="service-card">

                                <div class="card-icon">
                                    <img src={Post6} alt=""/>
                                </div>

                                <h3 class="h3 card-title">Szülés és születés napjai a Békés Dúlakörrel</h3>

                                <p class="card-text">
                                    Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                </p>

                                <span class="text-lg author">Békés Emőke</span>

                                <a href="#" class="btn">Bővebben</a>

                                <a href="#" class="layer-link" aria-label="More about my Social Media service"></a>

                            </div>
                        </li>

                    </ul>

                    <div class="slider-controls">
                        <button class="slider-control prev" data-slider-prev aria-label="Slide to previous item">
                            <div class="line"></div>
                            <div class="arrow"></div>
                        </button>

                        <button class="slider-control next" data-slider-next aria-label="Slide to next item">
                            <div class="line"></div>
                            <div class="arrow"></div>
                        </button>
                    </div>
                </div>
            </div>            
        </section>
        </div>
    )
}
