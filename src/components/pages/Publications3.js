import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic41 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic42 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic43 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic44 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic45 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic46 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic47 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic48 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic49 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic50 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic51 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic52 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic53 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic54 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic55 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic56 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic57 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic58 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic59 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic60 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic61 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Pic62 from "../../image/publications/public-40-hero-nyugalmas-szoptatas.png";

export default function Publications3() {
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
                <Link to="/otthonszules-vagy-korhazi-szules"><img src={Pic41}/></Link>
                <div className="blog-racs-content">
                <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.05.05.</i></p>
                 <Link to="/otthonszules-vagy-korhazi-szules"><h2 className="blog-racs-title">Otthonszülés vagy kórházi szülés? </h2></Link>
                <p className="blog-racs-description">Az MTV 1 Nappali című műsorában egy, a szülésére velem készülő anya nyilatkozata hallható, majd a stúdióbeszélgetésben Dr. Bálint Sándor szülész-nőgyógyász beszél az otthonszülés szabályozásáról, valamint arról, hogy a dúlai szemléletnek be kellene kerülnie az egyetemi oktatásba.</p>
            </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/indulas-erkezes"><img src={Pic42}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.02.02.</i></p>
                     <Link to="/indulas-erkezes"><h2 className="blog-racs-title">Indulás, érkezés</h2></Link>
                    <p className="blog-racs-description">Megcsördül a telefonom. Mire az ágyból érte nyúlok, már teljesen éber vagyok, és tudom, hogy mennem kell. Az ébresztőórára pillantok: éjjel fél kettő. Olga hív. Vajúdik. Elmeséli, hogy mit érez, én pedig finoman kérdezgetem erről-arról. Hallgatom és figyelek. Két kontrakció érkezik a beszélgetésünk alatt. Olga hangjai segítenek abban, hogy ráérezzek, hol tarthat a vajúdás folyamatában. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/csaszarmetszes-utan"><img src={Pic43}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.01.19.</i></p>
                     <Link to="/csaszarmetszes-utan"><h2 className="blog-racs-title">Császármetszés után</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Három évvel ezelőtt született meg az első gyermekem, sajnos császármetszéssel. Az orvosom a kiírt időpont után két nappal úgy döntött, hogy nem vár tovább, elindítja a szülést, bár én is, a kisfiam is jól voltunk. Akkor én ez ellen nem tiltakoztam, egyrészt, mert megbíztam benne, másrészt mert nem tájékoztatott senki a szülésindítás esetleges […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/nem-konnyu-de-erdemes"><img src={Pic44}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.01.05.</i></p>
                     <Link to="/nem-konnyu-de-erdemes"><h2 className="blog-racs-title">Nem könnyű, de érdemes</h2></Link>
                    <p className="blog-racs-description">Az elmúlt hetekben több gyermekvállalás előtt álló nő írt nekem levelet. Ki ilyen, ki olyan kérdéssel keresett meg, a közös bennük talán csak annyi volt, hogy mindannyian keresték az útjukat a várandósság és a szülés körüli információrengeteg sűrűjében. Néhány napja én is eljátszottam a gondolattal, mi lenne, ha most várnám az első gyermekemet és nem […]</p>
                </div>                
            </div>}

            {<div className="picture-gal">
                <Link to="/tamogatas-a-szules-alatt"><img src={Pic45}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.12.22.</i></p>
                     <Link to="/tamogatas-a-szules-alatt"><h2 className="blog-racs-title">Támogatás a szülés alatt</h2></Link>
                    <p className="blog-racs-description">Néhány nappal ezelőtt hazánkban tartott egy workshopot Debra Pascali Bonaro, a világ legnagyobb dúlaszervezetének (DONA) vezetője. A tréningen már gyakorló dúlák illetve a hivatás iránt érdeklődő anyák, köztük nagy örömömre egy védőnő és szülésznők is részt vettek. A gyakorlati ismeretek átadása mellett Debra többször említést tett egy olyan nemzetközi szervezet kutatási eredményeiről (Cohrane Collaboration), amely […]</p>
                </div>    
            </div>}

            {<div className="picture-gal">
                <Link to="/adventi-gondolatok-az-elfogadasrol"><img src={Pic46}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.12.08.</i></p>
                     <Link to="/adventi-gondolatok-az-elfogadasrol"><h2 className="blog-racs-title">Adventi gondolatok az elfogadásról</h2></Link>
                    <p className="blog-racs-description">Nagy boldogság számomra, hogy a munkám egyben a hivatásom is, mely számtalan különleges élménnyel ajándékoz meg. Az egyik legizgalmasabb annak a megtapasztalása, hogy mennyire sokszínűek vagyunk mi nők. Nap mint nap kapok leveleket lányoktól, asszonyoktól. Vannak, akik konkrét kérdésekkel keresnek meg, és olyanok is, akik valamilyen élményüket szeretnék megosztani velem, gyakran éppen a fájdalmas vagy […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/tango-egy-gyermekert"><img src={Pic47}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.12.02.</i></p>
                     <Link to="/tango-egy-gyermekert"><h2 className="blog-racs-title">Tangó egy gyermekért</h2></Link>
                    <p className="blog-racs-description">Egy szülés, egy születés igaz története, ahogy a dúla látta. Éjjel érkeztünk a szülőszobára. Csordogált a magzatvíz, de Hajninak még nem voltak méhösszehúzódásai. Elhelyezkedtünk a félhomályos, de még így sem túl intim szülőszobában. Bóbiskolva, zenét hallgatva virradt ránk a reggel. Berci nagyon fáradt volt. Napok óta intézte az új lakásba költözés összes gondját-baját, szorgosan takarított, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-kicsi-es-a-nagy-szulesbatyuk"><img src={Pic48}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.11.24.</i></p>
                     <Link to="/a-kicsi-es-a-nagy-szulesbatyuk"><h2 className="blog-racs-title">A kicsi és a nagy „szülésbatyuk”</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Első gyermekemet várom és abban szeretném a tanácsodat kérni, hogy mit vigyek magammal a kórházba, ha beindul a szülés. Már összepakoltam néhány alapvető dolgot, de kíváncsi vagyok, hogy Te mit tartasz fontosnak. Szeretném, ha nem hiányozna semmi a szülőszobán, de ami van ott, azt viszont felesleges nem akarom vinni. Válaszodat előre is köszönöm! […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-hit-amely-vilagra-segiti-a-kisbabakat"><img src={Pic49}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.11.10.</i></p>
                     <Link to="/a-hit-amely-vilagra-segiti-a-kisbabakat"><h2 className="blog-racs-title">A hit, amely világra segíti a kisbabákat</h2></Link>
                    <p className="blog-racs-description">A természetes szülés megvalósulásának egyik legfontosabb alapja az, hogy a nő hinni tudjon a saját erejében és a teste működésében. De van még valami, ami legalább ilyen fontos. Hogy ez mekkora segítő erőt jelent a szülésnél, arról néhány héttel ezelőtt újra megbizonyosodhattam. A hit, amely világra segíti a kisbabákatSzép őszi délután volt, már alkonyult. A […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/kenyelemre-programozva"><img src={Pic50}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.10.27.</i></p>
                     <Link to="/kenyelemre-programozva"><h2 className="blog-racs-title">Kényelemre programozva</h2></Link>
                    <p className="blog-racs-description">Többször is elolvastam a Babázzunk rovatban két hete megjelent cikket a programozott szülésről, és egyre csak az olvasottakon tűnődöm. Kényelem. Kényelem a szülőszobán. Furcsa nekem ez a szó. Használom-e, és ha igen, mikor érzem megfelelőnek ezt a kifejezést egyáltalán szüléskísérés közben? Azt hiszem, a vajúdás és a szülés alatt nem. Az anyák – ha hagyják […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/korhazban-vagy-otthonszulesnel-segit-a-dula"><img src={Pic51}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.10.13.</i></p>
                     <Link to="/korhazban-vagy-otthonszulesnel-segit-a-dula"><h2 className="blog-racs-title">Kórházban vagy otthonszülésnél segít a dúla?</h2></Link>
                    <p className="blog-racs-description">Bár egyre ismertebb a dúla szerepe és munkája, mégsem tudja mindenki pontosan, hogy vajon otthon vagy a kórházban segédkezik a szülésnél? Annak ellenére, hogy már 8 éve kísérnek különböző hazai kórházakban dúlák szüléseket, még mindig gyakran tapasztalom azt, hogy amikor bemutatkozom valakinek és megemlítem, hogy dúla vagyok, akkor azt gondolják rólam, hogy én kizárólag otthonszülésekhez […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/csaszarmetszes-dulaval"><img src={Pic52}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.09.29.</i></p>
                     <Link to="/csaszarmetszes-dulaval"><h2 className="blog-racs-title">Császármetszés dúlával?</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Többször olvastam már a dúlák tevékenységéről és most, hogy a második kisbabámat várom, elhatároztam, hogy dúla támogatásával szeretnék szülni. Az első gyermekem császármetszéssel született, s bár szeretném, ha ez most nem így lenne, foglalkoztat az a kérdés, hogy érdemes-e akkor is választanom dúlát, ha ismét műtéttel fejeződne be a szülésem? Császármetszés dúlával? – […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/van-e-fealadata-az-apanak-a-szuloszobaban"><img src={Pic53}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.09.18.</i></p>
                     <Link to="/van-e-fealadata-az-apanak-a-szuloszobaban"><h2 className="blog-racs-title">Van-e feladata az apának a szülőszobán?</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Lassan közeledik a szülésem időpontja, már alig várjuk, hogy megláthassuk a kisfiunkat. A férjemmel apás szülésre készülünk. A kórházban, ahová majd megyünk, a múlt héten volt lehetőségünk arra, hogy megnézzük a szülőszobát. Ezen a szülésre felkészítő alkalmon azt is elmondta a szülésznő, hogy az apukáktól a vajúdás alatt miben kérnek majd segítséget, például, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/kie-a-kisbaba-otthon"><img src={Pic54}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.09.01.</i></p>
                     <Link to="/kie-a-kisbaba-otthon"><h2 className="blog-racs-title">Kié a kisbaba otthon?</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Először is köszönöm, hogy kérdésekkel fordulhatok hozzád. Most vagyok 28 hetes kismama, és úgy érzem, egyre gyakrabban foglalkoztat a szülés és az utána következő időszak. Két éve párommal még az anyósoméknál laktunk, de most már külön élünk. Annak ellenére, hogy már nem a szülőknél élünk (akiket egyébként nagyon szeretek), úgy érzem, hogy mindenbe […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/kie-a-kisbaba"><img src={Pic55}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.08.18.</i></p>
                     <Link to="/kie-a-kisbaba"><h2 className="blog-racs-title">Kié a kisbaba?</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Két éve született a kisfiam, Ádám. Egy vidéki nagyváros kórházában látta meg a napvilágot. Bár a születése sem volt teljesen háborítatlan, a velem történteket könnyebben el tudtam fogadni mint azt, ahogy az újszülött ellátása zajlott. Amikor Ádám kibújt, igaz, hogy a mellemre tették, de csak alig egy-két percig, aztán már vitték is el […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/varandosan-nehez-az-alvas"><img src={Pic56}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.08.04.</i></p>
                     <Link to="/varandosan-nehez-az-alvas"><h2 className="blog-racs-title">Várandósan nehéz az alvás</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Nyolcadik hónapban járó várandós kismama vagyok. (Már a megnevezésen is sokat gondolkodtam. A “várandós” kifejezést találtam a legpontosabbnak, mert valóban várakozom, hogy végre megismerhessem azt a kis embert, akivel már egy ideje együtt élek, aki már egy ideje a mindennapjaim része, és akit remélem, nem nagyon gyötör meg odabent az én idekinti tehetetlenségem.) […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/van-e-fealadata-az-apanak-a-szuloszobaban"><img src={Pic57}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.07.21.</i></p>
                     <Link to="/van-e-fealadata-az-apanak-a-szuloszobaban"><h2 className="blog-racs-title">Brigi születésének története</h2></Link>
                    <p className="blog-racs-description">Drága Petra! Amikor ezt a levelet olvasod, két születésnap is nagyon közel lesz már. Az egyik a Tiéd, a másik a kisfiadé, aki talán – mint a legszebb ajándék – pont ugyanezen a napon fog a világra érkezni. Emlékszel az első levélváltásunkra? Akkor Te írtál nekem. A szakdolgozatodhoz gyűjtöttél anyagot, és én örömmel segítettem ebben. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/kie-a-kisbaba-otthon"><img src={Pic58}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.07.07.</i></p>
                     <Link to="/kie-a-kisbaba-otthon"><h2 className="blog-racs-title">Lehet-e oxytocin nélkül szülni?</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Szeptember végére várom első gyermekem születését. Több barátnőm, rokonom is szült mostanában, és egyikőjük kivételével mindegyik kapott a vajúdása folyamán oxytocint. Ha jól tudom, ez valami vajúdásgyorsító gyógyszer, amitől a barátnőimnek szinte elviselhetetlen fájásai lettek. Azt szeretném megkérdezni Tőled, hogy tényleg ilyen gyakran szükséges ez? Nagyon szeretnék mindenféle gyógyszeres beavatkozást elkerülni a szülésemnél. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/kie-a-kisbaba"><img src={Pic59}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.06.23.</i></p>
                     <Link to="/kie-a-kisbaba"><h2 className="blog-racs-title">Ágyban a gyermekágy idején?</h2></Link>
                    <p className="blog-racs-description">Kedves Emőke! Kétségbeesve írok Neked. A kisfiam egy hónappal ezelőtt született, nagyon szép, egészséges kisfiú, mégsem felhőtlen az örömöm. Úgy érzem, hogy nem tudom ellátni az anyasággal megnövekedett feladataimat. Az első két héten még itthon volt velünk a férjem és segített a házi munkában. Azóta viszont egyedül vagyok napközben a kisfiammal és nem megy jól […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/varandosan-nehez-az-alvas"><img src={Pic60}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.06.09.</i></p>
                     <Link to="/varandosan-nehez-az-alvas"><h2 className="blog-racs-title">Két ünnep közt egy harmadik</h2></Link>
                    <p className="blog-racs-description">Már csütörtökön este éreztem, hogy valami mintha finoman, de mégis egyre inkább szorongatná a szívemet. Aztán amikor másnap reggel, a ballagás napján bekísértem kislányomat, Esztert az oviba, ki is gördült könnyek formájában az az ünnepi hangulattal és büszkeséggel párosuló szomorúság, ami annak volt köszönhető, hogy a legkisebb gyermekünk is elbúcsúzik az óvodától. Amíg a boltig […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/varandosan-nehez-az-alvas"><img src={Pic61}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.06.09.</i></p>
                     <Link to="/varandosan-nehez-az-alvas"><h2 className="blog-racs-title">Két ünnep közt egy harmadik</h2></Link>
                    <p className="blog-racs-description">Már csütörtökön este éreztem, hogy valami mintha finoman, de mégis egyre inkább szorongatná a szívemet. Aztán amikor másnap reggel, a ballagás napján bekísértem kislányomat, Esztert az oviba, ki is gördült könnyek formájában az az ünnepi hangulattal és büszkeséggel párosuló szomorúság, ami annak volt köszönhető, hogy a legkisebb gyermekünk is elbúcsúzik az óvodától. Amíg a boltig […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/varandosan-nehez-az-alvas"><img src={Pic62}/></Link>
                 <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2009.06.09.</i></p>
                     <Link to="/varandosan-nehez-az-alvas"><h2 className="blog-racs-title">Két ünnep közt egy harmadik</h2></Link>
                    <p className="blog-racs-description">Már csütörtökön este éreztem, hogy valami mintha finoman, de mégis egyre inkább szorongatná a szívemet. Aztán amikor másnap reggel, a ballagás napján bekísértem kislányomat, Esztert az oviba, ki is gördült könnyek formájában az az ünnepi hangulattal és büszkeséggel párosuló szomorúság, ami annak volt köszönhető, hogy a legkisebb gyermekünk is elbúcsúzik az óvodától. Amíg a boltig […]</p>
                </div>
            </div>}
        </Masonry> 
        <div className="blog-step-button-box" >
                  <Link className="blog-step-button" to="/publications">1</Link>
                  <Link className="blog-step-button" to="/publications2">2</Link>
                  <Link className="blog-step-button" to="/publications3">3</Link>
            </div>
    </div>
)
}
