import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Public51Pic1 from "../../../image/publications/public-51-hero-egy-kep-es-ami-mogotte-van.png";
import Public51Pic2 from "../../../image/publications/public-51-egy-kep-es-ami-mogotte-van.jpg";

export default function Public51() {
  return ( <div>
    <section class="section-blog-global">
        <div class="blog-global-container">
            <div class="blog-global-hero">
                <img src={Public51Pic1} alt="egy-kep-es-ami-mogotte-van… 2."/>
            </div>

            <div class="blog-global-face">
                <h2 class="blog-global-title">Egy kép és ami mögötte van… 2.</h2>
                <div class="blog-global-profile-container">
                    <div class="blog-global-profile">
                        <div class="blog-global-img-container">
                            
                        </div>
                        <div class="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2008.  április 8.</p>
                        </div>
                    </div>
                    <div class="blog-global-button">
                        <Link to="/publications3" class="blog-global-btn">Publikációim</Link>
                    </div>
                </div>

                <div class="blog-globale-column">
                    <div class="blog-globale-img-container">
                        <img src={Public51Pic2} alt="a-kapcsolat-alapja"/>
                    </div>
                    <div class="blog-globale-text">
                        <p>
                            <b>2007 októbere volt. Épp egy háromnapos dúlatréninget tartottam, amelynek utolsó órájában érkezett az SMS, elindult Judit szülése.</b>
                        </p>
                        <p>
                            Azonnal ott voltam gondolatban mellettük. A képzésen már megszületett a csoport, meghitten búcsúztam a tizenegy nőtől. Dúlák lesznek ők is, izgatott csillogással a szemükben néztek utánam, hisz oda mentem, ahová ők is vágynak.
                        </p>
                        <p>
                            A csoda közelébe.
                        </p>
                        
      
                    </div>
                </div>
                <p>
                    Akkor már nyolc hónapja ismertük egymást, hisz rendszeresen találkoztunk, hogy megbeszéljük az őket foglalkoztató kérdéseket a várandóssággal, szüléssel és szülővé válással kapcsolatosan. Nagyon megkedveltük egymást, és boldog voltam, hogy jelen lehetek kislányuk érkezésénél.
                </p>
                <p>
                    Általában a párokkal a kapcsolatunk legmélyebb óráit a szülés alatt élem át, majd a gyermekágy időszakában is meglátogatom őket. Megbeszéljük a szülés élményét, aztán a hónapok múltával a kapcsolatunk a hivatásom jellegéből adódóan némiképp elhalványul, bár szerencsére a legtöbbször nem szűnik meg. Időnként leveleket váltunk, fényképeket kapok a babákról, vagy néha találkozunk is.

                    <br/>Amikor azon a napfényes vasárnap délutánon beléptem a szülőszobába, még nem tudtam, hogy ez mennyire másképpen lesz most. Abban biztos voltam, hogy ebből a kísérésből is magammal viszek valami felejthetetlen pillanatot, mint mindig, ha jelen lehetek egy kisbaba érkezésénél.

                    <br/>Aztán az élet úgy hozta, hogy a kísérésük több mint négy napig tartott. Fönt és lent, fájdalom és gyönyörűség, kétségbeesés és megnyugvás, félelem és szétáradó boldogság, mardosó hiány és beteljesülés között teltek az órák éjjel és nappal.

                    <br/>Különleges, nem szokványos ajándék az életemben, hogy a családdá születésükkel családtaggá fogadtak engem is.
                </p>
                <p>
                    Nem gondoltam eddig arra, hogy előfordulhat ilyen.
                </p>
                <p>
                    Nem tudtam, hogy milyen az, ha egy csodálatos, háborítatlan szülés euforikus hangulata után egy váratlan komplikáció miatt az intenzív osztályra kerülő anya ébredésére várok.
                </p>
                <p>
                    Nem éreztem még, hogy mennyire nehéz támaszt nyújtani egy apának, amikor a neoncsövek fénynyalábjaival hasogatott folyosót rója a műtőajtó előtt.
                </p>
                <p>
                    Soha nem kerültem még olyan helyzetbe, hogy a családoknak fenntartott gyermekágyas szobában az anya helyett napokig én lakjam az apával és a babával.
                </p>
                <p>
                    Ez bizony nem szokványos történet. Született benne egy kisbaba, újjászületett az anya, és hónapokkal később megszületett az anyában és az apában az az elhatározás, hogy beszéljenek arról, ami velük és bennük a várandósság és a kislányuk születésekor történt.
                </p>
                <p>
                    Ők lesznek az idén a Születés Hete országos rendezvénysorozat arcai. Arra kértek, hogy a rendezvényt hirdető képen is legyek mellettük úgy, mint akkor. Azt szerették volna, ha a kép kifejezi azt az intimitást és szeretetet, amely közöttünk ebből a speciális helyzetből adódóan kialakult.
                </p>
                <p>
                    Így született meg ez a fotó, amely a történetet még nem ismerőket érthetően most talán még meghökkenti.
                </p>
                <p>
                    A Születés Hete nyitónapján egy dalokkal kísért előadás formájában próbáljuk megosztani az élményeinket mindazokkal, akik szívesen meghallgatnák, mi van e kép mögött.
                </p>


                <p>
                    <a href="https://nlc.hu/baba/20080408/egy_kep_es_ami_mogotte_van2/">https://nlc.hu/baba/20080408/egy_kep_es_ami_mogotte_van2/</a>
                </p>
            </div>

            <div class="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
                <Link to="/publications3">Publikációim</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
