import React, {useRef} from "react";
import { Link } from "react-router-dom";
import { Button, Modal} from 'react-bootstrap'; 
import emailjs from '@emailjs/browser';

import "../../CSS/bekesdulatraining.css"
import "../../CSS/form.css"

import DoulaTrain from "../../image/dula_treningek.png"

const sendEmail = (e) => {
  e.preventDefault();
  
  emailjs.sendForm('service_nclcu9j', 'template_f8fh6j8', e.target, 'dvGDZxVnl8xRc5665');
  alert('Jelentkezését továbbítottuk!');
  document.getElementById("sendbox").reset();
  


}

class Bekesdulatrening extends React.Component {  
constructor(){  
  super();  
  this.state={  
    show:false  
  }  
}  

handleModal(){  
  this.setState({show:!this.state.show})  
}  
render(){
  return (
    <div className="doula">
      <div className="doula-trening">

        <div className="doula-trening-container">
          <div className="doula-trening-head">
              <h1>Békés Dúlatréning</h1>
              <h2>alapképzés</h2>
          </div>
          <div className="doula-trening-column">
              <div className="doula-trening-img-container">
                  <img src={DoulaTrain} alt=""/>
              </div>
              <div className="doula-trening-text">
                  <p>
                      2004 óta folyamatosan szervezek dúla alap- és továbbképzéseket. A több, mint 40 csoport és az alaptréninget végzett kb. 
                      400 résztvevő száma alapján elmondhatom, hogy Magyarországon jelenleg én rendelkezem a legnagyobb múlttal a kórházi szülések kísérésére (is) felkészítő tréningek szervezésében és vezetésében. A képzéseket a tréning előadóival, a tapasztalataink és a résztvevők visszajelzései alapján folyamatosan alakítjuk, fejlesztjük.
                  </p>
                  <p>A felnőttképzési törvény szabályainak eleget téve a tréning a B/2020/000659 számmal van nyilvántartásba véve.
                  </p>
              </div>
          </div>

          <p>Célom, hogy már az alaptréningen átadjuk a dúlai hivatás gyakorlásához legszükségesebb ismereteket, melyek bővítésére a továbbképzéseken, 
              az esetmegbeszélő csoportokon és a műhelymunka (Dúlaműhely) keretein belül biztosítok lehetőséget.
          </p>

          <p>Célom, hogy már az alaptréningen átadjuk a dúlai hivatás gyakorlásához legszükségesebb ismereteket, 
              melyek bővítésére a továbbképzéseken, az esetmegbeszélő csoportokon és a műhelymunka (Dúlaműhely) keretein belül biztosítok lehetőséget.
          </p> 

          <p>
              A képzés egyre elismertebb az orvosok, szülésznők, más szülés körüli segítők körében, és nagy érdeklődésre tart számot a dúlai hivatás iránt érdeklődők között is.
          </p>

          <p>A dúla alaptréning után tehát nem feltétlenül egyedül, hanem a dúlatársak 
              támogatásával indulhatnak el a tréningen résztvevők a dúlává válás útján.
          </p>

          <h5>2023 tavaszán a nagy érdeklődésre való tekintettel újra indul csoport!</h5>

          <p>
              A tréning valamennyi kiváló előadójával – mint ahogy eddig is – mindent megteszek azért, 
              hogy magas minőségű, pontos és hiteles információkon alapuló képzésben részesüljenek a 
              Békés Dúlatréningre jelentkezők. Az alapképzés két, egymásra épülő tréningből áll. Az első az önismereti, motivációs tréning, tágabb lehetőséget nyújt az önmagunkban való elmélyedésre, a kb. egy hónappal későbbre meghirdetett 4 napos dúlatréning pedig a dúlai hivatással kapcsolatos praktikus információk feldolgozására.
          </p>

          <p>
              Az alaptréning elvégzése után a Békés Dúlaműhelyben mélyítheted tovább az ismereteidet, egy 150-170 órás továbbképzés keretein belül.  Az itt folyó munka egyrészt sokféle szakmai ismeretet nyújt, másrészt teret ad a további önismereti munkának.
          </p>

          <p>
              A Békés Dúlatréninget végzett dúlák számára folyamatosan egyéni illetve csoportos szupervíziós lehetőséget biztosítok.
          </p>

          <div className="doula-trening-details">
              <div className="doula-treningBx">
                  <h4>Mit nyújt a tréning?</h4>
                  <ul className="doula-trening-list">
                      <li className="doula-trening-has-before">A tréningen – a mögöttem álló 20 évnyi, több, mint száz képzés tapasztalatai alapján – egy letisztult, de folyamatosan újuló, a mindenkori csoport igényeihez rugalmasan alkalmazkodó tematikát használok.</li>
                      <li className="doula-trening-has-before">Ablakokat nyitok olyan témák, szakterületek felé, amelyek lehetővé teszik, hogy az alaptréninget végzett dúlák ismeretei tovább mélyülhessenek abba az irányba, amelyek felkeltették az érdeklődésüket (pl. a tréning után többen perinatális szaktanácsadó, aromaterapeuta vagy szoptatási tanácsadói képzésre jelentkeznek vagy elindulnak a bábává válás útján.)</li>
                      <li className="doula-trening-has-before">A tényszerű, konkrét ismeretek nyújtása mellett jelentősen építek a résztvevők tapasztalataira, tudására, teret adok a kérdéseik, gondolataik megfogalmazására és ezek közösen megbeszélésére.</li>
                      <li className="doula-trening-has-before">Folyamatosan és érzékenyen figyelek az egyes csoporttagokban zajló belső folyamatokra és a csoportdinamikára is, és segítem az önismereti illetve feldolgozó munkát.</li>
                      <li className="doula-trening-has-before">A tréning előadói legjobb tudásukkal, ugyanakkor távolságtartás nélkül, a női kör tagjaiként vesznek részt a képzésben.</li>
                      <li className="doula-trening-has-before">A tréning kiváló lehetőséget nyújt olyan nők számára is, akik vagy a gyermekáldásra készülnek vagy már várandósok, és hiteles információk alapján szeretnének a szülésükre és az anyaságra felkészülni.</li>
                      <li className="doula-trening-has-before">Az alaptréning a visszajelzések alapján mindig sokkal többet ad egyszerű dúlaképzésnél, és ez annak is köszönhető, hogy általában nagyon hamar kialakul a bizalom, a nyitottság és az elfogadás a csoport tagjai között.</li>
                      <li className="doula-trening-has-before">Az alaptréninget végzetteknek nem engedem el a kezét. Lehetőségük van a Békés Dúlakör esetmegbeszélő csoportjain részt venni, beiratkozhatnak a Dúlaműhelybe, és a tréning végén egyéb utakat is mutatok az ismereteik bővítésére.</li>
                      <li className="doula-trening-has-before">A Békés Dúlatréninget végzett dúlák számára szupervíziós lehetőséget biztosítok.</li>
                  </ul>
              </div>
          </div>

          <div className="doula-trening-button-box">
            <Button className="doula-trening-button" onClick={()=>this.handleModal()}>Ha szeretnél jelentkezni<br/>itt és most is megteheted</Button>               
          </div>

          

          <div className="doula-trening-details">
              <h6>Motivációs tréning</h6>
              <ul className="doula-trening-list">
                  <li className="doula-trening-has-before">A következő motivációs tréning <b>2023. szeptember 30. – október 1.</b> (szombat-vasárnap) indul.</li>
                  <li className="doula-trening-has-before">A tréning részvételi díja: 70. 000 Ft</li>
              </ul>
          </div>

          <p>
              Ha esetleg kérdéseid vannak a tréninggel kapcsolatban vagy fizetési könnyítést szeretnél, írj a bekes.emoke@gmail.com címre vagy hívj a 70/ 9 485-481-es számon.
          </p>

          <p>
              A tréninget minimum 8 fő jelentkezése esetén tartom meg. Az önismereti, motivációs tréningen érintjük a születés, a nővé válás, szülés, anyaság és a társas kapcsolatok témáját, valamint különböző gyakorlatok során elmélyítjük a segítő kapcsolathoz nélkülözhetetlen képességeinket, készségeinket (pl. értő figyelem, empátia, elfogadás). Ez a tréning az alapja az erre épülő 4 napos dúlatréningnek, ahol a szülés, születés területén dolgozó szakemberek adják át az ismereteiket, tapasztalataikat a leendő dúláknak. Mindkét tréning bejárással zajlik, de a vidékről érkező résztvevőknek, valamint – a késő estig (általában 22 óráig) tartó tréningnapok miatt – a budapestieknek is igény esetén szálláslehetőséget biztosítok a helyszínen.
          </p>

          <p>
              A jelentkezéseket a befizetések sorrendjében fogadom, a résztvevőknek részletes tájékoztatót küldök. Részletfizetési lehetőséget biztosítok, erről személyesen (telefonon vagy email-en keresztül) lehet velem egyeztetni.
          </p>

          <p>
              Amennyiben valamilyen okból le kell mondanod a részvételedet, tájékoztatlak, hogy a tréning hetében történő lemondás esetén a részvételi díj 50%-át tudom visszafizetni, 48 órán belüli lemondás esetén azonban már ezt sem.
          </p>

          <p>
              <i>Bankszámla szám: Békés Emőke<br/>CIB: 10702332-66569772-51100005</i>
          </p>

          <div className="doula-trening-details">
              <h6>Dúlatréning</h6>
              <ul className="doula-trening-list">
                  <li className="doula-trening-has-before">A következő dúlatréning, amely a motiváció tréningre épül, <b>2023. november 9-12-én</b> (csütörtök reggeltől - vasárnap délutánig) indul.</li>
                  <li className="doula-trening-has-before">A tréning részvételi díja: 110. 000 Ft</li>
              </ul>
          </div>

          <p>
              Amennyiben valamilyen okból le kell mondanod a részvételedet, tájékoztatlak, hogy a tréning hetében történő lemondás esetén a részvételi díj 50%-át tudom visszafizetni, 48 órán belüli lemondás esetén azonban már ezt sem.
          </p>

          
          <div className="doula-trening-faq">
              <Link to="/gyik" className="doula-trening-btn">Olvasd el a leggyakrabban előforduló kérdésekre adott válaszokat a tréninggel kapcsolatban!</Link>
          </div>
          


          <div className="doula-trening-topic">
              <div className="doula-trening-topicBx">
                  <h4>A dúlatréning témái ( a teljesség igénye nélkül):</h4>
                  <ul className="doula-trening-list">
                      <li className="doula-trening-has-before">A dúlaság alapelvei</li>
                      <li className="doula-trening-has-before">A dúla szerepe és lehetőségei a szülésre felkészítésben</li>
                      <li className="doula-trening-has-before">A várandósság és a gyermekágy lélektani jellemzői</li>
                      <li className="doula-trening-has-before">A vajúdás és a szülés a bába szemével</li>
                      <li className="doula-trening-has-before">A vajúdás előrehaladásának nyomon követése külső jelek alapján</li>
                      <li className="doula-trening-has-before">Vajúdástámogatás</li>
                      <li className="doula-trening-has-before">Nehéz helyzetek</li>
                      <li className="doula-trening-has-before">A dúla szerepe császármetszés esetén</li>
                      <li className="doula-trening-has-before">Az apáknak nyújtott támogatás</li>
                      <li className="doula-trening-has-before">A gyermekágyas időszak alatti gondozás</li>
                      <li className="doula-trening-has-before">A dokumentáció készítése</li>
                      <li className="doula-trening-has-before">Szoptatás</li>
                      <li className="doula-trening-has-before">Aromaterápiás és homeopátiás ismeretek a vajúdás, a szülés és a gyermekágy idejére</li>
                      <li className="doula-trening-has-before">Kommunikációs gyakorlatok</li>
                      <li className="doula-trening-has-before">A szuggesztív kommunikáció hatásai</li>
                      <li className="doula-trening-has-before">Kompetencia-határok</li>
                      <li className="doula-trening-has-before">Dúlapraktikák</li>
                      <li className="doula-trening-has-before">Dúlamesék</li>
                  </ul>
              </div>
          

              <div className="doula-trening-perform">
                  <h4>A dúlatréning eddigi előadói:</h4>
                  
                  <ul className="doula-trening-list">
                      <li className="doula-trening-has-before">Andrek Andrea – pszichológus </li>
                      <li className="doula-trening-has-before">Békés Emőke szülésfelkészítő és családkísérő dúla, pszichopedagógus – tréner</li>
                      <li className="doula-trening-has-before">Békési Beáta – klinikai szakpszichológus </li>
                      <li className="doula-trening-has-before">Feller Adrienne – aromaterapeuta </li>
                      <li className="doula-trening-has-before">Haas György – dúla – tréner</li>
                      <li className="doula-trening-has-before">Hoppál Bori – testtudat oktató, dúla</li>
                      <li className="doula-trening-has-before">Kovács Judit – aromaterapeuta</li>
                      <li className="doula-trening-has-before">Dr. Kürti Katalin – homeopata orvos, a Magyar Homeopata Egyesület elnöke</li>
                      <li className="doula-trening-has-before">Lénárd Orsolya – szülésfelkészítő és szüléskísérő dúla</li>
                      <li className="doula-trening-has-before">Molnár Judit – klinikai szakpszichológus</li>
                      <li className="doula-trening-has-before">Morvay Réka – szoptatási tanácsadó, dúla, pszichológus</li>
                      <li className="doula-trening-has-before">Noll Andrea Nandu – holisztikus bába</li>
                      <li className="doula-trening-has-before">Rákócziné Krämer Ágnes – szülésznő, szoptatási tanácsadó</li>
                      <li className="doula-trening-has-before">Rózsa Ibolya – IBCLC szoptatási tanácsadó</li>
                      <li className="doula-trening-has-before">Szászné Bán Judit – pszichológus</li>
                      <li className="doula-trening-has-before">Szonda Györgyi – dúla, aromaterapeuta</li>
                      <li className="doula-trening-has-before">Sződy Judit – pszichológus, IBCLC szoptatási tanácsadó</li>
                      <li className="doula-trening-has-before">Tamás Dorka mentálhigiénés tanácsadó – tréner</li>
                      <li className="doula-trening-has-before">Varga Katalin – klinikai szakpszichológus, hipnoterapeuta</li>
                  </ul>
              </div>
          </div>
        </div>

      </div>
      <div class="appli-box">    
      <Modal  show={this.state.show} onHide={()=>this.handleModal()}>  
            <Modal.Header closeButton></Modal.Header>  
            <Modal.Body>
            <div >
                <div class="appli-container">
                    <div class="form">
                    <h2 >Kapcsolatfelvétel</h2>
                    <form id='sendbox' name='sendbox' onSubmit={sendEmail}>
                        <div>
                        
                        <div className="appli-inputBox">
                            <label>Neved (kötelező)</label>
                            <input type="text" name="name"  id="name" required/>
                        </div>

                        <div className="appli-inputBox">
                            <label>Születési neved (kötelező)</label>
                            <input type="text" name="birthname" id="birthname" required/>
                        </div>

                        <div className="appli-inputBox">
                            <label>Születési dátumod (kötelező)</label>
                            <input type="text" name="birthday" id="birthday" required/>
                        </div>

                        <div className="appli-inputBox">
                            <label>Születési helyed (kötelező)</label>
                            <input type="text" name="birthplace" id="birthplace" required/>
                        </div>

                        <div className="appli-inputBox">
                            <label>Édesanyád születési neve (kötelező)</label>
                            <input type="text" name="mother" id="mother" required/>
                        </div>

                        <div className="appli-inputBox">
                            <label>Legmagasabb iskolai végzettséged (kötelező)</label>
                            <input type="text" name="school" id="school" required/>
                        </div>

                        <div className="appli-inputBox">
                            <label>Számlázási címed (kötelező)</label>
                            <input type="text" name="addres" id="addres" required/>
                        </div>

                        <div className="appli-inputBox">
                            <label>Telefonszámod</label>
                            <input type="text" name="phone" id="phone" required/>
                        </div>  

                        <div className="appli-inputBox">
                            <label>e-mail cím (kötelező)</label>
                            <input type="text" name="email_from" id="emailFrom" required/>
                        </div>
                        <div class="appli-checkbox">
                            <label for="vehicle"></label><br/>
                            <input type="checkbox" name="vehicle" id="vehicle" value="true" required/><br/>
                        </div>
                        <div class="alert">
                            <p> Elolvastam és elfogadom az <a href="#" >Adatvédelmi tájékoztatót</a>. A jelentkezési lapon szereplő személyes adataim kezeléséhez és megőrzéséhez hozzájárulok. Adataim továbbítását csak a képzésemben közreműködő személyek és a jogszabályban felhatalmazott szervek felé engedélyezem. Megismertem és tudomásul vettem az adatkezelési tájékoztatóban foglaltakat, így azt, hogy személyes adataim a 2013. évi LXXVII. Tv. 21.§ előírásai alapján kerülnek kezelésre. Megőrzésük a jogszabály alapján 8 év. Adataim továbbítását csak a képzésemben közreműködő személyek felé engedélyezem, a jogszabályban felhatalmazott szervek felé való továbbításról külön rendelkezem.</p>
                        </div>

                        <div className="appli-button-container">
                            
                            <Button type="submit">Küldés</Button>  
                        </div>
                        </div>              
                    </form>
                    </div>
                </div>
            </div>
            </Modal.Body>  
            
          </Modal>  
        </div>
    </div>
  )
}
}  
export default Bekesdulatrening;
