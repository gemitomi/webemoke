import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog59Pic1 from "../../../image/blog/blog-59-hero-megujulas.png";
import Blog59Pic2 from "../../../image/blog/blog-59-megujulas.png";

export default function SubBlog59() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog59Pic1} alt="megujulas"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Megújulás</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. július 28.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog59Pic2} alt="megujulas"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Úgy tűnik, 2010-es esztendő a nagy változások éve az életemben.</b>
                        </p>
                        <p>
                            Hamarosan – épp a 20. házassági évfordulónkon – elköltözünk eddigi családi házas, kertes otthonunkból és hamarosan egy még épülő, kisebb, de modernebb lakásba költözünk. Nagy változás ez a családunk életében, de bízunk benne, hogy ennek a szép és élménydús korszaknak a lezárása egyben valami újnak, izgalmasnak a kezdete is.
                        </p>
                        <p>
                            Ezzel egyidőben most megújul a honlapom is. Új rovatok indulnak, a már meglévők pedig bővülnek, amitől reményeim szerint dinamikusabbá, frissebbé válik az oldal. A blog lehetővé teszi a közelebbi kapcsolatot az olvasóimmal, és bízom abban, hogy észrevételeitekkel, javaslataitokkal segítetek majd abban, hogy olyan témákról írhassak, amelyek benneteket a leginkább érdekelnek.
                        </p>
                        

                    </div>
                </div>

                <p>
                    
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
