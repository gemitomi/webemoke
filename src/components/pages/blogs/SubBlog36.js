import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog36Pic1 from "../../../image/blog/blog-36-hero-osszefonodo-szalak.png";
import Blog36Pic2 from "../../../image/blog/blog-36-osszefonodo-szalak.jpg";

export default function SubBlog36() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog36Pic1} alt="osszefonodo-szalak"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Összefonódó szálak</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. október 20.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog36Pic2} alt="osszefonodo-szalak"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Több mint másfél évtizede keresem anyaként az okát az ekcémának és egyéb allergiáknak. Sajnos az egyik gyermekem érintett ezzel a problémával, és az elmúlt években bár megszámlálhatatlanul sok helyen jártunk, senki sem tudta megmondani a tünetei igazi okát. Éveken át bolyongtunk zsákutcákban, téves vagy éppen ártalmas terápiás javaslatok között, ugyanakkor találkoztunk rendkívül segítőkész, jószándékú emberekkel is. Volt, amikor a gyermekem tünetei enyhültek, de a várva várt gyógyulás nem következett be.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Megfogadtam a gyermekemnek és magamnak is, hogy addig megyek, kutatok, amíg ki nem derítjük a gyökérproblémát. Az idén nyáron aztán több irányból is olyan információkhoz jutottam, ami a megértést és a gyógyulás útjára lépés lehetőségét hozta.  Kiderült, hogy a lányom különböző táplálékallergiáktól szenved, ami egyrészt nem jó hír, másrészt mégis valóságos katarzist jelentett, mert úgy éreztem, hogy végre valóban tudok tenni a gyermekem gyógyulásáért.
                </p>
                <p>
                    Megváltoztattuk az étkezésünket, lecseréltük az alapanyagokat és a gyógyulás első jelei szinte azonnal mutatkozni kezdtek! Talán nem csoda, hogy mély elkötelezettjévé váltam annak, hogy anyaként, dúlaként és gyógypedagógusként is jó és fontos ismeretekkel láthassam el az édesanyákat. A saját – és mások – történetének megértésén keresztül vált számomra még inkább lényegi kérdéssé a várandósok és a kisbabák táplálkozása és az anyatejes táplálás jelentősége.
                </p>
                <p>
                    Az alábbi videóban látható az a könyv és a szerzője, aki számomra a”megvilágosodást” hozta, és aki oly sok más nehézséggel küzdő szülőnek segített már.
                </p>
                <p>
                    <a href="https://www.youtube.com/watch?v=8YpL5Ityrik">https://www.youtube.com/watch?v=8YpL5Ityrik</a>
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
