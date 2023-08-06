import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/szuleselmenyfeldolg.css"
import SzulesExp from "../../image/szuleselmeny_apa.png";

export default function SzulesElmenyFeldolg() {
  return (
    
    <div>
      <section className="experience-consultation">
        <div className='experience-consultaion-container'>
          
          <div className='experience-text-container'>
            <h1>Szülésélmény feldolgozás – apáknak is</h1>
            <br/>
            <span>online is!</span>
            <hr/>
            <p>Egy nő életében kiemelkedő és meghatározó élmény, amikor a gyermekének életet ad. Hónapokon keresztül készül rá, mégis előfordul, hogy a vajúdás és a szülés pillanataiban valami elmarad, kimarad vagy nagyon másképp alakul. Mivel a szüléskor átélt pozitív és negatív élmények jelentősen befolyásolhatják a későbbi gyermekvállalási kedvet is, kiemelkedő fontosságúnak tartom ezen élmények feldolgozását.</p>
          </div>
          <div className="experience-consultation-image">
            <img  src={SzulesExp} alt='' />
          </div>
        </div>
      </section>
      <section className="experience-szulfel-container-bottom">
        <p>Ma a legtöbb esetben az apa is jelen van a szülésnél. Az, hogy ő hogyan éli meg gyermeke(i) világra jövetelének óráit, hogyan érzi magát, milyen hatások érik őt, legalább olyan fontos, mint az anya élményei. Mindkettőjüknek megvan tehát a saját története – s bár egyazon szülésre emlékeznek –  az élményük mégis más és más lehet.</p>
        <p>A férfiak élménye tapasztalataim szerint erősen befolyásolhatja a későbbi szüléseknél való jelenlétét, biztonságérzetét, és kihathat a párkapcsolat alakulására is. Éppen ezért – amennyiben szükséges – jó szívvel ajánlom az apáknak is a párjuk szülésénél átélt élményeik feldolgozását.</p>
      </section>
      <section className="experience-consultation1">
        <div className="experience-consultation-listbox">
          <div className="experience-consultation-h4">
            <h4>Miben tudlak támogatni?</h4>
          </div>
          <div className="experience-separator-box"><span className="experience-separator"></span></div>
          <div className="experience-lista">
          <ul>
            <li>
              Dúlaként ennek egyik módját, a segítő beszélgetést tudom nektek biztosítani. Ennek keretében lehetőséged van (neked és a párodnak is) arra, hogy időkorlát nélkül, az érzéseidnek és az élményeidnek szabad folyást engedve elmondd, ami Veled történt, és hogy a benned megfogalmazódott kérdésekre keressük meg a válaszokat. Ez nem csak abban segít, hogy megértsd, hogy mi miért történt Veled, hanem abban is, hogy egy későbbi szülésednél el tudd kerülni azt, amit nem szeretnél még egyszer átélni. Abban az esetben, ha úgy látom, hogy az élmény feldolgozásához ennél több segítségre van szükséged, általam is ismert és elismert szakembereket és terápiás lehetőségeket ajánlok.
            </li>
          </ul>
          </div>
            <p>Örömmel segítek, akár online is, ha számodra úgy kedvezőbb.</p>
        </div>
      </section>
      
      <section className="experience-consultation-citateBx">
        <p className="experience-consultation-citate-text">
          „Van egy erő, ami szüléskor eljön a nőkhöz. Nem kérik, egyszerűen csak elárasztja őket. Összegyűlik, mint a felhő a láthatáron, átsuhan az égen, és magával hoz egy gyermeket.
          <br/><br/>
          Ösztöneinktől és vágyainktól hajtva gyermeket nemzünk, akik testünk géniuszára hagyatkozva növekednek méhünkben. Ha a szülés során újra testünk géniuszához fordulunk, ha hívjuk és felhasználjuk erejét, azt tapasztaljuk, hogy a nők 85-90%-a mindenféle komplikáció és hajmeresztő bátorság nélkül világra tudja hozni gyermekét. Ha látjuk, hogy jól halad a szülés, hogy azok a vajúdók, akiknek szülését jól kísérik, jól élik meg a fájdalmat, és örülni tudnak a gyümölcsének, az jut eszünkbe, hogy az erő, ami a szülés közben árad szét a nőben, nem is olyan szeszélyes, mint amilyennek tűnik. Lehet kisiklatni, gyöngíteni, sőt meg is lehet bénítani, de ez legtöbbször a mi cselekedeteink következménye. Olyan ez, mint maguk a nők, akik hordozzák ezt az erőt, és csak akkor némulnak el, ha az nincs tiszteletben tartva.”
        
        <h6>Penny Armstrong, C. N. M., Sheryl Feldman – A születés művészete (Alternatal, 1995)</h6>

        </p>
      </section>
      <section className="experience-consultation4">
        <div className="experience-consultation-btn-h2"><h2>Neked is segíthetek?<br/><span>Szeretettel várom jelentkezésedet!</span></h2></div>
        <div className="experience-consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
      </section>
      
    </div>
    
  ) 
}

