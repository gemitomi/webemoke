import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth16Pic1 from "../../../image/szulestort/szules_story_16_hero_kulonleges_ajandek.png";
import Birth16Pic2 from "../../../image/szulestort/szules_story_16_kulonleges_ajandek.png";

export default function BirthStory16() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
          <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth16Pic1} alt="Kulonleges ajandek"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Különleges ajándék</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. május 27.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth16Pic2} alt="Kulonleges ajandek"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Már az különleges érzésekkel töltött el, amikor a terhességi teszt megmutatta egy kis élet megjelenését.
                        </p>
                        <p>
                            Napokig furcsa mámorban jártam be dolgozni, és megfogalmazódott bennem, hogy most már semmi sem lesz olyan, mint eddig volt, és tele várakozással tekintettem a jövő elé. Izgalmas volt, hogy én már tudom, amit még másnak nem mondhatok el, mert a három hónapot azért megvártuk a kis jövevény érkezésének hírével.
                        </p>   
                            
                    </div>
                </div>

                <p>
                    A várandósság nagyon szépen telt, igazán nem panaszkodhatom, azon kívül, hogy nagyon zavartak bizonyos illatok (pl kávé, paprika, hagyma) és néhány ételt nem tudtam megenni, más gondom nem volt. A vége felé egyre nehezebb pocakomat is ügyesen vittem magam előtt, és különösen jót tett a kismamajóga. Sokáig nem tudtuk, kisfiú, vagy kislány lakik a pocakomban, azt meg főleg nem tudtuk, mi is lesz majd a neve. Azt azonban hamar megtapasztaltam, hogy nagyon nyugodt baba növekszik odabent, és igazán kíméletes hozzám. Jól érzi magát, és nem rugdosott meg nagyon, de mindig jelezte szépen, hogy ott van, és egyre több helyet foglal el. Pontosan tudom, mikor fordult meg fejjel lefelé, igazán nagy mozgásban volt aznap éjjel. Gondolatban mindig beszélgettem vele, együtt készültünk a szülésre.
                </p>
                <p>
                    Ahogy telt az idő, a kezdeti bizonytalanság után szépen kialakult bennem, hogyan, hol és kikkel együtt szeretnék szülni. Sikerült jó orvost, és kórházat választanom, és szerencsésen alakult a szülésznővel való kapcsolatom is. Természetesen a párom jelenlétére számíthattam, már réges-rég megbeszéltük, hogy mindenképp velem lesz a szülésnél. Emellett tudtam azt is, szükségem lesz még valakire, aki mellettem lesz a rideg kórházi környezetben, és ez a személy Emőke volt. Már az első találkozásunknál tudtam, hogy a legjobb kezekben leszek/ leszünk, és ahogy közeledett a szülés ideje, és gyakrabban beszélgettünk, egyre közelebb éreztem magamhoz.
                </p>
                <p>
                    Közben az egyik ultrahangon kiderült, hogy kislányunk lesz, már csak nevet kellett választani neki. Nem volt könnyű közös nevezőre hozni az elképzeléseinket, végül találtunk egyetlen nevet, ami igazán jó választásnak bizonyult: Bernadett, azaz Bernike. Így most már megszólíthattam a „beszélgetéseink” során.
                </p>
                <p>
                    Sokszor elképzeltem, milyen lehet neki odabent, és miután a szülésfelkészítő tanfolyamon hallottak alapján, és az Emőkével való beszélgetések során összeállt bennem a kép, hogyan is zajlik le egy szülés, ha a természet rendje szerint történik, és milyen komplikációkra, beavatkozásokra lehet számítani, végiggondoltam, hogyan is szeretnék szülni. A meditációim során ezt többször is „lejátszottam” magamban, így készültem rá lelkileg.
                </p>
                <p>
                    Bernike nem siette el a világra érkezését, a kiírt nap is úgy telt el, mint az előtte levő néhány nap. Már jelentkeztek néha méhösszehúzódások, de nagyon ritkán és teljesen rendszertelenül. Ettől a naptól kezdve a párom is itthon volt velem, ha menni kell, egyből tudjunk indulni. Egy teljes hét telt el a várakozással.
                </p>
                <p>
                    A kiírt nap után újra mozgékonyabb lettem, tudtam, most már bármikor jöhet a kis leányzó. Közben egyre szebb napsütéses idők jöttek, amennyire bírtam, sétálgattam a nagy pocakommal. Csütörtök estére már nagyon kényelmetlenné vált minden, sehogy sem volt jó ülni, feküdni, állni. A szoptatós fotelben próbáltam kényelembe helyezni magam, és nagy nehezen még egy filmet is végignéztem a párommal, ez legalább egy kicsit elterelte a figyelmemet. Éjjel alig aludtam, egyre többször jöttek a méhösszehúzódások.
                </p>
                <p>
                    Hajnal kettő körül már azt vártam, mikor lesz reggel, hogy telefonáljak Emőkének. Éjjel mégsem akartam felébreszteni, éreztem, hogy még van időnk, de már jó lett volna beszélni vele. Ötkor kimentem lezuhanyozni, hajat mosni, és utána tudtam aludni egy picit.
                </p>
                <p>
                    Reggel ébredés után első dolgom volt Emőkét felhívni, elmondtam neki, hogy érzem magam, és abban maradtunk, ráérünk még itthon pihengetni, hagyjuk szépen készülődni Bernikét. Egyre gyakrabban jöttek a fájások, pihengettem a fotelben, és figyeltem, jó hangulatban, várakozásteljesen. Amikor már elég sűrűn jöttek a fájások, egyszer csak úgy éreztem, most már ideje indulni. Ráadásul péntek koradélután volt, arra is figyelni kellett, hogy lehetőleg a nagy forgalom előtt érjünk be a kórházba. Emőkének és a szülésznőnek, Anikónak is szóltunk, hogy most indulunk. Abban maradtunk, hogy a kórház udvarán találkozunk. Az út jól telt, nagyon szép meleg tavaszi nap volt, besütött a nap a kocsi ablakán a pocakomra. Alig vártam, hogy odaérjünk, pedig alig fél óra volt csak az út.
                </p>
                <p>
                    Emőke és Anikó már vártak bennünket, felmentünk a szülészetre, és nagy szerencsémre épp teljes nyugalom volt, megkaphattam az alternatív szobát.
                </p>
                <p>
                    Lepakoltuk a csomagjainkat, nekivetkőztem hálóingre. Eleinte nem igazán találtam a helyemet, szétnéztem, mik is vesznek körül. Fura érzés volt, nem is igazán tudtam, mi is vár rám, csak azt éreztem, ez valami különös esemény lesz. Szépen „berendezkedtünk”, Emőke kendőkkel tette hangulatossá a szobát, én a sajátomat a pocakomra kötöttem, gyertyát gyújtott a párom, és egyik kedvenc lemezemet hallgattuk. <br/> Miután ráhangolódtam a környezetre, egyre erősebben jöttek a fájások. A bordásfal lett a kedvenc helyem, ahol kapaszkodva, lógva álltam, miközben Andris a derekamat masszírozta, Emőkétől pedig muskotályzsályás pakolást kaptam. Vizet engedtek a kádba, de oda nem igazán vágytam. Néha tettem néhány lépést a szobában, de mindig a bordásfalnál kötöttem ki, ha jöttek a fájások. Egyszer csak elkezdett a magzatvíz folyni, majd ömleni. Mindeközben a szülésznő néha bejött, megnézett, hogy vagyunk. Szólt, hogy szeretne újra megvizsgálni, hol tart a tágulás. 
                </p>
                <p>
                    Ekkor a franciaágyra feküdtem, és ott is maradtam…Addigra már eléggé elfáradtam, jól esett fekve maradni. A méhszáj már eltűnt, egyre erősödtek a fájások. Zsibbadtak az ujjaim, kapaszkodtam Andrisba, a zenét valahonnan távolról még érzékeltem, Emőke mindeközben szinte észrevétlenül volt a segítségemre. Én csak arra bírtam igazán figyelni, hogy jönnek a fájások, és ez azt jelenti, hamarosan itt lesz a kislányunk! Minden erőmet összeszedve azon voltam, hogy minél inkább segítsem őt a kibújásban.
                </p>
                <p>
                    Nagyon ügyesen igyekezett kifelé, néhány tolófájás után már kinn is volt legnagyobb örömömre! Alig vártam, hogy a karjaimba vehessem! Amikor már látszott a fejecskéje, még volt lelkierőm megkérdezni, van-e haja, majd amikor teljesen kibújt megkérdeztem, tényleg kislány-e. Abban biztos voltam, hogy teljesen egészséges!
                </p>
                <p>
                    Semmihez sem hasonlítható boldogság volt ölbe venni őt, és végre meglátni aranyos kis arcocskáját!
                </p>
                <p>
                    Bernike azóta is nagyon szép kislány és nagyon jó kisbaba, jól szopizik, jól is alszik, szépen fejlődik. Igazán különleges ajándék számomra az első szülésem, és ő maga!
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
