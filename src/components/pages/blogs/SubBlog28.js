import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog28Pic1 from "../../../image/blog/blog-28-hero-tagulo-dulakor-bovulo-ismeretek.png";
import Blog28Pic2 from "../../../image/blog/blog-28-tagulo-dulakor-bovulo-ismeretek.jpg";

export default function SubBlog28() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog28Pic1} alt="tagulo-dulakor-bovulo-ismeretek"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Táguló dúlakör, bővülő ismeretek</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. január 31.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog28Pic2} alt="tagulo-dulakor-bovulo-ismeretek"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Nagyon vártuk Ágit. Mind a 30-an azért drukkoltunk, hogy a startközeli kisbabák megengedjék, hogy a szülésznőjük egy teljes délutánt dúlakörben tölthessen.
                        </p>
                        <p>
                            Így lett. 🙂
                        </p>

                    </div>
                </div>

                <p>
                    Örültem, hogy ennyien összegyűltünk. “Öreg” és még kezdő dúlák, Békés Dúlakörön innen és túl. Volt, akikkel én is itt ismerkedtem csak össze, most találkoztunk először és olyanok is, akikkel évek óta nagyon szoros kapcsolatban vagyok.  Jó volt látni, hogy  mindannyiunkat összeköt az az igény, hogy folyamatosan bővítsük az ismereteinket. 
                </p>
                <p>
                    Ágitól rengeteget tanultunk és pillanatok alatt elrepültek az órák. Beszéltünk a szülésindítás módozatairól, a spontán szülésindulásról, a terminustúllépésről, arról, hogy mely esetekben kell a vajúdás korai szakaszában bemenni a kórházba és mikor nem, a programozott szülés és a szülésindítás közti különbségről, és sokat az oxitocin hormonról. Hallhattunk a burokrepesztés indikációiról és a baba méhen belüli elhelyezkedéséről, forgásairól, de mennyi kérdés maradt még, amit nem érintettünk!
                </p>
                <p>
                    Éppen ezért a gyógyszeres és nem gyógyszeres fájdalomcsillapítás módjairól, a gátmetszésről, a császármetszésről, a kitoláskor leggyakrabban választott pozíciókról, a jogi kérdésekről és még sok egyéb más témáról <b>március 2-án pénteken, délután 15-20 óráig</b> hallgathatjuk ismét Rákóczi Ágit, mert hogy nagy szeretettel visszavárjuk – és ha a babák ismét engedélyezik – újra eljön közénk!
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
