import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public37Pic1 from "../../../image/publications/public-37-hero-egyutt-szules.png";
import Public37Pic2 from "../../../image/publications/public-37-egyutt-szules.jpg";

export default function Public37() {
  return (
  <div><section className="section-blog-global">
  <div className="blog-global-container">
      <div className="blog-global-hero">
          <img src={Public37Pic1} alt="egyutt-szules"/>
      </div>

      <div className="blog-global-face">
          <h2 className="blog-global-title">Együtt szülés</h2>
          <div className="blog-global-profile-container">
              <div className="blog-global-profile">
                  <div className="blog-global-img-container">
                      
                  </div>
                  <div className="blog-global-text">
                      <h3>Békés Emőke</h3>
                      <p>2008. szeptember 23.</p>
                  </div>
              </div>
              <div className="blog-global-button">
                  <Link to="/publications2" className="blog-global-btn">Publikációim</Link>
              </div>
          </div>

          <div className="blog-globale-column">
              <div className="blog-globale-img-container">
                  <img src={Public37Pic2} alt="egyutt-szules"/>
              </div>
              <div className="blog-globale-text">
                  <p>
                      <b>Az utóbbi években dúlaként kizárólag olyan szülésekhez hívtak, ahol az apa is jelen volt a szülőszobában, de azt mégsem gondolom, hogy ennek az az oka, hogy divattá vált az apás szülés.</b>
                  </p>
                  <p>
                      A rovatban a múlt héten Nem akarok apás szülést! címmel jelent meg Vályi-Nagy Erika írása. A cikkben megszólaló Magdi és Csaba történetük tapasztalatait összegezve több olyan fontos pontra világítanak rá, amelyeken valóban eldőlhet, hogy az együtt szülés milyen élménnyé válik a pár egyik vagy másik tagja számára.
                  </p>
                  

              </div>
          </div>
          <p>
              Amikor egy várandós nő felveszi velem a kapcsolatot, sokszor korántsem eldöntött tény, hogy az apa jelen lesz-e a szülésnél, mint ahogy sok egyéb más sem tisztul le még a várandósság első felében. Természetesen soha nem beszélem rá a párokat az apás szülésre, és nem is beszélem le róla őket, hiszen ez csakis kettőjük közös döntésén alapulhat. Abban azonban, hogy ez a döntés megalapozottan szülessen meg, nagy jelentősége van a felkészülés időszakában zajló beszélgetéseknek.
          </p>
          <p>
              Amennyiben nem egyértelmű, hogy az apa benn lesz-e a szülőszobában, vagy abban az esetben, ha a pár kifejezetten együtt szülésre készül, akkor legalább egyszer találkozom a várandósság alatt az apával is. Már a kapcsolatunk legelején arra biztatom az anyát, hogy gyűjtsék és írják össze a kérdéseiket, amelyeket aztán időről időre megbeszélünk. Ideális esetben a találkozóinkra a leendő apák többször is elkísérik a párjukat.
              Ezen alkalmakkor ők is hallhatnak arról, hogy milyen egy szülés élettani és lelki szempontból, milyen fázisai és sajátosságai vannak a vajúdásnak, milyen lehetőségeik vannak a kórházban. A közös beszélgetések során fogalmazódik meg bennük, mit hogyan szeretnének, és az apák is megfogalmazhatják az érzéseiket a szüléssel, szülővé válással kapcsolatban.
          </p>
          <p>
              Az, hogy egy férfi jól tud-e segíteni a párjának a vajúdás alatt, nem pusztán azon múlik, hogy szereti-e őt. A kórházhoz, az orvosi beavatkozásokhoz való viszonya a gyermekkori élményeiből is gyökereztethető, de akár még annak is van jelentősége, hogy ő maga hogyan született. Mindemellett, ha nem ismeri azt, hogy a vajúdás és szülés óráiban majd milyen történésekkel, esetleges beavatkozásokkal, testi és lelki változásokkal találkozhat, akkor a biztonságérzete is meginoghat, és így nem tudja a párját jól támogatni. Ha viszont ő szorongóvá válik és nyugtalan lesz, azzal egy olyan örvénybe sodorhatja a párját, amelyben aztán szinte lehetetlenné válik, hogy a szülőnő biztonságban, megfelelő érzelmi támogatás mellett merülhessen bele a vajúdásba.
          </p>
          <p>
              Ugyanakkor az, hogyha közösen élik át a gyermekük születésének örömét, rendkívül mély és szeretetteljes eseménnyé válhat mindkettőjük számára.
          </p>
          <p>
              Egy dúla jelenléte valóban nagy segítség lehet abban, hogy mindkettőjük biztonságérzete megteremtődjön, és ezáltal az apának is megkönnyíti, hogy át tudja adni magát a folyamatnak.
          </p>
          <p>
              Marshall H. Klaus, John H. Kennell és Phyllis H. Klaus amerikai szerzők a The Doula Book című könyvükben így írnak erről:
          </p>
          <blockquote>
              <i>
                  „Meggyőződésünk, hogy az apa nem lehet az anya dúlája. Egy apa nagyon ritkán képes pillanatról pillanatra értékelni, hogy mi történik az anyával, hogy a változások a normális vajúdás részei-e. Könnyebb számára, ha érzelmi támogatást nyújthat az anyának, míg a dúla mindkettőjükkel törődik.
                  <br/><br/>A férfiak gyakran nehéznek találják megfigyelni, elfogadni és megérteni a nők ösztönös viselkedését a vajúdás és a szülés során. Ehelyett általában megpróbálják a vajúdó nőt önkontroll alatti racionális állapotban tartani.
                  <br/>Az apa aggodalmainak és félelmeinek növekedésével eltávolodhat az anya érzelmi állapotától, és úgy érezheti, át kell vennie az irányítást. Ezenkívül előfordulhat lámpaláz, túlzott aktivitás, túlzott beszéd vagy passzivitás is, miközben lehetséges, hogy e reakcióknak pont az ellentéte lenne megfelelő az anya számára. A dúla segíteni tud a férfinak, hogy harmóniába kerüljön az anya érzelmi állapotával.

                  <br/><br/>A dúlának minden esetben érzékelnie kell, hogy milyen a pár kapcsolata. Ha minden rendben megy, és megfelelően együtt tudnak működni, a dúla félrevonul, de a háttérből továbbra is figyeli az eseményeket. Segíti az apát abban, hogy megfelelő módon vegyen részt a folyamatban, például megmutatja neki, hogyan masszírozza az anya hátát.

                  <br/><br/>Az apa önkéntes jelenlétekor az anyának nagyon sokat jelent, hogy tudja, a párja mellette van, szereti őt, és törődik vele.

                  <br/><br/>Az első gyermeküket váró apák számára a kórház azonban gyakran olyan hely, amely nyugtalanítja őket. A számukra ismeretlen terep, a műszerek látványa vagy más vajúdó nők hangjai növelhetik az apák szorongását.

                  <br/><br/>Még nyugtalanítóbb lehet azt látni, hogy milyen változások mennek végbe a párjukban a vajúdás és a szülés során. Ebben a módosult tudatállapotban ugyanis rendkívül sok különböző érzés keríti hatalmába az anyát. Lehet, hogy időnként sír, vagy a fájdalomra panaszkodik, kétségbeeshet, vagy annyira magába fordul, hogy nem szívesen válaszol a környezetéből érkező kérdésekre.

                  <br/><br/>Az apákban bizonytalanságot kelthet, hogy nem tudják pontosan, hol is helyezkedjenek el, hogyan és mennyire érintsék a párjukat, vagy hogy mennyire mutassák ki a szeretetüket az idegenek előtt. Nehezítheti a helyzetüket továbbá az, hogy felelősnek érzik magukat az orvosi beavatkozásokkal kapcsolatos döntésekért is.

                  <br/><br/>A vajúdás és a szülés óráiban ők is erősen bevonódnak érzelmileg a folyamatba. Tele vannak várakozással, izgalommal és aggodalommal.

                  <br/><br/>Ha a dúla elérhető mind az anya, mind az apa számára, akkor képesek a saját feladataiknak megfelelni: az anya előrehalad a szüléssel, kéri és megkapja, amire szüksége van, megfelelő és megértő módon, az apa a lehető legtöbb támogatást nyújtja, és mégis a saját képességeinek és érzéseinek megfelelő mértékben segít, anélkül, hogy kellemetlenül érezné magát.”
              </i>
          </blockquote>
          <p>
              Amikor egy várandós nő azon gondolkozik, hogy ki legyen mellette a szülésénél, akkor a kérdés nem feltétlenül az, hogy az apa-e, vagy a dúla.
          </p>
          <p>
              Sajnos ma még gyakran tapasztalom, hogy a várandós nőket egyes kórházakban választás elé állítják, és döntenie kell, hogy a férjét vagy a dúláját választja-e kísérőjének. Reményeim szerint azonban mind több helyen megtapasztalják, hogy milyen szeretetteljes átéléssel, igazán közös, megérintő élményként élik meg a párok a gyermekük születését, ha mindketten támogató biztonságban érezhetik magukat.
          </p>



          <p>
              <a href="https://nlc.hu/baba/20080923/egyutt_szules/">https://nlc.hu/baba/20080923/egyutt_szules/</a>
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
