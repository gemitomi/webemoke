import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth26Pic1 from "../../../image/szulestort/szules-story-26-hero-ereztem-bekes-jottodet.png";
import Birth26Pic2 from "../../../image/szulestort/szules-story-26-ereztem-jottodet.jpg";

export default function BirthStory26() {
  return (
  <div>
     <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Birth26Pic1} alt="ereztem-bekes-jottodet"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Éreztem békés jöttödet</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p></p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                         <Link to="/stories2" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Birth26Pic2} alt="ereztem-bekes-jottodet"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Először egy ismerősömtől hallottam nagyszerű dolgokat a dúlákról és így jutottam el Emőkéhez, aki nagyon sokat segített a felkészülésben egy természetesebb szülés eléréséhez. Ő általa ismertem meg a szülésznőmet, a szülésznő által pedig az új orvosomat. Ezek az események mind a terhességem utolsó hónapjában történtek. Nem bántam meg, sőt azt hiszem ebben a dologban jobban nem is dönthettem volna. A szülés előtt egy-két héttel megbeszéltük a férjemmel, hogy lesz dúla. Kezdetben ő kételkedett abban, hogy van-e dúlára szükség, ha ő ott van velem. De csak addig, amíg nem találkoztunk, beszélgettünk Emőkével.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Aztán elérkezett a szülésem napja nagy várakozások és izgalmak közepette. Vajon milyen lesz így másként világra hozni gyermekünket?
                </p>
                <p>
                    Éjfélkor elfolyt a magzatvizem. Éjféltől 6 óráig egyre elviselhetetlenebbek voltak a fájásaim. Azt gondoltam, hogy nem fogom kibírni ezt a vajúdást és szülést, mert így még egyik gyermekünknél sem éreztem át az eseményeket.
                </p>
                <p>
                    Első gyermekünket ugyanis az orvos nyomta ki belőlem, aminek fél évig tartó fájdalmas következményei lettek. Akkor a tapasztalatlanságom miatt korán mentünk be a kórházba, így már ott is tartottak és felgyorsították a szülést, amitől a vajúdási idő meghosszabbodott és kifárasztott, ezért a babát sem tudtam saját erőmből kinyomni.
                    <br/>Ezek után a második és harmadik szülésemnél kértem epidurális érzéstelenítést a rossz élményeket elkerülendő, de így a jó és fontos dolgokat sem élhettem át, a többi hátrányáról nem is beszélve. Egyik gyermekünknél sem éreztem azt, mint a negyedik szülésnél, hogy milyen nagyon küzd ő is, hogy világra jöhessen.
                </p>
                <p>
                    A vajúdás közben Emőke borogatásokkal, törölgetésekkel, zenével, legyezéssel, a szülésznő pedig homeopátiás golyócskákkal, de az ellazítással kapcsolatosan és sok egyéb más fontos dologban is segítettek. Nagyon összhangban voltak.
                </p>
                <p>
                    A férjem kétféleképpen is a támaszom volt: mind fizikailag, mind pedig lelkileg. Sokat jelentett, hogy mindenki ott volt, akit szerettem volna. A vajúdás hat órájának második fele nagy nyugalomban és odafigyeléssel telt és hihetetlen volt, mikor megéreztem, hogy nemsokára láthatjuk a kislányunkat.
                </p>
                <p>
                    A szülésnél éreztem, ahogy tolja magát lefelé és kifelé a kis lábacskáival, miközben többször megpihent és küzdve segített, hogy együttes erővel, egészségesen világra jöhessen. Éreztem a fejét, ahogy egyre kijjebb halad, mígnem nagy békével világra jött. Éppen csak megnyekkent egy kicsit, nem sírt, csak békésen feküdt a hasamon, amíg pulzált a köldökzsinór – ami persze szintén különleges élmény volt.
                </p>
                <p>
                    Emőke így fogalmazott: „Csodálatos volt, ahogy Anita nagy csendet és nyugalmat hozott magával.” Nagyon meghitt pillanatok voltak!
                </p>
                <p>
                    A fájdalmakat leszámítva, felejthetetlen élmény volt, és még most is hihetetlennek tűnik, hogy én ezt végig tudtam csinálni!
                    <br/>Mindenkinek hasonló szülést kívánok!
                </p>


            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to= "/stories2">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
