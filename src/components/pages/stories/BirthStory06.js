import React , { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth06Pic1 from "../../../image/szulestort/szules_story_06_hero_anyatanc.jpg";
import Birth06Pic2 from "../../../image/szulestort/szules_story_06_anyatanc.png";

export default function BirthStory06() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
           <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth06Pic1} alt="Anyatanc"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Anyatánc</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2016. október 14.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                       <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth06Pic2} alt="Anyatanc"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Ott álltál és olyan közel volt a szemed az enyémhez, hogy semmi mást nem láttam. A barna szemeid mélysége megnyugtatott. Nem hallottam semmi mást, csak a halk szavaidat. Se az orvost, se az ápolót, se senkit. Csak téged hallottalak, amint azt kérdezed tőlem, készen állok-e, hogy ezt a kis embert beengedjem a világba.
                        </p>
                        <p>
                            Fájt, amit kérdeztél és tudtad, hogy fáj, mert annyira sokáig féltem az elengedéstől és most itt vagyunk a szülőszobában és most is ezzel dolgozunk. Belebújtam a tekintetedbe, az ölelésedbe és magamban hangtalanul azt mondtam, gyere kisfiam, gyere. És Martin leküzdötte az utolsó akadályokat, hogy megérkezzen közénk.
                        </p>
                    </div>
                </div>

                <p>
                    Amikor azt kéred, írjak Martin születéséről, az én anyává születésemről, Gergővel a családdá születésünkről, akkor a történetem a saját születésemmel kezdődik. Azzal, hogy édesanyám és én is majdnem ott maradtunk a szülőszobában, hogy elválasztottak minket és hosszú órákig, több mint egy napig nem érezhettem anyám közelségét, mert ő egy rettenetes császár után tudatlanul feküdt az őrzőben. Minden innen datált egyedülérzetem, nehéz elengedésem benne volt a csomagomban, amivel 7 hónapos várandósan egy két literes ásványvízzel a kezemben letottyantam nálad a fotelben. Ott ültél, hideg volt, csak a szemed barnája melegített. Ott és akkor egy szuszra elmondtam neked, ami addig sosem állt össze bennem egy történetté. Közben voltak percek, amikor hangtalanul sírtam. Te pedig velem voltál. Jelen lettél egy pillanat alatt az életemben, az életünkben.
                </p>

                <p>
                    Sokat találkoztunk. Beszélgetéseinket mindig az vezette, ami éppen a leginkább foglalkoztatott engem. Te magad alá húztad a lábad, én elnyúltam a kanapén vagy feküdtem a földön, és néha bele is bóbiskoltam az együttlétekbe. Egy alkalommal Király Kati (a világ egyik legcsodálatosabb szülésznője) is csatlakozott hozzánk, emlékszem, kamillateát kortyoltam és a kamilla gőzénél azt hittem, hogy csak egy pillanatra, de lehet, hogy negyedórára is becsuktam a szemem és hallgattalak benneteket. Olyan jó volt így együtt. Kati mindig azt mondta, én úgy várom a szülésedet, és szépen lassan már elképzelhetetlen lett, hogy bármelyikőtök is távol legyen, amikor Martin megérkezik.
                </p>

                <p>
                    Egy februári napon Gergő is csatlakozott a beszélgetésünkhöz, ő, a sokszor szótlan megfigyelő rengeteget kérdezett tőled. Amikor elmentél, beírta a telefonszámodat a mobiljába, én innen tudtam, hogy számít rád. Hogy hívni fog, amikor kezdődik a tánc.
                </p>

                <p>
                    Vártam is a február végét és nem is. Szerettem a várandósságot, szerettem ennyire jól lenni a fiunkkal, szerettem ezt a folyamatosan befelé forduló tudatállapotot, ezt a kis fészekrakást, ezt az összhangot, hogy egyre inkább érteni kezdtem édesanyámban az anyát, és a szűk család szépen ringatott a szeretetben. Szerettem a délutáni beszélgetéseket az anyósommal, a hólapátolást az apósommal, amikor a 70 éves Papa gyorsabban tolta el a havat előlem, mint ahogyan én a seprűvel mögötte tudtam volna haladni. Szerettem velük menni a vizsgálatokra, a közelségükben minden olyan biztonságos volt, örültem, amikor együtt hallgattuk Martin szívhangját és amikor együtt robogtunk hazafelé, a lejtőn fölfelé anyósomba kapaszkodva lélegeztem be a hideg februári levegőt. Soha nem voltam ilyen boldog.
                </p>
                <p>
                    A hivatalos DÁTUM előtti hétvégén dúlaképzést tartottál. Péntek délutántól vasárnap délutánig. Kati úgy érezte, hogy előbb kell majd mennünk, én sem hittem, hogy február 28-ig eltart a várandósság. Csakhogy a dúlaképzés nem olyan dolog, amit egy ponton félbe lehet szakítani, ha egy mamácskának – ahogyan te mondod mindig – mennie kell. Éppen ezért néhány héttel korábban dúlatársaddal, Lénárd Orsival is mély beszélgetésbe indultunk, hogy ha úgy alakul, hogy éppen ezen a hétvégén születne Martin, akkor se legyek magamra utalva. Sem Kati, sem te, sem pedig én nem tudtuk elképzelni, hogy nélkületek érkezzen a kisfiunk. Ezért mi hárman jól megbeszéltük, hogy péntektől vasárnapig nyugalom van, utána jöhet Martin. Te el is mondtad Martinnak, én is beszéltem hozzá, és megígértem neki, hogy mire eljő a vasárnap este, én készen állok az elengedésre, a várandósság végére, és onnantól az ő döntése lesz, hogy mikor érkezik.
                </p>
                <p>
                    Abban a 2 napban mintha megállt volna az idő. Abban a 2 napban megtörtént minden, amit addig halogattam magamban. Vasárnap késő délután érkezett tőled egy üzenet és egy hívás, hogy készen állsz, jöhet Martin. Kati is lázban égett. Úgy aludtam el, mint még soha, életemben először magabiztosan és szeretettel vártam egy ismeretlen élményt.
                </p>
                <p>
                    Hétfőn reggel elkezdődött <i>a tánc.</i> Nem tudtam, hogy bepisiltem-e vagy ez már a magzatvíz nyitánya, felhívtalak, hallottam a saját hangom gombócosodni. Gergő kipattant a konyhába, mert azt mondtad neki, hogy ha úgy gondolja, készülődik valami, akkor etessen és itasson, mert ami az enyém az már a miénk, az mind energiával segít a következő órákban. Hatalmas szendviccsel ültem az ágyban és megbeszéltük, hogy addig nem teszek semmi mást, amíg azt meg nem ettem. Mosolyogva haraptam a bagettbe. Anyukámat már úgy hívtam, hogy magam sem tudtam, értelmesen beszélek-e, csak éreztem, hogy egy apró örvény magába húz. Ezután már csak a fátyolos képekre emlékszem, ahogy Gergő járkál a nappaliban, telefonál és egészen közel hajolva hozzám mondja, Emőke jön.
                </p>
                <p>
                    Betoppantál. Megéreztem az illatod, megláttam a barna szemed és tudtam, megérkeztem. Beleolvadtam a mondataidba és úgy éreztem, akkor is kommunikálunk, amikor nem tudok beszélni. Itt elengedtem a kontrollt, nem számított az idő, csak hogy vezess engem az úton, fogd a kezem. Emlékszem, a lépcsőn lejutni szinte elképzelhetetlen táv volt, az autóban mindig akkor mondtad Gergőnek, hogy álljon meg egy kicsit, amikor a legnehezebb volt nekem a pillanat. A kórház elé érve éppen kikászálódtam az ülésről, amikor megpillantottam a felénk szaladó Katit, a nagy mosolyával és szeretetével. Belétek kapaszkodtam és felmentünk a lépcsőn.
                </p>
                <p>
                    Emlékszel, mennyi gát volt bennem a hónapok alatt és ott bent a mi kis hármas szövetségünkben minden gát elszállt. Egyetlen pillanat alatt. A félelem a fájdalomtól, a meztelenségtől, a kiszolgáltatottságtól, az egyedülléttől meg sem fordult a fejemben. Boldogan szabadultam meg mindentől. Lelkileg, testileg. Adtam bele magam az aaaaa hangba, ringatóztam az ölelésetekben állva, hagytam az örvénylésnek, hogy irányítsa a testem a zuhany alatt a labdán. Órák teltek el és én észre sem vettem.
                </p>
                <p>
                    Aztán nyílt az ajtó és belépett a doktornő. Nem emlékszem, mit mondott, nem hallottam a hangját, csak a kétségbe esett arcát láttam és a mi csodálatos táncunk megállt. Beledermedtünk a pillanatba, mozdulatlan lett minden. Martin nem jött tovább, kicsi fejét többször is megakasztotta a szülőcsatornában. S csak akkor tudtunk folytatni a táncot, amikor újból magunkra maradtunk. Mi hárman Martinnal. Forgattatok és vezettetek, ölelésben tartottatok és kísértetek. De mind többen és mind nagyobb hirtelenséggel jöttek be a szobába és egyszer csak meghallottam a mondatot, hogy ha fél órán belül nem születik meg, akkor nem tudunk tovább várni. Rád néztem. Aztán Katira. És láttam az arcotokon a saját tükörképemet, hogy tényleg meg akarnak engem császározni. Az nem lehet. Olyan nincs. Fogalmam sincs mit mondtam, de tudom, hogy ellentmondtam valamilyen formában. És hirtelen minden olyan nehéz lett. Nehéz lettem én. Az addigi táncból lett egy csata, a születés két oldalán. És toltam és nyomtak és húztak és vontak. És feszültség keletkezett. És el akartam szaladni veletek és fel akartam állni, hogy állva folytathassam, de nem lehetett. És éreztem, hogy Martin megtorpant, az a nyomás a csigolyámban ma is úgy hasít az emlékeimben. Döcög. Nem fér ki. Elakadt.  Csak távolról hallottam és kezdtem fáradni. Ránéztem az órára, délután fél 5 volt. Azt hiszem, már két órája toltam.
                </p>
                <p>
                    Rád néztem, nem csak tartottál és szorítottál, de folyamatosan beszéltél hozzám. Mondani akartam neked valamit, de több tolás is eltelt, míg képes voltam megszólalni. Nincs erőm. Mélyet lélegeztél és hosszan és határozottan azt mondtad, gyere, ez a kisfiú már a miénk. Elengedted a kezem, oda mentél Kati és az orvos közé és mindenkinél erősebbnek tűnt a hangod, és csak azt hallottam, ahogy hívsz, ahogy hívod Martint, ahogy Kati is fel-felkiált és kórusban szólítotok és elkezdődött újra a tánc. Ti vezettetek. Ti kísértetek. Ti öleltetek amikor anyává születtem.
                </p>
                <p>
                    Amikor Martint megláttam, te ott voltál velem. Olyan szoros közelségben, olyan végtelen szeretetben. Én ott feküdtem és csak megköszönni tudtam és el nem engedtelek. Martin illata, a kis teste melege, azok az első apró mozdulatai, az órák óta tartó küzdelme ellenére kisimult kis arca. Kati megkönnyebbült mosolya.
                </p>
                <p>
                    Amíg engem összevarrtak, Martin Gergővel volt. Kati finoman megmosdatott és átöltöztetett, én pedig a ti karjaitok tartásában felálltam. És egyedül kimentem a mosdóba. Belenéztem a tükörbe és megláttam a most született anyát az arcomon.
                </p>
                <p>
                    Akkor szaladtak ki az első könnyeim, amikor Gergő belépett a szobába, a karjába zárt kisfiunkkal. Összeölelkeztünk. És hiányzott volna, ha nem vagy ott velünk. És teljesült a vágyam, az aranyórában a nagyszülők – akik mindvégig kint várakoztak, és akik tőled és Katitól tájékozódtak mindenről – is közel kerülhettek Martinhoz.
                </p>
                <p>
                    Béke végtelen, mondtad.
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
