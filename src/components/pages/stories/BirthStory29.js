import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth29Pic1 from "../../../image/szulestort/szules-story-29-hero-hossu-ut.png";
import Birth29Pic2 from "../../../image/szulestort/szules-story-29-hosszu-ut.jpg";

export default function BirthStory29() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth29Pic1} alt="hosszu-ut"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Hosszú út</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                         <Link to="/stories2" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth29Pic2} alt="hosszu-ut"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Hajnali fél kettő…
                        </p>
                        <p>
                            Bár az utóbbi napokban már sokszor megébredtem éjjelente, most másként pattant ki a szemem. Furcsán fájt a pocim, a derekam is, és hiába készülök a 3. szülésemre, nem tudom eldönteni, hogy ezek az érzések már a baba útnak indulását jelzik-e. Kimegyek a wc-re, némi vérezgetés és gyanús fájások. A lelkem is olyan furcsa, olyan józan és megfontolt vagyok, ugyanakkor van bennem jó adag kislányos bizonytalanság is. Az útravaló csomag még persze nincs teljesen kész…
                        </p>
                        <p>
                            Mérem az időt, aránylag szabályos, kb. ¼ órás időnként érzek összehúzódásokat. Csak szépen, lassan, nyugodtan – bár már nagyon várunk, Ábris!! Spagi még alszik, pedig máskor minden rezdülésem érzékeli, de most nagyon is pihen, hátha hosszú nap vár ránk.
                        </p>
                        
                        

                    </div>
                </div>

                <p>
                    Csomagolok. Kedvesem kicsit riadtan jön át hozzám, átölel – ő is érzi, hogy másként érzem magam, „más-állapotban” vagyok. Segít csomagolni. Az ő megbízható Bak-módján, listát ellenőrizve, helytakarékosan hajtogatva, tematikusan elrendezve. Biztonságban érzem magam mellette.
                    4 óra körül a fájások nem ritkulnak, de én elfáradok, – még elviselhető a dolog, lepihenünk újra. Reggel szervezés és riasztás: mamának, hogy jöjjön a gyerekekért, barátnőnek helyzetjelentés, sofőrbeszerzés. A fájások – igazán, hiába hívom őket összehúzódásoknak, akkor is FÁJNAK! – rendszeresen jönnek, egyre jobban figyelek ilyenkor a légzésemre, keresem a megfelelő helyzetet, ahogy kényelmes.
                </p>
                <p>
                    A dúlám is készenlétbe helyezi magát, átszervezi a családi életét – milyen jó, hogy vagy, Emőke, drága!! Bármit meg merek kérdezni tőle, még azt is vállalja, hogy ő szól a dokinak és szülésznőnek, most valahogy még ennek az intézése is olyan kellemetlen lenne számomra. Pedig bennük is feltétlenül megbízom, de a dúlám az én evilági énem most, az „intézkedik” és „beszámítható” helyettem.
                </p>
                <p>
                    Teszem a dolgom. Jobb háziasszony vagyok, mint egyéb napokon – lefoglalom magam. Kicsit tartok a kórháztól – bár rendkívüli humánusnak tűnt a Szent István Kórház, de mégiscsak egy KÓR-HÁZ, ami befal, elnyel hatalmas, zöldcsempés szájával – rossz tapasztalataim vannak…
                </p>
                <p>
                    Emőkével rendszeresen értekezünk – ő is lázban ég, talán még rosszabb is neki ez a bizonytalan várakozás – kérdezgeti, hol tartunk, mit érzek. Ebédeltetés. Egy kis családi perpatvar – a férfiak is nehezen szülik meg apaságukat. A fájások sűrűsödnek – 10 percesek – és sajnos erősödnek. Az ágyra támaszkodva, térdelve hintáztatom magam, ez jó. A kedvenc zenémet hallgatom. Beszélgetek a babával, bíztatom, meghatódva várom. A telefonbeszélgetések egyre szaggatottabbak lesznek – és egyre több pózban tudok telefonálni. Emőke – Andi – Mama (aggódva) – Spagi: NEM KELLENE MÁR ELINDULNI, PESTRE?!! Én: majd ÉN tudom, mikor menjünk! (Mekkora az önbizalmam!!! Húúú…) 4 óra után riasztás: legkedvesebb drága barátnőm, Andi felkészíti az autót. Beülünk – illetve két fájás között becsusszanok. Drága párom keresi a kényelmem, aggódik és izgul, de igyekszik a nyugodt erőt mutatni. De jó, hogy fogod a kezem!! Már 7, majd 5 percesek.
                </p>
                <p>
                    Szép, tavaszi este van. Gyönyörű, már-már giccses naplemente. Szinte vágyom rá, hogy ebben az aranyló sugárral átszőtt zöldben pihenjek meg és várjuk meg a babát.
                </p>
                <p>
                    Fáj, igenis fáj mindenem, mégis boldog vagyok. Ez új érzés. Vártam nagy szeretettel Rékát és Mátét is, de a nagyon megfelelni akarás és a félelem erősebb volt, bennem, mint az öröm. Nagyon féltem a kórháztól mindig. De most biztonságban érzem magam, pedig kórházba megyek saját döntésemből. De akiket nagyon szeretek, akikben bízok, körülvesznek, itt vannak – és ott is vár rám valaki, CSAK RÁM, nekem mással nem is kell törődnöm, mint megélni az érzéseket, fizikait és lelkit egyaránt, amelyek most elborítanak. Lassan megérkezünk.
                </p>
                <p>
                    Emőke már itt van. Legszívesebben a nyakába ugranék – de megkímélem magunkat, tekintve az állapotomat. Virágcsokrot hozott NEKEM, piros tulipán és sárga, gyönyörű!! Bárcsak én is oly könnyen nyílnék ki, mint ez a kedves virág! Elborít a szeretet, annyira jó, hogy velem vannak Andi, Spagi, Emőke. Felmegyünk a szülészetre – ez a rövidke út kicsit kizökkent a boldog ringatózásból. Furcsa, de úgy érzem a dúlám által, hogy itt ez az egész intézmény az én jöttömet várja. Mintha én kivételes helyzetben lennék, nem vagyok végre kiszolgáltatva, hiszen itt van Emőke, aki ismeri az itteni viszonyokat, az orvosom és a szülésznőm. Igen, mind az ENYÉM most! És szabad a legnagyobb, fürdőkádas szoba!!! K. doktor – imádom a mosolyát, meleg hangját, annyira EMBER, de mégis tisztelettel teli irántam, végre nem azt érzem, hogy figyelnem kell az orvosra, mit kell tennem, hanem ő figyel rám! Azért a rutin, felvételi vizsgálatot nem úszom meg.
                </p>
                <p>
                    Beköltözünk a szobába. Teljes túlélő felszerelést hoztunk, kicsit otthonossá tesszük a helyet: gyertya, füstölő, a SZÁRIM, zene… Akkor is kórház. Intézmény. Főleg akkor érzem, mikor elém tolnak papírokat, hogy írjam alá. NEM AKAROK SEMMIT ALÁÍRNI!! Emőke elmondja számomra is felfogható módon, mi is ez. Na jó, legyen. Ha ő mondja, hogy aláírható, neki elhiszem.
                </p>
                <p>
                    Neki?! Hisz pár hónapja ismerem! Mégis jobban bízok benne, mint bárki másban, akár magamban. Pedig a háttérben marad. Figyel rám komolyan. Akár félhetnék tőle is. De nem, rábíztam magam: mert NŐ, aki átélte, tudja, mit érzek, de nem napi rutinfeladat vagyok neki. Annyira érzem, hogy semmi mást nem akar, mint az én hullámhosszamra hangolódva megérteni minden rezdülésemet. Mégis úgy van velem, hogy nem zuhan bele a sajnálatba, úgy vesz részt, hogy kívül is marad. Olyan, mint egy ajtó, amely kint is van és bent is, és olykor kapcsolatot teremt a kint és bent között.
                </p>
                <p>
                    Hastáncolok. Jó ez a ringatózás a zenére. Spagi velem ringatózik, szinte erotikusan, bódítóan jó. De egyre jobban fáj. Nem is igaz, hogy a harmadik baba gyorsan születik! Igaz, 6 év alatt a testem elfelejtette, amit tanult, sőt 12, hisz utoljára Réka tette meg a teljes utat… Közben kicsit megnő a forgalom. Eleinte megdöbbenek: milyen jogon jöhet be bárki is az ÉN SZEMÉLYISÉGEMBE?!! Még akkor is, ha ez a kórház… Hagyjanak elmerülni, ne zavarjanak. Emőke vizet enged a kádba. Spagi olykor feladatot kap tőle – szegénykém nemigen éli át, mit keres ő itt. De vállalta, hát itt van. Ez ő. Most nem érdekel a lelke, találja fel magát egyedül. Finom a vízben. Persze ott is fáj, de nem annyira, mint a szárazon.
                </p>
                <p>
                    Befelé figyelek. Nyíló virágra gondolok. Úgy érzem, egyre jobban megnyílik a lelkem és a testem is. Odaadó és befogadó lesz, mint a szeretkezéseinkben. Le… le… le… ringatom lefelé a babát. Gyere, drága, csodás ajándékunk! Vajon hány keze van Emőkének és Spaginak együtt?! Nem is kell szólnom, tudják, érzik, mikor hol jó a masszírozás, nyomás, simogatás. Erzsike szigorú tekintete. Meg akar vizsgálni. Meg a doki is. Nem látják, hogy éppen SZÜLÖK?! Nagyon fáradt vagyok!
                </p>
                <p>
                    Randi a dokival. A megbeszélt időben jött (1/2 9?). Megvizsgálnak. Nem halad eléggé a tágulás. Istenem! Mióta dolgoznak, alakítjuk egymást babussal, és még alig tágultam!! Pedig őt IGAZÁN el akarom engedni!! Burkot kellene repeszteni. NEEE!
                </p>
                <p>
                    Félek. Emőke támogat, nem sürget. A doki tiszteletben tartja a vívódásom, visszavonul, áll a falnál, néha néz csak rám, mosolyog. Méregetem őt, kislánynak érzem magam, aki tudja, hogy fel kell nőnie, de még nem akar. És FÁJ nagyon! Erzsike erősködik kicsit, én ettől makacsabb leszek. Emőke oldja a feszültséget. Spagi elvész valahol a tudatom ködében, jó és kell, hogy ott legyen, tudom, hogy van, de nem figyelek most rá. Nem neki adom most oda magam, hanem a babának.
                </p>
                <p>
                    Hányingerem van. Reménytelenség. Mit csináltam rosszul?! Miért nem érdemlem meg, hogy simán és szépen megszülessen ez a baba?! Spagi, kedvesem, látod, kudarcot vallok, nem tudom bizonyítani, hogy mennyire nő lettem melletted, általad – hiszen nem tudom megszülni a gyermekünk!
                </p>
                <p>
                    Simogató kezek. Emőke csak szépet és jót mond, hogy mindent jól csinálok, hogy ennek pont így kell történnie, nem szabad feladni, Spagi meg csak szeret. Most megint nagyon érzem. Hát jó. Legyen meg a burokrepesztés. De nagyon félek. És fáj… Nem tűrök csendben. Néha lehet, hogy nagyon hangos vagyok, de nem szól rám senki. Újra a kádban. Kicsit már többet vagyok valami egész más dimenzióban, valami fájdalomcsillapító injekciót is kapok. Erzsike elmagyarázza, hogy a babára nem ártalmas. A dúlám bólogat – akkor jöhet. Mintha aludnék. Hagyjanak pihenni! Csak lebegés – néha kizökkent a fájdalom – egybemosódik a jelen, a múlt, váltakoznak a helyszínek – közben hűsítő borogatás, láthatatlan kezek érintenek, masszíroznak, zenét nyújtanak körülöttem. Magam vagyok és mégsem. Két ember, akik most a legfontosabbak számomra, biztonságban őriznek. Azt hiszem, Spagiról álmodok, beszélek legtöbbet. (Utólag már nem tudom teljesen felidézni…)
                </p>
                <p>
                    Erzsike megint kiterel a kádból. Azért közlöm vele, hogy majd én eldöntöm, mikor jövök ki. Minden mozdulathoz hosszasan készülődök. Nagyon álmos, fáradt vagyok – és az a furcsa, lebegő világ, amiben ringatóztam egy ideje, vissza-visszacsábít. Erzsikével szemben dacos kislány vagyok, érzem, a hatalmi viszonyok az ő javára dőlnek el, de próbálok lázadni. Biztatom magam, hogy ki tudjak szállni a kádból. Rettenetesen hosszú az út az ágyig. NEM AKAROM, HOGY ERZSIKE MEGVIZSGÁLJON! Alig tágultam. Szinte megállt a folyamat.
                </p>
                <p>
                    Kétségbeesés. Iszonyú fáradt vagyok. Alig van erőm. És a fájások jönnek kíméletlenül. Szegény manócska, hogy segítsek neked?
                    <br/>Erzsike megenyhül. Elmagyarázza, milyen lehetőségeim vannak, milyen segítséget tud adni. Emőke leegyszerűsítve, megerősítve engem, szintén elmagyarázza. Ő érti, hogy mitől félek: ez már így nem természetes szülés, nem az, amire vágytam. De annyira elgyötörtnek érzem magam, a dúlámnak meg hiszek, elfogadom az EDA-t. (Amitől egyébként normális állapotban rettegek…)
                </p>
                <p>
                    Másik szobába megyünk. Ez hamisítatlan kórház. Hajnal van. Hajnal és kórház: annyiszor átéltem már, írtózom tőle! De a fáradtság és a közbehasító fájdalom erősebb. És ha a dúlám itt van, rendben lesz minden. Még a gerincemen „dolgoznak”, a lábaim Emőke és Spangi combján pihennek. Jó a szemükbe nézni. Legyen meg a Te akaratod…
                </p>
                <p>
                    RETTENETES HANYATT FEKVE átélni az összehúzódásokat! Mikor hat már az EDA?! (Szerencsére azt nem fogtam fel, hogy Oxitocynt is kapok…) VÉGRE! Újra vissza abba a lebegő,puha, ködös álomvilágba. Néha felpillantok: igen, Emőke ott van még. Spagi elmegy aludni, jó lenne, ha maradna, de megértem, hogy neki is pihennie kell. A dúlám rám teríti a szárit – ez megnyugtat és lebegek… Állítólag 3 órát töltünk így: Emőke fogja a kezem, szinte érzem, ahogy áramlik az energia köztünk, idő és tér nem létezik, Ő VAN. Mennyire szeretem!
                </p>
                <p>
                    Ébredezek. Újra erősödnek a fájások. Könyörgöm, csak egy pici EDA-t még!! Senki nem hatódik meg. Talán csak Spagi, érzem, hogy ő megkönyörülne – de mégsem teszi. Vizsgálat. SZINTE TELJESEN KITÁGULTAM!! Jön a baba! A maga természetes útján.
                    <br/>SZÜLNI FOGOK!
                </p>
                <p>
                    Ég és fáj és gyötör megállás nélkül, nem bírom tovább! Nincs pihenés. A dúlám hangját hallom, szót fogadok neki, azt mondja, jön a baba, már a haja is látszik. Megsimogathatom. Nem akarom! Ne töltsük ezzel az időt, én már a karomban akarom tartani. Spagi teljesen feloldódott. A szeme, az a gyönyörű szeme biztat, simogat, ölel – de nem nagyon értem, amit mond, a fülem Emőkére hangolódik. Feladom, ezt már NEM LEHET ELVISELNI, SEGÍTSEN VALAKI!
                </p>
                <p>
                    Igen, nyomok, levegő, pihen, erőt gyűjt, újra nyomás. Mindent megteszek, szót fogadok, csak legyen már vége!!
                </p>
                <p>
                    És akkor jön az, ami leírhatatlan: a csoda, ahogy kicsusszan, és a hasamon landol ez a meleg boldogság! SZERETLEK SPAGI!! Sikerült! Megcsináltam! MEG TUDTAM SZÜLNI!!!
                </p>
                <p>
                    <b>Ábris, gyönyörű kisfiam, Isten hozott!!</b>
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to= "/stories2">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
