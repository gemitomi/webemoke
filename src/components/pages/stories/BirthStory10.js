import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth10Pic1 from "../../../image/szulestort/szules_story_10_hero_queen.png";
import Birth10Pic2 from "../../../image/szulestort/szules_story_10_kiralyno.jpg";

export default function BirthStory10() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
           <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth10Pic1} alt="Queen"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Egy kis Queen</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. november 09.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                       <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth10Pic2} alt="Queen"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            2011. február 4-én, hajnali 3.19-kor megszületett Bori, akivel kis családunk nagycsaláddá vált. Ez a várandósságom is a nálam szokásos „faros baba parával” volt fűszerezve – lásd Barnabás születésének történetét, itt bővebben nem részletezem. Szerencsére a szokásos össze-vissza forgás után az utolsó hetekben fejjel lefelé állapodott meg Bori.
                        </p>
                        
                            
                    </div>
                </div>

                <p>
                    Január 23-án, három héttel a kiírt időpont (február 14.) előtt, az idő szorítását egyre jobban érezve, őrült iramban be akartam fejezni a gyerekruhák átválogatását, elpakolását, elrendezését – három gyerek teljes ruhatáránál ez már nem kis feladat várandósság nélkül sem. Több, mint 2 órán keresztül rendkívül keményen dolgoztam. Másnap reggel a nagyokra a pótnagyi vigyázott, én pedig elmentem a dokimhoz, és ha már úton voltam és volt segítségem (nagyon ritka kombináció, szinte sosem jutok el vásárolni), akkor már beiktattam pár elintéznivalót a délelőttbe. Útközben éreztem, hogy néha görcsölök, de nem éreztem a korábbi jóslófájásokhoz képest nagy különbséget. A meglepetés akkor ért, amikor hazatérve láttam, hogy vérzek is. Megijedtem, azonnal hívtam a szülésznőmet, Csűrösné Erzsikét. Nagyon nem akartam még szülni, egyrészt úgy olvastam, a babának minden hét számít az idegrendszere fejlődésében, még a 37. hét után is, másrészt még annyi mindent el szerettem volna végezni, nem voltunk egyáltalán felkészülve a kicsi fogadására.
                </p>
                <p>
                    Aznap este az ijedség miatt szinte szó szerint szinte fel sem álltam a kanapéról, és onnantól összességében igyekeztem nagyon visszafogni magam, különösen, amikor 24-én Siklós doktor váratlanul bejelentette, hogy 27-én éjféltől 6-án délutánig egy konferencián fog részt venni Franciaországban. Nagyon megijedtem, hogy másnál kell szülni (amire a görcsök fényében volt is esély), a császáros múltam miatt (az első császár, a második sima szülés volt, itt megint utalok Barnabás születésének történetére, ahol részleteztem).
                </p>
                <p>
                    A görcsök megmaradtak, ezért a következő időszakot a lehető legtöbb pihenéssel, szükség esetén pedig csigalassúságú mozgással tengettem, közben azt mantráztam, hogy megvárjuk Siklós dokit, illetve, hogy a szülésig nem lesz az Istvánban influenza zárlat. Az első két szülés után ugyanis annyira rosszul voltam, hogy rettegtem attól, hogy a gyerekágyas időszakban nem jöhet majd be a férjem segíteni, féltem, hogy most sem lennék képes egyedül ellátni a babát, a csecsemős osztályra viszont semmiképpen nem szerettem volna leadni őt.
                </p>
                <p>
                    Ha megerőltettem magam kicsit is, pár csepp vér mindig jött, görcsölgettem is minden nap. Február 1-jén, kedden még voltam bent az Istvánban CTG-n, akkor még nem voltak a gép által kimutatható fájások. Éjjel már alig aludtam, figyeltem, hogy szülök-e vagy sem, így aztán szerdán gyorsan még egyszer összeszedtem magam, és elintéztem anyukám segítségével egy-két dolgot, sejtettem, hogy sok időm már nem lesz ezekre. Nagy szerencse volt, hogy apukám (aki vidéken él) csütörtökre bejelentette magát, hogy még egyszer unokázzon a baba születése előtt. Estére annyira kifáradtam, hogy sem főzni, sem rendet rakni nem volt erőm, csak ültem és vártam, hogy feküdjenek le a nagyok (ezt az apjuk intézte). Hajnali fél négy körül ugyanarra a meghatározhatatlan általános fizikai rosszullétre és hasmenésre ébredtem, mint az első szülésemnél, ezért voltam biztos, hogy hamarosan szülünk. Hatig folyamatosan a fájások közötti időt mérve tűnődtem, hogy most ébresszem-e a csapatot vagy várjak-e még kicsit, közben magamban mérgelődtem, hogy most még nem akarok szülni, nincs itt a dokim, annyi dolgom van még, nem akarok szülni! Másnap volt egy nagyon fontos találkozóm (a gyerekek érdekében), amire mindenképpen el akartam menni, és szabályosan dühös voltam, amiért a szülés ebben meg fog akadályozni. Végül hatra elálmosodtam és megszűntek a fájások. Utólag azt gondolom, hogy nagy valószínűséggel én tartottam vissza a babát még egy napra, a találkozó miatt.
                </p>
                <p>
                    Ekkor egyébként életem egyik legszörnyűbb rémálmát álmodtam. Miután a második babámat sikerült természetes úton világra hozni, azt gondoltam, császárt és sima szülést is átéltem már, kb. ugyanolyan élmény volt végül is mindkettő, tudom, hogy milyen a szülés, most már mindegy, hogy születik a harmadik baba. Hát ebben nagyot tévedtem! Tudatosan még mindig ezt gondoltam ugyanis, az álmomban viszont váratlanul és erőszakosan meg akartak műteni vadidegen orvosok egy vadidegen kórházban, számomra érthetetlen indokkal. Az álom legrosszabb momentuma az volt, hogy sehogy nem tudtam Emőkét felhívni, aki mint megmentő szerepelt az álomban, én pedig üvöltve fetrengtem a kórház folyosóján, azt kiabálva, Emőkét akarom, Emőkét akarom, meg hogy addig senki nem nyúlhat hozzám, amíg ide nem ér a dúlám! (Az álomban ekkor vicces módon anyukám odaért hozzánk a kórházba, és telefonon próbált pszichológust vagy pszichiátert szerezni, mert láthatóan megőrült a lánya, valakinek le kell nyugtatóznia. Tehát még a saját álmomban is nevetségesen eltúlzottnak láttam a hisztériámat.) Hihetetlenül élénk, valószerű és ijesztő volt az álom, felébredve pedig tisztában voltam vele, hogy mondhatok én magamnak bármit, a császár mégsem ugyanolyan jó számomra, mint a normál szülés.
                </p>
                <p>
                    Csütörtökön tehát elmentem autóval a várva várt találkozóra, az út csak negyed óra oda és ugyanennyi vissza, nem tűnt nagy dolognak, a fájások meg úgyis csak éjszaka jöttek addig igazán komolyan. Utólag aztán kiderült, hogy hihetetlen felelőtlenség volt, mert a találkozón, alig hogy odaértem, igazán komoly fájásaim lettek. Valószínűleg megnyugodtam, hogy eljutottam oda, így tudat alatt zöld utat adtam a testemnek. A végén alig tudtam hazavezetni. Sajnos a férjem nem vezet, meg egyébként is dolgozott, így nem hívhattam segítségül, hogy hazavigyen, tehát mégis autóztam. Az egyik piros lámpánál ért egy olyan görcs, ami után hálát adtam a Jóistennek, hogy lámpánál történt, és mindent megígértem, csak épségben hazaérjek (már nagyon közel voltam). Most, tiszta fejjel látom, hogy egyrészt legfeljebb taxival lett volna szabad elmennem (a BKV abban az állapotban szóba sem jöhetett), másrészt, ha már ott voltam és éreztem, mennyire megindultak a dolgok, ott kellett volna hagyni az autót és taxival hazajönni. Akkor és ott nem tudtam átgondolni a dolgot. Este holtfáradtan, az elmúlt két éjszaka virrasztásaitól álmosan már szinte semmire nem voltam képes, apukám és a férjem intézték az otthoni teendőket, egy bundás kenyeret nem tudtam megsütni. A férjemmel igyekeztünk figyelni a fájások sűrűségét, de nem igazán ment, mert valami mindig elvonta a figyelmünket. Így aztán továbbra sem tudtuk, hogy ez már az-e, de annak nagyon örültünk, hogy apukám ott alszik nálunk, mert így nem kellett a segítség érkezését várni, ha mégis mennünk kell.
                </p>
                <p>
                    Este fél tizenegykor jutottam ágyba (a gyerekek nagyon nehezen feküdtek le, érezték a feszültséget és a várakozást a levegőben), de csak háromnegyed tizenkettőig tudtam aludni, azt is úgy, hogy minden fájásra felébredtem, és feljegyeztem a kezdetét és a hosszát. 23.40-kor arra ébredtem, hogy pisilnem kell, de ahogy felültem, egy kis pukkanást hallottam, majd egy kis víz csordogált végig a lábamon. Egy barátnőmtől örököltem pár magzatvíz-indikátort, amit azonnal elő is vettem, és persze igazolta, hogy a magzatvíz folyik. Meglepődtem, hogy ezzel indítunk, mert az előző két szülésnél teljesen máshogy indult a vajúdás. De legalább egyértelművé vált, hogy nem fogjuk már megvárni Siklós dokit, ezért elfogadtam, hogy most már biztosan másnál szülök, és abból fogjuk kihozni a legjobbat. A páromat felébresztettem, Erzsikének írtam egy sms-t, Emőkét pedig felhívtam. Egy előzetes pozitív Streptococcus B eredmény miatt azonnal indultam volna, hiszen azt mondták, hogy a kitolás előtt négy órával meg kell, hogy kapjam az antibiotikumot, Emőke viszont arra biztatott, hogy várjak addig, amíg a fájások nem lesznek egy perc hosszúak, illetve viszonylag rendszeresek. 
                </p>
                <p>
                    Egy jó órát ébren vártam, de az elmúlt átvirrasztott éjszakák miatt ekkor elálmosodtam és lefeküdtem. Még mindig teljesen rendszertelenek voltak a fájások, bár rendkívül erősnek éreztem őket. A rendszertelenség és rövidség miatt azt gondoltam, hogy még legalább 6-7 óra van hátra, és elképzelni nem tudtam, hogy fogok ebből még 6-7 órát bírni, marha mérges voltam, hogy ennyire fáj már most (ha tudtam volna, hogy igazából már csak alig több mint két óra választ el a kislányomtól, akkor azon lepődtem volna meg, hogy csak ennyire fáj). Végül negyed kettő körül azt éreztem, hogy fekve is olyan 6-7 percenként jönnek a görcsök, ezért felhívtam Emőkét, megbeszéltük, hogy kettőre mindketten bemegyünk a kórházba. Nagyon fontos volt számomra, hogy együtt menjünk be, mert az első szülésemnél egy nagyon bunkó szülésznő vett fel az osztályra, ami annyira rossz élmény volt, hogy azóta alapelv, hogy ha lehet, már bemenni is csak dúlával és saját szülésznővel megyek.
                </p>
                <p>
                    1.20 körül felkeltem, hogy felöltözzek, kivigyük a csomagokat. Hirtelen a függőleges helyzetben nagyon felgyorsultak a dolgok, be is pánikoltam, hogy a végén még későn jön az a taxi – nem sokkal korábban egy barátnőm a taxiban szült, ez nyilván hatott rám. Elindultunk, és kb. öt percre tőlünk a férjemnek eszébe jutott, hogy otthon hagyta a fényképezőt és a videót. (Minden egyéb cuccot én pakoltam, neki erre a két dologra kellett figyelnie.) Miközben visszakanyarodtunk, mondtam neki, hogy az életét mentette meg, hogy most eszébe jutott, nekem ugyanis nagyon fontosak a fényképek. A gyerekek születéséről készült képeket, videókat különösen gyakran nézegetem, mivel érdekes módon az emlékeim meglehetősen ködösek a szülésekről, jó, hogy van valami, ami segít felidézni őket. A Soroksárin, olyan öt perccel a kórháztól már határozottan éreztem, hogy megváltoztak a fájások, a baba hihetetlen erővel elkezdett lejjebb és lejjebb furakodni.
                </p>
                <p>
                    Végre megérkeztünk, akkor én már alig voltam magamnál, nem is tudtam rögtön kiszállni, mert csak nem akart az aktuális fájás véget érni – azt hiszem, a taxis kicsit be is rezelt, hogy a végén még nem tud kiszedni. Emőke már ott várt, együtt mentünk fel a szülőszobára, kb. 2.20-kor érhettünk oda. Erzsike akkor öltözködött, és akkor már nagyon vártam, hogy megvizsgáljon. A fájások szinte folyamatosak voltak, amíg Erzsikére vártam, a falat nyomtam a kezemmel nagy erővel, koncentrálva, hogy kibírjam állva a vizsgálatig. Mondta, hogy két fájás között fog vizsgálni, mire Emőke kuncogott a háttérben, hogy akkor az nem lesz könnyű. Valahogy csak megnézett Erzsike, mutatta a kezével, hogy mennyire szépen ki vagyok tágulva (Emőke szerint kb. 7 centit mutatott). Bementünk ugyanoda, ahol Barnus született, rögtön felvettem a kedvenc labdás pozíciómat, ami nagyjából segített is. Átöltözni nem is tudom, hogy öltöztem, abban is valahogy Emőke meg talán a férjem segített, ez meg sem maradt bennem.
                </p>
                <p>
                    Ami nagyon megmaradt: nagyon hiányzott Barnabásnál a megfelelő zene – ő pont azon a hétvégén született, amikor össze akartam volna gyűjteni a szülős zenéket. Most ennek a kérdésnek különös figyelmet szenteltem. Előre bevittem a CD-ket, ellenőrizni, hogy lejátssza-e a CD lejátszó. Volt vagy hat CD-nyi válogatott zene (hosszú vajúdás esetén is legyen változatosság, legalább tízórányi zeneanyagot vittem). Ahogy beértünk a szülőszobára, minden erőmet összeszedve megkértem a párom, hogy rakja be a zenét. Valószínűleg már csak mormogásnak hangzott kívülről, mire ő visszakérdezett, hogy mit is mondtam. Az előző szülésemhez hasonlóan most sem volt energiám magyarázgatni, csak ráüvöltöttem, hogy CD!!! Ő csak nézett, de szerencsére Emőke fogta a dolgokat, és berakták a kért zenét. Az előző alkalom óta ott dübörgött a fejemben a Don’t Stop Me Now a Queen-től, mint Nekem Való Szülős Zene, úgyhogy most nem volt kérdés, hogy arra vajúdok. Ennek még lesz jelentősége.
                </p>
                <p>
                    Erzsike hamarosan bejött, rákötött a CTG-re, bár próbáltam alkudni, hogy azt most ne, de ebben nem volt alku… Így labdástól áthelyezkedtem a szülőágy másik felére, ahol az ágyon támaszkodva vajúdtam tovább. Ekkor már kibírhatatlannak éreztem a fájdalmakat. Nagyon elgyengültnek éreztem magam, és úgy éreztem, nem bírom ezt, nem tudom megcsinálni. Érdekes, hogy egy-két fájás teljesen más jellegű volt és nem fájt annyira, ilyenkor mindig azt éreztem, hogy Bori most valahogy a csontjaim közé nyomakszik, és most nem a méhszájamon érzem a fájást. Ezek valahogy nagyon érdekes fájások voltak, még azt is mondhatnám, hogy izgalmasak, mert valahogy nagyon éreztem a hatását, eredményét.
                </p>
                <p>
                    A CTG végén már nagyon szenvedtem, úgy éreztem, hogy már nem bírok nem nyomni. Bár a beszéd már nehezen ment, rákérdeztem, hogy letelt-e a negyed óra. Letelt, így valaki szólt Erzsikének, aki bejött, és mondtam neki, hogy nagyon jön a gyerek, vegye le a CTG-t.
                </p>
                <p>
                    Felvánszorogtam a szülőágyra, felvettem az előző szülésemnél áhított oldalfekvős pozíciót. Barnabásnál anno Emőke beszélt rá a térdelésre, mert úgy hatékonyabban lehet nyomni, de most, pont azért, mert Barnabás olyan nagyon hatékonyan és gyorsan kijött, némi kárt hagyva maga után, pontosan egy kicsit lassabb eredményű pozíciót kerestünk. Maga a kitolás most nem is lett gyors (az előző szülésemnél a második nyomásra kint volt Barnabás feje), legalább fél órát kitett. Ahogy a párom fogalmazott: hosszú szüneteket tartottam. Ebből megértettem, hogy ő azt hitte, én határozom meg, mikor nyomok és mikor nem. Persze nem így volt, el is magyaráztam neki, hogy a fájásokra csak rányomtam, igazából a baba és a méhem végezték a fő munkát, én csak segíteni tudtam. Kicsit meg is ijedtem, hogy milyen lassú az egész (legalább 8-10 tolófájás volt, fájásonként kettőt-négyet nyomtam, tehát sokat), egy ponton be is pánikoltam, hogy beragadt a baba, rákérdeztem, hogy minden rendben van-e. Megnyugtattak, hogy nagyon szépen haladnak a dolgok, nagyon ügyes vagyok, és ha akarom, megsimogathatom a fejét. Nem akartam – rá sem bírtam gondolni, hogy megmozdítsam bármimet is, annyira jól bevackoltam magam abba a pozícióba, illetve annyira koncentráltam az eredményre. A doki nem tudom, hol állt, de nem volt velem fizikai kontaktusa (ami jó volt, pontosan ezt vártam tőle, hogy ha nem kell, észre se vegyem, hogy ott van). Erzsike tartotta a gátat, a párom a hátam mögött állt és fogta a kezem, amit néha megszorítottam, Emőke pedig hol a fejemnél állt, bíztatott, hol Borit nézte, tájékoztatott, hol pedig fényképezett. Nekem nem tűnt fel, de Emőke nagyon viccesnek találta, hogy amikor a fejének éppen a legnagyobb körfogata nyomakodott át a gáton, akkor nagyon helyénvalóan az „I Want to Break Free” című szám ment.
                </p>
                <p>
                    Amikor végre kijött Borika feje, állítólag azonnal elkezdett sírni, aztán azon lendülettel kint volt a teste is. Ez a pillanat nagy megkönnyebbülés volt, bár féltem egy kicsit az utómunkálatoktól, amik előző alkalommal nagyon kellemetlenek voltak. Nagyon örültem, hogy kint van Bori, magamra vettem és ismerkedtünk, betakarták egy piros törölközővel, és feküdt rajtam. Vártuk a lepényt, egy ponton Erzsike kérte, hogy próbáljak nyomni, és bár nem volt fájás, mégis tényleg kijött szépen a lepény. Amíg varrtak, addig Borit átadtam az apjának, Emőkének meg szorítottam a kezét. Azt mondták, hogy egy pici (kb. 2 cm-es) repedés lett az előző repedés mentén, röviden fognak csak varrni – hát nekem nagyon hosszú volt így is. Először a gátba kaptam injekciókat. Utána betapintással megvizsgálta a doktornő a heget (ez egyébként messze nem fáj annyira, mint mondják, az a pont fáj, amikor benyúl a méhszájon keresztül, de amikor már bent van a keze és körbetapint, az már csak kicsit fáj). Utána elkezdődött a varrogatás, ami most is kellemetlen és hosszú volt. Mikor végre vége lett, akkor még kis tisztogatás is volt, és akkor végre visszakaphattam Borit. Kis hajas babaként született, a pofija egész vörös volt és megnyomódott, tiszta boxoló orra volt (egy fél nappal később már teljesen másképp, igazán helyesen nézett ki). Neki is 10/10-es Apgarja lett, mint a tesóinak, 2970 gramm és 50 centi volt, és láthatólag egészséges, amiért végtelenül hálás voltam.
                </p>
                <p>
                    Az influenzazárlat miatt a gyerekágyra már egyedül mentünk. Borit elvették tőlem, őt rögtön a csecsemősökhöz vitték. Érdekes, hogy bár előzetesen nagyon féltem attól, hogy egyedül kell ellátni a babát, most, a könnyű szülés után teljesen máshogy éreztem magam, mint a császár, vagy mint a betegség utáni, kiszáradt állapotban történt szülés után. Az is szerepet játszhatott, hogy végre megtanultam, hogy nekem nagyon fájdalmasak az utófájások, és előre felkészülten, megfelelő fájdalomcsillapítókkal felszerelkezve vonultam be a kórházba, és nem is féltem bevenni a gyógyszert, amikor kellett. Így most a szülés után pár órával egyedül keltem fel, magam mentem ki a csecsemősökhöz a gyerekemért, akire addig (vagy egy órát) hiába vártam. Megint sikerült meglepniük a „hát maga meg miért jött ezért a gyerekért?” hozzáállásukkal. Talán, mert az enyém? Én azt nem értem, hogy miért kell egyáltalán rutinból elvenni tőlem és berakni egy inkubátorba (nem is nézett rá az orvos addig), amikor erre senkit nem kértem, ellenben nyomatékosan mondtam, hogy magam mellett akarom tudni a gyerekemet.
                </p>
                <p>
                    Kicsit gyenge és fáradt voltam, de összességében most az előző alkalommal szinte pokolinak megélt gyerekágyas tartózkodás igazán kellemesre sikerült. Volt egyágyas szoba, ágyba hozták a kaját, saját zuhanyzó, ki sem kellett kelni az ágyból, annyit olvashattam és csodálhattam a babát, amennyit akartam, senki nem nyúzott kajáért, vízért, igazságszolgáltatásért valami vitában, tiszta wellness hétvége volt. A két nagy után a pici babát ellátni igazán semmiség, így, hogy szerencsére semmi gond nem volt vele.
                </p>
                <p>
                    A meglehetősen hosszúra nyúlt történet végére egy kis vidámság és pár tanulság. Pár nappal a hazatérésünk után felhívtam a kórházat a Streptococcus eredmény miatt (kenetet vesznek a babától születés után, és megnézik, vannak-e benne baktériumok). Az eredmény negatív volt, végtelenül megkönnyebbültem. A férjem éppen akkor ment el fél órára ügyet intézni, és amikor hazaért, könnyes szemmel ugrottam a nyakába: nem lett a babának semmi baja, minden rendben! Mivel nem mondtam, hogy a Streptococcusról beszéltek, jól megijedt, azt hitte, hogy annak örülök annyira, hogy abban a fél órában, amíg távol volt, sikerült életben tartanom a babát, és már előre elszörnyedt, hogy mi lesz, ha majd pár nap múlva visszamegy dolgozni, ha fél órát is ilyen nehezen bírok ki.
                </p>
                <p>
                    Tanulságok: 1. Van, aki még harmadszorra sem tudja eldönteni, hogy mikor kell elindulni a kórházba. Ahogy előzőleg, most is napokig nem volt egyértelmű, hogy szülök-e már, illetve amikor a magzatvíz-szivárgás egyértelművé tette, a fájások rendszertelensége miatt még akkor sem tudtam, mikor érdemes el is indulni a kórházba (tudom, a protokoll szerint ilyenkor azonnal). 2. Nem kell félni fájdalomcsillapítót szedni, ha szükség van rá – sokkal jobb lesz a helyzet, és ez mindenkinek jó, nincs jobb, mint egy kipihent anya. 3. Az egyágyas szoba királyság – ha segítség kell, és nincs látogatási tilalom, akkor akár még éjjel is ott lehet az apuka/nagyi, ha nem kell, akkor meg egyedül nagyon jó lehet pihenni.
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
