import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic20 from "../../image/blog/blog-20-hero-elmegyek-elmegyek-hosszu-az-ut-de-maradok-4.png";
import Pic21 from "../../image/blog/blog-21-hero-elmegyek-elmegyek-hosszu-utra-megyek-3.png";
import Pic22 from "../../image/blog/blog-22-hero-elmegyek-elmegyek-hosszu-utra-megyek-2.png";
import Pic23 from "../../image/blog/blog-23-hero-elmegyek-elmegyek-hosszu-utra-megyek-1.png";
import Pic24 from "../../image/blog/blog-24-hero-veluk-es-nem-ellenuk.png";
import Pic25 from "../../image/blog/blog-25-hero-dula-zarovizsga.png";
import Pic26 from "../../image/blog/blog-26-hero-masodik-szines-viragcsokor.png";
import Pic27 from "../../image/blog/blog-27-hero-szuletes-hete-a-bekes-dulakor-szervezeseben.png";
import Pic28 from "../../image/blog/blog-28-hero-tagulo-dulakor-bovulo-ismeretek.png";
import Pic29 from "../../image/blog/blog-29-hero-visszajelzesek-motivacios-treningekrol.png";
import Pic30 from "../../image/blog/blog-30-hero-nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-2.png";
import Pic31 from "../../image/blog/blog-31-hero-nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-1.png";
import Pic32 from "../../image/blog/blog-32-hero-a-szuleszeti-beavatkozasok-elonyeirol-hatranyairol-es-letjogosultsagarol.png";
import Pic33 from "../../image/blog/blog-33-hero-dulamesek-esteje.png";
import Pic34 from "../../image/blog/blog-34-hero-bucsu-a-botyitol.png";
import Pic35 from "../../image/blog/blog-35-hero-szivembe-zart-csaladjaim-talalkozoja.png";
import Pic36 from "../../image/blog/blog-36-hero-osszefonodo-szalak.png";
import Pic37 from "../../image/blog/blog-37-hero-szivembe-zart-csaladjaim-talalkozoja.png";
import Pic38 from "../../image/blog/blog-38-hero-szulesfelkeszites-szardinian-4.png";
import Pic39 from "../../image/blog/blog-39-hero-szulesfelkeszites-szardinian-3.png";


