import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog55Pic1 from "../../../image/blog/blog-55-hero-padon-ulve.png";
import Blog55Pic2 from "../../../image/blog/blog-55-padon-ulve.png";

export default function SubBlog55() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog55Pic1} alt="a-padon-ulve"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">A padon ülve</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. szeptember 03.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog55Pic2} alt="a-padon-ulve"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Éjszaka volt. A szülőszoba előtti váróhelyiség egyik padján ültem. Aki mellettem ült, arra kért, legyek vele ezekben az órákban, hogy ne legyen egyedül. Most nem ő szült, hanem a nővére.  Milyen érdekes! – gondoltam. Néhány évvel ezelőtt pont fordítva volt. Akkor mi voltunk bent az ajtón túl, és a testvére ült odakinn a váróban.
                        </p>
                        <p>
                            Különös hely ez, ahol minden ajtónyitódás izgalommal tölti el a kint ülőket, ahol a leendő apák azt fürkészik várakozó társaik arcán, hogy vajon ők is éreznek-e olyasmit, ami most bennük zajlik, és ahol furcsamód óránként ugrik egyet a percmutató.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Néztem a szülőszoba csukott ajtaját. Sokszor láttam már, de eddig mindig kinyílt előttem, és könnyedén bemehettem rajta, hiszen vajúdó nőkkel érkeztem, akik odabenn is számítottak rám. De most nem dúlaként voltam jelen, hanem egy hozzátartozó kísérőjeként.
                </p>
                <p>
                    Szülések kísérésekor előfordul, hogy a pár kérésére én tájékoztatom a kint várakozó családtagokat, így igyekszem mindig figyelemmel lenni rájuk is. Mégis, annak az éjszakának az emlékei közé befészkelte magát újból az a felismerés, hogy mennyire fontos időnként más perspektívából is  látni a dolgokat.
                </p>
                <p>
                    Átélni igazán mélyen, hogy milyen az ajtó másik oldalán.
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
