import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog26Pic1 from "../../../image/blog/blog-26-hero-masodik-szines-viragcsokor.png";
import Blog26Pic2 from "../../../image/blog/blog-26-masodik-szines-viragcsokor.jpg";

export default function SubBlog26() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog26Pic1} alt="a-masodik-szines-viragcsokor"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">A második színes virágcsokor</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. június 05.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog26Pic2} alt="a-masodik-szines-viragcsokor"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Nagy örömmel készülök a szombatra. Újabb tíz dúla záróvizsgájának napja lesz ez, akik az elmúlt két évben közösen dolgoztak velem a Békés Dúlaműhelyben. Rendszeres továbbképzéseiken mélyítették el az ismereteiket mindazon témákban, amelyek által még jobban tudják segíteni a hozzájuk forduló várandósokat és párjaikat.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Egész napokat – néha ha a téma úgy kívánta, még többet is – foglalkoztunk a várandósság alatti gondoskodás legfontosabb szempontjaival, a vajúdástámogatás lelki és gyakorlati tudnivalóival, az apává válás folyamataival és azokkal a kérdésekkel, hogy hogyan segíthetünk a gyermekágyas időszakban, fogantatási nehézségek esetén vagy éppen akkor, ha az anya császármetszés utáni hüvelyi szülésre készül.
                </p>
                <p>
                    A közös munka folyamán egymást is egyre jobban megismertük, a gondolatok cseréje és a személyes történetek megosztása  sokat jelentett mindannyiunk számára, és nagyon közel hozott minket egymáshoz.
                </p>
                <p>
                    Ők valószínűleg egy kicsit izgulnak most, én örülök, hogy az elmúlt két évet egy írásbeli és szóbeli vizsgával zárjuk. Azt remélem, hogy ez a vizsga összegzése lesz a tanultaknak, és nem stresszet jelent majd, hanem inkább ünnepként éljük meg. Külön öröm számomra, hogy a vizsgára idén is elfogadta a meghívásunkat Nyulas Jolán, a Szent Imre Kórház Szülészeti Osztályának vezető szülésznője.
                </p>
                <p>
                    Erre az ünnepre készül az a csoport is, akik tavaly már levizsgáztak.  (A fenti kép az ő vizsgájuk után, az oklevelek  átadásakor készült.) Az estét ugyanis már együtt fogjuk tölteni mind a 18-an mi, a Békés szülésfelkészítő és szüléskísérő dúlák. 🙂
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
