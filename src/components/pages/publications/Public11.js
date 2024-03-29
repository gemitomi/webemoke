import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public11Pic1 from "../../../image/publications/public-11-hero-korhazban-vagy-otthonszulesnel-segit-a-dula.png";
import Public11Pic2 from "../../../image/publications/public-11-korhazban-vagy-otthonszulesnel-segit-a-dula.png";

export default function Public11() {
    return (
        <div>
          <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public11Pic1} alt="Korhazban vagy otthonszulesnel segit a dula"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Kórházban vagy otthonszülésnél segít a dúla?</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. október 13.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public11Pic2} alt="Korhazban vagy otthonszulesnel segit a dula"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Bár egyre ismertebb a dúla szerepe és munkája, mégsem tudja mindenki pontosan, hogy vajon otthon vagy a kórházban segédkezik a szülésnél?</b>
                        </p>
                        <br/>
                        <p>
                            Annak ellenére, hogy már 8 éve kísérnek különböző hazai kórházakban dúlák szüléseket, még mindig gyakran tapasztalom azt, hogy amikor bemutatkozom valakinek és megemlítem, hogy dúla vagyok, akkor azt gondolják rólam, hogy én kizárólag otthonszülésekhez járok. Annak, hogy a dúlaságot az otthonszüléssel kapcsolják össze van alapja, de már régóta nincs a két fogalom között szoros összefüggés.
                        </p>
      
                    </div>
                </div>
                <p>
                    Magyarországon az első dúlák ugyanis otthonszüléseknél segédkeztek a 90-es évek második felében. Ők olyan nők voltak, akik maguk is otthon szültek, és átélve a háborítatlan szülés élményét, segíteni szerettek volna másoknak is
                </p>
                <p>
                    2000 októberében a Napvilág Születésház meghirdette az első kórházi szülések kísérésére felkészítő dúlaképzését, melyen 11-en vettünk részt. Hamarosan megalapítottuk a dúlák civil szervezetét, melynek 6 évig voltam az elnöke. Ezekben az években azt tekintettem legfontosabb feladatomnak, hogy megismertessem az egészségügyben dolgozó szülészorvosokkal, szülésznőkkel, védőnőkkel és persze nem utolsósorban a várandósokkal a dúlai hivatás lényegét.
                </p>
                <p>
                    Akkor én már évek óta kerestem ugyanis a lehetőségét annak, hogyan tudnék segítséget nyújtani a kórházban szülő nőknek, mivel gyógypedagógusként és pszichopedagógusként gyakran hallottam a hozzám forduló szülőktől a gyermekük születése körüli időszakban átélt kiszolgáltatottság érzéséről, a lelki támogatás hiányáról és a magányról.
                </p>
                <p>
                    Úgy gondolom, hogy kórházban történő szüléseknél még nagyobb jelentősége illetve más feladata lehet egy dúlának, mint akkor, ha otthon zajló szüléseknél segít. Más azért, mert egy idegen környezet elfogadásában kell segítenie az anyát és ott megteremteni a biztonságérzetét, ahol sokkal nagyobb valószínűséggel zavarják meg ebben az intim helyzetben ismeretlen emberek, például a szülőszobán áthaladó, be-bejárkáló személyzet azon tagjai, akik nem az anya segítői (takarító néni, szerelő stb.). Ráadásul az intézetben zajló szüléseknél olyan kórházi szabályokhoz kell igazodnia a szülőknek és a kisbabának, amelyeket nem mindig szakmai okok indokolnak, hanem inkább a régi, bejáratott szokásokon alapulnak. Ezekkel a nehézségekkel egy, a saját otthonában szülőnek értelemszerűen nem kell megküzdenie, így a dúlájának sem az az egyik leghangsúlyosabb feladata, hogy az intimitás kialakulásában és megőrzésében segítsen.
                </p>
                <p>
                    Ma már Magyarországon becsléseim szerint körülbelül 200 olyan dúla van, aki kórházi szülések kísérésére is felkészítő alapképzést végzett. Közülük vannak olyanok, akik valamilyen okból nem gyakorolják a hivatást (többen mert ők maguk is szülnek vagy éppen kisgyermekeket nevelnek), vannak, akik az élethelyzetükből adódóan hol több, hol kevesebb szülést kísérnek, és egyre több azoknak a dúláknak a száma, akik e területen képzik folyamatosan tovább magukat, és ez a fő hivatásuk. A magyarországi dúlák egy része kizárólag otthoni szülésekhez jár, más részük az egyesület tagjaként, jó néhányan pedig szervezettől függetlenül, esetleg kisebb dúlakörökhöz kapcsolódva kórházi szüléseket kísérnek.
                    <br/>Kórházban vagy otthonszülésnél segít a dúla?
                </p>
                <p>
                    Hogy melyik dúla hol segít, az részben a saját döntése, valamint meghatározza az a tény is, hogy jóval több nő szül ma hazánkban kórházi körülmények között, mint otthon.
                </p>
                <p>
                    Azok a dúlák, akik egészségügyi intézménybe járnak, mindig azzal az orvossal illetve szülésznővel dolgoznak együtt, akit az anya maga választ. Ez gyakran nagy kihívás, jó alkalmazkodási képességet, toleranciát és megfelelő kommunikációs készséget kíván. A személyes tapasztalataim azt mutatják, hogy azzal, hogy időt szánok arra, hogy az orvossal és a szülésznővel megismerkedek egy személyes találkozó keretében még a szülést megelőzően, sokkal elfogadóbban, egymás tudását kiegészítve tudjuk közösen kísérni az anyát illetve a párt.
                    <br/>Emőke korábbi leveleit összegyűjtöttük neked! Itt mindent megtalálsz, ami az anyasággal, a babára várással, a gondozással kapcsolatos!
                </p>
                <p>
                    Legtöbbször ez így is van, de sajnos ennek ellenére időnként nem úgy alakulnak a dolgok, ahogy a szülők szeretnék. Előfordul, hogy olyan attitűdű emberekkel találkozom, akiknek lehet, hogy a szakmai tudásuk nagy, de a viselkedésük a helyzethez méltatlan. Amikor a szülés visszahozhatatlan, gyönyörű és végtelenül intim pillanatai nem azért foszlanak szét, mert valamilyen szakmailag indokolt beavatkozást el kell végezi, hanem mert szavakkal, tapintatlansággal háborítják, mindig nagyon megvisel engem is.
                </p>
                <p>
                    Egy-egy ilyen szomorú esemény azonban csak még jobban megerősít abban, hogy ha segítőül hívnak és érzelmi támogatást várnak tőlem az anyák és az apák, bárhová is mennek szülni, ott kell lennem mellettük.
                </p>
                
                <p>
                    <a href="https://nlc.hu/baba/20091013/korhazban_vagy_otthonszulesnel_segit_a_dula/">https://nlc.hu/baba/20091013/korhazban_vagy_otthonszulesnel_segit_a_dula/</a>
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
