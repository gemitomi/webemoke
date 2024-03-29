import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog30Pic1 from "../../../image/blog/blog-30-hero-nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-2.png";
import Blog30Pic2 from "../../../image/blog/blog-30-nyomtatasban-megjelent-szivembe-zart-csaladjaim-talalkozojarol-2.jpg";

export default function SubBlog30() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog30Pic1} alt="nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-2"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Nyomtatásban megjelent cikk a Szívembe zárt családok találkozójáról – 2. rész</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. január 24.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog30Pic2} alt="nyomtatasban-megjelent-cikk-a-szivembe-zart-csaladok-talalkozojarol-2"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Emőke kivételes alázattal tölti be a hivatását. Több édesanya elmesélte nekem, milyen észrevétlenül olvadt bele férj és feleség kettősébe, mintha ott sem lenne, mégis, ha szükség volt rá, azonnal tudta, mit kell mondania vagy tennie. Vizet forralt, meleg borogatást készített a vajúdó nő derekára, előkotorta a női táska aljából a szőlőcukrot, elővette a gumipapucsot, megetette az éhségtől szédelgő férjeket vagy éppen lebeszélte őket arról, hogy haladéktalanul „megmentsék” a feleségüket…
                        </p>
                        

                    </div>
                </div>

                <p>
                    Emőke most mégis azon gondolkodik, ki is ő igazából? Hiszen már rég nem csak a gyermekek világra segítése körül segít, hanem ennél jóval többet tesz. A párokat a fogantatástól a szülésen át egészen a gyermekágyig, sőt még azon túl is elkíséri. Tíz év alatt körülbelül százhúsz szülő, édesapa és édesanya köszönheti neki, hogy viszonylag gördülékenyen, biztonságban eveztek át a családi élet vizeire.
                </p>
                <p>
                    – Nagy meglepetések értek a szülésre való felkészítésen – vallja be Ádám, akivel Emőke működésének tíz éves jubileumi ünnepségén, egy óriási kerti partin beszélgettem. –  Például az, hogy jobban megismertem a nőt, akivel élek. Megtudtam, hogyan képzeli el a családot. Addig erről nem esett szó köztünk. A várandósság kilenc hónapja alatt nekem is meg kellett fogalmaznom ezt, és ez elindított egy önismereti úton, amin a mai napig járok. Vissza kellett mennem a gyerekkoromba, a pubertás idejére, amikor elváltak a szüleim, és nekem anyukám mellett a társ, a férj szerepét is be kellett töltenem. Sok minden összekavarodott akkor bennem, ami most letisztult.
                </p>
                <p>
                    Ádám számára a kislánya születése élete legnagyobb élményét jelentette. Soha nem gondolta volna, hogy ő, mint férfi, tevékenyen részt vehet majd benne. Hogy farmerban a szülőágyra mászhat, hogy megtámaszthatja a felesége hátát vajúdás közben, hogy átölelheti, amitől a kedves láthatóan ellazul. Amikor a szülés után komplikációk léptek fel, csak állt, kezében a magzatmázas babával, és hirtelen nem tudta, mitévő legyen. Vigyázz a gyerekünkre! –súgta az öntudatvesztés határán a felesége, majd betolták a műtőbe. Ádám attól kezdve, Emőke támogatásával, átvette az anyai funkciókat. Maga etette, pelenkázta a kislányát, féltékenyen őrizve mindenkitől, akár egy anyaoroszlán. Meztelen mellén altatta, ahol az mindig megnyugodott, és ezt a szokását a kislány – bár már négyéves elmúlt -, máig megőrizte. Emőke ott maradt velük a kórházi szobában négy napon át, egészen addig, amíg az édesanya túl nem volt a veszélyen. A megpróbáltatások ideje alatt meleg barátság szövődött a három ember között. Ádám és a felesége a mai napig bármilyen gyereknevelési vagy párkapcsolati problémával fordulhatnak „őrangyalukhoz”, ő mindig megpróbál segíteni nekik.
                </p>
                <p>
                    Ezzel nincsenek egyedül. A dúla nem engedi el egyetlen vele szült család kezét sem. Az idők során egyszemélyes intézménnyé vált, amelynek neve ( nomen est omen): „békés családkísérő”.
                </p>
                <p>
                    <b> Stabil háttér nélkül nem menne…</b>
                </p>
                <p>
                    Az új foglalkozás nevét a családok találták ki, miután Emőke megkérte őket, írják meg neki, mit jelentett számukra az ő ténykedése. Erre annál inkább szüksége volt, mert nemrégiben az egyik kórház főorvosa tízévi együttműködés után azt a kérdezte tőle: „Mondja, miért választ egy nő dúlát, ha már van szülésznője is?” A dúla mit tehetett mást, szívébe zárt családjaihoz fordult és megkérdezte a vele szült anyákat. Ahogy érkeztek sorban vissza a válaszok, peregni kezdtek lelki szemei előtt a filmek. A szülések, születések gyönyörűséges percei…
                </p>
                <p>
                    Amikor a baba előbukkan, sokszor együtt sírunk a megkönnyebbüléstől, de az is előfordult már, hogy a folyosóról bejöttek a nővérek, mert annyira kacagott a kismama a szülőlabdán ülve.
                </p>
                <p>
                    Nagyon szeretem a hivatásom. Sok áldozatot kíván, de mérhetetlenül sok szeretetet kapok is a családoktól. Kinek adatik meg, hogy ennyi egészséges babával és boldog családokkal igazolhatja: igenis értelme van annak, amit csinál? Azóta tudom, hogy ez lesz az én utam, amikor életemben először hallottam a dúlaságról. Tíz évvel ezelőtt történt, én pszichopedagógusként éppen az Aktív Szülés Program körül dolgoztam. Gyerekkorom óta kerestem, mi lenne az, amivel segíthetnék a kórházban törődés nélkül maradt embereken. Végül a beteg kisgyermekektől érkeztem el a születés csodájáig… Nem mondom, olykor egy-egy szüléskísérés után nagyon elfáradok. Előfordul, hogy hajnalban elmegyek, és talán csak napok múlva érek haza. És sajnos az is megesik, hogy ha valami nem úgy történik, ahogy elképzeltük, sírva megyek haza. Rengeteget köszönhetek a férjemnek, akinek a támogatása nélkül nem kísérhetném ilyen odaadással a családokat. Nézd, itt a jubileumi találkozón is itt áll a bogrács mellett, és főzi a százvalahány embernek a gulyáslevest! De a három gyermekemnek is nagyon hálás vagyok. Azért, mert amikor mennem kell, megértik, és nem tartanak vissza. Azért, mert amikor nem vagyok éppen otthon, akkor is nyugodt lehetek felőlük. Nagyszerű emberek, büszke vagyok rájuk.
                </p>
                <p>
                    Emőke ragyog, amikor a családjáról, a családjairól beszél, én pedig irigyen nézem, ahogy azok teli szeretettel odamosolyognak rá, intenek vagy odakiáltanak valami kedvességet. Olyan, mintha én is a csoda részese lennék, itt a Hűvösvölgy zöld füvében, a százados fák alatt – békességben.
                </p>
                <p>
                    Koronczay Lilla
                </p>
                <p>
                    <i> Nők Lapja 2011.  42. szám</i>
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog2">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
