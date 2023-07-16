import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog25Pic1 from "../../../image/blog/blog-25-hero-dula-zarovizsga.png";
import Blog25Pic2 from "../../../image/blog/blog-25-dula-zarovizsga.jpg";

export default function SubBlog25() {
  return (<div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog25Pic1} alt="dula-zarovizsga"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Dúla záróvizsga</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. június 10.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog25Pic2} alt="dula-zarovizsga"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Nagyon szép, felemelő nap volt a tegnapi. Két évnyi továbbképzés után újabb 9 dúla tett sikeres záróvizsgát és vált Békés szülésfelkészítő és szüléskísérő dúlává.
                        </p>
                        <p>
                            A délelőtt az írásbeli teszt kitöltésével telt.  A vizsgázók az elmúlt két év dúlaműhelyein elhangzott témákkal kapcsolatosan kaptak teszt- illetve kifejtésre váró kérdéseket.
                        </p>

                    </div>
                </div>

                <p>
                    Ezt követően szóbeli tételt húztak, melyben egy olyan helyzet leírása szerepelt, amellyel a munkájuk során találkozhatnak. A feladatuk az volt, hogy a helyzetet ismertetve beszéljenek arról, hogy mit tennének, hogyan oldanák meg az adott szituációt.
                </p>
                <p>
                    Jól ismerem őket, évek óta együtt dolgozunk, tanulunk. Megtisztelő számomra, hogy osztoznak abban a szemléletben, amit a hivatásom gyakorlása során én is képviselek, és ez erőt ad ahhoz, hogy továbbra is olyan hittel képviseljem a dúlaság ügyét, mint ahogy eddig is tettem.
                </p>
                <p>
                    Nagyszerű érzés, hogy egyre többen vagyunk olyanok, akik hiszik, hogy a családnak mint egységnek már a várandósság idején  történő minél jobb megismerése komoly jelentőséggel bír a szülések kísérésekor.
                </p>
                <p>
                    A hivatásuk iránti elköteleződésük, emberségük, érzékenységük és tudásuk miatt nagyon szeretem őket és büszke vagyok rájuk.. 🙂
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog2">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
