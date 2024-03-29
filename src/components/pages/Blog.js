import React, { useEffect }  from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic1 from "../../image/blog/blog_01_hero_ki a dula.png";
import Pic2 from "../../image/blog/blog_02_hero_dulahatas.png";
import Pic63 from "../../image/blog/blog-63-hero-melyinterju.png";
import Pic3 from "../../image/blog/blog_03_hero_dulatrening.png";
import Pic4 from "../../image/blog/blog_04_hero_lany_.png";
import Pic5 from "../../image/blog/blog_05_hero_nyilt_hetvege.png";
import Pic6 from "../../image/blog/blog_06_hero_szuletes_napja.png";
import Pic7 from "../../image/blog/blog_07_hero_csend_fia.png";
import Pic8 from "../../image/blog/blog_08_hero_ki_fel.png";
import Pic9 from "../../image/blog/blog_09_hero_apak_konnyei.png";
import Pic10 from "../../image/blog/blog_10_logo-icon.png";
import Pic11 from "../../image/blog/blog_11_hero_oly_tavol.png";
import Pic12 from "../../image/blog/blog_12_hero_dulatabor.png";
import Pic13 from "../../image/blog/blog_13_hero_szoptatasrol.png";
import Pic14 from "../../image/blog/blog_14_hero_dulatrening_ujra.png";
import Pic15 from "../../image/blog/blog_15_hero_pozitiv_uzenetek_szerepe_2.png";
import Pic16 from "../../image/blog/blog_16_hero_pozitiv_uzenetek_szerepe_1.png";
import Pic17 from "../../image/blog/blog-17-hero-csoportos-szulesfelkeszito.png";
import Pic18 from "../../image/blog/blog-18-hero-lehet-eleget-beszelni a szulesrol-2.png";
import Pic19 from "../../image/blog/blog-19-hero-lehet-eleget-beszelni a szulesrol-1.png";


