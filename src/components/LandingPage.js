import React from "react";
import { Link } from "react-router-dom";

import ProfilePic from "../image/bekes_emoke_1.png"
import ConsAlone from "../image/egyenikonzultacio.png"
import FamilyTerapy from "../image/csaladterapia.png"
import Mother from "../image/anyavavalas.png"
import Consulting from "../image/nevelesitanacsadas.png"
import Birth from "../image/szulesfelkeszites.png"
import Event from "../image/szuleselmenyfeldolgozas.png"
import DulaTraining from "../image/dulatrening.png" 
import DulaWorkshop from "../image/dulamuhely.png" 
import EventConsulting from "../image/estmegbeszelo.png" 
import DulaTraining6 from "../image/dula_trening6.png"
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

            <section class="home-service">
                <div class="service">
                    <h2 class="heading-title"> Szolgáltatások </h2>
                </div>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src={ConsAlone} alt=""/>
                        </div>
                        <div class="content">
                            <h3>Egyéni konzultáció</h3>
                            <Link to="/egyenikonzultacio" class="btn"><span>Bővebben</span></Link>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={FamilyTerapy} alt="" />
                        </div>
                        <div class="content">
                            <h3>Családterápia</h3>
                            <Link to="/csaladterapia" class="btn"><span>Bővebben</span></Link>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Mother} alt="" />
                        </div>
                        <div class="content">
                            <h3>Anyává válni anyanyelven</h3>
                            <Link to="/anyavallalas" class="btn"><span>Bővebben</span></Link>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Consulting} alt="" />
                        </div>
                        <div class="content">
                            <h3>Nevelési tanácsadás</h3>
                            <Link to="/nevelesitanacsadas" class="btn"><span>Bővebben</span></Link>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Birth} alt="" />
                        </div>
                        <div class="content">
                            <h3>Szülésfelkészítés</h3>
                            <Link to="/szulesfelkeszites" class="btn"><span>Bővebben</span></Link>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Event} alt="" />
                        </div>
                        <div class="content">
                            <h3>Szülésélmény feldolgozás</h3>
                            <Link to="/szuleselmenyfeldolg" class="btn"><span>Bővebben</span></Link>
                        </div>
                    </div>

                </div>

            </section>

            <section class="dula-education">
                <div class="education">
                    <h3 class="head-title">Dúlatréning</h3>
                </div>
            </section>

            <section class="dula-section">
                <div class="image">
                    <div class="container-left">
                        <div class="imageBx">
                            <img src={DulaTraining6}/>
                        </div>   
                    </div>
                <div class="container-right">
                    <div class="card">          
                        <div class="face face1">
                            <div class="content">
                                <img src={DulaTraining} />
                                <h2>Békés Dúlatréning<br/><span>alapképzés</span></h2>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>2004 óta folyamatosan szervezek dúla alap- és továbbképzéseket. A több, mint 40 csoport és az alaptréninget végzett kb. 400 résztvevő száma alapján elmondhatom, hogy Magyarországon jelenleg én rendelkezem a legnagyobb múlttal a kórházi szülések kísérésére (is) felkészítő tréningek szervezésében és vezetésében. </p>
                                <Link to="/dulatrening" class="btn"><span>Bővebben</span></Link>
                            </div>
                        </div>
                    </div>
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <img src={DulaWorkshop} />
                                    <h2>Békés Dúlaműhely<br/><span>továbbképzés</span></h2>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p>A műhely 2009 tavaszán alakult. A csoport tagjai a 15 alkalmas továbbképzés után sikeres írásbeli és szóbeli záróvizsgát tettek és ezzel Békés szülésfelkészítő és szüléskísérő dúlává váltak, valamint tajaivá válhatnak a Békés Dúlakörnek. </p>
                                    <Link to="/dulamuhely" class="btn"><span>Bővebben</span></Link>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <img src={EventConsulting} />
                                    <h2>Esetmegbeszélő csoport</h2>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p>Dúla vagy? Esetleg védőnő vagy szülésznő? Várandósokat, szüléseket kísérsz?<br/>
                                        Megérint, kérdéseket ébreszt benned egy-egy történet, amelynek szereplője vagy a munkád során?<br/>
                                        Szükségét érzed, hogy mint segítő, te is segítséget kaphass a dúlatársaidtól?<br/>
                                        Jólesne tapasztalatokat cserélni más szülés körüli segítőkkel?</p>
                                    <Link to="/esetmegbeszelo" class="btn"><span>Bővebben</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="dula-circle">
                <div class="img-sec">
                    <img src={Circle4}/>
                    <img src={Circle5}/>
                </div>
                <div class="descp-sec">
                    <h2> Békés Dúlakör</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Omnis vel maiores quaerat, sed quam deleniti? 
                        Porro provident vitae quasi est aliquid in sint, 
                        modi blanditiis necessitatibus? Error quasi deleniti delectus?</p>
                    <a href="#" class="btn"><span>Bővebben</span></a>
                </div>

            </section>

            <section class="blog-section">
                <div class="blog-container">

                    <div class="title-wrapper">

                        <div>
                        <p class="section-subtitle">
                            Olvasnivaló
                        </p>

                        <h2 class="h2 section-title" id="service-label">Blog & Történetek</h2>
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

            <section class="velemeny">

                <div class="slide-container">
                    <div class="slide-content">
                        <div class="card-wrapper">
                            <div class="card">
                                <div class="image-content">
                                    <span class="overlay"></span>

                                    <div class="card-image">
                                        <img src={SzuloVissza} alt="#" class="card-img"/>
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h2 class="name">"Anyává válásom során ő volt a biztos pont...</h2>
                                    <p class="description">Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat consequuntur sed deserunt sequi dicta porro, 
                                    impedit ad beatae architecto perspiciatis repudiandae, ratione odit laboriosam ut non fugit possimus animi repellendus.</p>
                                    <h3 class="author">D.F. anya</h3>
                                    <button class="button">Bővebben</button>
                                </div>
                            </div>

                            <div class="card">
                                <div class="image-content">
                                    <span class="overlay"></span>

                                    <div class="card-image">
                                        <img src={PartnerVissza} alt="#" class="card-img"/>
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h2 class="name">"Anyává válásom során ő volt a biztos pont...</h2>
                                    <p class="description">Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat consequuntur sed deserunt sequi dicta porro, 
                                    impedit ad beatae architecto perspiciatis repudiandae, ratione odit laboriosam ut non fugit possimus animi repellendus.</p>
                                    <h3 class="author">D.F. anya</h3>
                                    <button class="button">Bővebben</button>
                                </div>
                            </div>

                            <div class="card">
                                <div class="image-content">
                                    <span class="overlay"></span>

                                    <div class="card-image">
                                        <img src={TrainigVissza} alt="#" class="card-img"/>
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h2 class="name">"Anyává válásom során ő volt a biztos pont...</h2>
                                    <p class="description">Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat consequuntur sed deserunt sequi dicta porro, 
                                    impedit ad beatae architecto perspiciatis repudiandae, ratione odit laboriosam ut non fugit possimus animi repellendus.</p>
                                    <h3 class="author">D.F. anya</h3>
                                    <button class="button">Bővebben</button>
                                </div>
                            </div>

                            <div class="card">
                                <div class="image-content">
                                    <span class="overlay"></span>

                                    <div class="card-image">
                                        <img src={MuhelyVissza} alt="#" class="card-img"/>
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h2 class="name">"Anyává válásom során ő volt a biztos pont...</h2>
                                    <p class="description">Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat consequuntur sed deserunt sequi dicta porro, 
                                    impedit ad beatae architecto perspiciatis repudiandae, ratione odit laboriosam ut non fugit possimus animi repellendus.</p>
                                    <h3 class="author">D.F. anya</h3>
                                    <button class="button">Bővebben</button>
                                </div>
                            </div>
                        </div>
       
                    </div>
                </div>

            </section>
        </div>
    )
}
