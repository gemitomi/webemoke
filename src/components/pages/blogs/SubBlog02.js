import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"


import Blog02Pic1 from "../../../image/blog/blog_02_hero_dulahatas.png";
import Blog02Pic2 from "../../../image/blog/blog_02_dulahatas.png";
import Blog02Pic3 from "../../../image/blog/blog_02_a_dulahatas.png";
import Blog02Pic4 from "../../../image/blog/blog_02_b_dulahatas.png";
import Blog02Pic5 from "../../../image/blog/blog_02_c_dulahatas.png";
import Blog02Pic6 from "../../../image/blog/blog_02_d_dulahatas.png";
import Blog02Pic7 from "../../../image/blog/blog_02_e_dulahatas.png";
import Blog02Pic8 from "../../../image/blog/blog_02_f_dulahatas.png";
import Blog02Pic9 from "../../../image/blog/blog_02_g_dulahatas.png";

export default function SubBlog02() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog02Pic1} alt="A dulahatas-kutatasok, eredmenyek"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">A dúlahatás - kutatások, eredmények</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2023. január 20.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                      <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog02Pic2} alt="A dulahatas-kutatasok, eredmenyek"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Az elmúlt évtized során jelentősen nőtt a bizonyítékok száma a dúla által támogatott szülések előnyeivel kapcsolatban. Tizenhat olyan ellenőrzött tanulmányt publikáltak, melyekben több mint 5000 véletlenszerűen kiválasztott nő szerepelt.
                            Ezek a vizsgálatok Belgiumban, Botswanában, Kanadában, Finnországban, Franciaországban, Görögországban, Guatemalában, Dél-Afrikában és az Egyesült Államokban készültek, és azt vizsgálták, hogy vajon egy tapasztalt nő által nyújtott érzelmi és fizikai támogatás megváltoztatja-e a vajúdás hosszát, a fájdalomcsökkentő gyógyszerek használatának mértékét, az epidurális érzéstelenítés és egyéb szülészeti beavatkozások előfordulási arányát, valamint hogy milyen hatása van az ilyen jellegű támogatásnak a baba egészségére és az anya későbbi viselkedésére. 
                        </p>

                    </div>
                </div>

                <p>
                    A vizsgálatokban szereplő összes nő egészséges volt, várandóssága pedig problémamentes. Majdnem minden nő ekkor élte át első várandósságát.
                </p>

                <p>
                    Bármely egészségügyi folyamat előnyeivel kapcsolatos értékelés esetében tudni kell, hogy az eredmények statisztikailag szignifikánsak vagy véletlenszerűek-e. A dúla általi támogatás hatásaival kapcsolatos tanulmányokat pontos statisztikai módszerekkel elemezték, és hiteles orvosi folyóiratokban publikálták őket.
                </p>

                <p>
                    Két kivétellel az összes anyát akkor kérték fel a részvételre, mikor megérkeztek a kórházba, és elmondták nekik, hogy elképzelhető, hogy a vajúdás és a szülés során folyamatosan mellettük lesz egy nő (dúla), de részvételüktől függetlenül ugyanazt az orvosi ellátást kapják. Két tanulmányban (Cleveland és Oakland) az anyák a szülés előtti időszakban egyeztek bele a vizsgálatban való részvételbe, de csak a kórházban osztották be őket a kontrollcsoportba vagy a dúla általi kíséréssel szülők csoportjába.
                </p>

                <p>
                    Az időnként szünetelő és a folyamatos érzelmi támogatás összehasonlítása.
                </p>

                <p>
                    A vizsgálatok során felmerült egyik érdekes kérdés az volt, hogy vajon a folyamatos vagy az időnként szünetelő támogatás-e az előnyösebb.
                </p>

                <p>
                    Egy nemrégiben készült tanulmány, melyet egyik szerzőnk végzett kollégáival, összehasonlít öt vizsgálatot, melyek során a dúla az igen rövid étkezési vagy tisztálkodási szünetektől eltekintve folyamatosan az anya mellett maradt, hat olyan vizsgálattal, melyekben a támogató nő hosszabb időre is elhagyta az anyát egyéb feladatok elvégzése miatt. Az öt, időnként szünetelő támogatást vizsgáló tanulmányt, valamint a korábbi öt folyamatos támogatást vizsgáló tanulmányt kiegészítették még öttel, így a felsorolt tanulmányok száma tizenöt.
                </p>

                <p>
                    A legfontosabb megállapítások a következők voltak. A folyamatos vajúdási támogatás a tíz tanulmányban 31 százalékkal csökkentette a gyógyszeres fájdalomcsillapítás valószínűségét, 50 százalékkal az oxitocin használatát, 34 százalékkal a fogós szülések számát és 45 százalékkal a császármetszéseket. Ezek az eredmények azt jelzik, hogy a dúla alkalmankénti, megszakított jelenléte nem biztosítja azokat az előnyöket, melyet a folyamatos támogatás nyújt az anyák számára.
                </p>

                <p>
                    Az eredmények különbségét a támogatás idején kívül az is magyarázhatja, hogy az időnként szünetelő támogatást nagy részben gyakorlott bábák vagy szülésznő-tanulók nyújtották, míg a folyamatos támogatást nyújtó nők nagy része dúla volt, tehát olyan személy, aki nem az egészségügyi szakszemélyzethez tartozik.
                </p>

                <p>
                    Egy másik lehetőség az, hogy a dúlák által nyújtott támogatás annyiban más, hogy igazán érdeklődnek a feladat iránt, képesek csak egy személyre összpontosítani a vajúdás teljes időtartama alatt, és hisznek abban, hogy az érzelmi és pszichológiai támogatás fontos tevékenység.
                </p>

                <p>
                    Mivel a tanulmány időnként szünetelő támogatottságú csoportja olyan körülmények között szült, ahol egyébként is alacsony volt a fogó alkalmazásának (6%) és a császármetszésnek (7%) az aránya, talán nem lett volna reális bármi javulást várnunk ezen a téren. Azonban meg kell jegyeznünk, hogy az oxitocin adagolása és a gyógyszeres fájdalomcsillapítás magasabb százalékban fordult elő, mint a folyamatos támogatást élvező csoportok esetében, és ez az időnként szünetelő támogatást nyújtó dúla jelenlétével jelentéktelen mértékben változott.
                </p>

                <p>
                    Ez a tanulmány alátámasztja Dr. Kieran O’Driscoll, a dublini Országos Szülészeti Kórházban tett klinikai megfigyeléseit, melyek szerint, ha folyamatos érzelmi és fizikai támogatást nyújtó bábatanonc csak öt percre is elhagyja az anyát, mikor visszatér, majdnem egy órába kerül az anyát a korábbi nyugalmas állapotába visszazökkentenie.
                </p>

                <p>
                    A tanulmány eredményei, valamint egyéb klinikai megfigyelések alapján azt javasoljuk, hogy a dúla a lehető legrövidebb időre hagyja csak el az anyát még akkor is, ha az hatékony fájdalomcsillapítást, epidurális érzéstelenítést kap.
                </p>

                <h4>A VAJÚDÁS HOSSZA</h4>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog02Pic3} alt="A dulahatas-kutatasok, eredmenyek"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Két, Guatemalában készült tanulmány hívta fel a figyelmünket a vajúdás hosszára az első baba születésekor. Ezek a tanulmányok egy nagyon forgalmas szülészeteken készültek. Rövid összegzésük a következő. 
                        </p>

                        <p>
                            Majdnem az összes anya a vajúdás korai szakaszában érkezett a kórház szülészeti osztályára, amikor a méhösszehúzódások már megkezdődtek, de a méhszáj tágulása még csak egy-két centimétert ért el. Amint az anya beleegyezett a vizsgálatban való részvételbe, véletlenszerűen beosztották a dúla nélküli vagy a dúlai támogatást élvező csoportba.
                        </p>

                    </div>
                </div>

                <p>
                    A dúlák csak azután értesültek beosztásukról, hogy az egyik kutató felnyitotta a vizsgálat megkezdése előtt előkészített, addig lezárt borítékot. Ettől a pillanattól kezdve a dúlai támogatást élvezők csoportjában a dúlák elkezdtek dolgozni az anyákkal, míg a dúla nélküli anyák a szokásos ellátást kapták. Az anyák a megfigyelő szobában maradtak, míg a méhszáj tágulása elérte a három-négy centimétert. Ekkor átvitték őket a szülőszobába.
                </p>

                <p>
                    A Guatemalában készült vizsgálatok esetében a kórházi alapelvek nem tették lehetővé családtagok vagy barátok jjelenlétét a szülőszobán a szülések nagy száma (átlagosan naponta hatvan) és a kevés hely miatt. Nem volt elég nővér és segítő ahhoz, hogy egy nőt végig ugyanaz az egy nővér vagy segítő támogasson, sőt, a számuk ahhoz sem volt elég, hogy mindig abban a teremben tartózkodjanak, ahol a hat-hét nő egyszerre vajúdott. A dúla nélküli anyák tehát „egyedül” voltak a vajúdás nagy részében.
                </p>

                <p>
                    A barátok és a család kizárása a húsz-harminc évvel ezelőtti egyesült államokbeli kórházak szülési gyakorlatát tükrözte. Meglepő, hogy az 1950-es években egyedül vajúdtak a nők az Egyesült Államokban, általában altatott, vagy féltudatos, amnéziás állapotban, melyet „alkonyi álomnak” hívtak, és csak egy olyan nővér támogatta az anyát, aki közben sok más vajúdó nőért is felelős volt.
                </p>

                <p>
                    Szinte semmilyen okkal nem engedték meg az apáknak, hogy partnerük mellett legyenek a vajúdás alatt, a szülőszobába pedig egyáltalán nem léphettek be. A „alkonyi álom” nélkül ugyan, de ezt a modellt vették át az 1950-es években Guatemalában, a vezető egyesült államokbeli orvosi és ápolási hatóságok segítségével. Ezek a szabályok és korlátozások az évek során nem változtak, és még akkor is léteztek, amikor Guatemala Cityben a vizsgálatainkat végeztük. (Mindez feltűnő ellentétben állt a pár mérfölddel odébb élő maya indiánok több száz éves szokásaival. Ott az anyát saját anyja, anyósa és egy helyi bába támogatta a vajúdás és a szülés során és a szülés utáni első pár héten. Egy pillanatra sem választották el családjától, otthonától, csecsemőjétől. A vajúdás hosszától függetlenül végig, folyamatosan mellette volt egy vagy több, számára ismerős nő.)
                </p>

                <p>
                    Az első Guatemalában készült vizsgálatban a vajúdás hossza átlagosan tizenkilenc óra volt a rutinellátást kapó (oxitocin és császármetszés nélküli), dúla nélküli csoportban, míg a dúlával szülők csoportjában ez az idő csak kilenc óra volt. Az egyetlen különbség a két csoport között a dúlák által nyújtott folyamatos támogatás volt.
                </p>

                <p>
                    A második vizsgálatban a rutinellátást kapó, dúla nélküli csoportban átlagosan hosszabb ideig vajúdtak – 15,5 óra, míg a másik csoportban 7,7 óráig. Az előző vizsgálathoz hasonlóan itt is a dúla jelenléte volt az egyetlen különbség az ellátás terén. Az anyák életkora, pénzügyi helyzete és életkörülményei tekintetében nem voltak jelentős különbségek. Viszont a kórházba történő felvételkor egy kicsivel nagyobb volt a méhszáj tágulása a dúlás csoportban (átlagosan 1,9 centiméter, ellentétben a dúla nélküli csoport átlagosan 1,5 centiméterével). Statisztikai szempontból vizsgálva a különbségek egy része – a vajúdás hosszát tekintve – a tágulás különbségeivel is magyarázható, de az alapvető hatást a dúla jelenléte váltotta ki.
                </p>

                <p>
                    A harmadik vizsgálatot egy, a texasi Houstonban található nagy közkórházban, a Jefferson Davis Kórházban végeztük. Azért választottuk ezt az intézményt, mert közkórház, és így az anyák mind ugyanolyan orvosi ellátásban részesültek. A szülészek hasonló megközelítés alapján dolgoztak, még a magánorvosi praxisokban is. A kórházi dolgozók egységes alapelveket és ellátási tervet követtek, és hasonló esetekben alkalmaztak császármetszést és gyógyszeres fájdalomcsökkentést.
                </p>

                <p>
                    Az előző két vizsgálathoz hasonlóan itt is felkértük az először szülő anyákat a részvételre, majd beleegyezésük után véletlenszerűen beosztottuk őket (zárt boríték) a dúlák által támogatott nők csoportjába vagy a dúla nélküli, rutinellátást kapó csoportba. Ebben a kórházban a családtagoknak, barátoknak lehetőségük volt rövid látogatást tenni, ha a szülőszoba nem volt túl forgalmas.
                </p>

                <p>
                    Ebben a kórházban több területen is különbözött a szülészeti ellátás a Guatemalában tapasztaltaktól. A vizsgálatot (1984-1987) néhány évvel a Guatemalában készült vizsgálat (1978-1982) után végeztük, és a különbségek tükrözték a gyors országos és nemzetközi információáramlást az újfajta szülészeti folyamatokról és az ebből következő változásokat. Mint a legtöbb kórházban az Egyesült Államokban, a pácienseknek itt is ágyban kellett maradniuk, mivel egy elektronikus magzatfigyelő berendezést helyeztek minden anya hasára, rögtön beérkezése után. A vajúdás előrehaladtával, mikor már öt centiméter volt a méhszáj tágulása, a magzatburkot mesterségesen megrepesztették, hogy a monitort ráhelyezhessék a csecsemő fejbőrére, mely közvetlenebb kapcsolatot hozott létre a magzattal. Bizonyos esetekben katétert helyeztek el a méhbe, hogy megmérjék a méhösszehúzódások erejét és gyakoriságát. A szülész szakemberek elvárták az anyáktól, hogy egy meghatározott tágulási mintát vagy menetrendet kövessenek (nagyjából egy centiméter óránként). Ha a vajúdás nem a menetrend szerint folyt, a szülészek a gyorsítás és az összehúzódások erősségének növelése érdekében olyan módszereket alkalmaztak, mint például az intravénás oxitocin.
                </p>

                <p>
                    Mikor vizsgálatunkat végeztük, a kevés hely miatt a kórházba az egészséges, komplikációk nélküli nőket csak erős és aktív vajúdással és legalább négy centiméteres méhszáji tágulással vették fel. A kórházi költségek visszaszorítása érdekében ma is sok kórháznak vannak hasonló alapelvei az Egyesült Államokban.
                </p>

                <p>
                    A dúla által támogatott 212 nő átlagosan 7,4 órát vajúdott ellentétben a dúla nélküli csoport 9,4 óra hosszúságú vajúdásával. Valószínűleg azért is voltak rövidebbek Houstonban a vajúdások, mint Guatemalában, mert felvételkor nagyobb volt a méhszáji tágulás, és előrehaladottabb volt a vajúdás, továbbá sok nő kapott oxitocint.
                </p>

                <p>
                    A vajúdást felgyorsító modern szülészeti módszerek ellenére – beleértve a mesterséges burokrepesztést, az összehúzódások erősségének oxitocinnal történő növelését, a fogók használatát és a császármetszést – ebben a vizsgálatban is a dúla jelenlétét élvező nők vajúdtak rövidebb ideig.
                </p>

                <h4>FÁJDALOMCSILLAPÍTÁS</h4>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog02Pic4} alt="A dulahatas-kutatasok, eredmenyek"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A második, véletlenszerű és kontrollált vizsgálat összehasonlította a fájdalomcsillapítás három módszerét. Az egyik csoportban narkotikus anyagokat, a másodikban folyamatos dúlai támogatást, a harmadikban epidurális analgéziát használtak. A fájdalom enyhülése az anyák beszámolói alapján a szülés után az epidurális analgéziát kapó csoportban volt a legjelentősebb, és a narkotikus gyógyszeres csoportban a legkisebb. A fájdalom csökkenése a folyamatos dúlai támogatást élvezők csoportjában nem volt annyira jelentős, mint az epidurális érzéstelenítéses csoportban. A dúlás csoportban viszont az anyák más területeken jobb eredményeket értek el, mint a másik két csoportban.
                        </p>

                    </div>
                </div>

                <p>
                    A dúlás csoportban levő az anyáknál – összehasonlítva a másik két csoporttal – kevesebb alkalommal használtak fogót és vákumot, valamint kevesebbszer volt szükség oxitocinra a szülések serkentéséhez. A folyamtos dúlai támogatást élvező anyák vajúdásának hossza átlagosan 7,8 óra volt, míg az epidurális csoport 9,9, a narkotikumokat kapó csoport pedig 9,5 óráig vajúdott átlagosan. A dúlás csoportban ismételten kiemelkedően alacsony volt a császármetszések aránya, 3,2 százalék, vagyis 4 nőnél a 126-ból, összehasonlítva a másik csoport 11,6 százalékáva és az epidurális csoport 16,8 százalékával.
                </p>

                <p>
                    Láz az epidurális csoportnál 33 százalékban, a narkotikumokat kapó csoportnál 26 százalékban és a dúlás csoportnál csak 13 százalékban jelentkezett. (Ennek jelentőségére egy későbbi részben még visszatérünk.) A narkotikumokkal kezelt csoport 25 százaléka, míg a dúlás anyáknak csak 6 százaléka kapott epidurális érzéstelenítést.
                </p>

                <p>
                    Ezek az adatok különösen érdekesek, és azt mutatják, hogy a dúlás anyák jelentős fájdalomcsökkentésben részesültek. Ez korábban is kiderült egy másik vizsgálat során, mikor az anyákat véletlenszerűen beosztottuk egy dúlás csoportba, egy megfigyelt csoportba (a dúla folyamatosan a szobában tartózkodott, de nem beszélt, és nem érintette meg az anyát) és egy dúla nélküli kontrollcsoportba. Ebben a sorrendben 7,8, 22,6 és 55 százalékban kaptak epidurális analgéziát. Tehát a dúlás és a megfigyelt anyák jelentősen kevesebbszer választották az epidurális érzéstelenítést a vajúdás kellemetlenségei alatt, kétségtelenül a dúla jelenléte miatt.
                </p>

                <p>
                    Mikor a két vizsgálatot végeztük, Guatemalában nem voltak epidurális érzéstelenítés nyújtására felkészült aneszteziológusok. (1982-ig ez volt a helyzet a legtöbb kórházban az Egyesült Államokban is.)
                </p>

                <p>
                    A dúla segítsége már egy korábbi vizsgálat során is észrevehetően hatott az oxitocin használatára. Az oxitocin számos anya számára értékes támogatást nyújt a vajúdás alatt. Azonban az összehúzódások annyival erőteljesebbek és fájdalmasabbak lesznek, hogy a gyógyszerek nélkül vajúdó anyák gyakran epidurális érzéstelenítés vagy egyéb gyógyszerek iránt folyamodnak az oxitocin használata után.
                </p>

                <p>
                    Az első, Guatemalában készült vizsgálat során az oxitocin használata 2 százalékos volt a dúlás csoportban és 16 százalék a dúla nélküli csoportban. Mivel ilyen ritkán használtak oxitocint abban az időben, és kevés nő vett részt a vizsgálatban, nem volt elég nagy a különbség ahhoz, hogy statisztikailag ki tudjuk mutatni, hogy a dúla csökkentette-e az oxitocin szükségességét.
                </p>

                <p>
                    A második vizsgálatban a dúlás csoport szülő nőinek 2 százaléka kért oxitocint, míg a dúla nélküli csoportban ez a szám 13 százalék volt. Mivel ebben a vizsgálatban sok nőt vizsgáltunk, ez már statisztikailag is jelentős különbségnek számított.
                </p>

                <p>
                    A Houstonban készült vizsgálatban a százalékok szintén különböztek. A dúla nélküli csoportban 44 százalék, míg a dúlás csoportban 17 százalék kapott oxitocint az összehúzódások növelésére.
                </p>

                <h4>A FOGÓ HASZNÁLATA</h4>

                <p>
                    A fogó speciális eszköz, melyet azért fejlesztettek ki, hogy a baba feje biztonságosan jusson át a szülőcsatornán. A múltban néhány csecsemő megsérült a fogó használata miatt, amikor fejük még túl magasan volt a szülőcsatornában. A legtöbb ilyen szerencsétlen kimenetel azért történt, mert a szülést olyan orvos vezette, akinek nem volt elég tapasztalata és megfelelő képzettsége ahhoz, hogy megítélje, hogyan használja biztonságosan a fogót.
                </p>

                <p>
                    Egy olyan szülészeti központban szerzett tapasztalatainknak köszönhetően, melyben a spinális, caudális és epidurális érzéstelenítést több mint öt évtizede használják, egyre inkább úgy tartjuk, hogy a kisegítő (úgy nevezett „alacsony”) fogó használata gyakran segít, különösképpen az előbb említett három érzéstelenítési mód esetében. Ha az alacsony fogót megfelelően képzett, tapasztalt szülész használja, akkor nem lehet káros a babára nézve. Jelenleg a legtöbb kórházban és szülészeti központban használnak fogót, de sokkal ritkábban, mint két évtizeddel ezelőtt.
                </p>

                <p>
                    A Houstonban készült vizsgálatban a dúlás csoportban szülő anyáknak 8 százalékánál használtak fogót, mely jelentősen kevesebb a dúla nélküli csoport 26 százalékánál. Ezek mind „alacsonyfogós” szülések voltak. A dúla nélküli csoportban részben a gyakrabban végzett epidurális érzéstelenítés miatt fordult elő több fogós szülés. Ha egy olyan egyszerű beavatkozás, mint a dúla támogatása ilyen mértékben tudja csökkenteni a fogó használatát, akkor attól függetlenül, hogy a fogós szülést biztonságosnak tartjuk-e, sokkal kedvezőbben ítéljük meg a dúla befolyását.
                </p>

                <h4>AZ EPIDURÁLIS ÉRZÉSTELENÍTÉS</h4>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog02Pic5} alt="A dulahatas-kutatasok, eredmenyek"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A császármetszéssel kapcsolatos általános megegyezéssel szemben az epidurális érzéstelenítés – egészséges, normálisan vajúdó és szülő nőkre gyakorolt – hatásairól azonban a vélemények megoszlanak. Sok aneszteziológus az epidurális érzéstelenítést „az érzéstelenítés Cadillacjének” nevezi. Rámutatnak arra az ideális hatásra, hogy uralmat nyújt a fájdalom felett azon a hosszú folyamaton keresztül, amikor a méhnyak fokozatosan tágul. Időnként a lassú vajúdás felgyorsulhat, amint az epidurális érzéstelenítés hatni kezd. 
                        </p>

                    </div>
                </div>

                <p>
                    Az olyan nők számára, akik úgy érzik, nem képesek elviselni az összehúzódásokat, szerencsés, hogy az epidurális analgézia nem csak a fájdalmat és az idegességet enyhíti, hanem azt is lehetővé teszi, hogy ébren maradjanak.
                </p>

                <p>
                    Az epidurális analgéziát vizsgáló orvosi publikációk közül sok javasolja azt. Továbbá az anyák közötti szóbeli kommunikáció is ezt erősíti. Az ilyen beszámolók és egyéb tényezők miatt, mint például az, hogy sok kórházban a szülészeti aneszteziológus állandóan rendelkezésre áll, a szülészeti epidurális érzéstelenítést 90% feletti arányban alkalmazzák bizonyos intézményekben.
                </p>

                <p>
                    Sok tapasztalt ápoló, bába és szülész azonban úgy véli, hogy ez az érzéstelenítési módszer gyakran nem ideális. Egy normálisan haladó vajúdás lassulhat, akár le is állhat az epidurális érzéstelenítés hatására. A vajúdás hossza növekedhet, mint ahogy láttuk a Houstonban készült vizsgálatban is. A fájdalomcsillapítás nem mindig tökéletes, és a folyamatos fejlesztések ellenére hatékonysága változhat. Mikor először használták az epidurális érzéstelenítést, amint a hatása megkezdődött, az anya nem volt képes sétálni vagy könnyen testhelyzetet váltani. Azóta azonban a technika módosítása és az adag csökkentése lehetővé tette az úgynevezett „sétáló epidurális érzestelenítést”. Az utóbbi időben készült számos tanulmány demonstrálta a módszer hatékony fájdalomcsökkentő hatását a korai vajúdás során (5 centiméteresnél kisebb tágulás esetén). A gyógyszer adagját be lehet úgy állítani, hogy nagyjából két órás időtartam maradjon anélkül, hogy észrevehető mozgáskorlátozottság lépne fel.
                </p>

                <p>
                    Az epidurális érzéstelenítés megkezdése azonban nem mindig sikeres. Gyakran nem történik meg az érzéstelenítés hatásának fokozatos csökkenése, ami azért lenne fontos, hogy az izomtónus és a nyomóreflex visszakerüljön eredeti állapotába. Ezért gyakran lassabban és nehezebben száll le a baba feje a szülőcsatornán, mivel kevesebb a normális válaszreflex az anya testében, mely a fejet az optimális kitolási helyzetbe fordítja, és kitolja a babát. A vajúdás ezen része következésképpen gyakran hosszabb, és gyakran fogóra, vákuumra vagy császármetszésre van szükség. Az elmúlt tíz év során számos vita folyt és folyik az epidurális érzéstelenítés szülészeti komplikációival kapcsolatban. Szerencsére egy nemrégiben készült, 3159 vajúdó nőt magába foglaló, tizenegy véletlenszerű kisérletet vizsgáló elemzés összehasonlította az epidurális érzéstelenítés hatásait. Az epidurális analgéziát a nem epidurális módszerekkel szemben kevesebb fájdalommal, de hosszabb első és második vajúdási szakasszal társították.
                </p>

                <p>
                    Ezen kívül gyakrabban fordult elő a baba kedvezőtlen testhelyzete, az oxitocin használata és az instrumentális (fogós vagy vákuumos) vaginális szülés. Viszont a császármetszések számának növekedésére akkor sem találtak szignifikáns hatást, amikor erre vonatkozó adatokkal is kiegészítették a kutatást.
                </p>

                <p>
                    Mielőtt a nők azt mondják orvosuknak, hogy ragaszkodnak az epidurális fájdalomcsillapításhoz, jó lenne, ha előbb elgondolkodnának egy pillanatra az előbbi és egyéb gondolatokon. Bár az epidurális érzéstelenítés során használt gyógyszer egy kis területen jut be a gerincagyon kívül, a gyógyszer bekerül az anya véráramlásába és aztán a babáéba is. Ezért a babák viselkedése kissé megváltozhat az első órákban és napokban. Ahogy már korábban is említettük, az epidurálisan érzéstelenített nők testhőmérséklete egyre növekszik a vajúdás előrehaladtával. Mindez nem történik meg természetes szülésekkor vagy másfajta fájdalomcsillapítások esetén. Az anya emelkedő testhőmérséklete együtt jár a baba szívverésének felgyorsulásával, melyet tévesen az oxigénellátással kapcsolatos problémának ítélhetnek.
                </p>

                <p>
                    Azzal az aggodalommal együtt, hogy a babának komoly fertőzése lehet, ezek a jelek nyomást gyakorolnak a segítőkre, hogy a szülés minél hamarabb megtörténjen. Ez császármetszést vagy fogók használatát teszi gyakoribbá, mivel a baba állapota tisztázatlan marad mindaddig, míg nem tudják közelről megvizsgálni.
                </p>

                <p>
                    Továbbá, ahogy már korábban említettük, számos anya beszámolt arról, hogy mennyire bántotta őket, hogy nem voltak képesek fájdalomcsillapító nélkül élni át a vajúdás élményét. Képtelenek voltak „megtenni azt, amit bármely egyszerű parasztasszony”. Azoknak az anyáknak az aránya, akiket ez zavar, népcsoportonként változik, és általában az előzetes elvárásaikkal és a szülésről alkotott képükkel van kapcsolatban. Sokan igazán szomorúak attól, hogy – mivel epidurális érzéstelenítéssel szültek –, nem érezhették át azt, hogy valami nagy dolgot teljesítettek, pedig eredeti elvárásuk ez volt önmagukkal szemben.
                </p>

                <p>
                    Bizonyos szülészeti osztályok vezetői aggódtak e mellékhatás miatt, valamint amiatt, hogy milyen hatással van az epidurális analgézia az anya-gyermek kapcsolatra. Aránylag kevés tanulmányt készítettek az epidurális fájdalomcsillapítás olyan hormonokra tett hatásával kapcsolatban, melyek azért felelnek, hogy az anyáknak a kitolás után eksztatikus érzelmeik legyenek, hogy meg akarják fogni és kapcsolatba akarjanak kerülni újszülött babájukkal. Néhány tapasztalt szülész szerint az anyák elragadtatott lelkesedése az újszülött iránt, mely a nem gyógyszeres szülések után jellemző, ilyen esetben elveszik, késik vagy csökken. Beszámolójuk szerint az epidurális érzéstelenítésen átesett anyák nem éreznek olyan sikerélményt, továbbá nem növekszik az önbecsülésük úgy, ahogy az epidurális érzéstelenítés nélkül szülő anyáknak.
                </p>

                <p>
                    Míg az érzéstelenítés, beleértve az epidurális érzéstelenítést is, isteni ajándék a komplikált szüléseknél, egy jól kísért, érzéstelenítés nélküli szülés az „új család megszületésével” kapcsolatos különleges lelkesedést és eksztázisélményt nyújhat az új anyának.
                </p>

                <h4>
                    PÉNZÜGYI SZEMPONTOK
                </h4>

                <p>
                    A dúlás vajúdástámogatásnak pszichológiai és fizikai előnyein kívül fontos pénzügyi előnyei is vannak. Az érzéstelenítések arányát jelentősen lehetne csökkenteni, ha több dúla által támogatott nő vajúdna és szülne érzéstelenítés nélkül, vagy helyi érzéstelenítéssel. A költségeket csökkenteni lehetne azért is, mert kevesebb olyan újszülöttnek van szüksége hosszabb kórházi bent tartózkodásra, akiknek anyját dúla támogatta a szülés közben.
                </p>

                <p>
                    1999-ben az USÁ-ban az összes szülés 22 százaléka történt császármetszéssel. A Houstonban készült vizsgálat alapján feltételezhetjük, hogy a császármetszések arányát 10 százalékra lehetne csökkenteni. Ez a csökkenés és a kórházi tartózkodás rövidülése, valamint a műtők költségeinek mérséklése, a képzett vajúdási és szülés utáni segítő személyzet és a gyógyszerek használatának csökkenése jelentős megtakarítást jelentene a családoknak és a biztosítóknak egyaránt. Még a dúlák szolgáltatásának díját beleszámítva is milliárdokkal lenne kevesebb az összes egészségügyi költség az ország számára.
                </p>

                <p>
                    Az epidurális érzéstelenítés 20 százalékra való csökkentése a jelenlegi 80-90 százalékról bizonyos kórházakban a szülőknek több ezer dollár megtakarítást jelentene – ami országos szinten nagy mértékű megtakarítás, mivel több, mint négy millió szülés van évente.
                </p>

                <h4>ÉRZÉKENY IDŐSZAK</h4>

                <p>
                    A legújabb adatok is jól demonstrálják azt, hogy mennyire érzékeny az anya a vajúdás, a szülés és az azt követő pár nap alatt. Ez alatt a különleges időszak alatt az anya és sokszor az apa is különösen nyitott arra, hogy elmélyítse kapcsolatát kisbabájával, mindezekre hatással van a támogatója (dúlája) valamint a környezete is.
                </p>

                <p>
                    Számos vizsgálat jól mutatja, hogy a humánus, érzékeny és egyénre szabott támogatói gyakorlatok – mint például az anya és a baba együttlétének meghosszabbítása, ameddig csak lehetséges, a kezdetektől rooming-in szobában történő elhelyezés, a szoptatás lehetősége a szülés utáni órában, az igénynek megfelelő szoptatási rend az anya és a baba közötti testi kontaktussal, valamint az, hogy az apa átölelheti és megismerheti a babát már ebben a korai időszakban – négy fontos jótékony hatással jártak:
                </p>


                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">csökkent az újszülöttjüket elhagyó anyák száma,</li>
                    <li class="blog-globale-has-before">az újszülötteket kevesebbet bántalmazták,</li>
                    <li class="blog-globale-has-before">sikeresebb lett a szoptatás az első évben (beleértve az anyatej mennyiségét),</li>
                    <li class="blog-globale-has-before">az apák többet foglalkoztak a babával az első három hónapban.</li>
                </ul>
                
                <p>
                    Az, hogy a szülők felfedezhették képességeiket az újszülöttel kapcsolatban, hogy szembesülhettek saját és a baba reakcióival, valamint hogy megtanulták a csecsemőt hordozókendőben magukon tartani az első pár hónapban, három hónapos korra javította a szülő-újszülött interakciókat, az első évre erősebb immunrendszert eredményezett, és 13 hónapos korra magasabb biztonságérzetet jelentett a csecsemő számára.
                </p>

                <p>
                    Az előző fejezetben bemutatott Guatemalában készült első dúlavizsgálat pontos és világos különbséget mutatott abban, hogy az anyák hogyan érzékelték újszülöttjüket, és hogyan reagáltak rájuk, egyrészt akkor, ha részesültek, másrészt akkor, ha nem részesültek a vajúdás alatt érzelmi támogatásban. Egyik irányban átlátszó fal mögött figyelték a guatemalai anyák két csoportját babáikkal a szülőszoba elhagyása utáni első huszonöt percben. A megfigyelők nem tudták, hogy az anyák milyen ellátásban részesültek a vajúdás során. A dúla által támogatott anyák gyengédebb módon viszonyultak újszülöttjükhöz, többet mosolyogtak, beszéltek, és többet simogatták a babát, mint azok, akik mellett nem volt dúla.
                </p>

                <h4>AZ ANYÁT ÉRT HATÁSOK A VAJÚDÁS UTÁN</h4>

                <p>
                    A Dél-Afrikában készült dúlavizsgálat is kiváló példát szolgáltat arra, hogy a dúlai támogatás milyen jelentős hatással van az anya reakcióira a baba életének első pár hetében. Az anyák reakciói jól ábrázolják, hogy az ebben az érzékeny időszakban nyújtott támogatás milyen lehetséges hatásokkal jár a későbbi anyai viselkedésre. Justus Hofmeyr, Wendy Lynne Wolman, Beverley Chalmers és más kollégák a Witwatersrand Egyetemen Johannesburgban, Dél-Afrikában tanulmányoztak 189 először szülő anyát. A páciensek indián, városi anyák voltak, akik jól ismerték a kórházat. A dúlák ebben a vizsgálatban laikus nők voltak (egy rövid hétvégés képzést kaptak), akiket felkértek, hogy maradjanak a vajúdó anyák mellett. A dúlák érintést és verbális kommunikációt használtak a következő tényezőkre összpontosítva: kényelem, megerősítés és dicséret.
                </p>

                <p>
                    Az eredmények kedvező hatást mutattak a nők és az újszülöttek pszichológiai egészsége szempontjából az alábbi területeken.
                </p>

                <ol class="blog-globale-list1">
                    <li class="blog-globale-has-before1">Az anyák beszámolói a fájdalomról huszonnégy órával a szülés után</li>
                
                <p>
                    A szülés után egy nappal készült interjúk eredményei azt jelezték, hogy a dúlás csoport anyái kevesebb fájdalomról számoltak be a vajúdás alatt és huszonnégy órával a szülés után. A két csoport anyái ugyanolyan mértékben voltak feszültek a vajúdás előtt, de a dúlás csoport kevésbé volt nyugtalan huszonnégy órával később. A dúla által támogatott anyák közül kevesebben tartották nehéznek a vajúdást és a szülést, kevesebben gondolták, hogy sokkal rosszabb volt, mint elképzelték, és többen gondolták úgy, hogy jól megbirkóztak a feladattal.
                </p>

                    <li class="blog-globale-has-before1">Az anyák viselkedése az újszülöttel huszonnégy órával a szülés után (az anyák beszámolói alapján)</li>

                <p>
                    Mikor az anyákat arról kérdezték, milyen tapasztalataik vannak babáikkal, a dúlás csoport anyái kevesebb időt töltöttek távol újszülöttjeiktől. Ezek az eredmények azt sugallják, hogy a dúlai támogatás a vajúdás alatt hasonló hatásokkal jár, mint a rögtön szülés utáni anya-újszülött kontaktus; mindkettő növeli az anya érdeklődését a gyermek iránt, valamint javítja a közöttük levő interakciót.
                </p>

                <li class="blog-globale-has-before1">Szoptatási viselkedés és a gyermek egészsége hat héttel később (az anyák beszámolói alapján)</li>

                <p>
                    A szülés után hat héttel az anyák beszámolói alapján kiderült, hogy jelentősen gyakrabban fordult elő szoptatás és igény szerinti táplálás a támogatott csoportban, és anyatej helyett más étellel etetés a kontrollcsoportban. Kiemelkedő volt a különbség az anyák újszülöttjükhöz való hozzáállásában és a velük való viselkedésben. Mély benyomást tett az ápolókra, gyermekorvosokra és azokra a szakemberekre, akik gyermekek egészségével és etetésével foglalkoznak, hogy nagy mértékű eltérést találtak a szoptatási problémák előfordulásának terén: a dúlás csoport 16 százalékának volt ilyen gondja szemben a dúla nélküli csoport 63 százalékával. Mennyivel kevesebbet aggódtak ezek a szülők, és mennyivel kevesebb pénzt fizettek ki az orvosoknak, mert sokkal kevesebbszer volt szükségük szakszerű segítségre!
                </p>

                <p>
                    Ezek az eredmények feltűnőek. Nem voltak különbségek a kórházi felvétel idején, és nem volt egyéb ok sem arra, hogy ilyen nagy különbségek legyenek a babák között, akik minden téren hasonlóak voltak születéskor.
                </p>
                </ol>

                <p>
                    A dúla jelenléte tudja-e csökkenteni a vajúdás során az anya feszültségét, és tudja-e olyan mértékben növelni önbecsülését, hogy babáját egészségesebbnek tartsa? Vagy a dúla nélkül szülő anya talán negatívabb és lehangoltabb képet alkot magáról és gyermekéről, melynek eredményeképpen babáját betegesebbnek gondolja? Természetesen a babák egészségére vonatkozó különbségek egy része betudható annak, hogy a dúlás csoportban gyakoribb a szoptatás, melyről tudott, hogy csökkenti az emésztési és légúti fertőzéseket.
                </p>

                <p>
                    Amikor az anyákat arról kérdezték, hogy mennyi időt töltöttek távol babájuktól hetente, és mennyi időbe telt kialakítani a kapcsolatot, szintén jelentős különbségeket találtunk a két csoport között.
                </p>

                <p>
                    A dúlás csoport anyái 1,7 órát töltöttek távol gyermeküktől hetente, ellentétben a dúla nélküli anyákkal, akik 6,6 órát voltak távol. A dúlás csoport anyáinak átlagosan 2,9 napba telt közeli kapcsolatot kialakítani a babáikkal, míg a másik csoportban ez 9,8 nap volt.
                </p>

                <p>
                    Ezek az eredmények azt sugallják, hogy a vajúdás alatt nyújtott támogatás erősíti az anyák készségét arra, hogy valósággal szerelmesek legyenek babáikba, és hogy e kötődés miatt kevésbé hajlandók távol lenni tőlük. Mindezek megfelelnek a szülés utáni anya-baba interakcióval kapcsolatos megfigyeléseknek az első guatemalai vizsgálatban, valamint az olyan anyák beszámolóinak, akik korán és sokat voltak kapcsolatban újszülöttjükkel a szülés után.
                </p>

                <h4>AZ ANYÁK ÉRZELMI ÁLLAPOTA</h4>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog02Pic6} alt="A dulahatas-kutatasok, eredmenyek"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A dúlás csoportban szült anyák sokkal kevesebb feszültséget, depressziós tünetet mutattak, valamint magasabb volt az önbecsülésük. Bár ezek a felmérések nem voltak elegendők a depresszió kimutatására, az eredmények sugallják annak lehetőségét. A szülés utáni depresszió káros az anyára és a vele élőkre – különösképpen az újszülöttre. Ha kevesebb anya esik ilyen állapotba a dúlai támogatásnak köszönhetően, az nagy előnyökkel jár az anyák, babáik és a többi családtag számára. Azok az anyák, akik elégedettek magukkal, és kevésbé szoronganak, pozitívabb környezetet hoznak létre gyermekük számára a növekedéshez és kibontakozáshoz.
                        </p>

                    </div>
                </div>

                <p>
                    A dúla nélküli csoportban az anyák nagyobb arányban kértek orvosi tanácsot vagy kezelést, mely kérés megfelelt érzelmi állapotuknak: több szorongás volt bennük, depressziós érzéseik voltak és alacsonyabb volt az önértékelésük. Közülük kevesebben hozták magukkal babáikat a hat hetes klinikai ellenőrzésre. Ez beleillik abba a képbe, hogy a dúla által támogatott nők beszámolói szerint jelentősen több időt töltenek újszülöttjükkel, mint a dúla nélkül szült nők. A dúlás csoportban az anyák szinte mindig felvették síró gyermeküket, míg a dúla nélküli csoportban az anyák időnként hagyták őket sírni. Az a tény, hogy ebben a dél-afrikai vizsgálatban több dúla által támogatott nő szoptatott, mint általában, indokolhatja a különbségeket.
                </p>

                <h4>KAPCSOLAT A PARTNERREL HAT HÉTTEL A SZÜLÉS UTÁN</h4>

                <p>
                    Az anyák beszámolói alapján nem volt jelentős különbség a két csoport tagjai között abban, hogy mennyire voltak elégedettek partnerükkel a várandósság előtt és után. Azonban a dúlai támogatás bizonyos tényezői miatt a dúla által támogatott nők megnövekedett elégedettséggel gondoltak partnerükre a baba születése után, és sokkal többen számoltak be arról, hogy kapcsolatuk javult a szülés után – több mint kétszer olyan nagy mértékben, mint a dúla nélküli csoportban.
                </p>

                <h4>A BABA ÉRZÉKELÉSE HAT HÉTTEL A SZÜLÉS UTÁN</h4>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog02Pic7} alt="A dulahatas-kutatasok, eredmenyek"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Hat héttel a szülés után a dúla által támogatott nők saját magukról és babáikról alkotott képe észrevehetően kedvezőbb volt. Wolman szerint „a támogatott anyák pozitívabbak voltak minden tekintetben, beleértve a baba különlegességét, a fesztelenséget és a babáik szépségéről és okosságáról alkotott véleményüket”. A támogatott anyák nagyobb arányban tartották babáikat nemcsak szebbnek, okosabbnak és könnyen kezelhetőnek, hanem azt is gondolták, hogy újszülöttjük kevesebbet sír, mint más babák. 
                        </p>

                    </div>
                </div>

                <p>
                    Grace Manning-Orenstein megemlítette egy másik tanulmányban, hogy a dúla által támogatott anyák beszámolói alapján babáik kevésbé voltak nyűgösek, mint ahogy az a dúla nélkül szülő anyák elmondása alapján kiderült. Tulajdonképpen a támogatott anyák úgy gondolták, hogy babáik „jobbak”, mint egy „átlagos” gyermek, míg a dúla nélküli anyák babáikat „kicsit kevésbé jónak” vagy „nem olyan jónak” minősítették.
                </p>

                <p>
                    Wolman elmondta, hogy „a támogatott anyák csoportjában saját magukat is közelebb érezték a babához, úgy érezték, jobban kezelik a dolgokat, és jobban kommunikálnak a babával, mint a kontrollcsoport anyái.” A dúla által támogatott anyák nagyobb százalékban számoltak be arról, hogy örülnek babáiknak, könnyűnek tartják az anyává válást, és úgy érzik, jobban tudnak törődni babájukkal, mint bárki más. Ezzel ellentétben a dúla nélküli csoport mamái nehezebbnek érezték az anyává válást, és úgy érezték, valaki más jobban tudna törődni babájukkal, mint ők.
                </p>

                <p>
                    Egy másik vizsgálat eredményei azt jelezték, hogy „a dúla által támogatott anyák nagyobb arányban érezték úgy, hogy a vajúdás nagyon pozitív hatással volt nőiségükre, testük erejére és teljesítőképességére.”
                </p>

                <h4>ANYA-GYERMEK INTERAKCIÓ KÉT HÓNAPPAL A SZÜLÉS UTÁN</h4>

                <p>
                    Egy több hónapos, 104 normális, egészséges, első gyermekét váró anyát vizsgáló kutatásban a nők véletlenszerűen kerültek a dúlás, a narkotikumos érzéstelenítést vagy az epidurális érzéstelenítést alkalmazó csoportba. A megfigyelők különleges, otthoni megfigyeléssel kapcsolatos képzésben részesültek, hogy értékelni tudják a későbbi anya-gyermek kapcsolatot, és nem ismerték az anya vajúdási tapasztalatait. Mikor a babák elérték a két hónapos életkort, a megfigyelő otthonában látogatta meg a családot, és értékelte a gyermek fejlődését illetve az anya kapcsolatát gyermekével. 
                </p>

                <p>
                    Az interakciót egytől hétig terjedő skálán osztályozták a következő kritériumok alapján: az anya fizikai kontaktusa, vizuális figyelme és gyengéd viselkedése gyermeke iránt. Az anyai interakciót a babával öt alkalommal figyelték meg a látogatás alatt:
                </p>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog02Pic8} alt="A dulahatas-kutatasok, eredmenyek"/>
                    </div>
                    <div class="blog-globale-text">

                        <ul class="blog-globale-list">
                            <li class="blog-globale-has-before">mikor a megfigyelő belépett az anya házába,</li>
                            <li class="blog-globale-has-before">míg a fejlődést ellenőrző vizsgálatot elkészítették,</li>
                            <li class="blog-globale-has-before">míg a vizsgálatot értékelték,</li>
                            <li class="blog-globale-has-before">etetés alatt, és</li>
                            <li class="blog-globale-has-before">mialatt az anya tisztába tette a babát.</li>
                        </ul>
                    </div>
                </div>

                <p>
                    A fejlődési vizsgálat eredményeit nem hozták összefüggésbe a szociális támogatással és az analgéziával (fájdalomcsillapítás), amit a gyermek anyja a vajúdás során kapott.
                </p>

                <p>
                    Az elvárásoknak megfelelően nem voltak jelentős különbségek a fejlődési vizsgálat terén a három csoport gyermekei között. Azonban az anya-gyermek interakció eredményei izgalmas és kiemelkedő különbségeket mutattak. A dúla által támogatott anyák sokkal magasabb pontszámokat értek el, mint a dúla nélküli csoport mamái: az öt megfigyelésből négyben meglepően jelentősek az eltérések. Általánosságban véve ezek az eredmények azt jelezték, hogy két hónappal a szülés után azok az anyák, akik részesültek dúlai támogatásban a vajúdás során, figyelemre méltóan gyengédebb módon viszonyultak gyermekükhöz mint a dúlai támogatásban nem részesült anyák.
                </p>

                <p>
                    Amikor képzett megfigyelők gondosan elkészített vizsgálatot használnak, és jelentős különbségeket találnak a két véletlenszerűen beosztott csoport asszonyainak viselkedése között, a kutatók mindezt külön is megfigyelik és értékelik. Mivel az anyák nem kaptak utasításokat arra nézve, hogyan viselkedjenek, a hatások figyelemre méltóak és jelentősek.
                </p>

                <p>
                    Mindazonáltal még mindig nem teljesen világos, hogy milyen pszichológiai mechanizmusok magyarázzák a dúlai támogatásnak ezt az erős és hosszan tartó hatását. Vajon a dúla folyamatos jelenléte a vajúdás során természetes hormonális és viselkedési reakciókat aktivál és tart fent? Ezeket a reakciókat megakadályozzák és gátolják az olyan tényezők, mint például a dúla folyamatos támogatása nélküli kórházi szüléssel kapcsolatos szorongás és stressz?
                </p>

                <p>
                    Az anya-gyermek interakcióval kapcsolatos hosszan tartó hatás megfelel annak a hatásnak, melyet mi „anyasági érzékeny időszaknak” neveztük el a szülés időszaka körüli rövid időszakban, és hasonló a korai anya-gyermek kapcsolat és interakció szokatlanul erős hatásával kapcsolatos egyéb bizonyítékokhoz. Ebben az időszakban – a szülés utáni első percek, órák és napok ideje megváltoztathatja a szülők későbbi viselkedését gyermekükkel. A dúlával kapcsolatos figyelemre méltóan erős és tartós hatások azt sugallják, hogy az érzékeny időszak a vajúdás alatt kezdődik. Donald Winnicot, gyermekorvos és pszichoanalitikus, igen körültekintő megfigyeléseket tett a közvetlenül a szülés utáni időszakról. Véleménye szerint az egészséges anya az általa elnevezett „Elsődleges Anyai Elvárásokon” esik át. Szerinte <i>„Az anya csak akkor tudja gyermeke helyébe képzelni magát és így kielégíteni szükségleteit, ha az általam leírt módon1 válik érzékennyé.”</i>
                </p>

                <p>
                    Megjegyezte, hogy ebben a mentális állapotban az anya megnövekedett érzékenységgel figyel a baba szükségleteire. Ezen állapot kialakításához és fenntartásához az anyának támogatásra, gondoskodásra és védett környezetre van szüksége.
                </p>

                <h4>SZÜLŐ-GYERMEK KÖTŐDÉS</h4>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog02Pic9} alt="A dulahatas-kutatasok, eredmenyek"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A biztos kötődéshez vezető út nagyon korán kezdődik a gyermek életében, és a korai szülő-gyermek kötődés az alapja. A kötődés a szülők gyermekük iránti érzelmi bevonódására utal. Ez a folyamat ismételt kellemes és jelentőségteljes tapasztalatokra épül, és általuk fejlődik. A szülők számára a kötődés, az érzelmi kapcsolat sokkal többet jelent, mint csak a gyermek etetése vagy ellátása. Sokkal inkább törődést jelent – érzékelés és reakció a gyermek fizikai és érzelmi szükségleteire. 
                        </p>

                    </div>
                </div>

                <p>
                    Amikor a szülők megfelelően kötődnek, érzelmi bevonódásuk nagy hatással van a gyermekre. A dúlai támogatás anyára tett észrevehető hatásai – az anya jobban reagál, figyelmesebb és érzékenyebb a baba egyedi szükségleteire – nagy valószínűséggel javítják a baba szülei iránti hosszú távú kötődését.
                </p>

                <p>
                    Két régóta létező szokás: a korai anya-gyermek kontaktus és az általában – igény szerinti – szoptatással együtt járó rooming-in, illetve a folyamatos érzelmi támogatás a vajúdás során, melyeket a XX. század közepétől kezdve elhanyagoltak, de az utóbbi évtizedekben megint kezd megnőni a szerepük, hasonló hatást gyakorolnak az anyai viselkedésre. Ha ezeket az ősrégi gyakorlatokat minden anya átélheti, számításaink szerint sokkal több biztosan kötődő egyéves gyermek lesz, mint a mostani becsült 60-65 százalék. Egyéb olyan régóta fennálló szokások, mint például az igény szerinti szoptatás és a gyermek testen hordása az első év során, illetve az együtt alvás valószínűleg tovább növelné az anya-gyermek kontaktust és interakciót. Mindez talán növelné az erősen kötődő gyermekek számát is.
                </p>

                <h4>KÖVETKEZTETÉSEK</h4>

                <p>
                    Ahogy már korábban is említettük, a szerzők elvégeztek egy olyan elemzést, mely egy úgy nevezett metaanalízis technikával egybefoglalja a tízenegy véletlenszerű vizsgálatott. Amikor ezen tanulmányok eredményeit összességében vizsgálják, a dúla jelenléte az összes császármetszés arányát durván 45 százalékkal, a vajúdás hosszát 25 százalékkal, az oxitocin használatát 50 százalékkal, a fájdalomcsillapító gyógyszereket 31 százalékkal, a fogók szükségességét 34 százalékkal és az epidurális érzéstelenítés iránti kérelmeket 10-60 százalékkal csökkenti.
                </p>

                <p>
                    Ezek a meggyőző kutatási eredmények a dúlai támogatás jótékony hatásaival kapcsolatban megerősítik átfogó következtetéseinket: a dúla támogatása elősegíti az anyák és a babák jóllétét, a vajúdás és a szülés során az orvosi beavatkozások csökkenéséhez vezet, és pénzt spórol meg. Az eredmények erős érvként szolgálnak a dúlai szolgáltatások kibővítéséhez. Nem minden nő fogja a dúlai támogatást választani az epidurális érzéstelenítés helyett, de minden vajúdó nőnek lehetőséget kell biztosítani arra, hogy igénybe vehesse dúla segítségét.
                </p>
            </div>

            <div class="blog-global-tags">
              <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    </section>
    <section className="consultation4">
        <div className="consultation-btn-h2"><h3>KÉRDEZNI VAGY MONDANI SZERETNÉL VALAMIT AZ OLVASOTTAKKAL KAPCSOLATBAN?<br/><br/><span>Szeretettel várom jelentkezésedet!</span></h3></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
    </section> 
  </div>
  )
}