export default function Blog() {

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
        <div className="blog-title">Blog</div> 
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {<div className="picture-gal">
                <Link to="/ki-a-dula-es-miben-segit"><img src={Pic1}/></Link>
                <div className="blog-racs-content">
                <p className="blog-racs-catagory"><i className="far fa-calendar"> 2023.05.17.</i></p>
                <h2 className="blog-racs-title"><Link to="/ki-a-dula-es-miben-segit">Ki a dúla és miben segít</Link></h2>
                <p className="blog-racs-description">A szülés a modern időket megelőző korokban a legtöbb kultúrában szigorúan asszonyi fennhatóság alá tartozott. A szülő nőt tapasztalt asszonytársak segítették a gyermek világra hozatalának nehéz óráiban. A közösség nőtagjai a bába felügyelete mellett bátorították, erősítették, biztatták a vajúdót. A közös női bölcsesség ösztönös tudásának és erejének védőhálóját vonták az ilyenkor sebezhető társuk köré.

                    A XX. század, mint oly sok minden másban, ebben is változást hozott  […]</p>
            </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/dulahatas-kutatasok-eredmenyek"><img src={Pic2}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2023.01.20.</i></p>
                    <h2 className="blog-racs-title"><Link to="/dulahatas-kutatasok-eredmenyek">A Dúlahatás - kutatások, eredmények</Link></h2>
                    <p className="blog-racs-description">Az elmúlt évtized során jelentősen nőtt a bizonyítékok száma a dúla által támogatott szülések előnyeivel kapcsolatban. Tizenhat olyan ellenőrzött tanulmányt publikáltak, melyekben több mint 5000 véletlenszerűen kiválasztott nő szerepelt. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/melyinterju"><img src={Pic63}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2022.12.14.</i></p>
                    <h2 className="blog-racs-title"><Link to="/melyinterju">Mélyinterjú</Link></h2>
                    <p className="blog-racs-description">Többet, személyesebbet rólam, a szüléskísérésekről és a hivatásomhoz fűződő viszonyomról az alábbi, Szuromi Ágnes által készített interjú részleteiből olvashatsz. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/dulatreningre-menni-jo"><img src={Pic3}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2017.05.18.</i></p>
                    <h2 className="blog-racs-title"><Link to="/dulatreningre-menni-jo">Dúlatréningre menni jó</Link></h2>
                    <p className="blog-racs-description">Készülődöm. Holnapután dúlatréningre megyek. Körülbelül harminchatodszorra. Ugyanolyan izgalommal és várakozással a szívemben, mint amikor először ültem be résztvevőként a csoportba. Ma már én kísérem a csoportokat, de van, ami nem változik. A bizalom légköre, a női tapasztalatok, az elinduló önismereti folyamatok és el nem sírt könnyek, az önfeledt nevetések, a sűrű csendek minden tréningen velünk […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-lany-es-a-kisfiu"><img src={Pic4}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2017.05.17.</i></p>
                    <h2 className="blog-racs-title"><Link to="/a-lany-es-a-kisfiu">A Lány és a Kisfiú</Link></h2>
                    <p className="blog-racs-description">A Lány alig több mint 20 éves. Megkérdőjelezhetetlenül, a kezdetektől tudta, hogy mi az, akit és amit nagyon szeretne. A Kisfiút, még akkor is, ha apa nélkül neveli majd fel, és azt, hogy az otthonában szülhesse meg a babáját. A nappaliban áll a szülőmedence. Benne áramlik a Lány. Szabadon mozog, siklik, hajlik, elmerül. Csendben figyelem […]</p>
                </div>                
            </div>}

            {<div className="picture-gal">
                <Link to="/nyilt-hetvege-a-bekes-dulakorrel"><img src={Pic5}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2017.05.15.</i></p>
                    <h2 className="blog-racs-title"><Link to="/nyilt-hetvege-a-bekes-dulakorrel">Nyílt hétvége a Békés Dúlakörrel</Link></h2>
                    <p className="blog-racs-description">Ha várandós vagy, és úgy érzed, kevés az az idő, amit a szakemberek rád szánnak… Ha lenne egy csomó kérdésed, de azt sem tudod, hol kezdjed… Ha nehezen igazodsz el a rád zúduló információk tengerében…ez a program segít megtalálni a saját utadat. GYERE EL KÖRÜNKBE, BESZÉLGESS VELÜNK, INFORMÁLÓDJ A BÉKÉS DÚLAKÖR NYÍLT HÉTVÉGÉJÉN. 2017. MÁJUS 27-28-ÁN […]</p>
                </div>    
            </div>}

            {<div className="picture-gal">
            <Link to="/szules-es-szuletes-napja-a-bekes-dulakorrel"><img src={Pic6}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2017.01.22.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szules-es-szuletes-napja-a-bekes-dulakorrel">Szülés és születés napja a Békés Dúlakörrel</Link></h2>
                    <p className="blog-racs-description">Amiről máshol nem hallunk eleget – interaktív előadások és workshopok Szeretettel várunk minden kismamát és gyermeket váró párt, továbbá minden téma iránt érdeklődőt, aki szeretne többet megtudni a várandósság és a családdá válás lelki aspektusairól, illetve felkészülten és kompetensen szeretne megérkezni a gyermekvállalás kapujába. Egy gyönyörű, bensőséges helyszínre, a Zen kertbe invitálunk benneteket, ahol […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/a-csend-fia"><img src={Pic7}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.12.14.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/a-csend-fia">A csend fia</Link></h2>
                    <p className="blog-racs-description">A december beköszöntével érkezett. Sötétedés után indult, kora este, csöndben, finoman. Édesanyja szinte nem is érezte az összehúzódásokat, melyek mégis egyre nagyobbra nyitották előtte a kaput. Nyugodt és lassú folyamat volt, örömteli adventi várakozás. A szülőszoba falán még az óra sem járt. Háromnegyed kilencet mutatott, és én viccelődtem, hogy úgy látszik, ebben a szobában minden […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/ki-fel-szulestol"><img src={Pic8}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.12.04.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/ki-fel-szulestol">Ki fél a szüléstől?</Link></h2>
                    <p className="blog-racs-description">Talán meglepő, de az elmúlt években egyre gyakrabban tapasztalom azt, hogy nem az anya, hanem maga a szülészorvos. “Fenyegető, hüvelyi szülésre készülök!” – hangzott egy szülész-nőgyógyász szájából, és én döbbenetemből ocsúdva azóta is próbálom értelmezni, vajon mi fenyegeti? 15 éve kísérek szüléseket kórházakban, különböző orvosokkal és szülésznőkkel. Ez alatt az idő alatt nagyon sokféle személyiségű, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/apak-konnyei"><img src={Pic9}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.11.28.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/apak-konnyei">Apák könnyei</Link></h2>
                    <p className="blog-racs-description">Éjjel van. A szülészet folyosóján lépkedek. Várnak, így sietek az ajtó felé, amely mögött az a pár vár, akiknek a hívására érkezem. De megállít valami,  pontosabban valaki. Egy férfi ül a folyosón, arcát a kezébe temeti és sír. Nem tudok elmenni mellette. Egyedül van a neonfénnyel, és rázkódik a teste, de nem a hideg fény […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/ujjaszuletes"><img src={Pic10}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2017.10.14.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/ujjaszuletes">Újjászületés</Link></h2>
                    <p className="blog-racs-description">Ma éppen 25 éve, hogy anyává születtem. A várandósságom 37. hetében ezen a napon jött világra Gyöngyvér lányom, akinek az érkezése határtalan boldogsággal töltött el. De ma nem csak őt ünnepeljük, kettős ünnep van. Egy újjászületésé is. A 10 évvel ezelőtt létrehozott honlapom, most, mára új ruhába bújt, és mind tartalmilag, mind formailag teljesen megújult. Hosszú […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/oly-tavol-vagy-tolem"><img src={Pic11}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2015.07.09.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/oly-tavol-vagy-tolem">“Oly távol vagy tőlem és mégis közel…”</Link></h2>
                    <p className="blog-racs-description">Négy évvel ezelőtt a dúlai hivatásom egyik legszebb és legkülönlegesebb feladatával ajándékozott meg a sors. Egy Szardínián élő magyar várandós mama kért meg arra, hogy repüljek ki hozzá és néhány napot töltsek vele és a párjával, hogy a beszélgetéseink segítsék őket a szülésre és a szülői szerepre való felkészülésben. Az akkor élményeimről itt, a blogomban […]</p>
                </div> 
            </div>}

            {<div className="picture-gal">
            <Link to="/dulatabor"><img src={Pic12}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2015.07.06.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/dulatabor">Dúlatábor</Link></h2>
                    <p className="blog-racs-description">Tavaly, Kemencén volt a hagyományteremtő, az idén, Dunabogdányban hagyománnyá is nyilvánítottuk, hiszen már  a jövő évi táborunknak is megvan a szervezője és a helyszíne. 🙂 Nagyon fontos, szeretetteljes és összekovácsoló élményeket adnak nekünk  ezek a júniusi hosszú hétvégék. Kirándulunk, tüzet rakunk, énekelünk, beszélgetünk, jógázunk, jókat főzünk, ékszereket készítünk vagy éppen pihentető masszázsban részesítjük egymást.  Kicsit […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/az-igeny-szerinti-szoptatasrol"><img src={Pic13}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2015.04.15.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/az-igeny-szerinti-szoptatasrol">Az igény szerinti szoptatásról</Link></h2>
                    <p className="blog-racs-description">Sződy Judit pszichológus, IBCLC szoptatási tanácsadó írását teszem most közzé. Örömmel várom a hozzászólásokat! „Na, de mikor alakul ki a rendszer?” „A sok etetés miatt hasfájós lesz!” „Látod, így nem jut időd magadra és a férjedre! Tönkre megy a házasságotok!” Szerencsés az az igény szerint szoptató anya, akit nem zaklatnak hébe-hóba ilyen, vagy hasonló mondatokkal. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/dulatrening-ujra"><img src={Pic14}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2013.09.04.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/dulatrening-ujra">Dúlatréning – újra</Link></h2>
                    <p className="blog-racs-description">Még tizenkét nap várakozás. Aztán két, különleges nap. A dúlatréning önismereti, motivációs hétvégéje közeledik. Nagyon várom már. Évente kétszer tartok dúla alapképzést, melyre  folyamatosan érkeznek a postaládámba a jelentkezési lapok. Jönnek a csoportba fiatal és idősebb nők, aki között vannak anyák, nagymamák és olyanok is, akik még csak készülődnek a szülői szerepre. Jönnek, mert vonzza […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/pozitiv-uzenetek-szerepe-a-szulesnel-2"><img src={Pic16}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2013.03.04.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/pozitiv-uzenetek-szerepe-a-szulesnel-2">A pozitív üzenetek szerepe a szülésnél – 2.</Link></h2>
                    <p className="blog-racs-description">–  Azért elég embert próbáló helyzetnek tűnik, amikor nem csak a vajúdót kell támogatni lelkileg, hanem a személyzetet is. –   Nagyon nehéz terep az egészségügy, ugyanakkor óriási jelentősége van annak, hogy a szülőszobán jelen lévők milyen viszonyban vannak egymással. Csak akkor lehet támogató a szülő nőt körül vevő erőtér, ha a benne lévők kölcsönösen tisztelik és […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/pozitiv-uzenetek-szerepe-a-szulesnel-1"><img src={Pic15}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2013.03.01.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/pozitiv-uzenetek-szerepe-a-szulesnel-1">A pozitív üzenetek szerepe a szülésnél – 1.</Link></h2>
                    <p className="blog-racs-description">Sokan nem értik, miért kell manapság felkészülni a szülésre. Hiszen a szülés természetes folyamat, magától is lezajlik. Csakhogy a várandósság alatti vizsgálatok, az orvosi szakkifejezések sokasága, a szülés külső körülményei tele vannak jórészt tudattalan negatív szuggesztiókkal. Az alábbi cikk – melyet két részletben közlök -, a Mindennapi Pszichológia 2009. decemberi számában jelent meg “Emőke, engem is […]</p>
                </div>
            </div>}

           

            {<div className="picture-gal">
            <Link to="/csoportos-szulesfelkeszito"><img src={Pic17}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2013.01.09.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/csoportos-szulesfelkeszito">Csoportos szülésfelkészítő</Link></h2>
                    <p className="blog-racs-description">2013. év elejétől heti rendszerességgel szülésre és a szülői szerepre felkészítő beszélgetések lesznek a SokSzínTérben, azon a helyszínen, ahol dolgozom, és amely otthont ad még sok várandósoknak szóló egyéb előadásoknak is. A beszélgetéseket olyan dúlák vezetik, akik széles körű ismeretekkel rendelkeznek a várandósság, a szülés és az azt követő egy év lélektani és élettani eseményeiről, valamint tapasztalataikat […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/lehet-eleget-beszelni-a-szulesrol-2"><img src={Pic18}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.12.11.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/lehet-eleget-beszelni-a-szulesrol-2">Lehet eleget beszélni a szülésről? – 2.</Link></h2>
                    <p className="blog-racs-description">A szülés javarészt egy technikailag irányítható orvosi eseménnyé vált, sok a vita a téma körül. Mit gondolsz az otthonszülésről? Nagyon örülök, hogy elkészült a törvényi szabályozás, és bízom abban, hogy hamarosan valóban teljesen tisztázott és megnyugtató módon válik lehetővé az anyák számára, hogy az otthonukban vagy születésházakban hozhassák a világra gyermekeiket, ha számukra nem […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/lehet-eleget-beszelni-a-szulesrol-1"><img src={Pic19}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2012.11.28.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/lehet-eleget-beszelni-a-szulesrol-1">Lehet eleget beszélni a szülésről? – 1.</Link></h2>
                    <p className="blog-racs-description">Minivilág, 2012. november 24. Korábban a szülő nőt tapasztalt asszonytársak segítették a gyermek világra hozatalának nehéz óráiban. A közösség nőtagjai a bába felügyelete mellett bátorították, biztatták a vajúdót. A közös női bölcsesség ösztönös tudásának és erejének védőhálóját vonták az ilyenkor sebezhető társuk köré. Manapság is sokan vágynak hasonló élményekre, segítő kézre, bizalomra és nyugodt szülésre. […]</p>
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

