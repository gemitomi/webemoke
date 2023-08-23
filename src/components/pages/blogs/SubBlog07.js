import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog7Pic1 from "../../../image/blog/blog_07_hero_csend_fia.png";
import Blog7Pic2 from "../../../image/blog/blog_07_csend_fia.png";
import Blog7Pic3 from "../../../image/blog/blog_07_a_a_csend_fia.jpg";
import Blog7Pic4 from "../../../image/blog/blog_07_b_a_csend_fia.jpg";

export default function SubBlog07() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
       <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog7Pic1} alt="A csend fia"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A csend fia</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2016. december 14.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog7Pic3} alt="A csend fia"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            A december beköszöntével érkezett. Sötétedés után indult, kora este, csöndben, finoman. Édesanyja szinte nem is érezte az összehúzódásokat, melyek mégis egyre nagyobbra nyitották előtte a kaput.
                        </p>
                        <p>
                            Nyugodt és lassú folyamat volt, örömteli adventi várakozás. A szülőszoba falán még az óra sem járt. Háromnegyed kilencet mutatott, és én viccelődtem, hogy úgy látszik, ebben a szobában minden gyerek háromnegyed kilenckor születik. 
                        </p>
                    </div>
                </div>

                <p>
                    A nagy, kerek számlapos óra ugyanis arra hivatott, hogy pontos hirdetője legyen egy új élet megérkezésének, de talán elfáradt így év végére, így ő sem ketyegett. Csendes volt a már ünnepi díszbe öltözött szülészet, és ritka, hogy nem lehetett érzékelni, vannak-e még születőben más babák is. Jólesett, hogy a szobában nem kellett lámpát kapcsolnunk, csak az fenyőkoszorún lévő izzósor pici fényei világítottak.
                </p>

                <p>
                    Vártuk a kisfiú érkezését. Közeledése nem vert nagy hullámokat, így jókedvűen beszélgettünk a szülőkkel, és örültünk, hogy csakúgy, mint az első gyermekük születésekor, most ismét együtt lehetünk. Aztán egyszer csak váratlanul, leolvasni véltem az anya arcáról a kisfiú üzenetét.
                </p>

                <p><b>A baba a csendre várt.</b></p>

                <p>
                    Felajánlottam az anyának, hogy mi ketten, a szülésznőjével, magukra hagynánk őket egy kicsit. Nem kérte, hogy menjünk, de azt sem, hogy maradjunk.
                </p>

                <p>
                    Az ajtón kívül, pár lépéssel távolabb várakoztunk. Nem sokáig. Alig fél óra múlva az édesapa kinézett az ajtón, és csak annyit mondott, most már mehetünk.
                </p>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog7Pic4} alt="A csend fia"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            És mentünk azonnal. A kisfiú pedig jött. Már a kapuban járt és szelíd határozottsággal egyre csak közeledett. Hajas feje búbját megpillantva egy másodpercre a telefonom órájára néztem, és mosolyogva mutattam az apának. 8:45-öt mutatott. Mindketten hitetlenkedve pillantottunk a megfáradt, bölcs faliórára, aki mintha csak azt jelezte volna vissza: <i>“Na ugye, én megmondtam!”</i>
                        </p>
                    </div>
                </div>

                <p>
                    A kisfiúcska két perc múlva csendesen, békében megérkezett. Akkora boldogságot hozott magával, ami az egész teret betöltötte, és olyan végtelen nyugalmat, amit csak nagyon ritkán látok az újszülöttek arcán. Nem sírt, nem volt miért. Úgy váltott dimenziót, mint aki a tökéletes világból a tökéletes világba érkezik. Szülei katartikus öröme finoman, halkan burkolta be, miközben édesanyja mellkasán pihent. Pár perc múltán már a hüvelykujját szopizta teljesen magától értetődően, és érdeklődve nézelődött. Türelmesen várta, amíg a méhlepénye megszületése után az édesanyja a mellére veszi.
                </p>

                <p>
                    Ámulattal néztem, ahogy a szülei között fekve szopni kezdett, és kétség sem fért hozzá, hogy csendes szuszogásával mit üzen nekem. Így hát újra azt tettem, amit eddig is. Halkan kiléptem a szülőszobából, és az ajtó előtt őriztem tovább a nyugalmukat.
                </p>

                <p>
                    <i>“Milyen szép ez az adventi időszak!” </i>– fogalmazódott meg bennem, s közben gondolataim egészen Betlehemig röpítettek.
                </p>
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