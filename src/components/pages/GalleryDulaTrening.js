import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CSS/main.css";
import "../../CSS/dulagallery.css"

import PicDulaTr1 from "../../image/gallery/dulatreniggallerykpek/dulatrening_001.jpg";
import PicDulaTr2 from "../../image/gallery/dulatreniggallerykpek/dulatrening_002.jpg";
import PicDulaTr3 from "../../image/gallery/dulatreniggallerykpek/dulatrening_003.jpg";
import PicDulaTr4 from "../../image/gallery/dulatreniggallerykpek/dulatrening_004.jpg";
import PicDulaTr5 from "../../image/gallery/dulatreniggallerykpek/dulatrening_005.jpg";
import PicDulaTr6 from "../../image/gallery/dulatreniggallerykpek/dulatrening_006.jpg";
import PicDulaTr7 from "../../image/gallery/dulatreniggallerykpek/dulatrening_007.jpg";
import PicDulaTr8 from "../../image/gallery/dulatreniggallerykpek/dulatrening_008.jpg";
import PicDulaTr9 from "../../image/gallery/dulatreniggallerykpek/dulatrening_009.jpg";
import PicDulaTr10 from "../../image/gallery/dulatreniggallerykpek/dulatrening_010.jpg";
import PicDulaTr11 from "../../image/gallery/dulatreniggallerykpek/dulatrening_011.jpg";
import PicDulaTr12 from "../../image/gallery/dulatreniggallerykpek/dulatrening_012.jpg";
import PicDulaTr13 from "../../image/gallery/dulatreniggallerykpek/dulatrening_013.jpg";
import PicDulaTr14 from "../../image/gallery/dulatreniggallerykpek/dulatrening_014.jpg";
import PicDulaTr15 from "../../image/gallery/dulatreniggallerykpek/dulatrening_015.jpg";
import PicDulaTr16 from "../../image/gallery/dulatreniggallerykpek/dulatrening_016.jpg";
import PicDulaTr17 from "../../image/gallery/dulatreniggallerykpek/dulatrening_017.jpg";
import PicDulaTr18 from "../../image/gallery/dulatreniggallerykpek/dulatrening_018.jpg";
import PicDulaTr19 from "../../image/gallery/dulatreniggallerykpek/dulatrening_019.jpg";
import PicDulaTr20 from "../../image/gallery/dulatreniggallerykpek/dulatrening_020.jpg";
import PicDulaTr21 from "../../image/gallery/dulatreniggallerykpek/dulatrening_021.jpg";
import PicDulaTr22 from "../../image/gallery/dulatreniggallerykpek/dulatrening_022.jpg";
import PicDulaTr23 from "../../image/gallery/dulatreniggallerykpek/dulatrening_023.jpg";
import PicDulaTr24 from "../../image/gallery/dulatreniggallerykpek/dulatrening_024.jpg";

export default function GalleryDulaTrening() {
  const [current_image, set_current_image] = useState(null)

  

  return (
    <div>
         <section className="galery">
            <div className="galery-galery">
                <h1 className="galery-title">Képek a dúlatréningekről</h1>
            </div>

            <div className="galery-container">
              {
                current_image&& <div className="galery-img-viewer" onClick={e => set_current_image(null)}><img src={current_image} alt="" /></div>
              }
                <div className="galery-box"><img src={PicDulaTr1} onClick={e => set_current_image(PicDulaTr1)}/></div>
                <div className="galery-box"><img src={PicDulaTr2} onClick={e => set_current_image(PicDulaTr2)}/></div>
                <div className="galery-box"><img src={PicDulaTr3} onClick={e => set_current_image(PicDulaTr3)}/></div>
                <div className="galery-box"><img src={PicDulaTr4} onClick={e => set_current_image(PicDulaTr4)}/></div>
                <div className="galery-box"><img src={PicDulaTr5} onClick={e => set_current_image(PicDulaTr5)}/></div>
                <div className="galery-box"><img src={PicDulaTr6} onClick={e => set_current_image(PicDulaTr6)}/></div>
                <div className="galery-box"><img src={PicDulaTr7} onClick={e => set_current_image(PicDulaTr7)}/></div>
                <div className="galery-box"><img src={PicDulaTr8} onClick={e => set_current_image(PicDulaTr8)}/></div>
                <div className="galery-box"><img src={PicDulaTr9} onClick={e => set_current_image(PicDulaTr9)}/></div>
                <div className="galery-box"><img src={PicDulaTr10} onClick={e => set_current_image(PicDulaTr10)}/></div>
                <div className="galery-box"><img src={PicDulaTr11} onClick={e => set_current_image(PicDulaTr11)}/></div>
                <div className="galery-box"><img src={PicDulaTr12} onClick={e => set_current_image(PicDulaTr12)}/></div>
                <div className="galery-box"><img src={PicDulaTr13} onClick={e => set_current_image(PicDulaTr13)}/></div>
                <div className="galery-box"><img src={PicDulaTr14} onClick={e => set_current_image(PicDulaTr14)}/></div>
                <div className="galery-box"><img src={PicDulaTr15} onClick={e => set_current_image(PicDulaTr15)}/></div>
                <div className="galery-box"><img src={PicDulaTr16} onClick={e => set_current_image(PicDulaTr16)}/></div>
                <div className="galery-box"><img src={PicDulaTr17} onClick={e => set_current_image(PicDulaTr17)}/></div>
                <div className="galery-box"><img src={PicDulaTr18} onClick={e => set_current_image(PicDulaTr18)}/></div>
                <div className="galery-box"><img src={PicDulaTr19} onClick={e => set_current_image(PicDulaTr19)}/></div>
                <div className="galery-box"><img src={PicDulaTr20} onClick={e => set_current_image(PicDulaTr20)}/></div>
                <div className="galery-box"><img src={PicDulaTr21} onClick={e => set_current_image(PicDulaTr21)}/></div>
                <div className="galery-box"><img src={PicDulaTr22} onClick={e => set_current_image(PicDulaTr22)}/></div>
                <div className="galery-box"><img src={PicDulaTr23} onClick={e => set_current_image(PicDulaTr23)}/></div>
                <div className="galery-box"><img src={PicDulaTr24} onClick={e => set_current_image(PicDulaTr24)}/></div>
                
            </div>
    </section>
    </div>
  )
}
