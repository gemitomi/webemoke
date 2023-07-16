import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog22Pic1 from "../../../image/blog/blog-22-hero-elmegyek-elmegyek-hosszu-utra-megyek-2.png";
import Blog22Pic2 from "../../../image/blog/blog-22-elmegyeg-elmegyek-hosszu-utra-megyek-2.jpg";

export default function SubBlog22() {
  return (
  <div>
    <section class="section-blog-global">
  <div class="blog-global-container">
      <div class="blog-global-hero">
          <img src={Blog22Pic1} alt="elmegyek-elmegyek-hosszu-utra-megyek-2"/>
      </div>

      <div class="blog-global-face">
          <h2 class="blog-global-title">Elmegyek, elmegyek, hosszú útra megyek… 2.</h2>
          <div class="blog-global-profile-container">
              <div class="blog-global-profile">
                  <div class="blog-global-img-container">
                      
                  </div>
                  <div class="blog-global-text">
                      <h3>Békés Emőke</h3>
                      <p>2012. augusztus 08.</p>
                  </div>
              </div>
              <div class="blog-global-button">
                  <Link to="/blog2" className="blog-global-btn">Blog</Link>
              </div>
          </div>

          <div class="blog-globale-column">
              <div class="blog-globale-img-container">
                  <img src={Blog22Pic2} alt="elmegyek-elmegyek-hosszu-utra-megyek-2"/>
              </div>
              <div class="blog-globale-text">
                  <p>
                      Amszterdamba könnyű beleszeretni. Velem is ezt történt szinte pillanatok alatt.
                  </p>

                  <p>
                      Szabad, vidám, színes, rendezett város. Egy olyan hely, ahol a legkülönbözőbb nemzetiségű, kinézetű, életvitelű, habitusú emberek békében, mosolygósan megférnek egymással. Ahol van levegő, a városban alig jár autó, hiszen a többség kerékpárral közlekedik. Ahol van tér, és munka után a hatalmas parkokban pihennek, beszélgetnek, sütögetnek, sportolnak  az emberek.
                  </p>

              </div>
          </div>

          <p>
              Ahol a tömegközlekedés is egyszerűen és nagyszerűen szervezett, a járművek nemcsak hogy korszerűek, tiszták és pontosak, de a sofőrök mindenkinek köszönnek, nincs álló utas és minden járművön megoldott a mozgássérültek biztonságos utazása is. Nincs olyan fogalom, hogy másság, mert mindenki más, és ez teljesen elfogadott. Fehér és fekete, raszta hajú, extrémen vagy csadorba öltözött nem bámulja meg egymást, és a homoszexuálisok nyugodtan sétálhatnak kézen fogva az utcán.
          </p>
          <p>
              Mint írtam, pillanatok alatt beleszerettem Amszterdamba, de a városi kerékpározás mámorító szabadságát élvezni azonnal, megszokni azonban csak napok alatt tudtam. A legnagyobb kihívást az okozta, hogy annyira szerettem volna nyugodtan ámuldozni azon, ahogy a helyiek kosztümben, várandósan, kisgyerekekkel, hordozókendőben lévő babával, nagybőgővel, kutyával vagy éppen öltönyben és nyakkendőben karikáznak, de ezt nem lehet, ugyanis a sodrásukban tekerve fel kell tudni venni a  fordulatszámot, különben könnyen kerékpáros baleset lehet a vége. 🙂
          </p>
          <p>
              Biciklivel mentünk Julcsival Jenniferhez is, akivel a holland dúlák közül először találkoztam.
          </p>
          <p>
              <i>Folyt. köv.</i>
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
