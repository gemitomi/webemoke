import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog34Pic1 from "../../../image/blog/blog-34-hero-bucsu-a-botyitol.png";
import Blog34Pic2 from "../../../image/blog/blog-34-bucsu-a-botyitol.jpg";

export default function SubBlog34() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog34Pic1} alt="bucsu-a-botyitol"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Búcsú a Botyitól</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. november 2.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog34Pic2} alt="bucsu-a-botyitol"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Pontosan másfél évig volt szívemnek kedves találkozási pont a “Botyi”. Ennek a Vak Bottyán utcai lakásnak a falai között sok-sok emberi történet bomlott ki. Szerettem ezt a helyet én is és mindazok, akik vendégként megfordultak nálam.  
                        </p>
                        <p>
                            Hiába áll a város szívében a ház, a külvilág zaja sohasem zavarta meg az elmélyült beszélgetéseket, mert a nagy szoba ablaka egy belső udvarra és egy óriási gesztenyefára nézett.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Dúlák, illetve a hivatás iránt érdeklődő nők, várandósok és leendő apák osztották meg velem itt a gondolataikat, érzéseiket. A múlt évben néhány hónapra a családomat is befogadta a Botyi, amikor egy költözés miatt a régi helyen már nem, az épülő, új lakásunkban pedig még nem lakhattunk. 
                </p>
                <p>
                    A múlt héten mégis elköszöntem tőle, mert tovább kellett lépnem. Amikor a költöztetők elvitték az utolsó dobozt is, én még elüldögéltem kicsit az üres falak között, hogy  felidézzem az itt töltött hónapok emlékeit, aztán átballagtam a közeli Fadrusz utcába. Mostantól ugyanis itt, egy szintén nagyon szép, tágas lakás lesz a befogadója mindazoknak, akik bekopognak hozzám és a társaimhoz. Még öltöztetem, még melegítem, még csinosítgatom az új fészket, de bízom benne, hogy szeretni fogják a vendégeim.
                </p>
                <p>
                    Az első látogató, aki már a költözés napján benézett hozzám a hatodik emeleti ablakon, a Gellért-hegyi Szabadság-szobor nőalakja volt. 🙂
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
