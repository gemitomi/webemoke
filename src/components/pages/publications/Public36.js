import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public36Pic1 from "../../../image/publications/public-36-hero-nem-tehetek-semmit.png";
import Public36Pic2 from "../../../image/publications/public-36-nem-tehetek-semmit.jpg";

export default function Public36() {
  return (
  <div> <section className="section-blog-global">
  <div className="blog-global-container">
      <div className="blog-global-hero">
          <img src={Public36Pic1} alt="nem-tehetek-semmit"/>
      </div>

      <div className="blog-global-face">
          <h2 className="blog-global-title">Nem tehetek semmit?</h2>
          <div className="blog-global-profile-container">
              <div className="blog-global-profile">
                  <div className="blog-global-img-container">
                      
                  </div>
                  <div className="blog-global-text">
                      <h3>Békés Emőke</h3>
                      <p>2008. október 08.</p>
                  </div>
              </div>
              <div className="blog-global-button">
                  <Link to="/publications2" className="blog-global-btn">Publikációim</Link>
              </div>
          </div>

          <div className="blog-globale-column">
              <div className="blog-globale-img-container">
                  <img src={Public36Pic2} alt="nem-tehetek-semmit"/>
              </div>
              <div className="blog-globale-text">
                  <p>
                      <b>Kedves Emőke!</b>
                  </p>
                  <blockquote>
                      <i>A második gyermekemet várom. Sajnos nem hiszem, hogy Egerben fogadhatnék dúlát, vagy bármi más igényem lehetne azonkívül, hogy a férjem legyen velem.<br/>
                          Első gyermekem születésénél sokat szenvedtem kitoláskor amiatt, hogy a hátamon kellett feküdnöm. (Nagyon fájt a keresztcsontom a várandósság alatt is, mintha néha „becsípődne” egy idegszál, és olyankor mozdulni sem tudtam.) Ezzel kapcsolatban szeretném megkérdezni, hogy van valami írott SZABÁLY arra, hogy Pesten bárhogy lehet szülni, vidéken csak háton fekve? Mert az orvosok itt ehhez ragaszkodnak, és nem tudok mit tenni…<br/>
                      <br/>Nem gondolnám, hogy onnan, ahol lakom, simán elröppenhetnénk Budapestre, mikor itt az idő, az itteni szülésznőmhöz pedig ragaszkodom.<br/>
                      <br/>Válaszodat előre is köszönöm!<br/>Mónika</i>
                  </blockquote>
                  

              </div>
          </div>
          <p>
              <b>Kedves Mónika!</b>
          </p>
          <p>
              Sajnos nem egyedi az a probléma, amelyről írtál.
          </p>
          <p>
              Természetesen nincsenek a szülészetben pesti és vidéki szabályok, és persze kevéssé valószínű az is, hogy a vidéken élő nők anatómiai felépítése annyira más lenne, hogy számukra a háton fekvő pozíció lenne a legideálisabb a szülésre. Az, hogy a fővárosi kórházakban nagyobb a választás lehetősége, nem pusztán abból adódik, hogy az adott helyen más a szemlélet, hanem a piac diktálta feltételek is közrejátszanak ebben.<br/>
              Ha valaki Budapesten bemegy egy kórházba, és ott azt a választ kapja, hogy csak a hátán fekve szülhet, minden további nélkül kisétál, és elmegy oda, ahol azt az – egyébként teljesen természetes – kívánságát, hogy szabadon választhassa meg azt a testhelyzetet, amely a legkényelmesebb neki, maximálisan tolerálják.<br/>
              De ez nemcsak az intézmény általános szemléletén múlik, hanem az adott orvosén is. Minden kórházban vannak konzervatív és liberális gondolkodású orvosok. Ha a várandós nő úgy dönt, hogy fogad orvost, akkor vélhetően a vidéki szülészeteken is akadnak olyanok, akik tiszteletben tartják az anyák kéréseit, így tud ilyet választani.
          </p>
          <p>
              Sokkal nehezebb a helyzet abban az esetben, ha az anyának nincs fogadott orvosa. Ilyenkor valóban csak az lehet iránymutató, hogy általánosságban milyen szemlélet uralkodik azon a szülészeten.<br/>
              Mindezek mellett azt gondolom, hogy nagyon sok múlik rajtad is.
          </p>
          <p>
              A változásokat nekünk, nőknek kell elérnünk. Meg kell tudni fogalmazni az igényeinket, és ki kell állnunk mellette. Természetesen a vajúdás órái nem alkalmasak erre. Az a befelé fordulás ideje, ahol mindennél fontosabb a nyugalom és a biztonságérzet. A vajúdó nő másfajta tudatállapotban van, ilyenkor nem feltétlenül tud kiállni az elképzelései mellett, és persze vitatkozni sem akar. Ezért van az, hogy ha utasítják az anyákat, sokan megadóan a hátukra fekszenek, szó nélkül beleegyeznek különböző beavatkozásokba, vagy szomorúan elfogadják, ha a szülés után esetleg órákig nem kapják meg az újszülöttjüket. Ezek a dolgok persze nem múlnak el nyomtalanul, és többen a szülés után napokkal, hetekkel vagy akár évekkel később kezdik átélni igazán annak a fájdalmát, hogy miért így történt.
          </p>
          <p>
              Ezért aztán arra biztatlak, hogy még a szülés előtt feltétlenül keresd fel a szülésznődet (és ha van, a fogadott orvosodat is), és beszélj vele arról, hogy mi az, amit el szeretnél kerülni, és mi az, amit kérsz. Egy híres szülészorvos szerint a „fejenállás után a második legalkalmatlanabb póz a szülésre a háton fekvés”. Ebben a pózban nem segít a gravitáció sem, az erő lefelé irányítása is sokkal nehezebb, viszont kedvező az egyébként legtöbb esetben indokolatlan gátmetszés elvégzéséhez, és az orvosnak (!) kétségtelenül a legkényelmesebb.<br/>
              Ha ezen a megbeszélésen teljes elutasításban lenne részem, én bizony otthagynám ezt az orvost vagy intézményt.
          </p>
          <p>
              Vidéken járva egyre többször hallom az anyáktól azt, hogy inkább vállalják az utazást, de nem mennek olyan helyre, ahol semmibe veszik az igényeiket. Erre általában a vajúdás természetéből adódóan van is idő, nagyon ritkán érkeznek a babák kirobbanó sebességgel. Persze ez nem azt jelenti, hogy feltétlenül Budapestig kell eljönni, míg az ember egy normális szemléletű szülészetet talál. Megéri körülnézni!
          </p>
          <p>
              És még valamit, hangsúlyozva, hogy sokkal jobb előre tisztázni a személyzettel ezeket a dolgokat.
          </p>
          <p>
              Többször voltam a szemtanúja annak, hogy a kitolás előtt megkérte az anyát az orvos, hogy feküdjön fel az ágyra. Vannak olyan anyák, akik ilyenkor képesek arra, hogy kedvesen, de határozottan közöljék, hogy ők fel nem állnak (mondjuk, guggolásból vagy négykézlábas pozícióból).<br/>
              Mit tud csinálni ilyenkor az orvos, ha az anya nem mozdul, mert NEKI úgy a kényelmes? Semmit. Erőszakkal senkit nem ráncigálnak, így ilyenkor az orvos kénytelen leguggolni vagy letérdelni, és alkalmazkodni a helyzethez, vagy ráhagyja ezt a szülésznőre (ez még szerencsésebb).<br/>
              Biztatlak hát, hogy érvényesítsd bátran az elképzeléseidet önmagad és a kisbabád érdekében is. Az anyák ugyanis ösztönösen, és az orvosoknál sokkal jobban tudják, hogy melyik az a pozíció, amely a gyermekük megszületéséhez éppen akkor a legjobb.
          </p>
          <p>Emőke</p>


          <p>
              <a href="https://nlc.hu/baba/20081008/nem_tehetek_semmit_-_a_dula_valaszol/">https://nlc.hu/baba/20081008/nem_tehetek_semmit_-_a_dula_valaszol/</a>
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
