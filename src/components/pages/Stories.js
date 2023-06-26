import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic1 from "../../image/blog/blog_01_ki a dula.png";
import Pic2 from "../../image/blog/blog_02_dulahatás.png";
import Pic3 from "../../image/blog/blog_03_dulatrening_menni.png";
import Pic4 from "../../image/blog/blog_04_lany_.png";
import Pic5 from "../../image/blog/blog_05_nyilt_hetvege.png";
import Pic6 from "../../image/blog/blog_06_szuletes_napja.png";
import Pic7 from "../../image/blog/blog_07_csend_fia.png";
import Pic8 from "../../image/blog/blog_08_ki_fel.png";
import Pic9 from "../../image/blog_01.png";
import Pic10 from "../../image/szulesfelkeszites_2.png";
import Pic11 from "../../image/publik_01.png";

export default function Stories() {

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
                    <Link to=""><img src={Pic1}/></Link>
                    <div class="blog-racs-content">
                    <p class="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                    <h2 class="blog-racs-title"><Link to="">Ki a dúla és miben segít</Link></h2>
                    <p class="blog-racs-description">A szülés a modern időket megelőző korokban a legtöbb kultúrában szigorúan asszonyi fennhatóság alá tartozott. A szülő nőt tapasztalt asszonytársak segítették a gyermek világra hozatalának nehéz óráiban. A közösség nőtagjai a bába felügyelete mellett bátorították, erősítették, biztatták a vajúdót. A közös női bölcsesség ösztönös tudásának és erejének védőhálóját vonták az ilyenkor sebezhető társuk köré.
    
                        A XX. század, mint oly sok minden másban, ebben is változást hozott </p>
                </div>
                </div>}
    
                {<div className="picture-gal">
                    <img src={Pic2}/>
                    <div class="blog-racs-content">
                        <p class="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                        <h2 class="blog-racs-title">A Dúlahatás - kutatások, eredmények</h2>
                        <p class="blog-racs-description">Az elmúlt évtized során jelentősen nőtt a bizonyítékok száma a dúla által támogatott szülések előnyeivel kapcsolatban. Tizenhat olyan ellenőrzött tanulmányt publikáltak, melyekben több mint 5000 véletlenszerűen kiválasztott nő szerepelt.</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <img src={Pic3}/>
                    <div class="blog-racs-text">
                        <p class="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                        <h2 class="blog-racs-title">Dúlatréningre menni jó</h2>
                        <p class="blog-racs-description">Készülődöm. Holnapután dúlatréningre megyek. Körülbelül harminchatodszorra. Ugyanolyan izgalommal és várakozással a szívemben, mint amikor először ültem be résztvevőként a csoportba. Ma már én kísérem a csoportokat, de van, ami nem változik. A bizalom légköre, a női tapasztalatok, az elinduló önismereti folyamatok és el nem sírt könnyek, az önfeledt nevetések, a sűrű csendek minden tréningen velünk […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <img src={Pic4}/>
                    <div class="blog-racs-text">
                        <p class="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                        <h2 class="blog-racs-title">A Lány és a Kisfiú</h2>
                        <p class="blog-racs-description">A Lány alig több mint 20 éves. Megkérdőjelezhetetlenül, a kezdetektől tudta, hogy mi az, akit és amit nagyon szeretne. A Kisfiút, még akkor is, ha apa nélkül neveli majd fel, és azt, hogy az otthonában szülhesse meg a babáját. A nappaliban áll a szülőmedence. Benne áramlik a Lány. Szabadon mozog, siklik, hajlik, elmerül. Csendben figyelem […]</p>
                    </div>                
                </div>}
    
                {<div className="picture-gal">
                    <img src={Pic5}/>
                    <div class="blog-racs-text">
                        <p class="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                        <h2 class="blog-racs-title">Nyílt hétvége a Békés Dúlakörrel</h2>
                        <p class="blog-racs-description">Ha várandós vagy, és úgy érzed, kevés az az idő, amit a szakemberek rád szánnak… Ha lenne egy csomó kérdésed, de azt sem tudod, hol kezdjed… Ha nehezen igazodsz el a rád zúduló információk tengerében…ez a program segít megtalálni a saját utadat. GYERE EL KÖRÜNKBE, BESZÉLGESS VELÜNK, INFORMÁLÓDJ A BÉKÉS DÚLAKÖR NYÍLT HÉTVÉGÉJÉN. 2017. MÁJUS 27-28-ÁN […]</p>
                    </div>    
                </div>}
    
                {<div className="picture-gal">
                    <img src={Pic6}/>
                    <div class="blog-racs-content">
                        <p class="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                        <h2 class="blog-racs-title">Szülés és születés napja a Békés Dúlakörrel</h2>
                        <p class="blog-racs-description">Amiről máshol nem hallunk eleget – interaktív előadások és workshopok Szeretettel várunk minden kismamát és gyermeket váró párt, továbbá minden téma iránt érdeklődőt, aki szeretne többet megtudni a várandósság és a családdá válás lelki aspektusairól, illetve felkészülten és kompetensen szeretne megérkezni a gyermekvállalás kapujába. Egy gyönyörű, bensőséges helyszínre, a Zen kertbe invitálunk benneteket, ahol […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <img src={Pic7}/>
                    <div class="blog-racs-content">
                        <p class="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                        <h2 class="blog-racs-title">Ki fél a szüléstől?</h2>
                        <p class="blog-racs-description">Talán meglepő, de az elmúlt években egyre gyakrabban tapasztalom azt, hogy nem az anya, hanem maga a szülészorvos. “Fenyegető, hüvelyi szülésre készülök!” – hangzott egy szülész-nőgyógyász szájából, és én döbbenetemből ocsúdva azóta is próbálom értelmezni, vajon mi fenyegeti? 15 éve kísérek szüléseket kórházakban, különböző orvosokkal és szülésznőkkel. Ez alatt az idő alatt nagyon sokféle személyiségű, […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <img src={Pic8}/>
                    <div class="blog-racs-content">
                        <p class="blog-racs-catagory"><i className="far fa-calendar"> 2016.10.13.</i></p>
                        <h2 class="blog-racs-title">A csend fia</h2>
                        <p class="blog-racs-description">A december beköszöntével érkezett. Sötétedés után indult, kora este, csöndben, finoman. Édesanyja szinte nem is érezte az összehúzódásokat, melyek mégis egyre nagyobbra nyitották előtte a kaput. Nyugodt és lassú folyamat volt, örömteli adventi várakozás. A szülőszoba falán még az óra sem járt. Háromnegyed kilencet mutatott, és én viccelődtem, hogy úgy látszik, ebben a szobában minden […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <img src={Pic9}/>
                    
                </div>}
                {<div className="picture-gal">
                    <img src={Pic10}/>
                    
                </div>}
                {<div className="picture-gal">
                    <img src={Pic11}/>
                    
                </div>}
                
            </Masonry>
    
             
        </div>
      )
}
