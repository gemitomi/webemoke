import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public40Pic1 from "../../../image/publications/public-40-hero-nyugalmas-szoptatas.png";
import Public40Pic2 from "../../../image/publications/public-40-nyugalmas-szoptatas.jpg";

export default function Public40() {
  return(
  <div>
   
   <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public40Pic1} alt="nyugalmas-szoptatas"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Nyugalmas szoptatás</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2008.  augusztus 05.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications2" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public40Pic2} alt="nyugalmas-szoptatas"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Nemrégiben egy kétgyermekes anya fordult hozzám szoptatási tanácsért. Elmesélte, hogy a három hónapos kislánya nagyon nyugtalan, gyakran felsír evés közben, és időnként megfeszíti az egész testét.</b>
                        </p>
                        <p>
                            Egy-egy etetés alatt többször is elfordul a mellétől, majd rövid idő után újra szopni kezd. A beszélgetés során jó néhány kérdést körbejártunk, de ahogy a szoptatás körülményeiről érdeklődtem, egyre valószínűbb lett, hogy a probléma hátterében nem a tejtermelődés zavara vagy a szoptatás technikájának kérdései állnak, hanem az, hogy a kétéves testvér nem nézi túl jó szemmel, ha az anyukája a kisbabát eteti. 
                        </p>
                        
      
                    </div>
                </div>
                <p>
                    Ádám a nyugalom megzavarása érdekében mindent bevet, hangosan kalapál az építőkockákkal, egymás után próbálkozik veszélyes és tiltott dolgokkal, vagy éppen ilyenkor kell pisilnie.
                </p>
                <p>
                    Az anyuka egy-egy szoptatás alkalmával akár többször is kénytelen az etetést megszakítva a kisbabát letenni, amíg a nagyobb gyermeke igényeit kielégíti vagy a veszélyt elhárítja. Ha erre éppen nem is kell sort keríteni, az etetések gyakran akkor is feszülten és idegesen telnek.

                    <br/>A kétéves kisfiú reakciója érthető. Testvére született, ami neki nagyon nehéz helyzet, hisz meg kell birkóznia a kiszorítottság érzésével. Még ő is kicsi, a szülei teljes figyelmét és szeretetét igényelné, így a szeretet elvesztésétől való félelme mellett dühöt is érezhet.

                    <br/>Ugyanakkor tudjuk, hogy a sikeres szoptatás egyik alapvető feltétele a nyugalom. Amikor feszültek vagyunk, a szervezetben olyan hormonális változások zajlanak, amelyek gátolják a tejtermelést. A nyugalom nemcsak a szoptatás szempontjából fontos, hanem a baba egészséges fejlődésének is alapfeltétele. Ha az anya ideges, azt a baba is átveszi, és nyugtalan, sírós lesz.
                </p>
                <p>
                    De hogyan lehet ebben a helyzetben az áhított nyugalmat megtalálni?
                </p>
                <p>
                    Az első hetekben, hónapokban valóban sok leleményre, türelemre és kompromisszumokra van szükség, hisz a kicsi baba még nem rendszeres időpontokban és meghatározott ideig szopik. Ez megnehezíti azt, hogy a nagyobb gyermekünk pontosan kapja meg a tízóraiját, hogy időben lefektessük ebéd után, vagy hogy mellette maradhassunk, míg ő a kádban fürdik.
                </p>
                <p>
                    Óriási könnyebbséget jelenthet, ha ezekben az első időkben van mellettünk egy családtag, aki a kicsi büfiztetésénél, öltöztetésénél segít, így több figyelmet szentelhetünk a nagyobb gyermekünknek.
                </p>
                <p>
                    Ha azonban egyedül vagyunk, igyekezzünk következetesen időt szakítani arra, hogy a nagy testvér igényeit is kielégítsük. Figyeljünk arra, hogy a megszokott szertartások rendje megmaradjon, mert ez a gyermekünknek nagy biztonságérzetet jelent.
                </p>
                <p>
                    Ha gyengéden invitálva be tudjuk őt vonni a kisbaba gondozásába, és ő ezt örömmel teszi, kérjük meg, hogy adja a kezünkbe a tiszta pelust vagy nyissa ki a popsikrém dobozát.
                </p>
                <p>
                    Természetesen érdemes a szoptatás megkezdése előtt előkészíteni a bilit, vagy kikísérni a WC-re a nagy testvért, és megkínálhatjuk itallal is, de anyai tapasztalataim alapján is állíthatom, hogy a legtöbbet azzal segíthetünk, ha a szoptatás alatt beszélgetünk vele. Ha magunk mellé ültetjük, és mesélünk a kedvenc képeskönyvéből, vagy esetleg a családi fotóalbumot nézegetve felidézzük az emlékeket a korábbi kirándulásainkról, nem érzi úgy, hogy csak a kisbabával foglalkozunk. Az ilyen jó hangulatú beszélgetések a mi nyugalmunkhoz és oldottságunkhoz is hozzájárulnak, így a kisbabánk is békésebben és zavartalanabbul szopizhat.
                </p>
                


                <p>
                    <a href="https://nlc.hu/baba/20080805/nyugalmas_szoptatas/">https://nlc.hu/baba/20080805/nyugalmas_szoptatas/</a>
                </p>
            </div>

            <div className="blog-global-tags">
                  <p>Címkék:</p><Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications2">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
)
}
