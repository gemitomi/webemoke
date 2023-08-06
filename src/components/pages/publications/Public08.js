import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public08Pic1 from "../../../image/publications/public-08-hero-kicsi-es-nagy-szulesbatyuk.png";
import Public08Pic2 from "../../../image/publications/public-08-kicsi-es-nagy-szulesbatyuk.png";

export default function Public08() {
    return (
        <div>
             <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public08Pic1} alt="A kicsi es a nagy „szulesbatyuk”"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A kicsi és a nagy „szülésbatyuk”</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2009. november 24.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public08Pic2} alt="A kicsi es a nagy „szulesbatyuk”"/>
                    </div>
                    <div className="blog-globale-text">
                        <blockquote>
                            <b><i>Kedves Emőke!</i></b>
                        </blockquote>
                        <br/>
                        <blockquote>
                            <i>"Első gyermekemet várom és abban szeretném a tanácsodat kérni, hogy mit vigyek magammal a kórházba, ha beindul a szülés. Már összepakoltam néhány alapvető dolgot, de kíváncsi vagyok, hogy Te mit tartasz fontosnak. Szeretném, ha nem hiányozna semmi a szülőszobán, de ami van ott, azt viszont felesleges nem akarom vinni."<br/>
                            <br/>Válaszodat előre is köszönöm!<br/>
                            Mónika</i>
                        </blockquote>
      
                    </div>
                </div>
                <p>
                    <b>Kedves Mónika!</b>
                </p>
                <p>
                    Azt javasolom, hogy amikor csomagolsz, a szükséges dolgokat két táskába pakold be. Az egyikben legyenek azok a dolgok, amelyek a szülőszobára kellenek, a másikban pedig azok, amelyeket majd a kórházi napok alatt fogsz használni.
                </p>
                <p>
                    A szülőszobára készített csomagban legyenek:
                </p>
                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">az iratok (személyi igazolvány, TAJ-kártya, házassági anyakönyvi kivonat vagy apasági nyilatkozat) várandósgondozási kiskönyv, leletek</li>
                    <li className="blog-globale-has-before">kényelmes ruha a vajúdáshoz (nem feltétlenül hálóing, lehet póló vagy ing, top is)</li>
                    <li className="blog-globale-has-before">papucs (jó, ha olyan, amiben a zuhany alá is lehet állni)</li>
                    <li className="blog-globale-has-before">meleg zokni (vajúdás alatt, de főként szülés után gyakran fázik az anyák lába)</li>
                    <li className="blog-globale-has-before">vastag betétek (legjobb a TENA inkontinencia betét)</li>
                    <li className="blog-globale-has-before">bugyi ( a betéthez kapható (Tenafix) hálós vagy valamilyen eldobhatós bugyi)</li>
                    <li className="blog-globale-has-before">kényelmes melltartó,</li>
                    <li className="blog-globale-has-before">köntös,</li>
                    <li className="blog-globale-has-before">puha wc papír,</li>
                    <li className="blog-globale-has-before">wc-ülőkére helyezhető papírülőke,</li>
                    <li className="blog-globale-has-before">zsebkendő,</li>
                    <li className="blog-globale-has-before">tusfürdő,</li>
                    <li className="blog-globale-has-before">törölközők (zuhanyozás utánra és egy kicsi a homlokborogatáshoz),</li>
                    <li className="blog-globale-has-before">ajakápoló (nagyon hasznos a vajúdás vége felé a kiszáradt ajkakra),</li>
                    <li className="blog-globale-has-before">legyező,</li>
                    <li className="blog-globale-has-before">fényképezőgép (tartalék elemmel),</li>
                    <li className="blog-globale-has-before">szőlőcukor,</li>
                    <li className="blog-globale-has-before">csokoládé,</li>
                    <li className="blog-globale-has-before">banán,</li>
                    <li className="blog-globale-has-before">műzliszelet,</li>
                    <li className="blog-globale-has-before">szendvics (apának is),</li>
                    <li className="blog-globale-has-before">innivaló (2-3 nagy palack ásványvíz),</li>
                    <li className="blog-globale-has-before">pohár, szívószál vagy egy kisebb flakon víz (hogy ne a nagyot kelljen emelgetni),</li>
                    <li className="blog-globale-has-before">cd-k zenehallgatáshoz (a kedved szerint),</li>
                    <li className="blog-globale-has-before">cd lejátszó vagy MP3 abban az esetben, ha nem lenne a szülőszobán zene lejátszására alkalmas eszköz,</li>
                    <li className="blog-globale-has-before">nagy, puha fürdőlepedő és kis pamutsapka a babának (kérheted, hogy ebbe bugyolálják be a babát a születése után, a sapka pedig azért kell, hogy a nedves fejecskéje meg ne fázzon)</li>
                </ul>
                <p>
                    E mellé jó szívvel ajánlom, hogy készíts össze egy másik „szülésbatyut” is. Ebbe teheted mindazt, ami a szívednek, lelkednek kedves és amiről azt gondolod, hogy segíthet a vajúdásban. Ez lehet egy gyertya, amit kifejezetten erre az alkalomra választasz, egy szép kendő, amit a pocakodra köthetsz vagy más, számodra kedves kép vagy tárgy. Ezeket anélkül, hogy az bárkit zavarna, el lehet helyezni a szülőszobán, talán jó lesz majd ránézned és erőt merítened belőle a vajúdás folyamán.
                </p>
                <p>
                    <b>A kórházban töltött napok alatt szükséges</b>
                </p>

                <ul className="blog-globale-list">
                    <li className="blog-globale-has-before">néhány elől gombolható hálóing vagy pizsama</li>
                    <li className="blog-globale-has-before">egy másik papucs is (ha a fürdős papucs vizes lenne)</li>
                    <li className="blog-globale-has-before">intim betétek</li>
                    <li className="blog-globale-has-before">bugyik (nagyon praktikus az eldobhatós)</li>
                    <li className="blog-globale-has-before">szoptatós melltartó, melltartó betét</li>
                    <li className="blog-globale-has-before">tisztálkodó szerek (lehetőleg ne legyen erős illatú, hogy a baba minél inkább a bőröd természetes illatát érezze)</li>
                    <li className="blog-globale-has-before">törölközők</li>
                    <li className="blog-globale-has-before">zoknik</li>
                    <li className="blog-globale-has-before">köntös</li>
                    <li className="blog-globale-has-before">puha wc papír</li>
                    <li className="blog-globale-has-before">wc-ülőkére helyezhető papírülőke</li>
                    <li className="blog-globale-has-before">papír zsebkendő</li>
                    <li className="blog-globale-has-before">evőeszközök, pohár</li>
                    <li className="blog-globale-has-before">fényképezőgép</li>
                    <li className="blog-globale-has-before">telefon, töltő</li>
                    <li className="blog-globale-has-before">jegyzetfüzet, toll</li>
                </ul>
                <p>
                    Érdemes előzetesen érdeklődni a kórházban arról, hogy kell-e a babának is összekészíteni valamit. Van olyan kórház, ahol mindent biztosítanak a kisbaba számára, de az is lehet, hogy pelenkát esetleg ruhákat is vinni kell.
                </p>
                <p>
                    Remélem, tudtam segíteni! Jó készülődést, csomagolást és felejthetetlen, szép szülést kívánok!
                </p>
                <p>Emőke</p>

                <p>
                    <a href="https://nlc.hu/baba/20091124/a_kicsi_es_a_nagy_szulesbatyuk/">https://nlc.hu/baba/20091124/a_kicsi_es_a_nagy_szulesbatyuk/</a>
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
