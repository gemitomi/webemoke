import React, { useEffect }  from "react";
import "../../CSS/test.css"

import ProfilePic from "../image/bekes_emoke_1.png"

export default function Test() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
  <div>
  <section className="test-home-about">

      <div className="test-image"> 
          <img src={ProfilePic} alt="" />
      </div>
      <div className="test-content">
          <h1>Békés Emőke<br/><span>dúla, képzésben lévő családterapeuta</span></h1>
          <p>Három gyermekes édesanya, nő, szerető társ, a Békés Dúlakör szakmai vezetője vagyok.
          Egy boldog ember, hiszen két évtizede, hogy megtaláltam azt a hivatást, amelyet nagyon szeretek. Szülésfelkészítő, családkísérő dúla  vagyok.</p>
          
      </div>
  </section></div>
  )
}
