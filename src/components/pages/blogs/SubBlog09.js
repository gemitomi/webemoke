import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog9Pic1 from "../../../image/blog/blog_09_hero_apak_konnyei.png";
import Blog9Pic2 from "../../../image/blog/blog_09_apak_konnyei.jpg";

export default function SubBlog09() {
  return (
    <div>
      <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog9Pic1} alt="Apak konnyei"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Apak konnyei</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2016. november 28.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog9Pic2} alt="Apak konnyei"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>Éjjel van. A szülészet folyosóján lépkedek. Várnak, így sietek az ajtó felé, amely mögött az a pár vár, akiknek a hívására érkezem.</p>
                        <p>
                            De megállít valami,  pontosabban valaki. Egy férfi ül a folyosón, arcát a kezébe temeti és sír. Nem tudok elmenni mellette. Egyedül van a neonfénnyel, és rázkódik a teste, de nem a hideg fény miatt, hanem mert fél. Semmit sem kell kérdeznem, tudom, hogy az, akiket a világon a legjobban szeret, a tőle pár méterre lévő ajtó túloldalán vannak. Szülésben, születésben. Ők ketten, ő egyedül.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Kiküldték, kimenekült, kint rekedt? Mindegy. Egy egész testnyi aggodalom reszket a folyosón.
                </p>

                <p>
                    Nem tudom, ki ő, mi a története és hogy miért, mitől fél. Csak azt, hogy egy ember, aki egyedül van és sír. Leülök mellé, megszólítom. Önkéntelenül is a vállára teszem a kezem. És ő azonnal mondja, meséli az érzéseit, és kérdezget, biztatásra vágyva.
                </p>
                <p>
                    Nincs baj odabenn. Csak félti a párját és a gyermekét. Tehetetlen. Erőtlen a szüléskor a nőket megszálló erőt látva. Szégyelli, hogy kijött, mert nem tud ott jelen lenni, de elfutni sem az ajtó elől. Mert neki is nehéz, ő is születőben van. Van előtte egy másik ajtó is, amin hamarosan át kell lépnie akkor is, ha a szülőszobáén kinn is marad. Fiúból férfivá, férfiből apává válik ezekben a percekben.
                </p>
                <p>
                    Hallgatom. Beszélek hozzá. Kérdez, válaszolok. Megölelem. Nem ismerem. Mégis.
                </p>
                <p>
                    Mert fájdalmában, aggodalmában ott van mindazoknak a férfiaknak az érzésvilága, akiket dúlaként láthattam apává válni, vagy akik megosztották velem a maguk, apai szüléstörténetét.
                </p>
                <p>
                    Eszembe jutnak azok, akikkel együtt álltunk izgatottan a műtőajtó előtt, vagy azok, akik elmesélték, milyen üzeneteket hoztak az édesanyjuktól arról, milyen volt, amikor ők születtek. Az ökölbe szorított kezű apa, aki 20 év után is elementáris dühvel éli meg azt, hogy nem tudta megvédeni a feleségét a kiszolgáltatottságtól és az, aki katartikus sírásban tört ki, amikor a második gyermeke – az első, mindenki számára traumatikus érkezése után –  háborítatlanul megszületett. 
                </p>
                <p>
                    Velem van ebben a pillanatban az a férfi, akit megszületésekor a kórházban hagyott az édesanyja, és ezért mindennél fontosabb volt neki, hogy a megszületett gyermekét szem elől ne tévessze, és egy másik, akivel úgy hagytak magamra a szülőszobán egy váratlan szülészeti esemény kapcsán, hogy a személyzet csak annyit tudott mondani a drámai helyzetben, hogy vigyázzak rá.
                </p>
                <p>
                    <b>Férfiak. Apák. Történetek.  Amiket hoznak és amiket megélnek.</b>
                </p>
                <p>
                    Ennek az ismeretlen férfinak a könnyeiben benne van a múltja, s talán a jövője is.
                </p>
                <p>
                    Lassan elengedjük egymást. Hálásan néz, és én már megyek is tovább. Előttem egy ajtó, ami mögött vár rám egy pár. Egy anya és egy apa. Két másik történet, és egy harmadik, amelyik hamarosan elkezdődik.
                </p>
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
