import React /*{useRef, useEffect}*/ from "react";
import { Link } from "react-router-dom";
import { Button, Modal} from 'react-bootstrap'; 
/*import emailjs from '@emailjs/browser';*/

import "../../CSS/bekesdulatraining.css"
import "../../CSS/form.css"
import "../../CSS/bekesdulaslider.css"

import DoulaTrain from "../../image/dula_treningek.png"

/*const sendEmail = (e) => {
  e.preventDefault();
  
  emailjs.sendForm('service_ypmq9fn', 'template_odjt9jc', e.target, 'TH5PXQILsu0-BX7d-');
  alert('Jelentkezését továbbítottuk!');
  document.getElementById("sendbox").reset();
}*/

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

handleClose = () => {
  this.setState({ show: false });
}

render(){
 
  return (
    <div className="doula">
      <div className="doula-trening">

        <div className="doula-trening-container">
          <div className="doula-trening-head">
              <h1>Békés Dúlatréning</h1>
              <h2>alaptréning</h2>
          </div>
          <div className="doula-trening-column">
              <div className="doula-trening-img-container">
                  <img src={DoulaTrain} alt=""/>
              </div>
              <div className="doula-trening-text">
                  <p>
                  2004 óta folyamatosan szervezek dúla alap- és továbbképzéseket. A több, mint 50 alaptréningen végzett közel 500 résztvevő száma alapján elmondhatom, hogy Magyarországon a legrégebb óta rendelkezem a kórházi szülések kísérésére (is) felkészítő tréningek szervezésével és vezetésével. A képzéseket a tréning előadóival, a tapasztalataink és a résztvevők visszajelzései alapján folyamatosan alakítjuk, fejlesztjük.
                  </p>
                  <p>A felnőttképzési törvény szabályainak eleget téve a tréning a B/2022/001218 számmal van nyilvántartásba véve.
                  </p>
              </div>
          </div>

          <p>Célom, hogy már az alaptréningen átadjuk a dúlai hivatás gyakorlásához legszükségesebb ismereteket, melyek bővítésére a továbbképzéseken, 
              az esetmegbeszélő csoportokon és a műhelymunka <Link to="/bekesdulamuhely">Békés Dúlaműhely</Link> keretein belül biztosítok lehetőséget.
          </p>

          <p>
              Nagy örömömre a tréningre egyre többször jelentkeznek szülésznők, védőnők vagy más szülés körüli segítők, de nagy érdeklődésre tart számot a korábban teljesen más foglalkozást végzők között is. Sokan jönnek a tréningre olyanok is, akik a saját anyaságukra készülnek vagy a nőiségük, anyaságuk önismereti kérdéseiben szeretnének elmélyülni. 
          </p>

          <p>
            A tréning valamennyi, kiváló előadójával mindent megteszek azért, hogy magas minőségű, pontos és hiteles információkon alapuló képzésben részesüljenek a Békés Dúlatréningre jelentkezők. 
          </p>

          <p>
            Az alapképzés két, egymásra épülő tréningből áll. 
          </p>
          <p>
            Az első az <b>önismereti, motivációs tréning</b> lehetőséget nyújt a résztvevőknek arra, hogy rátekinthessenek a segítői hivatás iránti érdeklődésük motivációira és mindazokra az alapvető készségekre, amelyek a dúlai támogatáshoz szükségesek. 

          </p>

          <p>
            A kb. egy hónappal későbbi <b>4 napos dúlatréning</b> pedig a dúlai hivatással kapcsolatos attitűd, ismeretek, támogatási formák, praktikák és számos más információ megismerésére és feldolgozására szolgál.
          </p>

          <p>
            Mivel minden segítői munka - így a dúlai hivatás is – megkívánja az önismeretet és a sajátélmények megdolgozottságát, így a tréning során erre is nagy hangsúlyt helyezek. 
          </p>

          <p>
            Az alaptréning elvégzése után a <Link to="/bekesdulamuhely">Békés Dúlaműhelyben</Link> mélyítheted tovább az ismereteidet, egy 150-170 órás továbbképzés keretein belül.  Az itt folyó munka egyrészt számos témában nyújt további szakmai ismereteket, másrészt teret ad a folyamatos önismereti munkának is, egy nagyon mély, egymást elfogadó és megtartó közösségben.
          </p>

          <p>
            Sok éves tapasztalat, hogy az alaptréningen résztvevők szinte teljes létszámmal szeretnének tovább menni a dúlává válás útján a műhely keretei között, mert biztonságot és erőt ad számukra nem egyedül, hanem csoportban fejlődni.
          </p>

          <div className="doula-trening-details">
              <div className="doula-treningBx">
                  <h4>Mit nyújt a tréning?</h4>
                  <ul className="doula-trening-list">
                      <li className="doula-trening-has-before">A tréningen - a mögöttem álló, több mint 20 évnyi képzés tapasztalatai alapján - egy letisztult, de folyamatosan újuló, a mindenkori csoport igényeihez rugalmasan alkalmazkodó tematikát használok.</li>
                      <li className="doula-trening-has-before">Ablakokat nyitok olyan témák, szakterületek felé, amelyek lehetővé teszik, hogy az alaptréninget végzett dúlák ismeretei tovább mélyülhessenek abba az irányba, amelyek felkeltették az érdeklődésüket (pl. a tréning után többen perinatális szaktanácsadó, aromaterapeuta vagy szoptatási tanácsadói képzésre jelentkeznek vagy elindulnak a bábává válás útján.)</li>
                      <li className="doula-trening-has-before">A tényszerű, konkrét ismeretek nyújtása mellett jelentősen építek a résztvevők tapasztalataira, tudására, teret adok a kérdéseik, gondolataik megfogalmazására és ezek közösen megbeszélésére.</li>
                      <li className="doula-trening-has-before">Folyamatosan és érzékenyen figyelek az egyes csoporttagokban zajló belső folyamatokra és a csoportdinamikára is, és segítem az önismereti illetve feldolgozó munkát.</li>
                      <li className="doula-trening-has-before">A tréning előadói legjobb tudásukkal, ugyanakkor távolságtartás nélkül, a női kör tagjaiként vesznek részt a képzésben.</li>
                      <li className="doula-trening-has-before">A tréning kiváló lehetőséget nyújt olyan nők számára is, akik vagy a gyermekáldásra készülnek vagy már várandósok, és hiteles információk alapján szeretnének a szülésükre és az anyaságra felkészülni.</li>
                      <li className="doula-trening-has-before">Az alaptréning a visszajelzések alapján mindig sokkal többet ad egyszerű dúlaképzésnél, és ez annak is köszönhető, hogy általában nagyon hamar kialakul a bizalom, a nyitottság és az elfogadás a csoport tagjai között.</li>
                      <li className="doula-trening-has-before">Az alaptréninget végzetteknek nem engedem el a kezét. Lehetőségük van<Link to="/dulakor">Békés Dúlakör</Link>esetmegbeszélő csoportjain részt venni, beiratkozhatnak a<Link to="/bekesdulamuhely">Békés Dúlaműhelybe</Link>, és a tréning végén egyéb utakat is mutatok az ismereteik bővítésére.</li>
                      <li className="doula-trening-has-before">A Békés Dúlatréninget végzett dúlák számára folyamatosan biztosítok egyéni és csoportos szupervízióra lehetőséget.</li>
                  </ul>
              </div>
          </div>

          <div className="doula-trening-button-box">
            <Button className="doula-trening-button" onClick={()=>this.handleModal()}>Ha szeretnél jelentkezni,<br/>itt és most megteheted!</Button>               
          </div>

          <div className="doula-trening-details">
              <h6>Motivációs tréning</h6>
              <ul className="doula-trening-list">
                  <li className="doula-trening-has-before">Az önismereti, motivációs tréning kezdete:  <b>2025. augusztus 23-24. </b></li>
                  <li className="doula-trening-has-before">A tréning részvételi díja: 80.000 Ft</li>
              </ul>
          </div>
          <div>
          <p>
              Ha esetleg kérdéseid vannak a tréninggel kapcsolatban vagy fizetési könnyítést szeretnél, írj a bekes.emoke@gmail.com címre vagy hívj a 70/948-5481-es számon.
          </p>
          <br/>
          <p>
              A tréninget minimum 6-8 fő jelentkezése esetén tartom meg. 
          </p>
          <p>
            Az önismereti, motivációs tréningen érintjük a születés, a nővé válás, szülés, anyaság és a társas kapcsolatok témáját, valamint különböző gyakorlatok során elmélyítjük a segítő kapcsolathoz nélkülözhetetlen képességeinket, készségeinket (pl. értő figyelem, empátia, elfogadás). 
          </p>
          <p>
            Ez a tréning az alapja az erre épülő 4 napos dúlatréningnek, ahol a szülés, születés területén dolgozó szakemberek adják át az ismereteiket, tapasztalataikat a leendő dúláknak. Mindkét tréning bejárással zajlik, de a vidékről érkező résztvevőknek, valamint – a késő estig (általában 22 óráig) tartó tréningnapok miatt – a budapestieknek is igény esetén szálláslehetőséget biztosítok a helyszínen.
          </p>

          <p>
              A jelentkezéseket a befizetések sorrendjében fogadom, a résztvevőknek részletes tájékoztatót küldök. Indokolt esetben részletfizetési lehetőséget biztosítok, erről személyesen (telefonon vagy e-mailen keresztül) lehet velem egyeztetni.
          </p>

          <p>
              Amennyiben valamilyen okból le kell mondanod a részvételedet, tájékoztatlak, hogy a tréning hetében történő lemondás esetén a részvételi díj 50%-át tudom visszafizetni, 48 órán belüli lemondás esetén azonban már ezt sem.
          </p>

          <p>
              <i>Bankszámlaszám: Békés Emőke<br/>CIB: 10702332-66569772-51100005</i>
          </p>
          </div>

  <section className="dulaslider-section dulaslider-testi" aria-labelledby="dulaslider-testi-label">
    <div className="dulaslider-container">
      <ul className="dulaslider-slider">
        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "#e8dee4"}}>
            <div className="dulaslider-card-content">     
              <blockquote className="dulaslider-body-sm">
              Az előzetes elképzeléseimnél jóval többet kaptam a motivációs tréningen. Rálátást az erősségeimre és a gyengébb pontjaimra, iránymutatást, hogy mivel kell foglalkoznom a jövőben. Segített hangosan kimondani olyan dolgokat, amit azelőtt nem mertem, vagy nem is tudtam, hogy fáj vagy hiányzik.
              </blockquote>
            </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              Ebben a két napban az érzelmek teljes skáláján mozogtam. Örültem, szomorkodtam, féltem, feloldódtam, békét találtam.

              </blockquote>
           </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              A tréningen megszűnt a külvilág. Megszűntek a kinti gondok. Jól esett befelé figyelni. <br/>
              </blockquote><br/><br/>
            </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
             Segített hangosan kimondani olyan dolgokat, amit azelőtt nem mertem, vagy nem is tudtam, 
              hogy fáj vagy hiányzik.
              <br/>
              </blockquote><br/><br/>
            </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              A csoport ereje segített megfogalmazni és kimondani, amit érzek, és ez határtalan megkönnyebbülést adott.
              <br/>
              </blockquote><br/><br/>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </section>

          <div className="doula-trening-details">
              <h6>Dúlatréning</h6>
              <ul className="doula-trening-list">
                  <li className="doula-trening-has-before">Az erre épülő 4 napos, dúla alaptréning tervezett időpontja: <b> 2025. szeptember 18-21. </b></li>
                  <li className="doula-trening-has-before">A tréning részvételi díja: 140.000 Ft</li>
              </ul>
          </div>

          <div className="doula-trening-button-box">
            <Button className="doula-trening-button" onClick={()=>this.handleModal()}>Ha szeretnél jelentkezni,<br/>itt és most megteheted!</Button>               
          </div>

          <p>
            A tréning minimum 8 fő jelentkezése esetén indul!
          </p>
          <p>
              Amennyiben valamilyen okból le kell mondanod a részvételedet, tájékoztatlak, hogy a tréning hetében történő lemondás esetén a részvételi díj 50%-át tudom visszafizetni, 48 órán belüli lemondás esetén azonban már ezt sem.
          </p>

          
          <div className="doula-trening-faq">
              <Link to="/gyakori-kerdesek-a-kepzesekrol" className="doula-trening-btn">Olvasd el a leggyakrabban előforduló kérdésekre adott válaszokat a tréninggel kapcsolatban!</Link>
          </div>
  <div>

  <section className="dulaslider-section dulaslider-testi" aria-labelledby="dulaslider-testi-label">
    <div className="dulaslider-container">
      <ul className="dulaslider-slider">
        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "#e8dee4"}}>
            <div className="dulaslider-card-content">     
              <blockquote className="dulaslider-body-sm">
              Köszönöm azt a szeretetet és alázatot, ahogy a csoportot kíséritek! A kedves, bátorító, közvetlen hozzáállást, ami segítette a megnyílásunkat.
              </blockquote>
            </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              Szerintem ezen a tréningen minden nőnek részt kellene vennie. Valahol ez nekem a felnőtt létbe való belépés egyik mérföldkövét is jelentette. A magunkkal, nőieségünkkel, más nőkkel, a születésünkkel, szülésünkkel való kapcsolatunkat alapjaiban változtatja meg. Kiérzékenyít, magabiztossá tesz a társas kapcsolatainkban. Az életről tanít. Egy olyan világ, amiben szívesen létezem.
              </blockquote>
           </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              Alázatot és szeretetet érzek. Az az állapot, amikor az elveszem-odaadom, megszerzem-adakozok, adok-kapok viszony értelmét veszti. Nagyon jó volt a meghitt együttlét – ez sok praktikumot felvonultató képzésekről hiányozni tud. Nekem ez legalább olyan fontos, mint a gyakorlati ismeretek<br/>
              </blockquote><br/><br/>
            </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              Csodálatos utazás volt. Kicsit félek belegondolni, hogy mi lett volna velem, ha nem teszem meg ezt az utat, vagy ha egyedül, asszonytársak nélkül kell végigjárnom. Tökéletes volt. Minden várakozást felülmúlt.<br/>
              </blockquote><br/><br/>
            </div>
          </div>
        </li>

        <li className="dulaslider-slider-item dulaslider-card-container">
          <div className="dulaslider-card dulaslider-card-lg" style={{"background-color": "hsl(324, 18%, 89% )"}}>
            <div className="dulaslider-card-content">
              <blockquote className="dulaslider-body-sm">
              Örülök, hogy minden csoporttag kedves és elfogadó személyiség volt. Nagyon jó volt látni, hogy mindenki meg tudott nyílni, ahogy egy-egy téma megérintette az embereket. Fantasztikus előadókat ismerhettem meg, alapos tudással, szemléletes, magas színvonalú előadással. Jól illeszkedtek egymáshoz a témák. Gratulálok a szervezéshez, a tréningvezetéshez és köszönöm az odaadó figyelmet.<br/>
              </blockquote><br/><br/>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </section>

