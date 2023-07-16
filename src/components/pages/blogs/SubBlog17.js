import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog17Pic1 from "../../../image/blog/blog-17-hero-csoportos-szulesfelkeszito.png";
import Blog17Pic2 from "../../../image/blog/blog-17-csoportos-szulesfelkeszito.jpg";

export default function SubBlog17() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog17Pic1} alt="csoportos-szulesfelkeszito"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title"></h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2013. január 09.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog17Pic2} alt="csoportos-szulesfelkeszito"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            2013. év elejétől heti rendszerességgel szülésre és a szülői szerepre felkészítő beszélgetések lesznek a SokSzínTérben, azon a helyszínen, ahol dolgozom, és amely otthont ad még sok várandósoknak szóló egyéb előadásoknak is.
                        </p>

                        <p>
                            A beszélgetéseket olyan dúlák vezetik, akik széles körű ismeretekkel rendelkeznek a várandósság, a szülés és az azt követő egy év lélektani és élettani eseményeiről, valamint tapasztalataikat a különböző kórházakban kísért szülésekből nyerték, így hiteles és naprakész információkkal tudjuk segíteni a hozzájuk fordulókat. 
                        </p>

                    </div>
                </div>

                <p>
                    A találkozók mindig csütörtöki napokon 17 órakor kezdődnek és 20 óráig tartanak majd.  A szülésfelkészítő alkalmain mindig más és más témát járunk körül, és bármelyik témánál be lehet kapcsolódni.
                </p>
                <p>
                    Jelentkezni a sokszinter@gmail.com email címen vagy a +36-30-291-5711-es telefonszámon lehet.
                </p>
                <p>
                    Részvételi díj: 5000Ft/alkalom, APÁKNAK INGYENES(!)
                </p>

                <p>
                    <u>Tervezett témáink:</u>
                </p>
                <p>
                    <b>Gyermeket várunk – szülővé válunk  </b>
                </p>

                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">A fogantatás körülményei</li>
                    <li class="blog-globale-has-before">A várandósság testi és lelki változásai</li>
                    <li class="blog-globale-has-before">Lányból anyává, fiúból apává válni – a hozott szülői minták</li>
                </ul>
                <p>
                    <b>Tervezhető-e a szülés? </b>
                </p>

                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">A lehetőségek és a jogok ismerete a magyarországi szülészeti ellátásban </li>
                    <li class="blog-globale-has-before">Az orvos-, szülésznő- és kórházválasztás kérdései</li>
                    <li class="blog-globale-has-before">Készítsünk-e szülési tervet? </li>
                    <li class="blog-globale-has-before">Mit és hogyan érdemes egyeztetni a választott orvossal, szülésznővel?</li>
                </ul>
                <p>
                    <b> Praktikus tanácsok és vajúdástámogató gyakorlatok a szülés körüli órákra</b>
                </p>
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before"> Mit készítsünk össze? Hogyan pakoljunk, mi az, ami szükséges otthonra?</li>
                    <li class="blog-globale-has-before">Korai vajúdási jelek</li>
                    <li class="blog-globale-has-before">Mikor kell indulni a kórházba? </li>
                    <li class="blog-globale-has-before">A vajúdás egyes szakaszaiban nyújtott érzelmi és fizikai támogatás (masszázs, borogatások, olajok, homeopátiás szerek)</li>
                    <li class="blog-globale-has-before">Hogyan tud jól segíteni az apa? Mi az, ami nem az ő feladata?</li>
                </ul>

                <p>
                    <b>A leggyakoribb szülészeti beavatkozások, azok indikációi, kockázatai, létjogosultsága</b>
                </p>
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">Szülésindítás </li>
                    <li class="blog-globale-has-before">Mesterséges oxitocin</li>
                    <li class="blog-globale-has-before">Gyógyszeres fájdalomcsillapítás</li>
                    <li class="blog-globale-has-before">Burokrepesztés</li>
                    <li class="blog-globale-has-before">Epidurális érzéstelenítés</li>
                    <li class="blog-globale-has-before">Gátmetszés</li>
                    <li class="blog-globale-has-before">Császármetszés</li>
                </ul>

                <p>
                    <b>Megszületett a kisbabánk!</b>
                </p>
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">Mit tud az újszülött?</li>
                    <li class="blog-globale-has-before">Az „aranyórák” – azaz a szülést követő első órák jelentősége </li>
                    <li class="blog-globale-has-before">Mi várható a kórházban az újszülött ellátási protokoll</li>
                </ul>
                <p>
                    <b>Családdá születünk </b>
                </p>
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before"> Hazatérés a kórházból</li>
                    <li class="blog-globale-has-before">A gyermekágyas időszak testi és lelki változásai </li>
                    <li class="blog-globale-has-before"> Praktikus tanácsok a gyermekágyas időszakra</li>
                    <li class="blog-globale-has-before">A tágabb család, ahová a kisbaba érkezik</li>
                    <li class="blog-globale-has-before">Az első év – változások a pár életében</li>
                </ul>

                <p>
                    <b> A szoptatás</b>
                </p>
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">Hogyan készüljünk a szoptatásra?</li>
                    <li class="blog-globale-has-before"> Mitől lesz elég a tej?</li>
                    <li class="blog-globale-has-before"> Mit jelent az igény szerinti szoptatás? </li>
                    <li class="blog-globale-has-before">A kisbaba igényei </li>
                    <li class="blog-globale-has-before"> A helyes mellretétel </li>
                    <li class="blog-globale-has-before">Szükséges-e a fejés?</li>
                    <li class="blog-globale-has-before">Mikortól és hogyan kezdjük a hozzátáplálást?</li>
                </ul>
                <p>
                    Szeretettel várunk minden érdeklődőt!
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
