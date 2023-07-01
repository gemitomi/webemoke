import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public09Pic1 from "../../../image/publications/public-09-hero-a-hit-amely-vilagra-segiti-a-kisbabakat.png";
import Public09Pic2 from "../../../image/publications/public-09-a-hit-amely-vilagra-segiti-a-kisbabakat.png";

export default function Public09() {
    return (
        <div>
           <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public09Pic1} alt="A hit, amely vilagra segiti a kisbabakat"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">A hit, amely világra segíti a kisbabákat</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. november 10.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/publications" class="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public09Pic2} alt="A hit, amely vilagra segiti a kisbabakat"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>A természetes szülés megvalósulásának egyik legfontosabb alapja az, hogy a nő hinni tudjon a saját erejében és a teste működésében. De van még valami, ami legalább ilyen fontos. Hogy ez mekkora segítő erőt jelent a szülésnél, arról néhány héttel ezelőtt újra megbizonyosodhattam.</b>
                        </p>
      
                    </div>
                </div>
                <p>
                    A hit, amely világra segíti a kisbabákat. Szép őszi délután volt, már alkonyult. A szülőszoba ablakán lévő függönyök is be voltak húzva, így az anyának szinte csak a körvonalai látszottak. Meztelen teste szabadon lebegett a vajúdás hullámain. Eleinte lábaival lágyan rugózva sétálgatott a szobában, aztán négykézlábra ereszkedve ringatózott. Amikor később újra felállt, táncba hívott engem is. A vállaimra támaszkodott és csípőjét mozgatva köröket rajzolt a levegőbe gyönyörű, gömbölyű pocakjával. Ösztönös mozdulatai olyan varázslatot teremtettek, amelyek elcsendesítettek mindannyiunkat, csak a vajúdás hangjai rajzoltak színes vonalakat a szobát lassan beburkoló sötétségbe.
                </p>
                <p>
                    Nem voltunk egyedül. Az apán, és a szülésznő kívül egy szülésznő-gyakornok is jelen volt a helyiségben. Senki nem tett semmit, csak figyeltük őt.
                </p>
                <p>
                    Valahol a háttérben ott állt még az anya orvosa is. Türelmesen, nyugodtan. Nem vizsgálgatta, nem irányította, nem kérdezgette az anyát, még én is csak alig érzékeltem, hogy egyáltalán jelen van.
                </p>
                <p>
                    Kivételes ember. Nem először voltunk együtt szülésnél, de keveset beszéltünk még. Vele valahogy nem a szavak szintjén kommunikálok, nincs is rá szükség. Kölcsönösen tiszteljük egymást és mindketten tudjuk kimondatlanul is, hogy miért.
                </p>
                <p>
                    Az, amivel ő a legnagyobb segítséget nyújtja a szülő nőknek, se nem gyógyszer, se nem olló. Mindamellett, hogy szakmai tudásának teljes birtokában figyeli és követi a vajúdás folyamatát, a jelenlétével alapvetően nem ezt érezteti. Ez az ember hinni tud abban, hogy a nők képesek és tudnak szülni és ez az ő legfontosabb – bár nem a kezében tartott – orvosi eszköze.
                </p>
                <p>
                    Lenyűgöző volt látni, hogy mekkora megerősítést jelentett a hite most is.
                </p>
                <p>
                    Amikor az anya hangjai azt jelezték, hogy már a vajúdása végén jár, az orvos néha-néha megszólalt, de mindig csak ennyit mondott halkan:<br/>
                    <i>„Meg tudja csinálni, csak hagyja, engedje! Rengeteg erő van magában.”</i>
                </p>
                <p>
                    Az anya szemben állt velem és a vállaimra támaszkodva ringatózott. A saját testemen is éreztem, ahogy elönti őt ez az erő. Felemelte a fejét, a szemembe nézett és határozottan kijelentette :<br/>
                    <i>„Meg tudom csinálni.”</i>
                </p>
                <p>
                    <i>„Csak hagyd, engedd!.”– ismételtem én is, és ő alig néhány perc múlva a saját ritmusában és erejéből, mindenféle beavatkozás nélkül a világra engedte kislányát.</i>
                </p>
                <p>
                    <a href="https://nlc.hu/baba/20091110/a_hit_amely_vilagra_segiti_a_kisbabakat/">https://nlc.hu/baba/20091110/a_hit_amely_vilagra_segiti_a_kisbabakat/</a>
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications">Publikációim</Link>
            </div>
        </div>
    </section>  
        </div>
      )
}
