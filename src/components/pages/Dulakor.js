import React, { useEffect }  from "react";

import { Link } from "react-router-dom";
import "../../CSS/dulacircle.css"
import DulaKorCircle from "../../image/dulakor_logo.jpg";

export default function Dulakor() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
  return (
    <div>
      <section className="bekesdulakor-other">

        <div className="bekesdulakor-other-container">
          <div className="bekesdulakor-other-head">
              <h1>Békés Dúlakör</h1>
              <h2>A Békés Dúlakör megalakulásának rövid története</h2>
          </div>
          <div className="bekesdulakor-other-column">
              <div className="bekesdulakor-other-img-container">
                  <center><img src={DulaKorCircle} alt=""/></center>
              </div>
              <div className="bekesdulakor-other-text">
                  <p>
                      Az elmúlt közel másfél évtizedben több száz nőt kísérhettem abban a folyamatban,
                      amely során közelebb kerülhettek a dúlai hivatáshoz és önmagukhoz.
                      
                  </p>
                      
                  <p>
                      A <a href="https://www.bekesemoke.hu/dulatrening/">dúlatréningek</a> célja eleinte főként a „szakmai” információk átadása volt. 
                      Emellett nagy hangsúlyt kaptak önismereti, motivációkat feltáró elemek is, 
                      mivel a csoportokkal végzett munkám illetve a hivatásom gyakorlása során 
                      összegyűlt tapasztalataim alapján egyre inkább azt éreztem, hogy a segítői 
                      foglalkozás nélkülözhetetlenné teszi a folyamatos önismereti munkát és a saját 
                      élményeink feldolgozását.
                  </p>

                  <p>
                      Nagy örömömre ezzel az érzéssel nem voltam egyedül. 2008-ban egyre többen 
                      kerestek meg azzal a kéréssel, hogy szeretnének még tanulni tőlem, velem. 
                      Úgy érezték, egy intenzív, de mégis rövidebb időtartamú alapképzés kevés ahhoz, 
                      hogy jó segítők legyenek, volt bennük igény a folyamatos fejlődésre és az eseteik megbeszélésére.
                  </p>
              </div>
          </div>
          <p>
              Így született meg a Békés Dúlaműhely, ahol 15 alkalommal, teljes napokat szánunk a dúlai hivatás során 
              felmerülő témáknak, kérdéseknek, valamint megbeszéltük, feldolgoztuk az aktuális eseteket. 
              Ezek a találkozók nagyon meghitt hangulatban teltek, hiszen minden alkalommal időt szenteltünk az egymásra való ráhangolódásnak, 
              és a közös tanulás során sok sajátélmény megosztására is sor került.
          </p>
          <p>
              Ez a továbbképzés írásbeli és szóbeli vizsgával zárult, de a csoport tagjai között olyan mély szakmai és emberi kötelék alakult ki, 
              amelyet szerettek volna életben tartani, valamint igényük volt a további szakmai tapasztalatcserékre is.
          </p>
          <p>
              Ők voltak azok, akik életre hívták a Békés Dúlakört (BDK), amely 2009 óta fogadja mindazokat a szülés körüli segítőket, 
              akik a dúla alaptréning után a műhelymunkát is elvégezve záróvizsgát tesznek, és ezáltal Békés szülésfelkészítő és szüléskísérő dúlává válnak. 
              A taggá válás feltétele e minősítés megszerzése mellett a BDK Etikai Kódexének és Működési Szabályzatának elfogadása is.
          </p>

          <h3>A Békés Dúlakör jelene</h3>

          <p>
              A Békés Dúlakörnek jelenleg 56 tagja van. (Az aktív tagok, jelenleg választható dúlák bemutatkozását és fényképét itt láthatod: <a href="http://www.bekesdulakor.hu">https://bekesdulakor.hu)</a>
          </p>

          <p>
              2016 májusa óta civil társulásként, szervezett keretek között működik. 2016-os közgyűlésén a tagok megfogalmazták a közös céljaikat, értékeiket és kompetenciáikat.
          </p>

          <h4>Küldetésünk</h4>

          <p>
              Mi, a Békés Dúlakör tagjaiként, tudásunk legjavát adva, elhivatottan, és szakmailag felkészülten kísérjük a hozzánk forduló leendő szülőket, hogy megtalálhassák saját útjukat a gyermekvállalás idején.
          </p>
          <p>
              Célunk, hogy hozzásegítsük őket lehetőségeik megismeréséhez, így teljes körű információ birtokában felismerjék saját igényeiket, melyek megvalósítását a szakmai segítőkkel egyeztetve, közösen készítjük elő.
          </p>
          <p>
              Küldetésünknek tekintjük, hogy önbizalmukat és hitüket erősítsük abban, hogy érezzék valódi erejüket. Akár már a fogantatás előttől, a szülésfelkészítésen és szüléskísérésen át a gyermekágyas időszakon túl is számíthatnak értő figyelmünkre, valamint lelki és fizikai támogatásunkra.
          </p>

          <div className="bekesdulakor-otherBx-resp">

          <h4>Értékeink</h4>
                  <ul className="bekesdulakor-other-list">
                      <li className="bekesdulakor-has-before">képzettség</li>
                      <li className="bekesdulakor-has-before">közösség</li>
                      <li className="bekesdulakor-has-before">szervezettség</li>
                      <li className="bekesdulakor-has-before">aktivitás</li>
                      <li className="bekesdulakor-has-before">sokszínűség</li>
                      <li className="bekesdulakor-has-before">egységes értékrenden alapuló szemlélet</li>
                      <li className="bekesdulakor-has-before">nyitott, rugalmas hozzáállás</li>
                      <li className="bekesdulakor-has-before">szeretet</li>
                  </ul>

          </div>

          <div className="bekesdulakor-other-details">
              <div className="bekesdulakor-otherBx">
                  <h4>Értékeink</h4>
                  <ul className="bekesdulakor-other-list">
                      <li className="bekesdulakor-has-before">képzettség</li>
                      <li className="bekesdulakor-has-before">közösség</li>
                      <li className="bekesdulakor-has-before">szervezettség</li>
                      <li className="bekesdulakor-has-before">aktivitás</li>
                      <li className="bekesdulakor-has-before">sokszínűség</li>
                      <li className="bekesdulakor-has-before">egységes értékrenden alapuló szemlélet</li>
                      <li className="bekesdulakor-has-before">nyitott, rugalmas hozzáállás</li>
                      <li className="bekesdulakor-has-before">szeretet</li>
                  </ul>
              </div>
          

              <div className="bekesdulakor-other-face">
                  <h4>Képzettségünk</h4>
                  <p>Komplex szemléletű képzettségünk és naprakész tudásunk lehetőséget biztosít személyre szabott lelki, fizikai és informatív támogatásra, melyek kiegészítik és tiszteletben tartják az egészségügyi személyzet munkáját.
                  <br/>Ismerjük:
                  </p>
                  <ul className="bekesdulakor-other-list">
                      <li className="bekesdulakor-has-before"> a várandósság, a vajúdás és szülés, valamint a gyermekágyas időszak testi és lelki változásait,</li>
                      <li className="bekesdulakor-has-before"> az élettani szülés fizikai és lelki folyamatait,</li>
                      <li className="bekesdulakor-has-before">a korszerű szoptatási irányelveket,</li>
                      <li className="bekesdulakor-has-before">a nem gyógyszeres fájdalomcsillapítás eszköztárát,</li>
                      <li className="bekesdulakor-has-before">a különböző vajúdástámogatási módszereket (pl. masszázstechnikák, vajúdási pozíciók ajánlása, aromaterápia)</li>
                      <li className="bekesdulakor-has-before">és azokat a szuggesztív kommunikációs technikákat, amelyek a szülés folyamatát támogatják.</li>
                      
                  </ul>
              </div>
          </div>

          <h4>Közösség és szakmaiság</h4>

          <p>Nagy öröm számomra, hogy a csoport szakmai vezetőjeként tagja lehetek egy kölcsönös tiszteleten, szereteten, elfogadáson alapuló élő közösségnek, akiktől nagyon sokat kapok, és akiknek én is adhatok.</p>

          <p>A szakmai találkozóinkon túl hagyománnyá vált a minden nyáron megrendezésre kerülő dúlatáborunk, és a decemberi adventi találkozónk. A dúlakör tagjai között kialakult kapcsolatok ereje pedig már többször bizonyította, hogy a mindennapi életben is számíthatunk egymás segítségére.</p>

          <p>Az emberi oldal mellett nagyon fontosnak tartom a szakmaiságunkról szóló visszajelzéseket is, amelyek arról üzennek, hogy kezd érzékelhetőbbé válni a szülészeteken dolgozók számára, hogy a Békés dúla milyen attitűddel, milyen alapelvek mentén kíséri a vajúdó nőt és párját. Ennek a minőségnek a megtapasztalása pedig azt eredményezi, hogy a Békés Dúlakör tagjaival egyre több orvos és szülésznő dolgozik szívesen, felismerve, hogy ez az együttműködés megfelelő, őszinte és nyílt kommunikáció mellett és a kompetenciahatárok tiszteletben tartásával számukra is segítséget jelent.</p>

          <p>Ennek a pozitív hozzáállásnak és nyitottságnak köszönhetjük azt a számtalan tapasztalatot és tanulási lehetőséget biztosító programot is, melyre 2014-ben a kistarcsai Flór Ferenc Kórház Szülészeti Osztályának vezetője hívta meg a Békés Dúlakör tagjait. E program keretein belül önkéntes munkában, több héten át, éjjel-nappal segíthettünk az ott szülő édesanyákat és párjaikat.</p>

          <p><i>A Békés Dúlakör az alábbi kórházak szülészeti osztályaival kötött írásos, együttműködési megállapodást:</i></p>

          <p><b>Szent István Kórház
            <br/>Róbert Károly Magánkórház</b>
          </p>
          <p>Mélyen hiszek abban, hogy a szülés körüli segítők közötti harmónia elengedhetetlen feltétele annak, hogy a szülő nő biztonságban, őt minden szempontból támogató környezetben, nyugodt körülmények között hozhassa világra a gyermekét.</p>

          <h4>A Békés Dúlakör elérhetőségei:</h4>

          <div className="bekesdulakor-elerheto">
              <a href="https://bekesdulakor.hu" className="bekesdulakor-oldal">www.bekesdulakor.hu</a>
              <p>Facebook: Békés Dúlakör<br/>e-mail:</p>
              <a href="mailto:gyermekaldas@bekesemoke.hu" className="bekesdulakor-oldal">gyermekaldas@bekesemoke.hu</a>
              <br/>
              <a href="mailto:elnokseg@bekesdulakor.hu" className="bekesdulakor-oldal">elnokseg@bekesdulakor.hu</a>
              <br/>
              <a href="mailto:titkarsag@bekesdulakor.hu" className="bekesdulakor-oldal">titkarsag@bekesdulakor.hu</a>
              <p>telefon: +36 70 948-5481</p>

            </div>

            <div className="doula-trening-faq">
                <Link to="/dula-kor-galeria" className="doula-trening-btn">Pillants bele a Békés Dúlakör világába!</Link>
            </div>



          
      </div>
  

</section>
    </div>
  )
}

