import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
import PicDulaKor9 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-09.png";
import PicDulaKor10 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-010.jpg";
import PicDulaKor11 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-011.jpg";
import PicDulaKor12 from "../../image/gallery/bekesdulakrgallerykpek/bekes-dulakor-012.jpg";

export default function GalleryDulaKor() {
  return (
    <div>
         <section class="galery">
            <div class="galery-galery">
                <h1 class="galery-title">Dúlakör galéria</h1>
            </div>

            <div class="galery-container">
                <div class="galery-box"><img src={PicDulaKor1}/></div>
                <div class="galery-box"><img src={PicDulaKor2}/></div>
                <div class="galery-box"><img src={PicDulaKor3}/></div>
                <div class="galery-box"><img src={PicDulaKor4}/></div>
                <div class="galery-box"><img src={PicDulaKor5}/></div>
                <div class="galery-box"><img src={PicDulaKor6}/></div>
                <div class="galery-box"><img src={PicDulaKor7}/></div>
                <div class="galery-box"><img src={PicDulaKor8}/></div>
                <div class="galery-box"><img src={PicDulaKor9}/></div>
                <div class="galery-box"><img src={PicDulaKor10}/></div>
                <div class="galery-box"><img src={PicDulaKor11}/></div>
                <div class="galery-box"><img src={PicDulaKor12}/></div>
                
            </div>
    </section>
    </div>
  )
}
