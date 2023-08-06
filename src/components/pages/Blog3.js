import React from "react";
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import "../../CSS/blog.css"

import Pic40 from "../../image/blog/blog-40-hero-szulesfelkeszites-szardinian-2.png";
import Pic41 from "../../image/blog/blog-41-hero-bekes-dulak.png";
import Pic42 from "../../image/blog/blog-42-hero-szulesfelkeszites-szardinian-1.png";
import Pic43 from "../../image/blog/blog-43-hero-hatartalanul.png";
import Pic44 from "../../image/blog/blog-44-hero-megalakult-a-bekes-dulakor.png";
import Pic45 from "../../image/blog/blog-45-hero-barcsak-megvalosulna.png";
import Pic46 from "../../image/blog/blog-46-hero-ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-2.png";
import Pic47 from "../../image/blog/blog-47-hero-ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-1.png";
import Pic48 from "../../image/blog/blog-48-hero-lanybol-anyava.png";
import Pic49 from "../../image/blog/blog-49-hero-dulakepzes-avagy-egy-noi-kor-ereje.png";
import Pic50 from "../../image/blog/blog-50-hero-az-egyes-beavatkozasok-elonyeirol.png";
import Pic51 from "../../image/blog/blog-51-hero-gondolatok-a-bizalomrol-es-a-biztonsagrol.png";
import Pic52 from "../../image/blog/blog-32-hero-a-szuleszeti-beavatkozasok-elonyeirol-hatranyairol-es-letjogosultsagarol.png";
import Pic53 from "../../image/blog/blog-53-hero-hol-segit-a-dula.png";
import Pic54 from "../../image/blog/blog-54-hero-szuleselmeny.png";
import Pic55 from "../../image/blog/blog-55-hero-padon-ulve.png";
import Pic56 from "../../image/blog/blog-56-hero-szeptemberben-ujra-lesz-dulakepzes.png";
import Pic57 from "../../image/blog/blog-57-hero-dulakor-tihanyban.png";
import Pic58 from "../../image/blog/blog-58-hero-babak-akiknek-jelen-lehettem-a-szuletesuknel.png";
import Pic59 from "../../image/blog/blog-59-hero-megujulas.png";
import Pic60 from "../../image/blog/blog-60-hero-miert-eppen-gyermekaldas.png";
import Pic61 from "../../image/blog/blog-61-hero-konyheti-pszichofesztival-a-radayban.png";
import Pic62 from "../../image/blog/blog-62-hero-utitars.png";


