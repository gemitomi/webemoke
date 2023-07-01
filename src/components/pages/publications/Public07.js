import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public07Pic1 from "../../../image/publications/public-07-hero-tango-egy-gyermekert.png";
import Public07Pic2 from "../../../image/publications/public-07-tango-egy-gyermekert.jpg";

export default function Public07() {
    return (
        <div>
            <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public07Pic1} alt="Tango-egy-gyermekert"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Tangó egy gyermekért</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. december 02.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                    <Link to="/publications" class="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public07Pic2} alt="Tango-egy-gyermekert"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Egy szülés, egy születés igaz története, ahogy a dúla látta.</b>
                        </p>
                        <br/>
                        <p>
                            Éjjel érkeztünk a szülőszobára.
                        </p>
                        <p>
                            Csordogált a magzatvíz, de Hajninak még nem voltak méhösszehúzódásai. Elhelyezkedtünk a félhomályos, de még így sem túl intim szülőszobában. Bóbiskolva, zenét hallgatva virradt ránk a reggel.
                        </p>
      
                    </div>
                </div>
                <p>
                    Berci nagyon fáradt volt. Napok óta intézte az új lakásba költözés összes gondját-baját, szorgosan takarított, és sietve szerelte össze a gyerekszoba valamennyi bútorát. Hajninak pihennie kellett, nem vehetett részt aktívan ebben a nagy munkában, így náluk különös módon az apa rakta, csinosította a fészket éjjel-nappal.
                </p>
                <p>
                    Mivel még nem kezdődött el a vajúdás, Berci lefeküdt a szülőszobában lévő ágyra, és elaludt, mi pedig Hajnival beszélgettünk.
                </p>
                <p>
                    Sokat mesélt a versenytáncos múltjáról, a tangó gyönyörűségeiről, a zene sodró erejéről, a táncpartnerek sokféleségéről, és arról, hogy egymást is ennek az érzéki, csodálatos táncnak köszönhetik.
                </p>
                <p>
                    Élveztem, ahogy mesélt. Láttam őt testre simuló ruhában, magas sarkú cipőben, elegáns tartással, szépen sminkelve, igazi nőként a parketten. „Jó nagy képzelőerő kellhet hozzá” – kuncogott Hajni, merthogy a lábai most nagyon be voltak dagadva. Felpolcolt lábakkal ült, és annyira feszült a bőre a sok víztől, hogy már az sem adott igazi enyhülést, hogy beszélgetés közben masszírozgattam.
                </p>
                <p>
                    A méhösszehúzódás hullámainak érkeztével Berci is felébredt. Mindketten azon voltunk, hogy Hajninak minél könnyebb legyen az egyre intenzívebben jelentkező kontrakciókba belesimulni.
                </p>
                <p>
                    Ültünk, álltunk, jöttünk-mentünk a szülőszobában. Lekapcsoltam a lámpát, meggyújtottam azt a gyertyát, amelyet Lujzi érkezésére választottak a szülők, és Berci betette a magnóba azt a CD-t, amelyet otthonról hoztak. Piazzola muzsikája valami egészen más hangulatot hozott a szülőszobába, mint ami általában lenni szokott. Lassú és mégis szenvedélyes, érzelmeket megmozgató dallamok árasztották el az amúgy elég rideg helyiséget. Ahogy elárasztották, úgy fel is melegítették minden négyzetcentiméterét.
                </p>
                <p>
                    A kontrakciók pedig csak jöttek, jöttek.
                </p>
                <p>
                    Hajni fáradtan sétálgatott körbe-körbe a szülőszobában. Bő hálóinge lazán lógott rajta, duzzadt lábfejébe bevágott a papucsa pántja. Berci zokniban, gyűrött, megviselt ingében odalépett hozzá, és tartotta őt, amíg párja rátámaszkodott. Így várták meg az újabb összehúzódás végét.
                </p>
                <p>
                    Aztán egymás szemébe néztek.
                </p>
                <p>
                    És abban a pillanatban valami varázslatos dolog történt. Pár másodpercig mozdulatlanul álltak, csak a zene szólt, majd egy hangsúlyos ütemnél Berci belépett Hajni lábai közé. Abban az egy mozdulatban minden benne volt, amit csak egy férfi a tangó által megvallhat egy nőnek: szerelem, gyengédség, szenvedély. Kezük egymásba simult, tekintetük összefonódott, lábuk megannyi érzelmet üzenve siklott a linóleumon. Lassan, szavak nélkül táncoltak. Nászukat csak a méhösszehúzódások állították meg egy-egy percre, aztán újból visszataláltak a zene ritmusába.
                </p>
                <p>
                    Olyan gyönyörűek voltak, mintha csak egy fényes terem parkettjén suhannának lebegő szoknyában, fekete nadrágban, fényesen csillogó cipőkben.
                </p>
                <p>
                    Mozdulni sem mertem, csak megbabonázva néztem őket, és azon izgultam, nehogy bárki kívülről érkező megzavarja ezt a varázslatot.
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications">Publikációim</Link>
            </div>
        </div>
    </section> 
        </div>
      )
}
