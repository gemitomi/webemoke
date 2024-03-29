import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth11Pic1 from "../../../image/szulestort/szules_story_11_hero_szules_kozben.png";
import Birth11Pic2 from "../../../image/szulestort/szules_story_11_szules_kozben.png";

export default function BirthStory11() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
          <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth11Pic1} alt="Szules kozben ceget alapitok"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Szülés közben céget alapítok</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. október 20.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                       <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth11Pic2} alt="Szules kozben ceget alapitok"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Első lányom, Hédi úgy 3 hónapos lehetett, amikor egy esti fürdetés utáni szoptatás közben egy pillanatra elbóbiskoltam. „Álmomban” Hédi így szólt hozzám:  “Hamarosan testvért kell szülnöd Nekem.” Élénken emlékszem, ahogy felriadtam a tudatomban dübörgő kedves, ám határozott felszólítástól, majd megpillantva a karjaimban békésen szunyókáló csöppséget teljesen eltöltött a bizonyosság, hogy ez így lesz.
                        </p>
                        
                            
                    </div>
                </div>

                <p>
                    Két hónap múlva – nagyjából ennyi idő alatt költöztünk el Budapestről, Velencén épülő családi házunkba – Lacus szülinapján bejelentettem, hogy újra babát várok. Az élet faramuciságát igazolja, hogy második várandósságom alatt szívem szerint sokat pihentem volna, nem éreztem, hogy hajt a tettvágy – ezúttal azonban egy pár hónapos gyermek mellett nem tehettem. Úgyhogy másodjára is végigpörögtem a gyermekvárás kilenc hónapját.
                </p>
                <p>
                    Május 8-ára voltam kiírva, de én már április 20-tól minden napnak úgy indultam neki, hogy MA, ma biztosan meg fog születni. Nehezen viseltem az utolsó hónapot, és május elejére minden lendületem elfogyott. Csilla, a húgom jött segíteni, mert már csak nagy nehézséggel bírtam ellátni a Hédi körüli teendőket, és már bántott, hogy nem tudok lépést tartani totyogó 13 hónaposom csillapíthatatlan kíváncsiságával.
                </p>
                <p>
                    Május 8. után, minden egyes napot kínzásnak éltem meg, és sokszor eltört már a mécses. Emlékszem, hogy a szülést megelőző napon egyedül felmásztam a kertünkbe, átöleltem egy fát, és könyörögtem, hogy adjon erőt, segítsen méltó módon elviselni a még hátralévő időt. És persze hangosan veszekedtem a még soha nem látott lányommal, hogy vegye tudomásul: idáig bírtam őt a testemben hordozni.
                </p>
                <p>
                    Aznap Lacus korán lefeküdt.
                </p>
                <p>
                    – <i>Mi ütött beléd? – kérdeztem Tőle. </i>– Még csak fél kilenc van.
                </p>
                <p>
                    – <i>Aludnom kell,</i> – válaszolta eltökélten – holnap szülni megyünk.
                </p>
                <p>
                    Ehhez tudni kell, hogy igazi, bal-agyféltekés férfiként soha azelőtt nem bocsátkozott jóslásokba Héla világrajövetelét illetően. Hatodik érzéke úgy tűnik, akkor aktiválódik, amikor már az enyém teljesen cserbenhagy bennünket – gondoltam, azzal elaludtam. Hajnal 5 órakor fájásokra ébredtem, de még nem mertem reménykedni. Emőke javaslatára csináltam magamnak egy jó meleg fürdőt, és azt figyeltem, hogy a hatására csillapodnak-e a fájások. Hála Istennek nem így történt, úgyhogy egyszeriben biztos lettem benne, hogy Lacusnak igaza volt, ma szülni megyünk.
                </p>
                <p>
                    A fájások intenzitását tekintve még nem éreztem indokoltnak, hogy elinduljunk a kórházba, de Lacus és Emőke is azon az állásponton volt, hogy jobb elkerülni a reggeli forgalmi dugót az M7-es bevezető szakaszán, legfeljebb elütjük az időt hármasban Emőke budapesti rendelőjében.
                </p>
                <p>
                    Végül nem így történt. A kórházban az ügyeletes szülésznő közölte velem, hogy a méhszáj 4 ujjnyira nyitva van, már csak előre kell csúsznia a méhszájnak, és a baba megszületik.
                </p>
                <p>
                    – <i>Jó, akkor jöjjek vissza kicsit később?</i> – kérdeztem tőle, mire meglepődve válaszolt:
                </p>
                <p>
                    – <i>Enikő, nem érti. Maga innen sehova nem megy, legfeljebb a szülőszobába.</i>
                </p>
                <p>
                    – <i>Á, az nem lehet. Én nem érzem, hogy… </i>– hebegtem, de végülis nem ellenkeztem. Az volt bennem, hogy nemrég szültem, emlékszem milyen a fájdalom, ami kísérte a tágulást, a test felkészülését a baba elengedésére. Ezúttal nem így éreztem.
                </p>
                <p>
                    A szülőszobán rám csatlakoztattak egy szívhang-hallgató készüléket, majd egyedül hagytak, én pedig csendben meredtem a plafonra, még mindig hitetlenül, és csodálkozva, hogy én most éppen vajúdok. Kis idő telt el így, aztán megérkeztek a szobába Lacus és Emőke. Kezdetben élénk társalgás zajlott, nevetgéltünk, jól éreztük magunkat. Én egy piros labdán hintáztattam magam, ők a földön üldögéltek. 5 percenként beköszöntött egy-egy fájás, de egyáltalán nem volt intenzív.
                </p>
                <p>
                    Jobb híján betettünk a CD lejátszóba egy Caramell CD-t, és a helyzet egyre abszurdabbnak tűnt. A „céget alapítok” című számnál, nem bírtam tovább és hangos kacagásban törtem ki. Elképesztő vicces volt, ahogyan épp arra várunk, hogy kibújjon belőlem egy kisbaba. Abszolút nem éreztem sem magam, sem a zöld műtősruhában Nemzeti Sportot olvasó férjemet, sem a felhúzott térde között gondolataiba merülőő Emőkét adekvátnak a helyzethez. De főleg nem azt, hogy – céget alapítok, és jó nagyot szakítok… Szóval mi van??? Nem bírtam abbahagyni a hangos kacagást. Orsi, a szülésznőm éppen benyitott, és a legnagyobb természetességgel kezelve a látottakat megkérdezte:  – Buli van?
                </p>
                <p>
                    Majd anélkül, hogy választ várt volna, vagy elcsodálkozott volna, rendezkedett valamit, és ahogy jött, úgy távozott. Ekkor már Emőke sem bírta kacagás nélkül, és Lacust is szórakoztatta a dolog. Mindeközben teljesen kitágultam, a méhszáj előrecsúszott, a baba feje szépen beékelődött indulásra készen, de a szülés sajnos nem indult be.
                </p>
                <p>
                    Annyira nem, hogy egyre álmosabbnak éreztem magam, bár igazán nem értettem mitől, hiszen nem voltak kínzó fájdalmaim. Emőke azt mondta feküdjek le az ágyra, és aludjak egy kicsit, ha jólesik. Jólesett, de a fájások szinte teljesen leálltak, én pedig egyre kimerültebbnek éreztem magam. Zoli, az orvosom azt javasolta, hogy mivel minden egyéb feltétel adott, repesszük meg a burkot, mielőtt teljesen elhagyna az erőm.
                </p>
                <p>
                    A burokrepesztés után felültem az ágyon, de haboztam felállni, mert valahogyan visszaemlékeztem, hogy az első szülésemnél is a magzatvíz elfolyása után indult be igazán a „folyamat”, és egyszeriben félni kezdtem. Olyan élesen hasított belém a félelem, hogy újra fájni fog, hogy amikor Orsi megfogta a kezem, hogy segítsen felállni, sírni kezdtem. Emőke szó nélkül megértett engem, és azt tanácsolta a többieknek, hogy hagyjanak békén – nem kell lebeszélniük engem a sírásról. Hálás voltam neki, hogy biztosította nekem a teret, amiben megélhettem ezt a félelmet, ezáltal pedig távozhatott.
                </p>
                <p>
                    Felálltam, nagy loccsanás, és onnantól kezdve fokozatosan megszűntem létezni a külvilág számára. Ezúttal is csak benyomásokról tudok beszámolni:
                </p>
                <p>
                    Kötéltáncolok. Minden idegszálammal koncentrálok, sőt maga vagyok a koncentrált figyelem-energia. Uralom mindazt az Erőt, ami az első szülésemnél még magával sodort, és maga alá temetett.
                </p>
                <p>
                    Egy vagyok a fájdalommal, így nem igazán érzékelem. Tiszta kapcsolatom van a bennem élő gyermekkel, minden milliméternyi haladást evilág felé együtt teszünk meg. Egy pillanatra sem szűnik meg a kapcsolatunk.
                </p>
                <p>
                    Tudom, hogy most nyomom a fejét, és érzem, hogy megbillenek azon a bizonyos kötélen. Kis időbe telik, amíg visszanyerem az egyensúlyomat. Közben tudatosul bennem a halál lehetősége, és ezzel a halálfélelem.
                </p>
                <p>
                    A feje kint van. Megkönnyebbülök, tudom, hogy lazíthatok. A többi magától megtörténik.
                </p>
                <p>
                    A pocakomon érzem Héla meleg, nyálkás bőrét. Rámkakál. Tudom, hogy vele olyan lesz a kapcsolatom, ahol minden magától menni fog, és minden magától megoldódik. Szeretem. Mélységesen. Visszavonhatatlanul. Örökre.
                </p>
                <p>
                    <b>Bustyaházai Héla 2010. május 12-én, délelőtt 10 óra 58 perckor megszületett, és egy igazi SZERETET- gombóc. Semmi más.</b>
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
