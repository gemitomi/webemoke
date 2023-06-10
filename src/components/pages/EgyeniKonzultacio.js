import React from "react";
import Egyeni from "../../image/egyeni_1.png";

export default function EgyeniKonzultacio() {
  return (
    
    <div>
      <div className='consultaion-container'>
        
          <div className='text-container'>
            <h1>Egyéni konzultációk várandósoknak, pároknak – online is!</h1>
            <p>A tapasztalataim azt mutatják, hogy az, hogy egy anyának milyen szülésélménye lesz, az jórészt attól is függ, hogy a szülése idejére letisztul-e benne az, hogy hogyan és kiknek a jelenlétében szeretné világra hozni a gyermekét. Ehhez azonban az kell, hogy ne maradjanak kimondatlan kérdései, aggodalmai.</p>
          </div>
        
        <img className="consultation-image" src={Egyeni} alt='' />
      </div>
      <h4>Amennyiben</h4>
      <div className="consultation-listbox">
        <div className="lista">
        <ul>
          <li>
            úgy érzed, hogy szükséged van egy olyan szülési tapasztalattal rendelkező képzett dúlára, aki meghallgatja a várandóssággal, szüléssel, gyermekneveléssel kapcsolatos kérdéseidet, érzéseidet, gondolataidat,
          </li>
          <li>
            ha szeretnéd megismerni a lehetőségeidet, és minden információt megkapni ahhoz, hogy felelősen dönthess majd arról, hogy hogyan, milyen körülmények között hozod világra a gyermekedet,
          </li>
          <li>
            ha szeretnéd, hogy a vajúdás és szülés óráiban melletted (és a párod mellett) legyen egy olyan kísérő, aki érzelmileg és fizikailag is támogat,
          </li>
          <li>
            ha kérdéseid vannak a gyermekneveléssel, a szülői szerepekkel vagy a szülővé válással kapcsolatosan,
          </li>
        </ul>
        </div>
          <p>örömmel segítek, akár online is, ha számodra úgy kedvezőbb.</p>
      </div>
      <div>
        <div>
          <p>A várandósság hónapjaiban a találkozóink alkalmával beszélgetünk a várandósság testi és lelki változásairól, a vajúdás és a szülés élettani és lélektani folyamatairól, a gyermekágyas időszakról, az újszülöttről és bármi másról, ami téged vagy a párodat foglalkoztat. Segítelek elképzeléseid megfogalmazásában, tájékoztatlak a szülésre való felkészülés lehetőségeiről és legjobb tudásom szerint igyekszem megválaszolni a benned felmerült kérdéseket.</p>
        </div>
        <div>
          <p>Emellett szempontokat adok ahhoz, hogy az orvosoddal vagy szülésznőddel történő egyeztetés után tisztán lásd, hogy abban az intézményben, ahol szülni fogsz, milyenek a szülés körülményei, milyen alternatíváid vannak, hogyan történik az újszülöttek ellátása, milyen elhelyezést biztosítanak a gyermekágyas osztályon, támogatják-e az anyatejes táplálást vagy azt, hogy a szülést követően együtt maradhassatok a babáddal. Általában azt tartom a legjobb megoldásnak, ha a várandósságod idején többször leülünk beszélgetni, de legalább egyszer találkozni szeretnék Veled és partnereddel vagy bármilyen más személlyel, aki jelen lesz a szülésnél (orvos, szülésznő, bába), még a vajúdás megindulása előtt, optimális esetben a 36. hét előtt.</p>
          <p>A találkozások gyakorisága és időtartama a Te igényeid szerint alakul, számomra az a fontos, hogy annyi időt tudjak biztosítani a számodra, amennyi szükségesnek érzel ahhoz, hogy mire elérkezik a szülésed ideje, ne maradjanak megválaszolatlan kérdéseid.</p>
        </div>
      </div>
      
    </div>
  ) 
}