export default function Blog2() {
  const breakpoints = {
    default: 5,
    1500: 4,
    1150: 3,
    800: 2,
    690: 1
}

  return (
    <div className="blog">
        <div className="blog-title">Blog</div> 
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {<div className="picture-gal">
                <Link to="/elmegyek-elmegyek-hosszu-az-ut-de-maradok-4"><img src={Pic20}/></Link>
                <div className="blog-racs-content">
                <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.09.04.</i></p>
                <h2 className="blog-racs-title"><Link to="/elmegyek-elmegyek-hosszu-az-ut-de-maradok-4">Elmegyek, elmegyek…, hosszú az út, de maradok? 4.</Link></h2>
                <p className="blog-racs-description">Jennifertől Catharinához bicikliztünk át. Ő az egyetlen dúla, akit az amszterdami klinika státuszban foglalkoztat. Igazán izgalmas dolgokat mesélt! Ezt a pozíciót úgy sikerült kivívnia, hogy egy kutatást végez a szülészeten, ahol kíváncsiak arra az eredményre, hogy mi a különbség a dúlával és a nem dúlával zajló szülések között. Az alapján, amit mesélt, a kutatás nem hozhat […]</p>
            </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/elmegyek-elmegyek-hosszu-az-ut-de-maradok-3"><img src={Pic21}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.08.20.</i></p>
                    <h2 className="blog-racs-title"><Link to="/elmegyek-elmegyek-hosszu-az-ut-de-maradok-3">Elmegyek, elmegyek, hosszú útra megyek… 3.</Link></h2>
                    <p className="blog-racs-description">Jennifer kanadai származású, Amszterdamban élő dúla. Amikor megérkeztünk hozzá, egy csodás ház aprócska kertjébe invitált minket. Ő az a dúla, aki idén ősszel először szervez Hollandiában dúlaképzést, ami számomra nagyon érdekes, hiszen azt gondoltam, hogy ennek ott már nagy hagyománya van. Julcsi mesélte, hogy furcsamód Hollandiában – bár a társadalombiztosítás az otthonszülést támogatja, és a közelmúltig […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/elmegyek-elmegyek-hosszu-az-ut-de-maradok-2"><img src={Pic22}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.08.08.</i></p>
                    <h2 className="blog-racs-title"><Link to="/elmegyek-elmegyek-hosszu-az-ut-de-maradok-2">Elmegyek, elmegyek, hosszú útra megyek… 2.</Link></h2>
                    <p className="blog-racs-description">Amszterdamba könnyű beleszeretni. Velem is ezt történt szinte pillanatok alatt. Szabad, vidám, színes, rendezett város. Egy olyan hely, ahol a legkülönbözőbb nemzetiségű, kinézetű, életvitelű, habitusú emberek békében, mosolygósan megférnek egymással. Ahol van levegő, a városban alig jár autó, hiszen a többség kerékpárral közlekedik. Ahol van tér, és munka után a hatalmas parkokban pihennek, beszélgetnek, sütögetnek, sportolnak […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/elmegyek-elmegyek-hosszu-az-ut-de-maradok-1"><img src={Pic23}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.08.04.</i></p>
                    <h2 className="blog-racs-title"><Link to="/elmegyek-elmegyek-hosszu-az-ut-de-maradok-1">Elmegyek, elmegyek, hosszú útra megyek… 1.</Link></h2>
                    <p className="blog-racs-description">Beszámoló a Hollandiában gyűjtött tapasztalataimról – 1. rész Nem tartom magam türelmetlen embernek, a dúlai hivatás pedig még inkább megtanította, hogy hogyan kell várakozni és mindamellett, hogy megtesszük a tőlünk telhetőt hagyni, engedni, hogy a dolgok változzanak. Az elmúlt hónapokban azonban néha fogyni látszott a türelmem. Úgy érzem, hogy a hazai szülészeti ellátásban néhány szempontból mintha […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/veluk-es-nem-ellenuk"><img src={Pic24}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.06.20.</i></p>
                    <h2 className="blog-racs-title"><Link to="/veluk-es-nem-ellenuk">Velük és NEM ellenük</Link></h2>
                    <p className="blog-racs-description">11 éve vagyok dúla. 11 éve kísérek különböző kórházakban szüléseket és épp ennyi ideje törekszem arra, hogy meg- és elismertessem a munkánkat a szülészeteken dolgozó egészségügyi személyzettel. Szeretném őket érteni, érezni a problémáikat és ismerni a gondolkodásmódjukat. Ezért ha csak tehetem, meghallgatom őket szülészeti konferenciákon és más fórumokon, előadásokat, beszélgetéseket vállalok a továbbképzéseiken, szakmai kerekasztalokon. Minden […]</p>
                </div>                
            </div>}

            {<div className="picture-gal">
                <Link to="/dula-zarovizsga"><img src={Pic25}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.06.10.</i></p>
                    <h2 className="blog-racs-title"><Link to="/dula-zarovizsga">Dúla záróvizsga</Link></h2>
                    <p className="blog-racs-description">Nagyon szép, felemelő nap volt a tegnapi. Két évnyi továbbképzés után újabb 9 dúla tett sikeres záróvizsgát és vált Békés szülésfelkészítő és szüléskísérő dúlává. A délelőtt az írásbeli teszt kitöltésével telt.  A vizsgázók az elmúlt két év dúlaműhelyein elhangzott témákkal kapcsolatosan kaptak teszt- illetve kifejtésre váró kérdéseket. Ezt követően szóbeli tételt húztak, melyben egy olyan […]</p>
                </div>    
            </div>}

            {<div className="picture-gal">
            <Link to="/a-masodik-szines-viragcsokor"><img src={Pic26}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.06.05.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/a-masodik-szines-viragcsokor">A második színes virágcsokor</Link></h2>
                    <p className="blog-racs-description">Nagy örömmel készülök a szombatra. Újabb tíz dúla záróvizsgájának napja lesz ez, akik az elmúlt két évben közösen dolgoztak velem a Békés Dúlaműhelyben. Rendszeres továbbképzéseiken mélyítették el az ismereteiket mindazon témákban, amelyek által még jobban tudják segíteni a hozzájuk forduló várandósokat és párjaikat. Egész napokat – néha ha a téma úgy kívánta, még többet is – foglalkoztunk a […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/szuletes-hete-a-bekes-dulakor-szervezeseben"><img src={Pic27}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.04.23.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szuletes-hete-a-bekes-dulakor-szervezeseben">Születés Hete a Békés Dúlakör szervezésében</Link></h2>
                    <p className="blog-racs-description">A Születés Hete az évnek az a kiemelt hete, amikor a családalapítással kapcsolatos fontos információk egy egységes arculattal rendelkező országos rendezvénysorozat keretében koncentráltan érhetők el az érdeklődők számára. A Születés Hete ahhoz kíván hozzájárulni, hogy ezek az információk feldolgozhatók legyenek, és segítsék a legmegfelelőbb egyéni döntés megszületését. A Születés Hetén összefognak azok a szakemberek, akik […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/tagulo-dulakor-bovulo-ismeretek"><img src={Pic28}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.01.31.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/tagulo-dulakor-bovulo-ismeretek">Táguló dúlakör, bővülő ismeretek</Link></h2>
                    <p className="blog-racs-description">Nagyon vártuk Ágit. Mind a 30-an azért drukkoltunk, hogy a startközeli kisbabák megengedjék, hogy a szülésznőjük egy teljes délutánt dúlakörben tölthessen. Így lett. 🙂 Örültem, hogy ennyien összegyűltünk. “Öreg” és még kezdő dúlák, Békés Dúlakörön innen és túl. Volt, akikkel én is itt ismerkedtem csak össze, most találkoztunk először és olyanok is, akikkel évek óta […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/visszajelzesek-a-motivacios-treningekrol"><img src={Pic29}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.01.30.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/visszajelzesek-a-motivacios-treningekrol">Visszajelzések a motivációs tréningekről</Link></h2>
                    <p className="blog-racs-description">MIT ADOTT NEKED EZ A KÉT NAP? “Nagyon sokat. Megerősítést abban, hogy jó úton járok. Döntéseket. A női kör erejének erős megtapasztalását. Hitet a világban és önmagam erejében. Kérdéseket, amelyekkel foglalkoznom kell. Nem könnyű érzéseket, amelyek súlyuknál fogva nagyon értékesek. Mások érzéseire való teremtő ráhangolódást.” “Csodát. Életemben először tapasztaltam ennyire erősen, hogy mekkora élmény, milyen […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladjaim-talalkozojarol-2"><img src={Pic30}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.01.24.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladjaim-talalkozojarol-2">Nyomtatásban megjelent cikk a Szívembe zárt családok találkozójáról – 2. rész</Link></h2>
                    <p className="blog-racs-description">Emőke kivételes alázattal tölti be a hivatását. Több édesanya elmesélte nekem, milyen észrevétlenül olvadt bele férj és feleség kettősébe, mintha ott sem lenne, mégis, ha szükség volt rá, azonnal tudta, mit kell mondania vagy tennie. Vizet forralt, meleg borogatást készített a vajúdó nő derekára, előkotorta a női táska aljából a szőlőcukrot, elővette a gumipapucsot, megetette […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladjaim-talalkozojarol-1"><img src={Pic31}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar">2011.12.08.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladjaim-talalkozojarol-1">Nyomtatásban megjelent cikk a Szívembe zárt családjaim találkozójáról – 1. rész</Link></h2>
                    <p className="blog-racs-description">Szívembe zárt családjaim  Családkísérő. Hallottak már erről a foglalkozásról? Békés Emőke egy személyben képviseli mindazt, amit ez a fogalom takar. A szülői szerepre való felkészítéstől a kisbaba világra segítésén át a gyereknevelés első buktatóinak közös leküzdéséig. Az utóbbi tíz évben csaknem hatvan pár köszönheti neki, hogy sikerült viszonylag gördülékenyen, „békésen” boldog családdá válniuk.  Hirtelen leálltak […]</p>
                </div> 
            </div>}

            {<div className="picture-gal">
            <Link to="/a-szuleszeti-beavatkozasok-elonyeirol-hatranyairol-es-letjogosultsagarol-valamint-a korhazi-protokollrol"><img src={Pic32}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.12.06.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/a-szuleszeti-beavatkozasok-elonyeirol-hatranyairol-es-letjogosultsagarol-valamint-a korhazi-protokollrol">A szülészeti beavatkozások előnyeiről, hátrányairól és létjogosultságáról, valamint a kórházi protokollról</Link></h2>
                    <p className="blog-racs-description">2012. január 20-án pénteken, 15-20 óráig Rákócziné Krämer Ágnes, szülésznő, perinatális szaktanácsadó lesz a vendégünk az L-Fogadóban (XI. Fadrusz u. 14. VI./3.). Ágit arra kértem, hogy ezen a délutánon beszéljen nekünk arról, hogy a szülészeteken alkalmazott leggyakoribb beavatkozásoknak (szülésindítás, burokrepesztés, oxitocinos infúzió, folyamatos monitorizálás, epidurális érzéstelenítés, császármetszés) melyek az indikációi, mikor hasznosak illetve azt is, hogy […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/dulamesek-esteje"><img src={Pic33}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.11.30.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/dulamesek-esteje">Dúlamesék estéje</Link></h2>
                    <p className="blog-racs-description">A múlt hét második felében ismét dúlatréning volt. A képzés azon alkalma, amikor a 4 nap alatt több előadó – pl. testtudatoktató, pszichológus, aromaterapeuta, bába, szoptatási tanácsadó – adnak át fontos ismereteket azoknak, akik e csodálatos hivatás iránt érdeklődnek. Valójában ennél sokkal, de sokkal több történik. A résztvevők ugyanis napokig együtt élnek, sokat beszélgetnek, közösen gondolkodnak […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/bucsu-a-botyitol"><img src={Pic34}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.11.02.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/bucsu-a-botyitol">Búcsú a Botyitól</Link></h2>
                    <p className="blog-racs-description">Pontosan másfél évig volt szívemnek kedves találkozási pont a “Botyi”. Ennek a Vak Bottyán utcai lakásnak a falai között sok-sok emberi történet bomlott ki. Szerettem ezt a helyet én is és mindazok, akik vendégként megfordultak nálam.   Hiába áll a város szívében a ház, a külvilág zaja sohasem zavarta meg az elmélyült beszélgetéseket, mert a nagy szoba ablaka […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/szivembe-zart-csaladjaim-talalkozoja-2"><img src={Pic35}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.09.22.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szivembe-zart-csaladjaim-talalkozoja-2">Szívembe zárt családjaim találkozója - 2</Link></h2>
                    <p className="blog-racs-description">Hajnal. Ébredek. Eljött a nagy nap. Indulunk a kis családommal az erdőbe, hogy végre  találkozhassak a szívembe zárt családjaimmal. Az erdőben szép reggeli fények, napsütés. És barátok, akik már gyújtják is a tüzet, hogy ebédre megfőjön a gulyás és dúlatársaim, akik az érkező gyerekek szórakoztatásában lesznek a segítségemre. Izgulok és örülök egyszerre. Tele vagyok várakozással. Épp kilenc hónappal ezelőtt […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/osszefonodo-szalak"><img src={Pic36}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.10.20.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/osszefonodo-szalak">Összefonódó szálak</Link></h2>
                    <p className="blog-racs-description">Több mint másfél évtizede keresem anyaként az okát az ekcémának és egyéb allergiáknak. Sajnos az egyik gyermekem érintett ezzel a problémával, és az elmúlt években bár megszámlálhatatlanul sok helyen jártunk, senki sem tudta megmondani a tünetei igazi okát. Éveken át bolyongtunk zsákutcákban, téves vagy éppen ártalmas terápiás javaslatok között, ugyanakkor találkoztunk rendkívül segítőkész, jószándékú emberekkel is. Volt, amikor […]</p>
                </div>
            </div>}

           

            {<div className="picture-gal">
            <Link to="/szivembe-zart-csaladjaim-talalkozoja-1"><img src={Pic37}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.08.23.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szivembe-zart-csaladjaim-talalkozoja-1">Szívembe Zárt Családjaim találkozója - 1</Link></h2>
                    <p className="blog-racs-description">Egy áprilisi napon történt, hogy ráébredtem, pont 10 éve vagyok dúla. Arra gondoltam, hogy is ünnepelhetném meg szebben ezt a kerek évfordulót, ha nem azokkal a családokkal, akiket abban az időszakban kísértem, amikor a gyermeküket várták. Írtam hát nekik egy meghívót és arra kértem őket, ha van kedvük, tartsanak velem egy közös piknikre augusztus végén. Hamarosan jöttek is […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/szulesfelkeszites-szardinian-4"><img src={Pic38}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.07.21.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szulesfelkeszites-szardinian-4">Szülésfelkészítés Szardínián 4.</Link></h2>
                    <p className="blog-racs-description">Itthon, ha valaki azzal a kéréssel fordul hozzám, hogy szeretné, ha segítenék neki a szülésre és a szülői szerepre való felkészülésben, akkor az általa jónak tartott gyakorisággal és időtartamban találkozhat velem.  Minden találkozás során arrafelé megyünk, amerre az anya illetve a pár kérdései vezetnek, de természetesen magam is örömmel javasolok olyan témákat, amelyekről azt gondolom, hogy érdemes […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/szulesfelkeszites-szardinian-3"><img src={Pic39}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.07.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szulesfelkeszites-szardinian-3">Szülésfelkészítés Szardínián 3.</Link></h2>
                    <p className="blog-racs-description">Kinyílt az ajtó és valóban ott álltak ők.  Két helyes, mosolygós ember, Szandra és Mario. Egyikük magyar, másikuk osztrák, akik Szardínián találták meg a nyugalmat és a közös otthonukat. Egy csodás panziót működtetnek Alghero közelében. Fantasztikus vendégszeretetüket, odafigyelő gondoskodásukat  az ottlétem első pillanatától az utolsóig élvezhettem én is. Olajfaliget, citromfák, kaktuszok, letisztult ízlésről tanúskodó hűvös szobák, új illatok, különleges […]</p>
                </div>
            </div>}
            
        </Masonry>

        <div className="blog-step-button-box" >
            <Link className="blog-step-button" to="/blog">1</Link>
            <Link className="blog-step-button" to="/blog2">2</Link>
            <Link className="blog-step-button" to="/blog3">3</Link>
        </div>
         
    </div>
  )
}


