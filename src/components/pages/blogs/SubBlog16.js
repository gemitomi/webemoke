import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog16Pic1 from "../../../image/blog/blog_16_hero_pozitiv_uzenetek_szerepe_1.png";
import Blog16Pic2 from "../../../image/blog/blog_16_pozitiv_uzenetek_szerepe.png";

export default function SubBlog16() {
  return (
    
    <div>
      <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog16Pic1} alt="A pozitiv uzenetek szerepe a szulesnel - 2."/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A pozitív üzenetek szerepe a szülésnél - 2.</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2013. március 04.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/blog" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog16Pic2} alt="A pozitiv uzenetek szerepe a szulesnel - 2."/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <i>–  Azért elég embert próbáló helyzetnek tűnik, amikor nem csak a vajúdót kell támogatni lelkileg, hanem a személyzetet is.</i>
                        </p>
                        <p>
                            –   Nagyon nehéz terep az egészségügy, ugyanakkor óriási jelentősége van annak, hogy a szülőszobán jelen lévők milyen viszonyban vannak egymással. Csak akkor lehet támogató a szülő nőt körül vevő erőtér, ha a benne lévők kölcsönösen tisztelik és elfogadják egymást. A dúla viszonylag új szereplő a szülészeteken és amíg nem ismerik, nem tudják pontosan, hogy mi a feladata, miben segíthet, nehezen fogadják el a jelenlétét.
                        </p>

                    </div>
                </div>

                <p>
                    A jó dúla megpróbálja a szülő nő érdekeit, elképzeléseit képviselni, de nem hoz az anya helyett döntéseket és a szüléskor sem befolyásolja őt az egészségügyi személyzet véleményével ellentétesen, még akkor sem, ha azzal magában nem ért egyet. A feszültség megengedhetetlen a szülőszobán, mert amellett, hogy méltatlan a helyzethez, megnehezítheti, gátolja a vajúdás előrehaladását. Úgy látom, hogy az orvosképzésben sajnos még nem fektetnek elég nagy hangsúlyt arra, hogy tudatosítsák, a kimondott szavaknak mekkora ereje van. Gyakran elhangzanak ilyen mondatok az anya felé a vajúdás alatt: „Á, ezek nem jó fájások!” „Ez még nagyon az eleje.” „Az ilyen renyhe fájásoknak nincs semmi értelme, csak kifárad tőle, de nem halad sehová.” stb. – ezek mind-mind azt az üzenetet hordozzák, hogy a vajúdó teste nem jól működik, vagy hogy alkalmatlan arra, hogy a saját erejéből meg tudja szülni a kisbabáját. De akár szavaknak sem kell elhangoznia ahhoz, hogy a szülés menete megakadjon. Abban az esetben ugyanis, ha a szülészorvos és a kismama között nem alakul ki a bizalom, akkor a kontrakciók pusztán attól leállhatnak, ha az orvos belép a szobába. Ilyenkor hiába mondjuk, hogy már rendszeresen ismétlődő kétperces összehúzódások vannak, amikor az orvos bejön, hiába vár, csak azt látja, hogy egy sincs. Jó néhányszor tanúja voltam már annak is, milyen ijesztő tud lenni az anya vagy akár az apa számára az is, ha az orvos szótlanul nézegeti a CTG eredményét, de nem szól semmit… Talán nem is gondol arra, hogy ezzel azt üzenheti a szülőknek, hogy olyan nagy baj van, amiről már igen nehéz beszélni.
                </p>
                <p>
                    <i>–  Lehet ilyenkor tenni valamit?</i>
                </p>
                <p>
                    –  Valójában legtöbbet a várandósság idején tudok tenni azért, hogy egy szülés minél inkább olyan legyen, amilyenre az anya vágyik. Egyébként rengeteg negatív szuggesztióval találkozhatunk már a várandósság idején is, de talán ebben az időszakban ezeket még könnyebb átírni. Az anyák olykor szorongva idézik fel, hogy a legutóbbi vizsgálaton miket mondtak nekik , például hogy a magzatuk túl nagy vagy túl kicsi, hogy olyan mellből, ami nekik van, abból nem lehet szoptatni, vagy hogy ilyen kötött izomzattal rettentő nehéz szülésre lehet számítani. Rendkívül rombolóak ezek a mondatok, hiszen megrendítik az anyák hitét abban, hogy képesek a saját testük erejükből szülni vagy szoptatni.
                </p>

                <p>
                    –  Sajnos a különböző beavatkozásokról szóló beleegyező nyilatkozatok is a negatív szuggesztiók igazi gyöngyszemei. Az egyikben például úgy fogalmaznak, hogy ha a szülő nő nem egyezik bele a gátmetszésbe, akkor ezzel a végbéltáji repedés kockázatát vállalja, aminek aztán egész életre kiható széklettartási problémák lehetnek a következményei. Ki az, aki ilyen ijesztő dolgok olvastán nem írja azonnal alá, hogy beleegyezik a beavatkozásba?  És hogyan is tudna egy éppen vajúdó, módosult tudatállapotban lévő asszony ilyenkor tárgyilagosan mérlegelni?
                </p>
                <p>
                    –  A korrekt és pontos információk adása mellett nagyon fontosnak tartom az anya saját tudásába vetett hitének erősítését és azt, hogy a szülők ismerjék a természetes folyamat jellemzőit. Mindezek ismerete segíti azt, adott esetben majd informált döntést tudjanak hozni.
                </p>
                <p>
                    –  Azzal, hogy a felkészülés hónapjaiban  információkkal látom el a várandós anyát,  megismertetem vele a lehetőségeit, megerősítem abban, hogy van választása, ezzel segítem őt abban, hogy az elképzeléseit meg tudja fogalmazni. Ha ezekről időben beszél az orvosával illetve a szülésznőjével, akkor vagy megbizonyosodhat arról, hogy ők jól és pozitívan fogják majd támogatni ,vagy még van ideje váltani és megkeresni azokat a segítőit, akikben maximálisan meg tud bízni.
                </p>
                <p>
                    –  Nyilván sokkal nehezebb a dolgom, ha az anyának nincs fogadott orvosa vagy szülésznője. A negatív szuggesztiók ellensúlyozására van azonban egy különös és nagyon fontos segítségem a szülés óráiban is. Mint említettem, a várandósság időszakában a dúla és a vajúdó nő között mély bizalmi viszony alakul ki és ez gyakran olyan erős, hogy a szülés közben az anya szinte csak a dúlája hangját hallja, tehát azt érti meg elsősorban, amit ő mond.
                </p>
                <p>
                    <i>–  Hogyan kell magyarról magyarra fordítani ilyenkor?</i>
                </p>
                <p>
                    –  Lehetséges, hogy egy bonyolultan megfogalmazott orvosi kifejezésekkel tarkított mondatot kell egyszerűen, rövidebben, a módosult tudatállapotban lévő számára is érthetően elmondani. De gyakran a negatív szuggesztiókat tartalmazó kifejezéseket igyekszem átszínezni. Ha pl. a kitolási szakaszban az orvos nyomatja az anyát, azaz vezényli, hogy mit kell csinálni a „fájások” alatt, („szemét száját becsukja,  és kakil hosszan lefelé”) akkor én inkább azt súgom az anyának, hogy ha érzi az erőt, ami elárasztja a testét, akkor küldje, adja oda a babájának, amennyire azt ő kéri.
                </p>
                <p>
                    <i>–  Hogyan hasznosítod a SAS-ok képzésen tanultakat?</i>
                </p>
                <p>
                    –  Számomra  SAS-ok képzés rengeteget segített abban, hogy tudatosabban kommunikáljak a mindennapi életben és a munkámban is. Nagyon sok olyan technikát tanított, amelyek segítenek a nehéz helyzetekben. Ha azt látom, hogy az édesanya elfáradt és a kontrakciók szünetében sem tud pihenni, akkor pl. közösen előhívhatjuk annak a helynek  a képét, hangulatát, ahol ő a legjobban meg tud nyugodni.
                </p>
                <p>
                    –  Vagy mondok egy másik példát. A szülés egy lefelé és kifelé irányuló folyamat és ebben nagy jelentősége van a hangadásnak is, de ha valaki nagyon magas hangon jajong, akkor érdemes őt abban segíteni, hogy ezt is lefelé vigye. A követés-vezetés technikájának alkalmazása segíthet ebben. Ilyenkor eleinte ugyanolyan hangot adok, mint a vajúdó, majd viszem a saját hangomat egyre lejjebb és ő jön utánam.
                </p>
                <p>
                    –  Sokat beszéltem most arról, hogy milyen negatív szuggesztiókkal találkozom a szülések kísérésénél. De feltétlenül szeretném megemlíteni azt, hogy a munkám során találkozom olyan kiváló orvosokkal és szülésznőkkel is, akik pontosan tudják, hogy mekkora támogató erő rejlik a pozitív szuggesztiókban és ezt szem előtt tartva kommunikálnak a szülő nővel.
                </p>
                <p>
                    –  Néhány héttel ezelőtt egy olyan szülésnél lehettem jelen, ahol a félhomályos szobában vajúdó asszony hangjaira csak időnként felelt egy másik férfihang. A hang a szülészorvosé volt, aki néha-néha szólalt csak meg halkan és mindössze két mondatot mondott az anyának:<br/>
                    <i>–  „Meg tudja csinálni, csak hagyja, engedje! Rengeteg erő van magában.”</i>
                </p>
                <p>
                    –  Az anya ekkor épp szemben állt velem és a vállaimra támaszkodott. A saját testemen is éreztem, ahogy elönti ez az erő. Felemelte a fejét, a szemembe nézett és határozottan kijelentette:<br/>
                    <i>–  „Meg tudom csinálni.”</i>
                </p>
                <p>
                    –  „Meg tudod csinálni.”- ismételtem, és ő néhány perc múlva a világ legtermészetesebb módján útjára engedte a kislányát.
                </p>
                <p>Megjelent: Mindennapi pszichológia – 2009. december (Rist Lilla interjúja)</p>


            </div>

            <div className="blog-global-tags">
              <p>Címkék:</p>
              <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog">Blog</Link>
            </div>
        </div>
    </section>
    <section className="consultation4">
        <div className="consultation-btn-h2"><h3>KÉRDEZNI VAGY MONDANI SZERETNÉL VALAMIT AZ OLVASOTTAKKAL KAPCSOLATBAN?<br/><br/><span>Szeretettel várom jelentkezésedet!</span></h3></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
    </section> 
    </div>
  )
}

