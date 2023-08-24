import React, { useState, useEffect } from "react";
import "../../CSS/main.css";
import "../../CSS/dulagallery.css"

import PicDulaKor1 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-01.jpg";
import PicDulaKor2 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-02.png";
import PicDulaKor3 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-03.jpg";
import PicDulaKor4 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-04.png";
import PicDulaKor5 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-05.jpg";
import PicDulaKor6 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-06.jpg";
import PicDulaKor7 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-07.jpg";
import PicDulaKor8 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-08.jpg";
import PicDulaKor10 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-010.jpg";
import PicDulaKor11 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-011.jpg";
import PicDulaKor12 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-012.jpg";
import PicDulaKor13 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-013.jpg";
import PicDulaKor14 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-014.jpg";
import PicDulaKor15 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-015.jpg";
import PicDulaKor16 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-016.jpg";



export default function GalleryDulaKor() {
  const [current_image, set_current_image] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

 //useEffect(() => {
   // if (current_image){
    //  document.body.style.overflowY = "hidden"
  //  }else{
    //  document.body.style.overflowY = "auto"
   //  }
 // }, [current_image])

  return (
    <div>
         <section className="galery">
            <div className="galery-galery">
                <h1 className="galery-title">Képek a Békés Dúlakör életéből</h1>
            </div>

            <div className="galery-container">
              {
                current_image&& <div className="galery-img-viewer" onClick={e => set_current_image(null)}><img src={current_image} alt="" /></div>
              }
                <div className="galery-box"><img src={PicDulaKor1} onClick={e => set_current_image(PicDulaKor1)}/></div>
                <div className="galery-box"><img src={PicDulaKor2} onClick={e => set_current_image(PicDulaKor2)}/></div>
                <div className="galery-box"><img src={PicDulaKor3} onClick={e => set_current_image(PicDulaKor3)}/></div>
                <div className="galery-box"><img src={PicDulaKor4} onClick={e => set_current_image(PicDulaKor4)}/></div>
                <div className="galery-box"><img src={PicDulaKor5} onClick={e => set_current_image(PicDulaKor5)}/></div>
                <div className="galery-box"><img src={PicDulaKor6} onClick={e => set_current_image(PicDulaKor6)}/></div>
                <div className="galery-box"><img src={PicDulaKor7} onClick={e => set_current_image(PicDulaKor7)}/></div>
                <div className="galery-box"><img src={PicDulaKor8} onClick={e => set_current_image(PicDulaKor8)}/></div>
                <div className="galery-box"><img src={PicDulaKor10} onClick={e => set_current_image(PicDulaKor10)}/></div>
                <div className="galery-box"><img src={PicDulaKor11} onClick={e => set_current_image(PicDulaKor11)}/></div>
                <div className="galery-box"><img src={PicDulaKor12} onClick={e => set_current_image(PicDulaKor12)}/></div>
                <div className="galery-box"><img src={PicDulaKor13} onClick={e => set_current_image(PicDulaKor13)}/></div>
                <div className="galery-box"><img src={PicDulaKor14} onClick={e => set_current_image(PicDulaKor14)}/></div>
                <div className="galery-box"><img src={PicDulaKor15} onClick={e => set_current_image(PicDulaKor15)}/></div>
                <div className="galery-box"><img src={PicDulaKor16} onClick={e => set_current_image(PicDulaKor16)}/></div>
                
            </div>
    </section>
    </div>
  )
}
