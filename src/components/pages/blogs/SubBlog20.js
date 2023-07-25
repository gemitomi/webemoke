import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog20Pic1 from "../../../image/blog/blog-20-hero-elmegyek-elmegyek-hosszu-az-ut-de-maradok-4.png";
import Blog20Pic2 from "../../../image/blog/blog-20-elmegyek-elmegyek-hosszu-az-ut-de-maradok-4.png";

export default function SubBlog20() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog20Pic1} alt="elmegyek-elmegyek-hosszu-az-ut-de-maradok-4"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Elmegyek, elmegyek…, hosszú az út, de maradok? 4.</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. szeptember 04.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog20Pic2} alt="elmegyek-elmegyek-hosszu-az-ut-de-maradok-4"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Jennifertől Catharinához bicikliztünk át. Ő az egyetlen dúla, akit az amszterdami klinika státuszban foglalkoztat. Igazán izgalmas dolgokat mesélt!
                        </p>
                        <p>
                            Ezt a pozíciót úgy sikerült kivívnia, hogy egy kutatást végez a szülészeten, ahol kíváncsiak arra az eredményre, hogy mi a különbség a dúlával és a nem dúlával zajló szülések között. Az alapján, amit mesélt, a kutatás nem hozhat objektív eredményeket, mert ő csak olyan nőket kísérhet, akik császármetszés utáni hüvelyi szülésre készülnek, vagy először szülőket, továbbá szociálisan hátrányos helyzetben lévőket illetve drogfüggőket vagy pszichiátriai kezeléseken átesetteket. 
                        </p>


                    </div>
                </div>

                <p>
                    Szóval ő kapja a nehezebb kíséréseket, miközben  a kontrollcsoport nem ilyen összetételű. De Catharina ezt nem bánja, hatalmas szívvel és mély elköteleződéssel végzi a munkáját.
                </p>
                <p>
                    A szülés után egy kérdőívet kell kitölteniük az anyáknak a dúla munkájáról. A dúlával szült nők 100%-a a következő szülésnél is választana dúlát, ugyanakkor azok, akik nem dlával szültek, általában nem érezték a hiányát, nyilván, mert így nincs tapasztalatuk arról, hogy mit is kaphattak volna.
                </p>
                <p>
                    Catharina kérdezett a dúlai munkámról, a magyarországi viszonyokról és megkérdezte azt is, hogy mi járatban vagyok Hollandiában. Érdeklődéssel hallgatott, aztán arról kezdett beszélni, hogy az, amit csinálok, az egy küldetés. Nagyon nehéz feladat, de ha kijelöltek erre, akkor végezni kell újra és újra, nap mint nap. Szelíden, a szeretet nyelvén, de erős hittel és következetesen.
                </p>
                <p>
                    Éreztem, ahogy nő a gombóc a torkomban. Míg beszélt hozzám hosszasan, szóról szóra elmondva azt, amit én is gondolok, az jutott eszembe, hogy milyen különös ez az egész. Azért jöttem el hozzá, hogy megkérdezzem, szerinte tudnék-e Hollandiában dúlaként dolgozni, és a legnagyobb megerősítést tőle kapom arra vonatkozóan, hogy otthon van dolgom.
                </p>
                <p>
                    Megölelt és én elsírtam magam. Nem volt szükség több szóra.
                </p>
                <p>
                    Másnap reggel Joyce-al találkoztunk, aki a helyi születésmozgalom vezetője és  dúla. Nagyon érdeklődő, kedves és lelkes nő. Figyelmesem meghallgatott, majd könnyezve megfogta a kezem, és ezt mondta: “Nem jöhetsz el az országodból, mert neked ott van dolgod. Mi lesz a magyar anyákkal és dúlákkal nélküled?” – kérdezte.
                </p>
                <p>
                    Azt ajánlotta, hogy fogjunk össze, maradjunk kapcsolatban és ők támogatni fognak engem, hogy mint vezető, ne érezzem magam olyan egyedül.
                </p>
                <p>
                    Megkaptam a válaszokat, amiért ilyen nagy utat tettem meg.
                </p>
                <p>
                    Maradok. Itt, a nehezített pályán, a sokszor elszomorító helyzetekben, nehezen lebontható falak között, de a magyar anyákat és dúlákat segítve továbbra is. 🙂
                </p>





                
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
