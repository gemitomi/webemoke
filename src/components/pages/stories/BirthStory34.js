import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth34Pic1 from "../../../image/szulestort/szules-story-34-hero-megszuletett-a-kistesom.png";
import Birth34Pic2 from "../../../image/szulestort/szules-story-34-megszuletett-a-kistesom.jpg";

export default function BirthStory34() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth34Pic1} alt="megszuletett-a-kistesom"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Megszületett a kistesóm</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                         <Link to="/stories2" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth34Pic2} alt="megszuletett-a-kistesom"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Hajnali hat óra múlt tíz perccel.
                        </p>
                        <p>
                            Kelnünk kellett, mert úgy volt, hogy iskolába megyünk, az Apa pedig dolgozni. Felöltöztünk, megfésülködtünk és lementünk reggelizni. Alig kaptunk be pár falatot, amikor az Anya előtolatott a nagy hasával, és azt mondta, hogy aznap nem kell mennünk iskolába, és az Apa se menjen dolgozni, mert ő szinte teljesen biztosnak érzi, hogy ma meg fogsz születni. Mi nagyon megörültünk, és hoztuk az Anya és a Te csomagjaidat. Gyorsan értesítettük a Mamáékat, autóba ültünk, és indultunk le a kórházba.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Ott csináltak egy CTG-t, megvizsgálták az Anyát, és megállapították, hogy bizony-bizony aznap tuti, hogy megszületsz.
                </p>
                <p>
                    Kaptunk egy szép szobát, ahol leraktuk a bőröndöket, szatyrokat, és nemsokára már vajúdott is szeretett Anyukánk.
                </p>
                <p>
                    Egy nagy kék labdára ült, én meg muskotályzsályás forró borogatást készítettem Neki. Nem olyan sokára, pedig relaxációs kazettát is raktunk be, hogy hátha az segít majd a vajúdásban.
                </p>
                <p>
                    Egy kis idő múlva megérkezett Erzsike néni, aki szülésznő, és Őt kértük meg arra, hogy segítsen Neked a világra jönni. Egyre sűrűbben jelentkeztek és egyre erősödtek a fájások. Így aztán úgy határozott az Anya, hogy át szeretne menni egy igazi szülőszobára, ahol kád is van.
                </p>
                <p>
                    Erzsike néni már ment is, hogy egy jó kis citromillatú vizet készítsen a kádba. Mi pedig megvártuk az egyik fájásszünetet, és Anyát támogatva indultunk át a szülőszobába. Útközben a folyósón megrepedt a magzatburok, és elfolyt a fejvíz. Ettől a többi fájás még erősebb lett. De a víz kicsit csillapította, mikor az Anya beleült.
                </p>
                <p>
                    Nemsokára székelési ingere lett, ami azt jelenti, hogy már benne vagy a szülőcsatornában, és fejeddel nyomod a végbelet. Aztán elment a többi magzatvíz is. Most már a fájások iszonyú kemények lettek, szinte percenként jöttek, és nagyon erősek voltak. Mi már nagyon nagy izgalomban voltunk.
                </p>
                <p>
                    Majd azt kérdezte Erzsike néni, hogy nem akar-e kijönni a kádból az Anya, aki azt válaszolta, hogy kipróbálja szárazon is a vajúdást. Így hát kisegítettük a kádból, az Apa pedig megtörölte. Lógott a mennyezetről egy kötél, ami direkt a vajúdó nőknek volt kitalálva. Az Anya abba belecsimpaszkodott, és úgy nyomott, mert már TOLÓFÁJÁSAI JÖTTEK!
                </p>
                <p>
                    Sok idő eltelt már, de Te csak nem bújtál elő. Ez a póz Neked nem volt jó, és föl-le lifteztél a szülőcsatornában. De rosszul nem lehettél, mert Erzsike néni minden fájás után meghallgatta a szívedet. S mikor már nagyon sok idő után sem történt semmi, azt mondta az Anyának , hogy próbáljon meg fekve kitolni Téged.
                </p>
                <p>
                    Közben megérkezett a Mama is. Most még egy emberrel több izgult, szurkolt Neked.
                </p>
                <p>
                    A keményedések meg csak jöttek, csak jöttek, s láss csodát, egyszer csak megjelent a fejedből egy diónyi részecske! Mi pedig megsimogattuk, simogatásunkkal bíztattunk, az Anyát pedig azzal, hogy egy kis tükröt tartottunk a hüvelye elé, s így megnézhetett Téged. Aztán egyre több és több látszott fejecskédből, s a következő fájással ki is gördült szépen. Aztán még egy keményedés jött, és kicsusszant a tested is.
                    <br/>Mi majdhogynem az égig ugrottunk örömünkben.
                </p>
                <p>
                    2002. október 30-án déli 12 óra előtt tíz perccel, megjött az új kis családtag!

                </p>
                <p>
                    Füzesi Gyöngyvér, 11 éves
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to="/stories2">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
