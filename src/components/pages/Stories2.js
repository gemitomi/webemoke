import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic21 from "../../image/szulestort/szules-story-21-hero-a-termeszet-rendje-szerint.png";
import Pic23 from "../../image/szulestort/szules-story-23-hero-a-ferfiaknak-is-vannak-szulestorteneteik.png";
import Pic24 from "../../image/szulestort/szules-story-24-hero-baratsagban-a-fajdalommal.png";
import Pic25 from "../../image/szulestort/szules-story-25-hero-csaszar-utan-termeszetesen.png";
import Pic26 from "../../image/szulestort/szules-story-26-hero-ereztem-bekes-jottodet.png";
import Pic27 from "../../image/szulestort/szules-story-27-hero-haborgatva-vagy-haboritatlanul.png";
import Pic28 from "../../image/szulestort/szules-story-28-hero-haboritatlanul-korhazban.png";
import Pic29 from "../../image/szulestort/szules-story-29-hero-hossu-ut.png";
import Pic30 from "../../image/szulestort/szules-story-30-hero-kettos-szuletes.png";
import Pic31 from "../../image/szulestort/szules-story-31-hero-a-negyedik-eper-szuletese.png";
import Pic32 from "../../image/szulestort/szules-story-32-hero-lathatatlanul.png";
import Pic33 from "../../image/szulestort/szules-story-33-hero-igaz-mese-a-harom-lanyrol.png";
import Pic34 from "../../image/szulestort/szules-story-34-hero-megszuletett-a-kistesom.png";
import Pic35 from "../../image/szulestort/szules-story-35-hero-madarka.png";
import Pic36 from "../../image/szulestort/szules-story-36-hero-tango-egy-gyermekert.png";


