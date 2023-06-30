import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog11Pic1 from "../../../image/blog/blog_11_hero_oly_tavol.png";
import Blog11Pic2 from "../../../image/blog/blog_11_oly tavol.jpg";

export default function SubBlog11() {
  return (
    <div>
      <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog11Pic1} alt="Oly tavol vagy"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Oly távol vagy...</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2015. július 09.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog11Pic2} alt="Oly tavaol vagy"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Négy évvel ezelőtt a dúlai hivatásom egyik legszebb és legkülönlegesebb feladatával ajándékozott meg a sors. Egy Szardínián élő magyar várandós mama kért meg arra, hogy repüljek ki hozzá és néhány napot töltsek vele és a párjával, hogy a beszélgetéseink segítsék őket a szülésre és a szülői szerepre való felkészülésben. Az akkor élményeimről itt, a blogomban is beszámoltam több bejegyzésben is.
                        </p>
                        <p>
                            2014 őszén újra nagyon messziről érkezett egy levél a postafiókomba. Ez állt benne:
                        </p>


                    </div>
                </div>

                <blockquote>
                    <i>Kedves Emőke!</i>
                </blockquote>
                <blockquote>
                    <i>Szeretettel üdvözlöm Önt, én Mása vagyok. Interneten találtam Önre, és láttam, hogy dúlaként külföldre is kijön. Mi Cipruson élünk a Kedves Férjemmel, és babát tervezünk hamarosan. Én Magyarországon szerettem volna még régebben szülni, azóta sok minden megváltozott. Most már mégiscsak azt választanám, hogy ott szülök, ahol élünk állandó jelleggel, viszont a legeslegjobbat szeretném a kisbabánknak majd, és úgy szeretnék szülni, ahogy megálmodtam azt.</i>
                    <br/>
                    <br/>
                    <i>Az első dolog, amihez ragaszkodnék, az a dúla lenne. Mit szólna Emőke, ha mi találkoznánk Önnel személyesen? Én most éppen Magyarországon tartózkodom novemberben, ráérne esetleg valamikor?</i>
                </blockquote>

                <p>
                    Találkoztunk. Aztán karácsonyi ajándékképpen Mása méhébe beköltözött egy parányi kislány. Kora tavasszal újra levelezni kezdtünk, mert akkor úgy tűnt, hogy mégis Magyarországon hozza világra a méhében fejlődő kisbabáját. Végül aztán az a vágyuk lett az erősebb, hogy a napfényes Cipruson lássa meg gyermekük a napvilágot.
                </p>
                <p>
                    Pontosan azon az áprilisi napon, amikor Szandra (a szardíniai kismamám, aki azóta Ausztriában él) felhívott, hogy elújságolja, hogy a második gyermeke is útnak indult, megkért Mása, hogy utazzak ki hozzájuk néhány napra Ciprusra a nyár elején. Boldog voltam, mert Szandra épp egy háborítatlan otthonszülésre készült, nagyon bízva és megerősödve önmagában, így nem kellett mellette lennem. És lám, az élet milyen nagy rendező, pont aznap hívást kaptam a földgolyó egy távolabbi pontjáról, hogy anyanyelven segíthessem az anyává válását egy másik mamának.
                </p>
                <p>
                    Júniusban repültem el hozzá. Előtte rengeteget leveleztünk és beszélgettünk skype-on, így már nagyon közel éreztük magunkat egymáshoz akkor is, amikor még óriási volt közünk a földrajzi távolság.
                </p>
                <p>
                    Napokig beszélgettünk. Közösen csodálkoztunk rá arra, hogy nem is tudható igazán, milyen nyelven válik majd Mása anyává. Orosz anya és apa gyermekeként Szibériában született, de 12 éves korában Magyarországra költözött a család. Kiválóan beszéli a nyelvünket, férjével is (aki egy Erdélyből származó férfi), a babájához is magyarul beszél. Ugyanakkor az anyanyelve az orosz, miközben jelenleg Cipruson él. És hihetetlen, hogy mindez mégsem fog zavart okozni, mert a kísérők csapata egészen különlegesen állt össze.
                </p>
                <p>
                    Orvosa angolul beszélő ciprusi görög, a szülésznője szintén ott élő ciprusi, aki mivel Oroszországban tanult és a férje is orosz, oroszul beszél, a dúlája pedig magyar lesz. 🙂
                </p>
                <p>
                    Mert úgy néz ki, szeptemberben, babájuk megszületésekor ismét mellettük lehetek. Számítanak rám, visszavárnak. Csodálatos megtapasztalása ez a hívás annak, hogy milyen ereje van a bizalomnak és a kölcsönös szeretetnek.
                </p>
                <p>
                    Határtalanul megtisztelő ez mindig és mindenkor, országhatáron innen és túl.
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

