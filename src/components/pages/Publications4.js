import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic63 from "../../image/publications/public-63-hero-megint-a-csaszarosokrol.png";
import Pic64 from "../../image/publications/public-64-hero-a gatmetszesrol-es-a-bizalomrol.png";
import Pic65 from "../../image/publications/public-65-hero-a-dulasagrol.png";
import Pic66 from "../../image/publications/public-66-hero-a-kesoi-gyermekvallalasrol.png";
import Pic67 from "../../image/publications/public-67-hero-csak-csaszaros.png";
import Pic68 from "../../image/publications/public-68-hero-a szoptatasi-nehezsegekrol.png";
import Pic69 from "../../image/publications/public-69-hero-a-hosszu-es-nehez-szulesrol.png";
import Pic70 from "../../image/publications/public-70-hero-az-apas-szulesrol.png";
import Pic71 from "../../image/publications/public-71-hero-az-elalvasrol.png";
import Pic72 from "../../image/publications/public-72-hero-a-kisbabasirasrol.png";
import Pic73 from "../../image/publications/public-73-hero-a csaszarmetszesrol.png";



export default function Publications4() {
  const breakpoints = {
    default: 5,
    1500: 4,
    1150: 3,
    800: 2,
    550: 1
  }  
  return (
    <div className="blog">
        <div className="blog-title">Publikációim</div> 
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {<div className="picture-gal">
                <Link to="/megint-a-csaszarosokrol"><img src={Pic63}/></Link>
                <div className="blog-racs-content">
                <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.10.26.</i></p>
                 <Link to="/megint-a-csaszarosokrol"><h2 className="blog-racs-title">Megint a császárosokról</h2></Link>
                <p className="blog-racs-description">Kedves Emőke! Olvastam az anyuka cikkét, aki válaszolt a „Csak császáros” témára… Egy kicsit hozzáfűznék én is, ha lehet… 2005. október 4-re voltam kiírva szülni a kisfiammal. Természetes szülést terveztünk az orvosommal együtt, teljesen arra készültem lelkileg. Bennem fel sem merült az a lehetőség, hogy császármetszéssel is megszülethet a babám. Ám amikor október 6-án reggel […]</p>
            </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-gatmetszesrol-es-a-bizalomrol"><img src={Pic64}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.10.02.</i></p>
                     <Link to="/a-gatmetszesrol-es-a-bizalomrol"><h2 className="blog-racs-title">A gátmetszésről és a bizalomról</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Jelenleg a 3. babánkat várjuk, a 32. hétben járok. Az lenne a kérdésem, hogy ki az akin a gátmetszés múlik? Érdemes-e felkeresnem a kórház szülésznőjét ez ügyben, vagy hagyjam az orvosomra? Az előző két babát is ennél az orvosnál szültem. Nem sokat teketóriázott, szó nélkül vágott, majd felpattant mellém a szülőágyra és kinyomta […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-dulasagrol"><img src={Pic65}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.09.25.</i></p>
                     <Link to="/a-dulasagrol"><h2 className="blog-racs-title">A dúlaságról</h2></Link>
                    <p className="blog-racs-description">A gyermeket váró nők jelentős része már a várandósság korai vagy középső szakaszában kiválasztja azt a társat, akit szeretne a szüléséhez is maga mellé hívni. De az utóbbi időben az is többször előfordul, hogy olyanok kértek tőlem találkozási lehetőséget, akik még csak a fogantatásra készülnek. A dúla a várandós nővel, illetve a párjával a várandósság […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-kesoi-gyermekvallalasrol"><img src={Pic66}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.09.18.</i></p>
                     <Link to="/a-kesoi-gyermekvallalasrol"><h2 className="blog-racs-title">A késői gyerekvállalásról</h2></Link>
                    <p className="blog-racs-description">Ma már egyre több szülészeten megtalálható a nagyméretű, felfújható vajúdólabda. Van, ahol gyakran alkalmazzák és ajánlják is a kipróbálását a vajúdás alatt, de hallok olyan történeteket is az anyáktól, amikor kifejezetten kérniük kellett, vagy egyenesen lebeszélték őket a használatáról. Pedig a labda csökkenti a szülési fájdalmakat és segíti a vajúdási folyamatot. Három alapvető pozícióban lehet […]</p>
                </div>                
            </div>}

            {<div className="picture-gal">
                <Link to="/csak-csaszaros"><img src={Pic67}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.09.11.</i></p>
                     <Link to="/csak-csaszaros"><h2 className="blog-racs-title">Csak császáros…</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Nem biztos, hogy helyes, hogy rád „zúdítom” a véleményemet, de reménykedem, hogy levelem valami változásfélét elindít a császármetszés gondolatkörben. 2006 áprilisában, császármetszéssel született a kisfiam. Látod, nem azt írom, hogy világra jött, sem nem azt, hogy szültem… Tízórányi vajúdás után, a szívverés másodszori lelassulása után, hihetetlen gyorsan kapták ki belőlem a kicsi fiút. […]</p>
                </div>    
            </div>}

            {<div className="picture-gal">
                <Link to="/a-szoptatasi-nehezsegekrol"><img src={Pic68}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.08.20.</i></p>
                     <Link to="/a-szoptatasi-nehezsegekrol"><h2 className="blog-racs-title">A szoptatási nehézségekről</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Öthetes kisbabámmal minden rendben, szépen fejlődik (3300-zal született, jelenleg 4200 g), eszik rendesen, és a délelőttöt leszámítva pihen is szépen. Pár napja viszont egy érdekes jelenségre lettem figyelmes. Szopizás közben mintha valami nagyon nem tetszene neki. Néha fölsír, néha pedig nagyon idegesen rugdos, csapkod, karmolja a mellkasomat, a kis kezével ütlegel engem, meg […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-hosszu-es-nehez-szulesrol"><img src={Pic69}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.08.28.</i></p>
                     <Link to="/a-hosszu-es-nehez-szulesrol"><h2 className="blog-racs-title">A “hosszú és nehéz” szülésről</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! 27 éves vagyok, és első kisbabámat várom, a 33. hétben járok, kisfiam lesz… Párommal nagyon vártuk már ezt a babát, és szerencsésnek mondhatom magam, mert az egész várandósságom alatt elkerült mindenféle kellemetlenség, ami sokszor a terhesség velejárója. Minden eredményem tökéletes, életem legboldogabb hónapjait élem meg, és sosem gondoltam volna, hogy a babavárás ilyen […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/az-apas-szulesrol"><img src={Pic70}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.08.14.</i></p>
                     <Link to="/az-apas-szulesrol"><h2 className="blog-racs-title">Az apás szülésről</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Első babánkat várjuk a párommal együtt. A kérdésem az lenne, hogy a szülésnél hogy tud segíteni nekem a párom, ha benn lesz a szülőszobában. Ugyanis még gondolkozik rajta, hogy bejöjjön-e majd, de szerintem csak az a problémája, hogy nem tudja, mit fog ott csinálni, és nem akar felesleges emberként téblábolni az orvos és […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/az-elvalasrol"><img src={Pic71}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.08.07.</i></p>
                     <Link to="/az-elvalasrol"><h2 className="blog-racs-title">Az elalvásról</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Kislányom nemrégen töltötte be a 8. hónapját, 9100 g és 68 cm. A testi és szellemi fejlődésével semmi problémám, hiszen már 5,5 hónaposan felállt, ma pedig már a bútorok mellett szalad, és kézen fogva is szépen totyog, sokat mosolyog, kiegyensúlyozott baba, amíg el nem érkezik az esti lefekvés ideje. Soha nem aludta még […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-kisbabasirasrol"><img src={Pic72}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.07.24.</i></p>
                     <Link to="/a-kisbabasirasrol"><h2 className="blog-racs-title">A kisbabasírásról</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Én egy 3 hetes kisbaba anyukája vagyok. Szegeden szültem, nagyon meg voltam elégedve mindennel, bár így utólag azt hiszem, néhány problémánk forrását ott kellene keresni. Például hogy a pici babánk miért ordít minden fürdetésnél. Már az esti vetkőzéskor ordít és kapálódzik, mint aki tudja, mi következik. Illetve lehet, hogy tudja is. Elképzelhetőnek tartom, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-csaszarmetszesrol"><img src={Pic73}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.07.17.</i></p>
                     <Link to="/a-csaszarmetszesrol"><h2 className="blog-racs-title">A császármetszésről</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Kisfiam két és fél éve császármetszéssel született. Most újra babát szeretnénk, de nagyon vágyom a természetes szülés átélésére! Az orvosom azt mondta, nagyon valószínű, hogy a másik baba is császárral fog megszületni. Elhúzódó tágulási szak miatt kellett a műtét. Mégis, mikor megszületett, nagy ürességet és fájdalmat éreztem. Mikor a hasamra rakták, nem is […]</p>
                </div>
            </div>}
        </Masonry> 
        <div className="blog-step-button-box" >
                  <Link className="blog-step-button" to="/publications">1</Link>
                  <Link className="blog-step-button" to="/publications2">2</Link>
                  <Link className="blog-step-button" to="/publications3">3</Link>
                  <Link className="blog-step-button" to="/publications4">4</Link>
            </div>
    </div>
)
}
