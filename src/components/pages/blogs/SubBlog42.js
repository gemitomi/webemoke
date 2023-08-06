import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog42Pic1 from "../../../image/blog/blog-42-hero-szulesfelkeszites-szardinian-1.png";
import Blog42Pic2 from "../../../image/blog/blog-42-szulesfelkeszites-szardinian-1.jpg";

export default function SubBlog42() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog42Pic1} alt="szulesfelkeszites-szardinian-1"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Szülésfelkészítés Szardínián 1.</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. július 08.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog42Pic2} alt="szulesfelkeszites-szardinian-1"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Hívás, indulás</b>
                        </p>
                        <p>
                            Pontosan május közepén Szardíniáról érkezett egy levél a postafiókomba. Egy ott élő magyar anya írt nekem, aki a várandóssága utolsó harmadában jár. Úgy tervezte a párjával, hogy az ottani egyik kórház szülészetén fog majd szülni, de úgy érezte, hogy nagyobb biztonságot jelentene számára, ha lenne mellette valaki, aki ezekben az  órákban az anyanyelvén segíti.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Írtam már róla, hogy a tapasztalataim szerint sokak számára szülni a szülőföldön a legmegnyugtatóbb, de ha ez nem megoldható, akkor az is nagyon sokat jelenthet a szülő nőnek, ha  az anyává válás óráiban az anyanyelvén szólnak hozzá. Jelen esetben az apa sem magyar, így különösen fontosnak éreztem a levélben megfogalmazott kérését.
                </p>
                <p>
                    Mivel arra az időpontra, amikorra ő várja a kisbabáját, nekem már volt felkérésem szüléskísérésre itthon, így biztosítottam arról, hogy dúlatársaim, a Békés Dúlakör dúlái közül segítek választani valakit, aki mellettük lesz a szülés óráiban. Megbeszéltük,  hogy a szülésre való készülődésben addig is én segítem őket a skype segítségével.
                </p>
                <p>
                    A szülésre és a szülői szerepre való készülődés azonban nem csak arról szól, hogy az anya feltesz konkrét kérdéseket, amire a dúla elmondja a praktikus információkat, hanem ez a folyamat sokszor jóval több és mélyebb közös munkára ad lehetőséget.  A bizalmi kapcsolat kialakulásával lehetővé válik, hogy az anya megnyíljon, és megoszthassa érzéseit, gondolatait,  vagy élete korábbi eseményeinek történeteit a segítőjével. A várandósság hónapjaiban ugyanis nem csak a testben, hanem a lélek szintjén is nagyon sok változás történik, megmozdulhatnak régi emlékek, ennek nyomán megfogalmazódhatnak a várandós nőben kérdések és megjelenhetnek különböző érzések. 
                </p>
                <p>
                    Az első hosszabb beszélgetés végére mindketten úgy éreztük, hogy sokkal jobb lenne, ha személyesen találkoznánk. Az anya felajánlotta, hogy ők megvennék nekem a repülőjegyet,  ha ki tudnék menni hozzájuk néhány napra.
                </p>
                <p>
                    Az itthoni teendők átszervezése, egy június végére kiírt kismamámmal és a családommal való egyeztetés után június 5-én vasárnap délután Pozsonyból felszállt velem a gép, hogy egy ismeretlen országba, egy még majdnem teljesen ismeretlen párhoz repítsen.
                </p>
                <p>
                    A hívás nagyon szép volt, a szívem egész úton hevesen dobogott, miközben életemben először felülről csodálhattam a levegőben úszó fodros felhőpamacsokat.
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
