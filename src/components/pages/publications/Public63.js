import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public63Pic1 from "../../../image/publications/public-63-hero-megint-a-csaszarosokrol.png";
import Public63Pic2 from "../../../image/publications/public-63-megint-a-csaszarosokrol.png";

export default function Public63() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public63Pic1} alt="megint-a-csaszarosokrol"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Megint a császárosokról</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2007. október 26.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/publications4" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public63Pic2} alt="megint-a-csaszarosokrol"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Kedves Emőke!</b>
                        </p>
                        <blockquote>
                            <i>Olvastam az anyuka cikkét, aki válaszolt a „Csak császáros” témára…
                                <br/>Egy kicsit hozzáfűznék én is, ha lehet…<br/>
                                <br/>2005. október 4-re voltam kiírva szülni a kisfiammal. Természetes szülést terveztünk az orvosommal együtt, teljesen arra készültem lelkileg. Bennem fel sem merült az a lehetőség, hogy császármetszéssel is megszülethet a babám. Ám amikor október 6-án reggel bementünk a kórházba, és felvételre jelentkeztem az osztályon – mert a kismanó még mindig nem adta jelét, hogy ő ki szeretne jönni –, csináltak egy labort, amelyből kiderült, hogy valami nem stimmel.</i>
                        </blockquote>
                        
      
                    </div>
                </div>
                <blockquote>
                    <i>Az orvosom közölte velem, hogy másnap reggel császárral világra segítik ezt a kisbabát a saját érdekében – és persze az én érdekemben –, meg sem fordult a fejemben, hogy tiltakozzam ellene, pedig mondhatom, hideg zuhanyként ért a hír (főleg, hogy apás szülésre készültünk). Utána sajnos a környezetemből a ki nem mondott, de érezhető „lesajnálás” egy kissé megviselt, hogy „…csak császárral szültél?…”. Kérdem én, aki nem szült császárral, honnan tudja, hogy az mennyire nem jó utána? Amíg a szobatársam, aki rendesen szült, másnap már nyugodtan sétált (esetleg az ülés volt kellemetlen), addig én se feküdni, se ülni, se járni nem tudtam normálisan. A fejem megemeléséhez is kell a hasizom, amit addig nem is éreztem, bezzeg akkor!<br/>
                    <br/>És most egy gyönyörű, jókedvű, vidám, szeretni tudó kisfiú szalad elém, ha meglát! Ezúton üzenem azoknak az anyáknak, akik esetleg azon szoronganak, hogy ők nem teljes értékű anyák, csak azért, mert császárosok: ne aggódjanak feleslegesen, ugyanolyan jó és szerető anyák vagyunk, és ugyanúgy megszenvedtünk azért a gyönyörű babáért, csak mi nem órák alatt, hanem utána napokig, hetekig.<br/>
                    <br/>Egy boldog anyuka (Tike)</i>
                </blockquote>
                <p>
                    <b>Kedves Tike!</b>
                </p>
                <p>
                    Szeptember 29-én „Császárvárosok” címmel az ország több pontján tartottak olyan rendezvényeket, kerekasztal-beszélgetéseket, amelyeknek az apropója az volt, hogy az Egészségbiztosítási Felügyelet közzétette a 2006-os év császármetszéses statisztikáit. Mivel a számadatok azt mutatják, hogy az egyes intézmények közötti különbségek nagyok – 15 és 47 százalék között mozognak –, az Egészségbiztosítási Felügyelet kezdeményezi a szakmai szervezeteknél az adatok részletes vizsgálatát.
                    <br/>(Az egyes kórházak császármetszéses statisztikái a www.ebf.hu/csaszarmetszes2006pdf oldalon láthatók.)
                </p>
                <p>
                    Én a budapesti rendezvényen vettem részt, és nagyon fontosnak tartottam, hogy egy asztalhoz ült erről a fontos témáról beszélni szülészorvos, szülésznő, pszichológus, ügyvéd és dúla.
                </p>
                <p>
                    Prof. dr. Rákóczi István, a Szent Imre Kórház osztályvezető főorvosa elmondta, hogy a császármetszések számának emelkedése mögött ok is áll. Ilyen például az, hogy az egyes intézményekben kevésbé tartják fontosnak a természetes szülést, hogy gyakran kényelmi szempontok döntenek a műtét mellett, hogy sok helyen él az az elv, hogy az első császármetszés után mindig császármetszést alkalmaznak, vagy a félelem a műhibaperektől, amely ellen a „biztonságosabb” császármetszéssel védekeznek. Felhívta a figyelmet arra is, hogy a CTG-nek is vannak olyan mellékhatásai, amelyeknek következtében esetleg indokolatlanul végeznek el műtéteket.
                </p>
                <p>
                    Molnár Judit és Orosz Katalin klinikai szakpszichológusok pedig előadásaikban arra hívták fel a figyelmet, hogy milyen hatásai lehetnek császármetszésnek az anya és a baba pszichés állapotára nemcsak a szülést követően, hanem akár felnőttkorban is.
                </p>
                <p>
                    Igazad van, fizikailag nehezebb a felépülés egy műtét után, így akik divatból döntenek a császármetszés mellett, gyakran nem gondolnak arra, hogy a fájdalmat nem tudják megspórolni, s míg a hüvelyi szülésnél ez egy pillanat alatt elmúlik, úgy a műtétet követően napokig megnehezíti az anyának önmaga és a baba ellátását.
                </p>
                <p>
                    Rákóczi professzor arról is beszélt, hogy nem sürgős császármetszés esetén fontos pontosan tisztázni és az anyával is megbeszélni, hogy ez miért történik, mérlegelni az előnyöket és a hátrányokat, és megvizsgálni, hogy milyen más megoldás lehetséges.
                </p>
                <p>
                    Megelőzésképpen pedig azt tartotta fontosnak, hogy olyan orvost és szülésznőt találjon magának a várandós nő, akik nem császármetszéspártiak, olyan kórházat keressen, amelynek jók a mutatói, és azt is, hogy az anya megbeszélje az elvárásait az orvosával. Elmondta, hogy minimálisra kell csökkenteni az orvosi beavatkozásokat (szülésindítás, burokrepesztés, folyamatos CTG), mert ezek mind a műtéti befejezés számának emelkedéséhez vezethetnek.
                </p>
                <p>
                    Hangsúlyozta a folyamatos (szülésznői, illetve dúlai) jelenlét fontosságát, melyet a legkorszerűbb szülészeti ellátásnak nevezett.
                </p>
                <p>
                    Óriási felelősség tehát egy szülésnél a műtét mellett dönteni, ugyanakkor kétségtelen, hogy bizonyos esetekben ez szolgálja leginkább az anya és a baba érdekeit. Ha az anya tisztában van ezzel, és el is fogadja az orvosa döntését, akkor nyilván sokkal könnyebb császármetszés után mind a testi, mind a lelki felépülés.
                </p>
                <p>Emőke</p>


                <p>
                    <a href="https://nlc.hu/baba/20071026/megint_a_csaszarosokrol/">https://nlc.hu/baba/20071026/megint_a_csaszarosokrol/</a>
                </p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications4">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
