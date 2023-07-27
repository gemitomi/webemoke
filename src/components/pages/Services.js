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
  <section className="serv-home-service">
                <div className="serv-service">
                    <h2 className="serv-heading-title"> Szolgáltatások </h2>
                </div>
                <div className="serv-box-container">
                    <div className="serv-service-card">
                        <div className="serv-service-imageBx">
                            <img className="servive-image" src={EgyeniKonz} alt="" />
                        </div>
                        <div className="serv-service-contentBx" style={{'background': "#e8dee4"}}>
                            <div className="serv-service-content">
                                <h3 className="serv-service-content-title">Egyéni konzultáció</h3>
                                <p className="serv-service-content-text">
                                    Teljesen a ti egyéni igényeiteket követve és kérdéseitek mentén haladva kísérlek el benneteket a babavárás hónapjaiban és a családdá válás útján,
                                    akár a szülés utáni időszakban is. Biztonságos, intim környezetben beszélhettek az érzéseitekről és kérdezhetsz te is, 
                                    a párod is bármit, ami ebben az időszakban foglalkoztat benneteket.

                                </p>
                                <a href="#" className="serv-service-home-btn">Bővebben</a>
                            </div>
                        </div>
                    </div>
            
                    <div className="serv-service-card">
                        <div className="serv-service-imageBx">
                            <img src={CsaladTer} alt=""/>
                        </div>
                        <div className="serv-service-contentBx" style={{'background': "#cfdade"}}>
                            <div className="serv-service-content">
                                <h3 className="serv-service-content-title">Családterápia</h3>
                                <p className="serv-service-content-text">
                                    Ha a családi rendszerben valahol felborul az egyensúly, akkor a rendszer tagjai reagálni fognak erre annak érdekében, hogy kialakuljon egy új egyensúlyi állapot. Ebben a folyamatban igyekszem a hozzám forduló családokat az erőforrásaikat megerősítő,
                                    kapcsolatukra fókuszáló, ítélkezésmentes attitűddel támogatni.
                                </p>
                                <a href="#" className="serv-service-home-btn"><span>Bővebben</span></a>
                            </div>
                        </div>
                    </div>
            
                    <div className="serv-service-card">
                        <div className="serv-service-imageBx">
                            <img src={AnyavaVal} alt=""/>
                        </div>
                        <div className="serv-service-contentBx" style={{'background': "#e8dee4"}}>
                            <div className="serv-service-content">
                                <h3 className="serv-service-content-title">Anyává válni anyanyelven</h3>
                                <p className="serv-service-content-text">
                                    Vajon milyen nyelven vajúdnak és szülnek azok az anyák, akik nem a szülőföldjükön szülik meg a gyermekeiket? 
                                    Az online kommunikációs csatornák ma már lehetővé teszik, hogy a határokon átívelve könnyen kapcsolódhassunk 
                                    és anyanyelven beszélhess az anyává válás során benned megfogalmazódott kérdésekről, érzésekről.
                                </p>
                                <a href="#" className="serv-service-home-btn">Bővebben</a>
                            </div>
                        </div>
                    </div>
            
                    <div className="serv-service-card">
                        <div className="serv-service-imageBx">
                            <img src={NevTan} alt=""/>
                        </div>
                        <div className="serv-service-contentBx" style={{'background': "#d5e1df"}}>
                            <div className="serv-sevice-content">
                                <h3 className="serv-service-content-title">Nevelési tanácsadás</h3>
                                <p className="serv-service-content-text">
                                    Rengeteg nevelési irányzat, könyvek, internetes csoportok, megannyi információ, ajánlás, 
                                    útmutatás elérhető ma már. De mi lesz jó a mi családunknak, a mi gyermekünknek? 
                                    Ha elbizonytalanodtál vagy elakadtál a gyermeknevelés során valamiben, keress bátran, hogy megismerve a ti családi rendszereteket, egyénre szabottan segíthessek!
                                </p>
                                <a href="#" className="serv-service-home-btn"><span>Bővebben</span></a>
                            </div>
                        </div>
                    </div>
            
                    <div className="serv-service-card">
                        <div className="serv-service-imageBx">
                            <img src={SzulFel} alt=""/>
                        </div>
                        <div className="serv-service-contentBx" style={{'background': "#e8dee4"}}>
                            <div className="serv-service-content">
                                <h3 className="serv-service-content-title">Szülésfelkészítés</h3>
                                <p className="serv-service-content-text">
                                    A szülésre és a szülői szerepre készülődés a konkrét információk gyűjtésén és befogadásán túl, 
                                    rendkívül intim, mély, sok érzést is megmozgató folyamat. 
                                    A több száz kórházban és otthoni környezetben zajló szüléskísérésem tapasztalataim és a szakmai ismereteim átadása mellett lehetőséged van arra, hogy kimondhass mindent, amit érzel, vagy amit egy csoportos szülésfelkészítésen, mások előtt nem feltétlenül kérdeznél meg. 
                                </p>
                                <a href="#" className="serv-service-home-btn"><span>Bővebben</span></a>
                            </div>
                        </div>
                    </div>
            
                    <div className="serv-service-card">
                        <div className="serv-service-imageBx">
                            <img src={SzulFel} alt=""/>
                        </div>
                        <div className="serv-service-contentBx" style={{'background': "#cfdade"}}>
                            <div className="serv-service-content">
                                <h3 className="serv-service-content-title">Szülésélmény feldolgozás</h3>
                                <p className="serv-service-content-text">
                                    Az anyává válás egyik legmeghatározóbb eseménye, a szülés megélése, mely nagyon egyedi, nincs két egyforma történet. 
                                    A támogatás minősége, a szülés körülményei és folyamata, az abban megélt érzések sokszínűsége mély lenyomatot hagy a nők és az őket kísérő párjuk életében is.
                                    Oszd meg velem, ha úgy érzed, hogy nem tud nyugvópontra kerülni benned a szülésed élménye, szeretnéd jobban érteni és/vagy erőforrásként tekinteni rá egy későbbi gyermekvállalás során.
                                </p>
                                <a href="#" className="serv-service-home-btn"><span>Bővebben</span></a>
                            </div>
                        </div>
                    </div>
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
