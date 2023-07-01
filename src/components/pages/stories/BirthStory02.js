import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth02Pic1 from "../../../image/szulestort/szules_story_02_hero.png";
import Birth02Pic2 from "../../../image/szulestort/szules_story_02_.png";

export default function BirthStory02() {
  return (
    <div>
       <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Birth02Pic1} alt="Csodak marpedig vannak!"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Csodák márpedig vannak!</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2018. január 16.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                   <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Birth02Pic2} alt="Csodak marpedig vannak!"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            2017. októberében a harmadik lombikprogramunk volt, ahol egy embrió elkezdett fejlődni, amit a protokoll szerinti vérvétel HCG tartalma kimutatott. Bár örömünk határtalan volt, a szám alacsonyabb volt a biztatónál…de azért mi bíztunk…azonban az két nap múlva nem duplázódni, de csökkenni kezdett. Az imádott meddőségi dokink a Kaáli intézetben azt mondta, hogy abba kell hagyni a terhesség megmaradását segítő progeszteron hormont, aminek hatására a vérzés megjön és a kis petezsákocska kiürül a szervezetből. 
                        </p>
                        
                    </div>
                </div>

                <p>
                    Vele együtt akkor már a 12. kis embriót ismerhettünk meg, de 2014 januárjától mindegyiktől búcsút kellett vennünk vagy biokémiai terhesség, vagy észrevétlen abortusz miatt a 6. és a 8. héten is… Vigasztalhatatlan voltam. Pont november 1-jén, halottak napján jött meg a vérzés, amikor anyósoméknál voltunk. Emlékszem én egy nagy sétát tettem a falu határában, az erdőbe elmenekülve a családtól (s egy nagypocakos, terhessége vége fele járó látogatóba érkező rokontól). Arra gondoltam, hogy nem adom fel, mert tudom, hogy lesz gyerekünk, lesz olyan, aki velünk tud és akar maradni, csak ki kell várnunk őt. A következő lombikunk három hónap múlva, januárra volt tervezve. Én elkezdtem új pszichológushoz járni, hogy tőle autogén tréninget tanuljak, meg hormonterapeutához, hogy rendbe rakjuk a rendbe hozandókat és elmentem Aviva torna betanításra is: láthatóan mindenféle új utakat kerestem és vártam a januárt. Emlékszem a betanításra egy lombikos és egy ezeréves barátnőm jött el velem november 27-n, vasárnap… S emlékszem arra is, hogy annál a gyakorlatnál, amit terheseknek hangsúlyosan nem szabad csinálni, én észrevétlenül nem csináltam, láthatatlanul ellógtam a gyakorlatot, mert …mert volt egy belső megérzésem… Előző napi álmomban vagyis inkább az álom határán azt láttam, hogy egy kis embriót a méhemben betakargatok két kezemmel, hogy óvjam őt és jó meleget adjak neki. Láttam őt csendesen elpihenni és álmában mosolyogni. Még ma is látom…
                </p>
                <p>
                    Hétfőn elmentünk G-vel magán vérvételre a Synlabba (ahol törzsvásárló voltam már addigra), mert én azt hazudtam neki, hogy kell csináltatni megint új vérvételt az előző lombik sikertelensége miatt a következőhöz… tűkön ültem egész nap a melóhelyen és vártam az emailt a leletemmel… Annyira ideges voltam, hogy kiszaladtam a sarki DM-be és vettem egy terhes-tesztet (egyet?!, ötöt…), amit a melóhely mosdójában meg is csináltam és (persze, hogy) ott volt a két csík! Fél négy után pár perccel aztán megjött a lelet és végérvényesen bebizonyosodott, hogy velünk van Ő. Hazafele vettem egy képeslapot és megírtam G szülinapi ajándékához a kísérőszöveget, hiszen ő aznap lett 38. éves. S ő látva a teszteket, a leletet és a képeslapot is, csak rám nézett és annyit kérdezett, hogy „…de biztos?” , „… és hogy, az hogy lehet…?” Elmagyaráztam neki. Aztán sírva nevettünk.
                </p>
                <p>
                    És én elkezdtem félni, hogy mi lesz, ha Ő sem marad velünk…
                </p>
                <p>
                    Két naponta nézettem a véremből HCG hormonszintet, hogy duplázódik-e és minden másnapra a kétségbeesés szélére zuhantam az eredmény megérkezéséig azt gondolván, hogy biztos, hogy baj van, hogy elmegy, vagy hogy már nincs is velünk. De az eredmények mindig tökéletesek és több, mint biztatóak voltak. Elmentem a meddőségi Dokimhoz (mert nekem volt hormonterapeutám, endokrinológusom, pszichológusom, meddőségi dokim, de nőgyógyászom, no az nem…), aki a progeszteron mellett felírta nekem saját kérésemre a vérhígítót is, amit minden nap szúrni kellett…merthogy voltak tanulmányok arról, hogy ez segíti a terhesség megmaradását… (és az előző elhaló terhesség miatt csináltatott vizsgálat eredményeként a jóval később megérkező eredmény szerint erre szükség is volt, mert MTHFR homozigóta vagyok, akinek a terhesség megtartásában segíthet a vérhígítás…csak ezt korábban nem tudtuk…)
                </p>
                <p>
                    A 7. héten, elmentem még mindig a Dokihoz, hogy ellenőrizzük a Picit és szívhangot hallgassunk…felfeküdtem az ágyra a vizsgálóban és elöntött az első és addigi utolsó alkalom emléke, amikor már szívhangot vártunk… és az nem jött… és én éreztem, ahogy rám tör a félelem. A Doki Nikivel, a kis asszisztenssel (akit nagyon csíptem, mert a futószalag kezelésekben nekem ő volt az emberi hang, jóban voltunk és ő igazán drukkolt nekünk…) csak meredten nézte a monitort és a vizsgálót ellepte a csend…a túl hosszú csend… és én éreztem, ahogy összeomlok… A Doki nagyon szomorúan – tényleg szomorúan mondta – hogy sajnos nincs szívhang…és én már akkor sírtam…és az asszisztens is sírt…Majd megkérdezték, hogy elbúcsúzom-e az embriómtól és én igent mondtam, bár nemet akartam…nem akartam látni a fekete monitort… s (mint egy giccses hollywoodi filmben, de tényleg) Niki felkiáltott, hogy de hát pulzál, ott van, látom! És én láttam is meg is nem is a könnyeimen keresztül a kis lüktetést, de felcsavarták a hangerőt és a szobát elárasztotta az ütemes dobogás hangja, mintha száncsengős lovak patái dübörögnének. Azért a Doki két nap múlvára visszahívott, hogy de még egyszer, hogy biztos, ami biztos…
                </p>
                <p>
                    Végigrettegtem az első 12 hetet. Egy darabig még kétnaponta vérvételre mentem (a Synlab belőlem élt…esküszöm, hogy a két kis néni, már várt rám reggelente…). Aztán eljött az a pillanat, amikor az érték már nem mutatott semmit, nem lehetett belőle tudni, hogy minden rendben van-e…Ámde nekem semmilyen terhességi tünetem nem volt. Semmi. Se egy reggeli rosszullét, se egy hányás, se egy émelygés, se kívánósság, semmi, SEMMI… Testem minden rezdülését lestem, és mint a hullámvasúton, egyszer biztos voltam abban, hogy minden rendben, aztán meg abban, hogy baj van… Borzasztó volt. Darabjaimra hullottam és olyan feszült voltam, hogy G megőrült már tőlem, haraptam mindenre… és a napok nem haladtak. Olyan hosszú napokat még sosem éltem meg korábban, mert akkor és ott minden pillanatot túl kellett élni, meg kellett élni és az idő egyszerűen csak vánszorgott és az én szorongásom meg csak nőtt… miközben hinni akartam, AKARTAM, hogy minden rendben. Alig vártam a 12.heti genetikai ultrahangot, amit pont attól a bizonyos november 1-től számoltak, és amely dátum végigkövette a terhességem… Ez a 12. heti eredmény volt a vízválasztó. Budapesten a legjobb ultrahangos azt mondta, hogy miden rendben, nem javasol további – a vetélés kockázatát is magában rejtő – vizsgálatot, mert a tarkóredő vastagsága és minden egyéb adat optimálisan tökéletes! A kombinált teszt is alacsony rizikót adott ki…úgyhogy én egy nagy sírás után (hogy legyen-e egy vagyonért anyai vérből többek között Down-szindrómát néző ellenőrző teszt) egyszer csak elengedtem a félelmeimet…
                </p>
                <p>
                    Elkezdtem járni magzati kapcsolatanalízisre és így hetente találkoztunk a Picivel. Az élmények fontosak voltak, szerettem ezeket az alkalmakat, amikor a méhemmel és Maszattal beszélgettünk (ahogy elkezdtük hívni a babát, merthogy az ultrahang képeken gyakorlatilag eleinte csak egy maszatot lehetett látni és annak örülni… J). A terhességem pedig végig teljesen problémamentesen zajlott, s bár az első trimeszterben több, mint 10 kilót híztam (…), utána már csak összesen 8 jött rám. Sosem voltam rosszul, sőt, kivirultam (legalábbis én úgy éreztem). Nagyon-nagyon élveztem a terhességet és összességében a várandós létet – imádtam, hogy másállapotban vagyok, hogy bennem van Maszat, hogy megnéznek az utcán és kedvesen mosolyognak, hogy minden nap el lehet olvasni, hogy hogyan fejlődik a baba, hogy egyre nagyobb a pocim és…mindent. Imádtam terhesnek lenni. Imádtam nagy pocival táncolni járni G-vel, jönni-menni a városban, áprilistól otthon lenni még hónapokig és csak az anyaságra és Maszatra készülni. Gyönyörű hónapok voltak. A 35. héten aztán szülészorvost váltottam, mert egy nyílt nap keretében korábban megismertem a Békés Dúlakört és vezetőjüket, Emőkét, amikor is teljes bizonyossággal belém nyílalt, hogy csak dúlával és csak Emőkével szeretnék szülni, aki legnagyobb döbbenetemre elvállalt. Viszont dúlás szülést sem az akkori dokim, sem a kórházam nem támogatott, választanom kellett volna a párom és Emőke között, ami egy abszurdumnak tűnt. Miután az orvosban amúgy is megtört addigra a bizodalmam. Emőke lelki támogatásával megkerestem az új orvost és ő elvállalt, a Szent Imre kórházáról meg elég jókat lehetett hallani ahhoz, hogy a rövid idő ellenére elfogadjam az új orvos régről ismert személyét és személyiségét is. Emőkével közben találkoztunk és beszélgettünk, amely beszélgetések mindig olyan dolgokat hoztak felszínre, amelyekkel éreztem, hogy dolgoznom kell… volt hogy sírtam egy-egy felismeréstől és zokogva és volt hogy felszabadultan, tele energiával és hittel mentem el tőle. Az utolsó napokban elég komoly válságot éltem meg, de Emőkével való beszélgetések és támogatása mellett a kiírt időpont előtti hétre szépen helyére került minden mozaik bennem, és én minden porcikámban megnyugodtam. Tudtam, hogy pont olyan szülésem és Maszat olyan születése lesz, amilyennek lennie kell – akármilyen is az.
                </p>
                <p>
                    Egy nappal a kiírt dátum előtt, egy meleg kánikulai vasárnap rendszeres fájásaim voltak egész nap, de nem túl erősek és nem túl hosszan…gondoltam, hogy ezek lesznek a jósló fájások. Persze a bőrönd (kettő…) össze volt már készítve (hetek óta…)… Izgatottan vártam a másnap reggeli CTG vizsgálatot, amire biztos, ami biztos alapon G is elkísért, mert én úgy gondoltam, hogy talán haza sem engednek már…
                </p>
                <p>
                    Másnap reggel fél kilenckor felrakták rám a gépet és megvizsgált az orvos is, aki közölte, hogy nulla (semmi, nuku, nil) méhtevékenységem van, nyugodtan menjek haza, ez még akár napok kérdése is lehet. A vizsgálat a szokásoshoz képest erőteljesen kellemetlen volt, mondhatni fájt, de kvázi nyugodtan elindultunk hazafele. Még az aulából azért felhívtam a bábámat, hogy adjon át helyettesének, Katának, mert mint azt az első perctől tudtam, neki a nyári szünet előtt ez a reggel volt az utolsó benn léte és 10-kor indult nyaralni …Kicsit fájt a szívem, mert nála akartam volna szülni…, de gondoltam, hogy ahogy lesz, úgy lesz…már…
                </p>
                <p>
                    A kocsihoz menet – miután az augusztusi kánikulában hatalmas zivatar támadt, ami után vizes, pocsolyás volt az út és én – bár G-be kapaszkodtam, elestem. Egy járókelővel tudtak csak felállítani a nagy pocimmal, de szerencsére megúsztam az egészet egy térd felhorzsolással, aminek a nyoma még mindig látszik…remélem örökre fog (mi lett volna,ha lábam töröm, abba bele sem akarok gondolni).
                </p>
                <p>
                    Otthon aztán én ledőltem aludni, G meg elment dolgozni… 11 körül arra ébredtem, hogy ugyanolyan fájásaim vannak, mint előző nap. De tudtam (ha-ha-ha), hogy ez semmit nem jelent, úgyhogy megpróbáltam visszaaludni,  de az már nem ment. Kínomban elkezdtem a telefonomon mérni a fájásokat és kicsit meglepődtem, hogy elég rendszeres négypercesekké álltak össze. Hívtam G-t, hogy ez van és bár vettem fürdőt is, nem múlt el… úgyhogy tanácsára hívtam Emőkét is, akinek szintén próbáltam elmondani, hogy mi van. Ő hallgatott és szépen kivárta a 4 percenkénti csöndeket, amik meg-megszakították a mondandóm…végül közölte, hogy azért ő – ha nem bánom – átjön, ahogy korábban megbeszéltük a dolgot beinduló szülés esetére.
                </p>
                <p>
                    Innen beállt egy kis pánik, mert pillanatok alatt úgy éreztem a fájások egyre sűrűbbek és egyre erőteljesebbek, és reggel az Indexen még olvastam a hírt, hogy egy párt az M7-ről rendőrök kísértek be a kórházba, hogy a nő ne a kocsiba szüljön … én láttam magam előtt, hogy a lakás padlóján fogok megszülni… G próbált higgadt maradni, de látszott, hogy ő sincs a helyzet magaslatán, pláne miután Emőke telefonált, hogy a GPS rossz helyre irányította (ami a mi címünkkel, mint később megerősítést nyert, ez gyakran előfordul…). Én röviden szólva kétségbeestem és mondtam G-nek, hogy azonnal irány a kórház…baj, ne legyen.
                </p>
                <p>
                    Elindultunk, de a sarki boltnál megálltunk, mert Emőke megérkezett kocsival és integetett, hogy álljunk félre. Átsétált a mi kocsinkhoz és nyugodtan, mélyen a szemembe nézve megkérdezte, hogy biztos, hogy a kórházba akarok-e menni. Én néhány mély levegővétel után már lecsendesedve mondtam, hogy nem, dehogy, csak biztonságban akartam lenni… úgyhogy végül visszasétáltunk a lakásba.  Itt Emőke vizet forralt és minden fájásnál a hasamra rakott egy forró vizes, aromás borogatást, ami annyira jól esett. G elkezdett besegíteni, és egy idő után szép harmóniában adogatták a hasamra az enyhülést, míg én a fájásoknál a széktámlára, konyhapultra támaszkodtam, a szünetekben meg Emőke tanácsára a fotelben ülve pihenni próbáltam. Én akkor még tényleg nem gondoltam, hogy ez a szülés eleje, azt hittem, hogy el fog múlni és kiderül, hogy jóslók…hisz reggel mondták, hogy semmi nincs… Nagyon érdekes volt a fájás jövése és távozása: mikor volt, nagyon jelen volt, mikor elment, teljesen eltűnt… halk morajszerű érzés jelezte a jöttét, és egy finom lecsengéssel távozott. Ahogy telt az idő egyre jobban magával ragadott az érzés, csak az rántott ki néha, hogy hallottam, hogy Emőke hiába hívja, Kata nem vette fel a telefont (megtudtuk, hogy reggel 10-ig szülést segített és akkor ment haza, mikor mi eljöttünk onnan…). Egy dolog volt biztos, hogy nem akarok úgy a kórházba menni, hogy ő nem vár ott minket, hiszen a kórházi protokoll szerint négy centis tágulás alatt a gyerekágyas osztályon helyeznek el, G és Emőke nélkül. Ez volt az, amit én nem akartam, mondhatni csak ezt nem akartam: egyedül maradni.
                </p>
                <p>
                    Éreztem, hogy egyre intenzívebb és egyre mélyebben fájdalmas hullámok jönnek, s egy idő után már nem esett jól a meleg (amúgy is igazi kánikulai nap volt…), hanem végül a WC-n ülve próbáltam átélni a fájásokat. Tudom, hogy ekkor már erőteljes hangom is volt, visszhangzott minden az én hörgésemtől, de Emőke mondta, hogy „udvariasan szülni, nem lehet”, úgyhogy nem foglalkoztam vele, hörögtem, ahogy jól esett. S igen, nagyon jól esett hangosan és öblösen kiengedni a levegőt… Úgyhogy én HÖRÖGTEM és fújtattam, miközben próbáltam beszélgetni Maszattal, hogy minden rendben, érzem őt és várom. Ahogy a fájások csak jöttek-jöttek én úgy éreztem, hogy lassan nincs is szünet és azt, hogy egyre-egyre mélyebb, erősebb, valahogy még fájóbb az érzés. Mondtam, induljunk el…hat óra volt. A kocsiban Emőke kérésemre mellém ült hátra és bár iszonyú meleg kánikulai este volt nálunk minden ablak felhúzva volt, hogy ne hallatszódjon ki a hörgésem. Mivel vizet nem vettünk még, megálltunk még egy benzinkútnál is, de végül csak eljutottunk a kórházig. Ott hárompercenként megálltam a fájdalomtól és bár próbáltam halkan hörögni, de az nem nagyon ment, így mindenki jóóól megnézett, de Emőke válla mögé bújva leszartam…Végre feljutottunk a szülőszobákhoz és nagy megkönnyebbülésemre már Kata nyitott ajtót. Megvizsgált és közölte, hogy már több, mint 8 centiméterre tágultam, úgyhogy nagyon ügyesek vagyunk J Levetkőztem meztelenre (hiába volt jó pár hálóing és egy gyönyörűséges szülőruha becsomagolva, csak ez esett jól…) és beültem egy előkészített kádba, mert azt a szobát kaptuk meg, amelyik az ún. Ikeás: egy nagy franciaágy, kád, saját WC és bordásfal…imádnivalóan otthonos, nem-kórházi szoba volt ez (s érdekes módon csak ezt néztük meg, mikor kórházi látogatáson voltunk). Emőke lesötétített mindent és csendben tette mindenki a dolgát. Emőke nekem gyertyákat tett a kád köré és még valami finom aroma lengte be a helyiséget. A fájások intenzíven jöttek és emlékszem, azt hajtogattam a fájások jöttekor, mint beakadt lemez, hogy „nem jó”…egészen addig, míg Emőke emlékeztetett, hogy ez „de jó, nagyon jó”…, hiszen a fiam jöttét jelzik. És én ettől a szótól átkerültem egy másik dimenzióba, elhittem végre, hogy jön Maszat.
                </p>
                <p>
                    Egyedül azt éreztem, hogy nagyon melegem van, s így G és Emőke felváltva cserélgette a homlokomon és vállamon a fájások alatt a hideg vizes borogatást és fáradhatatlanul legyeztek, ami annyira, de annyira jól esett. G diktálta belém, hol az energiazselét, hol a csokit, hol egy kis vizet, hol szőlőcukrot, és törzsőrmesteri szigorral ellenőrizte, hogy rágom és lenyelem –nem volt apelláta (ugye az egyik felkészítő tanfolyamon mondták, hogy a szülés kvázi egy marathon futással ér fel…hát ő így készült J).
                </p>
                <p>
                    Az orvos és Kata magunkra hagyott G-vel és Emőkével és csak időnként ellenőrizték, hogy hogyan állunk. Az egyik ilyen ellenőrzéskor (mikor szokásához híven külön engedélyt kért Kata arra, hogy felnyúljon), mondta, hogy kész, teljesen kinyílt a méhszáj. Ezért jó lenne, ha pózt váltanánk, hogy segítsük Maszatot lejjebb jönni.  Innentől egy teljesen másfajta fájás és időszámítás kezdődött… felálltam és a bordásfalba kapaszkodva, fájásokkor leguggolva próbáltam lejjebb és lejjebb segíteni a Picit. Aztán újra a WC-n ültem és Emőke meg előttem állt. Én arra emlékszem, hogy minden fájáskor a hasába fúrtam a fejem ő meg duruzsolt valamit és simogatott végtelen megnyugtatóan. Aztán az orvos mondta, hogy váltsunk újra pozíciót és lefektetett az ágyra. A lábaimat felhúzva tartva oldalfekvésben és háton próbáltuk tovább folytatni, de nekem ez egyáltalán nem volt jó. Úgy éreztem, így nem tudok nyomni, nem tudok semmit csinálni és a csípőm is görcsölt tőle, utáltam (belegondolni, hogy végig így kellett volna szülnöm, hátborzongató)… De ez volt az a pillanat is, amikor a fájások intenzitása és gyakorisága is csökkent és én megélhettem életem egyik legszebb pillanatát, amikor mindenki magunkra hagyva a háttérbe vonult és én G-hez bújhattam és ő csókolt és csókolt. Olyan bensőséges-meghitt nyugalom szállt meg, tudva hogy ezek az utolsó percek, hogy ketten vagyunk, és mindjárt apa-anyaként leszünk már szülőpár és lesz egy pici kisbabánk…gyerekünk.  Sírtam a meghatottságtól… Visszajött az orvos és komolyabb hangon kértek, hogy indítsuk tovább, folytassuk a születést, ne maradjunk túl sokáig ebben a helyzetben. Így – Emőke tanácsára, kérésemre – újra jött a bordásfal és lassan a fájások is vissza-visszatértek.  Az orvoson láttam, hogy nem egészen elégedett és némi aggódást is éreztem, de Emőke és Kata megnyugtatott, hogy minden a legnagyobb rendben van és jól haladunk. Úgyhogy elengedtem a kérdést, amit amúgy is nehezen tudtam aggyal fogni, mert egy teljesen más tudatállapotban voltam: bár hallottam és fogtam a körülettem lévők beszédét, gesztusát, de olyan távolinak és megfoghatatlannak tűntek. Csak befele volt jó figyelni, csak Maszathoz és Maszattal tudtam akkor már beszélgetni és bár őrülten hangzik, de élveztem, igazán élveztem és kiélveztem a fájásokat, a szülésem és születése minden percét.  Megint kiment mindenki  és Emőke arra kért, hogy próbáljam azt képzelni, hogy a víz alá bukom: vegyek egy nagy levegőt, ne adjak ki hangot utána és bukjak alá, nyomjak kifele-lefele hosszan és erősen… Ez volt a legnehezebb nekem. Nem tudtam,hogy ez mit is jelent igazából és mit kéne csinálnom, de próbáltam-próbáltam.  Aztán Emőke segítségével egy kiszakított pár perces beszélgetés alatt rájöttem, hogy el kell tudnom engedni az imádott terhességem és meg kell tudnom engedni Maszatnak, hogy jöjjön és kezdődjön valami új azáltal, hogy elengedem, azt amit el kell: a magzati Maszatot. Hagynom kell Őt végre megszületni…  Amikor ezt az érzést átélhettem és elsírhattam magam, …utána szinte a következő pillanatban azt éreztem, hogy szét fogok szakadni, hogy annyira nyom-szakít-hasít belülről Maszat, hogy szétszakadok, s én ezt még ösztönösen finomítani akartam, tompítani a fájását … s sajnos még az akkor már órák óta igen hangos nyögést-hörgést-sikolyt sem tudtam abbahagyni, de finomítani sem…
                </p>
                <p>
                    Visszajött az orvos is és a Kata is, és együtt próbáltak segíteni. Később Kata felnyúlt és közölte, hogy érzi a fejét és ha akarom, én is érezhetem… odanyúltam és tényleg éreztem a kis hajasbabafejecskét…hihetetlen érzés volt, egyszerre bizarr és gyönyörű, fájdalmas és csodálatos. Azt mondták, hogy most nagy levegő és lassan nyomjak csak és csak mikor mondják. Egy pár nyomás után kaptam egy kis széket, alá törülközőt és éreztem, hogy ez az, ezt akarom, ez a pozíció nagyon jóóó és éreztem, hogy iszonyúan jön és jön és csúszik és hopp…a földön, Kata két óvó kezében landolt  egy rúgkapáló, véres-mázos csöppség, aki rögvest felsírt olyan nagyon szeretnivalóan. Visszafeküdtünk G-vel az ágyra és rám rakták Maszatot és betakargatták. Ő összekuporodva bújt hozzám és G-vel lestünk be a puha takaró alá, hogy lássuk őt végre. Egy kis összenyomódott, ráncos, maszatos kis Maszat nézett vissza kancsalin (pont ezért hetekig tininindzsateknőcnek és ufófejnek hívtuk… ) – és én ilyen boldog még nem voltam…
                </p>
                <p>
                    Éreztem, ahogy csúszik feljebb a mellkasomon a mellemre és Emőke kis segítségével megtalálta a mellbimbót is és cuppant, lelkesen szopizott. Megkérdezték, hogy mi a neve és én végre megtudtam, hogy apa hogy döntött J Aztán csak összebújva, súgva leskelődtünk és néztük, ahogy szopizik és pislog és szipákol, néha nézelődik kifele, majd csendben alszik. Imádtuk minden percét az első együttlétünknek.
                </p>
                <p>
                    Közben előbb észrevétlen, majd egyre aggódóbban az Orvos és Kata a placentát kezdte hiányolni, ezért oxitocint kaptam meg homeopátiás szereket, meg erőteljesen nyomtak, masszíroztak…de semmi nem történt. Én Emőke arcát látva nem aggódtam, mert egyszerűen nem tudtam aggódni és nem is tudtam, hogy kéne…
                </p>
                <p>
                    Majd az orvos mondta, hogy két lehetőségem van, mert a placentának meg kell születnie…vagy benyúl és kiszedi kézzel, vagy ugyanezt altatásban teszi meg. Az első verzió nagyon-nagyon fog fájni, a második nem, de altatással és utána lábadozással jár… Megkértem, hogy hagyjanak kicsit magunkra G-vel és Emőkével, majd átbeszélve, megvitatva a kérdést úgy döntöttem,  hogy ne legyen altatás…Emőke azt mondta, hogy benn lesz velem és segít, így nem féltem. De végül az orvos – a személyes érintettség okán – nem vállalt el, hanem az ügyeletes orvosra bízta a dolgot. Maszat az apjához bújt, aki a mellkasán ún. szőrkontaktban tartva a Picit, folyamatosan beszélt hozzá és nyugtatta, hogy minden rendben lesz és jó, hogy velünk van, itt van… ezek voltak az utolsó szavak, amiket hallottam mielőtt kitoltak a szobából és vittek a műtőbe… mikor hajnal három fele felébredtem G és Emőke ott állt és ébresztgetett. Megtudtam, hogy egy nagy, 6-7 centiméteres tojásdad mióma fogta vissza a placentát, de mindkettőt kikaparták és most a sebnek csak gyógyulnia kell a méhvel együtt. Mondták, hogy Maszat lefürdött, lemérték, megvizsgálták, és most alszik, jól van. G elköszönt, hogy reggel jön és Emőke is biztosított róla, hogy bármikor hívhatom és jön.
                </p>
                <p>
                    Mikor legközelebb felébredtem az őrzőben, akkor Kata áttolt tolószékben a gyerekágyas osztály egy kétágyas szobájába, ahol még rögtön elaludtam. Reggel hatkor keltettek a vizittel és, hogy kapnom kell antibiotikumokat öt napig. A nővérke kérdésemre azt mondta, hogyha felállok és kimegyek érte, akkor behozhatom a csecsemősöktől a fiam (a FIAM!). Mivel nagyon gyenge voltam, gondoltam majd később. De Emőke addigra már írt sms-t, és az azt követő telefonhívás során  megkérdezte, hogy velem van-e már Maszat… mire mondtam, hogy mi a helyzet elmondta, hogy nagyon fontos, hogy velem legyen a Pici és ahogy csak lehet szopizzon, mert biztos vár rám és éhes. Ez olyan erőt adott, hogy kivetettem katétert, lezuhanyoztam és eltotyogtam Maszatért, aki ott feküdt a kis bevásárló kosárszerűségében  és mikor elindultam vele a szobám fele, felébredt és rám nézett és örült… és én bőgtem… és jött Apa megnézni minket és elkezdődött a közös életünk.
                </p>
                <p>
                    Most a kis hordozójában a mellkasomra kötve éppen alszik ahogy ezt írom, és hallom a kis szuszogását. Várjuk Apát haza a munkából: és ez a csoda szűnni nem akar és én minden nap hálás vagyok, hogy vannak ők nekem. A fiúk… életem csodái.
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to="/stories">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
 
    </div>
  )
}
