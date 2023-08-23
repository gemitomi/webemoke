import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth17Pic1 from "../../../image/szulestort/szules-story-17-hero-szuletesnapi-level.png";
import Birth17Pic2 from "../../../image/szulestort/szules-story-17-szuletesnapi-level.jpg";

export default function BirthStory17() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth17Pic1} alt="szuletesnapi-level"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Születésnapi levél</h2>
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
                        <img src={Birth17Pic2} alt="szuletesnapi-level"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Drága Emőke!</b>
                        </p>

                        <p>
                            Ma 2009. január 16-a van. Máté egy éves. Rengeteg dolog történt velünk ezalatt az egy év alatt, ismered a történetünket.
                            <br/>Most újra szeretném megköszönni Neked azt a csodálatos napot, amikor Ő világra jött.
                        </p>
                        <p>
                            Hol is kezdjem… talán hogy miért és hogyan találtam Rád.
                        </p>
                        
                        

                    </div>
                </div>

                <p>
                    2005. áprilisában megszületett Boróka, az én kis tündérlányom. Négy napig vajúdtam Vele.
                    2 napig 4 perces fájásaim voltak. Mire bekerültem a kórházba, testileg-lelkileg ki voltam merülve. Mégis azt éreztem, most már jó helyen vagyok, nemsokára a karomban tarthatom őt! Olyan nagyon vágytam a szülés élményére! Nagyon készültem rá, de semmi nem úgy történt, ahogy szerettem volna. Sürgősségi császár lett a vége. A legvége, már a tolófájások közepette. Altatásban. Ezután 7 órán át nem kaptam meg a kislányomat. Nagyon csalódott voltam. Haragudtam a világra, az orvosra, a szülésznőre, de leginkább magamra. Mert azt éreztem, hogy ennek nem kellett volna így történnie! Meg tudtam volna szülni Őt!
                    A nőiességem romokban hevert. 
                </p>
                <p>
                    Biztos voltam abban, hogy a második gyermekem születésénél mindent megteszek majd, ami tőlem telik, hogy elkerüljem ezt. Pszichológushoz jártam, hogy a probléma gyökeréig áshassak.
                    <br/>Tudtam arról, hogy létezik a dúlaság, sokat foglalkoztam már a témával addig is. Egyre jobban érlelődött bennem a gondolat, hogy keresnem kéne egy dúlát. Leültem az internet elé és a dúlák honlapján nézegettem az arcképeket. Rengeteg volt, de én csak Téged láttalak. Azonnal olyan volt, mintha mindig ismertelek volna. Elolvastam, amit Magadról írtál, kiderült, hogy azonos a végzettségünk, hasonló a gondolkodásunk. Felhívtalak és nagyon kedves voltál. Azt mondtad, vállalod a kísérésemet.
                    <br/>Az első találkozásunknál végtelen nyugalom töltött el. IGEN, Ő kell nekem, gondoltam. Nagyon közel éreztelek magamhoz.
                    <br/>Telt-múlt az idő. Bármikor hívhattalak, amikor kérdésem, kétségem támadt, vagy csak hallani akartam egy jó szót.
                </p>
                <p>
                    Eljött a 15.-e, a jóslófájásaim erősödni látszottak. Hajnalban Boróka kijött hozzánk a nagy ágyba, de én nem tudtam aludni. Egyedül akartam lenni. Nagyon vártam, hogy ELKEZDŐDJÖN, igazán. Akkor már megint harmadik napja voltak fájásaim, de Te rengeteg erőt adtál és így nem uralkodott el rajtam az a félelem, hogy minden kezdődik elölről, ugyanúgy.
                    <br/>Bementem a kislányom szobájába egy teával és egy mécsessel.
                    <br/>Sms-t küldtem Neked, Te azonnal válaszoltál. Csendben vajúdtam, míg a családom kint aludt. Reggelre már látszott, hogy EZ AZ. Meleg vizet engedtünk a kádba, ott vártam meg, amíg anyukám megérkezett, hogy vigyázzon Boróra. 9-kor elindultunk a kórházba. Te is, mi is.
                </p>
                <p>
                    Nagy szerencsénk volt, az alternatív szoba éppen felszabadult. Mire beköltöztünk, megérkeztél. Kiderült, hogy az orvosom nem lesz bent (teljesen váratlan volt a fordulat), de valahogy egyáltalán nem izgatott a dolog. Csak az volt a fontos, hogy a férjem, Te és a választott szülésznőm ott legyetek.
                </p>
                <p>
                    Nagyon megnyugodtam, amikor megláttalak. Csendben kipakoltál. Én a férjembe kapaszkodtam, ahogy haladt előre a dolog, úgy fordultam egyre inkább magamba. Sokszor éreztem azt, hogy most ne érjen hozzám senki, ne szóljon hozzám senki, de közben hihetetlenül fontos volt, hogy mellettem legyetek. Csak Ti ketten. Szerencsére így is volt, nem zavarták meg az intimitásunkat.
                </p>
                <p>
                    Fájt, nagyon fájt. Kértelek, hogy segíts, de meg volt kötve a kezed: nem esett jól, ha masszíroztál, nem öleltelek meg… pedig azt hittem, így lesz, ezt akarom majd. Homeopátiával és illóolajakkal könnyítetted a küzdelmem. Tőled vártam minden segítséget. A pillantásodba kapaszkodtam. Félúton majdnem feladtam, úgy éreztem, nem megy tovább, elgyengültem… kérdeztelek: biztosan nincs olyan fájdalomcsillapító, ami most jó lehetne nekem? Te szinte észrevehetetlenül, a szemeddel intettél és én megértettem. Csak emlékeztettél arra, amire kértelek: ne hagyd, hogy feladjam! Nagyon köszönöm azt a pillantást.
                    <br/>Amikor már sehogy nem volt jó, semmilyen testhelyzet nem volt kényelmes, vizet engedtél a kádba. Neked eszedbe jutott, hogy ott tudok ellazulni. Te gondolkodtál helyettem. Hálásan ültem be a meleg vízbe és onnantól felgyorsultak az események – azt hiszem. Bár az idő nem igazán volt érzékelhető.
                    <br/>Mondtad, hogy szóljak a kisfiamhoz, bíztassam, tartsam vele a kapcsolatot. Hihetetlen, mennyit segített, hogy erre figyelmeztettél! Kérleltem Mátét, hangosan, hogy jöjjön és segítsen és Ő megtette! Éreztem, ahogy küzd, elképesztő volt az ereje.
                </p>
                <p>
                    Egyszer csak eljött a pillanat, amikor tudtam, ez már tényleg a célegyenes. Behívtad a szülésznőt, aki odatérdelt a kád mellé. Megkérdezte, hol szeretnék szülni. El sem akartam hinni, hogy tényleg lehetséges, hogy megszülhetem itt, a vízben a gyermekemet! Ez tényleg csak a legtitkosabb vágyaim közt szerepelt, de ott már hosszú-hosszú évek óta… azóta, hogy először hallottam arról, hogy létezik ilyen. Mindig is úgy gondoltam, ez lenne a legideálisabb érkezés egy újszülöttnek.
                </p>
                <p>
                    Máté megszületett, a víz alatt felém fordult, a szülésznő csak a háta mögé tette a kezét, ennyit segített neki, hogy a mellkasomra csúszhasson. A víz körülölelt minket és a kisfiam csak nézett rám, figyelmesen, némán. Nem sírt. Én nagyon. Te is, de azt nem láttam. Csak azt a pici embert láttam, akit sikerült háborítatlanul a világra hoznom. Végre találkoztunk!
                </p>
                <p>
                    Életem legszebb, legmeghatározóbb élménye volt az a nap, pontosan egy évvel ezelőtt.
                    <br/>És biztos vagyok abban, hogy Nélküled minden másképp alakult volna.
                </p>
                <p>
                    KÖSZÖNÖM
                </p>
                <p>
                    Nagyon szeretlek és kívánom, hogy váljon valóra minden álmod!
                </p>
                <p>
                    Eszter
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
