import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog61Pic1 from "../../../image/blog/blog-61-hero-konyheti-pszichofesztival-a-radayban.png";
import Blog16Pic2 from "../../../image/blog/blog-61-konyvheti-pszichofesztival-a-radayban.jpg";

export default function SubBlog61() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog61Pic1} alt="konyvheti-pszichofesztival-a-radayban"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Könyvheti PszichoFesztivál a Rádayban</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. július 24.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog16Pic2} alt="konyvheti-pszichofesztival-a-radayban"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Június 6-ára meghívást kaptam a PszichoFesztivál szervezőitől, hogy Kísérők az élet kapujánál címmel tartsak előadást a dúla, a szülésznő és az orvos szerepéről, kompetenciáiról, az általuk nyújtott támogatás lényegéről a várandósság és a szüléskísérés folyamán.</b>
                        </p>
                        <p>
                            A rendezvényt a Mindennapi Pszichológia c. folyóirat munkatársai szervezték. Az idei Ünnepi Könyvhét specialitásaként a pszichológiával kapcsolatos könyv- és folyóirat – kiadás kiemelt „vendégként” jelent meg. A könyvkiadók és kereskedők sátrai, az újdonságok és ritkaságok mellett három napon át izgalmas programokat is kínált a Mindennapi Pszichológia magazin:
                        </p>
                        

                    </div>
                </div>

                <p>
                    volt itt táncterápia és babazene, jóga és toleranciatréning, Taekwondo bemutató és kutyaterápia – valódi vásári hangulat, rövid előadások viselkedésünk mozgatórugóiról, gyermekpszichológiáról, párkapcsolatról, szexualitásról. Előadások, beszélgetések, dedikálás, gyermek- és felnőtt programok várták az érdeklődőket a Mindennapi Pszichológia tematikus sátraiban a magazin szerzőivel és meghívott szakértőivel, akik között a tudományág kiváló képviselőit – gyakorlati szakembereket, kutatókat és egyetemi oktatókat – üdvözölhettük.
                </p>
                <p>
                    E három nap is bizonyította: a pszichológia nem elvont, „félelmetes”diszciplína, hanem az élet szépségeinek, a boldog élet, a harmonikus kapcsolatok megteremtésének és megőrzésének tudománya is – és talán segített megtalálni az utat másokhoz s önmagunkhoz.
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

