import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth18Pic1 from "../../../image/szulestort/szules-story-18-hero-barnus-szuletese.png";
import Birth18Pic2 from "../../../image/szulestort/szules-story-18-barnus-szuletese.jpg";

export default function BirthStory18() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth18Pic1} alt="barnus-szuletese"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Barnus születése</h2>
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
                         <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth18Pic2} alt="barnus-szuletese"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Barnabás 2008. október 18-án jött a világra, születésének története mégis 2006 őszén kezdődött. Ekkor vártuk ugyanis a nővérét, és ekkor derült ki, hogy Blanka, aki addig ügyesen fejjel lefelé fordulva feküdt, egyszer csak visszafordult. Innentől kezdve a szülésig hátra lévő három hétben non-stop csak azzal foglalkoztam, hogy hogyan tudnánk megfordítani Blankát. Mindent, de mindent megpróbáltunk, amiről csak akkor hallottam (homeopátia, fénnyel és hanggal való vezetgetés, relaxált állapotban való beszélgetések vele, négykézláb mászkálás, jóga gyakorlatok, kórházi fordítás, stb.).
                        </p>

                        

                    </div>
                </div>

                <p>
                    Sajnos Blanka nem fordult meg, és nagyon rosszul esett, hogy sok okos ember engem tett ezért felelőssé. Biztos én aggódtam sokat, én csináltam ezt vagy azt rosszul: egyszóval iszonyú lelkifurdalásom volt, hogy valamiért miattam nem akar világra jönni a gyerek. A végén még a faros szülést is fontolgattam, pedig sem az orvosom, sem a párom nem lelkesedett nagyon az ötletért, de nagyon szerettem volna elkerülni a műtétet.
                </p>
                <p>
                    Több oka is volt, de leginkább az, hogy szerettem volna, ha Blanka ideális körülmények közé érkezik a világra. Amikor már annyit sírtam a császár miatt, hogy kötőhártya gyulladásom lett, akkor elmentem egy pszichológushoz, aki segített feldolgozni azt a veszteséget, amit amiatt éreztem, hogy nem szülhetek természetes úton. Erre nagyon nagy szükségem volt, mert a végén már annyit szomorkodtam, hogy úgy éreztem: semmilyen szülés utáni pozitívum nem ellensúlyozná a szülés előtti (a szülés módja miatti) szorongás káros következményeit.
                    Azért a legutolsó pillanatig reménykedtem egy kicsit, így a programozott császárba nem is egyeztem bele. Ám amikor beindult a szülés, és megvizsgált az orvosom, már tényleg el tudtam fogadni, mikor mondta, hogy sajnos irány a műtő, a gyerek a lábát dugja előre. A dolgot ott és akkor nagyjából helyre tettem, de továbbra is nagy vágyam maradt a természetes szülés.
                    Amikor a 2006. október 2-án történt műtét után először beszéltem az orvosommal, az volt az első kérdésem, hogy sikerül-e vajon természetes úton szülnöm még. Ő akkor azt mondta, hogy erre 50% esélyt lát, de minden azon fog múlni, hogy hogyan fekszik a baba.
                </p>
                <p>
                    Így amikor 2008 elején megtudtam, hogy babát várok újra, ismét rám tört a természetes szülés iránti vágy. Mivel az első várandósságom alatt elképzelhetetlennek tartottam, hogy műtéttel fogok majd életet adni, most, bár nagyon készültem rá, mégsem mertem hinni, hogy sikerül szülnöm.
                </p>
                <p>
                    Szerencsémre az orvosom nagyon jó fej volt – ebben a tekintetben is. Nagyon megszerettem őt már az első várandósságom alatt, most pedig még inkább úgy éreztem, hogy jó kezekben vagyok. Nem volt olyan találkozásunk az első szülés után, hogy ne jegyezte volna meg, hogy mennyire sajnálja, hogy nem sikerült természetes úton szülnöm, és hogy nagyon reméli, hogy most sikerülni fog. Azt is elmondta, hogy szerinte nincs olyan orvos az országban, aki ebben jobban támogatna, és én ettől mindig nagyon megnyugodtam – pedig ez nálam nem könnyű, alapból szorongós alkat vagyok. Szerencsére ezt is nagyon jól tudta kezelni az orvosom és a szülésznőm is.
                </p>
                <p>
                    A természetes szülést elősegítendő, gyakorlatilag ahogy megtudtam, hogy babát várok, „bejelentkeztem” egy dúlához, aki három babát szült az orvosomnál és a szülésznőmnél, és nagyon jó velük a kapcsolata. Ez nekem nagyon fontos volt – az első szülésemet egy nagyon kedves, aranyos dúla kísérte, akinek még így, hogy császárral született Blanka, is sokat jelentett a jelenléte, de ahogy én érzékeltem, ő inkább otthonszülésekben volt járatos, és a kórház számára kicsit idegen hely volt, és sajnos sem az orvosomat, sem a szülésznőmet nem ismerte. Másodszorra már inkább olyan szüléskísérőt szerettem volna választani, aki a kórházi dolgokban is kicsit járatosabb.
                </p>
                <p>
                    Az előzmények miatt nem kevéssé aggódtam, mikor Barnabás jó ideig popsival lefelé feküdt, ám amikor végre befordult, akkor megnyugodtam. Mertem szülési tervet is írni (addig babonából inkább nem), és éppen ezt vittem az orvosomnak, amikor nagyjából a 34. héten kiderült, hogy ő is visszafordult. Mivel a már befordult babák viszonylag ritkán fordulnak vissza, másodszorra már úgy gondoltam, hogy ez biztos nem fog bekövetkezni, úgyhogy amikor a két évvel azelőtti események szinte újra játszódtak a rendelőben, hirtelen elvesztettem az addigi bizakodásomat és elkezdtem zokogni a vizsgálóasztalon. A doki és a szülésznő együtt vigasztalgattak – én akkor biztos voltam benne, hogy ez a gyerek se fordul meg, már megint császár lesz.
                </p>
                <p>
                    Egy ideig nem is tettem semmit annak érdekében, hogy megfordítsuk Barnust, mert úgy láttam, hogy ha most, egy teljesen más várandósságnál ugyanaz megtörténik, mint először, akkor biztos, hogy fizikai oka van a dolognak. A neten utánaolvasva is azt találtam, hogy nagyon sokszor ismétlődik a medence végű fekvés ugyanannál az anyánál, és ilyenkor úgy gondolják, hogy a méh alakja is lehet az oka. Ez kicsit enyhítette a bűntudatomat Blanka fekvésével kapcsolatban is – ezek szerint mégsem az én első babavárás alatti szorongásaim fordították őt vissza! A párom úgy gondolta, hogy ne is szóljunk bele a természet dolgaiba, én viszont úgy éreztem, hogy egy dolgot még szeretnék kipróbálni, amiről Blanka születése után hallottam, és megkerestem telefonon Geréb Ágit. Ő elmondta az általuk alkalmazott fordítós technikákat (a rázogatós módszert és a masszírozós fordítást, illetve bíztatott, hogy hintázzak sokat, jegeljem a baba fejét (ezeket sem próbáltam korábban), és végül a homeopátiás szert is bevettem, amit először is szedtem.
                    Valami a dolgok közül működött, mert Barnus még a tervezett fizikai beavatkozások előtt megfordult újra! Ezt Geréb Ági és egy bábatársa állapította meg először – ekkor is sírtam, csak most az örömtől. Innentől újra mertem bízni, bár még nagyon aggódtam, hogy hátha mégis visszafordul.
                </p>
                <p>
                    Sajnos a kiírás előtt alig több mint két héttel megtudtam, hogy a dúlám elutazik, és nem tud ott lenni a szülésemnél. Akiket maga helyett ajánlott, szintén nem igazán ismerték az orvosom és a szülésznőm, ami nekem fontos szempont volt, így az orvosom azt javasolta, hogy inkább ne legyen dúlám. A párom is ezt szerette volna.
                    Én viszont egy éjszakányi gondolkodás után arra jutottam, hogy még egy dolgot megpróbálok: felhívom a szülésznőt, hogy van-e olyan dúla, akit ajánlani tud az első helyett, akivel ő is szívesen dolgozik együtt. Ő erre azt mondta, hogy bárkivel nagy örömmel együtt dolgozik, de Emőkét ajánlaná legjobban. Emőkét még aznap reggel felhívtam, bár sok esélyt nem adtam, hogy október 8-án egy október 24-ei szülést elvállalna. Ahogy sejtettem is, eléggé elfoglalt volt a következő három hétben, többek között egy dúlatréninget vezetett, de felajánlotta, hogy beszélget a párommal és velem, és ha úgy szülök, hogy el tud jönni, akkor ott lesz.
                </p>
                <p>
                    Szerdán beszéltünk, pénteken (10-én) a párom fél nap szabit vett ki, és családilag, Blankával együtt elmentünk megismerkedni Emőkével. Emőke mindkettőnkre nagyon-nagyon pozitív benyomást tett. Kedves volt, közvetlen és nagyon profi. A két órás beszélgetés alatt arra helyezte a hangsúlyt, hogy képessé tegyen minket akár egyedül, az ő segítsége nélkül is szülni. Rengeteg információt kaptunk tőle, ami nekünk ott és akkor nagyon fontos, megnyugtató és bátorító volt. Úgy jöttünk el, hogy reménykedtünk benne, hogy ha ő nem is lesz ott, akkor is meg tudjuk csinálni a dolgot – természetesen a szülésznőmre is számítva. Az orvosomtól ugyanis a szülési tervben azt kértem, hogy ha csak lehet, csak nézelődjön, mintha ott se lenne, és csak akkor váljon az események résztvevőjévé, ha muszáj.
                </p>
                <p>
                    Sajnos a pénteki beszélgetés utáni hétfőn (13-án) kijött rajtam egy vírusos hasmenéses betegség, amitől magas lázam lett. Mondták a kórház ügyeletén, ahová betelefonáltam (tanácsot kérni lázcsillapítás ügyben), hogy ha lehet, most ne szüljek, de azért készüljek fel rá, hogy a láz beindíthatja a szülést. Mire kicsit jobban lettem (a hasmenés még tombolt, de a lázam már enyhült), a kislányomon is kijött a betegség, két éjszaka nem aludtunk, szegény annyira rosszul volt. Csütörtökön, még mindig enyhe hasmenéssel, az egyik nagyira hagyva a beteg kislányt, valahogy elvonszoltam magam a belvárosba az orvosomhoz, aki megállapította, hogy a méhszáj 3-4 centire nyitva van. Kérdezte, hogy vannak-e összehúzódásaim. Mondtam neki, hogy ha mozgok, akkor szinte folyton, de nyugalmi állapotban abbamaradnak. Erre azt felelte, hogy szerinte a hét végén szülünk, és a hét végét úgy gondolja, hogy inkább pénteken, mint vasárnap. Milyen igaza lett!
                </p>
                <p>
                    Hazamentem, gyorsan, kapkodva pakolgattam még egy kicsit (mivel Blanka teljesen időre született, most is arra számítottam, hogy így lesz – és a betegség nélkül szerintem így is lett volna, így még a csomagom sem volt teljesen kész), közben néztem, hogy viszonylag rendszeres fájásaim vannak. Emőkével az előző heti beszélgetés óta tartottuk a kapcsolatot (nagyon éreztem, hogy odafigyel, számon tart, és ez borzasztóan jól esett), most felhívtam, hogy tájékoztassam.
                    Végül az itthoni nyugalomban éjjel a folyamat leállt. Másnap este újra kezdődött, de akkor már nem mertem Emőkét hívni. Éjfélig vasaltam (!), pakolásztam, a fészekrakó ösztön olyan szinten tombolt bennem, mint azelőtt és azóta sem soha. Ha bármi is nem volt 100%-osan a helyén, azonnal vissza kellett raknom. (A kórházba induláskor szinte fizikai fájdalmat okozott, hogy megláttam a gardróbszekrényben egy rossz helyen lévő nadrágot, amit nem tudtam a helyére tenni, nehogy felébresszem a kislányom. Azóta is ott van, észre sem veszem…)
                    A párom már tizenegykor lefeküdt, hogy kipihent legyen másnapra – ő már sejtette, hogy ez a szülés, én az előző napi vaklárma után azt gondoltam, hogy most is el fog múlni reggelre. Éjféltől aztán valami félálomszerű állapotban aludtam kb. négyig, közben végig érzékeltem az összehúzódásokat.
                </p>
                <p>
                    Hajnali négykor ébredtem, nem a fájásokra, hanem mert az utolsó harmadban mindig ébren voltam négy és hat között. Figyeltem a fájásokat, és ha álltam, akkor elég gyorsan jöttek, így leültem, megfigyelni, hogy úgy is vannak-e. Voltak, méghozzá hét percenként. Felébresztettem Jánost, aztán fél hat körül felhívtam Emőkét. Ő kérte, hogy nézzem meg, mi van, ha járkálok. Akkor négy percesek voltak a fájások. Emőke azt javasolta, hogy még ne menjünk be a kórházba, én viszont szerettem volna még a reggeli csúcs előtt bemenni. Hat körül felhívtam Erzsikét, aki aznap nem dolgozott volna, de a kedvemért bejött velünk együtt. Emőke is bejött, pedig akkor volt a dúlatréning utolsó napja. Nagyon hálás vagyok neki, hogy eljött, és az is nagyon jól esett, hogy (bár korábban azt mondta, hogy fél kettőkor el kell majd mennie), amikor már javában folyt a vajúdás és én mondtam neki, hogy nyugodtan menjen majd el, ő azt mondta, hogy ott fog maradni.
                    Ez nagyon megnyugtató volt – és a végén örültem, hogy fél kettőkor mégis el tudott menni, hiszen akkor már egy órája megszületett Barnus.
                </p>
                <p>
                    Hét órakor találkoztunk Emőkével és Erzsikével az István Kórház parkolójában, együtt mentünk fel a szülőszobára. Erzsike megvizsgált, mondta, hogy öt centire vagyok tágulva. Ekkor kicsit meglepődtem, mert azt gondoltam, hogy ha úgy tágultam korábban négy centit, hogy meg sem éreztem, akkor most, miután már vagy kilenc órája fájdalmas összehúzódásaim vannak, hogyhogy csak egy további centit tágultam? De ezt csak úgy magamban gondoltam, nem mondtam senkinek.
                </p>
                <p>
                    Két szülőszoba volt szabad. Az egyik az, ahol Blankát megpróbálták megfordítani. A látványától is rosszul lettem, úgy éreztem, nekem abban nem lehet szerencsém. Így miközben a másik szülőszobát birtokba vettük, én még sírdogáltam egy sort a sikertelen fordítási kísérlet felszínre tört emlékeitől.
                </p>
                <p>
                    A CTG után elhelyezkedhettem, ahogy akartam. Egy jó ideig tartott, mire rátaláltam a megfelelő pozícióra. Először a fájásoknál a szülőágyon próbáltam megtámaszkodni, de az folyton elcsúszott, nem jöttünk rá, hogyan lehet rögzíteni. Egyébként vajúdásra teljesen használhatatlan volt az ágy, felmászni rá szinte lehetetlen, csúszik össze-vissza, stb. Utána egy kis komódon támaszkodtam meg ugyanígy. Emőke javasolta, hogy üljek a labdára, ami nagyon jó ötlet volt, a vajúdás nagy részét így töltöttem, a labdán ülve, a fájásoknál a komódra támaszkodva.
                </p>
                <p>
                    Egy ideig még egész gyengék voltak az összehúzódások, még mindig féltem tőle, hogy hátha mégsem szülünk, hátha abbamaradnak, hátha vaklárma volt, vagy nem volt vaklárma, de mégsem sikerül szülnöm. Egy idő után aztán elég erősek lettek a fájások (bár nem sűrűsödtek), úgyhogy már nem volt alkalmam aggódni, csak tettem a dolgom. Egy ponton azt éreztem, hogy kihagy a szívem, nem kapok levegőt (a babavárás alatt nagyon erős légszomjjal küzdöttem, emiatt komoly kivizsgálásokon is átestem, de nem találtak semmit). Ettől meg is ijedtem, féltem, hogy esetleg mégis van valami szívbajom, és le fog állni a szívem. Mondtam is Emőkének, de megnyugtatott.
                </p>
                <p>
                    Emőke végig nagyon sokat segített, borogatta a derekamat, rábeszélt, hogy menjek pisilni, segített kimenni, segített megtalálni a megfelelő testhelyzetet, masszírozott, jókat beszélgettünk, amíg még lehetett, stb.
                </p>
                <p>
                    Erzsike tízkor vizsgált meg, akkor 5-6 cm-re tágultam. Kicsit csalódtam, mert azt hittem, gyorsabb ütemben tágulok. Mint utólag kiderült, ez nem lineáris móka volt – a végén felgyorsultak az események.
                </p>
                <p>
                    Folyamatosan szedegettem a homeopátiás bogyókat, és próbáltam néha kicsit pihenni. A szülőágyról lepakoltuk a matracokat, hogy a földön le tudjak feküdni. Kicsit az oldalamra feküdtem, de úgy nem volt igazán jó. Próbáltam valahogy négykézláb lenni, de ahhoz nem voltam elég erős (a korábbi betegség sokat kivett belőlem), hogy támasz nélkül sikerüljön. Erzsike javasolta, hogy a labdára támaszkodjak, de az túl magas volt nekem. Végül párnákon próbáltam négykézláb támaszkodni.
                </p>
                <p>
                    Az Emőke javaslatára beiktatott „pisitúrák” egyre nagyobb vállalkozásnak tűntek. A WC a folyosó végén volt, és oda eljutni a végén már úgy tűnt, mintha hirtelen a Mount Everest alaptáborában lettem volna, ahol megkérnek, hogy jó, akkor most ugorjak fel gyorsan a csúcsra egy kicsit. Hillary lépcső meg ilyenek, nem gond…
                </p>
                <p>
                    Végig megpróbáltam nagyon koncentrálni arra, hogy én ezt akarom, ez menni fog. Ügyeltem, hogy mély hangokat adjak ki, Emőke azt mondta, hogy az segíti ki a babát, a magas hangok nem. Néha nem volt könnyű. Amikor már nagyon fájt, János és Emőke még mindig azt jelezte vissza, hogy nem látszik rajtam, hogy annyira fájna. Egy ideig még jó volt a fájások között beszélgetni, de a második vizsgálat, tehát úgy tíz óra után már nem. Időnkénti tiszta pillanataimban még sajnáltam is Jánost meg Emőkét, hogy ők most milyen baromira unatkozhatnak, hogy csendben itt üldögélnek, és csak azt látják, hogy nyögök, meg ilyenek, és ki tudja, még meddig kell ebben a halál unalomban dekkolniuk.
                </p>
                <p>
                    Mint kiderült, a hagyományos szülős zenék számomra teljesen használhatatlanok. Ezt sejtettem is előtte, de a hétvégére tervezett szülős zene kiválogatására ugye már nem maradt időnk… Próbáltunk Enyát meg más meditatív-lazítós zenéket, ezek fájásszünetekben kb. nem zavartak, fájás közben viszont úgy éreztem, hogy ha Enya még egyszer azt énekli, hogy „Sail away”, akkor magnóstól kihajítom az ablakon, de lehet, hogy előtte még porrá zúzom a magnót. Magamban Queen számokat énekeltem, egész konkrétan nekem a Don’t Stop Me Now jött be nagyon. Úgy éreztem, ez teljesen ráillik a helyzetre – valahogy azt éreztem, hogy most valami hihetetlen energiák visznek előre, és hogy nem lehet megállítani.
                </p>
                <p>
                    Egyébként meglepően zavaró volt, ha valaki bejött a szobába (sajnos néha bejöttek, ezt-azt kivinni, behozni), vagy ha végig kellet menni a folyosón a WC-hez, mások, idegenek előtt – ilyenkor nem tudtam úgy elengedni magam.

                    Fél tizenkettőkor volt a következő vizsgálat, előtte elmentünk a WC-re, és ott zuhanyoztunk egyet. Ekkor, ha Emőke nem vesz rá, magamtól már biztos nem mentem volna sehová. Ez volt az utolsó vizsgálat, ami még a vizsgálóban történt. Innentől már elég ködösek az események, mondtam is Emőkének, hogy eléggé beszűkült már a világom.

                    Ekkor Erzsike azt mondta, hogy 7-8 centire vagyok kitágulva. Ahogy János mondta utólag, látta rajtam, hogy nagyon „felszívtam magam”. Tény, hogy eléggé kiborított, hogy ennyi vajúdás után még mindig csak 7-8 centis vagyok – ha öt óra alatt csak 2-3 centit tágultam, akkor még öt órát kell ebből kibírnom???
                </p>
                <p>
                    Visszamentünk a szobába, és gyorsan benyomtam pár homeopátiás bogyót, ártani nem árthat, de hátha segít alapon.
                </p>
                <p>
                    Siklós doki egyébként még nem volt ott, de ez engem egyáltalán nem zavart, mert gondoltam, amíg egy orvos sem ugrál körülöttem, addig baj sem lehet, ha valami baj lenne, úgyis itt lennének többen is.
                </p>
                <p>
                    Innen aztán felgyorsultak az események. Eléggé gyengének éreztem magam, ezért újra lefeküdtem, az oldalamra – hiába éreztem azt, hogy az egyébként nem annyira jó pozíció, úgy éreztem, annyira fáradt vagyok, hogy kicsit meg kell így pihennem. Ebben a pozícióban egyszer csak hallottam egy hatalmas pukkanást, és kiömlött a magzatvíz. Meglepett, hogy mekkora erővel jött, és hogy milyen sok volt! Utálom, ha nedves vagyok, ezt sosem bírtam, de most esélyem sem volt szárazra törölgetni magam. Ez egy kicsit zavart, de csak úgy mellékesen, volt egyéb bajom is.
                </p>
                <p>
                    Ekkor (bár ezt már nem érzékeltem, csak Emőke mesélte), Emőke kiment szólni Erzsikének. Ő megvizsgált még egyszer, ami ellen már tiltakoztam, mert úgy éreztem, hogy nem tudok megmozdulni, hogy hozzám férjen, aztán megjelent Siklós doki is. Ő is megnézett egy kicsit, nem tudom, hogyan fért hozzám, mivel közben átmentem Emőke javaslatára négykézlábra.
                </p>
                <p>
                    Egyszer csak éreztem, hogy valószínűleg ezek tolófájások, iszonyatosan feszültem szét. Egyszer csak valami hihetetlen égető érzést éreztem, azt hittem, valamit bedugtak kívülről, valami vizsgáló eszközt, meg is kérdeztem felháborodva, számon kérőn, hogy ez mi, mire mondták, hogy a feje. (Ez azért utólag elég vicces.) Azt is mondták, hogy most ne nyomjak, hanem lihegjek. Lihegtem is szépen, csak azt nem tudtam, hogy meddig. Azt gondoltam, jó, most lihegtem, aztán nyomok megint (egyébként is olyan nyomási ingerem volt, hogy azt éreztem, ennek nem tudok ellenállni) – nyomtam is, és hipp-hopp, kint volt a gyerek.
                    <br/>Utólag kiderült, hogy jóval több fájást kellett volna átlihegni, nem csak egyet – ezen a ponton jobb lett volna, ha kicsit egyértelműbben kommunikálnak velem, mert már nagyon nehezen fogtam föl a dolgokat. (Közben János sokáig észre sem vette, hogy már a kitolásnál tartunk, és a tolófájások alatt próbálta megenni a szendvicsét, amit mindannyiszor abba kellett hagynia, mert a kezét szorongattam. Utólag ez is elég vicces volt – akkor nem is észleltem.)
                </p>
                <p>
                    Ahogy egyre inkább beszűkültem, egyre ingerültebbnek éreztem magam, amikor mondani kellett valamit valakinek. Legszívesebben ki sem nyitottam volna a szám. Sajnáltam is Jánost, hogy ilyen hisztisen beszélek vele, de annyira azért nem, hogy összeszedjem magam és szép értelmesen, türelmesen kezdjek beszélni hozzá – leginkább egy-egy szót vetettem oda, azt is sietve.
                </p>
                <p>
                    Az nagyon érdekes volt, hogy amikor nyomni kellett, akkor valahogy eltűnt a fáradtságom és minden eszméletlen fájdalom és szétszakadás ellenére valahogy mégis volt benne valami jó érzés. Ez elég furcsa, de valahogy még fizikailag is jól esett, illetve olyan érdekes dolognak találtam. Annyira érdekesnek, hogy magamban rá is csodálkoztam: jé, ez ilyen? Talán akkor szabadult fel bennem az LSD, amit egyes pszichológusok szerint az anyai szervezet az elviselhetetlen fájdalmak ellensúlyozására felszabadít. Aztán egyszer csak ott volt Barnus. Először csak a feje, aztán az egész teste. Azon magzatmázasan a mellkasomra vettem (na akkor már úgy nézett ki minden, mint egy mészárszék, tiszta vér, magzatvíz, hasonlók). Egy kicsit el voltunk így, hamarosan megszületett a méhlepény is (ez meglepően gyorsan ment, bár nem volt tolási ingerem, de a doki mondta, hogy nyomjak egyet, és bár féltem az újabb fájdalomtól, azért nyomtam, és fájdalom nélkül tényleg elkezdett jönni), aztán János elvágta a köldökzsinórt. Megnéztem a köldökzsinórt és a méhlepényt is, de annyira fáradt voltam, hogy csak ködös emlékeim vannak mindkettőről.
                </p>
                <p>
                    A szülés után, az előző császár miatt rutinszerűen elvégezték a hegvizsgálatot. Ettől nagyon tartottam, mert azt mondták, hogy bár rövid lesz, de nagyon kellemetlen, még azt is kérdezték, hogy akarom-e, hogy altassanak. Mivel az egész természetes szülésért való küzdelmemnek a fő motivációja az volt, hogy rögtön a babával lehessek, tiszta tudattal, gyógyszerektől nem befolyásolva, természetesen szóba sem jöhetett nálam az altatás. A vizsgálat meglepően barátibb volt, mint amire számítottam. Nem is emlékszem, hogy fájt-e – bár valószínűleg igen, de akkor az már nem igazán számított.
                </p>
                <p>
                    Egy idő után a szülésznő és a doki mondták, hogy gátrepedésem lett, és akkor szépen összerakták a szülőágyat, hogy az orvos meg tudjon engem toldozni-foldozni. Ez viszont kellemetlenebb volt, mint amire számítottam, mert valahogy ekkorra fogyott el a türelmem. Már nagyon vágytam volna rá, hogy végre hagyjanak békén.
                    <br/>A varrogatás alatt nem is fogtam Barnust, Jánosnál volt, mert akkor teljes mértékben arra koncentráltam, hogy legyek már ezen túl. Nem is a fájás része volt rossz, bár kicsit fájt, hanem az, hogy még mindig nem lehetek egyedül a családommal, még mindig nem adhatom át magam az érzéseimnek. Ezek után egy nővér még le is akart mosdatni, őt egy idő után gyakorlatilag elküldtem, elég ingerülten. Nagyon sajnálom, de nem volt erőm civilizáltan, türelmesen beszélgetni vele – akkor ott olyan voltam, mint egy megfáradt állat, aki el akar bújni egy sötét lyukba, és csak a párját meg a kölykét akarja maga mellett.
                </p>
                <p>
                    Barnus egyébként még a földön, a köldökzsinór elvágása előtt elkezdett irdatlan erővel szopizni, amit aztán a szülőágyra felrakva, a varrás után folytattunk.
                    <br/>Sajnos ekkor elkezdődtek az utófájások, amik nekem nagyon fájtak! Azt mondta az egyik szülésznő (nem Erzsike), hogy csak három napig fognak tartani, de nekem egy teljes hétig eltartottak, még a hetedik nap reggelén is felraktam egy fájdalomcsillapító melegítő tapaszt, annyira fájt. Ahogy erősödött a fájdalom, úgy éreztem, hogy ezt már nem bírom, úgyhogy ki akartam menni zuhanyozni, amit szerencsére megakadályoztak, mert akkor én még nem éreztem, hogy mennyire gyenge vagyok. Mint később kiderült, nagyon rossz állapotba kerültem a szülés után, valószínűleg kiszáradtam, majdnem egy napig nem tudtam felkelni. De ez már egy másik történet – a gyermekágyas osztályról legalább annyit tudnék írni, mint a szülésről, és sajnos nem a legjobbakat.
                </p>
                <p>
                    Számomra több tanulsága is van a történetnek:
                </p>
                <p>
                    1. Nem lehetetlen a császár utáni sima szülés, csak egy jó csapat kell hozzá. Szerintem Emőke nélkül nem biztos, hogy sikerül, mert nekem az ő tapasztalata, hozzáértése adta azt a biztonságot, amire szükségem volt. Ha ő nem lett volna, akkor sokkal jobban ki lettünk volna téve a kórházi dolgoknak (ő tényleg segített kommunikálni), és az lehet, hogy zavarta volna a folyamatot.
                </p>
                <p>
                    2. Bár egész életemben bántam volna, ha most sem sikerül természetes úton szülni, utólag úgy látom, hogy nekem összességében ez sem volt sem jobb, sem rosszabb a császárnál. Ezt azoknak az anyukáknak írom, akik nem tapasztalták meg mindkét utat, tehát nem tudják összehasonlítani. Nekem a fáradtság miatt nem volt olyan euforikus élmény a szülés utáni pár óra, mint amire számítottam, tehát tulajdonképpen ami miatt a leginkább szerettem volna a természetes szülést a császár helyett, az inkább a fejemben létezett csak. A természetes szülés utáni időszak sem volt habos torta. Ezzel nem azt akarom mondani, hogy ha valaki választhat, akkor ne a természetes utat válassza, rengeteg előnye volt (a szülőágyon kezdtem szoptatni, rögtön megfogtam a babát, nálam lehetett, én csináltam végig, sokkal hamarabb visszament a hasam, nem voltam úgy kiszolgáltatva, mint egy műtőben, stb.). Mindazonáltal most úgy gondolom, hogy a kislányom sem szenvedett olyan hiányt, mint amitől féltettem. Ha tehetném, megint természetesen szülnék – sőt, mindent megtennék az ügy érdekében, de már nem érezném, hogy ha császár lenne megint, az a világ végét jelentené, mert tudom, hogy a lényeg tényleg az egészséges baba és mama.
                </p>
                <p>
                    3. Nehéz eldönteni, hogy mikor kezdődik a szülés. Üzenem mindenkinek, aki szerint „egyszerűen tudod, és kész”, hogy nem mindenki tudja. Az előbb beszéltem egy nagyon jó barátnőmmel, aki tegnap a kórházba érkezés utáni kilencedik percben szülte meg a kislányát… Nem így tervezte. Annak ellenére nem tudta, mikor kell elindulni, hogy már a második szülése volt. Én magam pedig sokáig aggódtam, hogy vajon nem megyünk-e túl korán.
                </p>
                <p>
                    Mindenkinek a lehető legkönnyebb, legjobb szülést kívánom, olyat, amilyenre a legjobban vágyik!
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to="/stories">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
