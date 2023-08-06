import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public03Pic1 from "../../../image/publications/public-03-hero-csaszarmetszes-utan.png";
import Public03Pic2 from "../../../image/publications/public-03-csaszarmetszes-utan.jpg";

export default function Public03() {
    return (
        <div>
           <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public03Pic1} alt="csaszarmetszes-utan"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Császármetszés után</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. január 19.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                      <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public03Pic2} alt="csaszarmetszes-utan"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>"Három évvel ezelőtt született meg az első gyermekem, sajnos császármetszéssel. Az orvosom a kiírt időpont után két nappal úgy döntött, hogy nem vár tovább, elindítja a szülést, bár én is, a kisfiam is jól voltunk. Akkor én ez ellen nem tiltakoztam, egyrészt, mert megbíztam benne, másrészt mert nem tájékoztatott senki a szülésindítás esetleges következményeiről.<br/>
                                A szülésemet reggel indították, de mivel a többfajta beavatkozás és az oxitocin ellenére sem tágultam eléggé, az orvosom késő este a császármetszés mellett döntött.<br/>
                                Azóta is sokat gondolkodom a történteken. Nem hagy nyugodni az a gondolat, hogy ennek nem kellett volna így történni. Talán, ha tovább hagynak, ha engedik, hogy a folyamat magától induljon el, nem ez lett volna az útja a kisfiamnak.<br/>
                                Most újra kisbabát várok, és bár tudom, hogy egy előzetes műtét után kisebbek az esélyeim a hüvelyi szülésre, mégis szeretném, ha a második gyermekem természetes úton születne.<br/>
                                <br/>Emőke! Tudnál tanácsot adni abban, hogy mit tehetnék, hogy ez sikerüljön?<br/>
                                <br/>Válaszodat előre is köszönöm.<br/>Era
                            </i>
                        </blockquote> 
                        
                            
                    </div>
                </div>
                <p>
                    <b>Kedves Era!</b>
                </p>
                <p>
                    Úgy gondolom, hogy a szülészorvosok egyik legnagyobb felelősséggel járó döntése az, hogy milyen úton segítik világra adott helyzetben a kisbabát. Nyilvánvaló, hogy egy ilyen döntést az előnyök, hátrányok és a kockázati tényezők körültekintő mérlegelése után szabad csak meghozni.
                </p>
                <p>
                    Természetesen a döntés középpontjában az áll, hogy mi szolgálja leginkább az anya és a baba biztonságát, de a császármetszések világszerte ugrásszerűen emelkedő száma azt is sejteti, hogy talán valami másról is szó van. Sok oka van annak, hogy manapság egyre több a műtéti úton világra segített kisbaba – ez egy külön írást is megérdemelne -, de szakmai fórumokon többször az az érv is elhangzik az orvosok szájából, hogy az ő biztonságérzetük (pontosabban a műhibaperektől való félelmük) sem az utolsó szempont.
                </p>
                <p>
                    Az azonban nagyon jó, hogy a régi elv, mely szerint „ha az első császár, utána mindig császár”, már nem minden esetben, mindenkinél, mindenhol igaz. Magam is többször kísérhettem császármetszés után sikeres hüvelyi szülést, és mindannyiszor azt tapasztaltam, hogy ennek jelentősége messze túl mutat a pillanat örömén. Nem csak azért, mert a kisbaba természetes úton születik meg, hanem azért is, mert ez az élmény gyógyítja az előző szülés élményét is. A honlapomon több olyan írást is olvashatsz anyáktól, akik megtapasztalhatták ennek a gyógyító erejét. (Születésnapi levél, Császár után természetesen, Hosszú út, Barnus születése)
                </p>
                <p>
                    Mivel nem vagyok orvos, ezért nem írok a császármetszés szakmai kérdéseiről és indikációiról, valamint arról sem, hogy mely esetekben indokolt és elkerülhetetlen az újbóli császármetszés, de néhány szempontot azért megemlítenék.
                </p>
                <p>
                    Az előzetes császármetszés utáni hüvelyi szülésre akkor van leginkább esély, ha a szülés spontán indul el. Gyorsítani kockázatos, és minden beavatkozás – ez egyébként minden szülésre igaz – csak csökkenti az esélyeket. Egyes orvosok fontosnak tartják azt, hogy a két szülés között legalább két év teljen el, de voltam olyan szülésnél is, ahol ez csak másfél év volt, mégsem tekintette ezt különösebb kockázatnak az előzetes tervezés során az orvos, és nem is jelentett a szülés során sem semmiféle gondot. Vannak, akik megmérik a heg vastagságát a várandósság idején, mások szerint ez nem mérvadó, ha az anya nem érez szúró, éles fájdalmat a vajúdás alatt, akkor engedik a hüvelyi szülést. Érdemes tehát az orvosoddal megbeszélni, hogy ő milyen feltételek megléte mellett látja biztonságosnak a természetes szülést, de ha ezt nem éreznéd teljesnek, akkor arról is tájékozódni, hogy esetleg más orvosnál máshol vannak-e ebben a kérdésben a határok. Arra azonban mindenképpen számítanod kell, hogy az előzetes császármetszés után a következő szülés már magasabb rizikójúnak számít, ezért nagyobb odafigyelést igényel.
                </p>
                <p>
                    Mi az, amivel te is növelheted az esélyeidet ?
                </p>
                <p>
                    Az első és legfontosabb szerintem az, hogy tisztában legyél és értsd, mi miért történt az előző szülésednél. Ennek megértésében jó esetben az orvosod is sokat tud segíteni, ha nem rendült meg azóta a bizalmad iránta. A szülésélmény feldolgozása alapvető fontosságú, hiszen ezáltal értheted meg az akkori döntés létjogosultságát és azt, hogy a következő várandósságod mennyiben teremt új helyzetet.
                </p>
                <p>
                    Míg egyesek nem élik meg traumatikusan azt, hogy a szülésük tervezetten vagy váratlanul császármetszéssel végződött, másoknak komoly munkát jelenthet a történtek elfogadása. Számukra az élmény feldolgozásához szükség lehet egy jó dúla vagy adott esetben akár pszichológus segítségére is.
                </p>
                <p>
                    Ha úgy érzed, hogy jót tenne Neked is, ha szakemberhez fordulnál, akkor készülj fel arra, hogy felszínre kerülhetnek majd a fizikai sík mellett olyan a lelki tényezők is, amelyek akadályozhatják, hogy a szülés természetes úton menjen végig. A félelem, a szorongás vagy más lelki gátak oldása nagy segítség lehet, érdemes bátran szembenézni ezzel.
                </p>
                <p>
                    Ezzel összefüggésben nagyon fontos az is, hogy biztonságban érezd magadat. Olyan kórházat és olyan segítőket kell választanod, akikben maximálisan meg tudsz bízni, azaz biztos lehetsz abban, hogy – ki-ki a kompetenciájának megfelelően – a legjobb tudása szerint fog támogatni. Ez igaz kell hogy legyen az orvosra, a szülésznőre és – ha választasz – a dúládra is.
                </p>
                <p>
                    A dúla érzelmi és fizikai támogatása komoly segítséget jelenthet nem csak a te, hanem a párod számára is, de önmagában az, hogy az előző szülésednél nem volt dúlád, most pedig lesz, önmagában még nem garancia a sikerre. Ugyanakkor rengeteget tehet érted már a felkészülés időszakában is azzal, hogy információkat nyújt, és segít az elképzeléseid megfogalmazásában, ezzel is erősítve a tested működésébe és az önmagadba vetett hitet. A vajúdásnál és a kitolási szakban pedig különösen nagy jelentősége lehet az általa nyújtott érzelmi támogatásnak a nehezebb pillanatokban.
                </p>
                <p>
                    Érdemes elgondolkodnod azon, hogy visszamész-e ugyanabba a kórházba, ugyanahhoz az orvoshoz, akivel előzőleg szültél. Ha úgy döntenél, hogy igen, akkor lehetőség szerint kerüld a hasonlóságokat az előző szüléseddel, például ne pont ugyanabba a szülőszobába menj, ahol a múltkor is vajúdtál!
                </p>
                <p>
                    Az előző szülésre emlékeztető körülmények felidéződése ugyanis szorongást kelthet az anyában és ez pedig gátolhatja a vajúdást. Ha a kísérők kellő érzékenységgel figyelik az anyát, akkor segíteni tudnak ennek oldásában, és emlékeztethetik arra, hogy ez most egy másik, új történet.
                </p>
                <p>
                    Mindezek ellenére előfordulhat, hogy valamilyen okból esetleg mégsem sikerül egy anyának hüvelyi úton megszülnie a gyermekét. Úgy gondolom, hogy a helyzet elfogadását megkönnyíti, hogyha tudja, hogy mindent megtett azért, hogy ez ne ismétlődjön meg, ugyanakkor nem zárta ki a gondolataiból az újbóli császármetszés lehetőségét sem. Ez esetben érdemes megbeszélni a szülésnél jelen levőkkel azt, hogy mit lehet tenni azért, hogy a körülmények és a bánásmód anyának is, babának is a leghumánusabb legyen.
                </p>
                <p>
                    Kedves Era!
                </p>
                <p>
                    Nagyon szeretném, ha minél több anya átélhetné a természetes szülés örömét. Szívből kívánom hát mindkettőtöknek, hogy teljesüljön a vágyad, de fontosnak érzem, hogy tudd, nem ezen múlik, hogy a kisbabádnak milyen anyukája leszel.
                </p>
                <p>
                    Emőke
                </p>

                <p>
                     <a href="https://nlc.hu/baba/20100119/csaszarmetszes_utan_-_a_dula_valaszol/">https://nlc.hu/baba/20100119/csaszarmetszes_utan_-_a_dula_valaszol/</a>
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
