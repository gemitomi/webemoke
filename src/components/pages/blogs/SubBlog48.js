import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog48Pic1 from "../../../image/blog/blog-48-hero-lanybol-anyava.png";
import Blog48Pic2 from "../../../image/blog/blog-48-lanybol-anyava-valni.jpg";

export default function SubBlog48() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog48Pic1} alt="lanybol-anyava-valni"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Lányból anyává válni</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. február 15.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog48Pic2} alt="lanybol-anyava-valni"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Talán napra pontosan 20 éve, hogy megtudtam, anya leszek. Első gyermekem megfoganásával egy olyan életem végéig tartó kalandos utazásra indultam, aminél nem tudok gyönyörűbbet, nehezebbet, örömtelibbet és felelősségteljesebbet elképzelni.
                        </p>
                        <p>
                            Lányaim vannak, és hát az elsőszülöttem is lassacskán az anyaságra készülődik. Ennek kapcsán és nem utolsósorban azért, mert a hivatásom gyakorlása során is kísérhetem azt a folyamatot, amikor a lányok anyává válnak, gyakran elgondolkodom, mennyivel másabb lehet ezt a változást ma, mint 20 évvel ezelőtt megélni.  
                        </p>
                        
                        

                    </div>
                </div>

                <p>
                     Hogy telnének a kisbabámmal töltött első évek, ha most válnék anyává? Vajon pályakezdőként most is a gyermekvállalást helyezném előtérbe vagy először karriert építenék? Megengedhetném-e magamnak, hogy közel 15 évig otthon legyek a gyerekekkel?
                </p>
                <p>
                    Ahányan vagyunk, annyiféle utat járunk. Mégis azt hiszem, vannak közös gondjaink, örömeink. Az anyává válás óriási változást, külső és belső átalakulást hoz mindannyiunk életébe. Ha van kedved, gyere el, beszélgessünk erről együtt, oszd meg a tapasztalataidat, érzéseidet szülőtársaiddal.
                </p>
                <p>
                     A minivilag.hu és a Mamami Bolt közös szervezésében zajló programról itt olvashatsz részletesebben.
                </p>
                <p>
                    <a href="http://port.hu/pls/w/event.event_page?i_event_id=1622675&i_event_area_id=25&i_city_id=-1&i_topic_id=25&i_county_id=-1">http://port.hu/pls/w/event.event_page?i_event_id=1622675&i_event_area_id=25&i_city_id=-1&i_topic_id=25&i_county_id=-1</a>
                </p>
                <p>
                    Várlak szeretettel kisbabáddal együtt február 28-án, 10.30-ra a XI. Fadrusz u. 12. sz. alá.
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
