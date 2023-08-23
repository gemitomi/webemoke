import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth35Pic1 from "../../../image/szulestort/szules-story-35-hero-madarka.png";
import Birth35Pic2 from "../../../image/szulestort/szules-story-35-madarka.jpg";

export default function BirthStory35() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth35Pic1} alt="madarka"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Madárka</h2>
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
                        <img src={Birth35Pic2} alt="madarka"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Azokban a napokban, amikor Teodor kisfiunk születése már igencsak esedékes volt, mind többet olvastam a Rumi Mester verseit. [Mevlana Rumi, 12. századi perzsa költő.] Bölcs nyugalmat vártam tőle, s szerettem volna türelmet, kitartást, hitet meríteni belőle. Mondják, hogy már a korai időkben használták Rumi műveit, s kölünösen a nagyszabású Masnavit jóslásra, tanácsadásra, csakúgy, mint a Bibliát. Ha egy probléma felmerült, vagy egy kérdésre választ vártak, felcsapták a könyvet, s ahol nyílt, azt a verset alkalmazták a kérdéses ügy elrendezésére. Ebben az időben én is mind gyakrabban nyúltam Rumi versei után – megváltó jelre várva. Mert bár igyekeztem magam csendes türelemre inteni, az igazság az, hogy nagyon-nagyon vártam már a szülés megindulását.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Június 13-a péntekre esett – ezen a délutánon már mind sokasodni látszottak a szülésre utaló jelek. Mégis egy kicsit visszakoztam: ne legyen még ezen a napon, valahogy nem szeretném ezt a péntek 13-át.
                </p>
                <p>
                    Este focilabda bajnokságot néztünk még, s miután Édesapa elaludt, én kimentem az utcára, hogy sétáljak egyet lefekvés előtt. Nem voltam álmos, viszont éreztem, hogy nagyon jólesik a mozgás. Gyönyörű, enyhe éjszaka volt, a hársfák még mindig ontották illatukat az utcában. A sétából visszatérve mégegyszer ránéztem Rumira. S akkor bukkant fel egyszerre ez a vers:
                </p>
                <blockquote>
                    Get up! Do not sleep! We have come close.<br/>
                    We have already heard the dog and the rooster of that neighbourhood.<br/>
                    By God they were signs from the village of the beloved;<br/>
                    All the flowers that we grazed on.<br/>
                    Get up! Do not sleep! It is daytime.<br/>
                    The morning star has risen and we see the footprints.<br/>
                    It was night and the whole caravan was locked up in a caravanserai;<br/>
                    Get up! For we have to rid ourselves of the dark and of the prison.<br/>
                </blockquote>
                <p>
                    Akkor már tudtam, hogy közel az idő, s bizakodással, megnyugvással tértem aludni.
                </p>
                <p>
                    ***
                </p>
                <p>
                    Szép napsütéssel, korai ébredéssel indult a június 14-i szombat reggel. Gondoltam, mindenképp ki kéne menni sétálni a Duna-partra, hogy nekem is jobban teljen az idő; s ha lehet, minél hamarabb, hogy elkerüljük a meleget s egyúttal kiélvezzük a kora reggeli színeket-fényeket-hangokat-illatokat. Meg is állapodtunk Édesapával, hogy megyünk, de aztán hogy-hogy nem, ő belealudt a korareggelbe, én pedig varrogatással űztem az időt. Írtam röviden Hristinának, hogy jó eséllyel igaza lesz, mert múlt vasárnap azt mondta, úgy érzi, vasárnapi baba lesz a kisfiunk. Akkor nem lett, hát majd talán ezen a vasárnapon megszületik – így éreztem akkor szombat reggel.
                </p>
                <p>
                    Aztán 9 óra tájban mégis összeszedtük magunkat és kikocsiztunk a Duna-partra. Gyönyörű idő volt, még nem is túl meleg. Lassan sétáltunk, fel a vízvezető hídig, majd vissza. Meg-megálltam, mert akkor már erősebben jöttek a fájások. Kezemben az óra, mindig ránéztem egy-egy fájás kezdetén. Egyre gyakrabban, már 10 perces időközönként is jött egy-egy fájás. Bizonytalan voltam, még mindig úgy éreztem, ez még nagyon a kezdete, de ha így megy, azért lehet, hogy estére már lesz valami – mondtam is Édesapának. Visszafelé lestétáltunk a kis hídig. A híd körüli bokrokból egy egérke – vagy patkány? később láttam úszni is, tán vízicickány – futott ki előttünk az ösvényre, majd ijedten vissza. Megálltunk, néztük a parti rejteket. Újra kidugta a fejét, s mivel mozgást nem észlelt, közel a lábunkig merészkedett, vizsgálva, keresgélve élelem után az ösvényen. Megjelent mögötte egy másik, kis fia-egér is. Szép volt látni őket, ahogy szorgoskodva élik világukat a vízparti csalitosban, s szép volt átélni a köröttünk lévő világ rendjét, a nyugalmat, napfényt. (Az majd csak később, a szülés után tudatosodott bennünk, hogy tulajdonképpen titkos jel is lehetett számunkra a kis Nezü [jap. ’patkány’] látása, lévén a patkány éve, s a patkány Teónak akkor már általunk fogadott védőállata is volt.)
                </p>
                <p>
                    Hazaindultunk, de még előtte a terv szerint beugrottunk a piacra. Nehezen kászálódtam ki a kocsiból. Ekkora már többedik alkalommal jött rendre kb. 10 percenként a fájás, s így kezdtem én is komolyabban arra gondolni, hogy hamarosan tényleg történik valami. Megvettük a zöldséget, gyümölcsöt. Ebédre gombát akartam sütni, hozzá jó kis salátát – minden megvolt. A sajtosnál épp fizetéskor jött egy erősebb fájás, s én meg is torpantam egy pillanatra, úgy megfogott. Édesapának intettem, hogy jöjjön oda segíteni. Magamban meg jót mulattam, hogy mi lenne, ha ez a türelmetlenkedő eladó tudná, hogy éppen vajúdok…
                </p>
                <p>
                    Töretlen derűvel végre hazaértünk. Ekkor már sűrűbben is jöttek fájások. A zöldséget-gyümölcsöt elpakoltam, s megbeszéltük Édesapával, hogy akkor most mégsem kezdek hozzá az ebédfőzéshez, hanem pihenjünk le mindketten egy kicsit, s közben figyeljük az órát. Ha egy órán keresztül ilyen sűrűn rendszeresek lesznek a fájások, akkor lassan készülődhetünk a kórházba. Fél tizenkettő körül volt. Mégsem pihentünk le, hanem útra készítettük a kórházi csomagot. Beraktam az életmentő elemózsiát. Édesapa leborotvált, hogy azzal már ne bajlódjanak a kórházban idegen kezek. (Szépen, precízen, gondosan csinálta, úgy, hogy egy cseppet sem volt kellemetlen, s utóbb a kórházban még meg is jegyezték, hogy szép munka.) Eltelt egy óra folyamatos fájásokkal. Emőkét fölhívtam, hogy vajon induljunk-e. Már minden készen állt. Emőke azt tanácsolta, hogy pihenjek le még egy kicsit, s figyeljem, enyhülnek-e a fájások vagy jönnek tovább intenzíven. Lefeküdtem, az óra a fejemnél. Egy vagy két fájást számoltam – ezek már egy ideje kezdtek fájdalmasak is lenni –, közben elszunyókáltam, s úgy tűnt, mintha hosszú idő eltelt volna. Pedig csak 8 perccel mutatott többet az óra, mikor a következő fájásra felébredtem. Egyszercsak a saját kiáltásom lepett meg – a hang előbb tudatosodott bennem, mint az a furcsa fájdalom-szerű érzés, ami belőlem a kiáltást kiváltotta –, s egy pukkanás kíséretében elkezdett folyni a magzatvíz. Patakzani.
                </p>
                <p>
                    Édesapának kiáltottam, hogy hozzon gyorsan törülközőt. Szalad át a másik szobából. Rengeteg víz volt, átitatott jópár törülközőt. Én aggódva vizsgálgattam: nem zöld-e, s kérdezgettem: ugye nem zöld?! Féltem bármitől, ami módosíthatja a szülés szép, rendes menetét. De nem tűnt zöldnek, szín tisztának tűnt. Ebben megnyugodtam, s örvendtem, hogy már ennyire haladtunk. Izgalommal, s örömmel töltött el a bizonyosság, hogy semmi kétség: akkor most már tényleg megyünk szülni! Édesapával viccelődtünk, nekem legalábbis fölöttébb jó kedvem kerekedett. Újra felhívtam Emőkét, s mondtam, hogy így állunk s akkor mi lassan tényleg indulnánk. Ekkor már fél kettő felé járt. Megegyeztünk, hogy a kórháznál találkozunk, s együtt megyünk föl. Kicsit még húztuk az időt itthon, hogy ne érjünk oda sokkal hamarabb Emőkénél. Lassan bepakolt Édesapa az autóba, s indultunk. Neki még gondja volt rá, hogy a hátsó ülésre párnákat, takarót készítsen. A magzatvíz továbbra is csordogált. Jó volt a hátsó ülésen ledőlni, ülve már nehéz lett volna a kocsiút. Kumát [jap. ’medve’, kedvenc jegesmedve plüssállatunk] öleltem, s ott volt Nezü [másik plüssállat] is. Ekkor már nagy meleg volt, Édesapa izzadt. Szép óvatosan vezetett, én az egészből alig észleletm valamit, s csodálkoztam, hogy milyen hamar a kórháznál voltunk. A parkolóban Emőkét vártuk. Ittam vizet, ettem szőlőcukrot. Az ebéd kimaradt, kicsit éhesnek is éreztem magamat, de nem kívántam enni semmit. Eszembe jutott, hogy reggel elmaradt a szokásos széklet. Elterveztem, hogy ha megkérdezik a kórházban, hogy akarok-e beöntést, majd azt füllentem, hogy hasmenésem volt délelőtt, minden kijött. Nem kívántam semmi macerálást. Csak hagyjanak nyugodtan vajúdni. Édesapa zenét tett be, míg vártunk, az ecseri lakodalmast. Dúdolgattuk együtt az ismerős dalokat. Majd megérkezett Emőke, s elindultunk fölfelé. Átvett néhány csomagot. Nehezemre esett felkelni és menni – a rövid út alatt, míg elértük a bejáratot, talán két fájás is volt.
                </p>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src="../image/szzules-story-35-a-madarka.jpg" alt="madarka"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Édesapát és Emőkét egyelőre nem engedték be a szülőszobára, csak bekísértek engem, hogy adminisztráljanak és megvizsgáljanak. A magzatvíz színe rendben volt, a méhszáj két újjnyira nyitva. Kicsit elkedvetlenedtem, hogy „még csak annyira?” (Akkor abban a tévedésben voltam, hogy tíz újjnyinak kell lenni. Később Emőke mondta, hogy nem-nem, 10 cm, az négy újjnyi, tehát már elértük a felét. Hurrá! Ez jó hír volt, már akkor bent voltunk hármasban a szülőszobán.)
                        </p>
                        

                    </div>
                </div>

                <p>
                    Az adminisztrációval, hál’Istennek, akkor már nem sokat foglalkoztak, úgy tűnt, eléggé előrehaladt a vajúdás. Még csak rákötöttek a szívhang-vizsgáló gépre. Átmentünk a vajúdó szobába. Egy kismama volt benn, ült egykedvűen az egyik ágyon. A nyári délutáni napfény áradt be a széles ablakokon, a teraszra nyíló ajtó fátyolfüggönyét kellemes szellő lebegette. Ebben a csendes nyugalomban lehetett hallani a gép által kicsi Teo egyenletes, szép szívhangjait. Hogy örültem ennek a hangnak! Közben jöttek szépen az összehúzódások is, így most már éreztem is azt az intenzív méhtevékenységet, amit eddig a grafikon görbéjéről ismertem. Dallam úszott ekkor a tudatomba, mentem vele, s félhangosan dúdolni kezdtem, kicsit figyelmen kívül hagyva a szobában lévő másik kismamát. „Hálát adok az Úrnak, mert jó! Mert az ő irgalma örökkévaló!” – ez már a második része a gregoriánnak, s aztán jött az elejétől is, a dallam hozta a szöveget, mint ahogy az mindannyiszor lenni szokott, s én csak rácsodálkozom rendre a dallam-hozta szövegek mélyebb üzenetére: „Ragadj el engem, Uram, ellenségeimtől, taníts meg arra, hogy akaratodat teljesítsem!” Így imádkozva énekelgettem, s közben arra gondoltam, egészen sokáig ittfelejtettek engem erre a gépre kapcsolva, kényelmetlen széken ücsörögve a fájások közepette. Én már mennék inkább szülni. Aztán végre megérkezett a nővér, lekapcsolt.
                </p>
                <p>
                    Kedves, figyelmes volt velem. Kikísért újra a folyosóra, s ekkor jöhetett be Emőke és Jin is. Közben az iménti kismamán kívül továbbra sem láttunk senkit és nem hallottunk neszt az osztályon, pedig zajlott valahol szülés, az „IKEA-szoba” foglalt volt. Semmi sem zavarta meg ennek a bensőséges nyári délutánnak a csendes nyugalmát. Gyors átöltözés és a csomagok elrendezése után vezettek minket a szülőszobára. A szülésznő készségesen megmutatta a szobát, segített Emőkének a dolgait elrendezni, megmutatta a zuhanyzót és hozott egy ülőlabdát. Édesapa, szegény – így utólag visszagondolva – kissé tétlenül érezhette magát ebben a furcsa helyzetben, egy szülőszoba közepén. Miközben Emőke mindjárt a tettek mezejére lépett: vizet forralt, borogatást készített, s hozzásegített, hogy minél hamarabb elérjem a zuhanyzót, amire már rendesen vágytam az egyre erősödő fájások közepette. Behozták a labdát, s én egy darabig azon ücsörögve folyattam magamra a jó meleg vizet. Enyhülést adott. Aztán bejött Emőke, masszírozta a hátamat alul, a keresztcsontál, ez nagyon jól esett. Aztán ebből is elég lett, állni, járkálni szerettem volna inkább. Ezután még sokféle dologgal próbálkoztam, a sorrendre már nem emlékszem, de arra igen, hogy voltam később újra a zuhany alatt, már inkább a tágulási szakasz vége felé, intenzív, erős fájások közepette. Kapaszkodva-guggolva, csípőkörzésekkel álltam a zuhanyzóban, s a fájások szünetében puha hangokat eregetve az amúgy zengő zuhanyzóban próbáltam Teót valahogy mind lejjebb-lejjebb terelgetni. A fájások idején azonban már csak kapaszkodni és kiáltani tudtam. (A közben táncolás, ahogy elterveztem, nem nagyon jött össze, egyrészt, mert hiába állítottam össze és hoztam be a zenéket, CD lejátszó nem állt rendelkezésre, másrészt pedig, mert a szülésnek ez a tágulás része viszonylag észrevétlenül elszaladt.)
                </p>
                <p>
                    Egyszercsak megjelent az ajtóban az orvos is – mindeddig hármasban hagytak minket, a szülésznő is tapintatosan távozott az elején. Talán a hangokból ítélte meg az orvos a szülés előrehaladtát? Bedugta a fejét az ajtón, s csak jelezte, hogy itt van, készen áll az eseményekre. Majd nem sokkal később megvizsgált és közölte, hogy ki vagyok tágulva, csak a méhszájnak kell még eltűnnie, s aztán várhatjuk most már a tolófájásokat. Én erről azt tanultam a szülés-felkészítőn, hogy a tolás az egésznek már a könnyebbik része, az ember erős ingert érez, hogy nyomjon, miközben egy-kettőre kibújik a baba. Hát én ezért nagyon megörültem, hogy már itt tartunk – talán két óra telt csak el mindössze, mióta bejöttünk –, várva-vártam azt a bizonyos ingert, s nyomtam is aztán nagy lelkesen.Továbbra is állva-járkálva igyekeztem kitöltelni a köztes időket, s mikor jött a fájás, megtámaszkodtam Emőkében vagy Jinben, vagy mindkettőjükben egyszerre és nyomtam. És csak nyomtam. Emőke közben tette rám a gyógynövényolajos meleg borogatást, ez is nagyon jólesett. Telt-múlt az idő, s én egyre gyötrelmesebb fájások alatt csak nyomtam, miközben kiáltottam is hozzá nagyokat, mint valami harcos indián, remélve, hogy most már tényleg egy-kettőre meglesz. Aztán valahogy nem történt semmi – legalábbis én úgy éreztem. Az volt a benyomásom, mintha a levegőbe nyomnék, rossz helyre, mert semmi nem mozdul. Hogyan kell nyomni?! Biztosan nem jól csinálom! Ekkor már bent volt az orvos is, bíztatott, hogy de igen, történik valami, jön a baba, szépen, lassan, milliméterről-milliméterre halad előre – vagy ezt talán Emőke mondta, ő is bíztatott. Az orvos kihangosította Teo szívhangjait időről-időre, s bólintott. Szép, egyenletes, már ismert szívhangok – Teo rendben van „neki jó ez a tempó”, mindegyre ezzel bíztatott az orvos. (Te jó ég, gondoltam utóbb, mi lett volna, ha a szívhangok történetesen nem ilyen szépek, ha csak picivel haloványabbak, egyenetlenebbek lettek volna? – valószínűleg pánikba is estem volna, ott, a tűrőképességem határán.) Teo gyönyörűszépen kopácsoló szívhangjai azonban újra meg újra boldogsággal töltöttek el, kicsit elterelve a figyelmemet az egyre gyötrelmesebbé váló vajúdásról és elkeseredéstől. Mert akkor már kezdtem elkeseredni. „Nem jön!” – kiáltottam egy-egy erős tolófájás után csüggedten, már-már zokogva, tehetetlenül. És újra meg újra bíztattak, hogy de igen, jön. Fogytán volt az erőm. Már eltelt mégegyszer két óra, és még mindig nem látszott a haladás, csak egyre kimerültebb lettem. (Most így utólag azt gondolom, talán nem kellett volna idejekorán így belevetni magam a tolófájásokba. Bár ki tudja? Lehet, hogy haladtam kicsinként azáltal is.)
                </p>
                <p>
                    Már térdeltem földrerogyva, ültem szülőszéken, álltam két erős férfi – a férjem és az orvos – szorító támogatásában. Nyomtam, kiáltottam, és közben a vér csöpögött a lábam között a földre, mindig törölni kellett. A szülőszéken ülve egyszercsak úgy éreztem, nagyon elfáradtam. Hajtott, hogy tolni kéne, de valahogy elfogyott az erőm. Elengedtem egy-két fájást – valahogy kihúztam éppencsak, plusz rádolgozás nélkül –, s közben hátradőlve pihentem Jin karjai között. Talán el is aludtam egy percre. Jólesett volna így megpihenni, de valahol a tudatom mélyén megjelent az ijedtség: „és most mi lesz?!” Itt vagyok, jönnek a fájások és nekem nincs több erőm. Jött a „vegyék ki a babát belőlem!” gondolat. Most azonnal. Nem bírok ki még egy fájást. És még egyet. Lassulva jöttek most, én nem tudtam, mert belealudtam, de az orvos és Emőke összenéztek, s Emőke hozott egy homeopátiás bogyót, s odaadta, hogy szopogassam el, mert lelassultak a fájások. Szopogattam, s közben – ezt már érzékeltem – újra begyorsult a vajúdás. Változtatni kellett, én új erőre kaptam, állni akartam ismét. (Ez mindig visszatért bennem, hogy állni kell, s ha felkerülök a szülőágyra onnan már nem jövök le – ezt így mondták, és én hittem, ezért görcsösen állva akartam maradni, hogy jobban menjen, így viszont nagyon kimerültem.) Állni akartam, de már nem bírtam. Az orvos javaslatára végre a szülőágyra feküdtem. Egy nyomás. Éreztem, hogy valami most már TÉNYLEG történt. A szülésznő fejét láttam a lábam között – ezúttal egy másik arcot, nem azt, aki kezdetben volt, úgy látszik, közben váltás történt. Az orvos azt az utasítást adta Jinnek, hogy a következő fájásnál csapják fel a lábamat két oldalról a levegőbe – a kezével mutatta, hogyan. A szülésznő a gátat masszírozta, éreztem az olaj csordulását a bőrömön. S még emlékeztetett, hogy a tolásnál a levegőt tartsam benn, s hogy lefele nyomjak. Ez a lefele nyomás eddig valahogy nem jött össze. Mintha elszállt volna a nyomásra szánt energiám mindenfelé. De itt most, ennél az előzőnél megéreztem valamit. Koncentráltam, eltelt egy kis idő. Jött a fájás. Lábak fel. Levegő bent, nyomtam. Éreztem, hogy sorsdöntő fordulathoz érkeztünk. A többiek a lábam felől kiáltották, hogy megjelent a feje! Jin látta, lázba jött, hangosan örvendezett. Bal oldalról ölelt, tartott. Újra várni kellett, a szülésznő tovább masszírozott. Mégegy fájás – éreztem az elejét, s aztán ahogy erősödött, rányomtam. Jin szorította az engem tartó kezét, éreztem, ahogy egész testéből ő is velem nyom. És újabb kiáltás: kint van a feje! Újra megállt a tolófájás. A tanultakból megint felmerült, hogy ha már a feje kint van, akkor itt már tényleg csak egy-két nyomás és BIZTOSAN meglesz. Szárynakat kaptam. Feljánlották, hogy nézzem meg tükörből Teo fejét. Nem akartam. Ütést éreztem valahol lent. A szülésznő elkapta a masszírozó kezét, s „nem én voltam!” – mondta. Teo volt, mozdult egyet, rándított a vállán, vagy talán rúgott, ebben a félig benn-félig kinn helyzetben. Ki akart jönni. S végre az utolsó fájás és Teo tényleg csak „kicsusszant” teljes valójában. Nem sírt. Rögtön rámrakták, azonmód nyálkásan-véresen, mint egy kis állatkölyök, mocorgott, éreztem a rámkapcsolódó kis tagjait. Most már nem csak egy kis gomolyag a pocakban: keze, lába, feje, arcocskája van, mind itt rajtam, a mellemen vergődik!
                </p>
                <p>
                    Csend volt – vagy talán beszélték a teendőket, nem tudom, Teo érzékelése minden mást kizárt. Jin hangját hallottam, ahogy csodálkozva szólt, hogy nem sír. És Emőkéjét, aki megnyugtatja, hogy semmi gond, nem muszáj sírnia, jól érzi magát, minden rendben van. És Teo figyelt. Nagy, nyitott szemekkel nézett körül a világban.
                </p>
                <p>
                    Mire elállt a köldökzsinór pulzálása, megkérdezték Jint, akarja-e elvágni. Vállalta. Két kézre fogta az ollót, s nekigyürkőzve, meghatott mosollyal választott szét bennünket. Aztán nem sokkal később mondták, hogy megszületett a lepény. Észre sem vettem. Ép, rendben van. Akkor még eszembe jutott, hogy egy pillantást vessek rá, milyen is az a lepény. De igazából Teo kötötte le a figyelmemet. Megkérdezték a nevét, megírták a karszalagot – ilyen szokásos dolgok történtek, Jin asszisztált.
                </p>
                <p>
                    Aztán elvették Teót, meleg takaróba csomagolták – illetve én még mindjárt kértem, hogy ne fürdessék meg, ha lehet, csak töröljék le és csak a legszükségesebb teendőket végezzék el vele. Én nem aggódtam, hogy nem sírt, ahogy láttam, éreztem, tudtam, hogy minden rendben van. Nagy nyugalom volt bennünk, köröttünk. Jin kapta meg bebugyolálva, míg engem összevarrtak. Kiderült hogy lett egy repedés az utolsó nyomáskor. Vagy talán Teo megrándulásakor? (Később Emőke elmondta, hogy az orvos látta, ahogy a fej simán kibújt, akkor még nem repedt, hanem a végén a váll valahogy hirtelen jött neki, akkor hasadt el a gát, még a hangját is hallotta.) Nem bántam. A tennivalók közben kedélyes beszélgetés zajlott, mindenki nyugodt, mosolygós volt, nem volt kapkodás. Az orvos tette a dolgát. Emőke a fejemnél állt, kezemet fogva sugározta felém továbbra is a bátorító melegséget.
                </p>
                <p>
                    A varrás kellemetlen volt, de Teo a fejemnél, Jin karjaiban gyógyír volt mindenre. Továbbra is éber volt, csodálkozva nézelődött. (Meglepő, de Teo hangját igazából nem is ismertem egészen a kórházban töltött második napig, amikor a hosszú alvásból ébredve aztán már sírt, ahogy a rendje.)
                </p>
                <p>
                    S végül elült a sürgölődés is körülöttünk, szép fokozatosan – ahogyan be-befolydogáltak a szülőszobába az emberek: először az orvos, aztán a szölésznő, az asszisztense, majd a gyermekorvos és talán neki is volt asszisztense, csak az tűnt fel egyszerre, hogy milyen sokan lettek a kicsike szobában – vegül mindenki távozott. Legvégül még Emőke is, hagytak minket magunkra. Hármasban – kettőnkből ahogy egyszercsak hárman lettünk, ott voltunk együtt. És ott volt Kuma és Nezü is, Jin behozta őket, eddig rejtegettük a szülőszoba egyik sarkában a csomagok között. Kíváncsiskodva odabújtak, hogy lássák, hogy szopik Teo. És erre igazán már nem is emlékszem, hogy hogyan szopott, mennyit, csak a nézelődésére, pislogására, kölcsönös, bizalmas ismerkedésünkre. Meg az ölmelegre, ahogy ott volt Teo az éji félhomályos szobában, karunk-ölelte családi fészekben. (Este nyolc óra volt, mikor Teo kibújt, most már tízre járt az idő.) S milyen hamar eltelt ez az együttlét! Valóban két óra volt? Vagy inkább csak egy, mert a tisztogatás-rendbehozás is sok időt elvett?
                    Jinnek mennie kellett. Emőke – aki eddig megvárt minket kint – szintén búcsúzkodott. Engem kocsin toltak ki. Milyen furcsa érzés volt a még mindig nagy, de már üres, puha pocakkal! Teót akkor elvitték egy másik kocsin. Kaptam egy szobát, egy ideig el voltam fogalva magam és a dolgaim rendbetételével. Kissé szédelegve megzuhanyoztam. Teót – úgy mondták – éjszakára bent tartják a csecsemőosztályon, én pihenjek, s majd reggel, mikor én már két lábon utána tudok menni, akkor vihetem, s onnantól úgyis mindig nálam lesz. Talán ezt az egyet sajnálom így utólag: hogy Teo nem maradt éjszakára velem. Mikor elrendeztem magam s ledőltem a kórházi ágyra, egyszercsak ott találtam magam egyedül: pocak, Jin, Emőke és Teo nélkül! Teo pedig tőlem pár fallal odébb szuszog valahol – vagy talán sír is! – és én nem vagyok mellette, mikor eddig mindig együtt voltunk!
                </p>
                <p>
                    Hát így történt, életem legcsodálatosabb eseménye. Hálát adok érte a gondvoselőnek, s hálás vagyok mindhármójuknak: Jinnek, Emőkének és az orvosnak. Annyi segítséget kaptam tőlük!
                </p>
                <p>
                    ***
                </p>
                <p>
                    Nem tudtam aludni azon az éjszakán. Forgolódtam, üzeneteket váltottam. Többször majdnem Teo után indultam, de visszafogott a rám osztott kórházi rend. Hajnalban aztán hozták Teót minden külön kérés nélkül – onnantól aztán együtt lehettünk. S együtt vagyunk azóta is, minden nap és minden éjjel!
                </p>
                <p>
                    S már sírdogálok a gondolattól, hogy egyszer Teo kiröpül majd a családi fészekből, ha meghallom meselemezén a népdalt:
                </p>
                <blockquote>
                    Elment a madárka, üres a kalicka<br/>
                    azt üzente vissza: visszajő tavaszra.<br/>
                    (…)<br/>
                    Csak szoktam, csak szoktam zöld erdőben járni,<br/>
                    fenyőmagot enni, gyöngyharmatot inni.
                </blockquote>
                <p>
                    — Befejeztem a mai napon: 2009. március 13, péntek. Teo kilenc hónapos. —
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to="/stories2">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
