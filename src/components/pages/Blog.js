import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic1 from "../../image/blog/blog_01_ki a dula.png";
import Pic2 from "../../image/blog/blog_02_dulahatás.png";
import Pic3 from "../../image/blog/blog_03_dulatrening_menni.png";
import Pic4 from "../../image/blog/blog_04_lany_ .png";
import Pic5 from "../../image/blog/blog_05_nyilt_hetvege.png";
import Pic6 from "../../image/blog/blog_06_szuletes_napja.png";
import Pic7 from "../../image/blog/blog_07_csend_fia.png";
import Pic8 from "../../image/blog/blog_08_ki_fel.png";
import Pic9 from "../../image/blog/blog_09_apak_konnyei.jpg";
import Pic10 from "../../image/blog/blog_10_logo-icon.png";
import Pic11 from "../../image/blog/blog_11_oly tavol.jpg";
import Pic12 from "../../image/blog/blog_12_a_dulatbor-2015.jpg";
import Pic13 from "../../image/blog/blog_13_b_szoptatasrol.png";
import Pic14 from "../../image/blog/blog_14_dulatrening_ujra.jpg";
import Pic15 from "../../image/blog/blog_15_a_pozitiv_uzenetek_2.png";
import Pic16 from "../../image/blog/blog_16_pozitiv_uzenetek_szerepe.png";

