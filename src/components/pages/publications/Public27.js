import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public27Pic1 from "../../../image/publications/public-27-hero-vajudas-es-szuletes.png";
import Public27Pic2 from "../../../image/publications/public-27-vajudas-es-szuletes.jpg";

export default function Public27() {
  return (
  <div><section className="section-blog-global">
  <div className="blog-global-container">
      <div className="blog-global-hero">
          <img src={Public27Pic1} alt="vajudas-es-szuletes"/>
      </div>

      <div className="blog-global-face">
          <h2 className="blog-global-title">Vajúdás és születés</h2>
          <div className="blog-global-profile-container">
              <div className="blog-global-profile">
                  <div className="blog-global-img-container">
                      
                  </div>
                  <div className="blog-global-text">
                      <h3>Békés Emőke</h3>
                      <p>2009. március 03.</p>
                  </div>
              </div>
              <div className="blog-global-button">
                  <Link to="/publications2" className="blog-global-btn">Publikációim</Link>
              </div>
          </div>

          <div className="blog-globale-column">
              <div className="blog-globale-img-container">
                  <img src={Public27Pic2} alt="vajudas-es-szuletes"/>
              </div>
              <div className="blog-globale-text">
                  <p>
                      <b>A héten egy kislány érkezésénél lehettem jelen. Amikor kibújt, anyukája a vajúdás mélységeiből visszatérve hitetlenkedve kérdezte tőlem: „Ő az én gyermekem? Tényleg?”</b>
                  </p>
                  <p>
                      Majd gyengéden a karjaiba vette, hátradőlt az ágyon, és a babát a mellkasára fektette. A kislány eleinte még sírt egy kicsit, de hamarosan elcsendesedett és csak nézte, nézte az anyukáját, aki számára még mindig felfoghatatlan volt az, ami pár perce történt. Amikor már el tudta hinni a csodát, óvatosan végigsimította kisbabája arcocskáját, hátát, kezét, ujjait, és közben ámulva szólította meg:
                  </p>
                  

              </div>
          </div>
          <p>
              <i>„Kicsim, hát hogy lehetsz ennyire tökéletes?”</i>
          </p>
          <p>
              Minden vajúdás más és más. Az ereje, a dinamikája, a ritmusa, és a folyamatot kísérő sóhajok, énekek, kiáltások hangjainak árnyalata is sokféle.
          </p>
          <p>
              A nők is különbözőképpen élik meg. Van, aki könnyedén ráfekszik a hullámokra, van, aki ellenáll. Van, aki könnyek közt, van, aki vad extázisban vagy éppen csendes befelé fordulással szüli meg gyermekét, és olyan is akad, aki mindeközben megszüli újra önmagát is.
          </p>
          <p>
              A vajúdás olyan erejű áramlás, mely minden szülő nőt magával sodor. Ebben a sodrásban sokan kapaszkodót keresnek. A párjuk kezébe, a segítők tekintetébe kapaszkodnak vagy néha a múltból előbukkanó emlékekbe, érzésekbe. Vajúdásuk közben néha az anyjukat, olykor születendő gyermeküket, sokszor Istent hívják.
          </p>
          <p>
              Kapaszkodnak, miközben el kell engedniük magukat és útnak engedni a babájukat.
          </p>
          <p>
              Aztán egyszer csak eljön a pillanat, ahová ha mégoly különböző úton is, de a legtöbben eljutnak. És a csoda innentől mindig ugyanúgy történik meg.
          </p>
          <p>
              Kinyílik az aranykapu, és lassacskán milliméterről milliméterre haladva mutatkozni kezd az új élet. Felemelő pillanat, amikor a gigantikus erők forgataga az ismeretlen világ mélyéről a kapuba tereli a kisbabát.<br/>
              Eleinte még nem látszik, csak a remegés, a vérbő megnyílás, az elképesztő energia áramlása sejteti, hogy közeledik.
          </p>
          <p>
              Aztán a következő hullámban felbukkan egy pici, hajas fejtető. Lassan, tétován, még vissza-visszahúzódva, mintha a küzdelem azért, hogy kinn legyen a szorításból valamiféle bizonytalan visszavágyással vegyülne a már ismert, védelmet nyújtó anyaméh felé.
          </p>
          <p>
              De végül mégis jön, újra, egyre határozottabban, elszántabban. A kisbaba tudja, hogy az édesanyja várja, hogy sírva, sóhajtva, jajongva, de nagyon vágyja már. Varázslatos percek ezek, melyek misztériumát az adja, hogy ekkor különös módon mindketten az anyai testből kilépve, egy másik világban járnak.
          </p>
          <p>
              Feszít és éget a gát, ahogy a kicsi fej nekifeszül, aztán egyszer csak minden akadályt legyőzve átbújik a kapun a fejecske.
              <br/>Ekkor még nincs itt a gyermek, hiszen egyszer még össze kell húzódni az anyaméhnek ahhoz, hogy meghozza őt teljes valójában.
              <br/>Egyetlen mágikus perc ez, mély, tiszteletteljes meghajlás a természet csodája előtt.
          </p>

          <p>
              <a href="https://nlc.hu/baba/20090303/vajudas_es_szuletes/">https://nlc.hu/baba/20090303/vajudas_es_szuletes/</a>
          </p>
      </div>

      <div className="blog-global-tags">
            <p>Címkék:</p><Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications2">Publikációim</Link>
      </div>
  </div>
</section></div>
)
}
