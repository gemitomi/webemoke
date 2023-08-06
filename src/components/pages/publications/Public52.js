import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public52Pic1 from "../../../image/publications/public-52-hero-egy-kep-amely-megallasra-kesztet.png";
import Public52Pic2 from "../../../image/publications/public-51-egy-kep-es-ami-mogotte-van.jpg";

export default function Public52() {
  return (
   <div><section className="section-blog-global">
  <div className="blog-global-container">
      <div className="blog-global-hero">
          <img src={Public52Pic1} alt="egy-kep-amely-megallasra-kesztet"/>
      </div>

      <div className="blog-global-face">
          <h2 className="blog-global-title">Egy kép, amely megállásra késztet</h2>
          <div className="blog-global-profile-container">
              <div className="blog-global-profile">
                  <div className="blog-global-img-container">
                      
                  </div>
                  <div className="blog-global-text">
                      <h3>Békés Emőke</h3>
                      <p>2008.  április 01.</p>
                  </div>
              </div>
              <div className="blog-global-button">
                  <Link to="/publications3" className="blog-global-btn">Publikációim</Link>
              </div>
          </div>

          <div className="blog-globale-column">
              <div className="blog-globale-img-container">
                  <img src={Public52Pic2} alt="egy-kep-amely-megallasra-kesztet"/>
              </div>
              <div className="blog-globale-text">
                  <p>
                      <b>Családdá születünk – hangzik a Születés Hete 2008 jelmondata. A mondatot kísérő képen az idei hét üzenetét hordozó arcokat látjuk, az MTV1 híradójából ismert Nagy Juditot és családját. A családját? De hogyan?</b>
                  </p>
                  <p>
                      Miért így?
                  </p>
                  <p>
                      És a feliratok… Miért így? Hogy kerül oda egy nem családtag? Miért van olyan közel? Vagy messze? Vagy fordítva? Vagy… Mit üzen ez a kép? Neked mit?
                  </p>
                  

              </div>
          </div>
          <p>
              Meghökkentő kép fogadja az idei Születés Hete 2008 országos megnyitójára anyák napján az Aranytíz Művelődési Központba látogató közönséget vagy a Nők Lapja mellékleteként megjelenő országos programfüzet borítóját megpillantó olvasókat. A „Családdá születünk” jelmondathoz tartozó fotón egy kis család és egy dúla látható meghitt közelségben, feliratos pólóban, amelynek felirata nem illeszkedik a viselőjéhez, hanem zavart keveredést mutat. Meghökkent? Felkavar? Vonz vagy eltol magától ez a kép? Kinek mit üzen? Kattints a képre, és nézd meg jobban!
          </p>
          <p>
              Íme a Születés Hete 2008 arcai. Arcukat adták, de harcukat vívják majd e gesztus nyomán, most már bizonyos, mert az a mód, ahogyan ezt megtették, nem hagyja békén az embert. Egyre többen vagyunk, akik fontosnak tartjuk a szülés, születés háborítatlanságának biztosítását, de valljuk be, ez a kép sokunkban megérint, felkavar, megmozgat valamit, amiről az első pillanatban nem is biztos, hogy tudjuk, mi az. Van, aki zseniálisnak, van, aki felháborítónak nevezi. Akad, aki egyszerűen csak zavarosnak, mások hatásvadásznak. Akárhogy is, de nem tudunk közömbösen elmenni mellette. Dolgozik bennünk.
          </p>
          <p>
              Május 4-én, vasárnap a Születés Hete országos nyitónapján, az Aranytíz Művelődési Központ Bartók–Kodály-termében ez a kép megelevenedik, s Nagy Judit, Kolesár Krisztián, Békés Emőke, Lovász Irén „Családdá születünk” című történetmesélése kezdetét veszi. „Hangulatképek családdá születésünkről. Hetvenkét óra, amelyre örökre emlékezni fogunk. Történettöredékeinket Lovász Irén dalai fűzik össze” – írja a programfüzet. Vajon mit éltek át s élünk velük át mi is? Mi lehet olyan erős, hogy a nyolcvan perc után több órát is érdemes ennek a jegyében eltölteni? Miért olyan biztos, hogy sokan lesznek a később, jóval a Születés Hete után sorra kerülő egész napos rendezvényen, az első dúlanapon is?
          </p>
          <p>
              Kezdjük el megérteni most. Mit ébreszt bennünk ez a kép? Mit másokban? Ha szívesen megosztod másokkal érzéseidet, benyomásaidat, gondolataidat, ha szívesen megismered másokét, kattints ide, és bekapcsolódhatsz a közös gondolkodásba: Fórum. Ha a Születés Hete országos megnyitójának a részletes programjáról elsők között szeretnél értesítést kapni, benne a Családdá születünk történetmesélés pontos helyével és időpontjával, kattints ide: programértesítő igénylése. Ha az imént említett első dúlanapról szeretnél bővebb tájékoztatást kérni, akkor pedig kattints ide: tájékoztató a dúlanapról.
          </p>
          <p>
              <b>Köszönjük!</b>
          </p>


          <p>
              <a href="https://nlc.hu/baba/20080401/egy_kep_ami_megallasra_kesztet/">https://nlc.hu/baba/20080401/egy_kep_ami_megallasra_kesztet/</a>
          </p>
      </div>

      <div className="blog-global-tags">
          <p>Címkék:</p>
          <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications3">Publikációim</Link>
      </div>
  </div>
</section>
</div>
)
}
