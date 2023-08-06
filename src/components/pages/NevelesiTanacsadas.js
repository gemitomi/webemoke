import { Link } from "react-router-dom";
import "../../CSS/EgyeniKonzultacio.css"
import "../../CSS/nevelesitanacsadas.css"
import NevTan from "../../image/nevelesi_tanacsadas_title.png";

export default function NevelesiTanacsadas() {
  return (
    <div>
      <section className="nevtan-consultation">
        <div className='nevtan-consultaion-container'>
          
          <div className='nevtan-text-container'>
            <h1>Nevelési tanácsadás</h1>
            <br/>
            <span>online is</span>
            <hr/>
            <p>
            Egyéni tanácsadás keretében többek között a csecsemőkori problémákkal, a
            testvérféltékenységgel, a szobatisztaság kérdésével, az óvodáskori beilleszkedési nehézséggel
            küzdő és az iskolába készülő gyermekek, illetve kamaszokat nevelő szülők részére nyújtok
            segítséget. Célom, hogy a beszélgetések során minden szülő megtalálja a saját és a gyermeke
            számára legideálisabb megoldásokat. <br/>Mivel rendszerszemléletben gondolkozom, így a család egészét, működését tartom fontosnak
            megismerni, nem önmagában csak a gyermeket, aki épp valamilyen nehézséggel küzd.
            </p>
          </div>
          <div className="nevtan-consultation-image">
            <img  src={NevTan} alt='' />
          </div>
        </div>
      </section>
      <section className="nevtan-consultation-citateBx">
        <p className="nevtan-consultation-citate-text">
          ”Minél jobban megérti a szülő a gyereket, és minél jobban el tudja helyezni pillanatnyi állapotát fejlődésének menetében, annál érdekesebbnek fogja találni ezt a kis lényt. Minél érdekesebb a kicsi a szülő számára, az annál több figyelmet fog szentelni neki, és minél több figyelmet kap, ő is annál többel viszonozza majd.
          <br/>
          A szülő és a gyerek érdeke azonos. Mindketten ugyanazon az oldalon állnak, mindketten örülni akarnak, és jól akarják érezni magukat.
          <br/>
          Az a fajta érzékeny figyelem, amellyel az ember saját hús-vér gyermekét követi, a szeretet lényege….
          <br/>
          Végülis a gyerek egy vadonatúj emberi lény. A szülei azok, akik ezt az embert létrehozták. Ahogy nézik és hallgatják, ahogy gondolkodnak róla és alkalmazkodnak hozzá, egy örökké tartó barátság alapjait rakják le….
          <br/>
          Egyedülálló kapcsolat ez, amely éppen ezért pótolhatatlan örömet okoz.
          <br/>
          Hogy milyenek azok az igazi „jó szülők”, azt aligha tudnánk pontosan leírni; minden bizonnyal csak a mesében léteznek.
          <br/>
          Pedig a gyerekeknek nincs szükségük emberfeletti teljesítményekre, tökéletes szülőkre. Hétköznapian jó szülőkkel is beérik – ki-ki azzal, aki neki megadatott.
          <br/>
          A rugalmas és átgondolt gyermeknevelés sok időt és energiát emészt. Rendkívül nehéz munka és hihetetlenül sok öröm forrása.
          <br/>
          A gyermeknevelés egyike a legkreatívabb, legértelmesebb és leginkább alulértékelt tevékenységeknek.
          <br/>
          De minden kreatív ember egyúttal mesterember is. Szakmájának eszköztárát éppúgy birtokba kell vennie, mint ahogy az iparos is megtanul a szerszámaival bánni. A gyermeknevelés mestersége is megtanulható. Ha elfogadtuk azt az elvet, hogy a gyerekekkel kapcsolatos minden tevékenységünk a közös öröm célját szolgálja, látni fogjuk, hogy mindent meg lehet csinálni nehezen és könnyen, hatékonyan és kevésbé hatékonyan.”
        
        <h6>Penelope Leach – Picik és kicsik (Park Könyvkiadó 1991)</h6>

        </p>
      </section>
      <section className="consultation4">
        <div className="consultation-btn-h2"><h2>Neked is segíthetek?<br/><span>Szeretettel várom jelentkezésedet!</span></h2></div>
        <div className="consultation-btn-box" >
          <Link to="/contact" className="latest-blog-btn"><span>Kapcsolatfelvétel</span></Link>
        </div>
      </section>
    </div>
  )
}
