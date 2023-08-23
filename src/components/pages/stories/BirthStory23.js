import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth23Pic1 from "../../../image/szulestort/szules-story-23-hero-a-ferfiaknak-is-vannak-szulestorteneteik.png";
import Birth23Pic2 from "../../../image/szulestort/szules-story-23-a-ferfiaknak-is-vannak-szulestorteneteik.jpg";

export default function BirthStory23() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth23Pic1} alt="a-ferfiaknak-is-vannak-szulestorteneteik"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A férfiaknak is vannak szüléstörténetei</h2>
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
                        <img src={Birth23Pic2} alt="a-ferfiaknak-is-vannak-szulestorteneteik"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Azt hiszem, az enyém tipikus, még ha a szokásosnál erősebb vonalakkal rajzolta is az élet.
                        </p>
                        <p>
                            Nagyon nehezen indult. A párommal, Évával két év együttélés után kezdtünk gyermeket tervezni. Ő 25 volt, én 30 – ideális életkor a gyermekvállaláshoz. Egy éven keresztül próbálkoztunk, eleinte “csak úgy”, aztán egyre kétségbeesettebben: hőmérőzés, vitaminok, megfelelő táplálkozás… Semmi eredmény. Elmentünk egy szakorvoshoz, aki megvizsgált bennünket, majd behívott, hogy megbeszéljük a teendőket. “Magának soha az életben nem lesz gyereke” – vágta nyersen a képembe. Megfordult velem a világ, a pillanat belém égett.
                        </p>

                        

                    </div>
                </div>

                <p>
                    Otthon mindig azt hallottam, arra neveltek, hogy az életünk értelme a gyerek. “Ne nekem add vissza, amit tőlem kapsz, hanem majd a fiaidnak, lányaidnak” – hallottam nagymamámtól, édesanyámtól ezerszer. Ez a világ, az életcélom omlott össze bennem ott, annál az orvosnál.
                </p>
                <p>
                    Éva találta meg a Kaáli intézetet. Akkoriban még nagyon kevés helyen működött lombikbébi-program, a TB sem támogatta. Elmentünk, ott újra megvizsgáltak, és bíztattak: van remény. Új életre kaptunk, gondolkodás nélkül belevágtunk az anyagi erőforrásainkat végsőkig kimerítő kúra-sorozatba. Vizsgálatok, gyógyszerek, újabb vizsgálatok, injekciók, pete-kiemelés altatással, közben a megalázó “sperma-adás” (kis üvegcsében leadva a mosolygó asszisztensnőnél), beültetés, reménykedés… Két hét őrjítő várakozás után Évával egymás kezét szorongatva guggoltunk a WC-ben a terhességi teszt fölé: na, mutat valamit? Nem. Semmit.
                </p>
                <p>
                    Megsemmisültem, megint.
                </p>
                <p>
                    A Kaáliban nem fogták fel ilyen tragikusan a dolgot: semmi baj, érdemes újra megpróbálni. Hányszor? – kérdeztünk vissza belekapaszkodva az újabb reménysugárba. “Háromszor. Ha akkor sem jön össze, akkor tényleg fel kell adni.” – mondták.
                </p>
                <p>
                    Megpróbáltuk. Újra. És újra. És újra. Egyre erősebb hormonkúrák (volt, hogy 30 napon keresztül minden reggel átautóztunk Budapesten, hogy Évába döfjenek egy injekciót), egyre rosszabb reakciók, egy egészségügyi kaparás. Megannyi negatív terhességi teszt. Mindannyiszor összetörtünk, magunkba roskadtunk, belehaltunk.

                    <br/>Én a hatodik kísérlet után feladtam. Nem akartam több kudarcélményt. Tudomásul vettem, hogy nem lesz gyerekem. Éva egyedül járt a Kaáliba, én csak azzal az egy-két alkalommal kísértem el, amikor muszáj volt. Közben felvetette a külső donort és az örökbefogadást. Elutasítottam. Saját gyereket akartam, a másé nem volt jó…

                    <br/>Aztán, hét év után, a nyolcadik kísérletnél csoda történt. Éva terhes maradt. Ahogy az a lombikbébi programnál nem ritkaság, ikerterhességet diagnosztizáltak. El sem mertük hinni. Nem mondtuk ki hangosan, még szinte egymásnak sem, nehogy elkiabáljuk. Elöntött bennünket a boldogság, megszűnt a világ. Csak az Éva méhében elinduló új életek maradtak.

                    <br/>A terhesség hatodik hetében az ultrahangon az orvos közölte: az egyik embrió fejlődése leállt. Először nem is fogtam fel, mit mond. Aztán igen.

                    <br/>Elöntött bennünket a rettegés, a féltés. Minden létező módon figyeltük, óvtuk a megmaradt magzatot.

                    <br/>Semmi nem ment simán. Magas volt az AFP. Elmentünk a Czeizel Intézetébe, ahol a Down- kórt szűrték valamilyen speciális módszerrel. Vaklármának bizonyult. Éva túlságosan hízni kezdett, ezért diétáznia kellett. Én is azt ettem, amit ő – a terhessége alatt lefogytam 15 kilót. Elmentünk 4D-s ultrahangra (akkoriban még nagyon új volt ez is), ott egy kontár orvos túl soknak találta a magzatvizet – megint egy csomó vizsgálat, ez is rémhír volt. Aztán volt valami furcsa szívhang – ezt is kivizsgálták, ezzel sem volt probléma.

                </p>
                <p>
                    A terhesség utolsó egy-két hónapjára végre kisimultak a dolgok körülöttünk, úgy tűnt, minden rendben. Végre elkezdtünk úgy viselkedni, mint egy normális gyermekváró pár. Esténként otthon ültünk, felváltva simogattuk Éva pocakját. Azt hallottuk, hogy a gyerek ilyenkor már hall, ezért vettünk neki egy Baby Mozart CD-t, és egy kis fejhallgatót szorítottunk oda, ahol éppen rugdalt. A gyerek második és a nyolcadik számot szerette nagyon – arra mindig megnyugodott. Meséltem neki minden este elalvás előtt.
                </p>
                <p>
                    Az öröm azonban korainak bizonyult: két héttel a szülés kiírt időpontja előtt a nőgyógyász a homlokát ráncolva megjegyezte: az ultrahang szerint a gyerek gyanúsan kis súlyú. Nem hittünk neki. Túl sok volt már a téves riasztás. Mi az, hogy kisebb súlyt mutat a műszer, mint múlt héten? Á, hülyeség az egész! De hiába vonogattuk a vállunkat látványosan, a rettegés visszatért.
                </p>
                <p>
                    Aztán eljött a nap. Éva péntek reggel fájdalmakat érzett, bementünk a kórházba, a vizsgálat után még hazaküldtek. Éva nekiállt otthon vasalni, én elmentem dolgozni. Háromkor csöngött a telefon: “gyere, be kell mennünk”. Autóba vágtam magam, átszáguldottam a városon, Éva már útra készen várt. Visszafelé beszorultunk a péntek délutáni dugóba. A Szondi utcában 35 percet töltöttünk, Éva hangosan nyögött mellettem. Mikor végre kiértünk a Körútra, felálltam a villamossínre, és 90-nel robogtam át a Margithídon. Fél ötre értünk a kórházba, addigra Éva már elég előrehaladott állapotban volt. Ott álltam mellette, a kezemet markolta, kiabált fájdalmában. Háromnegyed nyolckor megszületett a gyerek, szinte első nyomásra, könnyedén.
                </p>
                <p>
                    “Hú, de pici!” – szakadt fel az orvosból. Bea ott feküdt, összegömbölyödve, ráncosan. Nem fogtam fel, csak villogtattam a fényképezőgéppel.
                </p>
                <p>
                    A gyerek nem sírt fel, kellett volna valami cső a légutak megtisztításához, ami nem volt odakészítve. Megkövülten figyeltem. A gyerekorvos kapkodni kezdett, a gyerekkel a kezében szaladgált fel-alá a szülőszobában. Aztán megtalálta a csövet, végre felhangzott az első sírás. A gyereket betették a csap alá, megmosták, lemérték (2000 gramm), ráadtak egy pelenkát (a nyakáig ért), beletették egy pólyába, és a kezembe nyomták. Elkészült rólunk az első fénykép. És végre átjárt az érzés: megjött a kislányom. Könnyeztem.
                    Ott álltunk ketten, Beával. Még egy örökké emlékezetes pillanat.
                </p>
                <p>
                    Aztán kizökkentettek a révületből. A gyerekgyógyász elmagyarázta, hogy bár a gyerek időben született, a kis súlya miatt koraszülöttnek számíthat. “Miért érdekes ez?” – kérdeztem. “Mert nálunk nincs intenzív. Ha bármi probléma van, hétvégén még orvost is nehezen találunk. Ha viszont kérem a koraszülötté nyilvánítást, most átviszik a szomszéd kórházba, és ott felügyelet alatt van”.
                </p>
                <p>
                    Ott, azonnal döntenem kellett. Évát még varrták. “Legyen koraszülött.” – mondtam.
                </p>
                <p>
                    Hordozható inkubátorba tettük, a kosár egyik fülét én fogtam, a másikat a szülésznő, így szálltunk be a mentőbe, ami átvitt a szomszéd kórházba. A folyosón kifelé menet megállítottak a szüleim, ők ott izgulták végig a szülést. Három szóban elmondtam, mi történt, aztán robogtunk tovább. A másik kórházban gyereket azonnal inkubátorba tették, rákötötték mindenféle figyelőre, és kizavartak.
                </p>
                <p>
                    Mire visszamentem Évához a kórházba, ő már kimerülten aludt.
                </p>
                <p>
                    Hazamentem, és életem egyik legboldogabb és legborzasztóbb éjszakáját töltöttem az üres lakásban. “Soha, soha többé nem akarom, hogy hárman három helyen aludjunk!” – fogadkoztam.
                    A következő két napot a kórházak közötti ingázással töltöttem. Fényképeken és videón mutattam meg Évának Beát, akit én is csak az inkubátor üvegbúrája alatt láttam – már ami kilátszott belőle a rákötött drótoktól és csövektől.
                </p>
                <p>
                    A harmadik nap végre sikerült elérni, hogy Éva is átjöhetett a másik kórházba, egy baba-mama szobába. Addigra Bea is kikerült az inkubátorból, végre együtt lehettek.
                    Szerencsére, a kis súlyon kívül Bea tökéletesen egészséges volt. A méhlepénnyel történhetett valami, az utolsó hetekben a gyerek tényleg éhezett és fogyott. Soha nem derült ki, pontosan mi volt a gond, nem is kutattuk túlságosan.
                </p>
                <p>
                    Egy hét után hazamehettünk mindannyian. Lebegtünk, úsztunk a boldogságtól. Aztán meg a fáradtságtól. Beát a kis súlya miatt éjjelente két óránként kellett etetni majd három hónapon át, aztán még három hónap kellett, amíg végre átaludta az éjszakát (mármint éjféltől hajnali ötig.)
                </p>
                <p>
                    Az első két héten szabadságon voltam, akkor még csak-csak megosztottuk valahogy a munkát és a pihenést, de aztán, mikor be kellett járnom dolgozni, egyre nehezebben ment az éjszakázás. Hamarosan rájöttünk arra, hogy akkor bírjuk legjobban, ha egy-egy teljes éjszakát vállalunk, így legalább minden második nap tud aludni valamelyikünk. Mégis, egyre nehezebben bírtuk, fáradtabbak, ingerültebbek lettünk. Évekbe tellett, amíg kialudtuk magunkat.

                    Az egészségügyi kálváriánk sem ért még véget. Mikor a koraszülötté nyilvánítás mellett döntöttem, felültettem magunkat egy futószalagra, amin végig kellett menni. Szemészeti, gyermek-neurológiai kivizsgálás. Ez utóbbin a gyerek izomtónusát túlságosan merevnek találták. “Határérték, döntse el a kedves szülő, hogy kivizsgáljuk-e!” – megint ránk tolták a döntés felelősséget az orvosok. És újra nem mertünk nemet mondani.

                    Beát öthetes korában négy napos megfigyelésre be kellett vinnünk a Szabadsághegyi Klinikára. Nem maradhattunk vele éjszakára. Éva mindennap hajnali négykor kelt, hogy kapunyitásra, reggel ötre ott legyen a gyereknél. Munka után meg én rohantam, hogy leváltsam, és maradtam este 10-ig, amikor kidobtak a kórházból. Hál’istennek itt sem találtak semmi említésre méltó elváltozást, de – ártani nem árt alapon – előírtak egy húszperces idegpálya-fejlesztő bébitornát, naponta ötször, fél évig.
                </p>
                <p>
                    A görcs lassan oldódott. Bea gyönyörűen fejlődött, és pár hónap alatt látszott: nemhogy lemaradt volna a szellemi fejlődésben, de az átlag előtt járt pár héttel. Most hét éves, iskolás nagylány, influenzánál komolyabb baja nem volt (lekopogom gyorsan:-)
                </p>
                <p>
                    A baj nem is vele volt, hanem a szüleivel. Mire túljutottunk a nehézségeken, és élvezhettük volna a boldog családi életet, rettenetesen eltávolodtunk egymástól. Apa lettem, Éva meg Anya, és megszűntünk Férjként és Feleségként funkcionálni. Minden szeretetünkkel Bea felé fordultunk, egymásra már nem maradt erő, idő, figyelem. Jól látszik ez azon a sok száz fotón, amit a gyerekről készítettem: Éva mindegyiken félbevágva, mintha egy jelentéktelen bútordarab lenne.

                    A sok bajt, ami bennünket ért, külön-külön próbáltuk megoldani. Lehetett volna ez másképp is, kapaszkodhattunk volna egymásba is, de mindketten kemény, önálló (vagy ha úgy tetszik konok, önfejű) emberek vagyunk, akik a segítség kérését, de még elfogadását is megbocsáthatatlan gyengeségnek tekintjük. A sebeinkkel, fájdalmainkkal befelé fordultunk, takargattuk a másik elől, ahelyett, hogy együtt dolgoztuk fel volna fel a traumákat.
                </p>
                <p>
                    Bea megszületése után az alapvető logisztikai kérdéseken kívül másról nem beszélgettünk. Az otthoni problémák mellett engem fojtogattak a munkahelyi gondok, ezekről egyetlen szót sem szóltam, emésztgettem őket magamban. Közben egyre dühösebben morogtam Évára: bent az irodában végigküzdök 9-10 órát, aztán hazajövök, átöltözni is alig van időm, kezembe nyomja a gyereket, akivel innentől én játszom, fürdetem, olvasok neki este, altatom – ő az esti jóéjszakát puszin kívül nem is látja reggelig. Számolgattam a “munkával” töltött órákat, és egyre haragosabb voltam Évára az igazságtalan munkamegosztásért. (Közben persze a Beával töltött idő egyetlen percéről sem mondtam volna le.)

                    <br/>Éva nem volt hajlandó semmilyen külső segítséget elfogadni. Az ő szülei már nem éltek, az enyémekre évekig még percekre sem bízta Beát. Hát még idegenre… Öt éven át nem mentünk sem moziba, sem színházba, sem barátokhoz. Az, hogy egy hétvégét kettesben töltsünk, még a fejünkben sem fordult meg.
                </p>
                <p>
                    A szexuális életünk is romokban hevert. A terhesség alatt, a petesejt-beültetés után Éva nem akart kockáztatni (nehogy egy “idegen test” megsértse az embriót), elfogadtam, így nem is közelítettem. A szülés utáni első kísérletünk fájdalmakat okozott neki, aztán az éjjeli etetések miatt pár hónapig szinte nem is találkoztunk az ágyban… Aztán már csak “megszokásból” nem próbálkoztam, de ha mégis, akkor “most ne” elutasításba futottam.

                    <br/>A veszekedéseink főleg a gyereknevelési kérdések körül robbantak ki. A saját sérelmeket még csak-csak lenyeltük valahogy, de egyikünk sem viselte el, hogy a másik a gyereket félrenevelje. Eljutottunk oda, hogy nem tudunk beszélgetni, ezért eltérő nézeteinket hatalmas indulatok közepette tudattuk a másikkal.
                </p>
                <p>
                    Ha nincs a gyerek, akire annyit vártunk, régen elváltunk volna.
                </p>
                <p>
                    Ebben a helyzetben véletlenül futottunk össze Emőkével egészen más ügyben, de ahogy beszélgetni kezdtünk, perceken belül kiderült, hogy ő egy olyan szakember, aki megértheti a problémáimat. Találkoztunk, és elmeséltem, elkeseregtem neki a problémáimat. Ahogy már írtam, nem szoktam elfogadni a segítséget. Az ő személyiségéből sugárzott valami, ami bizalmat ébresztett, és képessé tett, hogy őszintén, nyíltan beszéljek. Megértett. Aztán megfogta a kezemet, és végigvezetett Éva útján.
                </p>
                <p>
                    Merthogy a pokoljárásom alatt mindig a magam fejével gondolkodtam, nem értettem meg, hogy Éva hogyan élte meg a történetünket.
                </p>
                <p>
                    Szembesülnöm kellett az ő dilemmájával: együtt maradjon-e egy férfival, akinek nem lehet gyereke, miközben ő teljesen egészséges. Vállalja-e azt az egészségromboló tortúrát, ami a lombikbébi-programmal jár? Hiszen volt, hogy akkorára duzzadt a méhe, mint egy három hónapos terhesé, és nem maradt rajta egy ép pont, ahová még egy injekciót lehetett volna döfni. És ő vállalta az altatások kockázatát, meg a kaparást…
                </p>
                <p>
                    Aztán a kudarcok sorozata. Emőke megértette velem, hogy a gyerekek meg nem szülését az anyák ugyanúgy élik meg, mint a megszületettek elvesztését. Nyolc magzatot veszítettünk el, ennyi maradt elgyászolatlan.
                </p>
                <p>
                    Át kellett gondolnom, hogy mit érzett Éva, amikor a szülés után kitépték a kezéből Beát, és elvették tőle napokra. Mit érezhetett, amikor a szülészeten a kétágyas kórházi szobájában a másik anyuka kezében ott aludt békésen az ő babája. És aztán a neurológia miatt újra ki kellett adnia Beat a kezéből – persze, hogy nem adja többször senkinek.
                </p>
                <p>
                    A szexuális viselkedését is át kellett értékelnem. A petesejt beültetésekre való készülés teljesen kiölte a spontaneitást: naptárra, orvosi parancsra kellett szeretkeznünk vagy távol maradnunk évekig. A hormonok, amikkel teletömték, megint csak nem segítettek. A terhesség alatt, a szülés után megváltozott az alakja, és jó ideig nem maradt rá energiája, hogy letornázza a felesleget.
                </p>
                <p>
                    Beszéltünk arról, hogy hogyan élhette meg Éva az otthon-maradást: egyetlen beszélgetőtársa egy kisbaba volt, kiesett a munkájából, hiányzott a hivatása és a kollégái. A fizetése az enyém töredékére csökkent, megalázó helyzet ez annak, aki világ életében saját maga tartotta el magát.
                </p>
                <p>
                    Emőkével egy hosszú délelőttön végigmentünk ezen az úton, és a végén – hosszú évek után először – megbocsátással, szeretettel tudtam Évára gondolni. Hazamentem, és végre elindulhatott egy beszélgetés közöttünk.
                </p>
                <p>
                    Szülőnek lenni csodálatos. A szülővé válás viszont bonyolult folyamat, sok buktatóval, fájdalommal, dilemmával, nehéz döntésekkel. Mennyivel könnyebb lett volna ez az út, ha közben mellettünk áll egy tapasztalt segítő, akihez bizalommal fordulhatunk néha…
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
