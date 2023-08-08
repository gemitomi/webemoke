import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../CSS/test.css"

import ProfilePic from "../image/bekes_emoke_1.png"
import EgyeniKonz from "../image/egyenikonzultacio.png"
import CsaladTer from "../image/csaladterapia.png"
import AnyavaVal from "../image/anyavavalas.png"
import NevTan from "../image/nevelesitanacsadas.png"
import SzulFel from "../image/szulesfelkeszites.png"

import Post1 from "../image/blog/blog_01_hero_ki a dula.png"
import Post2 from "../image/blog/blog_02_hero_dulahatas.png"
import Post3 from "../image/blog/blog_03_hero_dulatrening.png"
import Post4 from "../image/blog/blog_04_hero_lany_.png"
import Post5 from "../image/blog/blog_05_hero_nyilt_hetvege.png"
import Post6 from "../image/blog/blog_06_hero_szuletes_napja.png"
import Post7 from "../image/blog/blog-63-hero-melyinterju.png"

import Szulo1 from "../image/feedback_szulo_1.png"
import Szulo2 from "../image/feedback_szulo_2.png"
import Partner2 from "../image/feedback_partner_2.png"
import SzuloVissza from "../image/szuloi vissza.png"
import PartnerVissza from "../image/partner_vissza.png"

import DlkrLogo from "../image/dulakor_logo.jpg"

import DulaTrainig from "../image/dula_trening_subpage.png"
import DulaMuhely from "../image/dula_muhely_subpage.png"
import EsetBesz from "../image/dula_esetmegbeszelo_subpage.png"

