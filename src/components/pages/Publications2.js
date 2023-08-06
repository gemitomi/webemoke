import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic21 from "../../image/publications/public-21-hero-segitok-az-elet-kapujanal.png";
import Pic22 from "../../image/publications/public-22-hero-kistestver-szuletik.png";
import Pic23 from "../../image/publications/public-23-hero-varazsszerek-nelkul.png";
import Pic24 from "../../image/publications/public-24-hero-mivel-jar-az-anyasag.png";
import Pic25 from "../../image/publications/public-25-hero-abris-szuletesnapjan.png";
import Pic26 from "../../image/publications/public-26-hero-dula-vagy-fogadott-szuleszno.png";
import Pic27 from "../../image/publications/public-27-hero-vajudas-es-szuletes.png";
import Pic28 from "../../image/publications/public-28-hero-a szulesen-innen-es-tul.png";
import Pic29 from "../../image/publications/public-29-hero-a-kincseimet-nem-lehet-ellopni.png";
import Pic30 from "../../image/publications/public-30-hero-felelem-a-szuloszoban.png";
import Pic31 from "../../image/publications/public-31-hero-kell-e-lehet-e-tervezni-a-szulest.png";
import Pic32 from "../../image/publications/public-32-hero-dula-lennek.png";
import Pic33 from "../../image/publications/public-33-hero-mikor vallaljunk-gyereket.png";
import Pic34 from "../../image/publications/public-34-hero-barnabas.png";
import Pic35 from "../../image/publications/public-35-hero-terhes-vagyok-hogyan-tovabb.png";
import Pic36 from "../../image/publications/public-36-hero-nem-tehetek-semmit.png";
import Pic37 from "../../image/publications/public-37-hero-egyutt-szules.png";
import Pic38 from "../../image/publications/public-38-hero-ovodai-beszoktatas.png";
import Pic39 from "../../image/publications/public-39-hero-ujra-lesz-dulatrening.png";
import Pic40 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";

