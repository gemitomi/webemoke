import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth15Pic1 from "../../../image/szulestort/szules_story_15_hero_az_ut.png";
import Birth15Pic2 from "../../../image/szulestort/szules_story_15_az_ut.png";

export default function BirthStory15() {
    return (
        <div>
          <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth15Pic1} alt="Az ut"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Az út</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. július 04.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                       <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth15Pic2} alt="Az út"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            A legfontosabb dolog, hogy úgy szüljetek, ahogy nektek a legjobb SZERINTETEK. Senki más véleménye ne térítsen el, főleg ne a “Ha én túléltem így/úgy, te is túl fogod!”, “Nem volt kívánságműsor nekem sem!”, “A lényeg a gyerek, ne legyél önző!” mondatok és társai. Nekem nagyon sokat számított a kórházban, hogy tudtam, hogy ott van velem a férjem – aki nyugodt(!), mert tudja, hogy nem kell harcolnia és mindent tudnia sem, mert nem leszünk egyedül – és persze Emőke, és semmi baj nem ér. Olyan nyugodt voltam, és ettől annyira jól szültem! Ha újra kellene szülnünk, ugyanígy csinálnánk, csak én nem aggódnék annyit előtte.
                        </p>   
                            
                    </div>
                </div>

                <p>
                    <b>No, de hogyan is akartunk mi szülni?</b>
                </p>
                <p>
                    Természetesen, a folyamatokat átélve, de nem meggyorsítva. Ehhez megfelelő kórházat kellett találnunk, mert a helyi protokollja nem engedélyezett minden “kívánságot” (ráadásul a nőgyógyászom is várandós volt, másikat meg nem akartam). Ezeket az információink alapján a Szent Imre és a Szent István Kórház is biztosította. Végül a Szent Imre Kórház szülészetére esett a választásunk. Ami 150 km-re van tőlünk…
                </p>
                <p>
                    Amiket kívántunk: nem akartam (és nem is kaptam oxytocint), EDA-t, borotválást (megoldottuk), beöntést, gátmetszést (első szülésnél sok helyen alkalmazzák), általam választott pozícióban vajúdhattam, szülhettem, a baba velünk lehetett születés után 2 óra hosszáig legalább , a magzatmáz rajta maradhatott, szopizhatott, bőr-bőr kontaktusban lehettünk, és vajúdás alatt ehettem, ihattam. Az ügyeletes orvos és szülésznő nagyon jók voltak, le a kalappal!! Mindent hagytak nekünk, támogatták a természetes szülést.
                </p>
                <p>
                    Bárkinek, aki a mi helyzetünkben találja magát, először is azt javasoljuk, ne féljen utána menni azoknak a körülményeknek, amelyek számára fontosak, hogy biztosítva legyenek a szülésnél, még ha közel 200 km-t is kell megtennie érte. Nem kell félni, simán oda lehet érni. Minden alkalommal, amikor Emőkénél ill. helyettes dúlánknál, Lénárd Orsinál voltunk konzultálni, mértük az időt, hogy kényelmesen, nem gyorshajtva, dugóban mennyi idő kell, hogy háztól házig odaérjünk a kórházba.
                </p>
                <p>
                    Másodszor, sosem késő lépni, ha valamit szeretnénk! Decembertől bújtam a netet információk után kutatva, olvastam Emőke weboldalán a történeteket. „Én is ilyet szeretnék!” – gondoltam. Azt hiszem, februárban írtam neki puhatolózó e-mailt, hogy vidéken is vállal-e szüléskísérést, de áprilisig még totojáztunk. Május végén szültünk. Orvost és szülésznőt már az idő rövidsége miatt sem tudtunk fogadni, de nagyon is jól jártunk az ügyeletesekkel. Szóval sosem késő elkezdeni.
                </p>
                <p>
                    <b>És megszületik</b>
                </p>
                <p>
                    Egy hidegfrontos szerda reggel, egy nyugodtan átaludt éjszaka után, reggel éreztem az alhasamban egy apró fájást. Szóltam a férjemnek, mert ilyet addig még soha nem éreztem. Mivel még nem volt jósló fájásom, ez új infó volt, de mások tapasztalataiból tudtam, hogy ettől még vígan benn maradhat hetekig a bébi. Oké, akkor elsétáltunk a CTG-re, pont aznap kellett mennünk. Az út alatt 7,5 percenként jöttek szépen a fájások, amik nem fájtak igazából, tényleg csak olyan görcsök voltak. A CTG alatt végig stopperoltam a faliórán (szép csendben), a rendszeresség fennmaradt, 6-7 percenként fél-egyperces alhasi fájdalom. Aztán felmentünk megmutatni a dokinak a papírt, akit akkor láttam életemben másodjára, mert az addigi nőgyógyászom egy héttel korábban maga is szült, így ő most nem dolgozott. Ő egyből mondta, hogy szerinte ezek nem jóslófájások, és szeretne megvizsgálni. Gyorsan elhebegtem neki, hogy úgy beszéltük meg a doktornővel, hogy felmegyünk Pestre szülni a dúlánkhoz. Mondta, hogy oké, akkor is megnéz.
                </p>
                <p>
                    Még nem kezdtem tágulni, de a doki nagyon jó fej volt és mondta, hogyha nem múlnak el a fájások, akkor ő kora délutánig benn van, menjünk vissza és megnéz, hogy tágultam-e, induljunk-e Pestre. Annyira korrekt volt, pedig nem is ismertük egymást. Úgyhogy hazamentünk, a férjem már nem ment be dolgozni, én elfoglaltam magam, közben folyamatosan jöttek a fájások. Végül bement a munkahelyére munkaeszközért, meg szóltunk a dúlánknak, hogy mi újság. Közben ettem, ittam, kétszer zuhanyoztam, hogy elmúlnak-e az összehúzódások, de NEM, és amit ettem, azt a szervezetem rá félórára mindig kiürítette magából. Nem is kellett beöntés – és nem is történt „baleset” sem. Még egyet zuhiztam, eredmény ugyanaz, egy kis vér is elkezdett folydogálni belőlem. Ez volt fél egy körül, addig férjem csinált szendvicseket az útra, meg összekészültünk a csomagokkal. Fél kettőkor beértünk a kórházba még itthon, hogy megnézzen az aranyos doki, hogy tágultam-e. Szegénykém épp kajált, úgyhogy kettőig vártunk rá. A vizsgálat során megállapította, hogy 3-4 cm-es a tágulás. Még vette a fáradtságot és levitt a szülészetre, hogy megnézze a baba szívhangját dopplerrel, ami tök rendben volt, aztán mondta, hogy szerinte 6-7 körül babánk lesz, induljunk Pestre, és sok sikert kívánt.
                </p>
                <p>
                    A kocsiútból semmire nem figyeltem, csak a km-jelző táblára, amelyik azt jelezte, hogy mennyire vagyunk még Pesttől. Se baleset, se dugó nem várt ránk, gyönyörűen felértünk a Szent Imrébe fél 5 körül, vigyáztak ránk odafenn. Emőke már foglalta nekünk a parkolóhelyet és mikor meglátta-hallotta egy fájásomat, egyből tudta, hol tartunk és mondta, hogy JÓÓÓ!
                </p>
                <p>
                    Kiderült, hogy már 3 ujjnyira kitágultam. A vizsgálat előtt az ügyeletes orvos összefutott Emőkével is, akivel már dolgoztak együtt. Az IKEA szoba foglalt volt, de sebaj, a sima szülőszobában is jól elvoltunk, kaptunk mindent, ami kellett. Pár perc múlva jött a férjem is, megmutatták, hol tud átöltözni, az utcai cuccát az öltözőben kellett hagyja, de az értékeit áthozhatta. Mivel hozott magával kórházas ruhát, nem vetették vele fel a műtőscuccot!
                </p>
                <p>
                    Emőke megkérdezte, hogy mihez volna kedvem? Egyből rávágtam, hogy meleg zuhanyra a labdán ülve! Mondta, hogy rendben, és mentünk is a zuhany alá. Engedett minket a férjemmel együtt lenni, ő locsolta rám a vizet, én a labdán ültem a fájások alatt és a mosdóba kapaszkodtam. Egyszer csak éreztem, hogy jön egy kis víz belőlem. Szóltunk Emőkének, mondta, hogy igen, ez magzatvíz, és közben a nyákdugóm is jött szépen kifelé. Kértem Emőkétől szőlőcukrot is, ötösével ettem, de akkor mindig rám jött a fájás… hmmm. Aztán még egyet megettem, még egy fájás , és megbeszéltük, hogy akkor most visszamegyünk a szülőszobára. Ezek a fájások nem tudom, hány percesek voltak, de ha nem a labdán ültem volna, akkor lehet, nem akartam volna tovább csinálni. Így viszont nagyon jól elvoltam.
                </p>
                <p>
                    A szülőszobán is labdáztam, mosdókagylóba kapaszkodtam (attól féltem, hogy letöröm).
                </p>
                <p>
                    Amikor jött a fájás, a férjem és Emőke felváltva masszírozták a derekamat vajúdóolajjal, ami marha jólesett, és közben mondták, hogy ügyes vagyok. Itt már elég intenzíven ó-ztam a kifújásoknál, Emőke bíztatott, hogy nyugodtan csináljam minél mélyebb hangon, engedjem el magam. Elég csendes, amolyan „jajnezavarjunkmásokat”-típus vagyok, nem gondoltam volna, de olyan tehénbőgések jöttek ki belőlem, hogy öröm volt hallgatni! És tényleg jó volt ez a frekvencia! Közben néha hallottam a szomszéd szülőszoba hangjait (gipszkarton fal), elgondolkodtam, hogy a bőgésem zavar-e másokat, meg néha eszembe jutott, hogy mi lenne, ha beraknánk zenét, de mire szóltam volna, már jött a következő fájás, meg aztán nem akartam, hogy az isteni derékmasszázs abbamaradjon.
                </p>
                <p>
                    Azt hiszem, a négykézláb vajúdást is kipróbáltam, de a labda nyert. Aztán egyszer csak Emőke azt mondta, hogy mi lenne, ha kicsit sétálnánk, úgyis jön a szülésznő megvizsgálni, mert ő úgy hallja, hogy finisben vagyunk. Ja, és jött a “nagydolgom van”- inger is, és a méhem elkezdett tolni (Nem én!). El kezdett feszíteni belülről valami, amit úgy közöltem, hogy „Fájfájfáj, feszííít!”
                </p>
                <p>
                    “Felpattantunk” a szülőágyra, megvizsgált a szülésznő: a méhszájam teljesen kinyílt, a burok még nagyjából egyben volt (felül repedt meg korábban), nem fojt el minden magzatvíz, na, ezen segített, mielőtt annyit mondtam volna, hogy bakfitty. Fogalmam sem volt, hány óra, olyan fél 7-7 körül lehetett.
                </p>
                <p>
                    Bejött a doktor is, megkérdezték, hogyan szeretnék szülni? De nem fogtam fel, hogy azért kérdezi, mert mindjárt szülök! Gondoltam, még elleszek egy darabig… Hááát, mondom, kipróbálnám a széket… Behozták, ráültem, a doki mondta, hogy lehet, hogy el fog zsibbadni a fenekem, és igaza is lett. A férjem mögém ült, a fájások közt rádőltem és pihiztem. Itt már nem éreztem magam olyan kényelmesen, mert feszítette a hüvelyemet a kis drága baba, és nagyon intenzíven fájtak a fájások. A köztük lévő szünet viszont isteni volt, tényleg pihentető, csak rövid.
                </p>
                <p>
                    Mivel a fenekem elzsibbadt, a doki és Emőke javasolta, hogy sétáljunk egyet. Én ugyan nem! De ha beleguggolnék a fájásba, akkor nagyon szépen csúszhatna lefelé a baba – mondták. Hát én inkább hazamentem volna, de mindegy, legyen meg az örömük, gondoltam.
                </p>
                <p>
                    Egyik kezem alatt a férjem, a másik alatt Emőke, fájáskor biztattak, hogy guggoljak nyitott lábbal. Áááááááááááá! Guggoltam én, de kb. úgy nézett ki, mint amikor pisilést tartasz vissza, lábaid összezárva, enyhén beguggolva ugrálsz (Jó, nem ugráltam ), ugyanis annyira feszített, hogy gondoltam, nincs az az isten, hogy én leguggolva végigéljek egy fájást. Mikor látták, hogy ez nem jön be nekem, pozíciót váltottunk: felmásztam a szülőágyra, a háttámlával szemben, megkapaszkodtam az oldalsó kapaszkodókban és térdeplő helyzetben vártam a fájásokat. Ez azért volt jó, mert ugyan fájt, de legalább tudtam kapaszkodni, illetve megvolt a terpesztő pozíció. Derékmasszimat kaptam, férjem bíztatott, hogy ügyi vagyok, doki és Emőke is csak annyit mondott: „Hagyja, engedje!” Nagyon feszített, hisztis voltam és egyfolytában kérdezgettem, hogy látszik már? Meg hogy csinálják a gátvédelmet?
                </p>
                <p>
                    Aztán egyszer csak nagyon égető érzést éreztem a gátamnál, mondták, hogy látszik a buksija és van haja! De ekkor már el is múlt a tolófájás. Hál’istennek gyorsan jött a következő, A legfeszítőbb, legégetőbb érzés és kibluggyant – illetve bocsánat, rakétaként kilőtt ( a férjem megjegyzése, mert ő látta ) – a babánk. A férjem utólag mesélte, hogy pont amikor megszületett, a szülésznő elkezdte mondani, hogy „Ne nyom…,!”, mert meglátta, hogy a kezecskéje a buksijánál van és gondolom, el akart lihegtetni egy fájást, hogy kicsit köré tudjon tágulni a testem, de mire kimondta volna, már meg is született a kisfiunk. <b>Gyönyörű volt!!!</b>
                </p>
                <p>
                    Nem sírt fel, csak amikor azon manővereztünk, hogy ülő helyzetbe forduljak és rám tegyék, de nem is igazán sírt. Aztán fél óráig nyugi volt, egy vékonyabb pelus törülközőben, és egy vastag frottír törölközőben pihent rajtam (ezt mi vittük), utána jött a szülésznő, elcsatolta a zsinórt, mert már nem lüktetett, apa elvágta, utána megszültem a méhlepényt is. Egy tolóingerrel kijött, nagyon finom, meleg, puha, simogató érzés volt a baba után. Meg is nézhettük, aztán elvitték megvizsgálni, hogy minden része kint van-e. Jöttek a csecsemősök is valamikor, de megkértük őket (apa volt a szószóló), hogy ne fürdessék meg, és hogy hagy maradjon még nálunk a piros törölközőjében. Mondták, hogy rendben, akkor visszajönnek később. Közben a baba és a vastag törülköző közötti pelust kivettük, mert jól átnedvesedett. Lett egy pihepuha, selymes babánk!!!
                </p>
                <p>
                    Aztán ellátták a repedéseimet (fej mellett a kezecske, ugye), addig szorongathattam Emőke jobb kezét (pedig értékes munkaeszköz! ). A babánkra közben apa vigyázott, aztán amikor már nagyon tátogott, akkor odatették a cicimre, hogy ehessen. Na, innentől akármit is csinálhatott volna a dokibácsi az alfelemen, nem figyeltem. Addig húzódoztam néha és egyebek. Kb. 1/2 10 körül kész lettünk. Aztán még együtt voltunk egy óra hosszát, Emőke hagyott nekünk időt hármasban is.
                </p>
                <p><b>Egyszóval: csodajó szülés volt!!! Mindenkinek köszönjük és nektek, akik ezt olvassátok, hasonló szép szülést kívánunk!</b></p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <a href="#">Olvasnivaló</a>
                <a href="#">Szüléstörténetek</a>
            </div>
        </div>
    </section>    
        </div>
      )
}
