import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic1 from "../../image/szulestort/szules_story_01_hero.png";
import Pic2 from "../../image/szulestort/szules_story_02_hero.png";
import Pic3 from "../../image/szulestort/szules_story_03_hero_fele_lettem.png";
import Pic4 from "../../image/szulestort/szules_story_04_hero_csaszarmetszes.png";
import Pic5 from "../../image/szulestort/szules_story_05_hero_tokeletes.jpg";
import Pic6 from "../../image/szulestort/szules_story_06_hero_anyatanc.jpg";
import Pic7 from "../../image/szulestort/szules_story_07_hero_nagy_utazas.png";
import Pic8 from "../../image/szulestort/szules_story_08_hero_hideg_ho_melegseg.png";
import Pic9 from "../../image/szulestort/szules_story_09_hero_nagy_ut.png";
import Pic10 from "../../image/szulestort/szules_story_10_hero_queen.png";
import Pic11 from "../../image/szulestort/szules_story_11_hero_szules_kozben.png";
import Pic12 from "../../image/szulestort/szules_story_12_hero_lakoma_koncert.png";
import Pic13 from "../../image/szulestort/szules_story_13_hero_lena.png";
import Pic14 from "../../image/szulestort/szules_story_14_hero_talaltam_erot.png";
import Pic15 from "../../image/szulestort/szules_story_15_hero_az_ut.png";
import Pic16 from "../../image/szulestort/szules_story_16_hero_kulonleges_ajandek.png";

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
                    <Link to="/kortars-kontosbe-bujt-javasasszony"><img src={Pic1}/></Link>
                    <div className="blog-racs-content">
                    <p className="blog-racs-catagory"></p>
                    <h2 className="blog-racs-title"><Link to="/kortars-kontosbe-bujt-javasasszony">Kortárs köntösbe bújt javasasszony?</Link></h2>
                    <p className="blog-racs-description">Kislányunk, az elragadó csöppség, Júlia immáron 13 hónapos múlt, amikor ezen sorokat írom. Mindmáig határtalan boldogsággal gondolok vissza az időszakra, amikor vártuk érkezését és a születésének katartikus élményét pedig mindörökre életem legfelemelőbb emlékeként őrzöm. Feleségem a terhesség korai időszakában vetette fel, hogy szeretne dúlával együtt készülni és örülne, ha én is csatlakoznék. Nos, akkoriban én még az apás szülés gondolatával is […]</p>
                </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/csodak-marpedig-vannak"><img src={Pic2}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/csodak-marpedig-vannak">Csodák márpedig vannak!</Link></h2>
                        <p className="blog-racs-description">2017. októberében a harmadik lombikprogramunk volt, ahol egy embrió elkezdett fejlődni, amit a protokoll szerinti vérvétel HCG tartalma kimutatott. Bár örömünk határtalan volt, a szám alacsonyabb volt a biztatónál…de azért mi bíztunk…azonban az két nap múlva nem duplázódni, de csökkenni kezdett. Az imádott meddőségi dokink a Kaáli intézetben azt mondta, hogy abba kell hagyni a […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/fele-lettem-a-gyermeknek"><img src={Pic3}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/fele-lettem-a-gyermeknek">“Fele lettem a gyermekemnek és fele lettem a szülőtársamnak…”</Link></h2>
                        <p className="blog-racs-description">Soha nem foglalkoztam sokat a szülés-születés témával, őszintén szólva nem is értettem, mi ez a giga nagy felhajtás a természetes szülés kontra császármetszés körül. Azt tudtam, hogy arra vágyom, hogy a gyermekem biztonságban jöjjön a világra. Ahogy megfogant a babánk, és én egyre többet olvastam a témában, láttam mennyire árnyalt a kép, és mennyire fontos […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/csaszarmetszes-utani-huvelyi-szules"><img src={Pic4}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/csaszarmetszes-utani-huvelyi-szules">Császármetszés utáni hüvelyi szülés – Sikerült!</Link></h2>
                        <p className="blog-racs-description">Első kisfiam második születésnapja után egy hónapra vártuk a kistesót. Katarban éltünk épp, de rögtön tudtam, hogy otthon akarom, hogy megszülessen. Mivel császár utáni hüvelyi szülésre készültem tudtam, hogy a tökéletes csapatra lesz szükségem. Azt is tudtam, hogy mindenképp szeretnék dúlát, és Emőkét rögtön nagyon szimpatikusnak tálaltuk a férjemmel. Közvetlen, természetes, jó humorú, informatív. Imádtam […]</p>
                    </div>                
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/tokeletes"><img src={Pic5}/></Link>
                    <div className="blog-racs-text">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/tokeletes">Tökéletes!</Link></h2>
                        <p className="blog-racs-description">Már nagyon vártam. Elmúlt az a bizonyos kiírt nap. “Ő nem ismeri a naptárat, ő érzi, hogy mikor kell kijönni” mondogattam magamban kedvenc dúlám szavait, és próbáltam elengedni félelmeimet és Őt. Tényleg tudta,mikor van itt az idő, szülinapi ajándéknak szánta magát, Édesapja számára. Már nagyon készült, hisz a Doktor úr érezte a kis fejét, már […]</p>
                    </div>    
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/anyatanc"><img src={Pic6}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/anyatanc">Anyatánc</Link></h2>
                        <p className="blog-racs-description">Ott álltál és olyan közel volt a szemed az enyémhez, hogy semmi mást nem láttam. A barna szemeid mélysége megnyugtatott. Nem hallottam semmi mást, csak a halk szavaidat. Se az orvost, se az ápolót, se senkit. Csak téged hallottalak, amint azt kérdezed tőlem, készen állok-e, hogy ezt a kis embert beengedjem a világba. Fájt, amit […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/nagy-utazas-ferfiszemmel"><img src={Pic7}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/nagy-utazas-ferfiszemmel">Nagy utazás – férfiszemmel</Link></h2>
                        <p className="blog-racs-description">Tudományos munkát végző mérnök emberként a szülés számomra egy technikai feladatnak tűnt, amelyet jól szervezve kell levezényelni, hogy minden a megfelelően menjen végbe úgy, hogy a feleségem és a baba is boldog, egészséges, és a körülményekhez képest fitt legyen a kaland végén. Mélyen hittem, hogy a tudomány világában segítő rutin felvértez minden szükséges intuitív képességgel. […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/hideg-ho-melegseg"><img src={Pic8}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/hideg-ho-melegseg">Hideg, hó, melegség</Link></h2>
                        <p className="blog-racs-description">Noé ma fél éves. Ragyogó napsütés, forró nyári napok. Pár napja almát kanalaz lelkesen. Megtanult forogni, kúszni, mászni, felülni és remegő lábakkal állásba húzza magát. Érzéseit arcával, hangjával kifejezi, felfigyel a nevére és ért néhány szóból és gesztusukból. Hihetetlen nagy lépéseket tett meg az elmúlt hat hónapban, amit én most csak elröppenni éreztem. Hat hónappal […]</p>
                    </div>
                </div>}
    
                {<div className="picture-gal">
                    <Link to="/nagy-utazas"><img src={Pic9}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/nagy-utazas">Nagy utazás</Link></h2>
                        <p className="blog-racs-description">„ A szülés csak szép dolog lehet”- gondoltam én már egészen fiatalon. Ahogy teltek múltak az évek, furcsa tapasztalatokat hallottam olyan nőktől, akik már átélték a szülés élményét. Valami belső hang folyamatosan azt duruzsolta nekem, hogy ez nem lehet igaz, az én szülésem nem lehet ilyen, ez nem természetes. Évről évre, ahogy egyre közelebb kerültem […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/egy-kis-queen"><img src={Pic10}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/egy-kis-queen">Egy kis Queen</Link></h2>
                        <p className="blog-racs-description">2011. február 4-én, hajnali 3.19-kor megszületett Bori, akivel kis családunk nagycsaláddá vált. Ez a várandósságom is a nálam szokásos „faros baba parával” volt fűszerezve – lásd Barnabás születésének történetét, itt bővebben nem részletezem. Szerencsére a szokásos össze-vissza forgás után az utolsó hetekben fejjel lefelé állapodott meg Bori. Január 23-án, három héttel a kiírt időpont […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/szules-kozben-ceget-alapitok"><img src={Pic11}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/szules-kozben-ceget-alapitok">Szülés közben céget alapítok</Link></h2>
                        <p className="blog-racs-description">Első lányom, Hédi úgy 3 hónapos lehetett, amikor egy esti fürdetés utáni szoptatás közben egy pillanatra elbóbiskoltam. „Álmomban” Hédi így szólt hozzám:  “Hamarosan testvért kell szülnöd Nekem.” Élénken emlékszem, ahogy felriadtam a tudatomban dübörgő kedves, ám határozott felszólítástól, majd megpillantva a karjaimban békésen szunyókáló csöppséget teljesen eltöltött a bizonyosság, hogy ez így lesz. Két hónap […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/lakoma-koncert-transz-baba"><img src={Pic12}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/lakoma-koncert-transz-baba">Lakoma, koncert, transz, baba</Link></h2>
                        <p className="blog-racs-description">2009. február 22-én töltöttem be életem 28. életévét, és erre a napra vártam kalandos 28 évem legszebb szülinapi ajándékát, első lányom, Hédi születését. A várandósság kilenc hónapja alatt mozgékony, tevékeny, aktív kismama voltam. Meg is kaptam több felől, hogy a gyermekem nagy eséllyel hiperaktív lesz, pihenést nélkülöző életmódom miatt, de a kiírt dátumra már olyan […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/lena"><img src={Pic13}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/lena">Léna</Link></h2>
                        <p className="blog-racs-description">Terhességem 38-39. hete felé azon merengtem, hogy vajon miért is kerestem én fel dúlát.  Azért merült fel a kérdés bennem, mert ekkor már annyira evidensnek tűnt, hogy dúlával, nevezetesen Emőkével szülök, mintha a dolgoknak ez lenne a bejáratott módja. Ahogy vásárolni pénztárcával megyünk. Pedig senkivel nem beszéltem korábban, aki dúlával szült volna kórházban, senkitől személyes […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/talaltam-erot-valahogy-mindig-akadt"><img src={Pic14}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/talaltam-erot-valahogy-mindig-akadt">“Találtam erőt, valahogy mindig akadt”</Link></h2>
                        <p className="blog-racs-description">Az első kisfiam, Iván császármetszéssel jött a világra. Egy agyi rendellenesség miatt ezt ajánlották az orvosok abban a kórházban, ahol végül a 36. héten megszültem őt. Nem ott, nem úgy terveztem a szülésemet, természetes körülményeket, háborítatlan szülést szerettem volna, de nem sikerült. Azt azonban elhatároztam, hogy ha valaha újra várandós leszek, másképp történik minden. Bele […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/az-ut"><img src={Pic15}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/az-ut">Az Út</Link></h2>
                        <p className="blog-racs-description">A legfontosabb dolog, hogy úgy szüljetek, ahogy nektek a legjobb SZERINTETEK. Senki más véleménye ne térítsen el, főleg ne a “Ha én túléltem így/úgy, te is túl fogod!”, “Nem volt kívánságműsor nekem sem!”, “A lényeg a gyerek, ne legyél önző!” mondatok és társai. Nekem nagyon sokat számított a kórházban, hogy tudtam, hogy ott van velem […]</p>
                    </div>
                </div>}

                {<div className="picture-gal">
                    <Link to="/kulonleges-ajandek"><img src={Pic16}/></Link>
                    <div className="blog-racs-content">
                        <p className="blog-racs-catagory"></p>
                        <h2 className="blog-racs-title"><Link to="/kulonleges-ajandek">Különleges ajándék</Link></h2>
                        <p className="blog-racs-description">Már az különleges érzésekkel töltött el, amikor a terhességi teszt megmutatta egy kis élet megjelenését. Napokig furcsa mámorban jártam be dolgozni, és megfogalmazódott bennem, hogy most már semmi sem lesz olyan, mint eddig volt, és tele várakozással tekintettem a jövő elé. Izgalmas volt, hogy én már tudom, amit még másnak nem mondhatok el, mert a […]</p>
                    </div>
                </div>}
                
            </Masonry>
    
             
        </div>
      )
}
