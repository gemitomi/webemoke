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

                      <div className="dulatrening-btn-box">
                        <Button className="dulatrening-btn" onClick={()=>this.handleModal()}>Close</Button>  
                        <Button className="dulatrening-btn" type="submit">Küldés</Button>  
                      </div>
                    </div>              
                  </form>
                </div>
            </Modal.Body>  
            
          </Modal>  