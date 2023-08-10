import React, { useEffect }  from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic41 from "../../image/publications/public-41-hero-ina-may-gaskin.png";
import Pic42 from "../../image/publications/public-42-hero-csaszarmetszes-utan-ujra-szulni.png";
import Pic43 from "../../image/publications/public-43-hero-kiseroim.jpg";
import Pic44 from "../../image/publications/public-44-hero-a-vajudolabda.png";
import Pic45 from "../../image/publications/public-45-hero-az-egyes-vajudasi-poziciok-elonyei.png";
import Pic46 from "../../image/publications/public-46-hero-tengerviz-szulofold.png";
import Pic47 from "../../image/publications/public-47-hero-miert-sir-a-baba.png";
import Pic48 from "../../image/publications/public-48-hero-felelm-a-szulestol.png";
import Pic49 from "../../image/publications/public-49-hero-a-valasztas-szabadsaga.png";
import Pic50 from "../../image/publications/public-50-hero-a-kapcsolat-alapja.png";
import Pic51 from "../../image/publications/public-51-hero-egy-kep-es-ami-mogotte-van.png";
import Pic52 from "../../image/publications/public-52-hero-egy-kep-amely-megallasra-kesztet.png";
import Pic53 from "../../image/publications/public-53-hero-egykisfiu-erkezesere-varva.png";
import Pic54 from "../../image/publications/public-54-hero-szeretnek-szepen-szulni.png";
import Pic55 from "../../image/publications/public-55-hero-gyogyito-szules.png";
import Pic56 from "../../image/publications/public-56-hero-a-termeszetessegrol.png";
import Pic57 from "../../image/publications/public-57-hero-unnep.png";
import Pic58 from "../../image/publications/public-58-hero-meg-egyszer-a-csaszarosokrol.png";
import Pic59 from "../../image/publications/public-59-hero-gatmetszes-vagy-csaszarmetszes.png";
import Pic60 from "../../image/publications/public-60-hero-a-dula-es-az-apa.png";

