import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog49Pic1 from "../../../image/blog/blog-49-hero-dulakepzes-avagy-egy-noi-kor-ereje.png";
import Blog49Pic2 from "../../../image/blog/blog-49-dulakepzes-avagy-egy-noi-kor-ereje.jpg";

export default function SubBlog49() {
  return (
  <div>
     <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog49Pic1} alt="dulakepzes-avagy-egy-noi-kor-ereje"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Dúlaképzés – avagy egy női kör ereje</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. január 05.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog49Pic2} alt="dulakepzes-avagy-egy-noi-kor-ereje"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Hat éve szervezek és tartok nagy örömmel dúlatréningeket. A szervezés során számtalan érdeklődővel beszélek telefonon és bizony sokszor nem könnyű minden kérdésre egy rövid telefonbeszélgetésben vagy emailben megfogalmazni a választ. A praktikus információkról, a képzés tematikájáról, előadóiról vagy a helyszínről jól körülírható, pontos választ tudok adni, ami segítheti a jelentkezőket a felkészülésben, de vannak olyan dolgok, amelyek csak az együtt töltött napok, a közös élmények átélésének hatására válnak megérthetővé és amit sokszor nehéz is szavakba önteni.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Mert ennek a tréningnek a sajátossága az, hogy itt nem csak hagyományos oktatási formában történik az ismeretek átadása. Büszke vagyok rá, hogy olyan állandó, a maguk szakterületén magasan képzett, nagy tudású előadók adják át az ismereteiket, akik mindig szívesen érkeznek a dúlák közé, ugyanakkor legalább ilyen értéket képvisel maga a csoport ereje és a tagjaiban meglévő tudás.
                </p>
                <p>
                    Az alaptréning időtartama a két alkalmat összevéve közel 7 nap. Az együtt töltött  napokban, órákban, és gyakran az éjszakába nyúló beszélgetésekben is rendkívül fontos megosztások történnek. A női kör erejének megtapasztalása újra és újra megérint engem is. A bizalom és őszinteség, valamint az elfogadás és empátia teszi lehetővé, hogy a csoport tagjai megnyíljanak egymás felé, és ezáltal a saját történeteink elmesélésével tanítsuk egymást.
                </p>
                <p>
                    A legutóbbi tréning végén a visszajelzőlapon a résztvevők így írtak erről:
                </p>
                <blockquote>
                    „A csoportban egymástól is folyamatosan tanulunk, a beszélgetések folyamán bárki felhozhat emléket bennünk.”<br/>

                    <br/>„Örülök, hogy mindenki elfogadó, kedves, csapatmunkára kész ember. Nagyon jó volt megtapasztalni, hogy mindenki meg tudott nyílni. Hálás vagyok a sorsnak, hogy ebbe a csoportba vezérelt. Mindenki más élethelyzetből, más tapasztalattal érkezett, és ez mindenkinek adott valami újat.”<br/>

                    <br/>„Jó volt megtapasztalni mások szeretetét, őszinteségét és bizalmát. Jól éreztem magam, erősödtem.”<br/>

                    <br/>„Sokat sírtam és sokat nevettem.”<br/>

                    <br/>“Köszönöm az odaadó figyelmet.”<br/>

                    <br/>„Nagyon finom volt az a megtartó erő, amit a csoport adott.”<br/>

                    <br/>„Mélységes hála és köszönet van a szívemben.”<br/>

                    <br/>„A nap szinte minden percében hallottam olyan információt, amit valamikor hasznosítani tudok, és nem csak a  meghívott előadóktól jöttek az üzenetek, hanem a csoport tagjaitól is.”<br/>

                    <br/>„Itt mindig megáll az idő. Sok új, hasznos információra tettem szert, amihez csak hab a tortán az előadók hitelessége, ragyogó személyisége.”<br/>

                    <br/>„Úgy érzem, végre megtaláltam és ráléptem arra az útra, amit az életem során járnom kell.”<br/>
                </blockquote>
                <p>
                    A dúlaképzés első hétvégéjére, a januári motivációs tréningre még van néhány hely. Ha valaki szeretne meríteni, töltekezni egy elfogadó női kör energiájából, szeretettel látjuk.<br/>
                </p>
                <p>
                    Jelentkezni a Dúlaképzések rovatban található jelentkezési lap kitöltésével lehet.<br/>
                </p>


            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
