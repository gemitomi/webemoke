import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public15Pic1 from "../../../image/publications/public-15-hero-kie-a-kisbaba.png";
import Public15Pic2 from "../../../image/publications/public-15-kie-a-kisbaba.png";

export default function Public15() {
    return (
        <div>
            <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public15Pic1} alt="kie a kisbaba"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Kié a kisbaba?</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. augusztus 18.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <a href="#" className="blog-global-btn">Publikációim</a>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public15Pic2} alt="kie a kisbaba"/>
                    </div>
                    <div className="blog-globale-text">
                        <blockquote>
                            <b><i>Kedves Emőke!</i></b>
                        </blockquote>
                        <br/>
                        <blockquote>
                            <i>"Két éve született a kisfiam, Ádám. Egy vidéki nagyváros kórházában látta meg a napvilágot. Bár a születése sem volt teljesen háborítatlan, a velem történteket könnyebben el tudtam fogadni mint azt, ahogy az újszülött ellátása zajlott.<br/>
                                Amikor Ádám kibújt, igaz, hogy a mellemre tették, de csak alig egy-két percig, aztán már vitték is el fürdetni. Előtte leszívták a nyákot az orrából, így aztán nagyon sírt szegényke.<br/>
                                Engem az orvos varrni kezdett, a kisbabát pedig elvitték a csecsemőosztályra. Azt mondták, hogy a doktornő megvizsgálja, aztán majd visszahozzák.</i>
                        </blockquote>
      
                    </div>
                </div>
                <blockquote>
                    <i>Nekem ez nagyon rossz volt, amúgy is fájt a varrás, de a legjobban az, hogy nem lehetett mellettem a kisfiam, és nem hallhattam azt sem, hogy mit mond róla az orvos. Az ellátásom után türelmesen várakoztam a szülőszobán, de nem hozták vissza a babámat. Végül már elsírtam magam, és akkor az egyik szülésznő megsajnált, leszólt a csecsemőosztályra, így kaphattam meg nagy sokára Ádámot. Már nem sírt, aludt és én végre megszemlélhettem a kicsi fiamat.<br/>
                    <br/>Hamarosan egy kislány érkezését várjuk és én egyre erősebben azt érzem, hogy nem akarom, hogy még egyszer ennyi időre elválasszanak a gyermekemtől. Kérlek, adj tanácsot, mit tehetnék?"
                    <br/>Anikó</i>
                </blockquote>
                <p>
                    <b>Kedves Anikó!</b>
                </p>
                <p>
                    A szülések kísérése kapcsán számos kórházban megfordulok, és így módomban áll látni az egyes szülészeti osztályokon bevett gyakorlatot az újszülött ellátásával kapcsolatban.
                </p>
                <p>
                    Gyakran hivatkozik a személyzet a protokollra, amit be kell tartaniuk, de én azt tapasztalom, hogy nincs egységes szabályozás, vagy ha van is, azt az egyes helyeken másként és másként értelmezik. És hogy még ennél is jobban árnyaljam a képet, a protokoll illetve az attól való eltérés abszolút személyfüggő is. Egy adott kórházon belül is változó az, hogy az éppen műszakban lévő csecsemős nővér leveszi-e az anya melléről a babát vagy hagyja őket együtt lenni akár egy órán keresztül is. Ez sajnos nem csak attól függ, hogy ő mennyire humánus, mennyire hisz abban, hogy ez így a legjobb-e, hanem attól is, hogy éppen éjszaka van-e vagy nappal, hogy sok munkája van-e egyébként, vagy hogy őt mennyire figyelik és tőle mit várnak el a felettesei.
                </p>
                <p>
                    De mit várnak el az édesanyák és – feltehetően – a kisbabák is?
                </p>
                <p>
                    Azt, hogy amennyiben mindketten jól vannak, zavartalanul együtt lehessenek a szülést követő két órában, amely a korai kötődés szempontjából nagyon értékes időszak.
                </p>
                <p>
                    A kisbaba életének első néhány órájában ugyanis minden érzékelése rendkívül kiélesedett. Ha hagyják, képes pl. az anyukája hasán önállóan felmászni és megtalálni a mellet, ebben a szaglása is segíti. Ha nem teszik ki a szokásos – és egyébként egyáltalán nem sürgős – fürdetésnek, mérlegelésnek, öltöztetésnek, akkor módja van arra, hogy tekintetével mélyrehatóan megszemlélje a szüleit és hallhassa, amint ők beszélnek hozzá. A megszületése utáni első fél-egy órában általában hajlandóságot mutat a szopásra, ezzel is segítve az anyai szervezetben a természetes oxytocin termelődését, így a lepény spontán leválását illetve a méh összehúzódását.
                </p>
                <p>
                    Nehezen érthető és épp ezért nem elfogadható számomra az, hogy míg egyes helyeken nem végzik rutinszerűen a nyák leszívását, mert tudják, hiszen látják, hogy a kisbaba ezt magától is kitüsszögi, illetve már a fej kibújásakor kipréselődik az esetlegesen felgyűlt nyák a kisbaba orrnyílásából, ezzel szemben más intézményekben a baba megszületésekor már nyomják is a szondát minden újszülött orrába mérlegelés nélkül. (Természetesen vannak olyan esetek, amikor ez szükséges, pl. ha az anya magzatvize nem volt tiszta, azaz mekóniumos volt.)
                </p>
                <p>
                    A múlt héten egy olyan kórházban kísérhettem szülést, ahol bevezették, hogy a szülést követő két órában a babát bőr-bőrkontaktusban hagyják az anyával. Ez alatt az idő alatt nem mérik, nem fürdetik és nem is vizsgálják meg, ha nem szükséges. Itt talán már belátták, hogy mindezekkel a rutin ellátásokkal könnyen megfoszthatják a kisbabát és az anyukáját az aranyóra adta lehetőségektől. Ugyanis lehet, hogy egy fürösztés és mérlegelés nem jelent időben sokat, de e pár perc alatt is annyi stressz éri a kisbabát, hogy mire visszaadják a mamájának, a kétségbeesett sírásból gyakran mély álomba menekül. A baba tiszta, az adatai könyvelhetők, csak éppen szopni és nézelődni nem akar már…
                </p>
                <p>
                    Érdemes tehát pontosan érdeklődnöd arról, hogy ott, ahol szülni fogsz, mik a szokások a csecsemő ellátásával kapcsolatosan. Tudakold meg, hogy melyek a lehetőségeid és fogalmazd meg – írásban is – és egyeztesd a személyzettel a kéréseidet. Megéri erre időt szánni, hiszen nem mindenhol egyértelmű az, aminek természetesnek kellene lennie.
                </p>
                <p>
                    Hogy milyen egyszerűen lehet megakasztani a sokszor értelmetlen rutint, arra engem az egyik olyan anya tanított, akinek néhány éve jelen lehettem a kislánya érkezésénél.
                </p>
                <p>
                    A baba megszületése után – aki egyébként tökéletesen egészséges volt, és a mamája hasán fekve nyugodtan szemlélődött – „beindult a gépezet”. El akarta tőle kérni a szülésznő a babáját azzal az indokkal, hogy meg fog fázni (egy nagy, puha fürdőlepedőbe volt bebugyolálva, a fejére pedig sapkát húztunk). Többször is próbálkozott, toporgott, sürgette az anyát, de ő mindannyiszor csak ennyit ismételgetett szelíden és mosolyogva: „Nem adom oda, mert ő az enyém.” 
                </p>
                <p>
                    A szülésznő ezzel az egyszerű igazsággal nem tudott vitatkozni, belátta, hogy talán mégis képes megítélni és dönteni arról az anya, hogy fázik-e a gyereke vagy sem, most is, mint ahogy az elkövetkező években is majd ezerszer. Így a rutincselekvés elmaradt, a kisbaba pedig boldogan szopizhatott.
                </p>
                <p>
                    Talán csak ennyi kell.
                </p>
                <p>
                    Remélem, ez a történet Neked is segít abban, hogy a kislányodat majd zavartalanul magadhoz ölelhesd és ne választhassanak el egymástól Benneteket.
                </p>
                <p>Emőke</p>

                <p>
                    <a href="https://nlc.hu/baba/20090818/kie_a_kisbaba_-_a_dula_valaszol/">https://nlc.hu/baba/20090818/kie_a_kisbaba_-_a_dula_valaszol/</a>
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