export default function Stories2() {
    const breakpoints = {
        default: 5,
        1500: 4,
        1150: 3,
        800: 2,
        550: 1
    }

    return (
        <div className="blog">
            <div className="blog-title">Szüléstörténetek</div> 
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {<div className="picture-gal">
                    <Link to="/a-termeszet-rendje-szerint"><img src={Pic21}/></Link>
                    <div className="blog-racs-content">
                    <p className="blog-racs-catagory"></p>
                    <h2 className="blog-racs-title"><Link to="/a-termeszet-rendje-szerint">A természet rendje szerint</Link></h2>
                    <p className="blog-racs-description">Az első gyermekem születésére nagyon készültem, tömérdek könyvet olvastam el. Természetesen, beavatkozások nélkül szerettem volna szülni. Nem féltem, úgy véltem ez a természet rendje. A választott doktornőm is nagyon kedves volt és biztosított, minden a kívánságom szerint zajlik majd, persze amennyire ezt a körülmények engedik. Amikor bementem a kórházba, ő azonnal burkot akart repeszteni és […]</p>
                </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/a-ferfiaknak-is-vannak-szulestorteneteik"><img src={Pic23}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/a-ferfiaknak-is-vannak-szulestorteneteik">A férfiaknak is vannak szüléstörténetei</Link></h2>
                        <p className="blog-racs-description">Azt hiszem, az enyém tipikus, még ha a szokásosnál erősebb vonalakkal rajzolta is az élet. Nagyon nehezen indult. A párommal, Évával két év együttélés után kezdtünk gyermeket tervezni. Ő 25 volt, én 30 – ideális életkor a gyermekvállaláshoz. Egy éven keresztül próbálkoztunk, eleinte “csak úgy”, aztán egyre kétségbeesettebben: hőmérőzés, vitaminok, megfelelő táplálkozás… Semmi eredmény. Elmentünk […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/baratsagban-a-fajdalommal"><img src={Pic24}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/baratsagban-a-fajdalommal">Barátságban a fájdalommal</Link></h2>
                        <p className="blog-racs-description">Eszter érkezésére több, mint négy évet vártunk. Első gyermekünk fogantatása körül semmi probléma nem volt, kis korkülönbséget terveztünk a gyerekek között, de a sors nem így hozta. Évek teltek el, de ő nem jelentkezett… Aztán egyszer csak mégis. Nagyon boldogok voltunk. Tudatosan készültem a szülésre, már régen elhatároztam, hogy dúlával fogok szülni, hátha sikerül elkerülni […]</p>
                    </div>                
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/csaszar-utan-termeszetesen"><img src={Pic25}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/csaszar-utan-termeszetesen">Császár után természetesen</Link></h2>
                        <p className="blog-racs-description">Történetünk 2007 októberében kezdődött. Kisfiamat a MÁV Kórházban szültem volna, de a kórházátalakítások miatt a Szabolcs utcai kórházban volt csak erre lehetőség. Október 15-re, hétfőre, voltam kiírva, ezen a napon el is ment a nyákdugó, de más nem történt. Innentől kezdve naponta járnom kellett CTG-re, ultrahangra. Ezeket a vizsgálatokat orvosom, Tidrenczel Zsolt, még a MÁV […]</p>
                    </div>    
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/ereztem-bekes-jottodet"><img src={Pic26}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/ereztem-bekes-jottodet">Éreztem békés jöttödet</Link></h2>
                        <p className="blog-racs-description">Először egy ismerősömtől hallottam nagyszerű dolgokat a dúlákról és így jutottam el Emőkéhez, aki nagyon sokat segített a felkészülésben egy természetesebb szülés eléréséhez. Ő általa ismertem meg a szülésznőmet, a szülésznő által pedig az új orvosomat. Ezek az események mind a terhességem utolsó hónapjában történtek. Nem bántam meg, sőt azt hiszem ebben a dologban jobban […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/haborgatva-vagy-haboritatlanul"><img src={Pic27}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/haborgatva-vagy-haboritatlanul">Háborgatva vagy háborítatlanul…</Link></h2>
                        <p className="blog-racs-description">Várandósságom másfél hónappal a dúlaságról írt szakdolgozatom beadása után kezdődött. Én már a szakdolgozat írása alatt eldöntöttem, hogy hogyan és kikkel szeretnék majd egyszer szülni. Ahogy a dúlám mondaná, megvolt, hogy ki kap meghívót a szülésemre. A férjem Joci, a dúlám B.Emőke, és az orvosom K. doktor személye, már az elejétől fix volt. Sajnos, mire […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/haboritatlanul-korhazban"><img src={Pic28}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/haboritatlanul-korhazban">Háborítatlanul, kórházban</Link></h2>
                        <p className="blog-racs-description">Szabolcsot, második kisfiamat úgy szültem, ahogy elképzeltem – háborítatlanul, mindenféle beavatkozás nélkül. De az út hosszú volt idáig. Első fiam, Andris 2ooo augusztusában született. Akkoriban nem foglalkoztam túl sokat a „hogyan” kérdésével. „Eldöntöttem” magamban, hogy természetes úton szülök – miért is ne, hiszen erre mindenki képes. Nem foglalkoztam azzal, hogy mikor milyen beavatkozások lehetnek és […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/hosszu-ut"><img src={Pic29}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/hosszu-ut">Hosszú út</Link></h2>
                        <p className="blog-racs-description">Hajnali fél kettő… Bár az utóbbi napokban már sokszor megébredtem éjjelente, most másként pattant ki a szemem. Furcsán fájt a pocim, a derekam is, és hiába készülök a 3. szülésemre, nem tudom eldönteni, hogy ezek az érzések már a baba útnak indulását jelzik-e. Kimegyek a wc-re, némi vérezgetés és gyanús fájások. A lelkem is olyan […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/kettos-szuletes"><img src={Pic30}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/kettos-szuletes">Kettős születés</Link></h2>
                        <p className="blog-racs-description">2008. augusztus 5-én nem csak Te születtél meg, hanem Veled együtt újra megszülettem én is. Már nagyon vártunk Rád. Akartuk, hogy legyél és szerettünk az első pillanattól kezdve, Kilenc hónapon keresztül, ami csodálatos volt, végig izgatottan vártuk a percet, hogy megpillantsunk végre. Már augusztus 3-án is voltak jósló fájásaim és éreztem, hogy hamarosan itt az […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/a-negyedik-eper-szuletese"><img src={Pic31}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/a-negyedik-eper-szuletese">A negyedik Eper születése</Link></h2>
                        <p className="blog-racs-description">Mikor megtudtuk, hogy negyedik gyermekünket várjuk, a boldogság és öröm mellett természetes izgalom és aggodalom is megmutatkozott. Szerencsésnek mondhattam magamat, hiszen az első három gyermekem fogantatásával, kihordozásával és születésével kapcsolatban sem voltak komplikációk. Jó szakember kezében voltunk, én laikusként, orvos szakmailag semmi kritizálnivalót nem találhattam volna. Mégis volt valami, amit másként szerettem volna megélni, mint […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/lathatalanul"><img src={Pic32}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/lathatatlanul">Láthatatlanul</Link></h2>
                        <p className="blog-racs-description">Angyali, sugárzó, figyelmes, mélységekig beleérző, talpraesett, határozott, kemény (nem a kismamákkal és apukákkal), végletekig segítőkész… Meg tudnám tölteni az egész oldalt a jelzőkkel, amik Emőkére, a dúlánkra illenek. Szüléstörténetet kellene írnom, de nem megy. Mert leírhatatlan! Túlságosan komplex, mert egy számomra ismeretlen nőből, nemhogy dúlává avanzsált, hanem a legcsodálatosabb baráttá! Persze ehhez kellett egy mesésen […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/igaz-mese-a-harom-lanyrol"><img src={Pic33}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/igaz-mese-a-harom-lanyrol">Igaz mese a három leányról</Link></h2>
                        <p className="blog-racs-description">Egyszer voltunk, hol nem voltunk egy négytagú család, aztán egy tavaszi vasárnap reggelen mind a négyen izgatottan figyeltük a tesztcsíkokat, s mikor kiderült, hogy most már öten vagyunk, az ujjongás pillanatai után 11 éves lányom, Gyöngyvér első kérdése ez volt: „Anya, lehetünk majd mi a dúláid?” Abban a pillanatban eszembe jutott, hogy hét évvel ezelőtt, […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/megszuletett-a-kistesom"><img src={Pic34}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/megszuletett-a-kistesom">Megszületett a kistesóm!</Link></h2>
                        <p className="blog-racs-description">Hajnali hat óra múlt tíz perccel. Kelnünk kellett, mert úgy volt, hogy iskolába megyünk, az Apa pedig dolgozni. Felöltöztünk, megfésülködtünk és lementünk reggelizni. Alig kaptunk be pár falatot, amikor az Anya előtolatott a nagy hasával, és azt mondta, hogy aznap nem kell mennünk iskolába, és az Apa se menjen dolgozni, mert ő szinte teljesen biztosnak […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/madarka"><img src={Pic35}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/madarka">Madárka</Link></h2>
                        <p className="blog-racs-description">Azokban a napokban, amikor Teodor kisfiunk születése már igencsak esedékes volt, mind többet olvastam a Rumi Mester verseit. [Mevlana Rumi, 12. századi perzsa költő.] Bölcs nyugalmat vártam tőle, s szerettem volna türelmet, kitartást, hitet meríteni belőle. Mondják, hogy már a korai időkben használták Rumi műveit, s kölünösen a nagyszabású Masnavit jóslásra, tanácsadásra, csakúgy, mint a […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/tango-egy-gyermekert"><img src={Pic36}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/tango-egy-gyermekert">Tangó egy gyermekért</Link></h2>
                        <p className="blog-racs-description">Piazzolla zenéjére tangózni is fogok a párommal, méghozzá hálóingben, papucsban, vizesedéstől felpuffadt lábakkal. Ez az élmény örökre elkísér minket, melynek szerves része volt Emőke is. Nélküle nem sikerült volna… Terhességi magas vérnyomással küzdöttem a várandósság alatt. Emőkével mi csak az utolsó harmadban találkoztunk, amikorra már az összes engem kezelő orvos császármetszéssel fenyegetett, annak ellenére,hogy nem […]</p>
                    </div>
                </div>}
                
            </Masonry>
            <div className="blog-step-button-box" >
                  <Link className="blog-step-button" to="/stories">1</Link>
                  <Link className="blog-step-button" to="/stories2">2</Link>
            </div>
             
        </div>
      )
}
