import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog6Pic1 from "../../../image/blog/blog_06_hero_szuletes_napja.png";
import Blog6Pic2 from "../../../image/blog/blog_06_szuletes_napja.png";

export default function SubBlog06() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
       <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog6Pic1} alt="Szules es szuletes napjai a Bekes Dulakorrel"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Szülés és születés napjai a Békés Dúlakörrel</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2017. január 22.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog6Pic2} alt="Szules es szuletes napjai a Bekes Dulakorrel"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Amiről máshol nem hallunk eleget</b>- interaktív előadások és workshopok
                        </p>
                        <p>
                            Szeretettel várunk minden kismamát és gyermeket váró párt, továbbá minden téma iránt érdeklődőt, aki szeretne többet megtudni a várandósság és a családdá válás lelki aspektusairól, illetve felkészülten és kompetensen szeretne megérkezni a gyermekvállalás kapujába.
                        </p>


                    </div>
                </div>

                <p>
                    Egy gyönyörű, bensőséges helyszínre, a Zen kertbe invitálunk benneteket, ahol interaktív előadásokkal, beszélgetésekkel és műhelymunka lehetőségekkel várnak benneteket a Békés Dúlakör tagjai (<a href="https://www.bekesdulakor.hu/">https://bekesdulakor.hu</a>),és meghívott vendégeink: Kecskés Karina színésznő és Mádai Vivien Televíziós műsorvezető. A résztvevők közt minden nap értékes nyereményeket sorsolunk ki!
                </p>

                <p><b>Helyszín:</b> Zen kert; cím: Budapest, 1119 Fehérvári út 45-53/B </p>

                <p><b>Napi belépőjegy:</b><i>3 000 Ft/fő </i>vagy <i>5 000 Ft/pár</i></p>

                <p>
                    Rendezvényünk bensőséges hangulatú, interaktív beszélgetéseknek ad otthont, így a résztvevők száma korlátozott.
                </p>

                <p><b>Részletes program:</b></p>
                <br/>

                <p><b>02.17. Péntek:</b> <i>A testünkkel párhuzamosan a lelkünk is változik</i></p>


                <p>
                    10:00-10:50 Ki voltam, ki vagyok, és ki leszek? – Várandósság, várakozás, változás - beszélgetés Wittmann Andreával <br/>
                    11:00-11:50 A nagy találkozás – az első pillanatok a csodálatos újszülöttel és az aranyóra jelentősége - Lénárd Orsi előadása <br/>
                    12:00-12:50 Érzelmi hullámvasúton – felkészülés a gyermekágy és a szoptatás kihívásaira - Harmath Tünde előadása<br/>
                    13:15–14:05 Harmóniában a változásokkal – ismerkedés a Bach virágterápiával - Hengerics Katalin előadása és beszélgetés a virágesszenciák alkalmazásáról<br/>
                    14:15-15:15 Szülőpozíciós jógagyakorlatok és relaxáció Szlifka Tündével<br/>
                    12:00-14:00 További lehetőség a kisteremben: Szüléskarkötő készítés Féldrágakövekből és ásványokból Szlifka Tündével (Kizárólag a karkötőkbe kerülő ékkövek anyagára térítendő)<br/>
                </p>
                <br/>

                <p>
                    Napi Nyeremény: egy 60 perces kismama masszázsutalványt és egy 5000Ft értékű Szlifka Tünde ékszerei utalványt sorsolunk ki.
                </p>
                <br/>



                <p><b>02.18. Szombat:</b> <i>Hogyan, hol és kivel szüljünk?</i></p>

                <p>
                    10:00-10:50 Bizalom és biztonság – hogyan válasszuk meg a szülés helyszínét és a kísérőket? Tervezhető-e a szülés? - Békés Emőke előadása<br/>
                    11:00-11:50 Megnyíló kapuk – beszélgetés Kecskés Karina színésznővel várandósságról, szülésről, anyává válásról<br/>
                    12:00-12:50 Módosult tudatállapotban – a pozitív kommunikáció jelentősége a vajúdás és a szülés folyamán - Vékony Zsuzsi előadása<br/>
                    13:15-14:05 Fájdalom, és megküzdési stratégiák, természetes fájdalomcsillapító módszerek - Vörös Anna előadása<br/>
                    14:15-15:15 Aromaterápiás workshop: illóolajok alkalmazása és tesztelése - Szonda Györgyivel<br/>
                    12:00-14:00 További lehetőség a kisteremben: Legyen a teher könnyebb! – egyéni tanácsadás és Kinesiotape ragasztás Lénárd Orsival (Kizárólag a felragasztott szalag anyagára térítendő)<br/>
                </p>
                <br/>

                <p>Napi nyeremény: egy Tudatos Pocakos on-line szülésfelkészítést és egy 60 perces dúlai konzultációs lehetőséget sorsolunk ki.</p>

                <br/>

                <p><b>02.18. Vasárnap:</b> <i>Párunk, gyermekünk apja, bővülő család</i></p>

                <p>
                    10:00-10:50 Apák szerepe a várandósság, a szülés és a gyermekágyas időszak alatt - Mészáros Eszter előadása<br/>
                    11:00-11:50 Család születik – beszélgetés Mádai Vivien televíziós műsorvezetővel<br/>
                    12:00-12:50 Hogyan alakul a párkapcsolatunk szülés után? - beszélgetés Sós Pannával<br/>
                    13:15-14:05 Érintés és intimitás a párkapcsolatban – kapcsolódási Gyakorlatok Zágoni Bettinával <br/>
                    14:15-15:15 Masszázs workshop édesapáknak Szlifka Tündével
                    12:00-14:00 További lehetőség a kisteremben: Hordozni jó! – alapvető tudnivalók és egyéni hordozási tanácsadás Szabó Évával<br/>
                </p>
                <br/>

                <p>
                    Napi nyeremény: egy 60 perces Shiatsu masszázskezelést és egy babamasszázs alkalmat sorsolunk ki.
                </p>
                <br/>

                <p>Azok közt, akik mindhárom napon a vendégeink lesznek, kisorsolunk további egy, akár továbbajándékozható, 60 perces dúlai konzultációs lehetőséget!</p>
                <br/>
                <p><b>Vendéglátás:</b> Sütivel, pogácsával, gyümölccsel, egészséges ropogtatni valóval és teával várunk benneteket!</p>
            </div>
            
            <div className="blog-global-tags">
              <p>Címkék:</p>
              <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog">Blog</Link>
            </div>
        </div>
      </section>
      <section className="consultation4">
        <div className="consultation-btn-h2"><h3>KÉRDEZNI VAGY MONDANI SZERETNÉL VALAMIT AZ OLVASOTTAKKAL KAPCSOLATBAN?<br/><br/><span>Szeretettel várom jelentkezésedet!</span></h3></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
      </section> 
    </div>
  )
}
