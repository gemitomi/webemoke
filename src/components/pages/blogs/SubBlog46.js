import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog46Pic1 from "../../../image/blog/blog-46-hero-ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-2.png";
import Blog46Pic2 from "../../../image/blog/blog-46-ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot.jpg";

export default function SubBlog46() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog46Pic1} alt="ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-2"/>
            </div>
            <div className="blog-global-face">
                <h2 className="blog-global-title">Ahogy egy szülészorvos látja a dúlaságot és a jövőt – 2. rész</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. április 13.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog46Pic2} alt="ahogy-egy-szuleszorvos-latja-a-dulasagot-es-a-jovot-2"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Milyen helyzet az, amikor a dúla előrébb jöhet és inkább az ő tevékenységére van szükség?</b>
                        </p>
                        <p>
                            Ez kimondottan a vajúdásnak az időszaka. Amikor pedig a kitolási szakhoz érkezünk, akkor már inkább a szülésznő és az orvos kerül előtérbe és a dúlák általában tudják, hogy ez az az időszak, amikor ők inkább háttérbe húzódnak, de két fájás közt egy-egy odasúgott szóval, meg pl. egy törléssel a homlokon nagyon jól tudják, hogy hogyan tudnak közrejátszani pozitív értelemben a szülésnél.
                        </p>
                        

                    </div>
                </div>

                <p>
                    <b>Tehát az, amikor jön a dúla és kendőkkel letakarja a műszereket, ez rendben van?</b>
                </p>
                <p>
                    Maximálisan. Teremtsen ő olyan körülményeket, hogy otthonosan érezze magát a mama. Én két kórházban szülészkedem, mind a két kórház szerintem kimondottan otthonos, és mind a kettő bababarát kórház, az egyik szülőszoba úgy néz ki, mit egy galéria, megvilágított festményekkel, zenével, csenddel, káddal, mindennel ellátva, de a másik kórházban is adottak ezek a feltételek.
                </p>
                <p>
                    <b>Azért az még nincsen, hogy az orvosra nincs is szükség és a szülés szépen lezajlik a szülésznővel?</b>
                </p>
                <p>
                    Azt hiszem, hogy most egy érdekes dolgot fogok mondani. Én afelé hajlok, hogy mi ne legyünk jelen a szülésnél, a szülést vezesse a szülésznő a dúla jelenlétében, és az orvosra csak akkor kerüljön sor, amikor valami komplikáció fölmerül, vagy valami baj van, és én remélem, hogy ezt hamarosan el is fogjuk érni. Úgy kell kiképezzük a szülésznőket, hogy ők maximálisan el tudják látni még a vészhelyzeteket is, de amikor orvosra van szükség, akkor perceken belül ott legyen az orvos és akkor oldja meg a problémát a szülésznővel együtt.
                </p>
                <p>
                    <b>És miért ezt látja jónak?</b>
                </p>
                <p>
                    Azt hiszem, hogy a szülésznő és a szülő nő között talán jobb kapcsolat épül ki, mint az orvos és a szülő nő között. Tehát az orvos a 9 hónapon keresztül megmarad az orvosnak. Én ott vagyok a vajúdás utolsó pillanatában is, de én hozzá nem nyúlok a kismamához, mindent a szülésznő csinál. Csak akkor avatkozok bele, hogy ha gátmetszést kell csinálni, vagy hogyha császármetszést kell csinálni vagy pedig a szülés után valamilyen komplikáció van. Nálam a szülések 90%-a úgy zajlik, hogy a szülésznő vezeti le a szülést. Tehát ő vizsgálja a kismamát, ő fogja a babát a kitolási szakban, ő vágja el  köldökzsinórt, ő veszi le az őssejtet, én csak asszisztálok. Én szerintem ez lesz a jövő, hogy a szülésznők fogják vezetni a szülést, ők türelmesebbek, mint mi vagyunk, nem olyan beavatkozás-pártiak, mint mi orvosok vagyunk, hanem hagyják a természetes módon folyni a dolgokat, és mondom, szerintem még más is a kapcsolat a szülésznő és a szülő nő között is, mint orvos-beteg kapcsolat között.
                </p>
                <p>
                    <b>Ez előrelépés, vagy ezt akár az orvos visszalépésnek is élheti meg?</b>
                </p>
                <p>
                    Ez nagyon jó kérdés, de én úgy gondolom, hogy előrelépés a klasszikus orvoslással szemben, ahol aktívan beavatkoztak az orvosok a szülés folyamatába, tehát standard volt az oxytocinos infúzió, az oxytocinos injekció korábban, amire rájöttünk, hogy amennyire lehet, mellőzni kell.
                </p>
                <p>
                    Remélem, hogy egyre több kórházban ez lesz a tendencia, hogy a szülésznők vezessék majd a szülést.
                </p>
                <p>
                    (Szendrey Edit, Horváth Erzsébet és Balogh Ida)
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
