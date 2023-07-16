import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog52Pic1 from "../../../image/blog/blog-52-hero-hol-segithetek-en.png";
import Blog52Pic2 from "../../../image/blog/blog-52-hol-segithetek-en.jpg";

export default function SubBlog52() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog52Pic1} alt="hol-segitek-en"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Hol segítek én?</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. október 20.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog52Pic2} alt="hol-segitek-en"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A válasz benne van már az előző blogbejegyzésemben is, de most arról írok, hogy hogyan jutottam el döntésemben oda, hogy jelenleg csak kórházi szüléseknél dúláskodom.
                        </p>
                        <p>
                            Hát nem könnyen.
                        </p>
                        <p>
                            Tökéletesen egyetértek ugyanis a dúlaság azon alapelvével, mely szerint a dúla tiszteletben tartva az anya döntését, ott segíti az anyát, ahol ő szülni kíván. Ha az  anya úgy érzi, hogy számára az otthona jelenti a biztonságot, akkor ott, de ha éppen egy konzervatív szemléletű szülészeten, akkor ott.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Számtalan magyar és más országokban készült filmet láttam már születésházban és a családok otthonában zajló szülésekről. Nagy szakmai elismertséggel bíró, neves bábáktól hallhattam az elmúlt évek során a háborítatlan szülés szépségeiről, mutatóiról és feltételeiről. Mélyen megérintettek a látottak és a hallottak, annál is inkább, mert a kórházban zajló szülések kísérésénél sajnos találkozom időnként az anya illetve a pár felé megnyilvánuló tiszteletlenséggel, negatív szuggesztiókkal és olykor türelmetlenségből adódó felesleges beavatkozásokkal. Nincs bennem kétség tehát afelől, hogy milyen csodálatos élmény szerető közegben, háborítatlanul, a természet rendje szerint szülni. 
                </p>
                <p>
                    Mégis a kórházakban kísérek szüléseket, és ennek több oka is van.
                </p>
                <p>
                    Egyrészt úgy gondolom, azoknak a nőknek illetve a párjaiknak, akik kórházba mennek szülni, pont a fentebb említett okok miatt nagyobb szükségük van egy olyan társra, aki folyamatos jelenlétével, figyelmével és szeretetével támogatja őket. Mivel az én tevékenységem nem egy adott kórházhoz kötődik, hanem abban az intézményben és azokkal a személyekkel (orvos, szülésznő) kísérem a szülést, ahol és akikkel az anya szülni kíván, van módom egymástól szakmailag és emberileg is nagyon eltérő ellátást tapasztalni.  De bármilyen is legyen az az intézmény, általánosságban igaz, hogy ha egy nő nem otthon szül, tehát nem a megszokott környezete veszi körül, jóval több, a vajúdásból kizökkentő hatásnak van kitéve és így kiszolgáltatottabbá válhat.
                </p>
                <p>
                    Másrészt úgy érzem, hogy azzal, hogy nem készült el még Magyarországon az intézményen kívüli szülés törvényi szabályozása, ezzel a számomra megnyugtató feltételek sem adottak. Nem tudnék ugyanis teljes figyelmemmel és odafordulással segíteni egy párt az otthonukban, ha közben szoronganom kellene azon, hogy bár szakmailag nem vagyok felelős a szülés menetéért, elvihetnek engem is, a bábát is a rendőrök, vagy ha valamilyen okból kifolyólag a kórházba kellene bevinni az anyát, akkor nem lenne vállalható nyíltan, hogy az anya otthonszülésre készült. Nincsenek ma Magyarországon olyan háttérkórházak, ahol ilyen esetben a vajúdást addig nyomon követő bábával korrekten konzultálva venné át bármelyik ügyeletes orvos az anyát, őt sem akkor, sem a szülés után nem megbélyegezve. Nem ismert számomra az a protokoll, amihez minden bábának egyaránt igazodni kellene, gondolok itt pl. az alacsony kockázatú várandósság kritériumaira, vagy az otthon és a kórház közti távolság és megközelíthetőség feltételeire, de sok mást is említhetnék.
                </p>
                <p>
                    Hiába kaptam az elmúlt években többször is felkérést otthoni szülés kísérésére, a fentebb említett okok miatt nem engedte a lelkiismeretem, hogy ezt vállaljam. A dúla ugyanis a fizikai és érzelmi támogatás mellett a legtöbbet azzal segít, ha a vajúdás és a szülés óráiban nyugalmat sugároz és teljes figyelmét a pár kísérésének szenteli. Nem vihetem hát oda a szorongásomat, ezzel segítőként gátolva a szülés folyamatát. 
                </p>
                <p>
                    Őszintén bízom azonban abban, hogy hamarosan eljön az az idő, amikor ezt teljes nyugalommal megtehetem.
                </p>
                <p>
                    Tarthatatlannak érzem, hogy nem készült még el a törvényi szabályozás, hogy jelenleg nincs is érdemi egyeztetés ez ügyben, és hogy még mindig ott tartanak az illetékesek, hogy a feltételek megteremtése helyett egész egyszerűen nem vesznek tudomást arról, hogy a nők egy része intézményen kívül szeretné világra hozni a gyermekét.  
                </p>
                <p>
                    A változás nem elodázható.
                </p>


            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
