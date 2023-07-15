import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public47Pic1 from "../../../image/publications/public-47-hero-miert-sir-a-baba.png";
import Public47Pic2 from "../../../image/publications/public-47-miert-sir-a-baba.jpg";

export default function Public47() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public47Pic1} alt="miert-sir-a baba"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Miért sír a baba?</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2008. június 03.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/publications3" class="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public47Pic2} alt="miert-sir-a baba"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>Tanácsot szeretnék Öntől kérni, ugyanis a bátyámék kislánya (Petra) délután 4 órától kb. este fél 7-ig folyamatosan sír, akkor is azért hagyja abba, mert kifárad. Ez sajnos már egy hete tart. Petra most 7 hetes és hasfájós. De ebben az időszakban nem tapasztalnak nála hasfájásra utaló panaszt (például nem húzza össze magát stb.). Hiába van kézben, az sem segít, vagyis kb. 5 percig nyugszik meg, és utána tovább sír. Próbálták már játékkal lekötni, de azt is hamar megunja. A friss levegő sem segít. Próbálta a sógornőm mellre tenni, az is egy kis ideig segít, de amikor elveszi tőle a cicit, újból sírni kezd. De nem éhes, mert utána kibukja az egész tejcsit. Hasfájásra használják a Gripe vizet és az Infacolt, de mint említettem, nem látják rajta, hogy fájna valamije. Éjszaka jól alszik. Nem igazán tudnak már mit csinálni. Eléggé megviseli őket ez a helyzet. Kérem, segítsen, ha tud.<br/>
                            <br/>Előre is köszönöm:<br/>Mónika</i>
                        </blockquote>
                        
      
                    </div>
                </div>
                
                <p>
                    <b>Kedves Mónika!</b>
                </p>
                <p>
                    A sírás az újszülött számára az egyetlen módja annak, hogy kifejezze: valami nincs rendben. Bármit is hall vagy olvas egy anya előzetesen arról, hogy mit kell tennie ilyenkor, amikor felsír a babája, elemi erővel tör rá a vágy, hogy megszüntesse a kiváltó okokat, és segítsen rajta. Ez nagyon fontos a kötődés kialakulása szempontjából is, hiszen ha az anya érzékenyen és azonnal reagál a sírásra, könnyebben fejlődik ki közte és a kisbaba között harmonikus kapcsolat, és a baba megtanulja, hogy bízhat a mamájában.
                </p>
                <p>
                    A szülőknek persze eleinte nem mindig könnyű kitalálni, hogy miért sír a babájuk. A legfőbb okok, amelyeket érdemes átgondolni:
                </p>
                <p>
                    <b>Éhes</b>
                </p>
                <p>
                    Ez az a probléma, amelyet a legkönnyebb megoldani. A kis csecsemőnek gyakori evésre van szüksége, mert kicsi a gyomra. Ha az anya észreveszi a jelzéseit, például azt, hogy keresi a mellet, cuppog vagy szopómozgásokat végez, akkor meg lehet előzni a sírását. Először tehát érdemes meggyőződni arról, hogy nem éhes-e.
                </p>
                <p>
                    <b>Fázik</b>
                </p>
                <p>
                    Az újszülöttek szeretik a meleget, így segíthet az is, ha az anya bebugyolálja egy kendőbe vagy takaróba. A néhány hetes kisbabák közül sokan nem kedvelik a meztelenséget sem, ha fürdéskor vagy öltöztetésnél sír a baba, akkor a hátterében ez az ok is állhat.
                </p>
                <p>
                    <b>Testi kapcsolatra vágyik</b>
                </p>
                <p>
                    A kisbaba számára az a természetes, ösztönei szerint ideális állapot, ha az anya karjában van, ha megölelik őt. Ha érzi édesanyja testének melegét, illatát, a szívverését, rögtön a méhen belüli életre emlékeztető körülmények közt találja magát, és megnyugszik. Sok kisbaba kedveli, ha a hordozókendőben lehet, mert így szoros a testkontaktusa az anyával, aki a mozgásával ily módon ringatja is. A világ számos táján a babákat naphosszat ölben tartja vagy magával hordozza valaki, leggyakrabban az anyukája, de ha neki esetleg más dolga van, a család valamelyik tagja veszi gondjaiba a gyermeket. Óriási támaszt jelenthetnek a síró baba megnyugtatásában is az édesapák.
                </p>
                <p>
                    <b>Elfáradt</b>
                </p>
                <p>
                    Sok kisbaba sír, amikor elfárad. Ha túl sok inger éri, akkor a sírásával jelzi, hogy elege van. A néhány hetes baba idegrendszerének nem csak azt nehezebb még feldolgoznia, ha egy ingergazdag nagy családban kézről kézre adják, vagy sokan beszélnek körülötte, hanem a fényeknek, a hidegnek és a melegnek az érzékelése is kifáraszthatja. A figyelme még csak nagyon rövid ideig leköthető, így el tud fáradni attól is, ha túl sokat játszanak vele.
                </p>
                <p>
                    <b>A rossz időzités</b>
                </p>
                <p>
                    Ha az etetéseket rosszul időzítik, akkor is biztosan sírni fog a baba. Nem jó megvárni, amikor már sírással jelzi, hogy éhes, hanem az erre utaló jelek tapasztalásakor rögtön mellre kell tenni, hogy ne veszítse el a türelmét. Azt is érdemes mérlegelni, hogy mikor tegyük tisztába vagy öltöztessük át. Ezek a műveletek ugyanis késleltetik a táplálék megérkezését.
                </p>
                <p>
                    <b>Fáj valamije</b>
                </p>
                <p>
                    A fájdalom életük első pillanatától kezdve kiváltja a sírást a babákból, viszont gyakran nehéz megállapítani, hogy a fájdalom vagy valami más ok miatt sírnak-e. A fájdalom oka is többféle lehet. Okozhatja hasfájás, de akár egy szorosabb ruhadarab is.
                </p>
                <p>
                    <b>Az anya feszült</b>
                </p>
                <p>
                    Ha nem úgy alakulnak az első napok a babával, ahogyan elképzelte, mert a baba sokat sír, az anya csalódottsága, feszültsége, bizonytalansága is napról napra fokozódhat, különösen akkor, ha egymásnak ellentmondó tanácsokkal árasztják el. Ebben a helyzetben nem a hibakeresés az első tennivaló, hanem inkább a lazítás. Az édesanya idegessége, feszültsége ugyanis a babára is átsugárzik. Ő pontosan azt tükrözi vissza, amit kap: ha csendes, biztonságos nyugalmat, halk, kedves szavakat, ekkor elcsendesedik.
                </p>
                <p>
                    <b>Hogyan lehet megnyugtatni a síró kisbabát?</b>
                </p>
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">Ha már jóllakott, akkor sem kell rögtön letenni, hiszen a babák igénylik a cumizást is az anya mellén. Hogy ez mennyi ideig tartson, az az anya türelmétől és a baba igényétől is függhet.</li>
                    <li class="blog-globale-has-before">Az egyik leghatásosabb módszer a ringatás.</li>
                    <li class="blog-globale-has-before">Lehet, hogy a dúdolás vagy valamilyen kellemes zene nyugtatja meg.</li>
                    <li class="blog-globale-has-before">Jó hatású a babamasszázs. Meleg helyiségben, olajos kézzel simítsuk végig a kisbaba testrészeit, és közben halkan, kedvesen beszéljünk hozzá.</li>
                    <li class="blog-globale-has-before">Érdemes kipróbálni, hogy megnyugtatja-e a csönd. Lehet, hogy kimerült, és épp a sok inger zavarja.</li>
                </ul>
                <p>
                    Dr. Sears amerikai gyermekgyógyász professzor szerint azonban a legfontosabb az, hogy az anya hallgasson bátran a megérzéseire és cselekedjen ösztönösen. Azt vallja, hogy az anyának nem megértenie kell a babáját, hanem együtt kell éreznie vele. Minél több időt tölt a kisbabája közvetlen közelében, annál valószínűbb, hogy még azelőtt észreveszi a kicsi jelzéseit, mielőtt ő hangosan üvölteni kezdene. Ha túl sok idő telik el azután, hogy a gyerek sírni kezd, előfordulhat, hogy annyira felhergeli magát, hogy csak hosszas kísérletezés után lehet megnyugtatni.
                </p>
                <p>
                    Ha mindezekre a sógornőd és a bátyád is odafigyel, akkor bízom benne, hogy a probléma hamarosan megoldódik. A kisbaba idegrendszere is napról napra érik, és egyre könnyebben megbirkózik az őt ért ingerekkel.
                </p>
                <p>
                    Tudom, hogy ezek a hetek nagyon kimerítőek lehetnek (személyes emlékeim is vannak erről), és sok bennük a találgatás. Nagyon gyakran fordulnak hozzám a baba sírása miatt aggódva azok a szülők is, akiknek a dúlája voltam. Ilyenkor nekik is elmondom ugyanezeket, és igyekszem megnyugtatni őket, hogy ez az időszak elmúlik. Gyakran fáradtan és hitetlenkedve hallgatnak, de általában hamarosan megkönnyebbülve mesélik: tényleg elmúlt!
                </p>
                <p>Emőke</p>





                <p>
                    <a href="https://nlc.hu/baba/20080603/miert_sir_a_baba/">https://nlc.hu/baba/20080603/miert_sir_a_baba/</a>
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications3">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
