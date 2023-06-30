import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog5Pic1 from "../../../image/blog/blog_05_hero_nyilt_hetvege.png";
import Blog5Pic2 from "../../../image/blog/blog_05_nyilt_hetvege.png";

export default function SubBlog05() {
  return (
    <div>
      <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog5Pic1} alt="Nyilt hetvege a Bekes Dulakorrel"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Nyílt hétvége a Békés Dúlakörrel</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2017. május 15.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                      <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog5Pic2} alt="Nyilt hetvege a Bekes Dulakorrel"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <i>"Ha várandós vagy, és úgy érzed, kevés az az idő, amit a szakemberek rád szánnak…
                            Ha lenne egy csomó kérdésed, de azt sem tudod, hol kezdjed…
                            Ha nehezen igazodsz el a rád zúduló információk tengerében…ez a program segít megtalálni a saját utadat."</i>
                        </p>

                        <h4>GYERE EL KÖRÜNKBE, BESZÉLGESS VELÜNK, INFORMÁLÓDJ A BÉKÉS DÚLAKÖR NYÍLT HÉTVÉGÉJÉN</h4>

                        <h4>2017. MÁJUS 27-28 - ÁN REGGEL 9 ÓRÁTÓL DÉLUTÁN 17:30-IG </h4>

                    </div>
                </div>

                <p>
                    Hallhatsz a várandósság és a családdá válás lelki aspektusairól, melyekről máshol oly ritkán esik szó. Igyekszünk megadni neked minden információt, ami szükséges ahhoz, hogy felkészülten és kompetensen érkezz meg a gyermekvállalás kapujába.
                    Szeretettel várunk minden kismamát és gyermeket váró párt. Várunk akkor is, ha most még csak gondolkodsz a gyermekvállaláson, s tudni szeretnéd, mire számíts, ha eljön az ideje.
                </p>

                <p>
                    A <b>részvételi díj fél napra</b><i> 3000 Ft</i>, ha egyedül jössz, <i>5000 Ft</i>, ha a pároddal.
                    Ha <b>egész napos jegyet</b> vásárolsz, még jobban jársz: ez egyedül érkezőknek <i>5000 Ft</i>, pároknak <i>8000 Ft</i>.
                </p>

                <p>
                    A programot úgy állítottuk össze, hogy a két napot végigkövetve minden olyan témáról hallhass, ami egy valamirevaló szülésfelkészítőn szóba kerül. Mást adunk, mint amit a kórházak szülésfelkészítőin kapsz – nem a saját gyakorlatunkat ismertetjük, abban segítünk, hogy megfogalmazd a magad kérdéseit, és tudd, merre indulj, hogy választ találj rájuk.
                </p>

                <h4>RÉSZLETES PROGRAM:</h4>

                <p><b>Május 27. szombat délelőtt A Te utad – a Te szülésed Kísérők</b></p>

                <p>
                    9:00-9:30 bejelentkező kör, ráhangolódás
                    9:30-10:20 Ki a dúla és mit tehet érted? – Szabó Zsófia előadása<br/>
                    10:40-11:50 Bizalom és biztonság – tervezhető-e a szülés? Hogyan válasszunk segítőket? –Békés Emőke előadása<br/>
                    12:00-12:40 Szüléstörténetek, megosztások – beszélgetés meghívott vendégünkkel, Rákócziné Krämer Ágnes szülésznővel<br/>
                    9:00-10:40 Hangolódás a szülésre segítő kövekkel – workshop Szlifka Tündével<br/>
                    10: 40-12:40 Hogyan készítsünk szülési tervet? – workshop Szabó Zsófiával<br/>
                    ebédszünet
                </p>

                <p><b>Május 27. szombat délután A Te utad – a Te szülésed Útravaló – hasznos ismeretek a szülés természetéről</b></p>

                <p>
                    13:45-14:00 gyors bemutatkozás, ebéd után érkezők köszöntése
                    14:00-14:50 A szülés, mint az életünk része – természetes fájdalomcsillapítás – Turai Petra előadása<br/>
                    15:00-15:50 Masszázs a szülés előtt, a szülés alatt és a gyermekágyban – interaktív előadás pároknak Szlifka Tündével<br/>
                    16:10-17:00 Az aranyóra – Lénárd Orsi előadása<br/>
                    15:00 – 17:00 Legyen a teher könnyebb! Kinesio tape ragasztás – workshop Iványi Rékával<br/>
                    17:00-17:30 zárókör, értékelő lapok kitöltése<br/>
                </p>

                <p><b>Május 28. vasárnap délelőtt A Te utad – a Te szülésed Család születik</b></p>

                <p>
                    9:00-9:30 bejelentkező kör, ráhangolódás<br/>
                    9:30-10:40 A szülés, mint beavatás – Vörös Anna előadása<br/>
                    11:00-11:50 Apák a várandósság, a szülés és a gyermekágy idején – Szerdahelyi Eszter előadása<br/>
                    12:00-12:50 Aromaterápia és illóolajok a várandósság és a szülés idején – Szonda Györgyi előadása<br/>
                    11:00 – 12:50 Babahordozás – workshop Szabó Évivel,<br/>
                    ebédszünet
                </p>

                <p><b>Május 28. vasárnap délután A Te utad – a Te szülésed Élet a kisbabával</b></p>

                <p>
                    13:45-14:00 gyors bemutatkozás, ebéd után érkezők köszöntése<br/>
                    14:00-14:50 Miért hívjuk ágynak a gyermekágyat? – mindent az első napokról meglepetések helyett – Tokodi Veronika előadása<br/>
                    15:10-16:00 Higgy magadban, hisz a Te gyermeked – kompetens anyaság az első életévben – Pintér Ilona előadása 16:10-17:10 Mind változunk – új szerepek a családban – nagyszülők és testvérek – Wittmann Andrea előadása<br/>
                    15:10-17:10 A Te listád – mi kell a babának? És a mamának? – workshop Szerdahelyi Eszterrel<br/>
                    17:10-17:30 zárókör, értékelő lapok kitöltése<br/>
                </p>

                <p>
                    Ha többet akarsz tudni rólunk, nézz körül honlapunkon, ismerd meg <b>küldetésünket</b>:
                </p>

                <p>
                    Mi, a Békés Dúlakör tagjaiként, tudásunk legjavát adva, elhivatottan és szakmailag felkészülten kísérjük a hozzánk forduló leendő szülőket, hogy megtalálhassák saját útjukat a gyermekvállalás idején Célunk, hogy hozzásegítsük őket lehetőségeik megismeréséhez, így teljes körű információ birtokában felismerjék saját igényeiket, melyek megvalósítását a szakmai segítőkkel egyeztetve, közösen készítjük elő. Küldetésünknek tekintjük, hogy önbizalmukat és hitüket erősítsük abban, hogy érezzék valódi erejüket. Akár már a fogantatás előttől, a szülésfelkészítésen és szüléskísérésen át a gyermekágyas időszakon túl is számíthatnak értő figyelmünkre, valamint lelki és fizikai támogatásunkra.
                </p>

                <p>
                    Ha várandós vagy, akkor éppen most valószínűleg éhes vagy. Ha most nem, akkor egy óra múlva biztos éhes leszel. Jól ismerjük ezt, ezért egész nap gondoskodunk házi sütiről, pogácsáról, gyümölcsről és egyéb egészséges ropogtatnivalókról. Mindig lesz friss víz, limonádé és tea. Ebédszünetre igény esetén főzünk egy egyszerű ebédet is – pestos tésztát, reszelt sajttal, zöld salátával. Ha másra (is) vágysz, saját költségre tudsz rendelni egy közeli étteremből. Már nagyon várjuk, hogy megismerkedhessünk.
                </p>
            </div>
        
            <div class="blog-global-tags">
              <p>Címkék:</p>
              <Link to="/olvasnivalok">Olvasnivaló</Link> 
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
