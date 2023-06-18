import React, {useRef} from "react";
import '../../CSS/dulatrening.css'; 
import { Button, Modal} from 'react-bootstrap'; 
import emailjs from '@emailjs/browser';


const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_nclcu9j', 'template_f8fh6j8', e.target, 'dvGDZxVnl8xRc5665');
    alert('Jelentkezését továbbítottuk!');
    document.getElementById("sendbox").reset();

  }
 
class Dulatrening extends React.Component {  
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
      <div >
      
        <div className="dulatrening" >
          
          <div >
            <h1>Egyéni konzultációk </h1>
            <h1>várandósoknak, pároknak </h1>
            <br/>
            <span>online is!</span>
            <hr/>
            <p>A tapasztalataim azt mutatják, hogy az, hogy egy anyának milyen szülésélménye lesz, az jórészt attól is függ, hogy a szülése idejére letisztul-e benne az, hogy hogyan és kiknek a jelenlétében szeretné világra hozni a gyermekét. Ehhez azonban az kell, hogy ne maradjanak kimondatlan kérdései, aggodalmai.</p>
          </div>
          <div >
            
          </div>
        </div>
      
      
        <div >  
          <h2 align='center'>Example of Modal in Reactjs</h2>  
          <div className="modalClass">  
            <Button onClick={()=>this.handleModal()}>Click To Open Modal</Button>  
          </div>  
            
          <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
            <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
            <Modal.Body>
              <div className="dulatrening-form">
                  <h2 >Kapcsolatfelvétel</h2>
                  <form id='sendbox' name='sendbox' onSubmit={sendEmail}>
                    <div className="dulatrening-formBox">
                      
                      <div className="dulatrening-inputBox">
                        <span>Neved (kötelező)</span>
                        <input type="text" name="name"  id="name" required/>
                      </div>

                      <div className="dulatrening-inputBox">
                          <span>Születési neved (kötelező)</span>
                          <input type="text" name="birthname" id="birthname" required/>
                      </div>

                      <div className="dulatrening-inputBox">
                          <span>Születési dátumod (kötelező)</span>
                          <input type="text" name="birthday" id="birthday" required/>
                      </div>

                      <div className="dulatrening-inputBox">
                          <span>Születési helyed (kötelező)</span>
                          <input type="text" name="birthplace" id="birthplace" required/>
                      </div>

                      <div className="dulatrening-inputBox">
                          <span>Édesanyád születési neve (kötelező)</span>
                          <input type="text" name="mother" id="mother" required/>
                      </div>

                      <div className="dulatrening-inputBox">
                          <span>Legmagasabb iskolai végzettséged (kötelező)</span>
                          <input type="text" name="school" id="school" required/>
                      </div>

                      <div className="dulatrening-inputBox">
                          <span>Számlázási címed (kötelező)</span>
                          <input type="text" name="addres" id="addres" required/>
                      </div>

                      <div className="dulatrening-inputBox">
                          <span>Telefonszámod</span>
                          <input type="text" name="phone" id="phone" required/>
                      </div>  

                      <div className="dulatrening-inputBox">
                          <span>e-mail cím (kötelező)</span>
                          <input type="text" name="email_from" id="emailFrom" required/>
                      </div>

                      <div className="dulatrening-btn">
                        <Button onClick={()=>this.handleModal()}>Close</Button>  
                        <Button type="submit">Küldés</Button>  
                      </div>
                    </div>              
                  </form>
                </div>
            </Modal.Body>  
            <Modal.Footer>  
              <div>
                Elolvastam és elfogadom az Adatvédelmi tájékoztatót. A jelentkezési lapon szereplő személyes adataim kezeléséhez és megőrzéséhez hozzájárulok. Adataim továbbítását csak a képzésemben közreműködő személyek és a jogszabályban felhatalmazott szervek felé engedélyezem. Megismertem és tudomásul vettem az adatkezelési tájékoztatóban foglaltakat, így azt, hogy személyes adataim a 2013. évi LXXVII. Tv. 21.§ előírásai alapján kerülnek kezelésre. Megőrzésük a jogszabály alapján 8 év. Adataim továbbítását csak a képzésemben közreműködő személyek felé engedélyezem, a jogszabályban felhatalmazott szervek felé való továbbításról külön rendelkezem.
              </div>
            </Modal.Footer>  
          </Modal>  
        </div> 
      </div> 
    )  
  }  
}  
export default Dulatrening;





