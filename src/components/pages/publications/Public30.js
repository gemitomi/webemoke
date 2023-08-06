import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public30Pic1 from "../../../image/publications/public-30-hero-felelem-a-szuloszoban.png";
import Public30Pic2 from "../../../image/publications/public-30-felelem-a-szuloszoban.jpg";

export default function Public30() {
  return (
  <div><section className="section-blog-global">
  <div className="blog-global-container">
      <div className="blog-global-hero">
          <img src={Public30Pic1} alt="felelem a szuloszoban"/>
      </div>

      <div className="blog-global-face">
          <h2 className="blog-global-title">Félelem a szülőszobán?</h2>
          <div className="blog-global-profile-container">
              <div className="blog-global-profile">
                  <div className="blog-global-img-container">
                      
                  </div>
                  <div className="blog-global-text">
                      <h3>Békés Emőke</h3>
                      <p>2009. január 20.</p>
                  </div>
              </div>
              <div className="blog-global-button">
                  <Link to="/publications2" className="blog-global-btn">Publikációim</Link>
              </div>
          </div>

          <div className="blog-globale-column">
              <div className="blog-globale-img-container">
                  <img src={Public30Pic2} alt="felelem a szuloszoban"/>
              </div>
              <div className="blog-globale-text">
                  <p>
                      <b>Két héttel ezelőtti levelemet azzal a gondolattal fejeztem be, hogy mennyire megdöbbentett, amikor egy szülész aknamezőn járáshoz hasonlította a szülés folyamatát.</b>
                  </p>
                  <p>
                      A meglepődés mellett azonban azonnal érdekelni kezdett, hogy vajon mi lehet e különös kijelentés mögött.
                  </p>
                  <p>
                      Amikor csak lehetőségem adódik, szeretek szülészorvosokkal beszélgetni, ugyanis fontosnak érzem, hogy ha nem is mindig értek egyet, de legalább sikerüljön megértenem azt, hogy miről mit és miért úgy gondolnak.
                  </p>
                  

              </div>
          </div>
          <p>
              Ma már egyre tisztábban látom az okait annak, hogy egy orvos mitől félhet egy szülés alatt.
          </p>
          <p>
              Egy pályakezdő szülész-nőgyógyász ismerősöm például arról számolt be, hogy az egyetemi tanulmányai alatt meglehetősen keveset hallott és tanult a normál lefolyású várandósságról és szülésről. Ahogy ő fogalmazott, a baj elhárítására kondicionálták őt. Ez más szakorvosok (pl. belgyógyászok, sebészek) képzésénél érthető is, viszont a szülés alapjában véve mégiscsak egy élettani – és nem pedig kóros – esemény. Természetesen fontos, hogy egy szülészorvos ismerje az összes lehetséges komplikációt, észlelje és felismerje a várandósság, a vajúdás, a szülés vagy a gyermekágy időszakában fellépő, a normálistól eltérő jeleket, és képes legyen azt hatékonyan orvosolni is. De arra nem helyeznek elég nagy hangsúlyt az oktatásban – véli ez a fiatal orvos –, hogy mely esetekben nem kell tenni semmit, csak hagyni és kísérni a természetes folyamatot.
          </p>
          <p>
              Az, hogy mi tekinthető természetesnek, hogy mennyire különbözően lehet normális lefolyású egy szülés (pl. a vajúdás időtartamát illetően), hogy mitől érzi egy anya és egy magzat háborítatlannak a szülést és a születést, ahhoz persze az is szükséges lenne, hogy a képzésbe jóval több pszichológiai ismeret kerüljön.
          </p>
          <p>
              Persze azért vannak olyan orvosok, akik maguk is úgy vélik, hogy a normális lefolyású szülésnél az orvosnak nincs tennivalója. Ők is készenlétben állnak, de a folyamat kísérését jórészt a szülésznőre bízzák, és nem akarják túlzott kontroll alatt tartani az eseményeket. Kétségtelen tény, hogy a szülés lefolyásáért a szakmai felelősség őket terheli. Mindannyiuk számára a legfontosabb cél, hogy a szülés után egészséges legyen az anya is és a kisbaba is.<br/>
              De hogy ez pontosan kinek mit jelent, arról már nagyon eltérően gondolkodnak.
          </p>
          <p>
              Az az orvos, aki nem ismeri a vajúdás lélektani aspektusait, aki nem hisz abban, hogy a test és a lélek szoros egységet képez, aki még egy fel sem bukkant veszély lehetőségétől való félelmében elvégez egy megelőző beavatkozást, amely újabb beavatkozások láncolatát indíthatja el, vagy aki kellő szakmai indokok nélkül mesterségesen gyorsítja a vajúdás folyamatát, csak testi szinten nyújthatja az anyának és a babának az egészséget.
          </p>
          <p>
              Az a szülész, aki viszont hinni tud abban, hogy a vajúdás és a szülés egy olyan élettani esemény, mely különböző ideig tart és eltérő módon zajlik, ha képes arra, hogy figyelmével és szakmai hozzáértésével kísérje – és ne vezesse – a szülést, és ennek megfelelően csak abban az esetben avatkozik bele ebbe a folyamatba, amikor az valóban szükséges, az mind az anya, mind pedig a baba lelki egészségéért is sokat tesz.
          </p>
          <p>
              Egyre többször hallom a különböző fórumokon azt is, hogy a szakmai felelősség terhe mellett a műhibaperektől való félelem is növeli az orvosok szorongását. Az ilyen perekkel – a kimenetelüktől függetlenül – együtt járó felelősségre vonás megrendítheti a szakmai és erkölcsi hitelüket, így természetszerűleg igyekeznek ezt időnként a túlzott biztonságra való törekvéssel is kivédeni. (Amikor például vizsgálni kezdték, hogy miért emelkedik olyan drámaian egyes helyeken a császármetszések aránya, akkor az okok között a perektől való félelem is szerepelt.)
          </p>
          <p>
              Azzal, hogy az anyák egyre inkább ismerik a lehetőségeiket, hogy egyre inkább magukénak szeretnék tudni a szülésüket, szintén növelik sok orvos szorongását. Az orvosokkal szemben támasztott igények és elvárások ugyanis nőnek, és ehhez nem mindegyikük kíván és tud alkalmazkodni. Egy olyan orvos, aki már több évtizede ugyanolyan attitűddel és módszerekkel vezet le egy szülést, nehezen fog ezen már változtatni.
          </p>
          <p>
              Szeretném azonban itt megemlíteni egy általam személyesen nem ismert, de igencsak tiszteletreméltó orvos történetét.
          </p>
          <p>
              árt hozzám egy kismama, aki a második gyermekével volt várandós. Az orvosa egy idős, nagy tapasztalatú nőgyógyász volt, akivel az anya jó kapcsolatban állt. Ahogy közeledett a szülés időpontja, úgy körvonalazódott egyre tisztábban az anya számára az, hogy mit szeretne a közeledő szülésénél. Az első gyermeke érkezésekor több olyan élmény is érte, amelyet szeretett volna a második szülésére készülődve megérteni, elfogadni és most elkerülni. Így aztán leírta az orvosnak, hogy mit szeretne, mit várna el tőle.
          </p>
          <p>
              Az orvosa figyelmesen elolvasta az anya kéréseit, majd egy hosszú beszélgetés során elmondta az anyának, hogy ő ezt miért nem tudja megígérni.
          </p>
          <p>
              Kiderült, hogy ez az orvos sok éven át dolgozott olyan kórházban, amelynek fő profilja a koraszülöttek ellátása volt. Évtizedeken át szinte csak veszélyeztetett várandósokat és komplikációkkal végződő szüléseket látott. Fejben tudta, hogy milyen más lehet egy háborítatlan szülés, és érdeklődött az alternatív szülészeti lehetőségek iránt, de őszintén megmondta, hogy a múltbéli tapasztalatai miatt benne már olyan nagyfokú a félelem, hogy nem tud olyan attitűddel kísérni egy szülést, ahogy ezt az anya kívánná. Megértve és tisztelve az anya kéréseit és felismerve a saját korlátait, maga helyett egy fiatal, nyitott orvost ajánlott.
          </p>
          <p>
              Ezért is biztatok minden szülés előtt álló nőt arra, hogy kérjen időpontot orvosától egy olyan beszélgetésre, ahol elmondhatja, hogy ő pontosan mit is kér, mit vár tőle.
          </p>
          <p>
              Több ilyen beszélgetésen részt vettem már anyaként is és dúlaként is, és azt tapasztalom, hogy ennek a tisztázása valóban komoly segítség lehet abban, hogy az orvos „kulcsot kaphasson” az anyához. Ha jól meggondoljuk, még az egyedi igényekhez nagymértékben alkalmazkodó orvosnak sincs könnyű dolga, hiszen minden szülőnője más és más.
          </p>
          <p>
              És ez még csak az érem egyik oldala, hiszen a kórházi szülésre készülő nő is több minden miatt szoronghat, számos kérdés merül fel benne a várandósság időszakában magával és a kisbabájával kapcsolatban is.
          </p>
          <p>
              Egészséges lesz-e a kisbabám? Meg tudom-e szülni? Lesz-e elég tejem, amellyel táplálni tudom? Hogy fogom bírni a vajúdást? Milyen lesz a szülőszoba? Biztosítják-e a számomra nélkülözhetetlen intimitást? Mi fog velem történni onnantól kezdve, hogy megérkezem a szülészetre? Kik lesznek velem? Fognak-e mindenről informálni? Mi történik a kisbabámmal, ha megszületik? Mindvégig velem maradhat-e? Hány napot kell a kórházban töltenem? stb.
          </p>
          <p>
              Vajon mennyi idő és mi kell ahhoz, hogy ne lehessen a szüléssel kapcsolatban se az anyák, se az orvosok félelmeiről írni?
          </p>
          <p>
              Több generációváltás? Szemléletmódváltozás? Az egyetemi oktatás megváltozása? Korrektebb tájékoztatás? Nagyobb igény a tájékozódásra? Őszinte kommunikáció?
          </p>
          <p>
              Valószínűleg ez mind, és bizonyára még más is.
          </p>
          <p>
              Ha kellő információk birtokában keressük meg azt a helyet, ahol életet kívánunk adni a gyermekünknek, és azoktól kérünk támogatást, akik a biztonságot jelentik számunkra, akkor pozitív szülésélményünk átadásával mi, anyák is sokat tehetünk azért, hogy a szüléstől való félelemtől mentesíthessük majd lányainkat és unokáinkat.
          </p>
          

          <p>
              <a href="https://nlc.hu/baba/20090120/felelem_a_szuloszoban_/">https://nlc.hu/baba/20090120/felelem_a_szuloszoban_/</a>
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