export default function Publications2() {
  
    const breakpoints = {
        default: 5,
        1500: 4,
        1150: 3,
        800: 2,
        690: 1
    }

    return (
        <div className="blog">
            <div className="blog-title">Publikációim</div> 
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {<div className="picture-gal">
                    <Link to="/segitok-az-elet-kapujanal"><img src={Pic21}/></Link>
                    <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.05.26.</i></p>
                     <Link to="/segitok-az-elet-kapujanal"><h2 className="blog-racs-title">Segítők az élet kapujánál</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Rendszeresen olvasom a cikkeidet, bár már túl vagyok a gyermekvárás időszakán. Mindkét fiam iskolás, de a várandóssággal, szüléssel, születéssel kapcsolatos írások, műsorok a mai napig nagyon érdekelnek. Varrónőként itthon dolgozom, s bár szeretem a szakmámat, egyre inkább úgy érzem, hogy jó lenne valami segítő foglalkozást is gyakorolni e mellett. Szeretnék többet emberek között […]</p>
                </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/kistestver-szuletik"><img src={Pic22}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.05.12.</i></p>
                         <Link to="/kistestver-szuletik"><h2 className="blog-racs-title">Kistestvér születik</h2></Link>
                        <p className="blog-racs-description">Kedves Emőke! Kislányunk nemrégiben töltötte be a második életévét és hamarosan, egy hónap múlva megszületik a kishúga is. Réka nagyon aranyos, ragaszkodó kislány. Eddig minden figyelmünk feléje fordult, én is, a férjem is rengeteget foglalkozunk vele. Most, hogy közeledik a szülés időpontja, felmerült bennünk néhány kérdés ezzel kapcsolatosan. A férjem most is velem lesz a […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/varazsszerek-nelkul"><img src={Pic23}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.04.28.</i></p>
                         <Link to="/varazsszerek-nelkul"><h2 className="blog-racs-title">Varázsszerek nélkül</h2></Link>
                        <p className="blog-racs-description">Egy szép, nyugodt születés, szülés története, ahogy a dúla megélte, a szülőkkel együtt. Az idei év első napsütéses, igazán enyhe napjainak egyike van. Jókedvűen igyekszem a kórház felé. Már az utcán összetalálkozom Anikóval, a szülésznővel. Az épület előtti parkolóban megállunk, és várjuk Gyöngyit és Andrást, akik szintén már úton vannak. Beszélgetünk. „Úgy érzem gyors, könnyű […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/mivel-jar-az-anyasag"><img src={Pic24}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.04.16.</i></p>
                         <Link to="/mivel-jar-az-anyasag"><h2 className="blog-racs-title">Mivel jár az anyaság?</h2></Link>
                        <p className="blog-racs-description">Kedves Emőke! Néhány hónapja született meg első gyermekem, egy csodálatos kislányt, akit nagyon vártunk és szeretünk mindketten a párommal. Születésével egy új életszakaszba léptem, és az anyaság, mely kimondhatatlanul sok örömet ad, új gondolatokat, kérdéseket is ébresztett bennem. Azon gondolkodtam, hogy a szülővé válás -mint folyamat- hoz egy fajta módosult tudatállapot változást. Ahogy körbenézek, szinte […]</p>
                    </div>                
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/abris-szuletesnapjan"><img src={Pic25}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.03.31.</i></p>
                         <Link to="/abris-szuletesnapjan"><h2 className="blog-racs-title">Ábris születésnapján</h2></Link>
                        <p className="blog-racs-description">Egy távoli városkában él egy kisfiú, Ábris. Anyukájával akkor ismerkedtem meg, amikor őt várta, és bár a szülésig nem találkoztunk túl gyakran, nagyon hamar közel kerültünk egymáshoz. Amikor a párjával időnként felutaztak a fővárosba, sokat beszélgettünk az előző szüléseinek történetéről, az eddigi életútjáról, az érzéseiről és az élet számos más kérdéséről is, amelyekről – mint […]</p>
                    </div>    
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/dula-vagy-fogadott-szuleszno"><img src={Pic26}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.03.17.</i></p>
                         <Link to="/dula-vagy-fogadott-szuleszno"><h2 className="blog-racs-title">Dúla vagy fogadott szülésznő?</h2></Link>
                        <p className="blog-racs-description">Kedves Emőke! 2009. júliusára várjuk első gyermekünk megszületését. Szeretném, ha ez a nagy esemény biztonságos, szeretetteljes légkörben történne. Gyakran olvasom az írásaidat, így egyre tisztábban látom, hogy mit jelenthet egy vajúdó nőnek a dúla támogatása. Amikor azonban megemlítettem az orvosomnak, hogy szeretnék magammal dúlát is vinni a szülésemhez, le akart beszélni erről. Azt mondja, hogy […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/vajudas-es-szuletes"><img src={Pic27}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.03.03.</i></p>
                         <Link to="/vajudas-es-szuletes"><h2 className="blog-racs-title">Vajúdás és születés</h2></Link>
                        <p className="blog-racs-description">A héten egy kislány érkezésénél lehettem jelen. Amikor kibújt, anyukája a vajúdás mélységeiből visszatérve hitetlenkedve kérdezte tőlem: „Ő az én gyermekem? Tényleg?” Majd gyengéden a karjaiba vette, hátradőlt az ágyon, és a babát a mellkasára fektette. A kislány eleinte még sírt egy kicsit, de hamarosan elcsendesedett és csak nézte, nézte az anyukáját, aki számára még […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/a-szulesen-innen-es-tul"><img src={Pic28}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.02.17.</i></p>
                         <Link to="/a-szulesen-innen-es-tul"><h2 className="blog-racs-title">A szülésen innen és túl</h2></Link>
                        <p className="blog-racs-description">Amikor egy pár a gyermekük megfoganása után találkozni szeretne velem, elsősorban a várandóssággal és a szüléssel kapcsolatos kérdéseire keresi a választ. A beszélgetéseink jelentős részében ezért tehát erről az időszakról van szó, de a szülés közeledtével megpróbálom a figyelmüket egy kicsit a gyermekágyas hetek, hónapok történései felé is irányítani. Miért érzem ezt fontosnak? Az első […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/a-kincsemet-nem-lehet-ellopni"><img src={Pic29}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.02.03.</i></p>
                         <Link to="/a-kincsemet-nem-lehet-ellopni"><h2 className="blog-racs-title">A kincseimet nem lehet ellopni</h2></Link>
                        <p className="blog-racs-description">Dúlatréningre készülődtem. Összepakoltam azokat a szakkönyveket és egyéb dolgokat, amelyekről úgy éreztem, hogy szükségesek lehetnek a következő napok folyamán. A képzés trénereként igyekszem úgy felkészülni, hogy a rendelkezésre álló idő alatt minél több gondolatot át tudjak adni e hivatás szépségeiről. Arra gondoltam, hogy elviszem megmutatni a leendő dúláknak a kincseimet is. Olyan kincseket, amelyeknek mindazok […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/felelem-a-szuloszoban"><img src={Pic30}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.01.20.</i></p>
                         <Link to="/felelem-a-szuloszoban"><h2 className="blog-racs-title">Félelem a szülőszobán?</h2></Link>
                        <p className="blog-racs-description">Két héttel ezelőtti levelemet azzal a gondolattal fejeztem be, hogy mennyire megdöbbentett, amikor egy szülész aknamezőn járáshoz hasonlította a szülés folyamatát. A meglepődés mellett azonban azonnal érdekelni kezdett, hogy vajon mi lehet e különös kijelentés mögött. Amikor csak lehetőségem adódik, szeretek szülészorvosokkal beszélgetni, ugyanis fontosnak érzem, hogy ha nem is mindig értek egyet, de legalább […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/kell-e-lehet-e-tervezni-a-szulest"><img src={Pic31}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.01.06.</i></p>
                         <Link to="/kell-e-lehet-e-tervezni-a-szulest"><h2 className="blog-racs-title">Kell-e, lehet-e tervezni a szülést?</h2></Link>
                        <p className="blog-racs-description">Kedves Emőke! Első gyermekemmel vagyok várandós, május végén fogok szülni. Van választott orvosom, hozzá havonta járok a magánrendelésére. Nagyon kedves velem, de igazából azonkívül, hogy elvégzi a szokásos vizsgálatokat, másról nemigen esik szó köztünk. Igaz, amikor a múltkor nála jártam, megkérdeztem, hogyan lehet nála szülni, de nem kaptam pontos válaszokat. „Majd meglátjuk, akkor éppen hogyan […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/dula-lennek"><img src={Pic32}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.12.16.</i></p>
                         <Link to="/dula-lennek"><h2 className="blog-racs-title">Dúla lennék</h2></Link>
                        <p className="blog-racs-description">Kedves Emőke! Sokat olvastam már a dúlákról, és nagyon tetszik a tevékenységük. Magam is fontolgatom, hogy ha a kisebbik gyermekem is óvodás lesz, elvégzem a tréninget. Érdekel, hogy ezen a képzésen milyen ismereteket lehet elsajátítani, és hogy ez elég-e ahhoz, hogy dúla lehessek. A legjobban azonban jelenleg az foglalkoztat, hogy szükséges-e ehhez a hivatáshoz valami […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/mikor-vallaljunk-gyereket"><img src={Pic33}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.11.18.</i></p>
                         <Link to="/mikor-vallaljunk-gyereket"><h2 className="blog-racs-title">Mikor vállaljunk gyereket?</h2></Link>
                        <p className="blog-racs-description">Kedves Emőke! Egy nagy dilemmámmal fordulok hozzád. Huszonnégy éves vagyok, a második diplomámat jövő nyáron fogom megszerezni. Férjemmel nagyon szeretnénk egy kisbabát. Mihelyst felvetődik kettőnk közt ez a téma – ami elég gyakran történik meg –, nagyon elbizonytalanodom abban, hogy nem kellene-e még várni vele. Ő persze azt mondja, nem. Az eszem azt diktálja, hogy […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/barnabas"><img src={Pic34}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.10.23.</i></p>
                         <Link to="/barnabas"><h2 className="blog-racs-title">Barnabás</h2></Link>
                        <p className="blog-racs-description">Hajnali fél hatkor szólalt meg a telefonom. Ági hívott, hogy rendszeres összehúzódásai vannak, lassan elindulnak a kórházba. A dúlatréning harmadik napjának hajnala volt. Akkor már két napja laktam együtt a csoport tagjaival. Tizenegy nő osztotta meg ebben a körben egymással az érzéseit, élményeit, gondolatait a szüléssel, születéssel kapcsolatosan. A dúlák képzése számomra pontosan olyan, mintha […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/terhes-vagyok-hogyan-tovabb"><img src={Pic35}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.11.04.</i></p>
                         <Link to="/terhes-vagyok-hogyan-tovabb"><h2 className="blog-racs-title">Terhes vagyok, hogyan tovább?</h2></Link>
                        <p className="blog-racs-description">Kedves Emőke! A múlt héten bizonyosodott be, hogy kisbabát várok, mert a teszt pozitív lett! A várandósságom a számításom szerint a 6. hetében jár. Mivel az első babámat várom, örülnék, ha segítenél eligazodni abban, hogy a várandósságom alatt milyen vizsgálatokon kell majd megjelennem. Terhes vagyok, hogyan tovább? Válaszodat előre is köszönöm! Anita Kedves Anita! A […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/nem-tehetek-semmit"><img src={Pic36}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.10.08.</i></p>
                         <Link to="/nem-tehetek-semmit"><h2 className="blog-racs-title">Nem tehetek semmit?</h2></Link>
                        <p className="blog-racs-description">Kedves Emőke! A második gyermekemet várom. Sajnos nem hiszem, hogy Egerben fogadhatnék dúlát, vagy bármi más igényem lehetne azonkívül, hogy a férjem legyen velem. Első gyermekem születésénél sokat szenvedtem kitoláskor amiatt, hogy a hátamon kellett feküdnöm. (Nagyon fájt a keresztcsontom a várandósság alatt is, mintha néha „becsípődne” egy idegszál, és olyankor mozdulni sem tudtam.) Ezzel […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/egyutt-szules"><img src={Pic37}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.09.23.</i></p>
                         <Link to="/egyutt-szules"><h2 className="blog-racs-title">Együtt szülés</h2></Link>
                        <p className="blog-racs-description">Az utóbbi években dúlaként kizárólag olyan szülésekhez hívtak, ahol az apa is jelen volt a szülőszobában, de azt mégsem gondolom, hogy ennek az az oka, hogy divattá vált az apás szülés. A rovatban a múlt héten Nem akarok apás szülést! címmel jelent meg Vályi-Nagy Erika írása. A cikkben megszólaló Magdi és Csaba történetük tapasztalatait összegezve […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/ovodai-beszoktatas"><img src={Pic38}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.08.19.</i></p>
                         <Link to="/ovodai-beszoktatas"><h2 className="blog-racs-title">Óvodai beszoktatás</h2></Link>
                        <p className="blog-racs-description">Immár vége a nyárnak. Kezdődik az oviban is az új nevelési év. Bár Eszter lányom már a nagycsoportot kezdi, mostanában mégis egyre gyakrabban jutnak eszembe azok a szeptemberi napok, amikor a lányaimat először vittem az óvodába. Legyen szó első vagy többedik gyermekünkről, úgy gondolom, az óvodakezdés nemcsak a gyermek életének, hanem a miénknek is egy […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/ujra-lesz-dulatrening"><img src={Pic39}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.08.19.</i></p>
                         <Link to="/ujra-lesz-dulatrening"><h2 className="blog-racs-title">Újra lesz dúlatréning!</h2></Link>
                        <p className="blog-racs-description">Az elmúlt hetekben többen is érdeklődtetek arról, hogy mikor szervezek újra dúlatréninget. Gyakori kérdés az is, hogy mi a feltétele annak, hogy valaki dúlává váljon, és hogy kell-e bármilyen egészségügyi alapismeret a tréning elvégzéséhez. Én magam 2000-ben végeztem el az első Magyarországon meghirdetett dúlaképzőt, amelyet a Napvilág Születésház szervezett. Az azt követő időszakban több olyan […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/nyugalmas-szoptatas"><img src={Pic40}/></Link>
                     <div className="blog-racs-content">
                        <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.08.05.</i></p>
                         <Link to="/nyugalmas-szoptatas"><h2 className="blog-racs-title">Nyugalmas szoptatás</h2></Link>
                        <p className="blog-racs-description">Nemrégiben egy kétgyermekes anya fordult hozzám szoptatási tanácsért. Elmesélte, hogy a három hónapos kislánya nagyon nyugtalan, gyakran felsír evés közben, és időnként megfeszíti az egész testét. Egy-egy etetés alatt többször is elfordul a mellétől, majd rövid idő után újra szopni kezd. A beszélgetés során jó néhány kérdést körbejártunk, de ahogy a szoptatás körülményeiről érdeklődtem, egyre […]</p>
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
