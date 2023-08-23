import React , { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/blog_global.css"

import Birth01Pic1 from "../../../image/szulestort/szules_story_01_hero.png";
import Birth01Pic2 from "../../../image/szulestort/szules_story_01_a_.jpg";
import Birth01Pic3 from "../../../image/szulestort/szules_story_1.png";

export default function BirthStory01() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
           <section className="section-blog-global">
        <div className="blog-global-container">
            <div className="blog-global-hero">
                <img src={Birth01Pic1} alt="Kortars kontosbe bujt javasasszony?"/>
            </div>

            <div className="blog-global-face">
                <h2 className="blog-global-title">Kortárs köntösbe bújt javasasszony?</h2>
                <div className="blog-global-profile-container">
                    <div className="blog-global-profile">
                        <div className="blog-global-img-container">
                            
                        </div>
                        <div className="blog-global-text">
                            <h3>Békés Emőke</h3>
                            <p>2020. április 19.</p>
                        </div>
                    </div>
                    <div className="blog-global-button">
                   <Link to="/stories" className="blog-global-btn">Szüléstörténetek</Link>
                    </div>
                </div>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth01Pic3} alt="Kortars kontosbe bujt javasasszony?"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            Kislányunk, az elragadó csöppség, Júlia immáron 13 hónapos múlt, amikor ezen sorokat írom.
                        </p>
                        <p>
                            Mindmáig határtalan boldogsággal gondolok vissza az időszakra, amikor vártuk érkezését és a születésének katartikus élményét pedig mindörökre életem legfelemelőbb emlékeként őrzöm.
                        </p>


                    </div>
                </div>

                <p>
                    Feleségem a terhesség korai időszakában vetette fel, hogy szeretne dúlával együtt készülni és örülne, ha én is csatlakoznék. Nos, akkoriban én még az apás szülés gondolatával is csak távolról és bizonytalankodva barátkoztam, de  hogy egy ilyen fura elnevezésű “javasasszonyhoz” is ellátogassak, no azt aztán meglehetős kétkedéssel fogadtam. Meggyőződésem volt, hogy itt valami kortárs köntösbe bújtatott kuruzslás folyik,  ami esetleg a nőknek lelki támaszt ad, ám ahol nekem bizonyosan nincs semmi keresnivalóm. Végül beadtam a derekam, azzal, hogy egy alkalom után szabadon távozhatok. Nos, ilyen előítéletekkel és előérzetekkel érkeztem Emőkéhez. Utólag persze megmosolyogtató az, hogy miként ébredtem rá rögvest az első  hármas találkozásunkkor, hogy itt bizony nincs mágia, ezotéria és kuruzslás, hanem egy rendkívül meghitt, őszinte, nyílt, tabuk nélküli beszélgetés, közös készülés folyik életünk legszebb és – akkor még gyermek nélküli pár számára – legkevésbé ismert eseményére.
                </p>
                <p>
                    Emőke természetessége, magabiztos tudása, tapasztalata és elkötelezett támogatása nagyszerűen segítette kérdéseink tisztázását, aggályaink oldását és a szülésre, mint “ünnepre” való készülést. Egyetlen alkalmat sem mulasztottam el a terhesség alatt, s csak annak szurkoltam, érjen majd rá a nagy napon. Itt jegyzem meg, hogy végtelenül profi és megnyugtató módon egy találkozást annak szentelt Emőke, hogy bemutassa dúlatársait és így azzal a biztonsággal felvértezett, hogy ha véletlenül ő mégsem tud jönni, akkor is jó kezekben leszünk.
                </p>
                <p>
                    A szülés leírására külön fejezeteket szentelhetnék, mert bárhányszor visszagondolok rá, jótékony bizsergés fog el, boldog mosoly ül arcomra és apró örömkönnyek gyűlnek szemem sarkába.
                </p>
                <p>
                    Pedig én “csak” apaként éltem át az élményt, igaz annak mind a tizenegynehány óráját teljes jelenléttel, valóban támogatva feleségemet és egyben megélve a katarzist. Egyébiránt abban is sokat tanultam Emőkétől, hogy mindez ne egy Woody Allen filmbe illő “együttnyomjuk” és ne csupán egy “apuka vágja el a köldökzsinort” epizódszerep legyen. Praktikus tanácsai, tanítása nyomán szinte aggálymentesen tettem a dolgom az első fájások megindulásától a baba világrajöveteléig, hiszen mindent jó alaposan körüljártunk előre.
                </p>
                <p>
                    Mindemellett igazi megnyugvással fogadtam, hogy Emőke a nagy nap éjjelén vidáman fogadta hívásom, amelyben izgatottan jeleztem, hogy szerintem elindult a dolog… Eljött hozzánk, masszázzsal, borogatással és legfőképp sugárzó nyugalommal könnyítette a vajúdást. Együtt mentünk be a kórházba, ahol 10 órával később természetes úton megszületett csodás kislányunk. Talán egyszer majd a születéstörténetét is megírom, mert ott is Emőke volt a legerősebb a bástyánk.
                </p>
                <p>
                    Szóval én igazán messziről és kétkedve fogadtam a “dúlaságot”, de Emőkének köszönhetően ma már el sem tudnám képzelni, hogy a készülés és a szülés miként ment volna nélküle.
                </p>

                <div className="blog-globale-column">
                    <div className="blog-globale-img-container">
                        <img src={Birth01Pic2} alt="Kortars kontosbe bujt javasasszony?"/>
                    </div>
                    <div className="blog-globale-text">
                        <p>
                            <b>Köszönjük és jó szívvel ajánljuk mindenkinek</b>, lelkes leendő anyukáknak és kétkedő jővőbeli apukáknak egyaránt.
                        </p>
                    </div>
                </div>
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
