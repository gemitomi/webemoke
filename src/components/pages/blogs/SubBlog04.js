import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"


import Blog4Pic1 from "../../../image/blog/blog_04_hero_lany_.png";
import Blog4Pic2 from "../../../image/blog/blog_04_lany_ .png";

export default function SubBlog04() {
  return (
    <div>
       <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog4Pic1} alt=""/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">A Lány és a Kisfiú</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2017. május 17.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog4Pic2} alt="A lany es a kisfiu"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A Lány alig több mint 20 éves. Megkérdőjelezhetetlenül, 
                            a kezdetektől tudta, hogy mi az, akit és amit nagyon szeretne. 
                            A Kisfiút, még akkor is, ha apa nélkül neveli majd fel, és azt, 
                            hogy az otthonában szülhesse meg a babáját.
                            
                        </p>

                        <p>
                            A nappaliban áll a szülőmedence. Benne áramlik a Lány. 
                            Szabadon mozog, siklik, hajlik, elmerül. Csendben figyelem és próbálom megsejteni, 
                            vajon merre jár, hová sodorják, emelik a vajúdás hullámai. 
                            Dolga van. Ritmikusan dolgozik a méhének izomzata, 
                            de a lelkében is nagy munka zajlik. Mosolyog, sír és fáj, 
                            elpihen, megfeszül. Átél, elenged, megriad, elfogad. 
                            Nem kér semmilyen segítséget, egyedül, bátran megy bele a 
                            folyamatba.
                        </p>

                    </div>
                </div>
                <p>De valójában még sincs egyedül. A születőben lévő kisfiával van. 
                    Szeretetben, erős szövetségben, más-más úton, mégis közös utazásban.
                </p>

                <p>
                    „Jók, leszünk mi együtt, Kicsim, meglátod! Meg tudjuk csinálni! Gyere, 
                    nagyon várlak, segítek neked!”  – biztatja két hullám között.
                </p>

                <p>
                    A Kisfiú tudja ezt. Nyugodtan, bizalommal érkezik a medence meleg vizébe, 
                    ahová az anyukája még lányként lépett be.
                </p>

                <p>
                    Magával ragad az élmény és a folyamat szépsége, ereje. Újra bizonyságot nyer bennem, 
                    hogy milyen fontos, szükséges és támogató tud lenni egy háborítatlan vajúdás. 
                    Mert a szülés beavatási rítusában, hihetetlen energiáinak örvényében, testet és lelket megrengető átalakulásában, euforikus, felszabadító katarzisában ma éjjel ketten születtek.
                </p>

                <p><b>Egy Anya és egy Kisfiú.</b></p>
            </div>

            <div class="blog-global-tags">
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
