import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog35Pic1 from "../../../image/blog/blog-35-hero-szivembe-zart-csaladjaim-talalkozoja.png";
import Blog35Pic2 from "../../../image/blog/blog-35-szivembe zart csaladjaim-talalkozoja.jpg";

export default function SubBlog35() {
  return (<div><section class="section-blog-global">
  <div class="blog-global-container">
      <div class="blog-global-hero">
          <img src={Blog35Pic1} alt="szivembe-zart-csaladjaim-talalkozoja"/>
      </div>

      <div class="blog-global-face">
          <h2 class="blog-global-title">Szívembe zárt családjaim találkozója</h2>
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
                  <img src={Blog35Pic2} alt="szivembe-zart-csaladjaim-talalkozoja"/>
              </div>
              <div class="blog-globale-text">
                  <p>
                      Hajnal. Ébredek. Eljött a nagy nap. Indulunk a kis családommal az erdőbe, hogy végre  találkozhassak a szívembe zárt családjaimmal.
                  </p>
                  <p>
                      Az erdőben szép reggeli fények, napsütés. És barátok, akik már gyújtják is a tüzet, hogy ebédre megfőjön a gulyás és dúlatársaim, akik az érkező gyerekek szórakoztatásában lesznek a segítségemre. Izgulok és örülök egyszerre. Tele vagyok várakozással. Épp kilenc hónappal ezelőtt fogant meg az álmaimban ennek a napnak a gondolata.
                  </p>
                  

              </div>
          </div>

          <p>
              Egy várandósságnyi idő óta készülök arra, hogy egyszerre ölelhessem meg mindazokat, akik az elmúlt tíz évben meghívtak, hogy mellettük legyek a szülővé válásuk időszakában és gyermekük világra jövetelének óráiban.
          </p>
          <p>
              Meghívtam őket egy piknikre és ők örömmel jöttek. Sorban gurulnak be az autók, érkeznek a családok. Csupa szívemnek nagyon kedves ember és gyönyörű gyermekeik, kisebbek és nagyobbak. Mosolyok, örömkönnyek. Míg ölelem őket, peregni kezd emlékeim filmje, kísérésük története. Könnyű és nehezebb szülések, érintések, egymásba fonódó tekintetek,  édesanyjuk mellén szuszogó vagy apjuk karjában nézelődő babák képei.
          </p>
          <p>
              Sokan vannak. És nagyon sokan itt vannak ma. Hálás vagyok a bizalmukért és a szeretetükért.  Szeretném nekik elmondani, meg is próbálom, de elsírom magam. Nem baj, engedem. Láttam már az ő könnyeiket is, nem szégyelljük egymás előtt az érzelmeinket, és ez olyan jó!
          </p>
          <p>
              Csodálatos, szívvel és kézzel készített ajándékokat hoznak, ezt is megkönnyezem. Ők maguk a legnagyobb ajándékok, nem is tudom, hogy lehet ekkora örömöt elbírni. Szeretnék mindenkivel beszélgetni, szeretném, ha tudnák, mennyire boldog vagyok, szeretném, ha látnák, mennyire csodálkozom azon, hogy mennyit fejlődött a babájuk azóta, hogy a szülőszobán megláttam őket, és szeretném, ha most megállna vagy legalább belassulna az idő.
          </p>
          <p>
              Eszünk, játszunk, beszélgetünk, arcfestünk, buborékokat fújunk.  Vannak, akik lassan indulnak az elálmosodó gyermekeikkel és vannak, akik csak most érkeznek. A legnagyobb gyermek 10 éves, a legkisebb 3 hetes, és itt van velünk egy még kisebb baba, aki egyelőre a mamája hasában várja, hogy végetérjen ez az izgalmas nap, és nyugodtan lehessek mellette, ha elindul a világra. (Másnap el is indul.) 🙂
          </p>
          <p>
              Nyúlnak az árnyékok, ürül a bogrács, tele a szívem. A fák mögött lassan lebukik a nap, készülődünk haza. Másnap barátok, családtagok kérdezik tőlem érdeklődve, hogy milyen volt a piknik? Napokig nem tudok mit mondani, csak annyit, hogy az egész nap egy hatalmas ajándék, amit még nem tudtam bontani.
          </p>
          <p>
              Aztán megérkezik Timinek, a nap fotósának meglepetése. Nézegetem a képeket és elindulnak a könnyeim újra. Timi képei húzzák meg a masnit az ajándékcsomagon, és én boldogan bontogatom.
          </p>
          <p></p>
          


      </div>

      <div class="blog-global-tags">
          <p>Címkék:</p>
          <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog2">Blog</Link>
      </div>
  </div>
</section></div>
)
}
