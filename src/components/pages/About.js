import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../../CSS/about.css";
import ProfilePic from "../../image/bekes_emoke.png"
import PicWay from "../../image/rolam-motivacio.jpg"
import PicMot from "../../image/rolam-palyaiv.jpg"

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <section className="about">
            <div className="content">
                <h1 className="title">Rólam</h1>
                <blockquote>
                    <p>“A mély elkötelezettség egy álom iránt nem jelent korlátokat és kényszert: felszabadít.<br/> Még egy kanyargós ösvény is elvezethet a célodhoz, ha egészen a végéig elmész.”</p>
                </blockquote>
            </div>
        </section>

        <section className="about1">
            <div className="image">
                <div className="col-left">    
                    <div className="imgBx">
                        <img src={ProfilePic} alt=""/>
                    </div>
                </div>
                <div className="col-right">
                    <h2 className="titleText">Békés Emőke vagyok.</h2>
                    <p className="text">Három felnőtt lányom édesanyja és egy kislány unokám nagymamája vagyok.</p>
                    <p className="text">Boldogsággal tölt el, hogy több mint két évtizede megtaláltam azt a hivatást, amelyet nagyon szeretek. <b>Szülésfelkészítő és családkísérő dúla</b>ként egyéni konzultációk, segítő beszélgetések és csoportos szülésfelkészítés keretében kísérem a leendő anyákat és apákat a szülővé válás folyamatában.</p>
                    <p className="text">Hivatásom gyakorlása során arra törekszem, hogy a várandós nőknek és párjaiknak a számukra legmegfelelőbb érzelmi, fizikai és informatív támaszt nyújtva segítsek abban, hogy olyan szülésélményük legyen, amilyet szeretnének. </p>
                </div>
            </div>
        </section>

        <section className="experience">
            <div className="content1">
                <p className="text"> 
                    Mélyen hiszek abban, hogy a társas támasz jelentősége - mely a bizalmon és a biztonságérzeten alapul - rendkívül fontos mindkét szülő számára a várandósság hónapjai alatt, a szülés óráiban és a gyermekágyas időszakban egyaránt. Éppen ezért minden esetben igyekszem nem csak az anya nyugalmát és biztonságérzetét megteremteni, hanem a megszülető család minden tagjára egyaránt figyelni. Rendkívül fontosnak tartom azt, hogy az apa is biztonságban érezze magát, és az újszülött is az őt megillető tiszteletben és bánásmódban részesüljön.
                </p>
                <br/>
                <Link to="/szulesfelkeszites">Szülésfelkészítés ►</Link>
                <br/>
                <Link to="/egyenikonzultacio">Egyéni konzultáció ►</Link>
                <p className="text"><br/>
                    Kísérésem igény szerint a gyermekágy időszakában vagy akár még később is tart, mivel a szülők gyakran fordulnak hozzám a családdá válás folyamán felmerült kérdésekkel. 
                    Ez a bizalom motivált arra, hogy elvégezzem a <Link to="/csaladterapia"><b>rendszerszemléletű pár- és családterápiás</b> </Link>képzést, aminek hamarosan a végére érek. Jelenleg terapeuta párjaimmal, szupervízió mellett segítjük a hozzánk fordulókat.
                </p>

                <p className="text">
                <Link to="/dulakor"><b>A Békés Dúlakör szakmai vezetője</b></Link>ként mindent megteszek annak érdekében, hogy az egészségügyi ellátórendszer is elfogadja a dúlai hivatásnak a létjogosultságát, mely a jelenlegi szülészeti helyzetben különösen hiánypótló.
                </p>

                <p className="text">
                    Tudásom, tapasztalataim és rendszerszemléletű gondolkodásmódom átadásával <Link to="/bekes-dulatrening-alapkepzes"><b>képzem a dúlai hivatás iránt érdeklődőket,</b></Link> folyamatos egyéni- és csoportos szupervíziós támogatást nyújtva számukra.
                </p>
                
                <p className="text">
                    Ha nem csak olvasnál rólam, hanem szívesen meg is hallgatnád, hogyan, miért lettem dúla és mit ad nekem ez a csodálatos hivatás, íme egy interjú velem, ami a <Link to="https://www.youtube.com/embed/8GuOIpMYbqE" target="_blank">Kossuth Rádióban, az Arcvonások c. műsorban</Link>  hangzott el 2015. decemberében.
                </p>
            </div>
        </section>

        <section className="video">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe width="500" height="250"
                    src="https://www.youtube.com/embed/8GuOIpMYbqE"
                    frameborder="0" allowfullscreen="allowfullscreen">
                </iframe>
            </div>
        </section>

        <section className="experience">
            <div className="content1">
            <h1 className="title2">Pályaív</h1>
                <p className="text">
                    A dúlai hivatás felé messzebbről, de egyenes út vezetett. A Bárczi Gusztáv Gyógypedagógiai Tanárképző Főiskolán gyógypedagógusként és pszichopedagógusként végeztem, itt indult a pályám. Gyógypedagógusként meghatározó élmény volt számomra, amikor a munkám során szülőkkel beszélgettem. Nehéz szívvel hallgattam, amikor arról beszéltek, hogy  mennyire hiányzott számukra a gyermekük születésekor, a kórházban töltött napok alatt az érzelmi támogatás. A saját szülésélményeim tovább erősítették bennem azt az érzést, hogy milyen óriási jelentősége van ebben az érzékeny időszakban annak, hogy hogyan bánnak, kommunikálnak az anyákkal, apákkal és a kisbabákkal.  Figyelmem így egyre inkább szülés, születés körüli időszak felé irányult.
                </p>
                <p className="text">
                    A dúlai tevékenység gyakorlásához szükséges alapismereteket 2000. októberében szereztem meg az Alternatal Alapítvány képzésén.
                </p> 
                

            <div className="about-exp-column">
                <div className="about-exp-img-container">
                    <img src={PicWay} alt="Ki a dula es miben segit"/>
                </div>
                <div className="about-exp-text">
                <p className="text">
                    A 2001. tavaszán megalakult Magyarországi Dúlák Egyesületének alapító tagja és hat évig az elnöke voltam.
                </p> 
                <p className="text">
                    E szervezet, majd a <Link to="/dulakor">Békés Dúlakör</Link> szakmai vezetőjeként a legfontosabbnak azt tartom, hogy mind a leendő anyákkal, mind pedig az egészségügyi ellátórendszerben dolgozó szakszemélyzettel (védőnők, szülésznők, orvosok) megismertessem az általunk nyújtott támogatás lényegét és rövid- és hosszútávú előnyeit. 
                </p> 
                <p className="text">
                    E cél elérésének érdekében különböző szakmai konferenciákon tartok a mai napig is előadásokat, illetve igyekszem eleget tenni minden olyan meghívásnak, ahol a dúlai hivatás iránt érdeklődnek.
                </p> 
                

                </div>
            </div>

                <p className="text">
                    2004. óta szervezek <Link to="/bekes-dulatrening-alapkepzes">dúla alaptréningeket</Link> illetve erre épülő <Link to="/bekesdulamuhely">továbbképzéseket,</Link >melyben trénerként dolgozom, valamint rendszeresen tartok <Link to="/esetmegbeszelo">esetmegbeszéléseket</Link> gyakorló dúláknak.
                </p> 
                <p className="text">
                    2007. júliusától 2010. februárjáig a Nők Lapja Café internetes portálon rovatot vezettem A dúla válaszol címmel. (A cikkek itt az oldalon, a <Link to="/publications">Publikációim </Link>rovat alatt is olvashatóak.)
                    Évekig részt vettem a Születés Hete országos rendezvénysorozat szervezésében.
                </p> 
                <p className="text">
                    2009. áprilisa – azaz a megalakulása óta – vagyok szakmai vezetője a <Link to="http://www.bekesdulakor.hu/" target="_blank">Békés Dúlakörnek.</Link>
                </p> 
                <p className="text">
                    Hamarosan befejezem a <Link to="https://www.csaladterapia.hu/" target="_blank">Magyar Családterápiás Egyesület</Link> rendszerszemléletű képzését, hogy pár- és családterapeutaként is segíteni tudjam a családokat. Terapeuta társaimmal már most is dolgozom családokkal, állandó szupervízió mellett.
                </p> 
            </div>
        </section>

        <section className="experience">
            <div className="content1">
            <h1 className="title2">Motivációim</h1>
                <p className="text">
                    Már gimnazista koromban megérett bennem az elhatározás, hogy felnőttként gyermekek mellett fogok dolgozni. Ezekben az években lehetőségem nyílt arra, hogy könnyebbé tegyem azoknak a kisgyermekeknek a mindennapjait, akik betegen és – az akkori szabályok szerint – édesanyjuktól vagy bármely más családtagjuktól megfosztva, kiszolgáltatott helyzetben, kórházban feküdtek.
                </p> 
                <p className="text">
                    Az itt szerzett tapasztalataim döntőnek bizonyultak abban, hogy a főiskola elvégzése után gyógypedagógus és pszichopedagógus lettem. Munkám során a szülőkkel folytatott beszélgetések döbbentettek rá arra, hogy mennyire meghatározó mind az anya és az apa, mind a baba szempontjából a szülés, születés minősége. Ma már ezt a saját és mások szülésélményei, a szüléskíséréseim valamint az azóta e témában gyarapodó ismereteim birtokában tudom és vallom.
                </p>
                <p className="text">
                    Megtisztelő és nagy felelősséggel járó az a bizalom, amit a pároktól, családoktól kapok. Sok esetben nem csak a gyermekük születésének időszakában, hanem akár évekkel később is fordulnak hozzám nevelési vagy a családi élet egyéb kérdéseivel. Ez inspirált arra, hogy pár- és családterapeutaként is tudjam őket segíteni.
                </p>
                <p className="text">
                    Dúlaként és a gyermekeim világrahozatalakor szerzett tapasztalataim alapján pedig igazolva látom, hogy a szülés minőségének javítása sok esetben nem pénzkérdés, hanem olyan emberi tényezők meglétén alapul, mint amilyen például az empátia, az elfogadás, a figyelem odaajándékozása vagy a szülő nő és a családja iránt érzett tisztelet.
                </p>
                <div className="about-exp-column">
                <div className="about-exp-img-container">
                    <img src={PicMot} alt="Ki a dula es miben segit"/>
                </div>
                <div className="about-exp-text">
                <p className="text">
                    Mélyen hiszek abban, hogy a dúlák jelenléte a kórházi szüléseknél rendkívül fontos támogatást jelent, amely nem megkérdőjelezi, hanem kiegészíti a szülésznő és az orvos munkáját. Éppen ezért mindent megteszek azért, hogy az egészségügyi szakszemélyzet megismerhesse a Békés Dúlakör tagjainak munkáját, a kompetenciahatárainkat és a szemléletünket, és ezáltal minél több helyen sikerüljön kölcsönös tiszteleten alapuló partneri együttműködést kialakítanunk. 
                </p>
                <p className="text">
                    Reményeim szerint hazánkban is egyre többen felismerik majd azt, amit Dr. John Kennel amerikai gyermekgyógyász már az 1980-as években megfogalmazott, mely szerint: 
                </p>
                <p className="text">
                    „Ha a dúla gyógyszer lenne, etikátlan lenne nem használni.”
                </p>
                

                </div>
            </div>
                
            </div>
        </section>

    </div>
  ) 
}
