import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public14Pic1 from "../../../image/publications/public-14-hero-kie-a-kisbaba-otthon.png";
import Public14Pic2 from "../../../image/publications/public-14-kie-a-kisbaba-otthon.jpg";

export default function Public14() {
    return (
        <div>
           <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public14Pic1} alt="kie a kisbaba otthon"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Kié a kisbaba otthon?</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. szeptember 01.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public14Pic2} alt="kie a kisbaba otthon"/>
                    </div>
                    <div className="blog-globale-text">
                        <blockquote>
                            <b><i>Kedves Emőke!</i></b>
                        </blockquote>
                        <br/>
                        <blockquote>
                            <i>"Először is köszönöm, hogy kérdésekkel fordulhatok hozzád. Most vagyok 28 hetes kismama, és úgy érzem, egyre gyakrabban foglalkoztat a szülés és az utána következő időszak.<br/>
                                Két éve párommal még az anyósoméknál laktunk, de most már külön élünk. Annak ellenére, hogy már nem a szülőknél élünk (akiket egyébként nagyon szeretek), úgy érzem, hogy mindenbe bele akarnak szólni a babát illetően, és ettől – bár talán nem kellene – tele vagyok félelmekkel.</i>
                        </blockquote>
      
                    </div>
                </div>
                <blockquote>
                    <i>Kié a kisbaba otthon? Elmesélek egy konkrét példát: a párommal együtt úgy gondoljuk, hogy a gyereket hordozóban szeretnénk majd hordozni, és amíg ülni nem tud, nem szeretnénk babakocsit használni. Anyósomék kijelentették, hogy ők mindenképp vesznek babakocsit, mert ha nem, akkor hogy fogják sétáltatni a gyereket karácsonykor. A babóca elvileg október utolsó napjaiban fog születni.<br/>
                        Nos, most jönnek a félelmeim, amit nem tudom, hogy én túlzok-e el? Én most úgy érzem, hogy decemberben a babát nem szeretném másra bízni és fél napig a nagyszülőknél hagyni (mert ilyenek is elhangzanak, hogy majd naphosszat úgyis ott lesz a baba).<br/>
                        Nem arról van szó, hogy nem akarom egy idegen karjaiba adni egy hónaposan, mert pontosan azt gondolom, hogy nem kell túlfélteni a gyermekeket, de fél napra semmiképp nem akarom másra bízni még ilyen picin.<br/>
                        <br/>A másik gondom az, hogy nekünk a párommal vannak elveink a nevelést illetően, ami nem azt jelent, hogy nem akarok semmilyen tanácsot meghallgatni és átgondolni, de félek, hogy ők majd mindig jobban fogják tudni, mi a jó. Őszintén rettegek a konfliktushelyzetektől, hogy majd ebből viták lesznek. Az előbb említett babakocsi témában a párom kijelentette, hogy mi nem fogjuk használni és kész, ők meg azt, hogy úgyis megveszik. A párommal amúgy mindenben egyetértünk, és ő mindig nyugtat, hogy ne féljek előre, mert úgyis úgy fogjuk csinálni, ahogyan mi akarjuk, de nekem ez nem megy ilyen könnyen.<br/>
                        <br/>Kedves Emőke! Te mit gondolsz erről?<br/>Szeretettel üdvözöllek:Nóra</i>
                </blockquote>
                <p>
                    <b>Kedves Nóra!</b>
                </p>
                <p>
                    A legutóbb írt cikkem arról szólt, hogy a szülészeteken olykor milyen nehéz egy anyának kompetensnek maradni a saját gyermeke ellátásával kapcsolatos kérdésekben az ottani sokszor értelmetlen rutin miatt. A Te leveled elolvasása után ismét ugyanaz a kérdés jutott eszembe, hogy Kié a kisbaba – otthon?
                </p>
                <p>
                    A várandósság kilenc hónapja lélektanilag is fontos időszak a leendő anya és apa életében. A természet nagyon bölcsen hagy időt arra, hogy míg a magzat kifejlődik, számos gondolatot és érzést megfogalmazhassanak és megbeszélhessenek a szülők.  
                </p>
                <p>
                    Szinte minden leendő szülőben felvetődik a kérdés: vajon jó anyja/apja leszek-e a gyermekemnek? Vajon tudok-e olyan jó szülő lenni, mint az anyám/apám, vagy talán éppen ellenkezőleg: ugye, nem olyan leszek, mint az anyám/apám? Számba veszik, hogy mit kaptak otthonról, mely értékek azok, amelyeket majd tovább szeretnének közvetíteni, és melyek azok a cselekvési minták, amelyeket nem.
                </p>
                <p>
                    Emellett a tágabb család életére is nagy hatással van egy érkező gyermek, hiszen a szerepek megváltoznak. A szülőkből nagyszülők lesznek, ezzel egyidejűleg pedig el kell tudni fogadniuk, hogy a gyermekük közben szülővé érik.<br/>
                    Azt hiszem, nagyszülővé válni sem könnyű feladat. Ez egy új életszakasz kezdete, amit vannak, akik könnyebben, és vannak, akik nehezebben élnek meg.
                </p>
                <p>
                    Természetes, hogy a kisbabát – még ha együtt is él a két generáció – a szülei nevelik és gondozzák úgy, ahogy ők azt jónak látják. A nagyszülőknek tiszteletben kell tartaniuk, ha a fiatal szülők némely kérdésben másként gondolkodnak és más elvek szerint nevelik a gyermeküket, mint ahogy azt ők tennék. A tapasztalatuk, a tanácsuk azonban fontos segítség lehet, érdemes megfontolni hát mindazt, amit vélhetően jószándékkal javasolnak.
                </p>
                <p>
                    Kezdetben talán nem mindig könnyű úgy beletalálni az új szerepekbe, hogy ne legyen belőle megbántódás, de szeretetteljes, ugyanakkor következetes kommunikációval komolyabb sérülések nélkül ez is megoldható.
                </p>
                <p>
                    Igazad van abban, hogy a kisbaba az első évében leginkább a szüleire vágyik, és általában hosszabb időt nem szeret az anyukája nélkül tölteni, különösen nem abban az időszakban, amikor még csak kizárólag anyatejet kap. Ha igény szerint szophat – ami számára a legelőnyösebb – , akkor pedig a csecsemő még inkább igényli a mamája közelségét, hiszen a jelzéseire reagálva az anya tudja őt megetetni bármikor.

                </p>
                <p>
                    A babakocsi kérdésében szerintem könnyen egyezségre lehet jutni. Én arra gondoltam amikor a leveledet olvastam, hogy talán az anyósodék azért szeretnének babakocsit venni, mert számukra megterhelő és nehéz lenne a babát a karjukban vagy akár kendőben hordozni. Ha erről van szó, és ezt belátod, akkor vélhetőleg nem lesz ellenedre, hogy ők így sétáltathassák az unokájukat. Jól felöltöztetve, betakarva nem fog megfázni, és talán Ti is örülni fogtok annak az egy-két órának, amit ilyenkor együtt tölthettek a pároddal.
                </p>
                <p>
                    Remélem, sikerül komolyabb súrlódások nélkül megbeszélnetek és elfogadtatni a nagyszülőkkel az elképzeléseiteket. Az, hogy Ti ketten a férjeddel egyetértetek a nevelési kérdésekben, és nem utolsósorban az, hogy szereted az anyósodékat, nagyon jó alap ehhez.
                </p>
                <p>
                    Nyugodt, félelmektől mentes várandósságot kívánok!
                </p>
                <p>Emőke</p>

                <p>
                    <a href="https://nlc.hu/baba/20090901/kie_a_kisbaba_otthon/">https://nlc.hu/baba/20090901/kie_a_kisbaba_otthon/</a>
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
