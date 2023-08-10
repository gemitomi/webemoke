import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../../../CSS/storymother2.css"

export default function StoryMother2() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
        <section className="section-anyavalas">
            <div className="szardinia-anyavalas-container">
                <div className="szardinia-hero">

                </div>

                <div className="szardinia-anyavalas-face">
                    <h2 className="szardinia-anyavalas-title">Szülni a szülőföldön - a szardíniai élménybeszámoló</h2>
                    <div className="profile-container">
                        <div className="profile">
                            <div className="img-container">

                            </div>
                            <div className="anya-text">
                                <h3>Békés Emőke</h3>
                                <p>2017. október 13.</p>
                            </div>
                        </div>
                        <div className="szardinia-anyavalas-button">
                            <a href="#" className="szardinia-anyavalas-btn">Szüléstörténetek</a>
                        </div>
                    </div>
                    
                    <div className="szardinia-anyavalas-content">
                        

                        <p>A férjem osztrák állampolgár, és van egy panziónk Szardínián. 
                        Első látásra beleszerettünk a szigetbe, és elhatároztuk, hogy ott fogunk letelepedni, családot alapítani.
                        Mikor kiderült, hogy babát várok, gyors fejszámolás után rájöttünk, hogy a pici pont a „főszezonba” érkezik,
                        és mivel a férjem mindenképpen velem akart lenni a nagy napon, szóba se jöhetett, hogy hazajövök szülni.
                        </p>

                        <p>Volt bennem viszont egy csomó félelem és kérdés, ezért elkezdtem kutakodni a neten. Így találtam rá Békés Emőke, dúlára.
                        E-mailt írtam, aztán skypoltunk. Az első pillanattól kezdve nagyon szimpatikus volt nekem, ezért kértem utazzon ki hozzánk,
                        és legyen a szülés közben mellettem. Sajnos volt már egy kismamája az én időpontomra, ezért nem tudta a szülés kísérését vállalni,
                        és bár mindent elkövetett, hogy emiatt találjon maga helyett valakit, aki a felkészülésben segít, úgy éreztem ő kell, senki más.
                        </p>

                        <p>Az első skype-on zajló beszélgetésünk végére mindketten úgy éreztük, hogy annyi kérdés, érzés vár kimondásra, hogy sokkal jobb lenne,
                        ha személyesen is találkozhatnánk. „Tudom, hogy a szülés alatt nem lehetsz itt, de eljönnél Szardíniára hozzánk,
                        hogy felkészíts a szülésre engem és a páromat?”- kérdeztem tőle.
                        </p>

                        <div className="szardinia-anyavalas-img-container">

                        </div>

                        <p>Az események felpörögtek, postafordultával érkezett a repülőjegy, és pár nap múlva már a fehérhomokos tengerparton beszélgettünk az anyává válásról,
                        vajúdásról, szoptatásról. Azt hiszem, egészen különleges élmény volt ez a néhány nap mindkettőnknek. Emőke hozott könyveket, DVD-ket is,
                        próbálta pár nap alatt átadni minden tudását.
                        </p>

                        <p>Könnyek között búcsúztunk egymástól és megbeszéltük, hogy még a szülés előtt feltétlenül elmegyünk megnézni azt a kórházat,
                        ahol szülni fogok, hogy megismerjem az itteni lehetőségeket.
                        </p>

                        

                        <p>gy is történt. Sajnos semmi sem olyan volt a valóságban, ahogy elképzeltem. Bár a kórház gyönyörű volt, a szülészet a számomra személytelen,
                        „konzervatív” vonalat képviselte. Nem volt lehetőség alternatív technikák alkalmazására, dúla jelenlétét nem engedték, 
                        vagyis pont azokat a körülményeket zárták ki, amelyek számomra a biztonságérzetet nyújtották. Leültem a párommal, és megbeszéltük,
                        hogy ez életünk legmeghatározóbb eseménye, és ha Szardínián nem lehet úgy szülni, ahogy én szeretnék, akkor rugalmasnak kell lennünk.
                        Ezért jegyet foglaltunk a legközelebbi budapesti járatra.
                        </p>

                        
                        <p>Emőke nagyon támogató volt ebben is, hiszen a tapasztalatai szerint nagyon sokat jelenthet a szülő nőnek,
                        ha az anyává válás óráiban az anyanyelvén szólnak hozzá.
                        </p>

                        <p>Hazarepültem hát, szülni a szülőföldemre.
                        </p>

                        <p><i>Szandra S. - Szardínia</i></p>
                    </div>
                    
                    <div className="tags">
                        <p>Címkék:</p>
                        <Link to="/olvasnivalok">Olvasnivalók</Link>
                        <a href="#">Szüléstörténetek</a>
                    </div>
                </div>
            
            </div>

            <div className="szardinia-anyavalas-articles">
                <div className="szardinia-anyavalas-articles-heading">
                    <h5>Olvasnivalók</h5>
                    <h6>Blog & Történetek</h6>
                </div>

                <div className="szardinia-anyavalas-cards container">
                    <div className="szardinia-card-container one">
                        <div className="szardinia-img-holder">
                            <a href="#">Szüléstörténetek</a>
                        </div>
                        <div className="card-text">
                            <h4>"Oly távol vagy tőlem és mégis közel..."</h4>
                            <i className="far fa-calendar"> 2017. 09. 06</i>
                            <p></p>
                        </div>
                    </div>
                    <div className="szardinia-card-container two">
                        <div className="szardinia-img-holder">
                            <a href="#">Szüléstörténetek</a>
                        </div>
                        <div className="card-text">
                            <h4>Anyává válni Cipruson</h4>
                            <i className="far fa-calendar"> 2016.10.13.</i>
                            <p></p>
                        </div>
                    </div>
                    <div className="szardinia-card-container three">
                        <div className="szardinia-img-holder">
                            <a href="#">Szüléstörténetek</a>
                        </div>
                        <div className="card-text">
                            <h4>Csodák márpedig vannak!</h4>
                            <i className="far fa-calendar"> 2018. 01. 16.</i>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="szardinia-anyavalas-button">
                <Link to="/olvasnivalok" className="szardinia-anyavalas-btn">További bejegyzések</Link>
                </div>
            </div>
        </section>
    </div>
    )
}
