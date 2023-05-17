import React from "react";

import Location1 from "../../image/location_1.png"
import Mail1 from "../../image/mail_1.png"
import Call1 from "../../image/call_1.png"

export default function Contact() {
  return (
    <div>
    <section class="contact">
      <div class="container">
        <div class="contactinfo">
          <div>
              <h2>Kapcsolat</h2>
              <ul class="info">
                  <li>
                      <span><img src={Location1}/></span>
                      <span>2040 Budaörs<br/>
                          Napsugár sétány 4. II/13</span>
                  </li>
                  <li>
                      <span><img src={Mail1}/></span>
                      <span>bekes.emoke@gmail.com</span>
                  </li>
                  <li>
                      <span><img src={Call1}/></span>
                      <span>+36-70-948-5481</span>
                  </li>
              </ul>
          </div>
        </div>
            <div class="contactForm">
              <h2 >Kapcsolatfelvétel</h2>
              <div class="formBox">
                <div class="inputBox w50">
                    <input type="text" required/>
                    <span>Vezetéknév</span>
                </div>
                <div class="inputBox w50">
                    <input type="text" required/>
                    <span>Keresztnév</span>
                </div>
                <div class="inputBox w50">
                    <input type="text" required/>
                    <span>e-mail cím</span>
                </div>
                <div class="inputBox w50">
                    <input type="text" required/>
                    <span>Mobilszám</span>
                </div>
                <div class="inputBox w100">
                    <textarea  required></textarea>
                    <span>Kérem küldjön nekem üzenetet itt...</span>
                </div>
                <div class="inputBox w50">
                    <input type="submit" value="Küldés"/>
                </div>
              </div>
            </div>
          </div>
  </section>
  </div>
  )
  
}
