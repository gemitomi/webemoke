import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog31Pic1 from "../../../image/blog/blog-31-hero-nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-1.png";
import Blog31Pic2 from "../../../image/blog/blog-31-nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-1.jpg";

export default function SubBlog31() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog31Pic1} alt="nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-1"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Nyomtatásban megjelent cikk a Szívembe zárt családok találkozójáról – 1. rész</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. december 08.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog31Pic2}alt="nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-1"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Szívembe zárt családjaim</b>
                        </p>
                        <p>
                            <b> Családkísérő. Hallottak már erről a foglalkozásról? Békés Emőke egy személyben képviseli mindazt, amit ez a fogalom takar. A szülői szerepre való felkészítéstől a kisbaba világra segítésén át a gyereknevelés első buktatóinak közös leküzdéséig. Az utóbbi tíz évben csaknem hatvan pár köszönheti neki, hogy sikerült viszonylag gördülékenyen, „békésen” boldog családdá válniuk.</b>
                        </p>
                        

                    </div>
                </div>

                <p>
                    Hirtelen leálltak a fájások, és mély csönd borult rám. Csak Emőke halk, duruzsoló hangjai szivárogtak át rajta: „Mi történt? Mire gondolsz most?” “Félek.” – suttogtam. Erre ő puha, anyáskodó mozdulattal átölelt, és én keserves sírásra fakadtam. Néhány perc múlva újra megindultak a fájások, és hamarosan világra jött a kisbabám- emlékszik vissza Márti hálásan a szülésére, amin Emőke dúlaként volt jelen.
                </p>
                <p>
                    <b> Varázsszók tudója</b>
                </p>
                <p>
                    – Nem tudni, mitől ijedt meg Márti – gondolkodik el az eseten utólag Emőke. – Talán attól, mert abban a pillanatban megérezte, milyen közel is lehet egymáshoz az élet két kapuja. De az is lehet, hogy attól félt, el kell engednie valakit, akivel addig egy test, egy lélek voltak. Esetleg attól tartott, hogyan fogja majd felnevelni a gyermekét… A szülés módosult tudatállapottal járó, rendkívül érzékeny állapot. Múltbéli sebek szakadhatnak fel ilyenkor, amelyek – ha jól segítik a vajúdót – kitisztulhatnak és be is gyógyulhatnak. Sokszor elég egy mondat, egy szó, és a lelki gát, ami a kisbaba útját addig eltorlaszolta, hirtelen átszakad.
                </p>
                <p>
                    Ezt a varázsszót súgta a kismama fülébe azon az éjszakán Emőke. Hogy honnan tudta? Tanulta vagy hallotta valahol? Inkább talán a zsigereiben érezte, mint többször szült nő, aki beavatást nyert a női misztériumokba, és akinek vérében van a másokkal törődés parancsa. Régen a női hozzátartozók voltak hivatva arra, hogy érzelmileg támogassák a kismamát, miközben világra hozza a gyermekét. A szülések kórházba kerülése óta ezt az odaforduló, megszakítás nélküli jelenlétet ritkán kapják meg a szülő nők. Sok esetben egyedül maradnak a kórház idegen falai között a kérdéseikkel és a félelmeikkel. A mai kor dúlái érzelmi biztonságot és fizikai támogatást nyújtva segítenek abban, hogy ez ne így legyen. A görög szó eredetileg segítő asszonytársat jelent, de egy jól képzett dúla nem csak a szülés óráiban támogatja a párt. Mire a kórházba érnek a szülni készülő párral – mert a leendő apák gyakran elkísérik a feleségüket -, már többször találkoznak, és alaposan megismerik egymást. Tisztázzák, milyen elvárásai vannak a párnak a szüléssel kapcsolatban, és a dúla igyekszik válaszolni minden felmerülő kérdésükre. Fontos, hogy maximálisan megbízzanak benne, hiszen ő lesz az, aki tudásával, tapasztalataival támogatja majd őket a szülés óráiban, aki őrködik a nyugalmuk, az ünnep háborítatlansága felett. Az ő feladatuk nem a  szülés szakmai szempontból való követése, tehát nem helyettesítik a szülésznőt vagy az orvost, hanem kiegészítik a munkájukat azzal a figyelemmel, amire a kórházi alkalmazottnak nincs és nem is lehet energiája, ideje.
                </p>
                <p>
                    <i>Folyt. köv.</i>
                </p>
                <p>
                    <i>/Megjelent a Nők Lapja 2011. 42. számának 60-61. oldalán, a cikk írója: Koronczay Lilla./</i>
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