export default function Publications3() {
  const breakpoints = {
    default: 5,
    1500: 4,
    1150: 3,
    800: 2,
    690: 1
}

useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
return (
    <div className="blog">
        <div className="blog-title">Publikációim</div> 
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {<div className="picture-gal">
                <Link to="/a-vilag-legismertebb-babaja-ina-may-gaskin"><img src={Pic41}/></Link>
                <div className="blog-racs-content">
                <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.07.22.</i></p>
                 <Link to="/a-vilag-legismertebb-babaja-ina-may-gaskin"><h2 className="blog-racs-title">A világ legismertebb bábája: Ina May Gaskin</h2></Link>
                <p className="blog-racs-description">A várandóssággal, szüléssel kapcsolatos írásaimban többször hivatkoztam már Ina May Gaskin tapasztalataira, illetve ajánlottam az Útmutató szüléshez című, Magyarországon is megjelent könyvét. De ki is ő valójában? Hogyan vált a világ legismertebb bábájává, és mivel érdemelte ki, hogy egy szülészeti komplikáció megoldására alkalmazott eljárás is a nevéhez fűződik? Ina May Gaskin a 60-as évek végén, […]</p>
            </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/csaszarmetszes-utan-ujra-szulni"><img src={Pic42}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.07.15.</i></p>
                     <Link to="/csaszarmetszes-utan-ujra-szulni"><h2 className="blog-racs-title">Császármetszés után újra szülni</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Két kislányt szültem császármetszéssel. Az elsőt 2000-ben, 12 órás vajúdás után. Indított szülés volt, és bár mindent megpróbált az orvosom, nem tágultam egy icike-picikét sem. Már nehezen bírtam a kétperces fájásokat, és a doktor szerint, ha ki is tágultam volna még egy nap alatt, nem lett volna erőm. Nem tudom. Nagyon bánom. Nem […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/kiseroim"><img src={Pic43}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.07.08.</i></p>
                     <Link to="/kiseroim"><h2 className="blog-racs-title">Kísérőim</h2></Link>
                    <p className="blog-racs-description">Alkonyat. A legjobb futóidő. Még süt a nap, de már a horizont közelében jár. Indulok. Két éve rendszeresen, legalább hetente háromszor nekivágok, hogy a testem edzésén kívül lelkileg is megtisztuljak, felfrissüljek. Az első kilométer ritkán esik igazán jól. Még nagyon a földön vagyok. Nézelődöm, megfigyelem a terepet. Ez az első körben már csak azért sem […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-vajudolabda"><img src={Pic44}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.01.05.</i></p>
                     <Link to="/a-vajudolabda"><h2 className="blog-racs-title">A vajúdólabda</h2></Link>
                    <p className="blog-racs-description">Ma már egyre több szülészeten megtalálható a nagyméretű, felfújható vajúdólabda. Van, ahol gyakran alkalmazzák és ajánlják is a kipróbálását a vajúdás alatt, de hallok olyan történeteket is az anyáktól, amikor kifejezetten kérniük kellett, vagy egyenesen lebeszélték őket a használatáról. Pedig a labda csökkenti a szülési fájdalmakat és segíti a vajúdási folyamatot. Három alapvető pozícióban lehet […]</p>
                </div>                
            </div>}

            {<div className="picture-gal">
                <Link to="/az-egyes-vajudasi-poziciok-elonyei"><img src={Pic45}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.06.17.</i></p>
                     <Link to="/az-egyes-vajudasi-poziciok-elonyei"><h2 className="blog-racs-title">Az egyes vajúdási pozíciók előnyei</h2></Link>
                    <p className="blog-racs-description">Ha vajúdáskor szabadon megválaszthatod azt a pozíciót, amelyik a legmegfelelőbb számodra, akkor valószínűleg ösztönösen megtalálod azt a testhelyzetet, amelyik a legkényelmesebb és a baba előrehaladásához is a legoptimálisabb. A vajúdás hosszú óráiban, amikor a fáradtság, esetleg a feladás jelei mutatkoznak rajtad, segít, ha változtatsz a pozíciódon, és egy újabb testhelyzetet, mozgást is kipróbálsz, ez átlendíthet […]</p>
                </div>    
            </div>}

            {<div className="picture-gal">
                <Link to="/tengerviz-szulofold"><img src={Pic46}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.06.06.</i></p>
                     <Link to="/tengerviz-szulofold"><h2 className="blog-racs-title">Tengervíz, szülőföld</h2></Link>
                    <p className="blog-racs-description">Többen kérdezik tőlem, hogy lehet-e, érdemes-e messzire, más országba utazni, nyaralni várandósan. Arról már írtam korábban, hogy mire érdemes ügyelni, miket kell indulás előtt végiggondolni. Most egy személyes élményemet szeretném megosztani az olvasóimmal. Hat évvel ezelőtt történt. Nyár volt, július. A lányaim élvezték az iskolaszünetet és izgatottan várták a nyaralást. Olaszországba készültünk, a tengerpartra, oda, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/miert-sir-a-baba"><img src={Pic47}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.06.03.</i></p>
                     <Link to="/miert-sir-a-baba"><h2 className="blog-racs-title">Miért sír a baba?</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Tanácsot szeretnék Öntől kérni, ugyanis a bátyámék kislánya (Petra) délután 4 órától kb. este fél 7-ig folyamatosan sír, akkor is azért hagyja abba, mert kifárad. Ez sajnos már egy hete tart. Petra most 7 hetes és hasfájós. De ebben az időszakban nem tapasztalnak nála hasfájásra utaló panaszt (például nem húzza össze magát stb.). […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/felelem-a-szulestol"><img src={Pic48}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.05.27.</i></p>
                     <Link to="/felelem-a-szulestol"><h2 className="blog-racs-title">Félelem a szüléstől</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! 22 éves és 22 hetes kismama vagyok. 🙂 A terhességem teljes mértékben problémamentes, csupán néhány természetes, vele járó kellemetlenség fordul néha elő. Nagyon várjuk már a picit, és kezdettől fogva tudatosan készülök az érkezésére. Igyekszem megfelelően táplálkozni, mozogni és pihenni is, amennyit csak lehet. Mint minden kismama, bevallom, egy kicsit félek a szüléstől, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-valasztas-szabadsaga"><img src={Pic49}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.05.20.</i></p>
                     <Link to="/a-valasztas-szabadsaga"><h2 className="blog-racs-title">A választás szabadsága</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! A Nők Lapja Cafe oldalán találtam meg a címed és a cikkeidet, és utolsó szalmaszálként kapaszkodnék beléd. Ez most valószínűleg elég tragikusan hangzik, de azért rettentően kíváncsi lennék a te véleményedre is. Egy vidéki városban élek. Tizennégy hetes terhes vagyok, a legnagyobb boldogságunkra. Eddig minden tökéletesen alakult, és remélem, ezután sem lesz másként. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-kapcsolat-alapja"><img src={Pic50}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.04.15.</i></p>
                     <Link to="/a-kapcsolat-alapja"><h2 className="blog-racs-title">A kapcsolat alapja</h2></Link>
                    <p className="blog-racs-description">Őszinte érdeklődéssel olvastam az idei Születés Hete-kép kapcsán az NLC-n indított fórumot. Nagyon tanulságosnak éreztem a hozzászólásokat, mert segítségemre vannak abban, hogy pontosítsam a dúlai hivatással kapcsolatos információkat azok számára is, akik eddig még nem – vagy nem dúlától – hallottak erről. Az egyik gyakran hozzám intézett kérdés az, hogy hogyan is tudna segíteni a […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/egy-kep-es-ami-mogotte-van-2"><img src={Pic51}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.04.08.</i></p>
                     <Link to="/egy-kep-es-ami-mogotte-van-2"><h2 className="blog-racs-title">Egy kép és ami mögötte van… </h2></Link>
                    <p className="blog-racs-description">2007 októbere volt. Épp egy háromnapos dúlatréninget tartottam, amelynek utolsó órájában érkezett az SMS, elindult Judit szülése. Azonnal ott voltam gondolatban mellettük. A képzésen már megszületett a csoport, meghitten búcsúztam a tizenegy nőtől. Dúlák lesznek ők is, izgatott csillogással a szemükben néztek utánam, hisz oda mentem, ahová ők is vágynak. A csoda közelébe. Akkor már […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/egy-kep-amely-megallasra-kesztet"><img src={Pic52}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.04.01.</i></p>
                     <Link to="/egy-kep-amely-megallasra-kesztet"><h2 className="blog-racs-title">Egy kép, amely megállásra késztet</h2></Link>
                    <p className="blog-racs-description">Családdá születünk – hangzik a Születés Hete 2008 jelmondata. A mondatot kísérő képen az idei hét üzenetét hordozó arcokat látjuk, az MTV1 híradójából ismert Nagy Juditot és családját. A családját? De hogyan? Miért így? És a feliratok… Miért így? Hogy kerül oda egy nem családtag? Miért van olyan közel? Vagy messze? Vagy fordítva? Vagy… Mit […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/egy-kisfiu-erkezesere-varva"><img src={Pic53}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.03.11.</i></p>
                     <Link to="/egy-kisfiu-erkezesere-varva"><h2 className="blog-racs-title">Egy kisfiú érkezésére várva</h2></Link>
                    <p className="blog-racs-description">Itt ülök a számítógépemnél. Most nem levélre válaszolok, az élet írja a következő cikket. Még nem tudom, milyen hosszú lesz, ha holnap szüléshez megyek, a leadásig már nem is tudom befejezni. Akkor majd a jövő héten mesélem tovább Nóri történetét. Szombat este van. Az anya kedden töltötte be várandósságának 40. hetét, és már nagyon szeretné […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/szeretnek-szepen-szulni"><img src={Pic54}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.03.04.</i></p>
                     <Link to="/szeretnek-szepen-szulni"><h2 className="blog-racs-title">Szeretnék szépen szülni</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! A napokban derült ki, hogy babát várok. Nagyon izgulok, örülök, ugyanakkor kicsit meg is szeppentem. Ez lesz az első babánk. Nemrég olvastam a Gyógyító szülés című cikkedet. Én is szeretnék meghitten szülni. Az a kép él bennem, hogy a szülés csodás dolog és fantasztikus élmény. Szeretnék a saját tempómban úgy vajúdni, ahogy kényelmes. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/gyogyito-szules"><img src={Pic55}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.01.22.</i></p>
                     <Link to="/gyogyito-szules"><h2 className="blog-racs-title">Gyógyitó szülés</h2></Link>
                    <p className="blog-racs-description">A hét eleje óta várok egy kisfiú születésére. Komótosan készülõdik. Néhány napja már a méhösszehúzódások jelzik, hogy közeledik az idõ. Édesanyja rendszeresen beszámol telefonon arról, hogy mit érez. Szerda éjjel SMS-eket váltunk. Talán ez már az. Reggel megbeszéljük, hogy a kórházban találkozunk. Indulok. Útközben végig arra gondolok, hogy a mai egy szép nap lesz. Az […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-termeszetessegtol"><img src={Pic56}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2008.01.16.</i></p>
                     <Link to="/a-termeszetessegtol"><h2 className="blog-racs-title">A természetességről</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Azért írok, mert történt valami, ami gyökeresen megváltoztatta a felfogásomat. A terhességem alatt folyamatosan olvastam a modern elméleteket, lehetőségeket a szüléssel kapcsolatban, rendszeresen látogattam a Nők Lapja oldalait is, és megdöbbentő felfedezést tettem: még ebben a különleges helyzetben, a várandósság ideje alatt is tervezünk, irányítunk, menedzserkedünk. Mindezt beöltöztetjük a „vissza a természethez” köntösébe, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/unnep"><img src={Pic57}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.12.20.</i></p>
                     <Link to="/unnep"><h2 className="blog-racs-title">Ünnep</h2></Link>
                    <p className="blog-racs-description">Lassan véget ér ez az esztendő is. Lelassulnak a mindennapjaim, elcsendesedőben vagyok. Miközben ünneplőbe öltöztetem a házat és begyúrom a mézeskalács tésztáját, felidéződnek az emlékeim. A kisbabák születésére gondolok, azokéra, akiknek jelen lehettem az érkezésüknél. Kislányok, kisfiúk. Érdekes, ritkán indulnak nappal. Általában megvárják, amíg lepihen a mamájuk, és leszáll a puha sötét. Valahogy én is […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/meg-egyszer-a-csaszarosokrol"><img src={Pic58}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.12.13.</i></p>
                     <Link to="/meg-egyszer-a-csaszarosokrol"><h2 className="blog-racs-title">Még egyszer a császárosokról</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! A kérdéseim a császármetszéssel kapcsolatosak. Van egy 16 hónapos kisfiam, terhességi HELLP-szindróma miatt (a toxémia „durvább” változata) császármetszéssel született a 39. héten. Nem úgy indult, hogy császár lesz, de mivel a tágulásom lassan haladt, a babám pedig nem volt jó kondiban (a betegségem miatt már visszafogyott egy kicsit odabent), az orvosom a császár […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-gatmetszesrol-es-a-bizalomrol"><img src={Pic59}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.12.05.</i></p>
                     <Link to="/a-gatmetszesrol-es-a-bizalomrol"><h2 className="blog-racs-title">Gátmetszés vagy császármetszés?</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Kérdésem lenne hozzád, de először is a gondolataimat szeretném leírni. Két hónapja szültem természetes szüléssel, kórházban. Négy óra alatt meglett a kisfiam, de ebből egy órát toltam, a fejét már lehetett látni, de nem jött. Nagyon jó érzés volt utána, igazából a szüléssel nem is volt problémám. Inkább azzal, hogy sajnos muszáj volt […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-dula-es-az-apa"><img src={Pic60}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2007.11.27.</i></p>
                     <Link to="/a-dula-es-az-apa"><h2 className="blog-racs-title">A dúla és az apa</h2></Link>
                    <p className="blog-racs-description">Amikor egy pár felkeres azzal, hogy szeretnék, ha ott lennék a babájuk születésénél, nagy hangsúlyt fektetek arra, hogy megtudjam, melyikükben vetõdött fel ez a gondolat, és hogy egyetértenek-e ebben. A tapasztalataim szerint az igény legtöbbször a várandós nőben merül fel, és gyakran az apák ezzel az ötlettel szemben ambivalens érzéseket táplálnak. Úgy érzik, hogy meg […]</p>
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
