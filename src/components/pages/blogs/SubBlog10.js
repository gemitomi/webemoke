import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog10Pic1 from "../../../image/blog/blog_10_hero_ujjaszuletes.png";
import Blog10Pic2 from "../../../image/blog/blog_10_logo-icon.png";

export default function SubBlog10() {
  return (
    <div>
      <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog10Pic1} alt="Ujjaszuletes"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Újjászületés</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2017. október 14.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog10Pic2} alt="Ujjaszuletes"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Ma éppen 25 éve, hogy anyává születtem. A várandósságom 37. hetében ezen a napon jött világra Gyöngyvér lányom, akinek az érkezése határtalan boldogsággal töltött el.
                        </p>
                        <p>
                            De ma nem csak őt ünnepeljük, kettős ünnep van. Egy újjászületésé is.
                        </p>
                        <p>
                            <b>A 10 évvel ezelőtt létrehozott honlapom, most, mára új ruhába bújt, és mind tartalmilag, mind formailag teljesen megújult.</b>
                        </p>


                    </div>
                </div>

                <p>
                    Hosszú hónapok munkája van mögöttünk mindazokkal, akik ennél a születésnél bábáskodtak. Lassan építkező, finoman érlelődő folyamat volt ez, de annak, ami ebben utolsó két-három napban történik bennem, annak már valami egészen más a dinamikája.
                </p>

                <p>
                    A figyelmem teljesen idehúzódott. Befelé fordultam, és magam is elcsodálkoztam, mennyire nyugtalanná tesz és zavar, amikor kizökkentett valami a szövegek fogalmazásából vagy a képek rendezéséből, elfelejtettem enni, inni, és amikor éjjelente holt fáradtan bedőltem az ágyba, akkor sem tudtam elaludni. Döbbenten meredtem rá többször is az óramutatók járására, mert elmélyülve a tartalom írásában teljesen elvesztettem az időérzékelésemet. Volt, hogy könnyek szöktek a szemembe, máskor fellelkesültem és órákig vitt előre egy jófajta energia, aztán elbizonytalanodtam, hogy képes leszek-e végig csinálni, most meg fáradtan, de büszkén és nagyon izgatottan méregetem az újszülöttet.
                </p>
                <p>
                    Mosolyogva nyugtáztam magamban, hogy pont olyan érzéseket élek át, mint amikor valaki vajúdik és szül. Aztán egyszer csak szöget ütött valami a fejembe, és ma reggel kíváncsiságból a kezembe vettem a naptáramat.
                </p>
                <p>
                    2016. január 27. szerda délelőttre van beírva az első bejegyzés: HONLAP – megbeszélés. Az év 4. hetében történt ez.
                </p>
                <p>
                    Ma, az év 41. hetében járunk. Az új oldal, akár csak a lányom, a 37. héten született meg!
                </p>
                <p>
                    Mély tisztelettel és elismeréssel köszönöm Brigi, Boglárka, Luca és Bucó munkáját, akik maximális profizmussal, kreativitással, a kéréseimre mindig nyitottan, rugalmasan és kedvesen segítettek abban, hogy ez az újjászületés megtörténhessen.
                </p>
                <p>
                    Zoli! Köszönöm, hogy  dúlaként nem csak a családod életébe fogadtál be, hanem ezt a szívemnek kedves honlapot is felkarolva lehetővé tetted, hogy ilyen nagyszerű emberekkel dolgozhassak együtt!
                </p>
                <p> www.corpuscom.hu</p>
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

