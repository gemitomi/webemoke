import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public32Pic1 from "../../../image/publications/public-32-hero-dula-lennek.png";
import Public32Pic2 from "../../../image/publications/public-32-dula-lennek.jpg";

export default function Public32() {
  return (
  <div><section class="section-blog-global">
  <div class="blog-global-container">
      <div class="blog-global-hero">
          <img src={Public32Pic1} alt="dula-lennek"/>
      </div>

      <div class="blog-global-face">
          <h2 class="blog-global-title">Dúla lennék</h2>
          <div class="blog-global-profile-container">
              <div class="blog-global-profile">
                  <div class="blog-global-img-container">
                      
                  </div>
                  <div class="blog-global-text">
                      <h3>Békés Emőke</h3>
                      <p>2008. december 16.</p>
                  </div>
              </div>
              <div class="blog-global-button">
                  <Link to="/publications2" class="blog-global-btn">Publikációim</Link>
              </div>
          </div>

          <div class="blog-globale-column">
              <div class="blog-globale-img-container">
                  <img src={Public32Pic2} alt="dula-lennek"/>
              </div>
              <div class="blog-globale-text">
                  <p>
                      <b>Kedves Emőke!</b>
                  </p>
                  <blockquote>
                      <i>Sokat olvastam már a dúlákról, és nagyon tetszik a tevékenységük. Magam is fontolgatom, hogy ha a kisebbik gyermekem is óvodás lesz, elvégzem a tréninget. Érdekel, hogy ezen a képzésen milyen ismereteket lehet elsajátítani, és hogy ez elég-e ahhoz, hogy dúla lehessek.<br/>
                          A legjobban azonban jelenleg az foglalkoztat, hogy szükséges-e ehhez a hivatáshoz valami olyan alapfeltétel, amely nélkül nehezen lenne elképzelhető a szülések kísérése.<br/>
                      <br/>Válaszodat előre is köszönöm!<br/>Boglárka</i>
                  </blockquote>
                  

              </div>
          </div>
          
          <p>
              <b>Kedves Boglárka!</b>
          </p>
          <p>
              Gyakran a dúlatréningen is megkérdezik tőlem a leendő dúlák: mi kell ahhoz, hogy valaki jó segítő lehessen? Ilyenkor sok minden eszembe jut.
          </p>
          <p>
              Az első és talán legfontosabb az, hogy legyen szerető szíve és két keze. Ha valaki ezekkel rendelkezik, már egészen biztosan támaszt tud nyújtani a szülőnőnek. Természetesen az is fontos, hogy a dúla mennyire intuitív alkat, és hogy hogyan áll az empátiával és az elfogadással.
          </p>
          <p>
              Mindemellett, ha tudja, milyen lelki változásokon mehet át egy várandós, ha járatos a szoptatással kapcsolatos kérdésekben, ha ismeri a vajúdás és a szülés anatómiai, élettani történéseit, ha jól tud kommunikálni az anyával és az egészségügyi személyzettel, ha jártassága van a homeopátia és az aromaterápia területén, és a dúlapraktikák közül is elsajátított jó néhányat, akkor minden bizonnyal egyre jobb segítővé tud válni.

          </p>
          <p>
              Van azonban valami, ami nekem mindennél fontosabb. Ez a hátországom.
          </p>
          <p>
              A férjem és a gyermekeim támogatása nélkül, úgy érzem, aligha lehetnék jó dúla. Ők azok, akik mindenki másnál jobban tudják, mit jelent nekem ez a hivatás. Ha éjjel szüléshez megyek, biztos lehetek abban, hogy reggel nélkülem is olajozottan elindul a nap, vagy ha éppen késő délután találkozom egy várandós mamával, nyugodt lehetek afelől, hogy valamelyik nagylányom szívesen hazahozza a kicsit az óvodából.
          </p>
          <p>
              Annyira jó érzés az is, hogy amikor egy-egy szüléskísérésből hazaérek, mindig megkérdezik a gyermekeim, hogy kislány vagy kisfiú született-e, hogy hívják, hogyan érkezett. Később egyébként gyakran megismerik a családot személyesen is, amikor a szülők a kisbabával eljönnek hozzám látogatóba.
          </p>
          <p>
              Nagyon szeretem a hivatásom, de egészen biztosan nem tudnám ennyire a hozzám forduló anyáknak és apáknak szentelni a figyelmemet, ha nem állna teljes szívvel mellettem a férjem.
          </p>
          <p>
              Tőle indulok el mindennap adni másoknak, és ezt csak azért tehetem meg, mert én magam is rengeteg szeretetet kapok tőle.
          </p>
          <p>
              Most, hogy írom neked ezeket a sorokat, megannyi emlék villan fel arról, miben is nyilvánul ez meg. Csak egyetlen apró példa.
          </p>
          <p>
              Ha éjjel megszólal a telefonom, és indulnom kell egy szüléshez, mindig felkel a párom is. Szendvicseket, innivalót készít nekem, aztán ébren várja meg az üzenetemet, amelyben jelzem, hogy rendben megérkeztem a kórházba, s csak azután alszik újra el.
          </p>
          <p>
              Úgy érzem, e nélkül a támogató, szeretetteljes háttér nélkül valóban nem tudnék jó dúla lenni.
          </p>
          <p>
              Nap mint nap tudatában vagyok ennek, de örülök, hogy a leveled kapcsán most, advent harmadik vasárnapján írhattam is erről.
          </p>
          <p>Emőke</p>


          <p>
              <a href="https://nlc.hu/baba/20081216/dula_lennek/">https://nlc.hu/baba/20081216/dula_lennek/</a>
          </p>
      </div>

      <div class="blog-global-tags">
            <p>Címkék:</p><Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications2">Publikációim</Link>
      </div>
  </div>
</section></div>
)
}
