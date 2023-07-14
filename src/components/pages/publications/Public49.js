import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public49Pic1 from "../../../image/publications/public-49-hero-a-valasztas-szabadsaga.png";
import Public49Pic2 from "../../../image/publications/public-49-a-valasztas-szabadsaga.jpg";

export default function Public49() {
  return (
  <div>
     <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public49Pic1} alt="a-valasztas-szabadsaga"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">A választás szabadsága</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2008. május 20.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <a href="#" class="blog-global-btn">Publikációim</a>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public49Pic2} alt="a-valasztas-szabadsaga"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>A Nők Lapja Cafe oldalán találtam meg a címed és a cikkeidet, és utolsó szalmaszálként kapaszkodnék beléd. Ez most valószínűleg elég tragikusan hangzik, de azért rettentően kíváncsi lennék a te véleményedre is.<br/>
                                Egy vidéki városban élek. Tizennégy hetes terhes vagyok, a legnagyobb boldogságunkra. Eddig minden tökéletesen alakult, és remélem, ezután sem lesz másként.</i>
                        </blockquote>
                        
      
                    </div>
                </div>
                <blockquote>
                    <i>A gondolataim már most a szülés körül forognak. Próbálok tudatosan készülni erre a szerintem teljesen természetes és ösztönös dologra, és vannak elképzeléseim vele kapcsolatban. Például nagyon szeretném saját magam megválasztani a szülés közbeni pozíciómat, illetve elkerülni a gátmetszést. És itt kezdődnek a problémák. Eddig akárkivel beszéltem („hivatalos személlyel”) – orvos, védőnők, szülésznő –, mindenki rendkívül nagy energiákat fektet abba, hogy meggyőzzön: márpedig nekem akkor lesz jó, ha szépen felfekszem az ágyra, és a doktor bácsi ejt egy „kicsi” bemetszést. Az orvosom annyira konzervatív, hogy a szülőszék használatát is ellenzi, mondván, akkor hogy fog az orvos megközelíteni? Másrészt NEM hiszem el, hogy gátmetszés nélkül nem lehet szülni! Mellesleg a saját családom is inkább hibbantnak néz (nem tudatosnak), hogy ilyen gondolatok járnak az eszemben.<br/>
                    <br/>És a nagy kérdés: mit is kellene tennem? Engedjem, hogy meggyőzzenek, mert hiszen nekik mégiscsak ez a szakmájuk, és értenek hozzá? Vagy kezdjek el gőzerővel kutatni olyan orvos és kórház után, ahol ilyen kívánságokkal nem számítanék csodabogárnak? Akkor viszont nagyon macerás lenne utazgatni. Néha úgy érzem, ilyenek csak és kizárólag Budapesten vannak, mi meg itt vidéken megragadtunk valahol a sötét középkor szintjén. (Bár szerintem az asszonyoknak még akkor is könnyebb dolguk volt.)<br/>
                    <br/>Talán túl sokat foglalkozom ezzel a témával. Talán butaságokat mondok. Te mit gondolsz, melyik irányba indulhatnék?<br/>
                    <br/>Köszönettel:<br/>Judit</i>
                </blockquote>
                <p>
                    <b>Kedves Judit!</b>
                </p>
                <p>
                    Köszönöm, hogy írtál.
                </p>
                <p>
                    Teljesen jó úton vagy, ne hagyd magad erről letéríteni! Rendkívül fontos, hogy legyenek elképzeléseid a szülésről, hiszen a te testedről és a te gyermekedről van szó. A jó szülésélmény döntő jelentőségű lehet a későbbi gyermekvállalás szempontjából, de a kisbaba egész további életére is hatással van az, hogy hogyan, miként érkezett a világra.
                </p>
                <p>
                    Tudom, hogy sajnos az ország különböző pontjain még nincs egységes anya- és családbarát szemlélet a szülészeteken. Van, ahol nem kérdés, hogy a vajúdó nő szabadon választhatja meg azt a pozíciót, amely neki a legkényelmesebb. Tudják, mert tapasztalják, hogy a szülőnők ösztönösen érzik, hogy melyik pozíció segíti a legjobban a vajúdás előrehaladását. Vannak olyan orvosok és szülésznők, akiknek nem áldozat szükség esetén letérdelni vagy leülni az anya mellé, ha a kitolási szak nem a szülőágyon történik. Ők azok, akik számára egyértelmű, hogy a szülés az anyáé, és ők pedig a segítőik, akik kísérik és nem vezetik szülést. Az ilyen szemlélettel dolgozó személyzet nem döbben meg azon sem, ha az anya azt kéri, hogy a szülést követően ne mérjék és fürösszék meg a kisbabát azonnal.
                </p>
                <p>
                    A gátmetszés szükségességéről még nagyon eltérően vélekednek ma Magyarországon, de remélem, hogy egyre többen lesznek azok, akik megértik, hogy erre a beavatkozásra csak igen ritkán, bizonyos jól meghatározható esetekben van szükség, egyébként pedig nincs. Jó lenne, ha a tudományos bizonyítékokon alapuló tanulmányok minden szülés előtt álló nőhöz és az orvosokhoz is eljutnának. Neked is a figyelmedbe ajánlok most egyet a gátmetszésről, ez Noll Andrea Nandu honlapján a cikkek között olvasható, de nyomtatásban is megjelent, címe: Ajtóstul az Élet kapuján át.
                </p>
                <p>
                    Nyilvánvaló, hogy a gátmetszésre nincs nagyobb arányban szükség egyes kórházakban, mint másokban, hiszen nem más a nők anatómiai felépítése attól függően, hogy hová mennek be szülni. Sajnos, a szemléletmód lassabban és nehezebben változik egyes vidéki szülészeteken, mert úgy gondolják, hogy az ott élő anyák úgysem mennek el távolabbra szülni, nincs más választásuk, így aztán fogadják el azt, ami van.
                </p>
                <p>
                    Hogy ez mennyire nem igaz, azt az bizonyítja, amit a vidéken élő várandósok mondanak el, amikor az országot járva beszélgetek velük. Egyre több nő bizony elmegy máshová szülni, oda, ahol tisztelik, és figyelembe veszik az elképzeléseit, és ahol a leghumánusabb körülmények között adhatnak életet a gyermeküknek.
                </p>
                <p>
                    A múlt héten Tatán voltam egy előadást tartani a Születés Hete keretében, és az előttem beszélő szülész-nőgyógyász orvos maga biztatta az anyákat, hogy váltsanak nyugodtan, és menjenek addig, amíg csak nem találnak olyan orvost, szülésznőt és akár dúlát is, aki számukra a legjobbat tudja nyújtani.
                </p>
                <p>
                    Szerencsére van szabad választási lehetőség, így arra biztatlak, hogy te is informálódj bátran, és merj váltani.
                </p>
                <p>
                    Nagyon jó úton jársz, csak megerősíteni tudlak ebben, és bízom abban, hogy nem kell túl messzire utaznod ahhoz, hogy megértsenek, és egyet is értsenek az elképzeléseiddel.
                </p>
                <p>Emőke</p>


                <p>
                    <a href="https://nlc.hu/baba/20080520/a_valasztas_szabadsaga/">https://nlc.hu/baba/20080520/a_valasztas_szabadsaga/</a>
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <a href="#">Olvasnivalók</a>
                <a href="#">Publikációim</a>
            </div>
        </div>
    </section>
  </div>
  )
}