</div>

            <div className="doula-trening-faq">
                <Link to="/dula-trening-galeria" className="doula-trening-btn">Pillants bele a Békés Dúlatréning világába! <br/> A tréningről készült képeket itt tudod megtekinteni</Link>
            </div>

            <div className="doula-trening-topic">
                <div className="doula-trening-topicBx">
                    <h4>A dúlatréning témái ( a teljesség igénye nélkül):</h4>
                    <ul className="doula-trening-list">
                        <li className="doula-trening-has-before">A dúlaság alapelvei</li>
                        <li className="doula-trening-has-before">A dúla szerepe és lehetőségei a szülésre felkészítésben</li>
                        <li className="doula-trening-has-before">A várandósság és a gyermekágyas időszak testi és lélektani változásai, jellemzői</li>
                        <li className="doula-trening-has-before">A vajúdás és a szülés a bába szemével</li>
                        <li className="doula-trening-has-before">A vajúdás előrehaladásának nyomon követése külső jelek alapján</li>
                        <li className="doula-trening-has-before">Vajúdástámogatás</li>
                        <li className="doula-trening-has-before">Nehéz helyzetek</li>
                        <li className="doula-trening-has-before">A dúla szerepe császármetszés esetén</li>
                        <li className="doula-trening-has-before">Az apáknak nyújtott támogatás</li>                     
                    </ul>
                </div>


                <div className="doula-trening-perform">
                    <h4>&nbsp;</h4>
                    
                    <ul className="doula-trening-list">
                      <li className="doula-trening-has-before">A gyermekágyas időszak alatti gondozás</li>
                      <li className="doula-trening-has-before">A dokumentáció készítése</li>
                      <li className="doula-trening-has-before">Szoptatás</li>
                      <li className="doula-trening-has-before">Aromaterápiás és homeopátiás ismeretek a vajúdás, a szülés és a gyermekágy idejére</li>
                      <li className="doula-trening-has-before">Kommunikációs helyzetgyakorlatok</li>
                      <li className="doula-trening-has-before">A szuggesztív kommunikáció jelentősége és hatásai</li>
                      <li className="doula-trening-has-before">Kompetencia-határok</li>
                      <li className="doula-trening-has-before">Dúlapraktikák</li>
                      <li className="doula-trening-has-before">Dúlamesék gyakorló dúláktól</li>
                      <li className="doula-trening-has-before">Hogyan induljunk dúlaként?</li>
                    </ul>
                </div>
            </div>
          </div>

        </div>

      <section className="consultation4">
        <div className="consultation-btn-h2"><h2>Neked is segíthetek?<br/><span>Szeretettel várom jelentkezésedet!</span></h2></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
      </section>

      <div className="appli-box">    
      <Modal  show={this.state.show} >  
            <Modal.Header closeButton onClick={this.handleClose}></Modal.Header>  
            <Modal.Body>
            <div >
                <div className="appli-container">
                    <div className="form">
                    <h2 >Kapcsolatfelvétel</h2>
                    {/*<form id='sendbox' name='sendbox' onSubmit={sendEmail}>*/}
                    <form id='sendbox' name='sendbox' action="form.php" method="POST">
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
                            <input type="text" name="email_from" id="email_from" required/>
                        </div>
                        <div className="appli-inputBox">
                            <label>Kérlek írj néhány mondatot magadról és a motivációidról! (kötelező)</label>
                            <textarea name="motivation" id="motivation" required/>
                        </div>
                        <div className="appli-inputBox">
                            <label>Egyéni kérdésed, kérésed</label>
                            <textarea name="question" id="question" />
                        </div>
                        <div className="appli-checkbox">
                            <label for="vehicle"></label><br/>
                            <input type="checkbox" name="vehicle" id="vehicle" value="true" required/><br/>
                        </div>
                        <div className="alert">
                            <p> Elolvastam és elfogadom az <a href="#" >Adatvédelmi tájékoztatót</a>. A jelentkezési lapon szereplő személyes adataim kezeléséhez és megőrzéséhez hozzájárulok. Adataim továbbítását csak a képzésemben közreműködő személyek és a jogszabályban felhatalmazott szervek felé engedélyezem. Megismertem és tudomásul vettem az adatkezelési tájékoztatóban foglaltakat, így azt, hogy személyes adataim a 2013. évi LXXVII. Tv. 21.§ előírásai alapján kerülnek kezelésre. Megőrzésük a jogszabály alapján 8 év. Adataim továbbítását csak a képzésemben közreműködő személyek és a jogszabályban felhatalmazott szervek (pl. Felnőttoktatási Adatszolgáltató Rendszer) felé engedélyezem.</p>
                        </div>

                        <div className="appli-button-container">
                            
                            <Button name="send" id="send" type="submit">Küldés</Button>
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
