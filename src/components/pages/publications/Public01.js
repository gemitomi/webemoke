import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public01Pic1 from "../../../image/publications/public-01-hero-otthon szules-vagy-korhazi-szules.png";
import Public01Pic2 from "../../../image/publications/public-01-otthon szules-vagy-korhazi-szules.png";

export default function Public01() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
             <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Public01Pic1} alt="Otthon szules vagy korhazi szules"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Otthon szülés vagy kórházi szülés?</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. május 05.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                    <Link to="/publications" className="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Public01Pic2} alt="Otthon szules vagy korhazi szule"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Az MTV 1 Nappali című műsorában egy, a szülésére velem készülő anya nyilatkozata hallható, majd a stúdióbeszélgetésben Dr. Bálint Sándor szülész-nőgyógyász beszél az otthonszülés szabályozásáról, valamint arról, hogy a dúlai szemléletnek be kellene kerülnie az egyetemi oktatásba. 🙂
                        </p>
                        <p>
                            A video megtekinthető: <a href="https://mediaklikk.hu/mediatar/">MTV videotár</a>
                        </p>   
                            
                    </div>
                </div>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications">Publikációim</Link>
            </div>
        </div>
    </section>
        </div>
    )
}
