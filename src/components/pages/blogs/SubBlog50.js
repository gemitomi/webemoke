import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog50Pic1 from "../../../image/blog/blog-50-hero-az-egyes-beavatkozasok-elonyeirol.png";
import Blog50Pic2 from "../../../image/blog/blog-50-az-egyes-beavatkozasok-elonyeirol.jpg";

export default function SubBlog50() {
  return (
  <div>
     <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog50Pic1} alt="az-egyes-beavatkozasok-elonyeirol-hatranyairol-es-kockazatairol"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Az egyes beavatkozások előnyeiről, hátrányairól és kockázatairól</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. január 04.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog50Pic2} alt="az-egyes-beavatkozasok-elonyeirol-hatranyairol-es-kockazatairol"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            A dúlák a szó eredeti értelmében olyan segítő asszonytársak, akik maguk is szültek már.  Ennek az élménynek az átélése során megélt tapasztalataik segítik őket abban, hogy más vajúdó nőknek megfelelő érzelmi és fizikai támaszt tudjanak nyújtani a szülés óráiban. A régebbi időkben és még ma is az otthoni szüléseknél valóban ez a támogatásuk legfőbb alapja.
                        </p>
                        

                    </div>
                </div>

                <p>
                    De vajon elég-e ez a tudás manapság, amikor a legtöbb szülés intézményben zajlik? Milyen és mennyi ismerettel kell rendelkeznie egy dúlának akkor, ha olyan várandóst kísér hónapokon át, aki majd kórházban szeretné világra hozni a gyermekét?
                </p>
                <p>
                    A válasz nem egyszerű. Vannak ugyanis arra vonatkozó vizsgálatok, hogy ha egy dúla nagyon sokat tud a szülés szakmai kérdéseiről (mert szülésznő vagy bába végzettsége is van), és ezáltal már óhatatlanul ennek a tudásnak a birtokában van egy szülésnél jelen, akkor  a “dúlahatás” – azaz a megszakítás nélküli, odaadó, csak az anya igényeire figyelő jelenlét ereje  – jelentősen csökken. 
                </p>
                <p>
                    Ugyanakkor tudjuk, hogy a szülésre való felkészülés időszakában számtalan kérdésre keresik a választ a leendő szülők. Ezek egy részére az orvosuktól vagy a szülésznőjüktől kérnek – és ideális esetben kapnak is – kielégítő választ, de a tapasztalataink azt mutatják, hogy nagyon sokat és sokfélét kérdeznek a dúlától is. A velem együtt dolgozó dúlákkal egyetértésben úgy látom, hogy azért is fontos, hogy bizonyos témákban legyenek szakmai ismereteink, mert csak korrekt, hiteles forrásokból származó információk átadásával tudjuk segíteni az anyákat abban, hogy szükség esetén megalapozott döntéseket tudjanak hozni majd a várandósságuk és a szülésük folyamán.
                </p>
                <p>
                    Éppen ezért született meg a Békés Dúlaműhelybe járó dúlák között az az igény, hogy az egyes beavatkozások előnyeiről, hátrányairól és kockázatairól beszélgessünk egy szülész-nőgyógyász orvossal is. 
                </p>
                <p>
                    E héten szombaton, azaz január 8-án 9-12 óráig Dr. Domokos Tamás, a Péterfy Sándor Utcai Kórház orvosa lesz a vendégünk, melyre nem csak dúlákat, hanem a téma iránt érdeklődő kismamákat is szeretettel várunk a Budapest, XI. Vak Bottyán u. 3. III./1. szám alá. (Előzetes bejelentkezés szükséges, a bekese@gyermekaldas.hu címen.)
                </p>
                <p>
                    Előadónkról, szemléletéről, tevékenységéről itt is olvashatsz:
                </p>
                <p>
                    <a href="https://nlc.hu/csalad/20090626/uj_szerepben_a_csaszaros_kispapak/">https://nlc.hu/csalad/20090626/uj_szerepben_a_csaszaros_kispapak/</a>
                </p>


            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
