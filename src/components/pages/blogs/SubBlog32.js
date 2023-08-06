import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog32Pic1 from "../../../image/blog/blog-32-hero-a-szuleszeti-beavatkozasok-elonyeirol-hatranyairol-es-letjogosultsagarol.png";
import Blog32Pic2 from "../../../image/blog/blog-32-a-szuleszeti-beavatkozasok-elonyeirol-hatranyairol-es-letjogosultsagarol.jpg";

export default function SubBlog32() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog32Pic1} alt="a-szuleszeti-beavatkozasok-elonyeirol-hatranyairol-es-letjogosultsagarol-valamint-a-korhazi-protokollrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A szülészeti beavatkozások előnyeiről, hátrányairól és létjogosultságáról, valamint a kórházi protokollról</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. december 06.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog32Pic2} alt="a-szuleszeti-beavatkozasok-elonyeirol-hatranyairol-es-letjogosultsagarol-valamint-a-korhazi-protokollrol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>2012. január 20-án pénteken, 15-20 óráig</b> Rákócziné Krämer Ágnes, szülésznő, perinatális szaktanácsadó lesz a vendégünk az L-Fogadóban (XI. Fadrusz u. 14. VI./3.).
                        </p>
                        <p>
                            Ágit arra kértem, hogy ezen a délutánon beszéljen nekünk arról, hogy <i>a szülészeteken alkalmazott leggyakoribb beavatkozásoknak (szülésindítás, burokrepesztés, oxitocinos infúzió, folyamatos monitorizálás, epidurális érzéstelenítés, császármetszés) melyek az indikációi, mikor hasznosak illetve azt is, hogy mely esetekben nem tekinthetők indokoltnak.</i> Úgy gondolom, hogy nekünk, dúláknak fontos ezeket ismerni, hiszen annak ellenére, hogy szakmai szempontból nem mi követjük a szülés menetét, az információk átadásában, közvetítésében nagy szerepünk van.
                        </p>
                        

                    </div>
                </div>

                <p>
                    A korrekt tájékoztatás pedig megköveteli a pontos tudást, ezért ismernünk kell a szülészeti protokoll témához kapcsolódó pontjait is, így a délután folyamán erről is szó lesz.
                </p>
                <p>
                    Az előadás nem csak dúlák számára nyitott, hanem szeretettel várom a téma iránt érdeklődő várandósokat is. Előzetes bejelentkezés szükséges, a bekes.emoke@gmail.com email címen.
                </p>
                <p>
                    <b>Részvételi díj</b> 4 000 Ft, melyet  kérlek, legkésőbb 2012. január 15-ig utalj át a CIB:10702332-66569772-51100005 bankszámlaszámra, mert a helyedet csak ezzel tudod biztosítani. (Aznap már csak abban az esetben tudunk érdeklődőket fogadni, ha még marad szabad hely.)
                </p>
                <p>
                    Tartalmas, hasznos, jó hangulatú délután lesz, szeretettel várlak! 🙂
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
