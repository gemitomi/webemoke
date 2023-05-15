import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../image/bekes_emoke.png"
import ConsAlone from "../image/egyenikonzultacio.png"
import FamilyTerapy from "../image/csaladterapia.png"
import Mother from "../image/anyavavalas.png"
import Consulting from "../image/nevelesitanacsadas.png"
import Birth from "../image/szulesfelkeszites.png"
import Event from "../image/szuleselmenyfeldolgozas.png"
import DulaTraining from "../image/dulatrening.png" 
import DulaWorkshop from "../image/dulamuhely.png" 
import EventConsulting from "../image/estmegbeszelo.png" 



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
                    <h3 class="head-title">Békés Dúlakör</h3>
                </div>

                <div class="container">

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
            </section>

            <section class="contact">

                <div class="container">
                    <div class="contactinfo">
                        <div>
                            <h2>Kapcsolat</h2>
                            <ul class="info">
                                <li>
                                    <span><img src="./image/location_1.png"/></span>
                                    <span>2040 Budaörs<br/>
                                        Napsugár sétány 4. II/13</span>
                                </li>
                                <li>
                                    <span><img src="./image/mail_1.png"/></span>
                                    <span>bekes.emoke@gmail.com</span>
                                </li>
                                <li>
                                    <span><img src="./image/call_1.png"/></span>
                                    <span>+36-70-948-5481</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="contactForm">
                        <h2>Kapcsolatfelvétel</h2>
                        <div class="formBox">
                            <div class="inputBox w50">
                                <input type="text" name=""required/>
                                <span>Vezetéknév</span>
                            </div>
                            <div class="inputBox w50">
                                <input type="text" name=""required/>
                                <span>Keresztnév</span>
                            </div>
                            <div class="inputBox w50">
                                <input type="text" name=""required/>
                                <span>e-mail cím</span>
                            </div>
                            <div class="inputBox w50">
                                <input type="text" name=""required/>
                                <span>Mobilszám</span>
                            </div>
                            <div class="inputBox w100">
                                <textarea name="" required></textarea>
                                <span>Kérem küldjön nekem üzenetet itt...</span>
                            </div>
                            <div class="inputBox w50">
                                <input type="submit" value="Küldés"/>
                            </div>
                        </div>
                    </div>
                </div>

                </section>





        </div>
    )
}
