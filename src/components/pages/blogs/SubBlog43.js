import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog43Pic1 from "../../../image/blog/blog-43-hero-hatartalanul.png";
import Blog43Pic2 from "../../../image/blog/blog-43-hatartalanul.png";

export default function SubBlog43() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog43Pic1} alt="hatartalanul"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Határtalanul</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. május 16.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog43Pic2} alt="hatartalanul"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Tíz évvel ezelőtt, amikor a férjem létrehozta az első e-amil címemet, még egy érdeklődő, de bizonytalan kisdiák izgalmával ültem a számítógépünk elé. Ő szorgosan és nagy türelemmel tanítgatott a szövegszerkesztésre, táblázatkezelésre, én pedig hosszasan keresgéltem a különböző betűk leírására szolgáló billentyűket. 🙂
                        </p>
                        

                    </div>
                </div>

                <p>
                    Aztán amikor a Nők Lapja Cafén elkezdtem cikkeket írni, hirtelen kitágult a világ. Különleges, és újszerű élmény volt, hogy olyan nők, anyák is megtiszteltek a bizalmukkal és írtak nekem levelet, akiket nem ismertem személyesen. Tanácsot kértek vagy megosztották velem a várandóssággal, szüléssel kapcsolatos élményeiket.
                </p>
                <p>
                    Fantasztikus, hogy a világhálónak köszönhetően a segítségnyújtás most már a Föld bármelyik pontjára elér. Nyugtattam már meg skype-on Floridában élő anyát, tartok személyre szabott szülésfelkészítést tőlem akár több országnyira élő pároknak webkamera segítségével, de egy leendő nagymama segítségével eljutottak már a gondolataim az Equadorban élő lányához is.
                </p>
                <p>
                    Ezek a levelek, hívások azért állnak különösen közel a szívemhez, mert olyanok küldik, akik magyar anyanyelvűek, de nem Magyarországon hozzák világra a gyermeküket.
                </p>
                <p>
                    Amikor a harmadik lányunkat vártam, akkor egy külföldi utazás során tudatosult bennem, hogy milyen mély jelentése van számomra a szülőföld és az anyaföld szavaknak.
                    (A történet itt olvasható:<a href="https://bekesemoke.hu/tengerviz-szulofold/">https://bekesemoke.hu/tengerviz-szulofold/</a>)
                </p>
                <p> 
                    A magyar nyelv nagyon szépen kifejezi azt, amit ezek a külföldön élő anyák is alátámasztanak, hogy az anyaságról beszélni anyanyelven a legjobb, szülni pedig legtöbbünknek a szülőföldünkön a legmegnyugtatóbb.
                </p>
                <p>
                    Így aztán határtalan öröm és nagyon szép feladat a határainkon túl élőket segíteni ebben az időszakban. 🙂
                </p>


            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
