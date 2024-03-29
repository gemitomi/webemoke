import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Blog44Pic1 from "../../../image/blog/blog-44-hero-megalakult-a-bekes-dulakor.png";
import Blog44Pic2 from "../../../image/blog/blog-44-megalkult-a-bekes-dulakor.jpg";

export default function SubBlog44() {
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Blog44Pic1} alt="megalakult-a-bekes-dulakor"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Megalakult a Békés Dúlakör</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2011. május 13.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                        <Link to="/blog3" className="blog-global-btn">Blog</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Blog44Pic2} alt="megalakult-a-bekes-dulakor"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            2011. május 4-én este a továbbképzéseknek helyet adó Békés Dúlaműhely két csoportjának összeolvadásából megalakult a Békés Dúlakör. Tagjai olyan dúlák, akik már elvégezték az alapképzést, de fontosnak tartják a közös tapasztalatmegosztást és a folyamatos tanulást.
                        </p>
                        <p>
                            Nagyon szeretem őket. Jó velük együtt lenni, látni a sokszínűségüket, és tudni azt, bár különböző egyéniségek vagyunk, mégis közös alapelvek mentén kísérjük az anyákat a várandósság idején, a szülés óráiban és a gyermekágyas időszakban.
                        </p>
                        <p>
                            Bővebben rólunk a <a href="https://bekesdulakor.hu/">https://bekesdulakor.hu/</a> címen elérhető, most indult, de folyamatosan bővülő oldalunkon lehet olvasni, ahová hamarosan az új tagok bemutatkozója is felkerül.
                        </p>
                        

                    </div>
                </div>

                <p>
                    
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                 <Link to="/olvasnivalok">Olvasnivalók</Link> 
              <Link to="/blog3">Blog</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
