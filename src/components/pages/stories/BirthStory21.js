import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth21Pic1 from "../../../image/szulestort/szules-story-21-hero-a-termeszet-rendje-szerint.png";
import Birth21Pic2 from "../../../image/szulestort/szules-story-21-a-termeszet-rendje-szerint.jpg";

export default function BirthStory21() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
  <div>
    <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth21Pic1} alt="a-termeszet-rendje-szerint"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">A természet rendje szerint</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                         <Link to="/stories2" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth21Pic2} alt="a-termeszet-rendje-szerint"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Az első gyermekem születésére nagyon készültem, tömérdek könyvet olvastam el.
                            <br/>Természetesen, beavatkozások nélkül szerettem volna szülni. Nem féltem, úgy véltem ez a természet rendje. A választott doktornőm is nagyon kedves volt és biztosított, minden a kívánságom szerint zajlik majd, persze amennyire ezt a körülmények engedik.
                        </p>
                        <p>
                            Amikor bementem a kórházba, ő azonnal burkot akart repeszteni és nem értette, miért tiltakozom. Bennem, pedig megpattant valami, úgy éreztem magam, mint akit a boltban átvágtak. A szülésznő közben történetekkel szórakoztatott és ötleteket adott, mit kellene tennem. Pl. most üljek a labdára, most feküdjek az ágyra, stb. 
                        </p>
                        

                    </div>
                </div>

                <p>
                    Nem volt merszem szólni neki, hogy hagyjon már magamra, pedig arra vágytam. A vajúdás így megakadt. Az órák teltek, de én nem tágultam. Burokrepesztés, majd oxitocin, s azután csak fekvés és várakozás hihetetlen kínok közt. 9 óra vajúdás után mondták, hogy nyomhatok. Székelési ingerem nem volt. Nyomtam teljes erőmből, a szemem rendesen be is vérzett, eredmény nem sok volt. Közölték, hogy rosszul csinálom. Ha akkor a férjem nincs ott, és nem tartja bennem a lelket, valószínűleg feladom, és sírva fakadok. Két óra kitolási szakasszal, gátmetszéssel megszületett a kislányom. Összevarrtak, majd kiderült, hogy egy ér megsérült és ezért műteni kell. A dupla varrás a nőgyógyászok szerint szépen begyógyult, ennek ellenére még mind a mai napig fáj és a bal lábamat oldalra csak erős fájdalom mellett tudom emelni. Ezek után úgy éreztem, a testem satnya, nem alkalmas a szülésre és csak a doktornőn múlott, hogy a kislányom egészségesen a világra tudott jönni. Úgy gondoltam, szép, szép a természetes szülés, de valószínű azt az erősebb fizikumú, edzettebb nőknek találták ki, nem nekem.
                </p>
                <p>
                    A második szülés előtt féltem a kíntól és attól, hogy a testem cserben hagy. Elmentem egy szülésfelkészítő tanfolyamra és hirtelen minden más megvilágításba került. Az ott elhangzottakból kiderült számomra, hogy az első szülésemnél az utolsó vizsgálat során végzett beavatkozás (a doktornő leválasztotta a burkot) tulajdonképpen a szülés beindítását szolgálta, amit kifejezetten elleneztem volna, ha tudom, mire megy ki a játék. Arról is ott hallottam először, hogy a szülés után a méh átöblítése jódos oldattal nem minden orvosnál bevett szokás és a WHO sem ajánlja. (Az első szülésem után ilyen is volt.) Ezután döntöttem úgy, hogy 6 hónapos terhesen másik orvost keresek és dúlát fogadok. A dúlám, Békés Emőke nagyon sokat segített nekem. Hosszas beszélgetések előzték meg a szülést és igazi barátra leltem benne. A második szülésem csodálatos élmény volt minden „résztvevő” számára, pedig ugyanabban az intézményben zajlott, ahol az első, csak a segítőim voltak mások.
                </p>
                <p>
                    Reggel mentem be a kórházba a férjemmel és a dúlámmal. Ott már várt a fogadott szülésznőm, aki gondoskodott róla, hogy a vajúdó kellemes meleg legyen. Miután átestem az ilyenkor szokásos vizsgálatokon, magunkra maradtunk a vajúdóban a dúlával és a férjemmel. A dúlám teamécsesek tömkelegét varázsolta a besötétített szobába, halk zene szólt, illóolajok finom illata szállt és én teljesen elmerülve magamban, mintegy révületben táncoltam meztelenül a bordásfal előtt, a fájásoknál meg-megkapaszkodva. A zene elringatott, lelki szemeim előtt egy egyre táguló kört láttam és éreztem, ahogy a fájások hullámai egyre mélyebbre sodornak. Nem tiltakoztam, nem akartam, hogy ne fájjon, akkor már tudtam, az a jó, ha minden egyes fájás kicsit erősebb, mint az előző. A dúlám közben illatos forró vizes borogatásokat készített, amit a férjem rakott a pocakomra. Egy idő után éreztem, jobb volna egy egész kádnyi meleg vízben ülni. Csukott szemmel ringatóztam a vízben, néha meg kapaszkodtam a férjemben. Egyszer csak éreztem, hogy most már nem jó ülni, állni kellene. Visszatértem a bordásfalhoz, és ahogy álltam, megéreztem, tisztán és biztosan tudtam, hogy eljött az idő és most nyomni kell. Ekkor jött be a szülésznő és az orvosom. Az első nyomás nagyon fájdalmas volt. Megijedtem, féltem az óriási kíntól, és a hosszú kitolási szakasztól, ami az első szülésemnél volt. A második fájásnál nem nyomtam és csak annyit rebegtem: „Még nem akarom, hogy kijöjjön”. A dúlám suttogva bíztatott, hogy nyugodtan mondjam ki, amit szeretnék. Senki sem sürgetett. Ez a bizalommal teli légkör ellazított. A következő fájásnál megint nem nyomtam, illetve csak a végén egy picikét. S szinte döbbenten éreztem a belőlem könnyedén kicsúszó testecskét, a kisfiamat, akit természetesen azonnal odaadtak. Mikor a férjemre néztem, láttam, hogy potyognak a könnyek az arcán. Ő sírt, nem a kisfiúnk. Ha a második szülésemre visszagondolok, Enya ritmusait hallom, teamécsesek villódzását látom és egy kellemes illat jut eszembe, olyan volt, akár egy bensőséges randevú.
                </p>
                <p>
                    Leírhatatlanul hálás vagyok ezért mindenkinek, akik ezt lehetővé tették számomra, a férjemnek, a dúlámnak, az orvosomnak és a szülésznőmnek.
                </p>


            </div>

            <div className="blog-global-tags">
                <p>Címkék:</p>
                <Link to="/olvasnivalok">Olvasnivalók</Link> 
            <Link to= "/stories2">Szüléstörténetek</Link>
            </div>
        </div>
    </section>
  </div>
  )
}
