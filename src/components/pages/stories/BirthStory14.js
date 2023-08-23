import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth14Pic1 from "../../../image/szulestort/szules_story_14_hero_talaltam_erot.png";
import Birth14Pic2 from "../../../image/szulestort/szules_story_14_talaltam_erot.png";
import Birth14Pic3 from "../../../image/szulestort/szules_story_14_a_talaltam_erot.jpg";

export default function BirthStory14() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
           <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth14Pic1} alt="Talaltam erot, valahogy mindig akadt"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">“Találtam erőt, valahogy mindig akadt”</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2010. július 22.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                       <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth14Pic2} alt="Talaltam erot, valahogy mindig akadt"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Az első kisfiam, Iván császármetszéssel jött a világra. Egy agyi rendellenesség miatt ezt ajánlották az orvosok abban a kórházban, ahol végül a 36. héten megszültem őt. Nem ott, nem úgy terveztem a szülésemet, természetes körülményeket, háborítatlan szülést szerettem volna, de nem sikerült. Azt azonban elhatároztam, hogy ha valaha újra várandós leszek, másképp történik minden.
                        </p>   
                            
                    </div>
                </div>

                <p>
                    Bele se gondoltam, mennyire nehéz lesz olyan orvost találni, aki nem csak ígérget, valóban vállalja, hogy természetes úton szüljem meg a gyerekem. A harmincadik héten végre sikerült megtalálnom azt a „csapatot”, akikkel biztonságban éreztem magam, és el is mertem hinni, hogy a kisfiam úgy születik meg, ahogy szeretne. És ahogy én is szeretném. Nehéz volt rájuk bukkanni. Számtalan szüléstörténetet böngésztem végig az interneten, míg találtam egy olyat, ahol orvos, szülésznő és dúla remekül kiegészítve egymást, az anyát, apát és gyereket feleslegesen nem zavarva kísérte végig (és nem vezényelte le) a szülést – császár után. A dúla Emőke volt. Ahogy elolvastam az írásait, a vele megesett szülések történeteit, már biztos voltam benne, hogy őt akarom. Kétkedve írtam neki: vajon nem késtem-e el, vállalja-e, hogy velem lesz, segít engem a szülés előtt, közben, és még utána is? Szerencsémre igent mondott. Ahogy az orvos és a szülésznő is. Ezután még jó párszor találkoztunk: kettesben, hármasban az apukával, négyesben az orvosommal és a szülésznőmmel… mire odaértünk a szüléshez, mindenki ismert mindenkit, a szülési tervemet átrágtuk, megbeszéltük, és már csak arra vártunk, hogy Zsiga jelezzen, jönni akar.
                </p>
                <p>
                    Az első fájások egy héttel a kiírt dátum előtt érkeztek meg: csak annyira voltak kellemetlenek, hogy ne tudjunk aludni, és hogy elkezdjünk aggódni. Mintha a magzatvíz is folydogált volna. Féltem, túl korai a kórházba sietni, Emőke is nyugtatott, van még idő, ne kapkodjunk. Végül hajnalban, amikor már elindultunk volna, meg is szűnt minden fájdalom.
                </p>
                <p>
                    És elkezdődött a nap, amolyan igazi, olaszos tempóban. Anyu, a nagynéném, a testvérem a feleségével és a kisfiával mind hozzánk tette át a székhelyét, nem is a szülés miatt, csak úgy, merthogy együtt lenni jó. A konyhában gőzölögtek a fazekak, főtt a vasárnapi ebéd, a fiúk bútort szereltek, a lányok a gyerekekkel játszottak – és sehol egy kósza fájás. Emőke, megtudván, hogy mi a helyzet nálunk, annyit mondott csak: ha szülni akarok, mindenki menjen haza. Amíg dolgom van, a gyerekem várni fog, nem jön elő. Délután háromra sikerült elküldeni a népet, a pasim és a fiam lefeküdtek, a nagynéném a gyerekszobában olvasgatott, végre lerogytam a kanapéra.
                </p>
                <p>
                    És akkor AZONNAL beindultak a fájások. Három jött egymás után, öt perces szünetekkel. Azt hittem, meghalok. A harmadik után pedig elfolyt a magzatvíz. Azonnal riasztottam mindenkit, öt perc alatt el is indultunk, mert ekkor már nem volt kérdés: hamarosan megérkezik Zsiga. Húsz perc alatt beértünk a kórházba, de nekem az örökkévalóságnak tűnt. Ahogy beléptünk, valami csoda folytán az orvosom és a szülésznőm már az ajtóban állt mosolyogva. Aztán közölték a meglepő hírt: hét centire kitágultam, a nagyján már túl vagyunk. (Ó, dehogy voltunk! De ezt akkor még nem tudtam.)
                </p>
                <p>
                    Az alternatív szoba foglalt volt, így délután négykor egy teljesen átlagos szülőszobában cuccoltunk le, ahol a szüléskönnyítő eszközök mindössze egy óriás labdát jelentettek. Eredetileg szerettem volna kádban vajúdni, esetleg szülni is, amire az elvi igent meg is kaptam, de hely híján erre nem volt lehetőség. És mint később kiderült, kár is lett volna rám “pazarolni” a kádas szobát, a vajúdás nagy részét ugyanis a labdán ülve töltöttem, és közben egy komódot próbáltam minden erőmmel áttolni a szülőszoba falán. A gyerek apja a balomon támasztott meg egy kis sámlin ülve, nehogy leguruljak a labdáról, a jobbomon Emőke próbálkozott borogatásokkal és derékmasszázzsal. Ha nem szültem volna éppen, órákig élvezkedtem volna, de így záros határidőn belül kiderült, hogy azt szeretném, ha mindenki békén hagyna. Csak a támasztékot kerestem a segítőimben, hogy még nagyobb erővel tudjam a falnak tolni a komódot. Egyszer ugyan Emőke unszolására eltotyogtunk a zuhanyzóig, de ahogy megérkezett a következő fájás, már menekültem is ki, vissza az eredeti helyszínre, komódot tolni.
                </p>
                <p>
                    A fájások közötti szünetekben azért volt idő gondolkozni is: vajon miért kell mindenképpen Anne Geddes csöpögősen giccses fotóit nézni minden szülészet falán? Hogy képzelte Tom Cruise, hogy nem engedte meg Katie Holmes-nak, hogy megmukkanjon szülés közben? És hogy tudta ezt kivitelezni fent nevezett Katie? Vajon milyen site-okat néz az orvosom kint a gépén? Facebookozik talán? Így telt el négy közepesen elviselhetetlen óra, mígnem újra rám került a ctg, én meg a szülőágyra. Nem szerettem volna még a közelébe se kerülni az ágynak, de abban a pillanatban már nem volt fantáziám alternatíván gondolkodni, így elfogadtam, hogy ott kell maradnom egy darabig – szerencsére nem fekve, hanem ülve. És valahogy ott is ragadtam a szülés végéig. Minden más kivitelezhetetlennek tűnt, csak arra koncentráltam, hogy túléljem a gyakorlatilag egymást érő fájásokat.
                </p>
                <p>
                    Amikor már ott tartottam, hogy nem bírom tovább, emlékeztettem magamat, hogy én ezt akartam, és hogy amit akarok, az jó dolog, és hogy egyébként meg nincs visszaút, ezen az úton végig kell mennem. Találtam erőt, valahogy mindig akadt, pedig erősen belém plántálták, hogy ez a nagy természetesség iránti vágyam csak hóbort, szeretném az otthonszülő barátnőimet követni valamilyen szinten, de ha őszintén magamba néznék, kiderülne, hogy egy újabb császármetszéssel boldogabb lennék. Talán ezt a vélekedést akartam cáfolni, hatalmas bizonyítási vágy munkált bennem mindvégig. Meg akartam mutatni, hogy képes vagyok rá, hogy mindig is képes voltam, és az első szülésem nem az én defektusom miatt torkollott császármetszésbe, hanem rajtam, rajtunk kívülálló okok miatt történt.
                </p>
                <p>
                    Az órák múltak, a staff nemigen bővült: a pasim és Emőke fogták a lábam és a kezem, így voltunk mi el hármacskán. Na meg a bőszen nyomakodó kisfiam, bennem. A szülésznőm és az orvosom óránként egyszer egy percre tették tiszteletüket, és mosolyogva közölték, hogy nincs sok hátra. És ez így volt jó. Háborítatlanságot kívántam, maximálisan megkaptam. A csendes félhomályban olyan mély hangon üvöltöttem, mint egy basszbariton, (olvasmányélményeim alapján úgy tudtam, hogy a mélyebb hangok jobban segítenek, mint a sikítás) majd Emőke javaslatára prüszköltem, mint a ló, teljes odaadással. És a pasim is, épp ugyanolyan beleéléssel, mint én. Ha nem szülök éppen, leestem volna az ágyról a röhögéstől. De szültem.
                </p>
                <p>
                    És aztán az utolsó órában megérkezett az inger, amit vártunk. Na, innen már nem nagyon tudtam, hogy élem túl. Segítség! Én ezt már nem bírom! Ez már nem jó! Legyen vége! – lóprüszkölés közben ilyesmiket kiabáltam, szigorúan mély hangon.
                </p>
                <p>
                    A fáradtság az utolsó órában lepett meg drámai módon, ekkor a fájások is ritkulni kezdtek, aminek valahogy örültem is, van egy ilyen vihar előtti csend feeling a végső visszaszámlálás előtt, amit a szakirodalom is leír. Egyesek ilyenkor még aludni is tudnak pár percet. De ebből nekem nem jutott semmi. Az előzetes császár miatt ezen ponton, tudva a gyerek brutális méreteit, nem lehetett már ráérősen várakozni. Gyors konzultáció után bekötötték az oxitocint, ami aztán este 9 óra 36 perckor kirobbantotta belőlem a 3980 grammos, 60 centis, 36 centi fejkörfogatú fiamat. Gátvédelemre nem volt esély. Elfogadtam, mert tudtam, hogy a szülésznőm vérprofi gátvédő, ha nem próbálkozik, annak valódi oka van.
                </p>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth14Pic3} alt="Talaltam erot, valahogy mindig akadt"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Amikor megláttam a fiam fejét a lábam között, fel sem tudtam fogni, hogy az ott lent is én vagyok, és belőlem jön ki egy gyerek. Őszintén szólva nem is úgy nézett ki, mint egy gyerek, hanem mint egy mini alien. De aztán már ott is volt a mellemen, piros, bolyhos törölközőben, tökéletesen. Én pedig örültem, örültem, nem érdekelt semmi, szinte kiabálva örvendeztem, hogy megérkezett A Zsiga. A fotók tanúsága szerint – csak piros és még pirosabb foltok látszanak rajtuk – de ezt akkor egyáltalán nem érzékeltem. 
                        </p>   
                            
                    </div>
                </div>
                <p>
                    A büszke apuka 10 centisre vágta a köldökzsinórt (na, ezen még az orvosom és a szülésznő is poénkodott, hahaha, tudjuk, azért kell ez, hogy ne sérüljön az aurája, de egyáltalán nem érezték cikinek, vagy teljesíthetetlennek ezt a kérést sem, feléjük gyakorta megesik az ilyesmi – igaz, a csecsemősök később a köldökcsonk tövénél is odacsippentettek egy csipeszt, ők nem szeretik ezt az alternatívkodást. Így aztán az egésznek semmi értelme nem volt, maximum annyi, hogy lett egy fogantyúja a gyerekemnek).
                </p>
                <p>
                    Ezután is a szülési tervnek megfelelően várakoztunk együtt, hogy megszülessen békében a lepény. Sajnos azonban ez egy óra múltán sem következett be, és nyomásra, húzásra-vonásra sem reagált. Műtő, altatás, lepény kioperálása, ismét rengeteg vért vesztettem. A hemoglobin szintem a béka feneke alá került, bele is egyeztem végül abba, hogy rendeljenek nekem két egység vért, de a transzfúzió reggelén saját felelősségemre mégis lemondtam róla, inkább a hazamenetelt választottam.
                </p>
                <p>
                    És mi a helyzet most? Székrekedés, aranyér, szörnyen fájdalmas gátseb, semmihez nem hasonlítható gyengeség (egy tisztába tevés két órára hazavág) mellkasi fájdalmak, hidegrázás, tocsogós izzadás, két hét alatt visszanyert kezdősúly, aminek nem lehet örülni, mert plusz 18 kilóról indulva ez abnormális. Itt tartunk, amikor ezeket a sorokat írom, a két hetes, tökéletes kisfiam mellett az ágyban, aki a harmadik naptól kezdve vedeli az anyatejet, nő, mint a bolondgomba, alszik, mint a tejbetök, és minden pillanatban arra emlékeztet, hogy megnyertem a visszavágót. Nem csinálnám másképp, nem vállalnám másokkal a szülésemet, ha újra dönthetnék, hogyan hozzam világra Zsigát. És csak remélni tudom, hogy valahol még bennem van és kikészülődik egy Juli, akit hasonló körülmények között szülhetek meg.
                </p>
            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to="/stories">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
        </div>
      )
}