export default function Blog() {

  const breakpoints = {
    default: 5,
    1500: 4,
    1150: 3,
    800: 2,
    550: 1
}

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
                <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                <h2 className="blog-racs-title"><Link to="/ki-a-dula-es-miben-segit">Ki a dúla és miben segít</Link></h2>
                <p className="blog-racs-description">A szülés a modern időket megelőző korokban a legtöbb kultúrában szigorúan asszonyi fennhatóság alá tartozott. A szülő nőt tapasztalt asszonytársak segítették a gyermek világra hozatalának nehéz óráiban. A közösség nőtagjai a bába felügyelete mellett bátorították, erősítették, biztatták a vajúdót. A közös női bölcsesség ösztönös tudásának és erejének védőhálóját vonták az ilyenkor sebezhető társuk köré.

                    A XX. század, mint oly sok minden másban, ebben is változást hozott  […]</p>
            </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/dulahatas"><img src={Pic2}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"><Link to="/dulahatas">A Dúlahatás - kutatások, eredmények</Link></h2>
                    <p className="blog-racs-description">Az elmúlt évtized során jelentősen nőtt a bizonyítékok száma a dúla által támogatott szülések előnyeivel kapcsolatban. Tizenhat olyan ellenőrzött tanulmányt publikáltak, melyekben több mint 5000 véletlenszerűen kiválasztott nő szerepelt. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/dulatreningre-menni-jo"><img src={Pic3}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"><Link to="/dulatreningre-menni-jo">Dúlatréningre menni jó</Link></h2>
                    <p className="blog-racs-description">Készülődöm. Holnapután dúlatréningre megyek. Körülbelül harminchatodszorra. Ugyanolyan izgalommal és várakozással a szívemben, mint amikor először ültem be résztvevőként a csoportba. Ma már én kísérem a csoportokat, de van, ami nem változik. A bizalom légköre, a női tapasztalatok, az elinduló önismereti folyamatok és el nem sírt könnyek, az önfeledt nevetések, a sűrű csendek minden tréningen velünk […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/a-lany-es-a-kisfiu"><img src={Pic4}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"><Link to="/a-lany-es-a-kisfiu">A Lány és a Kisfiú</Link></h2>
                    <p className="blog-racs-description">A Lány alig több mint 20 éves. Megkérdőjelezhetetlenül, a kezdetektől tudta, hogy mi az, akit és amit nagyon szeretne. A Kisfiút, még akkor is, ha apa nélkül neveli majd fel, és azt, hogy az otthonában szülhesse meg a babáját. A nappaliban áll a szülőmedence. Benne áramlik a Lány. Szabadon mozog, siklik, hajlik, elmerül. Csendben figyelem […]</p>
                </div>                
            </div>}

            {<div className="picture-gal">
                <Link to="/nyilt-hetvege"><img src={Pic5}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"><Link to="/nyilt-hetvege">Nyílt hétvége a Békés Dúlakörrel</Link></h2>
                    <p className="blog-racs-description">Ha várandós vagy, és úgy érzed, kevés az az idő, amit a szakemberek rád szánnak… Ha lenne egy csomó kérdésed, de azt sem tudod, hol kezdjed… Ha nehezen igazodsz el a rád zúduló információk tengerében…ez a program segít megtalálni a saját utadat. GYERE EL KÖRÜNKBE, BESZÉLGESS VELÜNK, INFORMÁLÓDJ A BÉKÉS DÚLAKÖR NYÍLT HÉTVÉGÉJÉN. 2017. MÁJUS 27-28-ÁN […]</p>
                </div>    
            </div>}

            {<div className="picture-gal">
            <Link to="/szuletes-napja"><img src={Pic6}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szuletes-napja">Szülés és születés napja a Békés Dúlakörrel</Link></h2>
                    <p className="blog-racs-description">Amiről máshol nem hallunk eleget – interaktív előadások és workshopok Szeretettel várunk minden kismamát és gyermeket váró párt, továbbá minden téma iránt érdeklődőt, aki szeretne többet megtudni a várandósság és a családdá válás lelki aspektusairól, illetve felkészülten és kompetensen szeretne megérkezni a gyermekvállalás kapujába. Egy gyönyörű, bensőséges helyszínre, a Zen kertbe invitálunk benneteket, ahol […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/a.csend-fia"><img src={Pic7}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/a-csend-fia">A csend fia</Link></h2>
                    <p className="blog-racs-description">A december beköszöntével érkezett. Sötétedés után indult, kora este, csöndben, finoman. Édesanyja szinte nem is érezte az összehúzódásokat, melyek mégis egyre nagyobbra nyitották előtte a kaput. Nyugodt és lassú folyamat volt, örömteli adventi várakozás. A szülőszoba falán még az óra sem járt. Háromnegyed kilencet mutatott, és én viccelődtem, hogy úgy látszik, ebben a szobában minden […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/ki-fel"><img src={Pic8}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/ki-fel">Ki fél a szüléstől?</Link></h2>
                    <p className="blog-racs-description">Talán meglepő, de az elmúlt években egyre gyakrabban tapasztalom azt, hogy nem az anya, hanem maga a szülészorvos. “Fenyegető, hüvelyi szülésre készülök!” – hangzott egy szülész-nőgyógyász szájából, és én döbbenetemből ocsúdva azóta is próbálom értelmezni, vajon mi fenyegeti? 15 éve kísérek szüléseket kórházakban, különböző orvosokkal és szülésznőkkel. Ez alatt az idő alatt nagyon sokféle személyiségű, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/apak-konnyei"><img src={Pic9}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/apak-konnyei">Az apák könnyei</Link></h2>
                    <p className="blog-racs-description">Éjjel van. A szülészet folyosóján lépkedek. Várnak, így sietek az ajtó felé, amely mögött az a pár vár, akiknek a hívására érkezem. De megállít valami,  pontosabban valaki. Egy férfi ül a folyosón, arcát a kezébe temeti és sír. Nem tudok elmenni mellette. Egyedül van a neonfénnyel, és rázkódik a teste, de nem a hideg fény […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/ujjaszuletes"><img src={Pic10}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/ujjaszuletes">Újjászületés</Link></h2>
                    <p className="blog-racs-description">Ma éppen 25 éve, hogy anyává születtem. A várandósságom 37. hetében ezen a napon jött világra Gyöngyvér lányom, akinek az érkezése határtalan boldogsággal töltött el. De ma nem csak őt ünnepeljük, kettős ünnep van. Egy újjászületésé is. A 10 évvel ezelőtt létrehozott honlapom, most, mára új ruhába bújt, és mind tartalmilag, mind formailag teljesen megújult. Hosszú […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/oly-tavol"><img src={Pic11}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/oly-tavol">“Oly távol vagy tőlem és mégis közel…”</Link></h2>
                    <p className="blog-racs-description">Négy évvel ezelőtt a dúlai hivatásom egyik legszebb és legkülönlegesebb feladatával ajándékozott meg a sors. Egy Szardínián élő magyar várandós mama kért meg arra, hogy repüljek ki hozzá és néhány napot töltsek vele és a párjával, hogy a beszélgetéseink segítsék őket a szülésre és a szülői szerepre való felkészülésben. Az akkor élményeimről itt, a blogomban […]</p>
                </div> 
            </div>}

            {<div className="picture-gal">
            <Link to="/dulatabor"><img src={Pic12}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/dulatabor">Dúlatábor</Link></h2>
                    <p className="blog-racs-description">Tavaly, Kemencén volt a hagyományteremtő, az idén, Dunabogdányban hagyománnyá is nyilvánítottuk, hiszen már  a jövő évi táborunknak is megvan a szervezője és a helyszíne. 🙂 Nagyon fontos, szeretetteljes és összekovácsoló élményeket adnak nekünk  ezek a júniusi hosszú hétvégék. Kirándulunk, tüzet rakunk, énekelünk, beszélgetünk, jógázunk, jókat főzünk, ékszereket készítünk vagy éppen pihentető masszázsban részesítjük egymást.  Kicsit […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/szoptatasrol"><img src={Pic13}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szoptatasrol">Az igény szerinti szoptatásról</Link></h2>
                    <p className="blog-racs-description">Sződy Judit pszichológus, IBCLC szoptatási tanácsadó írását teszem most közzé. Örömmel várom a hozzászólásokat! „Na, de mikor alakul ki a rendszer?” „A sok etetés miatt hasfájós lesz!” „Látod, így nem jut időd magadra és a férjedre! Tönkre megy a házasságotok!” Szerencsés az az igény szerint szoptató anya, akit nem zaklatnak hébe-hóba ilyen, vagy hasonló mondatokkal. […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/dulatrening-ujra"><img src={Pic14}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/dulatrening-ujra">Dúlatréning – újra</Link></h2>
                    <p className="blog-racs-description">Még tizenkét nap várakozás. Aztán két, különleges nap. A dúlatréning önismereti, motivációs hétvégéje közeledik. Nagyon várom már. Évente kétszer tartok dúla alapképzést, melyre  folyamatosan érkeznek a postaládámba a jelentkezési lapok. Jönnek a csoportba fiatal és idősebb nők, aki között vannak anyák, nagymamák és olyanok is, akik még csak készülődnek a szülői szerepre. Jönnek, mert vonzza […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/pozitiv-uzenet-1"><img src={Pic15}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/pozitiv-uzenet-1">A pozitív üzenetek szerepe a szülésnél – 1.</Link></h2>
                    <p className="blog-racs-description">Sokan nem értik, miért kell manapság felkészülni a szülésre. Hiszen a szülés természetes folyamat, magától is lezajlik. Csakhogy a várandósság alatti vizsgálatok, az orvosi szakkifejezések sokasága, a szülés külső körülményei tele vannak jórészt tudattalan negatív szuggesztiókkal. Az alábbi cikk – melyet két részletben közlök -, a Mindennapi Pszichológia 2009. decemberi számában jelent meg “Emőke, engem is […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/pozitiv-uzenet-2"><img src={Pic16}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/pozitiv-uzenet-2">A pozitív üzenetek szerepe a szülésnél – 2.</Link></h2>
                    <p className="blog-racs-description">–  Azért elég embert próbáló helyzetnek tűnik, amikor nem csak a vajúdót kell támogatni lelkileg, hanem a személyzetet is. –   Nagyon nehéz terep az egészségügy, ugyanakkor óriási jelentősége van annak, hogy a szülőszobán jelen lévők milyen viszonyban vannak egymással. Csak akkor lehet támogató a szülő nőt körül vevő erőtér, ha a benne lévők kölcsönösen tisztelik és […]</p>
                </div>
            </div>}
            
        </Masonry>

         
    </div>
  )
}

