import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog58Pic1 from "../../../image/blog/blog-58-hero-babak-akiknek-jelen-lehettem-a-szuletesuknel.png";
import Blog58Pic2 from "../../../image/blog/blog-58-babak-akiknek-jelen-lehettem-a-szuletesenel.jpg";

export default function SubBlog58() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog58Pic1} alt="babak-akiknek-jelen-lehettem-a-szuletesuknel"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Babák, akiknek jelen lehettem a születésüknél</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. július 31.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog58Pic2} alt="babak-akiknek-jelen-lehettem-a-szuletesuknel"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Nézegetem, javítgatom, tesztelgetem ezt az új honlapot. Biztosan van még mit tökéletesítenem rajta, számomra mégis nagy öröm kinyitni az oldalt, mert belépéskor azoknak a kisbabáknak a képei köszöntenek, akiknek ott lehettem a születésüknél.
                        </p>
                        <p>
                            Mosolyogva nézegetem, ahogy váltakozva előbukkannak, és közben megelevenednek az emlékeim.
                        </p>
                        <p>
                            Sokukat én segíthettem először a mamájuk mellére, én takargathattam be őket megszületésük után egy puha törülközőbe. Vannak, akik szép komótosan és vannak olyanok, akik viharos sebességgel érkeztek. 
                        </p>
                        

                    </div>
                </div>

                <p>
                    Egyesek a világot harsány kiáltásokkal köszöntötték, mások csak csendesen szuszogva pihentek az anyukájuk mellkasán, de minden baba születésénél újra és újra rácsodálkozok a tökéletességükre és a természet csodájára. Megtisztelő élmény, hogy a szüleik kérésére néhányuk köldökzsinórját én vághattam el, és hogy a karomban tarthattam őket.
                </p>
                <p>
                    Mindegyikük születésére jól emlékszem, hiszen felejthetetlen órák azok, amelyeket a vajúdás kezdetétől az új család egymásra találásáig a szülőkkel tölthetek. Együtt örülök, könnyezek velük amikor a kisbabájuk a világra érkezik és izgulok azért, hogy kellő tisztelet és odafordulás övezze őket ezekben a pillanatokban mások által is.
                </p>
                <p>
                    Szüleik bizalmának köszönhetően tudhatom, hogyan várták őket, láthatom, hová érkeznek és gyakran később is nyomon követhetem a fejlődésük szakaszait, például hogy ki milyen tempóban szopizik, hogyan és mennyit alszik, mikor bukkant ki az első fogacskája, hogy ízlett neki az első kanál gyümölcspüré, el tudta-e fújni a szülinapi tortáján a gyertyáját és egyre gyakrabban azt is, mit szólt a kistestvére érkezéséhez.
                </p>
                <p>
                    A képeken még valamennyien kicsi babák, de a valóságban már vannak köztük nagy óvodások, sőt iskolások is.
                </p>
                <p>
                    Szerettel gondolok valamennyiükre.
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
