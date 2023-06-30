import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog12Pic1 from "../../../image/blog/blog_12_hero_dulatabor.png";
import Blog12Pic2 from "../../../image/blog/blog_12_a_dulatbor-2015.jpg";
import Blog12Pic3 from "../../../image/blog/blog_12_b_dulatabor.jpg";

export default function SubBlog12() {
  return (
    <div>
      <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog12Pic1} alt="Dulatabor"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Dúlatábor</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2015. július 06.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog12Pic2} alt="Dulatabor"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Tavaly, Kemencén volt a hagyományteremtő, az idén, Dunabogdányban hagyománnyá is nyilvánítottuk, hiszen már  a jövő évi táborunknak is megvan a szervezője és a helyszíne. 🙂
                        </p>
                        <p>
                            Nagyon fontos, szeretetteljes és összekovácsoló élményeket adnak nekünk  ezek a júniusi hosszú hétvégék. Kirándulunk, tüzet rakunk, énekelünk, beszélgetünk, jógázunk, jókat főzünk, ékszereket készítünk vagy éppen pihentető masszázsban részesítjük egymást.  Kicsit dolgozunk is, hiszen ez az együttlét jó alkalom arra is, hogy közösen fogalmazzuk meg a Békés Dúlakör jövőbeni terveit és céljait, de azért a legtöbb időben egymásra figyelünk és egymásnak örülünk.
                        </p>


                    </div>
                </div>

                <p>
                    Mert hiányoznak a képzés során annyira várt nyitókörök. Mert érdekel minket, hogy van a másik, mi foglalkoztatja őt a dúlai léten innen és túl. Mert szeretjük és élvezzük a sokféleségünket. Mert őszintén merjük vállalni a gondolatainkat, érzéseinket, hiszen tudjuk, hogy ebben a körben bátran és biztonságosan adhatjuk önmagunkat. Mert elfogadjuk egymást és a különböző véleményeket. Mert tudunk szeretettel és segítően tükröt tartani egymásnak úgy, hogy azért a tábor végén hálásak vagyunk.
                </p>
                <p>
                    Mindez azért gyönyörű, mert a sokszínűségünk értékei mellett van valami, amiben hasonlóak vagyunk.  És ez az elfogadás, ami pedig a legfontosabb dúlai eszközünk. 🙂
                </p>
                <p>
                    Gyakoroljuk dúlatábor előtt alatt és után, mert tudjuk, hogy a nyitottság, az ítéletmentes és empatikus attitűd az, ami a legközelebb visz a hozzánk forduló párokhoz, a velünk dolgozó orvosokhoz és szülésznőkhöz, és végső soron önmagunkhoz is.
                </p>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog12Pic3} alt="Dulatabor"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Nagyon szeretem ezt a közösséget, és jó hallani, hogy a többiek is ezt érzik.  Évek óta vagyunk kísérői egymás életének is, és bár természetszerűleg nem tartjuk napi szinten a kapcsolatot, a nyári táborunk, az adventi estéink és a havi női körös együttléteink, esetmegbeszélőink mindig megerősítik bennünk ennek a közösségnek az értékeit.
                        </p>
                        <p>
                            <b>Adjon nekünk az élet még sok ilyen vidám, mély, őszinte, töltekezős együttlétet!</b>
                        </p>
                        
                    </div>
                </div>

                <div class="blog-global-tags">
              <p>Címkék:</p>
              <Link to="/olvasnivalok">Olvasnivaló</Link> 
              <Link to="/blog">Blog</Link>
            </div>
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

