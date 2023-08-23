import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public10Pic1 from "../../../image/publications/public-10-hero-kenyelemre-programozva.png";
import Public10Pic2 from "../../../image/publications/public-10-kenyelemre-programozva.png";

export default function Public10() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
          <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public10Pic1} alt="Kenyelemre programozva"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Kényelemre programozva</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. október 27.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public10Pic2} alt="Kényelemre programozva"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Többször is elolvastam a Babázzunk rovatban két hete megjelent cikket a programozott szülésről, és egyre csak az olvasottakon tűnődöm.</b>
                        </p>
                        <br/>
                        <p>
                            Kényelem. Kényelem a szülőszobán. Furcsa nekem ez a szó. Használom-e, és ha igen, mikor érzem megfelelőnek ezt a kifejezést egyáltalán szüléskísérés közben?
                        </p>
      
                    </div>
                </div>
                <p>
                    Azt hiszem, a vajúdás és a szülés alatt nem. Az anyák – ha hagyják őket szabadon mozogni, – ösztönösen ráéreznek, hogy melyik az a pozíció, amelyikben a legjobban segítik a babájukat és amelyikben könnyebb rásimulniuk a méhösszehúzódások hullámaira, de azért azt nem gondolom, hogy bármelyiket is kényelmesnek neveznék ilyenkor. Van jobb és kevésbé jobb testhelyzet, de a vajúdás és a szülés, ha a természet rendje szerint zajlik, mindenképpen egy igen intenzív testi élmény, mely komoly fizikai igénybevétellel jár.
                </p>
                <p>
                    Ahogy felidézem magamban megannyi szülés történetét, az első pillanat, amikor eszembe jut ennek a szónak a létjogosultsága az, amikor az anya és a babája találkozik. Amikor az édesanya mellkasára veszi, átöleli, majd megszoptatja a kisbabáját, akkor valóban fontos szempont már a kényelem, az, hogy mindketten úgy feküdjenek, hogy az pihentető, és mindkettőjük számára kényelmes legyen.
                    Kérdéseiddel, problémáiddal fordulj Emőkéhez! Várja leveleidet a dula@nlcafe.hu címen. A hozzá érkező levelek közül hetente egyet itt, a Nők Lapja Cafe oldalain válaszol meg.
                </p>
                <p>
                    No, de ebben a cikkben nem erről olvasok. Itt valami egészen másról van szó. Próbálom megérteni.
                </p>
                <p>
                    „A programozott szülés előnye, hogy választott időben történik, alkalmazkodva elsősorban a szülőnő és családja, másodsorban az egészségügyi személyzet igényeihez, mindig reggel kezdődik, így a szülés napközben zajlik.”
                </p>
                <p>
                    Szóval: ha az anya terminus közelében jár és a méhszája érett, akkor azt mondhatja az orvosának:
                </p>
                <p>
                    <i>„Doktor úr! Egyeztessük a naptárunkat! Ön mikor ér rá? Nekem a jövő héten a keddi nap épp megfelelő lenne, és ráadásul akkor még a gyerekem is a vágyott csillagjegyben születne. Reggel 8 óra? És meddig tud maradni? A műszakja végéig megleszünk? Mert kényelmetlenséget nem szeretnék okozni. Tulajdonképpen nem lenne rossz, ha tényleg megszületne ez a gyerek estig, mert akkor éjjel már én is alhatnék egy jót.”</i>
                </p>
                <p>
                    Hm. Tele vagyok kérdéssel.
                </p>
                <p>
                    Vajon ez tényleg így zajlik? Vagy esetleg nem is az anya, hanem az orvos kínálja fel a programozott szülés lehetőségét az anyának? Mit jelent az, hogy „el kell mondani a programozott szülés lényegét a kismamának, mert csak az ő beleegyezésével végezhető”? Milyen tájékoztatást kap erről az anya? Elmondják neki a kényelmi szempontok, mint előnyök(?) mellett a kockázatokat is? Miért gondolja a cikkben nyilatkozó főorvos azt, hogy egy ilyen beavatkozásnak semmi hátránya nincs? Ha nincs, akkor mit tartalmaz vajon a beleegyező nyilatkozat, amelyekben más beavatkozások esetén fel szokták sorolni a kockázatokat is? Egy burokrepesztéssel megindított szülésnél honnan lehetünk olyan biztosak abban, hogy az napközben lezajlik, hiszen a burok megrepedésétől számítva akár több óra is eltelhet a kontrakciók jelentkezéséig? Csak nem alkalmaznak a kényelem érdekében olykor oxitocin infúziót is? Meglehet, hiszen a főorvos tájékoztatása szerint a mesterségesen adott oxitocin semmiben sem különbözik a test által termelt saját anyai hormontól, és az alkalmazásának egyáltalán nincs sem hátránya, sem pszichés következménye. Miért hallok akkor én erről teljesen mást szülészorvosok továbbképzésén, pszichológusoktól és mesterséges oxitocinnal szült anyáktól, akik az infúzió bekötése után kontrollálhatatlan fájdalomról, teljes feladásról és az ebből adódó alkalmatlanság-érzésről számolnak be? Vajon egészséges várandósság esetén, ahol az anya és a baba is jól van, kinek van joga beavatkozni a természetes folyamatba? Miért kell egy a felnőttek számára kényelmes napon elindítani a kisbabákat?
                </p>
                <p>
                    Megannyi kérdés zakatol bennem. Nagy részükre, vagy az eddig feltettekre akár választ is kaphatok. De a leglényegesebbre – szóban legalábbis – nem tudnak válaszolni az illetékesek.
                </p>
                <p>
                    Mert számomra a legfontosabb kérdés az, hogy mit éreznek vajon a „kényelmi program” szerint született kisbabák?
                </p>
                <p>
                    Talán nem egyedül gondolkodom el ezen…
                </p>
                <p>Békés Emőke</p>





                <p>
                    <a href="https://nlc.hu/baba/20091027/kenyelemre_programozva_-_a_dula_valaszol/">https://nlc.hu/baba/20091027/kenyelemre_programozva_-_a_dula_valaszol/</a>
                </p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications">Publikációim</Link>
            </div>
        </div>
    </section> 
        </div>
      )
}
