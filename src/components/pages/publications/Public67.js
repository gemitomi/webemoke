import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public67Pic1 from "../../../image/publications/public-67-hero-csak-csaszaros.png";
import Public67Pic2 from "../../../image/publications/public-67-csak-csaszaros.jpg";

export default function Public67() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public67Pic1} alt="csak-csaszaros"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Csak császáros...</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2007. szeptember 11.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <a href="#" class="blog-global-btn">Publikációim</a>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public67Pic2} alt="csak-csaszaros"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>Nem biztos, hogy helyes, hogy rád „zúdítom” a véleményemet, de reménykedem, hogy levelem valami változásfélét elindít a császármetszés gondolatkörben.<br/>
                                2006 áprilisában, császármetszéssel született a kisfiam. Látod, nem azt írom, hogy világra jött, sem nem azt, hogy szültem… Tízórányi vajúdás után, a szívverés másodszori lelassulása után, hihetetlen gyorsan kapták ki belőlem a kicsi fiút.</i>
                        </blockquote>  
      
                    </div>
                </div>
                <blockquote>
                    <i>Én csak annak örültem, hogy mindketten egészségesen jöttünk ki a kórházból, lehetett volna másképp is. Mégis, a környezetem ki nem mondott reakcióit most, tán másfél év elteltével tudom kezelni, a helyére tenni, megemészteni, nem bántani magam.<br/>
                    <br/>Mert...<br/>
                    <br/>– Nem vagyok híve annak, ha valaki „kényelemből” dönt a császármetszés mellett.
                    <br/>– Én is szerettem volna természetes úton világra hozni a fiamat, meg is tettem mindent ezért.
                    <br/>– Van úgy, hogy nem sikerül, amit elterveztünk, ez önmagában elég kudarc, nem hiszem, hogy tetézni kell azzal az attitűddel, mely minden szüléssel kapcsolatos írásból ordít, hogy „ha mégis kivágták belőled a gyereked, akkor nem tettél meg mindent érte, magadért, a szép szülésélményért”.
                    <br/>– Nem hinném, hogy ki kell dobni az ablakon a baba-mama kötődést csak azért, mert a műtét miatt pár óra múlva teszik csak a hasunkra a babánkat. Van kb. 20 év arra, hogy a kötődés kialakuljon, megszilárduljon.
                    <br/>– A tejtermelést csak minimálisan befolyásolja (talán) a császár, de a kismamáknak csak egy kicsi része hiszi ezt el.
                    <br/>– Igen ritkán találkozom olyan írással, amely feltárja, hogy egy császármetszés a műtétkor és utána milyen terheket ró a szülőnőre, a fiatal mamára (érzéstelenítés/altatás, sebgyógyulás, gyermekágyi folyás, hasizom nemléte, problémás tisztálkodás, varratszedés stb.).<br/>
                    <br/>Csak annyit kérnék, hogy azok a mamák, akik a babájuk és a maguk életét mentették meg a császár mellett döntéssel, ne másfél év múlva alhassanak nyugodtan, mert a cikkek, melyekből megnyugvást remélnek, rossz érzést hagynak maguk után, talán figyelmetlenségből.<br/>
                    <br/>Tisztelettel:<br/>Éva</i>
                </blockquote>
                <p>
                    <b>Kedves Éva!</b>
                </p>
                <p>
                    Köszönöm a leveled, nagyon fontos dolgokról írsz.
                </p>
                <p>
                    Mostanában egyre inkább a figyelem középpontjába kerül a császármetszés. Arányait tekintve én is sok levelet kapok e témakörben főként olyan anyáktól, akiknek ilyen úton született a gyermekük.

                    <br/>Kétségtelen tény, hogy ez a műtéti eljárás életmentő, és sok esetben az egyetlen megoldás az anya és a kisbaba egészségének megóvása érdekében.

                    <br/>Ha valaki természetes, hüvelyi úton történő szülésre készül, akkor egy váratlan császármetszés bizony csalódást, riadalmat kelt benne. A döntő ilyenkor az, hogy hogyan kommunikálnak vele ebben a helyzetben. Érti-e, kielégítő, elfogadható magyarázatot kap-e arra, hogy miért szükséges ez a beavatkozás? Feltétlen bizalom van-e közte és az orvosa között?
                </p>
                <p>
                    Ha a válasz igen, még akkor is sokkal nehezebbek a szülés utáni napok, mint abban az esetben, ha valaki hüvelyi úton szül. Amellett, hogy lelkileg fel kell dolgoznia az élményt, a fizikai felépülés is sokkal több időt vesz igénybe. A műtétet követő napokban a fájdalmas seb, a korlátozottabb mozgás nehezíti a kisbaba ellátását is.<br/>
                    Ugyanakkor egyre több császármetszésen átesett nőt nyugtalanít a kérdés: vajon tényleg szükség volt-e erre? Sokan nem érzik meggyőzőnek azt a magyarázatot, amit kaptak, és elgondolkodtatóak azok a tények is, amelyek azt mutatják, hogy az utóbbi években radikálisan emelkedett a császármetszések száma. Hogy lehet az, hogy egyes kórházakban ennek aránya messze meghaladja más intézmények eredményeit? Ott talán más az anatómiai felépítésük a nőknek? Vagy esetleg egyéb okok állnak a háttérben?
                </p>
                <p>
                    Fontos lenne arról is beszélni, hogy tudják-e azok a nők, akik a programozott császármetszés mellett döntenek (sajnos egyre többen vannak), hogy ennek milyen hatásai lehetnek mind rájuk, mind a születendő babájukra nézve? Hogy mik a veszélyei, a rövid és hosszú távú következményei ennek a műtétnek?
                </p>
                <p>
                    Két éve jelent meg Magyarországon egy olyan kiadvány „A biztonság kockázata – Amit minden nőnek tudnia kell a császármetszésről” címmel, amely tartalmazza mindezeket az ismereteket. Azt gondolom, hogy ezeket valóban minden szülés előtt álló nőnek tudnia kell. Hogy miért, arra a füzetke ismertetője ad választ, ebből idézek.
                </p>
                <p>
                    <i>„Egyre növekszik hazánkban a császármetszések száma. Mitől lehet ez? Vajon hogyan lehetséges, hogy harminc évvel ezelőtt az újszülöttek csupán 5, azaz öt százalékának volt szüksége arra, hogy édesanyja hasán keresztül jöjjön világra?

                        <br/>Létezik-e, hogy az olyan sokszor emlegetett ok, miszerint a nők szülésének ideje későbbre tolódott, indokolja, hogy hazánkban mostanra hatszorosára, vagyis 30%-ra emelkedett azon nők száma, akik megfosztódnak a hüvelyi szülés élményétől?
                        
                        <br/>Akárhogy is, a kiadvány nem annyira az okokra összpontosít, mint inkább megmutatja, mi is a császármetszés valójában, megfosztja a köré szőtt mitikus ködtől, rávilágít ennek a hasi műtétnek az előnyeire és hátrányaira. Segít abban, hogy a várandós nő biztonságosabban tudja eldönteni, hogy az ő esetében valóban indokolt-e ez a komoly műtéti beavatkozás, vagy sem, segít mérlegelni, szempontokat ad ahhoz, hogy mit beszéljünk meg a szülészorvosunkkal, bábánkkal. A füzet tanácsainak megfogadásával pedig elkerülhetjük a szükségtelen beavatkozásokat. Nem utolsósorban pedig, ha tényleg indokoltnak bizonyul a császármetszés, az így szült nő annak biztos és megnyugtató tudatában élhet, hogy az történt, ami számára és gyermeke számára is a legoptimálisabb volt.”</i>
                </p>
                <p>
                    Egyetértek veled abban, hogy káros, ha bármilyen e témával kapcsolatos írásból az szűrődik le, hogy az a nő, aki így hozta világra a gyermekét, nem tett meg érte mindent. Ez tovább nehezíti azoknak az anyáknak a helyzetét, akik váratlanul kerültek ebbe a helyzetbe, és nem volt választási lehetőségük.
                </p>
                <p>
                    A korrekt tájékoztatás és a feltétlen bizalom tehát döntő jelentőségű abban, hogy hogyan dolgozza fel a császármetszéssel szült nő ezt az élményt. És ebben minden szülészorvosnak és a szülés területén dolgozó valamennyi szakembernek komoly felelőssége van.
                </p>
                <p>Emőke</p>


                <p>
                    <a href="https://nlc.hu/baba/20070911/csak_csaszaros/">https://nlc.hu/baba/20070911/csak_csaszaros/</a>
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
