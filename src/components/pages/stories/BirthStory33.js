import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth33Pic1 from "../../../image/szulestort/szules-story-33-hero-igaz-mese-a-harom-lanyrol.png";
import Birth33Pic2 from "../../../image/szulestort/szules-story-33-igaz-mese-a-harom-lanyrol.jpg";

export default function BirthStory33() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth33Pic1} alt="igaz-mese-a-harom-lanyrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Igaz mese a három leányról</h2>
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
                        <img src={Birth33Pic2} alt="igaz-mese-a-harom-lanyrol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Egyszer voltunk, hol nem voltunk egy négytagú család, aztán egy tavaszi vasárnap reggelen mind a négyen izgatottan figyeltük a tesztcsíkokat, s mikor kiderült, hogy most már öten vagyunk, az ujjongás pillanatai után 11 éves lányom, Gyöngyvér első kérdése ez volt: „Anya, lehetünk majd mi a dúláid?”
                        </p>
                        <p>
                            Abban a pillanatban eszembe jutott, hogy hét évvel ezelőtt, amikor Dorka, a kisebbik lányom megszületett, a karjaimba vettem és a párommal megöleltük, milyen nagyon hiányzott a nővére. Nem lehetett részese ezeknek a pillanatoknak, valahogy a kiteljesedéskor mégis csonka volt a család.
                        </p>
                        

                    </div>
                </div>

                <p>
                    Így most természetesen együtt készültünk. Születésnapomra a nagylányomtól hungarocellből készült puzzle-t kaptam, ami a petefészkekből, a méhből és a méh belsejébe illesztető magzatból állt. Készítettek a baba szobájába rajzokat, együtt vasaltuk a ruháit, és hamarosan született egy dal is, ami csak Neki szólt, és ezt lefekvéskor minden este elénekeltük. Elmaradhatatlan szokás lett a „tökházmosás”, amikor a szappanhabos pocakomat simogatva beszélgettek a babával. Naponta tucatnyi kérdésre kellett megfelelnem, minden fontos és érdekes volt a magzat fejlődésével és a születéssel kapcsolatban.
                </p>
                <p>
                    Dúláim voltak már ezekben a hónapokban is. Ügyesedtek a házimunkában, kivették a csomagokat a kezemből, de legfőképpen – rengeteg szeretetet adtak.
                </p>
                <p>
                    Aztán három héttel ezelőtt reggel együtt indultunk el. Csak az utcánk végére kellett elmennünk, a magánkórházba. Itt mindent biztosítottak nekünk, amire szükségünk volt, nemcsak a körülményeket, hanem leginkább a háborítatlan együttlét lehetőségét. Ekkor már végleg nem volt bennem semmi kétely. Tudtam, hogy csak a családomra van szükségem, de rájuk nagyon.
                </p>
                <p>
                    Aztán az egész sokkal szebb és megindítóbb lett, mint azt gondolni mertem.
                </p>
                <p>
                    Bezárkóztunk a szobánkba, csak mi négyen, s míg én lezuhanyoztam, Gyöngyvér lányom egy éppen kibújó magzatot rajzolt nekem. Borogatásokat is ők készítettek, és fáradhatatlanul cserélgették. De leginkább az érintésekre emlékszem. Arra, ahogy a kádból kinyúlva fogom a kezüket, és arra, ahogy az én kezemet a kibújó baba fejéhez vezették.
                </p>
                <p>
                    s nemsokára már én magam voltam egy szétfeszíthetetlen burokban, ahogy öleltem kicsinyemet és engem a párom és minket a gyermekeink. Annyira tökéletes volt minden.
                </p>
                <p>
                    Néhány nap múlva Gyöngyvér megírta kicsi Eszternek a születése történetét abba a naplóba, amit neki és róla vezet. Amikor egy este váratlanul Dorka megszólalt: „Köszönöm, hogy a kistesómat így megsikeráltátok!”, megnyugtató volt érezni, hogy a maga természetességében mennyire helyén van bennük minden.
                </p>
                <p>
                    Három leányom van.<br/>
                    Örülök neki, hiszen ők is anyák lesznek.<br/>
                    Sok unokát ígérnek.
                </p>
                <p>
                    Nagyon szeretem őket.
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
