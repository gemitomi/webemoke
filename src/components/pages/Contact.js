import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';



import Location1 from "../../image/location_1.png"
import Mail1 from "../../image/mail_1.png"
import Call1 from "../../image/call_1.png"

export default function Contact() {
  

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_nclcu9j', 'template_f8fh6j8', e.target, 'dvGDZxVnl8xRc5665');
  }
   
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
              <form onSubmit={sendEmail}>
                <div class="formBox">
                  
                  <div class="inputBox w50">
                    <input type="text" name="surname"  id="surname" required/>
                    <span>Vezetéknév</span>
                  </div>

                  <div class="inputBox w50">
                      <input type="text" name="firstname" id="firstname" required/>
                      <span>Keresztnév</span>
                  </div>
                  
                  <div class="inputBox w50">
                      <input type="text" name="email_from" id="emailFrom" required/>
                      <span>e-mail cím</span>
                  </div>

                  <div class="inputBox w50">
                      <input type="text" name="phone" id="phone" required/>
                      <span>Mobilszám</span>
                  </div>

                  <div class="inputBox w100">
                      <textarea name="message" id="message" required></textarea>
                      <label htmlFor='message'>Kérem küldjön nekem üzenetet itt...</label>
                  </div>

                  <div class="inputBox w50">
                      <Button type="submit" >Küldés</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
  </section>
  </div>
  )
  
}
