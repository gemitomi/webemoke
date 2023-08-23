import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth08Pic1 from "../../../image/szulestort/szules_story_08_hero_hideg_ho_melegseg.png";
import Birth08Pic2 from "../../../image/szulestort/szules_story_08_hideg_ho_melegseg.jpg";
import Birth08Pic3 from "../../../image/szulestort/szules_story_08_a_hideg_ho_melegseg.png";

export default function BirthStory08() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
          <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth08Pic1} alt="Hideg, ho, melegseg"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Hideg, hó, megegség</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. augusztus 14.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                       <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth08Pic3} alt="Hideg, ho, melegseg"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Noé ma fél éves. Ragyogó napsütés, forró nyári napok. Pár napja almát kanalaz lelkesen. Megtanult forogni, kúszni, mászni, felülni és remegő lábakkal állásba húzza magát. Érzéseit arcával, hangjával kifejezi, felfigyel a nevére és ért néhány szóból és gesztusukból. Hihetetlen nagy lépéseket tett meg az elmúlt hat hónapban, amit én most csak elröppenni éreztem.
                        </p>
                        <p>
                            Hat hónappal ezelőtt nagy hó volt és hidegrekord körüli hőmérséklet Budapesten.
                        </p>
                    </div>
                </div>

                <p>
                    A szomszéd néni hétfőn betelefonált a szentendrei városi szolgáltatónak, hogy jöjjenek föl a hegyre és tegyék járhatóvá az utat, mert “mindennapos kismamánk van”. Én, bár értékeltem a figyelmességét, csak mosolyogtam ezen. Vasárnapra voltam kiírva. ÉS valahogy belül úgy éreztem,  hogy úgyis együtt megyünk majd és nem lesz gond. Hétfőn még elmentem jógázni, mondván, hogy “jövő hétfő” már nem valószínű, hogy ugyanígy lesz.
                </p>
                <p>
                    Ez a jóga egy áldás volt, ezt közbe kell itt szúrnom. Nem volt sem különösebben nehéz, sem terhelt a várandósság kilenc hónapja, mégis, a három év utáni munkába való visszatérés, a hároméves oviba szoktatása, a szokatlanul hideg és hosszú tél azért eléggé kivette az energiámat. Az utolsó hónapra kértem csak szabadságot, és nem éreztem magam nagyon rossz formában, annak ellenére sem, hogy jóval több plusz volt rajtam már a végén, mint első várandósságom alatt. Először 14, most 20 kilóval lettem a normálisnál több a végére. (Ezt azért írom, hogy egyszersmind rögzítsem és többet ne rágódjak ezen. Ugyanúgy hamar lement a plusz súly, mint első alkalommal.) És jobban éreztem a vizesedést testem minden pontján. Ezzel együtt nem vettem észre, hogy mennyire merev vagyok, mert a hegylakó körülményeink, a tüzifa behordása, fiam időnkénti cipelése mozgásban tartott. Csak éjszaka éreztem, hogy kényelmetlen a fekvés, és egyikről a másik oldalra fordulni hihetetlen procedúra. Az utolsó hónapban aztán megadatott, hogy elmenjek Anitához, aki a jógával egészen átmozgatott. Már az első alkalom végén átütő érzés volt, hogy a gerincem különböző szakaszokon képes megmozdulni. A második alkalom utántól vígan forogtam a matracon és kényelmesebben aludtam. Szinte csodaként éltem meg, hogy a várandósság végére még ennyire fel tud szabadulni a testem. Ez a jóga nemcsak testileg, de lelkileg is nagyon hozzásegített ahhoz, hogy a szülés jól menjen. És lelkileg is nagyon kellett, mert nem kis teher volt a három és fél éves fiam testvérféltékenységével való küzdelem, s a lelkiismeret-furdalás, hogy képtelen voltam gondolatban a babával foglalkozni. Minden gondolatomat a fiammal kapcsolatos ügyek kötötték le. Talán a harmadik jógaalkalmunkon volt, már a végén, meditáció közben, hogy a babám megszólított. Talán csak annyit mondott, hogy “anya, itt vagyok!”, de megszólítását végre meghallottam, egészen közeli kapcsolatba kerültem vele. Felszabadító érzés volt, hogy könnyekben törtem ki.
                </p>
                <p>
                    A várakozás utolsó hetében voltunk, és úgy döntöttem, hogy a hóviszonyok meg a nehézkességem miatt keddtől már nem viszem le Teót az óvodába. (Már-már arra is gondoltam, hogy mi lenne, ha egy újabb váratlan havazás lehetetlenné tenné, hogy bejussunk szülni a Tétényi úti kórházba. Egy éjjel gyorsan végiggondoltam, hogy lehetséges lenne-e otthon maradni. És talán még örültem is volna, ha így hozza az élet…)
                </p>
                <p>
                    Kedd este jósló fájások indultak, ami szerencsésen arra késztetett, hogy végre tényleg menetkész legyen a kórházi csomag, s így Jint is egy kicsit a készületre hangoltam. Kedden ráadásul Teóval is nagyon szép volt a lefekvés, imádkoztunk, vártuk a babát elalvás előtt. A fájások elmúltak, jött a szerda. Ragyogó napos idő volt, több hó a hét eleje óta nem esett, így a hétfői hótakarítás áldásos munkájának eredményeképpen teljesen tiszta volt az aszfalt burkolat. (Az értünk aggódó rokonokat, ismerősöket, szomszédokat az úthelyzet tartotta leginkább lázban, s volt az utolsó hétre egy ügyeleti rendszer is kidolgozva, hogy ki jön értünk, ha napközben kell menni.) Teóval kimentünk egy jó nagyot sétálni. Szokás szerint kihívások elé akart állítani, hócsatázni, versenyt futni akart, amire persze teljesen alkalmatlan voltam már. De azért vidám dolog volt a hóban, szikrázó napsütésben sétálgatni, és Teó nagyokat kacagva szaladgált föl-le. Nyugodtan telt a nap, s este még üzentem Balázséknak, hogy nyugodtan aludjanak, ma éjjel sem fogunk váratlanul betoppanni Teóval. 10 óra körül feküdtem le és mélyen aludtam 1-ig, amikor már erőteljes fájásra ébredtem. Figyeltem az órát és vártam, hogy jön-e következő. Jött, nem egész 10 perc múlva. Meglepődtem, de még nem voltam egészen bizonyos. El akartam menni zuhanyozni, hogy a “vízrpóbával” győződjek meg arról, hogy igazi vajúdásról van-e szó. De mire valamennyire összekaptam volna magam és odáig jutottam volna, már nem nagyon kellett meggyőzés. Tudni lehetett, hogy ez az. Keltettem Jint, üzentem Emőkének. Azért még kicsit húztam az időt, hogy lássam, halad-e a dolog, nem szerettem volna hiába megtenni a nagy utat a kórházig. Viszont lekésni sem lett volna jó — úgyhogy aztán elég célratörően szedelőzködtünk. Még le kellett borotválni — ezt most is Jintől kértem. Közben két-három erős fájás is volt, ami meggyőzött arról, hogy jobb lesz mielőbb indulni.
                </p>
                <p>
                    Teót gond nélkül öltöztettük és pakoltuk be az autóba. Mikor megébredt, az első kérdése az volt: “megszületett a kisbaba?” Mondtam, még nem, de most fog. Gondoltam, rögtön visszaalszik az autóban, de nem így volt. Ahogy a hegyről lehajtottunk, egy nyuszit ugrasztottunk meg, aki az autó előtt kocogott egy darabig. Ezen nagyon felderültünk — emlékszem, hogy Teó születése előtt vízi cickányt láttunk a Duna-parton, mikor a vajúdás kezdődött. Örültem, hogy a kisállatok így kísérik  babavárásunkat. Aztán Teó még később sem aludt el, félálomban nézte a budai rakpart elsuhanó lámpafényeit. Hideg, tiszta, csikorgós éjszaka volt. A Margit-hídnál rendőrautók álltak az egyébként üres rakparton és ahogy lassítva elmentünk mellettük, láttunk, hogy hajléktalant szedtek össze a bokorból. Összeszorult a szívem életre-halálra gondolva. Fényes, erős emlékképként maradtak meg ezek a mozzanatok. És persze az erőfeszítés, hogy sűrűn jövő, erős fájások közben ne hangoskodjak, ne ijesszem Teót. Minden zökkenés rosszul esett, görcsösen szorongattam a telefont, mérve a fájások közti időt és már-már azon aggódtam, nincs-e mégis túl késő, nem fogunk-e itt mindjárt megszülni? Teót gond nélkül eljuttattuk Balázsékhoz, ahol — mint utóbb kiderült — nyugodtan aludt tovább reggelig.
                </p>
                <p>
                    Három körül értünk a kórházba, ott találkoztunk Emőkével. Jó hír volt, hogy fogadott orvosunk épp ügyeletes és bent is van a kórházban. Viszont a nővér lagymatag kommunikációja miatt valahogy csak nem érkezett az orvos, és a nővér még a vizsgálattal is várt, míg megérkezik. Ott vajúdgattam egyedül, Jin és Emőke nélkül a kényelmetlen, kellemetlen vizsgáló szobában még majd’ egy órát, mikor már az az érzésem volt, hogy mindjárt szülni kéne. Nem értettem, miért nem ereszt már a nővér a szülőszobára. Aztán végre megérkezett az orvos és megállapította, hogy szinte teljesen kitágultam. Ennek ellenére a nővér a protokollra hivatkozva még rákötött a szívhang-vizsgálóra, ahol további 3-4 fájást kellett kihúzni egy kellemetlen széken, mozgást visszatartva ücsörögni. Egy örökkévalóságnak tűnt.
                </p>
                <p>
                    Viszont kárpótolt a kellemetlenségekért, hogy szerencsénk volt, és üres volt az alternatív szülőszoba. Ahol kádfürő, kellemesen lapos és széles ágy várt, ide jöhettünk be végre együtt Jinnel és Emőkével. A meleg kádfürdőre szavaztam, gondoltam, ez nekem jár ennyi viszontagság után — s kellemesen el is lazultam benne. Emőke masszírozott, a fájásokat enyhébben éltem meg. Így elcsücsülgettem a langyos vízben, örülve, hogy nem fáj annyira, de valahol legbelül mégis azt éreztem, hogy így nem jutunk ötről a hatra és tenni kéne valamit, változtatni. Talán ez a görcsösség, ez az akarás, hogy haladni akarok, ez az, ami nem teszi lehetővé a teljes elengedést. Most így utólag látom: nem hittem el, hogy akkor is megszületik a baba, hogyha én ott kellemesen elcsücsülgetve várom ki a fájásokat. Úgy éreztem, nekem ezért dolgozni kell. Úgyhogy kijöttem a kádból, már csak azért is, mert egyéb igényeim a mellékhelyiségbe szólítottak. Ami azért jó volt, mert már a vajúdás kezdete óta feszített, és valahogy akadályozott.
                </p>
                <p>
                    Ezután már felszabadultabban engedtem át magam a tolófájásoknak, ami azért megint nem hozott olyan átütően gyors eredményt, mint ahogy sok második gyermekes anyuka meséli, hogy szinte viharosan kipattan a második gyermek. Megint benne voltam abban, hogy küzdök. Állva, ülve, térdelve. A lagymatag nővér egyre azt tudakolta, hogy akkor most hol is akarok szülni. Értettem én, hogy a maga részéről azt akarta tudni, hogy hova készítse a kifogó felszerelést, dehát mit tudtam én, hogy hol akarok. Sodródtam a fájdalommal. És ami még volt: féltem. Egyre jobban féltem a következő fájástól. Fájások szüneteiben egyre jobban elkeseredtem. Még a magzatburok is áll. Meddig kell még itt tologatni?! Félve néztem a következő fájás elé. A tudatommal próbáltam ellenállni ennek a félelemnek, s ehelyett csak a görcsös akaratot tudtam előtérbe nyomni, hogy márpedig szülünk! De a tudatom nem sokáig tudott ellenállni, s fájások szünetében már sírtam. Hogy nem bírom, s meddig kell még ezt szenvedni? És itt jön megint egy éles emlékkép. Az orvos szeme pillantása, egészen közelről, szemtől-szemben. Szinte hipnotizált, miközben mondta: “meg tudja csinálni!”. Emőkének a fájdalmat a jelenlétével enyhítő segítsége nélkülözhetetlen volt ezekben a pillanatokban és fizikailag Jin is ott állt mellettem. A tudatom mélyére azonban ez a hipnotikus szempár tudott hatni.
                </p>
                <p>
                    Egy pukkanással megrepedt a burok és fröccsent a sok víz. Öröm az arcokon, öröm bennem, hogy na, akkor tényleg közel lehetünk már. És 6 óra 40 perckor kicuppant a várva-várt csomag és felhangzott a csecsemősírás! (Utóbb kiderült, Jin rögzítette a hangját.) Három és fél órát kellett érte még a kórházban dolgozni — ez nem hosszú idő, mégis hosszúnak tűnt azokhoz az elbeszélésekhez képest, amelyek a kórházba épp az utolsó pillanatokban megérkező többedik gyermekes kismamákról szólnak.
                </p>
                <p>
                    A szülőszékből feltápászkodva a babával az ágyon kényelmesen el tudtunk helyezkedni, s végre magamhoz szoríthattam a bebugyolált, pöttöm Noét. Melegsége, nyálkás és esetlen béka-testének érzése a testemen felejthetetlen boldogság-élmény.
                </p>
                <p>
                    Hátra volt még a második felvonás: a lepény nem akart megszületni. Az orvos türelmesen várt, én meg Noéval annyira beteltem, hogy nem is nagyon érdekelt más dolog. A köldökzsinórt Jin elvágta, de mivel a lepény még nem jött ki, a végét ott kellett szorongatni a lábaim között egy ollóval összeszorítva. Hosszabb idő eltelt, s az orvos kellemetlen helyzet elé állított: meg kéne valahogy szülni azt a lepényt, máskülönben a műtőben kötünk ki, altatásban, hogy kiszedjék belőlem. Na, ez koppant keményen a szívemen. Az altatással rendesen rám ijesztett. Szerencsére voltak még mentő ötletek, amivel próbálkozni lehetett. Emőkétől kaptam csodabogyókat, amitől gyors egymásutánban még két kisebb fájás jött. Aztán tolószékbe tettek, hogy átvigyenek a vizsgálóba — ez azzal járt, hogy feltápászkodjak, mozogjak. Mire átértünk és sikerült a kellemetlenül magas vizsgálóágyon elhelyezkedni, végre a lepény is kijött. Épen, egyben. Mindenki fellélegzett. Álmomban sem gondoltam volna, hogy egy szülés után még ilyen probléma is jöhet. Aztán hátra volt még a varrás, kisebb repedések nélkül most sem úsztam meg. De innen már csak rövid idő választott el attól, hogy újra Noéval lehessek. A komplikáció miatt plusz pihenőidőt kaptunk a szülőszobán: visszamehettem és együtt lehettünk még hármasban, Édesapával. De jó volt az a pihenés!
                </p>
                <p>
                    Kora reggelre kaptam meg a helyem a csecsemős osztályon, s persze most is előzékenyen elvitték megvizsgálni Noét, s ott tartották, hogy csak pihenjek. Mondanom sem kell, nem tudtam aludni.
                </p>
                <p>
                    Az jó volt, hogy megtisztálkodhattam, elhelyezkedhettem. Lepihentem — már amennyire a keskeny, magas ágyakon gátsebbel, sajgó testtel pihenni lehet –, vártam a reggelit, megettem és az euforikus érzésektől fűtve még azon melegében körbe tudtam telefonálni a közeli hozzátartozókat. De aztán nem tudtam már magammal mit kezdeni, hiányzott Noé. Érte mentem, nyugodtan alvó babát kaptam. Gondoltam, sokáig nem is fogom hallani a hangját, de rám cáfolt, mert már a déli órákban felébredt, hangicsált. Alig vártam már, hogy magamhoz ölelhessem. S ahogy ott tartottam, egyszerűen éreztem, hogy ez a baba nem más, mint egy élő kis boldogság-kapszula. Már ekkor próbálkozott a szopizással, meglepően hamar ráérzett a dologra, és aztán az első éjszaka már evett is. A tej nyilván ennek köszönhetően hamar belövellt, s így elkerülve a besárgulást, a második kórházi nap után már mehettünk haza, ráadásul úgy, hogy jóformán súlyt sem vesztett kicsi Noé. Egy kis szopógép lett rövid idő alatt — olyan gyorsan, hatékonyan evett, hogy csak ámultam-bámultam. Ezt a jó szokását később is megtartotta 🙂
                </p>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth08Pic2} alt="Hideg, ho, melegseg"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Hálás vagyok ezért a második szép élményért, s azért, hogy újra mellettem lehettek, immár összekovácsolódott kis csapatban azok, akik e számomra kemény testi-lelki munkában oly sokat tudtak segíteni: Jin, Emőke és Bálint doktor. És újra átélhettük a kórházban a majdnem otthon szülés élményét, ami, azt gondolom, az adott lehetőségek között szintén nagy ajándék!
                        </p>
                        
                    </div>
                </div>
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
