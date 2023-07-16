import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog57Pic1 from "../../../image/blog/blog-57-hero-dulakor-tihanyban.png";
import Blog57Pic2 from "../../../image/blog/blog-57-dulakor-tihanyban.jpg";

export default function SubBlog57() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog57Pic1} alt="dulakor-tihanyban"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Dúlakör Tihanyban</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. augusztus 23.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog57Pic2} alt="dulakor-tihanyban"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Mindannyian nagyon vártuk augusztus első hétvégéjét. Már lassan másfél éve, hogy megalakult a dúlakörünk és azóta havonta találkozunk, hogy közösen, tapasztalatokat cserélve tanuljunk lélektanról, dúlai szolgálatról, szülésről, születésről és még sok minden másról.
                        </p>
                        <p>
                            De a továbbképzéseken kívül másért is fontos nekünk, hogy rendszeres időközönként együtt lehessünk. Vágyunk arra, hogy közösen gyűjtsünk élményeket és hogy megoszthassuk egymással életünk örömeit, gondjait, dilemmáit is.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Így aztán nagyon örültünk, hogy a közelmúltban három napot tölthettünk Tihanyban, az egyik dúlatársunk családjának nyaralójában.
                </p>
                <p>
                    Rengeteget beszélgettünk, és alig-alig aludtunk. Közösen főztünk, vásároltunk, sétáltunk, egy picit dolgoztunk, és nagyon sokat nevettünk.
                </p>
                <p>
                    Fantasztikus élmény volt ismét megtapasztalni, hogy milyen megtartó ereje van egy női körnek! Sokfélék vagyunk, nagyon különböző élethelyzetben éljük a mindennapjainkat, de közös bennünk, hogy szeretjük és elfogadjuk egymást.
                </p>
                <p>
                    Ez és a köztünk lévő bizalom teszi lehetővé, hogy az érzéseinket, személyes élményeinket megosztva tanulhassunk egymástól a nőiségről, anyaságról is.
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
