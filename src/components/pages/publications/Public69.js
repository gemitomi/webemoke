import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public69Pic1 from "../../../image/publications/public-69-hero-a-hosszu-es-nehez-szulesrol.png";
import Public69Pic2 from "../../../image/publications/public-69-a-hosszu-es-nehez-szulesrol.png";

export default function Public69() {
  return (
    <div>
     <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public69Pic1} alt="a-hosszu-es-nehez-szulesrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A “hosszú és nehéz” szülésről</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2007. augusztus 28.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications4" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public69Pic2} alt="a-hosszu-es-nehez-szulesrol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>27 éves vagyok, és első kisbabámat várom, a 33. hétben járok, kisfiam lesz…<br/>
                            <br/>Párommal nagyon vártuk már ezt a babát, és szerencsésnek mondhatom magam, mert az egész várandósságom alatt elkerült mindenféle kellemetlenség, ami sokszor a terhesség velejárója. Minden eredményem tökéletes, életem legboldogabb hónapjait élem meg, és sosem gondoltam volna, hogy a babavárás ilyen csodálatos és nagyszerű dolog!</i>
                        </blockquote>
                        
      
                    </div>
                </div>
                <blockquote>
                    <i>Boldogságomat a 32. heti ultrahangos súlybecslés árnyékolja be, mert a korához képest nagy a baba. A lelet eredményét természetesen megbeszéltem a fogadott orvosommal, aki nemhogy megnyugtatott volna, vagy tanácsokkal látott volna el, teljesen megrémisztett, mert közölte, hogy igen, a baba nagyon nagy (2333 g-ra becsülték), és eddzem magam, és készüljek fel mind testileg, mind lelkileg, hogy nagyon hosszú és nehéz szülés előtt állok. Mondanom sem kell, mit érzek.<br/>
                        Nem az a baj, hogy a baba nagyon szépen fejlődik, hiszen nagyon egészséges, hanem hogy nem tudom, mit kellene tennem, mert senkitől semmilyen felvilágosítást nem kapok.<br/>
                        A kérdésem az lenne, hogy életmód- vagy étrendváltoztatással tudom-e befolyásolni a magzat születési súlyát; vagy hogyan „eddzem magam”: tornával, sétával? Hogyan készüljek fel lelkileg a nehéz szülésre? Egyáltalán lehet-e erre készülni? Mert szerintem nem, hiszen előre senki nem tudhatja, milyen szülése lesz. Lehet, hogy a nagy babám (vagy nem is lesz olyan nagy?) ellenére könnyebb szülésem lesz, mint bárki másnak, ezt nem lehet előre megjósolni, de az biztos, hogy most nagyon megijesztettek, és rettentően el vagyok keseredve.<br/>
                        Az emberek, a szakkönyvek, más kismamák, anyukák, orvosok mindenfélét mondanak, és én nem tudom, mit gondoljak. Rémtörténetek tömkelegével tömik a kismama fejét a nehéz szülésről és az azt követő felépülésről, a kínokról, és hiába próbálok nem odafigyelni, egy idő után már besokall az ember…<br/>
                        <br/>Ha tudsz valamit tanácsolni ezzel kapcsolatban, vagy hasonló esetekkel már találkoztál, vagy levelemre pár biztató szót válaszolnál, nagyon hálás lennék. Jelenleg nem tudok kihez fordulni, és mindenképpen szakember véleményét szeretném kikérni a dologról.<br/>
                        <br/>Éva</i>
                </blockquote>
                <p>
                    <b>Kedves Éva!</b>
                </p>
                <p>
                    Az újszülöttek átlagos születési súlya 3400 gramm, és úgy tűnik, hogy ez az érték mostanában emelkedőben van. Ma már a babák 10 százaléka születik 4 kilogramm fölötti súllyal. Ezt a genetikai öröklődés mellett a kiegyensúlyozott étrend és a kímélő életmód is eredményezheti, de egyre több feltételezés van arról is, hogy a magzatvédő vitaminok B-vitamin-tartalma is okozhatja a magasabb születési súlyt.
