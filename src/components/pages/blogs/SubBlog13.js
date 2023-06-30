import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog13Pic1 from "../../../image/blog/blog_13_hero_szoptatasrol.png";
import Blog13Pic2 from "../../../image/blog/blog_13_a_szoptatasrol.jpg";
import Blog13Pic3 from "../../../image/blog/blog_13_b_szoptatasrol.png";

export default function SubBlog13() {
  return (
    <div>
      <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog13Pic1} alt="Az igeny szerinti szoptatasrol"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Az igény szerinti szoptatásról</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2015. április 15.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog13Pic2} alt="Az igeny szerinti szoptatasrol"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Sződy Judit pszichológus, IBCLC szoptatási tanácsadó írását teszem most közzé. Örömmel várom a hozzászólásokat!
                        </p>
                        <p>
                            <i>„Na, de mikor alakul ki a rendszer?” „A sok etetés miatt hasfájós lesz!” „Látod, így nem jut időd magadra és a férjedre! Tönkre megy a házasságotok!”</i>
                        </p>
                        <p>
                            Szerencsés az az igény szerint szoptató anya, akit nem zaklatnak hébe-hóba ilyen, vagy hasonló mondatokkal. Persze, mindenki a legjobbat akarja a babának. Na, de mi a legjobb neki?
                        </p>


                    </div>
                </div>

                <p>
                    Igény szerinti szoptatás, együtt alvás, hordozás – ez a kötődő nevelés triásza, ami egyenként (és így együttesen meg pláne) sokaknál kiveri a biztosítékot. Miért érint ez ilyen mélyen valakit, hogy vérre menő vitába szálljon, pedig nem is a saját gyerekéről van szó? Mert amikor ő volt kismama, ennek az ellenkezőjét kellett csinálnia, és most el kellene ismernie, hogy ez nem volt igazán ideális a baba szempontjából. Mert pánikba esik, ha azt érzi, hogy kicsúszik a felnőtt kezéből a kontroll. Mert harminc éve ennek ellenkezőjét állítja, és be kellene látni, hogy téves információkat adott tovább sok szülőnek. Sok oka lehet az idegenkedésnek, hatása viszont egy: elbizonytalanítja az anyát abban, hogy jól teszi-e, amit tesz.
                </p>

                <h4>Bizalom verzus bizalmatlanság</h4>

                <p>
                    A legfontosabb feltenni a kérdést: alakítani akarod-e a gyereked, vagy megismerni, és támogatni, hogy a legjobbat hozza ki magából? Együttműködést akarsz vagy irányítást? Bizalmat vagy bizalmatlanságot? A sírni hagyott, órára etetett babák esetében nem csak az a baj, hogy túl éhesek, aztán meg túl sokat esznek. Ez talán a kisebbik gond, bár a később kialakuló táplálkozási zavarok kérdésében megfontolandó. Az igazi probléma, hogy mit tanul meg a frissen érkezett baba a világról, a kapcsolatairól. Ha nem az igényeit figyelik, hanem az órát, akkor a baba pusztán azt észleli, hogy semmi köze az érzéseinek, a jelzéseinek ahhoz, hogy mikor segítenek rajta. Mit tehetne mást, leszokik az őszinte kommunikációról, és beáll arra: az életben a dolgok esetlegesen történnek, tőle függetlenül. Nincs kapaszkodó. A babának ugyanis nincs órája, és időérzéke sem. Ő a pillanatban él, és az éhséget, vagy elhagyatottság érzést teljes testével – lelkével átéli. Nem tudja, hogy van még fél óra, nem ismeri a türelem fogalmát, csak azt tudja, hogy nagyon nem komfortos, amit átél, és úgy érzi, soha nem szabadulhat meg ettől az érzéstől. Megtanulja, hogy nem bízhat abban, hogy figyelembe veszik az igényeit, és ebből a későbbiekben még sok bonyodalom származhat.
                </p>

                <h4>Egy félreértés nyomában</h4>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog13Pic3} alt="Az igeny szerinti szoptatasrol"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Vajon miért jutottunk el onnan, hogy egy baba bármikor szophat, odáig, hogy, ha három óránál gyakrabban tesszük mellre, akkor aggódni kezdünk, hogy ez nem normális. Azért, mert a szoptatást etetésnek tekintjük. Úgy gondoljuk, hogy a baba csak akkor akar megint szopni, ha megéhezett, vagyis, ha teljesen megemésztette az előző adagot, és ez a számítások szerint három óra. Régen senki sem gondolkodott rajta, hogy mennyit eszik a gyerek, mennyit kellene ennie, mennyi ideig tart az emésztés, és mikor lesz jogos a mell követelése. Régen ugyanis a szoptatást nem pusztán etetésnek tekintették, hanem vigasznak, menedéknek, altatónak is. 
                        </p>

                    </div>
                </div>

                <p>
                    Ahogy ma a cumit. Ha cumit adunk egy baba szájába, soha nem gondolkodunk, hogy mikor adtuk neki utoljára, eltelt-e már megfelelő idő az utolsó cumizás óta. Ha a párunkhoz bújunk, soha nem nézi az órát, hogy jogos-e az odabújási igényünk kifejezése. 
                </p>
                <p>
                    <b>Ha a szoptatást az érzelmi szükségletek kielégítésének is tekintjük, akkor soha nem fogunk órát nézni, hanem hallgatunk a babára és megadjuk neki, amit kér. Így segítjük a biztonságos kötődés kialakulását, és a bizalom megerősödését.</b>
                </p>
                <p>
                    Forrás: http://www.liliputi.hu/blog/az-igeny-szerinti-szoptatas/
                </p>
            </div>

            <div class="blog-global-tags">
              <p>Címkék:</p>
              <Link to="/olvasnivalok">Olvasnivaló</Link> 
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

