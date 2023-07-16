import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog45Pic1 from "../../../image/blog/blog-45-hero-barcsak-megvalosulna.png";
import Blog45Pic2 from "../../../image/blog/blog-45-barcsak-megvalosulna.jpg";

export default function SubBlog45() {
  return (
  <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Blog45Pic1} alt="barcsak-megvalosulna"/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Bárcsak megvalósulna!</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. május 09.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Blog45Pic2} alt="barcsak-megvalosulna"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            Az MTV 1 Nappali című műsorában egy, a szülésére velem készülő anya nyilatkozata hallható, majd a stúdióbeszélgetésben Dr. Bálint Sándor szülész-nőgyógyász beszél az otthonszülés szabályozásáról, valamint arról, hogy a dúlai szemléletnek be kellene kerülnie az egyetemi oktatásba. 🙂
                        </p>
                        <p>
                            <a href="http://videotar.mtv.hu/videok/2011/05/04/12/Nappali_2011_majus_4.aspx">http://videotar.mtv.hu/videok/2011/05/04/12/Nappali_2011_majus_4.aspx</a>
                        </p>
                        

                    </div>
                </div>

                


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
