import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public42Pic1 from "../../../image/publications/public-42-hero-csaszarmetszes-utan-ujra-szulni.png";
import Public42Pic2 from "../../../image/publications/public-42-csaszarmetszes-utan-ujra-szulni.jpg";

export default function Public42() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public42Pic1} alt="csaszarmetszes-utan-ujra-szulni"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Császármetszés után újra szülni</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. július 15.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/publications3" class="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public42Pic2} alt="csaszarmetszes-utan-ujra-szulni"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>Két kislányt szültem császármetszéssel.<br/>
                                Az elsőt 2000-ben, 12 órás vajúdás után. Indított szülés volt, és bár mindent megpróbált az orvosom, nem tágultam egy icike-picikét sem. Már nehezen bírtam a kétperces fájásokat, és a doktor szerint, ha ki is tágultam volna még egy nap alatt, nem lett volna erőm. Nem tudom. Nagyon bánom. Nem így szerettem volna. Valószínűleg talán lelki okai lehettek, de ez most már mindegy is.<br/>
                                A másik baba rá két évre született, ekkor nagyon készültem a természetes szülésre, és a doktorom is benne volt. Sajnos, az utolsó hónapban valami lepényprobléma lépett fel, nem nőtt a baba, romlott a keringése stb., így aztán a doktorom ragaszkodott a programozott császárhoz, mondván, a baba kicsi lesz, nem tudni, mennyire erős…<br/>
                                </i>
                        </blockquote>
                        
      
                    </div>
                </div>
                <blockquote>
                    <i>Most, hat év múltán kezdek gondolkodni egy következő babán. Nem idén, talán jövőre vagy utána jöhetne. Viszont a nőgyógyászom (azóta költözés miatt váltottam) hallani sem akar a hüvelyi szülésről. Azt mondta, hogy nincs olyan épelméjű orvos, aki ezt vállalná, ne is keressek.<br/>
                        <br/>Emőke! Valóban így van? Nincs értelme keresni? Bele kell nyugodnom? Az, hogy azóta ennyi év eltelt, nem számít semmit?<br/>
                        <br/>Válaszodat várva, köszönettel:<br/>Virág</i>
                </blockquote>
                <p>
                    <b>Kedves Virág!</b>
                </p>
                <p>
                    A császármetszések száma Magyarországon – csakúgy mint a világ számos országában – az elmúlt években ugrásszerűen emelkedett. Ennek számos oka van. Az egyik az, hogy terjedőben van az a szakmai szemlélet, mely szerint már nemcsak akkor döntenek az orvosok a szülés műtéti úton való befejezése mellett, ha kialakult a vészhelyzet, hanem megelőzésképpen is. Az orvosok, tartva a műhibaperektől és a jogi következményektől, valamint egyre többször a szülőnő kérésének eleget téve, olykor valós szakmai indokok nélkül is elvégeznek műtéteket.
                </p>
                <p>
                    Az okok között természetesen az is szerepel, hogy az először szülő nőkön végzett műtét után már 50%-os a valószínűsége az újabb műtétes szülésnek.
                </p>
                <p>
                    Vajon indokolt-e ez a magas szám? Biztos-e, hogy helytálló az „egyszer császár, mindig császár” elv?
                </p>
                <p>
                    A császármetszés utáni hüvelyi szülés (angol nyelvhasználatban „vaginal birth after cesaren”, azaz VBAC) biztonságosságát több összehasonlító elemzés vizsgálja. Az elmúlt években a VBAC mellett és ellene is számos írás jelent meg, így nincs könnyű dolga ma annak a szülés előtt álló nőnek, aki egyértelmű és meggyőző érveket szeretne olvasni e témában.

                    <br/>Az általam fellelt irodalom végigböngészése és egy szülész-nőgyógyász orvossal folytatott tájékozódó beszélgetésem után összefoglalom neked, amit sikerült megtudnom arról, hogy milyen esélyeid lehetnek ma Magyarországon arra, hogy két császármetszés után hüvelyi úton szülj.

                    <br/>A császármetszés utáni hüvelyi szülés legnagyobb kockázata az ún. méhrepedés, amely az előző műtéti heg szétválását jelenti. A legtöbb vizsgálat azt kutatja, hogy ennek mekkora a valószínűsége, és milyen óvintézkedésekkel lehet ezt a kockázatot kivédeni.
                </p>
                <p>
                    Egy izraeli szakfolyóiratban megjelent tanulmány arról számol be, hogy egy, a vizsgálatban szereplő egyetemi kórház adatai szerint a méhrepedés veszélye drasztikusan csökkent abban az esetben, ha a nőnek már volt hüvelyi szülése császármetszés után. A kockázat tehát az első, császármetszés utáni hüvelyi szülés esetében a legnagyobb, és jelentősen csökken a további hüvelyi szülésekkel.

                    <br/>A hüvelyi szülés sikeressége függ a szülőnő szülészeti múltjától is, valamint attól, hogy mi okozta az előző császármetszést.

                    <br/>Ha a műtéti metszés iránya keresztirányú és a méhnyak közelében fekvő, ha a császármetszés óta eltelt legalább két év, illetve ha nem áll ismétlődő ok a háttérben, akkor jó esély van a hüvelyi szülésre. A siker érdekében kerülni kell a gyógyszeres fájáserősítést – azaz az oxitocin alkalmazását – és az eszközös beavatkozásokat (például fogó használata).
                </p>
                <p>
                    Magyarországon előzetes császármetszés utáni hüvelyi szülést több esetben is kísértem, s bár ez még nem általános, örömmel tapasztalom, hogy vannak olyan orvosok, akik megfelelő körültekintés mellett lehetőséget biztosítanak az anyáknak arra, hogy átélhessék a hüvelyi szülés élményét. Arra is tudok példát, hogy valaki két császármetszés után szült hüvelyi úton, de ezek az esetek nálunk még szórványosak.
                </p>
                <p>
                    Ina May Gaskin – a világ egyik legismertebb, Amerikában élő hivatásos bábája – közel húsz éve kísér császármetszés utáni hüvelyi szüléseket. Az ő praxisában az anyák 98%-a sikeresen hozta világra a gyermekét hüvelyi úton. 115 esetből mindössze kétszer kellett az anyát kórházba vinni, mivel fenyegető hegszétválásra gyanakodtak. Mindkét anya császármetszéssel hozta a világra a gyermekét, méhrepedés nélkül.
                </p>
                <p>
                    Az összes többi szülés a Farm Bábaközpontban, illetve otthon zajlott, tehát nem kórházban. Kórházon belüli gondozást csak abban az esetben tartanak indokoltnak, ha a méhlepény rajta fekszik a seben, ha az anyának már három vagy több császármetszése volt (kivéve, ha ezek után már szült hüvelyi úton), illetve azoknál, akiknél korábban hosszanti metszést alkalmaztak (kivéve, ha azóta már szült hüvelyi úton).
                </p>
                <p>
                    Ina May Útmutató szüléshez című könyvében megemlít egy olyan kórházban zajló szülést is, ahol az anyának előzőleg négy (!) császármetszése volt.
                </p>
                <p>
                    Magyarországon nemrégiben a független bábák adtak ki egy szakmai állásfoglalást az otthon szülést szabályozó minisztériumi rendeletről, melyben a VBAC-vel kapcsolatban a következő szerepel:
                </p>
                <p>
                    „A császármetszést követő hüvelyi szülés (VBAC), amennyiben a műtét alsó transversalis metszéssel történt, az ismételt császármetszésnél biztonságosabb módszer. Számos szakirodalom tanúsága szerint az első VBAC a »nagyon alacsony kockázati kategóriába« tartozik.
                    <br/>A hegszétválás és a méhrepedés azok a szövődmények, amelyek miatt egyes szakemberek aggályosnak tartják a VBAC-t, illetve a császármetszés utáni otthon szülést. A hegszétválás kockázata azonban bizonyos egyéb tényezőktől függően lehet rendkívül alacsony, és ezért az otthon szülés szempontjából is elfogadható, más tényezők jelenlétében viszont elfogadhatatlanul magas. Javasoljuk, hogy az előzetes császármetszés ezen tényezők figyelembevételével, több típusra bontva kerüljön a szabályozásba, egyes típusok a relatív kontraindikációk közé, mások a kizáró tényezők közé.
                </p>
                <p>
                    <b>Javaslatunk szerint kerüljenek a relatív kontraindikációk közé az alábbiak:</b>
                </p>
            
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">lőzetes császármetszés, ha az anyának a császármetszés óta már volt egy sikeres hüvelyi szülése.</li>
                    <li class="blog-globale-has-before">Evidencia: ha a nőnek már volt hüvelyi szülése császármetszés után, a méhrepedés kockázata drámai mértékben csökken.</li>
                    <li class="blog-globale-has-before">Előzetes császármetszés, ha semmilyen más komplikáció vagy relatív kontraindikáció nem áll fenn.</li>
                    
                </ul>

                <p>
                    <b>A kizáró tényezők közé sorolandók:</b>
                </p>
                <ul class="blog-globale-list">
                    <li class="blog-globale-has-before">Előzetes császármetszés, ha a méhtesten ezenkívül más műtétet is végeztek.</li>
                    <li class="blog-globale-has-before">Előzetes császármetszés, ha a műtét nem alsó transversalis metszéssel történt.</li>
                    <li class="blog-globale-has-before">Előzetes császármetszés és bármely olyan állapot, amely valószínűsíti az ismételt császármetszés szükségességét (például valódi téraránytalanság, fekvési rendellenesség).</li>
                    <li class="blog-globale-has-before">Előzetes császármetszés, ha a méhlepény a hegnél tapad.</li>
                    
                </ul>
                <p>
                    VBAC során elengedhetetlen a magzati szívhangok gyakoribb ellenőrzése, valamint a gyakoribb pulzus- és vérnyomásmérés mind a vajúdás alatt, mind a szülés után. VBAC esetében otthoni környezetben (is) tilos a vajúdás bármilyen eszközzel történő megindítása és mindenféle fájáserősítő módszer alkalmazása, még az enyhe hatásúaké (gyógynövények, akupresszúra stb.) is. Számos kutatás mutat rá arra, hogy a hegszétválásos esetek nagy többsége otthoni környezetben sosem használt fájáskeltő szerek (prosztaglandin-esztradiol, oxitocin), illetve eszközös szülésbefejezés mellett következett be.”
                </p>
                <p>
                    A fentiek tehát azt igazolják, hogy léteznek olyan épelméjű orvosok és bábák, akik gondos körültekintéssel és felelősségérzettel vállalják előzetes császármetszés után is a hüvelyi szülés kísérését, még akár otthon is.
                </p>
                <p>
                    Szívből kívánom, hogy találj olyan szakembert, aki mérlegelve a te előtörténetedet, a legnagyobb biztonságot és a legjobb élményt nyújtja majd a harmadik gyermeked születésénél.
                </p>


                <p>
                    <a href="https://nlc.hu/baba/20080715/csaszarmetszes_utan_ujra_szulni/">https://nlc.hu/baba/20080715/csaszarmetszes_utan_ujra_szulni/</a>
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