A legtöbb ultrahangos készülék automatikus súlybecslést végez, de ez nem mindig pontos. (Nekem a három gyermekem közül kettőnél is 500-500 grammot tévedett.)
                </p>
                <p>
                    Egy átlagos testalkatú nő (tehát nem túl vékony vagy nem túl alacsony) képes kihordani és megszülni a gyermekét akkor is, ha az nagy súlyú, még akár gátvédelemmel is. A nagy súlyú babák világra segítésénél is döntő az, hogy az orvos és a szülésznő hogyan segíti a szülőnőt, pl. milyen vajúdási pozíciót javasol.<br/>
                    Nem tanácsolom, és értelmetlen is lenne, hogy a jelenlegi kiegyensúlyozott életmódodon bármit is változtass. Az, hogy a babád a születése időpontjában mekkora lesz és milyen egyéb tényezők befolyásolják majd a születése körülményeit, még nem tudhatjuk.<br/>
                    Ami még a leveled kapcsán eszembe jutott, és feltétlenül írni szeretnék róla, az a szavak ereje.
                </p>
                <p>
                    Anyaként is, dúlaként is egyre gyakrabban tapasztalom, hogy milyen komoly felelősség terheli az orvosokat azzal kapcsolatban, hogy mit hogyan közölnek.
                </p>
                <p>
                    Akár betegként, akár aggódó szülőként, akár várandósként kerül valaki kapcsolatba az egészségügyi személyzettel, nagy szüksége van arra, hogy korrekt és hiteles tájékoztatást kapjon saját maga vagy a hozzátartozója állapotáról. Az információk közlésének módja minden esetben döntő jelentőségű. Ha szorongunk, félünk vagy fokozott érzelmi igénybevételnek vagyunk kitéve (márpedig a fentebb említett esetekben erről van szó), akkor megnő a szuggesztiókra való fogékonyságunk. Szuggesztió pedig minden olyan „üzenet” lehet, amely során egy gondolat eljut a tudatba, és ott további gondolatok kiindulópontja lesz.
                    <br/>A te esetedben sajnos az történt, hogy az orvosod azzal, hogy a szülésed előtt két hónappal azt mondta, hogy nagyon hosszú és nehéz szülés előtt állsz – a szavaidat idézve –, megrémisztett, elkeserített és beárnyékolta a várandósságodat. Vajon miért csak ezt és így közölte?
                </p>
                <p>
                    Én mindenképpen megkérdezném tőle a következő találkozásunk alkalmával, hogy mennyire biztosak ezek a számítások? Hogyan tud nekem a vajúdás alatt segíteni? Milyen gyakorlatot folytat a nagy súlyú baba világra segítésekor?
                </p>
                <p>
                    A szülőnők a szülés alatti sajátos tudatállapotban is nagyon érzékenyen reagálnak a kedvező és a kedvezőtlen szuggesztiókra. Engedd meg, hogy egy olyan afrikai törzs bábájának a versével ajándékozzalak meg, aki ennek a felismerésnek a birtokában a törzs asszonyait a szüléskor így segíti:
                </p>
                <p>
                    <i>"A kecskének nincs bábája.<br/>
                        A birkának nincs bábája.<br/>
                        Ha a kecske terhes lesz, biztonságban megszül.<br/>
                        Ha a bárány terhes lesz, biztonságban megszül.<br/>
                        Te most terhes vagy, biztonságban megszülsz.”</i>
                </p>
                <p>
                    Boldog, szorongásmentes várandósságot és pozitív energiát sugárzó segítőkkel kísért szép, természetes szülést kívánok!
                </p>
                <p>Emőke</p>



                <p>
                    <a href="https://nlc.hu/baba/20070828/a_quothosszu_es_nehezquot_szulesrol/">https://nlc.hu/baba/20070828/a_quothosszu_es_nehezquot_szulesrol/</a>
                </p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications4">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