export default function Blog3() {
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
                <Link to="/szulesfelkeszites-szardinian-2"><img src={Pic40}/></Link>
                <div className="blog-racs-content">
                <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.07.13.</i></p>
                <h2 className="blog-racs-title"><Link to="/szulesfelkeszites-szardinian-2">Szülésfelkészítés Szardínián 2.</Link></h2>
                <p className="blog-racs-description">Megérkezés A repülés élménye leírhatatlan. Elképesztő, mély, felejthetetlen katarzis. Határtalan érzés, határokon innen és túl. A látvány lenyűgöző volt. Fák, mezők, falvak, szántóföldek, tekergő utak, pamacsfelhők, és a kék árnyalatai: tengerkékek és égszínkékek. 17 óra 18 percet mutatott az órám, mikor leszálltunk. Arra gondoltam, hogy a vendéglátóim már itt várnak rám és talán ők is ugyanúgy izgulnak, […]</p>
            </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/bekes-dulak"><img src={Pic41}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.06.25.</i></p>
                    <h2 className="blog-racs-title"><Link to="/bekes-dulak">Békés Dúlák</Link></h2>
                    <p className="blog-racs-description">2011. június 4. szombat  Eljött a várva várt esemény, a Békés Dúlaműhely 1. csoportjának záróvizsga napja, ahol a dúlák előbb írásban, majd szóban is számot adtak a tudásukról. A csoport tagjai két évvel ezelőtt döntöttek úgy, hogy az alapképzés után tovább szeretnék bővíteni az ismereteiket annak érdekében, hogy minél felkészültebben segíthessék a hozzájuk forduló anyákat és párjaikat. Megtisztelőnek éreztem, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/szulesfelkeszites-szardinian-1"><img src={Pic42}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.07.08.</i></p>
                    <h2 className="blog-racs-title"><Link to="/szulesfelkeszites-szardinian-1">Szülésfelkészítés Szardínián 1.</Link></h2>
                    <p className="blog-racs-description">Hívás, indulás Pontosan május közepén Szardíniáról érkezett egy levél a postafiókomba. Egy ott élő magyar anya írt nekem, aki a várandóssága utolsó harmadában jár. Úgy tervezte a párjával, hogy az ottani egyik kórház szülészetén fog majd szülni, de úgy érezte, hogy nagyobb biztonságot jelentene számára, ha lenne mellette valaki, aki ezekben az  órákban az anyanyelvén segíti. Írtam már róla, […]
</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/hatartalanul"><img src={Pic43}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.05.16.</i></p>
                    <h2 className="blog-racs-title"><Link to="/hatartalanul">Határtalanul</Link></h2>
                    <p className="blog-racs-description">Tíz évvel ezelőtt, amikor a férjem létrehozta az első e-amil címemet, még egy érdeklődő, de bizonytalan kisdiák izgalmával ültem a számítógépünk elé. Ő szorgosan és nagy türelemmel tanítgatott a szövegszerkesztésre, táblázatkezelésre, én pedig hosszasan keresgéltem a különböző betűk leírására szolgáló billentyűket. 🙂 Aztán amikor a Nők Lapja Cafén elkezdtem cikkeket írni, hirtelen kitágult a világ. Különleges, és […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
                <Link to="/megalakult-a-bekes-dulakor"><img src={Pic44}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.05.13.</i></p>
                    <h2 className="blog-racs-title"><Link to="/megalakult-a-bekes-dulakor">Megalakult a Békés Dúlakör</Link></h2>
                    <p className="blog-racs-description">2011. május 4-én este a továbbképzéseknek helyet adó Békés Dúlaműhely két csoportjának összeolvadásából megalakult a Békés Dúlakör. Tagjai olyan dúlák, akik már elvégezték az alapképzést, de fontosnak tartják a közös tapasztalatmegosztást és a folyamatos tanulást. Nagyon szeretem őket. Jó velük együtt lenni, látni a sokszínűségüket, és tudni azt, bár különböző egyéniségek vagyunk, mégis közös alapelvek mentén kísérjük […]</p>
                </div>                
            </div>}

            {<div className="picture-gal">
                <Link to="/barcsak-megvalosulna"><img src={Pic45}/></Link>
                <div className="blog-racs-text">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.05.09.</i></p>
                    <h2 className="blog-racs-title"><Link to="/barcsak-megvalosulna">Bárcsak megvalósulna!</Link></h2>
                    <p className="blog-racs-description">Az MTV 1 Nappali című műsorában egy, a szülésére velem készülő anya nyilatkozata hallható, majd a stúdióbeszélgetésben Dr. Bálint Sándor szülész-nőgyógyász beszél az otthonszülés szabályozásáról, valamint arról, hogy a dúlai szemléletnek be kellene kerülnie az egyetemi oktatásba. 🙂[…]</p>
                </div>    
            </div>}

            {<div className="picture-gal">
            <Link to="/ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-2"><img src={Pic46}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.04.13.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-2">Ahogy egy szülészorvos látja a dúlaságot és a jövőt – 2.</Link></h2>
                    <p className="blog-racs-description">Milyen helyzet az, amikor a dúla előrébb jöhet és inkább az ő tevékenységére van szükség? Ez kimondottan a vajúdásnak az időszaka. Amikor pedig a kitolási szakhoz érkezünk, akkor már inkább a szülésznő és az orvos kerül előtérbe és a dúlák általában tudják, hogy ez az az időszak, amikor ők inkább háttérbe húzódnak, de két fájás közt […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-1"><img src={Pic47}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.04.06.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-1">Ahogy egy szülészorvos látja a dúlaságot – 1</Link></h2>
                    <p className="blog-racs-description">Néhány hónappal ezelőtt a Kossuth Rádió Vendég a háznál című műsorában egy olyan párral készítettek interjút, akiknek két gyermekük születésénél is jelen lehettem. A műsor készítői úgy gondolták, hogy a szülők és a dúla mellett egy szülész-nőgyógyász orvost is megkérdeznek arról, hogy neki milyen tapasztalatai vannak a dúlás szülésekről. A következőkben – két részletben – […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/lanybol-anyava-valni"><img src={Pic48}/></Link>
                <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.02.15.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/lanybol-anyava-valni">Lányból anyává válni</Link></h2>
                    <p className="blog-racs-description">Talán napra pontosan 20 éve, hogy megtudtam, anya leszek. Első gyermekem megfoganásával egy olyan életem végéig tartó kalandos utazásra indultam, aminél nem tudok gyönyörűbbet, nehezebbet, örömtelibbet és felelősségteljesebbet elképzelni. Lányaim vannak, és hát az elsőszülöttem is lassacskán az anyaságra készülődik. Ennek kapcsán és nem utolsósorban azért, mert a hivatásom gyakorlása során is kísérhetem azt a […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/dulakepzes-avagy-egy-noi-kor-ereje"><img src={Pic49}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.01.05.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/dulakepzes-avagy-egy-noi-kor-ereje">Dúlaképzés – avagy egy női kör ereje</Link></h2>
                    <p className="blog-racs-description">Hat éve szervezek és tartok nagy örömmel dúlatréningeket. A szervezés során számtalan érdeklődővel beszélek telefonon és bizony sokszor nem könnyű minden kérdésre egy rövid telefonbeszélgetésben vagy emailben megfogalmazni a választ. A praktikus információkról, a képzés tematikájáról, előadóiról vagy a helyszínről jól körülírható, pontos választ tudok adni, ami segítheti a jelentkezőket a felkészülésben, de vannak olyan dolgok, amelyek csak […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/az-egyes-beavatkozasok-elonyeirol-hatranyairol-es-kockazatairol"><img src={Pic50}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2011.01.04.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/az-egyes-beavatkozasok-elonyeirol-hatranyairol-es-kockazatairol">Az egyes beavatkozások előnyeiről, hátrányairól és kockázatairól</Link></h2>
                    <p className="blog-racs-description">A dúlák a szó eredeti értelmében olyan segítő asszonytársak, akik maguk is szültek már.  Ennek az élménynek az átélése során megélt tapasztalataik segítik őket abban, hogy más vajúdó nőknek megfelelő érzelmi és fizikai támaszt tudjanak nyújtani a szülés óráiban. A régebbi időkben és még ma is az otthoni szüléseknél valóban ez a támogatásuk legfőbb alapja. De vajon elég-e […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/gondolatok-a-bizalomrol-es-a-biztonsagrol"><img src={Pic51}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.10.26.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/gondolatok-a-bizalomrol-es-a-biztonsagrol">Gondolatok a bizalomról és a biztonságról</Link></h2>
                    <p className="blog-racs-description">Több mint két hete, hogy a rendőrség őrizetbe vette Dr. Geréb Ágnest, és már 22 éve, hogy nem születik megnyugtató szabályozás az intézményen kívüli szülések feltételeiről. Ez alatt az idő alatt közel 3 500 nő hozta világra a gyermekét otthon, ők is, és a az őket segítő bábáik is vállalva azokat a kockázatokat, amelyek a […]</p>
                </div> 
            </div>}

            {<div className="picture-gal">
            <Link to="/hol-segitek-en"><img src={Pic52}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.10.20.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/hol-segitek-en">Hol segítek én?</Link></h2>
                    <p className="blog-racs-description">A válasz benne van már az előző blogbejegyzésemben is, de most arról írok, hogy hogyan jutottam el döntésemben oda, hogy jelenleg csak kórházi szüléseknél dúláskodom. Hát nem könnyen. Tökéletesen egyetértek ugyanis a dúlaság azon alapelvével, mely szerint a dúla tiszteletben tartva az anya döntését, ott segíti az anyát, ahol ő szülni kíván. Ha az  anya úgy […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/hol-segit-a-dula"><img src={Pic53}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.10.19.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/hol-segit-a-dula">Hol segít a dúla?</Link></h2>
                    <p className="blog-racs-description">Magyarországon az első dúlák otthonszüléseknél segédkeztek a 90-es évek második felében. Külön képzést kezdetben nem terveztek a számukra, mert spontán választódtak ki azok közül az anyák közül, akik átélték a háborítatlan szülés különleges élményét, és segíteni szerettek volna másoknak is a vajúdás és a szülés óráiban. Azután lassan a kórházban szülő nők igényei között is […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/szuleselmeny"><img src={Pic54}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.10.06.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szuleselmeny">Szülésélmény</Link></h2>
                    <p className="blog-racs-description">Idén tavasszal megismertem egy kedves, fiatal lányt. Dórinak hívják, pszichológus hallgató.  Szakdolgozatának megírása előtt állt amikor találkoztunk, és a szülésről, születésről, a szülés élményéről és a dúlai hivatásról beszélgettünk. Szeretném segíteni az ő munkáját, ezért kérek minden olyan anyát, akinek  egy gyermeke van, és ő még három év alatti, töltse ki és küldje vissza a kérdőívet Dórinak. Úgy gondolom, érdekes […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/a-padon-ulve"><img src={Pic55}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.09.03.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/a-padon-ulve">A padon ülve</Link></h2>
                    <p className="blog-racs-description">Éjszaka volt. A szülőszoba előtti váróhelyiség egyik padján ültem. Aki mellettem ült, arra kért, legyek vele ezekben az órákban, hogy ne legyen egyedül. Most nem ő szült, hanem a nővére.  Milyen érdekes! – gondoltam. Néhány évvel ezelőtt pont fordítva volt. Akkor mi voltunk bent az ajtón túl, és a testvére ült odakinn a váróban. Különös […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/szeptemberben-ujra-lesz-dulakepzes"><img src={Pic56}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.08.26.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/szeptemberben-ujra-lesz-dulakepzes">Szeptemberben újra lesz dúlaképzés</Link></h2>
                    <p className="blog-racs-description">Emlékszem, milyen nagy izgalommal készültünk hat évvel ezelőtt trénertársammal az általunk meghirdetett és szervezett első dúlatréningre! A tematika összeállítása, átgondolása és az előadók meghívása mellett helyszínt kellett találnunk a vártnál nagyobb számú jelentkező elszállásolására, meg kellett szerveznünk a meleg étkezés és a tréninghez szükséges tárgyi feltételek biztosítását. Ma már ezek a szervezési feladatok jóval rutinosabban mennek, de van, ami […]</p>
                </div>
            </div>}

           

            {<div className="picture-gal">
            <Link to="/dulakor-tihanyban"><img src={Pic57}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.08.23.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/dulakor-tihanyban">Dúlakör Tihanyban</Link></h2>
                    <p className="blog-racs-description">Mindannyian nagyon vártuk augusztus első hétvégéjét. Már lassan másfél éve, hogy megalakult a dúlakörünk és azóta havonta találkozunk, hogy közösen, tapasztalatokat cserélve tanuljunk lélektanról, dúlai szolgálatról, szülésről, születésről és még sok minden másról. De a továbbképzéseken kívül másért is fontos nekünk, hogy rendszeres időközönként együtt lehessünk. Vágyunk arra, hogy közösen gyűjtsünk élményeket és hogy megoszthassuk […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/babak-akiknek-jelen-lehettem-a-szuletesuknel"><img src={Pic58}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.07.31.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/babak-akiknek-jelen-lehettem-a-szuletesuknel">Babák, akiknek jelen lehettem a születésüknél</Link></h2>
                    <p className="blog-racs-description">Nézegetem, javítgatom, tesztelgetem ezt az új honlapot. Biztosan van még mit tökéletesítenem rajta, számomra mégis nagy öröm kinyitni az oldalt, mert belépéskor azoknak a kisbabáknak a képei köszöntenek, akiknek ott lehettem a születésüknél. Mosolyogva nézegetem, ahogy váltakozva előbukkannak, és közben megelevenednek az emlékeim. Sokukat én segíthettem először a mamájuk mellére, én takargathattam be őket megszületésük […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/megujulas"><img src={Pic59}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.07.28.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/megujulas">Megújulás</Link></h2>
                    <p className="blog-racs-description">Úgy tűnik, 2010-es esztendő a nagy változások éve az életemben. Hamarosan – épp a 20. házassági évfordulónkon – elköltözünk eddigi családi házas, kertes otthonunkból és hamarosan egy még épülő, kisebb, de modernebb lakásba költözünk. Nagy változás ez a családunk életében, de bízunk benne, hogy ennek a szép és élménydús korszaknak a lezárása egyben valami újnak, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/miert-eppen-gyermekaldas"><img src={Pic60}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.07.26.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/miert-eppen-gyermekaldas">Miért éppen gyermekáldás?</Link></h2>
                    <p className="blog-racs-description">A honlapom nevét és az első, mostani frissítésig fennálló változat arculatát a férjemtől kaptam ajándékba. Nagyon szeretem. A férjemet is, no meg a honlapom címét is. 🙂 Egészen kicsi koromtól vágytam gyermekekre. Akkoriban főként plüssállatokat,  valamint kedvenc rongybabámat Boncát tologattam babakocsiban. Később egyre inkább nőtt az érdeklődésem a gyermeklélektan iránt. Sokat gondolkodtam és olvastam arról, […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/konyvheti-pszichofesztival-a-radayban"><img src={Pic61}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.07.24.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/konyvheti-pszichofesztival-a-radayban">Könyvheti PszichoFesztivál a Rádayban</Link></h2>
                    <p className="blog-racs-description">Június 6-ára meghívást kaptam a PszichoFesztivál szervezőitől, hogy Kísérők az élet kapujánál címmel tartsak előadást a dúla, a szülésznő és az orvos szerepéről, kompetenciáiról, az általuk nyújtott támogatás lényegéről a várandósság és a szüléskísérés folyamán. A rendezvényt a Mindennapi Pszichológia c. folyóirat munkatársai szervezték. Az idei Ünnepi Könyvhét specialitásaként a pszichológiával kapcsolatos könyv- és folyóirat […]</p>
                </div>
            </div>}

            {<div className="picture-gal">
            <Link to="/utitars"><img src={Pic62}/></Link>
            <div className="blog-racs-content">
                    <p className="blog-racs-catagory"><i className="far fa-calendar"> 2010.07.22.</i></p>
                    <h2 className="blog-racs-title"> <Link to="/utitars">Útitárs</Link></h2>
                    <p className="blog-racs-description">Ismét készenlétben állok, egy hamarosan megszülető kisbaba érkezését várom. A várandósság 37. hetétől egy kicsit már másképpen élem a mindennapjaimat. Persze nap nap után végzem az előre eltervezett dolgaimat, találkozom a hozzám fordulókkal, vezetem a háztartást, nevelem a gyerekeimet, de bizonyos dolgokban figyelmesebb vagyok. Az autómban a benzinszintet jelző mutatót nem engedem a nullához közelíteni, […]</p>
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

