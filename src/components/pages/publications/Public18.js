import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public18Pic1 from "../../../image/publications/public-18-hero-lehet-e-oxytocin-nelkul-szulni.png";
import Public18Pic2 from "../../../image/publications/public-18-lehet-e-oxytocin-nelkul-szulni.jpg";

export default function Public18() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public18Pic1} alt="lehet-e oxytocin nelkul szulni"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Lehet-e oxytocin nélkül szülni?</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. július 07.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public18Pic2}/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>Szeptember végére várom első gyermekem születését. Több barátnőm, rokonom is szült mostanában, és egyikőjük kivételével mindegyik kapott a vajúdása folyamán oxytocint. Ha jól tudom, ez valami vajúdásgyorsító gyógyszer, amitől a barátnőimnek szinte elviselhetetlen fájásai lettek.<br/>
                                Azt szeretném megkérdezni Tőled, hogy tényleg ilyen gyakran szükséges ez? Nagyon szeretnék mindenféle gyógyszeres beavatkozást elkerülni a szülésemnél. Ugye, nem törvényszerű az oxytocin adása?
                                Tudom, hogy nem vagy orvos, de mivel sok szülésnél voltál már, talán meg tudsz nyugtatni afelől, hogy oxytocin nélkül is lehet szülni.<br/>
                                <br/>Válaszodat előre is köszönöm!<br/>Nóri</i>
                        </blockquote>
                        
      
                    </div>
                </div>
                
                <p>
                    <b>Kedves Nóri!</b>
                </p>
                <p>
                    Mivel valóban nem vagyok sem orvos, sem gyógyszerész, ezért nem tudom felsorolni teljeskörűen az oxytocin adásának indikációit, adagolását és mellékhatásait, de szívesen megosztom Veled mindazt, amit erről a témáról tudok.
                </p>
                <p>
                    A leglényegesebbel kezdem, mert azt gondolom, hogy a válaszom ezután abból már egyenesen következik.
                </p>
                <p>
                    Kétféle oxytocin létezik, nevükben ugyanazok, mégis sok mindenben különbözőek. Az egyik az anyai test által termelt (másnéven endogén), a másik pedig a gyógyszerként adott (azaz exogén) oxytocin.
                </p>
                <p>
                    Az oxytocin (görög eredetű szó, jelentése gyors szülés) az agyalapi mirigy hátulsó lebenyében tárolódó, a hipotalamuszból a véráramon keresztül érkező hormon.
                </p>
                <p>
                    <i>„Három fő hatáspontja van: az egyik, hogy a méhizomzatot össszehúzódásra tudja kényszeríteni. A másik, hogy az emlőmirigyek simaizmait is összehúzódásra készteti, melynek értelemszerűen a szoptatásban van jelentős szerepe. Az oxytocin harmadik hatása az, hogy serkenti az endogén ópiátok termelődését a központi idegrendszerben. Ezek olyan ingerületátvivő anyagok az agyban, melyeknek a fájdalomérzet csökkentésében és az euforikus állapotok kialakításában játszanak szerepet, így tehát túlzás nélkül nevezhetnénk a szervezet saját „mámor-molekuláinak”</i> is őket.
                </p>
                <p>
                    A várandósság alatt a méhizomzatban az oxytocin receptorok száma folyamatosan nő, és a maximumot akkor éri el, amikor a magzat is érett arra, hogy megszülessék.
                </p>
                <p>
                    Ami érdekes, hogy a szülés alatt is fokozatosan nő az oxytocin mennyisége az anya szervezetében. Erre azért van szükség, mert maga a szülés folyamata nem ér véget a gyermek megszületésével, hanem azt még követi a méhlepény leválása és megszületése, valamint – ideális esetben – az elő szoptatás. Ráadásul a mellbimbó ingerlése már önmagában is fokozza az oxytocin termelődését. Ha tehát a baba azonnal mellre kerül a születése után, és szophat, akkor lényegesen több oxytocin termelődik, segítve a lepényleválást.” (Varga K. – Suhai Hodász G. : Szülés és születés)
                </p>
                <p>
                    Az anyai oxytocin további fontos szerepe, hogy felkészíti a magzati agyat a szülésre, valamint az anyai kötődést is segíti. Szendi Gábor pszichológus, a Szex, szerelem, kötődés című munkájában így ír erről:
                </p>
                <p>
                    <i>„Amikor oxytocin jut az agyba, ösztönös erős vonzalom alakul ki azzal a személlyel kapcsolatban, aki „kézre esik”. Patkánykísérletekben, ha egy állatnak oxytocint adnak be, azonnal barátkozni kezd a legközelebb álló fajtárssal. Ezért követték a vadludak is anyjukként Konrad Lorenzet, és ezért kötődik oly szorosan minden kisbaba anyjához. Ezért oly fontos az újszülöttet azon melegében a mama hasára tenni, hogy kihasználjuk a természet kínálta lehetőséget a szoros kötelék kialakítására.”</i>
                </p>
                <p>
                    Mivel szoptatáskor a szervezet szintén oxytocint termel és a vegyület bejut az anyatejbe, így a csecsemő szervezetébe, a kötődés és annak idegrendszeri lenyomata tovább erősödik. A simogatás, a babusgatás, becézgetés szintén oxytocin-felszabadító hatású. Később már az anya hangja, látványa, illata, sőt, puszta képzete is ilyen hormonlökethez juttatja a babát.
                </p>
                <p>
                    Az exogén oxytocint általában intavénásan adják be. A szülészorvosok három esetben alkalmazzák: szülésindításnál, a méhösszehúzódások serkentésére és a szülés utáni ellátáskor. Egyáltalán nem veszélytelen gyógyszer, adagolása alapos mérlegelést és odafigyelést igényel. Azon túl, hogy a hatása gyakran kiszámíthatatlan (ezért csak alacsony dózissal szabad az adagolását elkezdeni), mind az anyára, mind a babára lehetnek káros mellékhatásai.
                </p>
                <p>
                    Természetesen vannak olyan helyzetek, amikor a szülés során szükség lehet erre a gyógyszerre. Például: farfekvéses babák hüvelyi úton való megszületésénél a kitolási szakban mindig adnak oxytocint, mert a baba testének és a fejének a megszületése között a köldökzsinór kompressziója miatt nem telhet el több mint öt perc.
                </p>
                <p>
                    Nagyon elhúzódó vajúdás esetén szintén lehet létjogosultsága, de sajnos nem ritkán alkalmazzák a szülés gyorsítására olyan esetekben is, amikor ezt sem az anya, sem a baba állapota nem teszi indokolttá.<br/>
                    Az intravénásan adott oxytocin gyakran valóban olyan fájásokat generál, ami az anyát szinte leteríti. Nincs ideje a szervezetnek és a pszichének felkészülni a hatására, és ezért érthető módon a szülő nő azt érezheti, hogy ő ezt nem bírja végig csinálni. További hátránya, hogy az anya mozgásszabadságát jelentősen korlátozza, mert a karjába csatlakozó infúziós tű és cső miatt már nem tudja olyan szabadon változtatni a pozícióját, már csak azért sem, mert az oxytocin adása gyakoribb szívhanghallgatást is indikál, ezért az anyákat rendszerint a CTG-géphez is kötik. De talán még ennél is nagyobb hátránya az, hogy a kívülről bevitt oxytocin meggátolja az anyai szervezet oxytocin termelését, így mindazok az előnyök, amelyeket a saját hormontermelés jelent, elvesznek.
                </p>
                <p>
                    Ha figyelembe vesszük, hogy milyen jelentős hatása van a simogatásnak, gyengédségnek az oxytocin termelődésére, ha tudjuk azt, hogy szeretkezés során is hihetetlen mennyiségű oxytocin szabadul fel(love-hormonnak is nevezik), akkor érdemes lenne sokkal nagyobb hangsúlyt helyezni arra, hogy a szülő nő és párja közötti kialakulhasson, majd pedig ne sérüljön az intimitás.
                </p>
                <p>
                    Szüléskíséréseim során többször volt módom megtapasztalni, milyen gyönyörűen működhet ez. Ha egy pár biztonságban érzi magát, ha tisztelik az intimitásukat, akkor meg tudják engedni maguknak azt, hogy a vajúdás során összebújjanak, átöleljék vagy megcsókolják egymást.
                </p>
                <p>
                    Amikor semmilyen komoly orvosi indikáció nem teszi szükségessé a mesterséges oxytocin alkalmazását, mennyire más lenne ilyen módon serkenteni e hormon működését…
                </p>
                <p>
                    A válaszom a leveledben feltett kérdésre tehát az, hogy oxytocin nélkül nem lehet szülni, de mind a hatásában, mind az élmény szempontjából jelentős különbség van aszerint, hogy egy nő a saját hormonjaival vagy mesterségesen adott oxytocinnal szül.
                </p>
                <p>
                    Szívből kívánom, hogy Te is megtapasztalhasd, milyen csodálatosan segít Neked majd a tested bölcsessége, amikor világra hozod a babád.
                </p>
                <p>Emőke</p>

                <p>
                    <a href="https://nlc.hu/baba/20090707/lehet-e_oxytocin_nelkul_szulni/">https://nlc.hu/baba/20090707/lehet-e_oxytocin_nelkul_szulni/</a>
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
