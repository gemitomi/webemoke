import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public31Pic1 from "../../../image/publications/public-31-hero-kell-e-lehet-e-tervezni-a-szulest.png"
import Public31Pic2 from "../../../image/publications/public-31-kell-e-lehet-e-tervezni-a-szulest.jpg"

export default function Public31() {
  return (
  <div><section class="section-blog-global">
  <div class="blog-global-container">
      <div class="blog-global-hero">
          <img src={Public31Pic1} alt="kell-e, lehet-e tervezni a szulest"/>
      </div>

      <div class="blog-global-face">
          <h2 class="blog-global-title">Kell-e, lehet-e tervezni a szülést?</h2>
          <div class="blog-global-profile-container">
              <div class="blog-global-profile">
                  <div class="blog-global-img-container">
                      
                  </div>
                  <div class="blog-global-text">
                      <h3>Békés Emőke</h3>
                      <p>2009. január 06.</p>
                  </div>
              </div>
              <div class="blog-global-button">
                  <Link to="/publications2" class="blog-global-btn">Publikációim</Link>
              </div>
          </div>

          <div class="blog-globale-column">
              <div class="blog-globale-img-container">
                  <img src={Public31Pic2} alt="kell-e, lehet-e tervezni a szulest"/>
              </div>
              <div class="blog-globale-text">
                  <p>
                      <b>Kedves Emőke!</b>
                  </p>
                  <blockquote>
                      <i>"Első gyermekemmel vagyok várandós, május végén fogok szülni. Van választott orvosom, hozzá havonta járok a magánrendelésére. Nagyon kedves velem, de igazából azonkívül, hogy elvégzi a szokásos vizsgálatokat, másról nemigen esik szó köztünk. Igaz, amikor a múltkor nála jártam, megkérdeztem, hogyan lehet nála szülni, de nem kaptam pontos válaszokat. „Majd meglátjuk, akkor éppen hogyan alakulnak a dolgok” – mondta.</i>
                  </blockquote>
                  

              </div>
          </div>
          <blockquote>
              <i>Őszintén szólva teljesen elbizonytalanodtam. Sokat olvasgatok a szülésről, mert a nagy nap közeledtével egyre jobban foglalkoztat ez a téma. Arra is gondoltam, hogy elmegyek a kórház szülésre felkészítő előadásaira, hátha egy kicsit pontosabban tájékoztatnak, hogy mik a szülészeten a szokások. De valójában nem is tudom, mi az, amit szeretnék. Olvastam már a szülési tervről is, de abban nem vagyok biztos, hogy például én dönthetek-e arról, hogy legyen-e gátmetszésem, vagy sem. Érdemes-e kérnem, hogy a babám velem maradjon a szülést követő órákban, ha a már szült barátnőimtől tudom, hogy abban a kórházban, ahol szülni fogok, erre nincs lehetőség, mert a kisbabákat röviddel a születésük után úgyis mindig leviszik a csecsemőosztályra?<br/>
                  <br/>Azt pedig honnan tudhatnám előre, hogy kérek-e majd fájdalomcsillapítót, vagy nem? Valahogy azt érzem, hogy a szülés ösztönös dolog, miért kellene ezt előre megtervezni?<br/>
                  <br/>Mivel te sok szülést kísérsz, a tapasztalataid alapján talán tudsz válaszolni arra, hogy tényleg meg kell-e tervezni a szülést."<br/>
              <br/>Válaszodat előre is köszönöm!<br/>Adrienn</i>
          </blockquote>
          <p>
              <b>Kedves Adrienn!</b>
          </p>
          <p>
              A leveledet olvasva elsőként egy, az Alternatal Alapítvány gondozásában megjelent könyv jutott eszembe, amelyet nagyon szeretek. Penny Armstrong bába és Sheryl Feldman dúla írta. Címe: A születés művészete, alcíme pedig Szülés bölcsen, a természet rendje szerint, a tudomány támogatásával. A szerzők számos szüléstörténettel illusztrálva írnak a szülés lelki természetéről és a vajúdás alatt megjelenő erőről, valamint arról, hogy a medikalizált szülés elterjedésével hogyan szorul háttérbe az ősi tudásunk és a saját testünk bölcsességébe vetett hitünk.
          </p>
          <p>
              <i>„Van egy erő, ami a szüléskor eljön a nőkhöz. Nem kérik, egyszerűen csak elárasztja őket. Összegyűlik, mint a felhő a szemhatáron, átsuhan az égen, és magával hoz egy gyermeket”</i> – írják e gyönyörű költői képpel.
          </p>
          <p>
              De ha így van, ha ez az erő tényleg minden nőhöz eljön a szülés alatt, akkor mit is kellene tervezni?
          </p>
          <p>
              A nők döntő többsége Magyarországon kórházban szül. Ott érzi magát biztonságban, mert azt reméli, hogy az esetlegesen fellépő komplikáció esetén ott kapja meg akár ő, akár a babája a leggyorsabban a hatékony orvosi segítséget. Az, hogy szükség esetén a gyors orvosi beavatkozás és ellátás életet is menthet, ez nem kérdés. De mi történik oly sok esetben, amikor nincs vészhelyzet, és amikor nem lenne szükség semmiféle beavatkozásra?
          </p>
          <p>
              Az amerikai szerzőpáros számos kórházi szülésről szóló elbeszélés meghallgatása és a munkájuk által szerzett tapasztalataik nyomán így fogalmazta meg a következtetését: 
          </p>
          <p>
              <i>„Ösztöneinktől és vágyainktól hajtva gyermekeket nemzünk, akik testünk géniuszára hagyatkozva növekednek méhünkben. Ha a szülés során újra testünk géniuszához fordulunk, ha hívjuk és felhasználjuk erejét, azt tapasztaljuk, hogy a nők 85-90%-a mindenféle komplikáció és hajmeresztő bátorság nélkül világra tudja hozni gyermekét. Ha látjuk, hogy jól halad a szülés, hogy azok a vajúdók, akik jól élik meg a fájdalmat, és örülni tudnak a gyümölcsének, az jut eszünkbe, hogy az erő, ami a szülés közben árad szét a nőben, nem is olyan szeszélyes, mint amilyennek tűnik. Lehet kisiklatni, gyöngíteni, sőt meg is lehet bénítani, de ez legtöbbször a mi cselekedeteink következménye. Az anya felelősségét figyelembe véve furcsa, hogy megbénítjuk a szüléskor belészálló erőt. Különös, hogy nem adunk emberi melegséget, amely pedig enyhíti a fájdalmat. Furcsa, hogy elnémítjuk egy anya testi és érzelmi reakcióit, mikor ezek erőt adhatnak neki, ha kellőképpen tápláljuk.”</i>
          </p>
          <p>
              Dúlaként természetesen arra törekszem, hogy a szülőnő, akit kísérek, megtapasztalhassa és átengedhesse magát ennek az erőnek, de úgy látom, ez önmagában nem elég, mivel nem minden szülés körül dolgozó szakember gondolkodik erről így. Ennek is megvan az oka – erre majd még a későbbiekben kitérek –, de ezért válik nagy jelentőségűvé az, hogy megtervezzük, átgondoljuk, hogyan, kiknek a jelenlétében és hol szülünk. Minden nőnek jó lenne megtalálnia azt az intézményt és azokat a személyeket, akik mellett biztonságban, szeretetteljes, támogató légkörben hozhatja világra a gyermekét. Sajnos ma még nagy különbségek vannak a különböző szülészeti intézményekben. Azt gondolom, hogy nem a tárgyi feltételek közti különbségek az igazán lényegesek, hanem sokkal inkább a szemléletmódbeli eltérések. Persze mi, nők is különbözőek vagyunk. Egyikünknek ez a fontos, másikunk valami egészen mást tart lényegesnek, amikor arról gondolkodik, hogyan szeretne szülni.
          </p>
          <p>
              A legfontosabb a készülődés hónapjaiban az, hogy te is megismerd a lehetőségeidet. Érdemes tudni, hogy a különböző intézményekben milyenek a szülés körülményei, milyen alternatíváid vannak, hogyan történik az újszülöttek ellátása, milyen elhelyezést biztosítanak a gyermekágyas osztályon, támogatják-e az anyatejes táplálást, stb. Emellett az is fontos, hogy ismerd a különböző beavatkozások létjogosultságát, előnyeit és hátrányait, vagy azt, hogy mi a jelentősége annak, hogy a szülést követően együtt maradhassatok a babáddal. Ezek ismeretében lehet aztán jól végiggondolni, hogy számodra melyek azok a szempontok, amelyek fontosak.
          </p>
          <p>
              Hasznos, hogy mielőtt ezekről a kérdésekről beszélsz az orvosoddal és a szülésznővel, le is írd ezeket. Így biztos, hogy nem marad ki semmi, és jobban tudsz figyelni a válaszokra is. A „majd meglátjuk”, „ahogy alakul” kezdetű válaszok nem olyan megnyugtatóak, mint ha pontosan tájékoztatnak arról, hogy például egy-egy beavatkozásra milyen esetekben kerülhet sor.
          </p>
          <p>
              Az előzetes elképzelések a vajúdás folyamán jelentősen megváltozhatnak. Lehet, hogy például a szülésedre készülve úgy gondolod, hogy semmiképpen nem akarsz majd fájdalomcsillapítót, de a vajúdáskor másként döntesz. Természetesen megteheted, hiszen te érzed ott és akkor, hogy mire van szükséged. De ha a szülést megelőzően már beszéltél az orvosoddal arról, hogy milyen fájdalomcsillapítási módok vannak, hogy ezeknek mi az előnye, és mik lehetnek a hátrányai, akkor bizonyára felelősen tudsz majd dönteni.
          </p>
          <p>
              A tervezés jelentősége tehát abban áll, hogy segít az informált döntés meghozatalában.
              <br/>Több mint egy éve egy szakmai fórumon nagyon megdöbbentem, amikor egy szülészorvosnő a felszólalásában úgy fogalmazott, hogy „a szülés egy aknamező”.
          </p>
          <p>
              Hogy ez a meghökkentő kijelentés mit jelenthet a hasonlóképpen gondolkodó orvosok részéről, és hogy milyen értelmet nyert számomra, mióta várandósokat készítek fel a szülésre, arról a következő cikkemben írok.
          </p>
          <p>
              Ne ijedj meg, nem rémisztgetni akarlak, sokkal inkább azt remélem, hogy ezt megértve további válaszokat kaphatsz a most feltett kérdéseidre.
          </p>
          <p>Emőke</p>


          <p>
              <a href="https://nlc.hu/baba/20090106/kell-e_lehet-e_tervezni_a_szulest/">https://nlc.hu/baba/20090106/kell-e_lehet-e_tervezni_a_szulest/</a>
          </p>
      </div>

      <div class="blog-global-tags">
            <p>Címkék:</p><Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications2">Publikációim</Link>
      </div>
  </div>
</section></div>
)
}
