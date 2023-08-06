import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog60Pic1 from "../../../image/blog/blog-60-hero-miert-eppen-gyermekaldas.png";
import Blog60Pic2 from "../../../image/blog/blog-60-miert-eppen-gyermekaldas.jpg";

export default function SubBlog60() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog60Pic1} alt="miert-eppen-gyermekaldas"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Miért éppen gyermekáldás?</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. július 26.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog60Pic2} alt="miert-eppen-gyermekaldas"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            A honlapom nevét és az első, mostani frissítésig fennálló változat arculatát a férjemtől kaptam ajándékba. Nagyon szeretem. A férjemet is, no meg a honlapom címét is. 🙂
                        </p>
                        <p>
                            Egészen kicsi koromtól vágytam gyermekekre. Akkoriban főként plüssállatokat,  valamint kedvenc rongybabámat Boncát tologattam babakocsiban. Később egyre inkább nőtt az érdeklődésem a gyermeklélektan iránt. Sokat gondolkodtam és olvastam arról, hogy hogyan fejlődnek, mit, hogyan éreznek, milyen módon fejezik ki magukat a gyerekek.
                        </p>
                        

                        
                        

                    </div>
                </div>

                <p>
                    Gyógypedagógusként és pszichopedagógusként nap mint nap tapasztaltam, mekkora öröm velük dolgozni, de amikor megszületett az első gyermekem, az aztán mindenek feletti eufória volt.
                </p>
                <p>
                    Ennek lassan már 19 éve, Dorka lányom 15, Eszter pedig 8 éves. Nevelésük folyamán volt minden: öröm, könny, aggodalom, izgalom, nevetés, a világ újrafelfedezése, gond, bújás, átalvatlan éjszakák, csodás ünnepek, puszik, kritikák, közös élmények, ölelések, viták, büszkeség, elengedések és összekapaszkodás. Egyensúlyozás a hivatás és a gyerekek között, és a figyelem megosztása közöttük.
                </p>
                <p>
                    Az biztos, hogy szülőnek lenni a legnagyobb életfeladat, de az is, hogy mindemellett számunkra a  gyermek: áldás.
                </p>
                <p>
                    Jó látni, hogy a hozzám forduló párok számára is az. Velük lenni a várakozásban és azokban a pillanatokban, amikor megszületik a gyermekük, életem legfelemelőbb pillanatai közé tartozik.
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
