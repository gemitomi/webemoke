import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"


import Blog3Pic1 from "../../../image/blog/blog_03_hero_dulatrening.png";
import Blog3Pic2 from "../../../image/blog/blog_03_dulatrening_menni.png";

export default function SubBlog03() {
  return (
    <div>
       <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog3Pic1} alt=""/>
                
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Dúlatréningre menni jó</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2017. május 18.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog3Pic2} alt=""/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Készülődöm. Holnapután dúlatréningre megyek. 
                            Körülbelül harminchatodszorra. Ugyanolyan izgalommal és várakozással a szívemben, 
                            mint amikor először ültem be résztvevőként a csoportba. 
                            Ma már én kísérem a csoportokat, de van, ami nem változik.
                            
                        </p>

                        <p>
                            A bizalom légköre, a női tapasztalatok, az elinduló önismereti 
                            folyamatok és el nem sírt könnyek, az önfeledt nevetések, 
                            a sűrű csendek minden tréningen velünk vannak.  
                            Mi magunk teremtjük őket, hozzuk vagy tanuljuk, 
                            ösztönösen tesszük vagy ott ébredünk rá, milyen ereje van 
                            az egymásra hangolt együttlétnek.
                        </p>

                    </div>
                </div>
                <p>Mindig mások érkeznek a csoportba. Nem ismerik egymást és én sem őket. 
                    Mégis mindig megtörténik az őszinte elfogadás, a tapasztalatok megosztása, 
                    ahol én is minden alkalommal rengeteget kapok és tanulok.
                </p>

                <p>
                    Különleges élmény ebben a csoportfolyamatban egyszerre 8-10 nő vajúdását kísérni. 
                    Figyelni, mellettük lenni, ahogy megszületik bennük a vágy után az elhatározás, 
                    és az abban való megerősödés, hogy dúlák legyenek.  
                    Követni, ahogy átmennek a belső folyamataikon, ahogy átszűrik magukon, 
                    hogy mit is jelent ez a hivatás, miért is szeretnének mások szülésénél segíteni, 
                    hogyan vannak a saját születés- és szülésélményeikkel és mindazokkal a készségekkel, 
                    amelyek ahhoz kellenek, hogy jó segítők lehessenek.
                </p>

                <p>
                    Várom őket most is nagyon. Adni szeretnék nekik és elfogadni mindazt, amit ők hoznak nekem.
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