export default function LandingPage() {
    
    const SliderComponent = () => {
        useEffect(() => {
          const initSlider = function (currentSlider) {
            const sliderContainer = currentSlider.querySelector("[data-slider-container]");
            const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
            const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");
    
            let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
            let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
            let currentSlidePos = 0;
    
            const moveSliderItem = function () {
              sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
            };
    
            const slideNext = function () {
                const slideEnd = currentSlidePos >= totalSlidableItems;
              
                if (slideEnd) {
                  currentSlidePos = 0;
                } else {
                  currentSlidePos++;
                }
              
                moveSliderItem();
              };
              
              const slidePrev = function () {
                if (currentSlidePos <= 0) {
                  currentSlidePos = totalSlidableItems;
                } else {
                  currentSlidePos--;
                }
              
                moveSliderItem();
              };
              
    
            sliderPrevBtn.addEventListener("click", slidePrev);
            sliderNextBtn.addEventListener("click", slideNext);
    
            const dontHaveExtraItem = totalSlidableItems <= 0;
            if (dontHaveExtraItem) {
              sliderNextBtn.style.display = "none";
              sliderPrevBtn.style.display = "none";
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
          };
    
          const sliders = document.querySelectorAll("[data-slider]");
          for (let i = 0, len = sliders.length; i < len; i++) {
            initSlider(sliders[i]);
          }
        }, []);
    
    
    
    return (
        <div>
            <section className="home-about">

                <div className="image"> 
                    <img src={ProfilePic} alt="" />
                </div>
                <div className="content">
                    <h1>Békés Emőke<br/><span>szülésfelkészítő és családkísérő dúla,<br/> képzésben lévő családterapeuta</span></h1>
                        <p>
                            Három felnőtt lányom édesanyja és egy kislány unokám nagymamája vagyok.
                            Boldogsággal tölt el, hogy több mint két évtizede megtaláltam azt a hivatást, amelyet nagyon szeretek. Szülésfelkészítő és családkísérő dúlaként egyéni konzultációk, segítő beszélgetések és csoportos szülésfelkészítés keretében kísérem a leendő anyákat és apákat a szülővé válás folyamatában.
                        </p>
                    <center><Link to="/about" className="latest-blog-btn"><span>Bővebben</span></Link></center>
                </div>
            </section>

            <section className="homehome">
            <div className="about-content">
                        <div className="about-row">
                            <div className="about-column-1">
                                <div className="about-imagebox">
                                    <span className="about-image-wrap">
                                        <img src={ProfilePic}  className="wp-image-1"/>
                                    </span>
                                </div>
                            </div>
                            <div className="about-column-2">
                                <div className="about-text-1">
                                    <div className="about-text-inner">
                                        <h1>Békés Emőke</h1><br/><span>szülésfelkészítő és családkísérő dúla, képzésben lévő családterapeuta</span>
                                    </div>
                                </div>

                                <div className="about-text-2">
                                    <div className="about-text-inner">
                                        <p>
                                        Három felnőtt lányom édesanyja és egy kislány unokám nagymamája vagyok. Boldogsággal tölt el, hogy több mint két évtizede megtaláltam azt a hivatást, amelyet nagyon szeretek. Szülésfelkészítő és családkísérő dúlaként egyéni konzultációk, segítő beszélgetések és csoportos szülésfelkészítés keretében kísérem a leendő anyákat és apákat a szülővé válás folyamatában.
                                        </p>
                                    </div>
                                </div>

                                <div className="content">
                                    <Link to="/about" className="btn"><span>Bővebben</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

            </section>

            <section className="home-service">
                <div className="service">
                    <h2 className="heading-title"> Szolgáltatások </h2>
                </div>
                <div className="box-container">
                    <div className="service-card">
                        <div className="service-imageBx">
                            <img className="servive-image" src={EgyeniKonz} alt="" />
                        </div>
                        <div className="service-contentBx" style={{'background': "#e8dee4"}}>
                            <div className="service-content">
                                <h3 className="service-content-title">Egyéni konzultáció</h3>
                                <p className="service-content-text">
                                    Teljesen a ti egyéni igényeiteket követve és kérdéseitek mentén haladva kísérlek el benneteket a babavárás hónapjaiban és a családdá válás útján,
                                    akár a szülés utáni időszakban is. Biztonságos, intim környezetben beszélhettek az érzéseitekről és kérdezhetsz te is, 
                                    a párod is bármit, ami ebben az időszakban foglalkoztat benneteket.

                                </p>
                                <Link to="/egyenikonzultacio" className="service-home-btn">Bővebben</Link>
                            </div>
                        </div>
                    </div>
            
                    <div className="service-card">
                        <div className="service-imageBx">
                            <img src={CsaladTer} alt=""/>
                        </div>
                        <div className="service-contentBx" style={{'background': "#cfdade"}}>
                            <div className="service-content">
                                <h3 className="service-content-title">Családterápia</h3>
                                <p className="service-content-text">
                                    Ha a családi rendszerben valahol felborul az egyensúly, akkor a rendszer tagjai reagálni fognak erre annak érdekében, hogy kialakuljon egy új egyensúlyi állapot. Ebben a folyamatban igyekszem a hozzám forduló családokat az erőforrásaikat megerősítő,
                                    kapcsolatukra fókuszáló, ítélkezésmentes attitűddel támogatni.
                                </p>
                                <Link to="/csaladterapia" className="service-home-btn">Bővebben</Link>
                            </div>
                        </div>
                    </div>
            
                    <div className="service-card">
                        <div className="service-imageBx">
                            <img src={AnyavaVal} alt=""/>
                        </div>
                        <div className="service-contentBx" style={{'background': "#e8dee4"}}>
                            <div className="service-content">
                                <h3 className="service-content-title">Anyává válni anyanyelven</h3>
                                <p className="service-content-text">
                                    Vajon milyen nyelven vajúdnak és szülnek azok az anyák, akik nem a szülőföldjükön szülik meg a gyermekeiket? 
                                    Az online kommunikációs csatornák ma már lehetővé teszik, hogy a határokon átívelve könnyen kapcsolódhassunk 
                                    és anyanyelven beszélhess az anyává válás során benned megfogalmazódott kérdésekről, érzésekről.
                                </p>
                                <Link to="/anyavavalas" className="service-home-btn">Bővebben</Link>
                            </div>
                        </div>
                    </div>
            
                    <div className="service-card">
                        <div className="service-imageBx">
                            <img src={SzulFel} alt=""/>
                        </div>
                        <div className="service-contentBx" style={{'background': "#cfdade"}}>
                            <div className="service-content">
                                <h3 className="service-content-title">Szülésfelkészítés</h3>
                                <p className="service-content-text">
                                    A szülésre és a szülői szerepre készülődés a konkrét információk gyűjtésén és befogadásán túl, 
                                    rendkívül intim, mély, sok érzést is megmozgató folyamat. 
                                    A több száz kórházban és otthoni környezetben zajló szüléskísérésem tapasztalataim és a szakmai ismereteim átadása mellett lehetőséged van arra, hogy kimondhass mindent, amit érzel, vagy amit egy csoportos szülésfelkészítésen, mások előtt nem feltétlenül kérdeznél meg. 
                                </p>
                                <Link to="/szulesfelkeszites" className="service-home-btn">Bővebben</Link>
                            </div>
                        </div>
                    </div>
            
                    <div className="service-card">
                        <div className="service-imageBx">
                            <img src={SzulFel} alt=""/>
                        </div>
                        <div className="service-contentBx" style={{'background': "#e8dee4"}}>
                            <div className="service-content">
                                <h3 className="service-content-title">Szülésélmény feldolgozás</h3>
                                <p className="service-content-text-4">
                                    Az anyává válás egyik legmeghatározóbb eseménye, a szülés megélése, mely nagyon egyedi, nincs két egyforma történet. 
                                    A támogatás minősége, a szülés körülményei és folyamata, az abban megélt érzések sokszínűsége mély lenyomatot hagy a nők és az őket kísérő párjuk életében is.
                                    Oszd meg velem, ha úgy érzed, hogy nem tud nyugvópontra kerülni benned a szülésed élménye, szeretnéd jobban érteni és/vagy erőforrásként tekinteni rá egy későbbi gyermekvállalás során.
                                </p>
                                <Link to="/szuleselmenyfeldolg" className="service-home-btn">Bővebben</Link>
                            </div>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-imageBx">
                            <img src={NevTan} alt=""/>
                        </div>
                        <div className="service-contentBx" style={{'background': "#d5e1df"}}>
                            <div className="sevice-content">
                                <h3 className="service-content-title">Nevelési tanácsadás</h3>
                                <p className="service-content-text">
                                    Rengeteg nevelési irányzat, könyvek, internetes csoportok, megannyi információ, ajánlás, 
                                    útmutatás elérhető ma már. De mi lesz jó a mi családunknak, a mi gyermekünknek? 
                                    Ha elbizonytalanodtál vagy elakadtál a gyermeknevelés során valamiben, keress bátran, hogy megismerve a ti családi rendszereteket, egyénre szabottan segíthessek!
                                </p>
                                <Link to="/nevelesitanacsadas" className="service-home-btn">Bővebben</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="education-faq">
                    <center>
                        <Link to="/gyik-szuloktol" className="latest-blog-btn">Gyakori kérdések a szülőktől</Link>
                    </center>
                </div>
            </section>
    
            <section className="dulatreningek">
                <div className="dula-education-section">
                    <div className="dula-education-container">

                        <h2 className="dula-section-title">
                            Dúlatréning
                        </h2>
                    
                
                        <div className="dula-education-box">
                            <div className="dula-education-card">
                                <img src={DulaTrainig} alt="Bekes Dulatrening"/>
                                    <div className="dula-education-txt-box">
                                        <h2 className="dula-education-title">Békés Dúlatréning<br/><span>alaptréning</span></h2>
                                        <Link to="/bekesdulatrening" className="dula-education-btn">Bővebben</Link>
                                    </div>
                            </div>

                            <div className="dula-education-card">
                                <img src={DulaMuhely} alt="Bekes Dulamuhely"/>
                                    <div className="dula-education-txt-box">
                                        <h2 className="dula-education-title">Békés Dúlaműhely<br/><span>továbbképzés</span></h2>
                                        <Link to="/bekesdulamuhely" className="dula-education-btn">Bővebben</Link>
                                    </div>
                            </div>

                            <div className="dula-education-card">
                                <img src={EsetBesz} alt="Esetmegbeszelo csoport"/>
                                    <div className="dula-education-txt-box">
                                        <h2 className="dula-education-title">Esetmegbeszélő<br/> csoport<br/><span></span></h2>
                                        <Link to="/esetmegbeszelo" className="dula-education-btn">Bővebben</Link>
                                    </div>
                            </div>
                        </div>
                    </div>       
                </div>
                <div className="dula-education">
                    <div className="education-faq">
                        <Link to="/gyik" className="latest-blog-btn">Gyakori kérdések a képzésekről</Link>
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
                            Olvasnivalók
                        </p>

                        <h2 className="h2 lp-section-title" id="service-label">Blog & Történetek</h2>
                        </div>

                        <p className="section-text">
                        Szülési történeteink velünk maradnak - gyakran egy életen át. A blogbejegyzések segítségével képet kaphatsz munkámról és az általam képviselt értékekről.  
                        </p>

                    </div>
                    <div className="slider" data-slider>

                        <ul className="slider-container service-list" data-slider-container>

                            <li className="slider-item" data-slider-item>
                                <div className="slide-service-card">

                                    <div className="card-icon">
                                        <img src={Post1} width="300" height="300"alt="Kia dúla és miben segít?" className="w-100"/>
                                    </div>

                                    <h3 className="h3 card-title">Ki a dúla és miben segít?</h3>

                                    <p className="card-text">
                                    A szülés a modern időket megelőző korokban a legtöbb kultúrában szigorúan asszonyi fennhatóság alá tartozott...
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <Link to="/ki-a-dula-es-miben-segit" className="btn">Bővebben</Link>

                                   

                                </div>
                            </li>
                            <li className="slider-item" data-slider-item>
                                <div className="slide-service-card">

                                    <div className="card-icon">
                                        <img src={Post2} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Dúlahatás - kutatások, eredmények</h3>

                                    <p className="card-text">
                                    Az elmúlt évtized során jelentősen nőtt a bizonyítékok száma a dúla által támogatott szülések előnyeivel kapcsolatban...
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <Link to="/dulahatas" className="btn">Bővebben</Link>

                                    

                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="slide-service-card">

                                    <div className="card-icon">
                                        <img src={Post7} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Mélyinterjú</h3>

                                    <p className="card-text">
                                    Többet, személyesebbet rólam, a szüléskísérésekről és a hivatá- somhoz fűződő viszonyomról az alábbi, Szuromi Ágnes...
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <Link to="/melyinterju" className="btn">Bővebben</Link>

                                   

                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="slide-service-card">

                                    <div className="card-icon">
                                        <img src={Post3} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Dúlatréningre menni jó</h3>

                                    <p className="card-text">
                                    Készülődöm. Holnapután dúlatréningre megyek. Körülbelül harminchatodszorra...
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <Link to="/dulatreningre-menni-jo" className="btn">Bővebben</Link>

                                   

                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="slide-service-card">

                                    <div className="card-icon">
                                        <img src={Post4} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">A Lány és a Kisfiú</h3>

                                    <p className="card-text">
                                    A Lány alig több mint 20 éves. Megkérdőjelezhetetlenül, a kezdetektől tudta...
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <Link to="/a-lany-es-a-kisfiu" className="btn">Bővebben</Link>

                                   

                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="slide-service-card">

                                    <div className="card-icon">
                                        <img src={Post5} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Nyílt hétvége a Békés Dúlakörrel</h3>

                                    <p className="card-text">
                                    Ha várandós vagy, és úgy érzed, kevés az az idő, amit a szakemberek rád szánnak… 
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <Link to="/nyilt-hetvege" className="btn">Bővebben</Link>

                                    
                                </div>
                            </li>

                            <li className="slider-item" data-slider-item>
                                <div className="slide-service-card">

                                    <div className="card-icon">
                                        <img src={Post6} alt=""/>
                                    </div>

                                    <h3 className="h3 card-title">Szülés és születés napjai a Békés Dúlakörrel</h3>

                                    <p className="card-text">
                                    Amiről máshol nem hallunk eleget – interaktív előadások és workshopok...
                                    </p>

                                    <span className="text-lg author">Békés Emőke</span>

                                    <Link to="/szules-es-szuletes-napja-a-bekes-dulakorrel" className="btn">Bővebben</Link>

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

            <section className="feedback" >
    
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
                                    <Link to="/szuloi-visszajelzesek-1">Visszajelzés szülőktől</Link>
                                </div>

                                <div className="feedback-card-content">
                                    <h2 className="feedback-name">Anyává válásom során ő volt a biztos pont</h2>
                                    <p className="feedback-description">Első terhességem során Emőkét egy ismerősöm
                                        ajánlására azért kerestem meg, hogy dúlaként segítsen majd – bár 
                                        kórházi körülmények között [...]</p>
                                    <h3 className="feedback-author">D.F. anya</h3>
                                    <button className="feedback-button"><Link to="/anyava-valasom-soran-volt-a-biztos-pont">Bővebben</Link></button>
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
                                    <Link to="/szuloi-visszajelzesek-1">Visszajelzés szülőktől</Link>
                                </div>

                                <div className="feedback-card-content">
                                    <h2 className="feedback-name">Egészségesen megszületett a kislányom</h2>
                                    <p className="feedback-description">Mielőtt a kislányom megszületett volna, 
                                        azt állította egy nőgyógyász, hogy a hormonjaim rendetlenkednek, 
                                        így nehezebben foganhat meg. Egy másik orvos [...]</p>
                                    <h3 className="feedback-author">F.T. anya</h3>
                                    <button className="feedback-button"><Link to="/egeszsegesenmegszuletett-a-kislanyom">Bővebben</Link></button>
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
                                    <Link to="/partneri-visszajelzesek">Visszajelzés szakmai partnertől</Link>
                                </div>

                                <div className="feedback-card-content">
                                    <h2 className="feedback-name">Kezdetektől fogva</h2>
                                    <p className="feedback-description">Mindig öröm olyan 
                                        nőkkel találkozni, akik elhívást éreznek arra, 
                                        hogy asszonytársaiknak segítséget nyújtsanak, 
                                        főleg a női létnek egy olyan kiemelten fontos időszakában, 
                                        mint a várandósság, [...] </p>
                                    <h3 className="feedback-author">Hoplár Bori - testtudat oktató</h3>
                                    <button className="feedback-button"><Link to="/kezdetektol-fogva">Bővebben</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feedback-button-btn">
                        <Link to="/feedback" className="feedback-button-btn1">További visszajelzések</Link>
                    </div>
                            
                </div>
                    
            </section>

            <section className="consultation4">
                <div className="consultation-btn-h2">
                    <h2>Segíthetek?</h2></div>
                <div className="consultation-btn-box" >
                    <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
                </div>
            </section> 
        </div>
    )
};

return <SliderComponent />;
}

