import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog38Pic1 from "../../../image/blog/blog-38-hero-szulesfelkeszites-szardinian-4.png";
import Blog38Pic2 from "../../../image/blog/blog-38-szulesfelkeszites-szardinian-4.jpg";

export default function SubBlog38() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog38Pic1} alt="szulesfelkeszites-szardinian-4"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Szülésfelkészítés Szardínián 4.</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. július 21.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog38Pic2} alt="szulesfelkeszites-szardinian-4"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Itthon, ha valaki azzal a kéréssel fordul hozzám, hogy szeretné, ha segítenék neki a szülésre és a szülői szerepre való felkészülésben, akkor az általa jónak tartott gyakorisággal és időtartamban találkozhat velem.  Minden találkozás során arrafelé megyünk, amerre az anya illetve a pár kérdései vezetnek, de természetesen magam is örömmel javasolok olyan témákat, amelyekről azt gondolom, hogy érdemes a baba érkezése előtt beszélni. 
                        </p>
                        

                    </div>
                </div>

                <p>
                    Sokszor egy-egy ilyen témajavaslat segíti a kérdések megszületését és a közös munkát. Egy alkalommal általában két órát töltök a szülőkkel és ez a kísérés leggyakrabban több hónapig tart, hiszen sokan már a várandósságuk első harmadában, vagy még azt megelőzően felkeresnek.
                </p>
                <p>
                    Szardínián  ez értelemszerűen teljesen máshogy, más keretek között és jóval intenzívebben történt, hiszen csak 4 napunk volt arra, hogy megbeszéljük mindazt, amit a pár fontosnak tartott. Reggeltől délutánig Szandrával voltunk együtt, majd késő délutántól a Mario által készített fantasztikus vacsorák mellett hármasban folytattuk a beszélgetést.
                </p>
                <p>
                    Mindketten csodálatos, vendégszerető emberek. Szandra minden nap elvitt valami gyönyörű helyre, megmutatta nekem a környék nevezetességeit, sétálgattunk Alghero jellegzetes kis utcáin, üldögéltünk a tengerparti padokon a helyi idős bácsikkal, reggeliztünk a város egyik legjobb kávézójában és együtt csodálkoztunk, amikor egy hosszabb autóutunk során az úttesten átgyalogolt komótosan előttünk egy teknősbéka. A rengeteg inger, a szebbnél szebb látnivalók arra csábítottak, hogy engedjem el magam és csak hagyjam, hogy  átitatódjak a színekkel, hangokkal és ízekkel. De most nem engedhettem a csábításnak, mert nem ennek volt itt az ideje, hiszen koncentráltan figyelnem kellett mindarra, ami a közös munkánk folyamán kibomlott.  Szandra és Mario történetére, a múltjuk jelenben való hatásaira, a jövőre vonatkozó kérdéseikre, az érzéseikre, a gondolataikra, arra, hogy minden kérdésre választ kaphassanak, ugyanakkor ne legyen megterhelő a sok információ és legyen idejük ezeket fel is dolgozni. 
                </p>
                <p>
                    A bizalom a legnagyobb ajándék. A sok élmény mellett ezt kaptam Szardínián és ennek újbóli megtapasztalása attól vált igazán különlegessé, hogy a folyamatot a természet jelenségei is kísérték. Míg Szardínia szabad ege alatt megismertem történetüket, néha eleredt az eső, aztán kisütött a nap. Láttuk és éreztük, amikor felhőket fújt arrébb a szél és azt is, amikor a hullámok elsimították a part homokját.
                </p>
                <p>
                    Kint és bent egyaránt.
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog2">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
