import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../image/bekes_emoke.png"

export default function About() {
  return (
    <div>
        <section class="about">
            <div class="content">
                <h1 class="title">Rólam</h1>
                <blockquote>
                    <p>“A mély elkötelezettség egy álom iránt nem jelent korlátokat és kényszert: felszabadít.<br/> Még egy kanyargós ösvény is elvezethet a célodhoz, ha egészen a végéig elmész.”</p>
                </blockquote>
            </div>
        </section>

        <section class="about1">
            <div class="image">
                <div class="col-left">    
                    <div class="imgBx">
                        <img src={ProfilePic} alt=""/>
                    </div>
                </div>
                <div class="col-right">
                    <h2 class="titleText">Békés Emőke vagyok</h2>
                    <p class="text">három gyermekes anya, nő, szerető társ, a
                        <Link to="http://www.bekesdulakor.hu"> Békés Dúlakör</Link> szakmai vezetője
                        <br/>Egy boldog ember, hiszen két évtizede, hogy megtaláltam azt a hivatást, amelyet nagyon szeretek. Szülésfelkészítő és családkísérő dúla vagyok.<br/>
                        <br/>Otthoni szülések körül segítő asszonyok tudása volt az első forrásom, amely csak megerősített abban, hogy a kórházban zajló szülések kísérése felé induljak el. 
                        Úgy gondolom, ott van igazán szükség mindarra a tudásra, tapasztalatra, szemléletre, fizikai, érzelmi és informatív támogatásra, amivel rendelkezem. 
                    </p>
                </div>
            </div>
        </section>

        <section class="experience">
        <div class="content1">
            <p class="text"> 
                Az, amit én – és ma már az általam képzett dúlák is – képviselnek, az egészségügyi ellátórendszerben újszerű, de hiánypótló és rendkívül fontos.
                Épp ezért nem csak a babák minél szebb világra érkezéséért, hanem egy új szakma megszületéséért is teszek nap mint nap.<br/>
                <br/>Egyéni konzultációk, segítő beszélgetések és csoportos szülésfelkészítés keretében kísérem a leendő anyákat és apákat a szülővé válás folyamatában.<br/>Az évek alatt összegyűlt tapasztalataim és a folyamatosan bővülő ismereteim alapján alakultak ki mára hivatásom legfontosabb alapelvei.
                Ezek mentén minden esetben igyekszem nem csak az anya nyugalmát és biztonságérzetét megteremteni, hanem a megszülető család minden tagjára egyaránt figyelni,
                hiszen rendkívül fontosnak tartom azt, hogy az apa is biztonságban érezze magát és az újszülött is az őt megillető tiszteletben és bánásmódban részesüljön.<br/>
                <br/>Hivatásom gyakorlása során arra törekszem, hogy a várandós nőknek és párjaiknak a számukra legmegfelelőbb érzelmi, 
                fizikai és informatív támaszt nyújtva segítsek abban, hogy olyan szülésélményük legyen, amilyet szeretnének.
            </p>
            <br/>
            <Link to="/szulesfelkeszites" target="_blank">http://bekesemoke.hu/szulesfelkeszites/</Link>
            
            <p class="text">Kísérésem igény szerint a gyermekágy időszakában vagy akár még később is tart, mivel a szülők gyakran fordulnak hozzám a családdá válás folyamán 
                felmerült kérdésekkel. 
                Ez a bizalom motivált arra, hogy elvégezzem a pár- és családterápiás képzést, aminek már a szupervíziós szakaszában járok, így pszichológus társammal,
                együtt segítjük a családokat.
            </p>

            <Link to="/nevelesitanacsadas" target="_blank">http://bekesemoke.hu/nevelesi-tanacsadas</Link>
            
            <p class="text">Ha nem csak olvasnál rólam, hanem szívesen meg is hallgatnád, hogyan, miért lettem dúla és mit ad nekem ez a csodálatos hivatás, 
                íme egy interjú velem, ami a Kossuth Rádióban, az Arcvonások c. műsorban hangzott el 2015. decemberében.</p>
        </div>

        </section>

        <section class="video">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe width="500" height="250"
                src="https://www.youtube.com/embed/8GuOIpMYbqE"
                frameborder="0" allowfullscreen="allowfullscreen">
            </iframe>
        </div>

        </section>

    </div>
  ) 
}
