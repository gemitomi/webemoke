import React from "react";
import { Link } from "react-router-dom";

import Egyeni from "../../image/egyeni_1.png";

export default function EgyeniKonzultacio() {
  return (
    
    <div >
      <section className="consultation">
        <div className='consultaion-container'>
          
          <div className='text-container'>
            <h1>Egyéni konzultációk </h1>
            <h1>várandósoknak, pároknak </h1>
            <br/>
            <span>online is!</span>
            <hr/>
            <p>A tapasztalataim azt mutatják, hogy az, hogy egy anyának milyen szülésélménye lesz, az jórészt attól is függ, hogy a szülése idejére letisztul-e benne az, hogy hogyan és kiknek a jelenlétében szeretné világra hozni a gyermekét. Ehhez azonban az kell, hogy ne maradjanak kimondatlan kérdései, aggodalmai.</p>
          </div>
          <div className="consultation-image">
            <img  src={Egyeni} alt='' />
          </div>
        </div>
      </section>
      <section className="consultation1">
        <div className="consultation-listbox">
          <div className="consultation-h4">
            <h4>Miben tudlak támogatni?</h4>
          </div>
          <div className="separator-box"><span className="separator"></span></div>
          <div className="lista">
          <ul>
            <li>
              Ha úgy érzed, hogy szükséged van egy olyan szülési tapasztalattal rendelkező képzett dúlára, aki meghallgatja a várandóssággal, szüléssel, gyermekneveléssel kapcsolatos kérdéseidet, érzéseidet, gondolataidat.
            </li>
            <li>
              Ha szeretnéd megismerni a lehetőségeidet, és minden információt megkapni ahhoz, hogy felelősen dönthess majd arról, hogy hogyan, milyen körülmények között hozod világra a gyermekedet.
            </li>
            <li>
              Ha szeretnéd, hogy a vajúdás és szülés óráiban melletted (és a párod mellett) legyen egy olyan kísérő, aki érzelmileg és fizikailag is támogat.
            </li>
            <li>
              Ha kérdéseid vannak a gyermekneveléssel, a szülői szerepekkel vagy a szülővé válással kapcsolatosan.
            </li>
          </ul>
          </div>
            <p>Örömmel segítek, akár online is, ha számodra úgy kedvezőbb.</p>
        </div>
      </section>
      <section className="consultation2">
        <div className="consultation-dula-title">
          <h2>Hogyan néz ki a személyes támogatás?</h2>
        </div>
        <div className='consultation-bottom'>
          <div className="consultation-dula1-box">
            <p className="consultation-dula-text">A várandósság hónapjaiban a találkozóink alkalmával beszélgetünk a várandósság testi és lelki változásairól, a vajúdás és a szülés élettani és lélektani folyamatairól, a gyermekágyas időszakról, az újszülöttről és bármi másról, ami téged vagy a párodat foglalkoztat. Segítelek elképzeléseid megfogalmazásában, tájékoztatlak a szülésre való felkészülés lehetőségeiről és legjobb tudásom szerint igyekszem megválaszolni a benned felmerült kérdéseket.</p>
          </div>
          <div className="consultation-dula2-box">
            <p className="consultation-dula-text">Emellett szempontokat adok ahhoz, hogy az orvosoddal vagy szülésznőddel történő egyeztetés után tisztán lásd, hogy abban az intézményben, ahol szülni fogsz, milyenek a szülés körülményei, milyen alternatíváid vannak, hogyan történik az újszülöttek ellátása, milyen elhelyezést biztosítanak a gyermekágyas osztályon, támogatják-e az anyatejes táplálást vagy azt, hogy a szülést követően együtt maradhassatok a babáddal. Általában azt tartom a legjobb megoldásnak, ha a várandósságod idején többször leülünk beszélgetni, de legalább egyszer találkozni szeretnék Veled és partnereddel vagy bármilyen más személlyel, aki jelen lesz a szülésnél (orvos, szülésznő, bába), még a vajúdás megindulása előtt, optimális esetben a 36. hét előtt.</p>
          </div>
          
        </div>
      </section>
      <section className="consultation3">
        <div className="consultation-dula-title-bottom">
          <p className="consultation-dula-title-text">A találkozások gyakorisága és időtartama a Te igényeid szerint alakul, számomra az a fontos, hogy annyi időt tudjak biztosítani a számodra, amennyi szükségesnek érzel ahhoz, hogy mire elérkezik a szülésed ideje, ne maradjanak megválaszolatlan kérdéseid.</p>
        </div>
      </section>
      
      <section className="consultation-citateBx">
        <p className="consultation-citate-text">
          "Ezek a nyugodt találkozások a leendő szülőkkel lehetővé teszik, hogy megvitassák elvárásaikat, és terveket készítsenek a vajúdással és a szüléssel kapcsolatban.
          A párok azért is tartják nagyon értékesnek ezeket a beszélgetéseket, mivel elképzelhető, hogy korábban egymással sem osztották meg a vajúdással és a szüléssel kapcsolatos gondolataikat, vágyaikat és érzéseiket. 
          A dúla látogatása alkalmat teremt a téma megvitatására, és a szülők bátorítást kapnak.
          <br/><br/>
          Ha a szülők időben megbeszélik céljaikat és választási lehetőségeiket, akkor lesz idejük arra is, hogy az orvossal is egyeztessenek. A szülőknek számos lehetőséggel kell szembenézniük a vajúdással, szüléssel és az utána következő időszakkal kapcsolatban.
          Nem minden kórház vagy szülészeti intézmény tudja az összes lehetőséget biztosítani, ezért a szülőknek rugalmasan kell gondolkozniuk és megfontolniuk, hogy melyek a legfontosabb dolgok számukra."
        
        <h6>Marshall H. Klaus, John H. Kennell, Phyllis H. Klaus – The Doula Book (Da Capo Press, 2002.)</h6>

        </p>
      </section>
      <section className="consultation4">
        <div className="consultation-btn-h2"><h2>Neked is segíthetek?<br/><span>Szeretettel várom jelentkezésedet!</span></h2></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="consultation-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
      </section>
      
    </div>
    
  ) 
}
