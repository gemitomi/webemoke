import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../../../CSS/feedbackParent.css"

import FszSzulo6 from "../../../image/feedback_szulo_6.png";

export default function FeedBack6DV() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div>
              <section className="feedback-parent">

<div className="feedback-parent-container">
    <div className="feedback-parent-head">
        <h1>D. V. - anya</h1>
        <h2>Visszajelzés szülőktől</h2>
    </div>
    <div className="feedback-parent-column">
        <div className="feedback-parent-img-container">
            <img src={FszSzulo6} alt=""/>
        </div>
        <div className="feedback-parent-text">
            <p>
                A dúla, azaz Te, számomra azt a fajta lelki támogatást nyújtottad, amire az első gyermekét váró tudatlan kismamának szüksége van az első hónapoktól egészen a szülésig. Rengeteg kérdés felmerül ilyenkor a kismamákban, rengeteg félelem és aggodalom is a folyamattal (terhesség) és a szüléssel kapcsolatban, ami teljesen elbizonytalanítja az egyébként magabiztos nőket is. Sajnos dúla hiányában az internet az, amire leginkább támaszkodnak a kismamák, mert ugye minden kérdéssel a nőgyógyászt és a szülésznőt sem lehet terhelni, mert rajtunk kívül még rengeteg más dolguk is van. Az internet viszont nagyon sok mindenben nem segít, nem ad választ mindenre, nem úgy adja a választ, hogy az személyre szabott legyen, sokszor nagyon bonyolult szövegekkel írja le, amit a személyes találkozók alkalmával mi meg tudtunk könnyedén beszélni.
            </p>

            
        </div>
    </div>
    <div className="feedback-parent-text">
    <p>Részemről az a tudat, hogy Téged bármikor hívhattalak vagy írhattam Neked a 
        terhesség alatt, még ha apróságokról is volt szó, nyugalommal töltött el. 
        Ha nem lettél volna, valószínűleg nem mertem volna megkérdezni senkitől sem, 
        és elveszettnek éreztem volna magam. Az, hogy átbeszéltük előre, hogy a szülés 
        alatt milyen folyamatok vannak és, hogy mi az a “viselkedés” , ami a szülés 
        alatt természetes, plusz még a jelenléted, sokkal könnyebbé tették számomra a 
        szülés folyamatát. Az, hogy amikor láttad, hogy kicsit megrekedtünk, 
        javasoltál egy változtatást, az én esetemben, a kádat, újra meglendítette 
        a szülés előrehaladását. Ez a törődés, plusz az, hogy a férjem sem érezte 
        magát tehetetlennek, mert mondtad neki, hogy mit csináljon, nagyon nagy 
        segítség volt. Annak ellenére, hogy volt szülésznőm, sajnos ő nem sokat tudott 
        bent lenni a vajúdás alatt, de nem is volt rá szükség, mert Te már átéltél pár 
        szülést és nekem megnyugtató volt, hogy biztosan felismerted volna ha rohanni 
        kellett volna érte.

    </p>

    <p>Ezen kívül nekem nagyon jó érzés volt, hogy amint bementünk a kórházba, végig ott voltál mellettem, még akkor is, amikor a férjem 
       nem jöhetett be velünk az első pillanatokban. A szülés után pedig, amíg engem elláttak, nagyon örültem, hogy a Te kezedben lehetett a kislányunk, nem pedig egy idegenében.
    </p>
    

    <p>Az is nagyon fontos volt, hogy a vajúdás beindulásakor beszéltünk telefonon és 
        mindig el tudtam mondani mit érzek, milyen hosszúak a fájások és mennyi ideig 
        tartanak. Ha akkor nem lett volna kihez fordulnom, akkor valószínűleg 
        bementünk volna már reggel a kórházba, holott a szülés csak éjjel indult meg. 
        Ki tudja mennyi időt kellett volna a kórházban lennem, mire rendesen beindul 
        a folyamat egy idegen helyen… Így meg, még volt időm szépen nyugodtan 
        letusolni, hajat mosni, az utolsó dolgainkat is bepakolni és abszolút nem 
        izgultam, csak vártam, hogy erősödjenek és sűrűsödjenek a fájások. 
        Ennek köszönhetően a kórházba érkezés már nem lasított le semmit, 
        szerencsére, szinte azonnal kaptunk is szülőszobát.
    </p>

    <p>Azt a fajta lelki támaszt és nyugalmat kaptam tőled, amitől sokkal könnyebb lett a szülés folyamata, sokkal könnyebb volt az “elengedés”, nem feszengtem, csak a feladatra koncentráltam. 
       Úgy éreztem magam, mint egy háborítatlan burokban, amit Te és a férjem őriztek.
    </p>
    </div>


    <div className="feedback-parent-tags">
        <p>Címkék:</p>
        <i className="far fa-calendar"> 2016.09.18.</i>
        <Link to="/feedback">Visszajelzések</Link> 
        <Link to="/szuloi-visszajelzesek-1">Visszajelzések szülőktől</Link>
    </div>

    <div className="feedback-parent-title">
        <h4 className="feedback-parent-title h4">További bejegyzések</h4>
    </div>

    <div className="feedback-parent-pag">
        <Link to="/orvos-vagyok-megis-sokat-jelentetel" className="feedback-parent-pag1">Előző</Link>
        <Link to="/milyen-jo-hogy-igy-alakult" className="feedback-parent-pag2">Következő</Link>
    </div>
    
</div>

</section>

        </div>
      )
}
