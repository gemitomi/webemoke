import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog21Pic1 from "../../../image/blog/blog-21-hero-elmegyek-elmegyek-hosszu-utra-megyek-3.png";
import Blog21Pic2 from "../../../image/blog/blog-21-elmegye-elmegyek-hosszu-utra-megyek-3.jpg";

export default function SubBlog21() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog21Pic1} alt="elmegyek-elmegyek-hosszu-utra-megyek-3"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Elmegyek, elmegyek, hosszú útra megyek… 3.</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2012. augusztus 20.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog2" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog21Pic2} alt="elmegyek-elmegyek-hosszu-utra-megyek-3"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Jennifer kanadai származású, Amszterdamban élő dúla. Amikor megérkeztünk hozzá, egy csodás ház aprócska kertjébe invitált minket. Ő az a dúla, aki idén ősszel először szervez Hollandiában dúlaképzést, ami számomra nagyon érdekes, hiszen azt gondoltam, hogy ennek ott már nagy hagyománya van.
                        </p>
                        <p>
                            Julcsi mesélte, hogy furcsamód Hollandiában – bár a társadalombiztosítás az otthonszülést támogatja, és a közelmúltig csak orvosilag indokolt esetben szülhettek térítés nélkül kórházban a nők – ma már egyre többen kórházban szeretnék világra hozni a gyermeküket. 
                        </p>

                    </div>
                </div>

                <p>
                    Bizonyára ez sokakat meglep, hiszen mi itt Magyaroszágon arra vágyunk, hogy legális keretek között, az orvostársadalom által is elfogadottan lehessen otthon vagy születésházakban szülni, és abban szinte reménykedni sem merünk, hogy mindezt esetleg a TB finanszírozza. Sajnos a világban szinte mindenütt mutatkozó tendenciák Hollandiát sem kerülik el, a szülés ott is medikalizálódik, és lassan elültetik az anyákba a félelmet azt az illúziót keltve, hogy a szülés a kórházakban minden esetben biztonságosabb.
                </p>
                <p>
                    Mivel eddig kevesen szültek kórházban, így nem volt nagy az igény a képzett, kórházi szülések kísérésében is jártas dúlák iránt. Jennifer azonban, aki kórházi szüléseket is kísér, felismerte, hogy erre hamarosan egyre nagyobb igény lesz. Sokat beszélgettünk az én képzési tapasztalataimról is és egyetértettünk abban, hogy azok számára, akik az egészségügyi ellátórendszerben szeretnének dúlai munkát végezni, azoknak nagy szükségük van kommunikációs ismeretekre is.
                </p>
                <p>
                    Ő háromnapos alaptréninget tervez, amire egy két napos – főként gyakorlati – továbbképzést épít. Bár a tréninget akkreditáltatni fogja, azt mondja, a kórházak felé ez nem jelent semmit. 🙁 Bíztattam őt, mert úgy tapasztalom, hogy a minőségi munka mégis elnyeri előbb-utóbb az elismerést.
                </p>
                <p>
                    Ismét megbizonyosodtam arról, hogy sajnos kórházi szüléseket kísérő dúlának lenni mindenhol nehéz feladat.  Az viszont jó, hogy egyre többen vagyunk, és elindult az összefogás és az egymást segítő kommunikáció a különböző országok dúlái között.
                </p>





                
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog2">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
