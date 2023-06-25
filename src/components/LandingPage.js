import React, { useEffect }  from "react";
import { Link } from "react-router-dom";

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

import Post1 from "../image/post1.png"
import Post2 from "../image/post2.png"
import Post3 from "../image/post3.png"
import Post4 from "../image/post4.png"
import Post5 from "../image/post5.png"
import Post6 from "../image/post6.png"

import Szulo1 from "../image/feedback_szulo_1.png"
import Szulo2 from "../image/feedback_szulo_2.png"
import Partner2 from "../image/feedback_partner_2.png"
import SzuloVissza from "../image/szuloi vissza.png"
import PartnerVissza from "../image/partner_vissza.png"

import DlkrLogo from "../image/dulakor_logo.jpg"

import TrainigVissza from "../image/trening_vissza.png"
import MuhelyVissza from "../image/muhely_vissza.png"

import Location1 from "../image/location_1.png"
import Mail1 from "../image/mail_1.png"
import Call1 from "../image/call_1.png"



export default function LandingPage() {
    
    const sliders = document.querySelectorAll("[data-slider]");

    const initSlider = function (currentSlider) {
    
      const sliderContainer = currentSlider.querySelector("[data-slider-container]");
      const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
      const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");
    
      let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
      let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
    
      let currentSlidePos = 0;
    
      const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
      }
      
      
      const slideNext = function () {
        const slideEnd = currentSlidePos >= totalSlidableItems;
    
        if (slideEnd) {
          currentSlidePos = 0;
        } else {
          currentSlidePos++;
        }
    
        moveSliderItem();
      }
    
      sliderNextBtn.addEventListener("click", slideNext);


      const slidePrev = function () {
        if (currentSlidePos <= 0) {
          currentSlidePos = totalSlidableItems;
        } else {
          currentSlidePos--;
        }
    
        moveSliderItem();
        }
    
      sliderPrevBtn.addEventListener("click", slidePrev);
    
      const dontHaveExtraItem = totalSlidableItems <= 0;
      if (dontHaveExtraItem) {
        sliderNextBtn.style.display = 'none';
        sliderPrevBtn.style.display = 'none';
      }
    
      currentSlider.addEventListener("wheel", function (event) {
        if (event.shiftKey && event.deltaY > 0) slideNext();
        if (event.shiftKey && event.deltaY < 0) slidePrev();
      });
    
     
    
      window.addEventListener("resize", function () {
        totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
        totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
    
        moveSliderItem();
      });
    }
    
    for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }
    
    
    return (
        <div>
            <section className="home-about">

                <div className="image"> 
                    <img src={ProfilePic} alt="" />
                </div>
                <div className="content">
                    <h1>Békés Emőke<br/><span>dúla, képzésben lévő családterapeuta</span></h1>
                    <p>Három gyermekes édesanya, nő, szerető társ, a Békés Dúlakör szakmai vezetője vagyok.
                    Egy boldog ember, hiszen két évtizede, hogy megtaláltam azt a hivatást, amelyet nagyon szeretek. Szülésfelkészítő, családkísérő dúla  vagyok.</p>
                    <Link to="/about" className="btn"><span>Bővebben</span></Link>
                </div>
            </section>

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
                            <div className="services-card card-md" style={{'background': "#97bcc7"}}>

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
                            <div className="services-card card-md" style={{'background': "#a7638b"}}>

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
                            <div className="services-card card-md" style={{'background': "#d5e1df"}}>

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
                <div className="consultation-btn-h2">
                    <h2>Segíthetek?</h2></div>
                <div className="consultation-btn-box" >
                    <Link to="/contact" className="consultation-btn"><span>Kapcsolatfelvétel</span></Link>
                </div>
            </section> 

            <section className="dulatreningek">
                <div className="dula-education collection text-center" aria-labelledby="collection-label">
                    <div className="dula-container">

                    <h2 className="h2 section-title" id="collection-label">
                            Dúlatréning
                    </h2>

                    <ul className="grid-list">

                        <li>
                            <div className="collection-card">

                                <figure className="card-banner img-holder" style={{"width": "400", "height": "400"}}>
                                    <img src={DulaTraining} width="300" height="300" loading="lazy"
                                    alt="Dúlatréning" className="img-cover"/>
                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">Békés Dúlatréning<br/><span>alapképzés</span></h3>

                                    <Link to="/bekesdulatrening" className="collection-btn">
                                        <span className="span">Bővebben</span>
                                    </Link>

                                </div>

                            </div>
                        </li>

                        <li>
                        <div className="collection-card">

                                <figure className="card-banner img-holder" style={{"width": "400", "height": "400"}}>
                                    <img src={DulaWorkshop} width="300" height="300" loading="lazy"
                                    alt="Dúlaműhely" className="img-cover"/>
                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">Békés Dúlaműhely<br/><span>továbbképzés</span></h3>

                                    <Link to="/bekesdulamuhely" className="collection-btn">
                                        <span className="span">Bővebben</span>
                                    </Link>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="collection-card">

                                <figure className="card-banner img-holder" style={{"width": "400", "height": "400"}}>
                                    <img src={EventConsulting} width="300" height="300" loading="lazy"
                                    alt="Esetmegbeszélő csoport" className="img-cover"/>
                                </figure>

                                <div className="card-content">

                                <h3 className="h3 card-title">Esetmegbeszélő<br/><span>csoport</span></h3>

                                <Link to="/esetmegbeszelo" className="collection-btn">
                                    <span className="span">Bővebben</span>

                                </Link>

                                </div>

                            </div>
                        </li>

                    </ul>

                    </div>
                </div>

                <div className="dula-education">
                    <div className="education-faq">
                    <Link to="/gyik" className="education-btn btn-prim">Gyakori kérdések a képzésekről</Link>
                    </div>
                </div>
            </section>

            <section className="dula-circle">
                <div className="dula-kor-container">
                    <div className="dula-kor-content">
                        <div className="dula-kor-left">
                            <h1> Békés Dúlakör</h1>
                            <p>
                                Az elmúlt közel másfél évtizedben több száz nőt kísérhettem abban a folyamatban, 
                                amely során közelebb kerülhettek a dúlai hivatáshoz és önmagukhoz.
                            </p>
                            <p>
                                A dúlatréningek célja eleinte főként a „szakmai” információk átadása volt. 
                                Emellett nagy hangsúlyt kaptak önismereti, motivációkat feltáró elemek is, 
                                mivel a csoportokkal végzett munkám illetve a hivatásom gyakorlása során 
                                összegyűlt tapasztalataim alapján egyre inkább azt éreztem, hogy a segítői 
                                foglalkozás nélkülözhetetlenné teszi a folyamatos önismereti munkát 
                                és a saját élményeink feldolgozását.
                            </p>
                            <Link to="/dulakor"className="dula-kor-btn">Bővebben</Link>
                        </div>

                        <div className="dula-kor-right">
                            <div className="dula-kor-imageBx">
                                <img src={DlkrLogo} alt="#"/>

                                <svg height="800" width="800">
                                    <circle stroke-width="1"
                                            stroke="#999"
                                            fill="transparent"
                                            r="160"
                                            cx="520"
                                            cy="520"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="blog-container">

                    <div className="title-wrapper">

                        <div>
                        <p className="section-subtitle">
                            Olvasnivaló
                        </p>

                        <h2 className="h2 lp-section-title" id="service-label">Blog & Történetek</h2>
                        </div>

                        <p className="section-text">
                        Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the drana risus tincidunt convallis
                        velit orci congue tortor eu dignissim ipsum suam non odio. Pellenta esuntion miss the imperdiet metus
                        ornare.
                        </p>

                    </div>
                    <div className="slider" data-slider>

                        <ul className="slider-container service-list" data-slider-container>

                            <li className="slider-item" data-slider-item>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={Post1} width="300" height="300"alt="Kia dúla és miben segít?" className="w-100"/>
                                    </div>

                                    <h3 className="h3 card-title">Ki a dúla és miben segít?</h3>

                                    <p className="card-text">
                                        Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <a href="#" className="btn">Bővebben</a>

                                    <a href="#" className="layer-link" aria-label="More about"></a>

                                </div>
                            </li>
                            <li className="slider-item" data-slider-item>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={Post2} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Dúlahatás - kutatások, eredmények</h3>

                                    <p className="card-text">
                                        Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <a href="#" className="btn">Bővebben</a>

                                    <a href="#" className="layer-link" aria-label="More about"></a>

                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={Post3} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Dúlatréningre menni jó</h3>

                                    <p className="card-text">
                                        Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <a href="#" className="btn">Bővebben</a>

                                    <a href="#" className="layer-link" aria-label="More about my eCommerce service"></a>

                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={Post4} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">A Lány és a Kisfiú</h3>

                                    <p className="card-text">
                                        Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <a href="#" className="btn">Bővebben</a>

                                    <a href="#" className="layer-link" aria-label="More about"></a>

                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={Post5} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Nyílt hétvége a Békés Dúlakörrel</h3>

                                    <p className="card-text">
                                        Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <a href="#" className="btn">Bővebben</a>

                                    <a href="#" className="layer-link" aria-label="More about my Digital Marketing service"></a>

                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={Post6} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Szülés és születés napjai a Békés Dúlakörrel</h3>

                                    <p className="card-text">
                                        Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <a href="#" className="btn">Bővebben</a>

                                    <a href="#" className="layer-link" aria-label="More about my Social Media service"></a>

                                </div>
                            </li>

                        </ul>

                        <div className="slider-controls">
                            <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
                                <div className="line"></div>
                                <div className="arrow"></div>
                            </button>

                            <button className="slider-control next" data-slider-next aria-label="Slide to next item">
                                <div className="line"></div>
                                <div className="arrow"></div>
                            </button>
                        </div>
                    </div>
                </div>            
            </section>

            <section className="feedback">
    
                <div className="feedback-slide-container">
                    <div className="feedback-hero">
                        <h1 className="feedback-title">Visszajelzések</h1>
                    </div>
                    <div className="feedback-slide-content">
                        <div className="feedback-card-wrapper">
                            <div className="feedback-card">
                                <div className="feedback-image-content">
                                    <span className="feedback-overlay"></span>

                                    <div className="feedback-card-image">
                                        <img src={Szulo1} alt="#" className="feedback-card-img"/>
                                    </div>
                                </div>

                                <div className="feedback-tags">
                                    <img src={SzuloVissza} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                    className="img-feed-cover"/>
                                    <Link to="/feedbackparents1">Visszajelzés szülőktől</Link>
                                </div>

                                <div className="feedback-card-content">
                                    <h2 className="feedback-name">Anyává válásom során ő volt a biztos pont</h2>
                                    <p className="feedback-description">Első terhességem során Emőkét egy ismerősöm
                                        ajánlására azért kerestem meg, hogy dúlaként segítsen majd – bár 
                                        kórházi körülmények között [...]</p>
                                    <h3 className="feedback-author">D.F. anya</h3>
                                    <button className="feedback-button"><Link to="/feedback1df">Bővebben</Link></button>
                                </div>
                            </div>

                            <div className="feedback-card">
                                <div className="feedback-image-content">
                                    <span className="feedback-overlay"></span>

                                    <div className="feedback-card-image">
                                        <img src={Szulo2} alt="#" className="feedback-card-img"/>
                                    </div>
                                </div>

                                <div className="feedback-tags">
                                    <img src={SzuloVissza} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                    className="img-feed-cover"/>
                                    <Link to="/feedbackparents1">Visszajelzés szülőktől</Link>
                                </div>

                                <div className="feedback-card-content">
                                    <h2 className="feedback-name">Egészségesen megszületett a kislányom</h2>
                                    <p className="feedback-description">Mielőtt a kislányom megszületett volna, 
                                        azt állította egy nőgyógyász, hogy a hormonjaim rendetlenkednek, 
                                        így nehezebben foganhat meg. Egy másik orvos [...]</p>
                                    <h3 className="feedback-author">F.T. anya</h3>
                                    <button className="feedback-button"><Link to="/feedback2ft">Bővebben</Link></button>
                                </div>
                            </div>

                            <div className="feedback-card">
                                <div className="feedback-image-content">
                                    <span className="feedback-overlay"></span>

                                    <div className="feedback-card-image">
                                        <img src={Partner2} alt="#" className="feedback-card-img"/>
                                    </div>
                                </div>

                                <div className="feedback-tags">
                                    <img src={PartnerVissza} width="50" height="50" loading="lazy" alt="Visszajelzés szülőktől"
                                    className="img-feed-cover"/>
                                    <Link to="/feedbackpartners">Visszajelzés szakmai partnertől</Link>
                                </div>

                                <div className="feedback-card-content">
                                    <h2 className="feedback-name">Kezdetektől fogva</h2>
                                    <p className="feedback-description">Mindig öröm olyan 
                                        nőkkel találkozni, akik elhívást éreznek arra, 
                                        hogy asszonytársaiknak segítséget nyújtsanak, 
                                        főleg a női létnek egy olyan kiemelten fontos időszakában, 
                                        mint a várandósság, [...] </p>
                                    <h3 className="feedback-author">Hoplár Bori - testtudat oktató</h3>
                                    <button className="feedback-button"><Link to="/pfeedback2hb">Bővebben</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feedback-button-btn">
                        <Link to="/feedback" className="feedback-button-btn1">További visszajelzések</Link>
                    </div>
                            
                </div>
                    
            </section>
        </div>
    )
}
