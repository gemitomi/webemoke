import React , { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth05Pic1 from "../../../image/szulestort/szules_story_05_hero_tokeletes.jpg";
import Birth05Pic2 from "../../../image/szulestort/szules_story_05_tökéletes.png";

export default function BirthStory05() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
          <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth05Pic1} alt="Tokeletes!"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Tökéletes!</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2016. november 07.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                       <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth05Pic2} alt="Tokeletes"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Már nagyon vártam. Elmúlt az a bizonyos kiírt nap. “Ő nem ismeri a naptárat, ő érzi, hogy mikor kell kijönni” mondogattam magamban kedvenc dúlám szavait, és próbáltam elengedni félelmeimet és Őt.
                        </p>
                        <p>
                            Tényleg tudta,mikor van itt az idő, szülinapi ajándéknak szánta magát, Édesapja számára. Már nagyon készült, hisz a Doktor úr érezte a kis fejét, már beilleszkedett előző nap.
                        </p>
                    </div>
                </div>

                <p>
                    Éjfélkor megébredtem, félálomban boldog szülinapot kívántam Szerelmemnek, majd próbáltam aludni tovább. De a kis Babónk mocorogni kezdett…
                </p>
                <p>
                    <i>“Ez lehet, hogy egy fájás?”</i> Gondolkodtam hangosan.
                </p>
                <p>
                    <i>“Lehet,de még aludjunk!” </i>– hangzott a szülinapos párom álmos, nyugodt válasza.
                </p>
                <p>
                    Gondoltam, igaz, éjfél van, aludjunk! De negyed óra múlva megint, aztán megint. Mire elaludtunk jött a fájás újra és újra.
                </p>
                <p>
                    <i>“Kezdődik, meg fog születni a kislányunk!” </i>– csak összebújtunk és mosolyogtunk. Meg-fog-szü-let-ni. Ma. Most. Már jön…
                </p>
                <p>
                    Kb. 2 óra telt el így: aludtunk is, meg nem is, készülődött a kis csöppségünk, készülődött a testem, készülődött a lelkünk. Nem engedtük el egymást, összebújva készültünk.
                </p>
                <p>
                    Mikor kicsit erősebben szólt Babócánk, hogy “Hahó, jövök!” éreztem, jöhet a következő lépés: hívjuk Emőkét, a dúlámat és Ágit, a szülésznőmet. Teljes nyugalom, békés hangok:<i>” Ahogy nektek jó, amit szeretnél…”</i>
                </p>
                <p>
                    Otthon maradtunk. Zuhanyoztam, eresztettem a pocakomra a kellemes langyos vizet, és beszélgettünk, testtel, lélekkel. Összebújtunk, csókolóztunk,sokat, sokat…majd ünnepeltünk. Hajnali négykor. Szülinapot. Szülés közben, születésnapot ünnepeltünk. Közben néha összeszorítottam a szemem, meg a Szerelmem kezét, mert a testem követelt, Boglárkánk mozgott, a testem dolgozott.
                </p>
                <p>
                    Reggel fél 6. Menjünk! Menni kell, úgy érzem. Emőke indul, Ági a kórházban vár. Öltözök, de közben szem becsuk, koncentrál…fogmosás, de megint: szem becsuk, koncentrál. Iratok, telefon, minden megvan? – közben szem becsuk…Vehetjük a cipőt, szem becsuk, koncentrál… Jön a lift, szem becsuk…Ülünk az autóba, de hogyan? Sehogy nem jó, szem becsuk, koncentrál, koncentrál…
                </p>
                <p>
                    Megérkeztünk. Ct. <i>“Tökéletes”</i> Ma is hallom Ági finom, nyugodt hangját.
                </p>
                <p>
                    Kb 7 óra: Lelassult minden. Sétálunk a kórház parkjában. Emőke és mi hárman. Néha megállunk, bújúnk, szem becsuk, koncentrál…Nevetünk, beszélgetünk. Békésen.
                </p>
                <p>
                    Mikor visszatérünk a szülőszobára, még nincs üres szoba. Várunk. Közben egyre jobban követel a testem, készül a gyermekem, lelkem. Nem jó ülve, állok, koncentrálok. Levegőt veszek, és érzek. Mindent érzek. Ők meg ott vannak velem. Testtel, lélekkel.
                </p>
                <p>
                    Bejutottunk. Folyik a víz, készül a fürdő. Vetkőzök. Már nem tudom, hány óra. Már nem érdekel.
                </p>
                <p>
                    Víz, nyugalom, illatok, nyugalom, zene, érintés, csók, simogatás, masszás, halk szavak, mosoly, csók, csók, csók és koncentrálás. Belülre. Testemre, lelkemre, az Ő testére, az Ő lelkére. És közben simogat a Szerelmem.
                </p>
                <p>
                    <i>“Tökéletes”</i> súgja Ági, mikor meghallgatja Babócánk szívverését. Mosolygunk mindannyian. Emőke, Ági, Szerelmem és én. Összemosolygunk, hisz ott van a levegőben, hogy minden tökèletes.
                </p>
                <p>
                    Nyugalom. Óriási nyugalom. Nem kell már a víz. Sétálok, majd támaszkodok, egyre jobban kell koncentrálnom, hogy jó Neki, hogy jó nekünk. Egyre erősebb…sűrűbben…jön, jön…
                </p>
                <p>
                    Táncolunk. Hárman. Apa, Anya és gyermekük. Segít a gravitáció. Ringatózunk, majd megpihenünk. De le nem ülünk. Emőke segìt. Varázsol a hasammal. Melegít, hordja a borogatást, Szerelmem tartja, én meg ringatózok a babámmal. Táncolunk és úszunk. Ők meg ott vannak velünk, Szerelmem és Emőke.
                </p>
                <p>
                    Aztán megint Ági szavai: <i>“Tökéletes”</i>. A babánk szívverése végig tökéletes. Mosolygunk.
                </p>
                <p>
                    Azóta sem tudom hány óra. Burkot kell repeszteni. Nem gondolkodok, nem tudok, nem itt vagyok. Szerelmemre nézek: mosolyog és bólint.” Akkor jó”- gondolom- “repesszünk burkot”!
                </p>
                <p>
                    Ági segít, finoman, kedvesen <i>“ahogy neked jó”</i> mindig mondja. Mint egy zuhatag, zúdúl ki a magzatvíz. Ági kinyitotta a kaput. Most már jöhet. Jön!
                </p>
                <p>
                    Most fáj. Nyomni kell. Fáj, nyomok. Szerelmem mögöttem, ölel, szorítom a kezét, mert fáj. <i>“Nagyon jó!Szuper!”</i> Hallom Ági hangját. Most látom: már itt a Doktor úr. Mindenki itt van. A lelkemnek nyugalom van, a testem és gyermekem dolgozik. Fáj, nyomni kell. “Itt a feje, a haja” -szól Ági. “Látom” – Szerelmem izgatott, meghatódott, nyugodt, mosolygós hangja mosolyt csal az én arcomra is. “Már itt van…” gondolom, de nincs is idő, nyomni kell, erősen, nagyon, fájdalmasan, minden erőt bevetve. Szerelmem kezét szorítom, Ági és Emőke lábamat fogja, még, még, nagyon fáj, erősen…és kibújt a feje…
                </p>
                <p>
                    Még egyet nyomok, de már nem kell. <i>“Nagyon jó! Már nem kell nyomni, már ki tud jönni egyedül.”</i>
                </p>
                <p>
                    De nekem nyomnom kell, nyomok, de szólnak: <i>“Csak lélegezz!”</i> De nekem nyomnom kell. Megszólal  a Doktor úr: <i>“Nem kell nyomni! Csak lélegezzen!” </i>és mutatja, hogyan. Velem lélegzik a Doktor úr, velem lélegzik mindenki: be-ki, be-ki….Ági, Emőke a Doktor úr és a Szerelmem. Együtt, mindenki. Így nekem is sikerül. Meg Neki is… kibújt, és hopp, már ott van a testemen.
                </p>
                <p>
                    Már érzem apró testét. Látom. Takarom, érintem, ölelem, puszilom, szólítom, szeretem. Ő meg bújik, megnyugszik, pislog, szeret. Szerelmem meg ölel, könnyezik puszil és szeret.
                </p>
                <p>
                    12:19. Most tudom hány óra. Mindenki mosolyog. Együtt, velünk.
                </p>
                <p>
                    <b>Megérkezett. Boldog Születésnapot Szerelmem! Boldog Születésnapot Apa! Boldog Születésnapot Boglárka!</b>
                </p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to="/stories">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
        </div>
      )
}
