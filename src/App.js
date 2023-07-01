import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Dulatrening from "./components/pages/Dulatrening";
import Dulakor from "./components/pages/Dulakor";
import Olvasnivalok from "./components/pages/Olvasnivalok";
import Blog from "./components/pages/Blog";
import Feedback from "./components/pages/Feedback";
import FeedbackParents1 from "./components/pages/FeedbackParents1";
import FeedbackParents2 from "./components/pages/FeedbackParents2";
import FeedbackPartners from "./components/pages/FeedbackPartners";
import FeedbackDulatrening from "./components/pages/FeedbackDulatrening";
import FeedbackDulamuhely from "./components/pages/FeedbackDulamuhely";

import Contact from "./components/pages/Contact";

import Anyavavalas from "./components/pages/Anyavavalas";
import Csaladterapia from "./components/pages/Csaladterapia";
import Bekesdulamuhely from "./components/pages/Bekesdulamuhely";
import Bekesdulatrening from "./components/pages/Bekesdulatrening";
import EgyeniKonzultacio from "./components/pages/EgyeniKonzultacio";
import Esetmegbeszelo from "./components/pages/Esetmegbeszelo";
import NevelesiTanacsadas from "./components/pages/NevelesiTanacsadas";
import SzulesElmenyFeldolg from "./components/pages/SzulesElmenyFeldolg";
import SzulesFelkeszites from "./components/pages/SzulesFelkeszites";
import Gyik from "./components/pages/Gyik"
import Stories from "./components/pages/Stories";
import Publications from "./components/pages/Publications";

import FeedBack1DF from "./components/pages/subfeedback/FeedBack1DF";
import FeedBack5BB from "./components/pages/subfeedback/FeedBack5BB";
import FeedBack6DV from "./components/pages/subfeedback/FeedBack6DV";
import FeedBack2FT from "./components/pages/subfeedback/FeedBack2FT";
import FeedBack3NZS from "./components/pages/subfeedback/FeedBack3NZS";
import FeedBack4SGY from "./components/pages/subfeedback/FeedBack4SGY";
import FeedBack7CST from "./components/pages/subfeedback/FeedBack7CST";
import FeedBack8TP from "./components/pages/subfeedback/FeedBack8TP";
import FeedBack9MG from "./components/pages/subfeedback/FeedBack9MG";
import FeedBack90KK from "./components/pages/subfeedback/FeedBack90KK";
import FeedBack91OH from "./components/pages/subfeedback/FeedBack91OH";
import FeedBack92HE from "./components/pages/subfeedback/FeedBack92HE";
import PfeedBack1rzs from "./components/pages/subfeedback/PfeedBack1rzs";
import PfeedBack2hb from "./components/pages/subfeedback/PfeedBack2hb";
import PfeedBack3aa from "./components/pages/subfeedback/PfeedBack3aa";
import PfeedBack4kg from "./components/pages/subfeedback/PfeedBack4kg";
import PfeedBack5kr from "./components/pages/subfeedback/PfeedBack5kr";
import StoryMother1 from "./components/pages/subfeedback/StoryMother1";
import StoryMother2 from "./components/pages/subfeedback/StoryMother2";
import StoryMother3 from "./components/pages/subfeedback/StoryMother3";

import Gallery from "./components/pages/Gallery";
import SubBlog01 from "./components/pages/blogs/SubBlog01";
import SubBlog02 from "./components/pages/blogs/SubBlog02";
import SubBlog03 from "./components/pages/blogs/SubBlog03";
import SubBlog04 from "./components/pages/blogs/SubBlog04";
import SubBlog05 from "./components/pages/blogs/SubBlog05";
import SubBlog06 from "./components/pages/blogs/SubBlog06";
import SubBlog07 from "./components/pages/blogs/SubBlog07";
import SubBlog08 from "./components/pages/blogs/SubBlog08";
import SubBlog09 from "./components/pages/blogs/SubBlog09";
import SubBlog10 from "./components/pages/blogs/SubBlog10";
import SubBlog11 from "./components/pages/blogs/SubBlog11";
import SubBlog12 from "./components/pages/blogs/SubBlog12";
import SubBlog13 from "./components/pages/blogs/SubBlog13";
import SubBlog14 from "./components/pages/blogs/SubBlog14";
import SubBlog15 from "./components/pages/blogs/SubBlog15";
import SubBlog16 from "./components/pages/blogs/SubBlog16";

import BirthStory01 from "./components/pages/stories/BirthStory01";
import BirthStory02 from "./components/pages/stories/BirthStory02";
import BirthStory03 from "./components/pages/stories/BirthStory03";
import BirthStory04 from "./components/pages/stories/BirthStory04";
import BirthStory05 from "./components/pages/stories/BirthStory05";
import BirthStory06 from "./components/pages/stories/BirthStory06";
import BirthStory07 from "./components/pages/stories/BirthStory07";
import BirthStory08 from "./components/pages/stories/BirthStory08";
import BirthStory09 from "./components/pages/stories/BirthStory09";
import BirthStory10 from "./components/pages/stories/BirthStory10";
import BirthStory11 from "./components/pages/stories/BirthStory11";
import BirthStory12 from "./components/pages/stories/BirthStory12";
import BirthStory13 from "./components/pages/stories/BirthStory13";
import BirthStory14 from "./components/pages/stories/BirthStory14";
import BirthStory15 from "./components/pages/stories/BirthStory15";
import BirthStory16 from "./components/pages/stories/BirthStory16";

import Public01 from "./components/pages/publications/Public01"
import Public02 from "./components/pages/publications/Public02"
import Public03 from "./components/pages/publications/Public03"
import Public04 from "./components/pages/publications/Public04"
import Public05 from "./components/pages/publications/Public05"
import Public06 from "./components/pages/publications/Public06"
import Public07 from "./components/pages/publications/Public07"
import Public08 from "./components/pages/publications/Public08"
import Public09 from "./components/pages/publications/Public09"
import Public10 from "./components/pages/publications/Public10"
import Public11 from "./components/pages/publications/Public11"
import Public12 from "./components/pages/publications/Public12"
import Public13 from "./components/pages/publications/Public13"
import Public14 from "./components/pages/publications/Public14"
import Public15 from "./components/pages/publications/Public15"
import Public16 from "./components/pages/publications/Public16"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header/>

          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/dulatrening" element={<Dulatrening/>}/>
            <Route path="/dulakor" element={<Dulakor/>}/>
            <Route path="/olvasnivalok" element={<Olvasnivalok/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/szuloi-visszajelzesek-1" element={<FeedbackParents1/>}/>
            <Route path="/szuloi-visszajelzesek-2" element={<FeedbackParents2/>}/>
            <Route path="/partneri-visszajelzesek" element={<FeedbackPartners/>}/>
            <Route path="/dulatrening-visszajelzesek" element={<FeedbackDulatrening/>}/>
            <Route path="/dulamuhely-visszajelzesek" element={<FeedbackDulamuhely/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/stories" element={<Stories/>}/>
            <Route path="/publications" element={<Publications/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>

          <Routes>
            <Route path="/anyavavalas" element={<Anyavavalas/>}/>
            <Route path="/csaladterapia" element={<Csaladterapia/>}/>
            <Route path="/bekesdulamuhely" element={<Bekesdulamuhely/>}/>
            <Route path="/bekesdulatrening" element={<Bekesdulatrening/>}/>
            <Route path="/egyenikonzultacio" element={<EgyeniKonzultacio/>}/>
            <Route path="/esetmegbeszelo" element={<Esetmegbeszelo/>}/>
            <Route path="/nevelesitanacsadas" element={<NevelesiTanacsadas/>}/>
            <Route path="/szuleselmenyfeldolg" element={<SzulesElmenyFeldolg/>}/>
            <Route path="/szulesfelkeszites" element={<SzulesFelkeszites/>}/>
            <Route path="/gyik" element={<Gyik/>}/>
          </Routes>

          <Routes>
            <Route path="/anyava-valasom-soran-volt-a-biztos-pont" element={<FeedBack1DF/>}/>
            <Route path="/egeszsegesenmegszuletett-a-kislanyom" element={<FeedBack2FT/>}/>
            <Route path="/nem-volt-kerdes-a-dulavalasztas" element={<FeedBack3NZS/>}/>
            <Route path="/egyszerre-nem-felvaltva" element={<FeedBack4SGY/>}/>
            <Route path="/orvos-vagyok-megis-sokat-jelentetel" element={<FeedBack5BB/>}/>
            <Route path="/ha-nem-lettel-volna" element={<FeedBack6DV/>}/>
            <Route path="/milyen-jo-hogy-igy-alakult" element={<FeedBack7CST/>}/>
            <Route path="/a-dula-nem-veszi-el-a-szuleszno-munkajat" element={<FeedBack8TP/>}/>
            <Route path="/annyi-mindent-javasoltál-es-csinaltal" element={<FeedBack9MG/>}/>
            <Route path="/olyan-mint-egy-baratno-csak-hozzaerto" element={<FeedBack90KK/>}/>
            <Route path="/letrejon-egy-spiritualis-kötelek" element={<FeedBack91OH/>}/>
            <Route path="/felkeszitett-benunnket-a-szulesre" element={<FeedBack92HE/>}/>
            <Route path="/nyitott-fulekre-es-szivekre-talalok" element={<PfeedBack1rzs/>}/>
            <Route path="/kezdetektol-fogva" element={<PfeedBack2hb/>}/>
            <Route path="/egyutt-gondolkodni" element={<PfeedBack3aa/>}/>
            <Route path="/aki-tudja-szakmáját-tudja-kompetenciait" element={<PfeedBack4kg/>}/>
            <Route path="/a-szulesnel-teljes-legyen-a-tamogatoi-kor" element={<PfeedBack5kr/>}/>
            <Route path="/oly-tavol-vagy-tolem-megis-kozel" element={<StoryMother1/>}/>
            <Route path="/szulni-a-szulofoldon-szardinia" element={<StoryMother2/>}/>
            <Route path="/anyava-valni-cipruson" element={<StoryMother3/>}/>
          </Routes>

          <Routes>
            <Route path="/ki-a-dula-es-miben-segit" element={<SubBlog01/>}/>
            <Route path="/dulahatas-kutatasok-eredmenyek" element={<SubBlog02/>}/>
            <Route path="/dulatreningre-menni-jo" element={<SubBlog03/>}/>
            <Route path="/a-lany-es-a-kisfiu" element={<SubBlog04/>}/>
            <Route path="/nyilt-hetvege-a-bekes-dulakorrel" element={<SubBlog05/>}/>
            <Route path="/szules-es-szuletes-napja-a-bekes-dulakorrel" element={<SubBlog06/>}/>
            <Route path="/a-csend-fia" element={<SubBlog07/>}/>
            <Route path="/ki-fel-szulestol" element={<SubBlog08/>}/>
            <Route path="/apak-konnyei" element={<SubBlog09/>}/>
            <Route path="/ujjaszuletes" element={<SubBlog10/>}/>
            <Route path="/oly-tavol-vagy-tolem" element={<SubBlog11/>}/>
            <Route path="/dulatabor" element={<SubBlog12/>}/>
            <Route path="/az-igeny-szerinti-szoptatasrol" element={<SubBlog13/>}/>
            <Route path="/dulatrening-ujra" element={<SubBlog14/>}/>
            <Route path="/pozitiv-uzenetek-szerepe-a-szulesnel-1" element={<SubBlog15/>}/>
            <Route path="/pozitiv-uzenetek-szerepe-a-szulesnel-2" element={<SubBlog16/>}/>
          </Routes>

          <Routes>
            <Route path="/kortars-kontosbe-bujt-javasasszony" element={<BirthStory01/>}/>
            <Route path="/csodak-marpedig-vannak" element={<BirthStory02/>}/>
            <Route path="/fele-lettem-a-gyermeknek" element={<BirthStory03/>}/>
            <Route path="/csaszarmetszes-utani-huvelyi-szules" element={<BirthStory04/>}/>
            <Route path="/tokeletes" element={<BirthStory05/>}/>
            <Route path="/anyatanc" element={<BirthStory06/>}/>
            <Route path="/nagy-utazas-ferfiszemmel" element={<BirthStory07/>}/>
            <Route path="/hideg-ho-melegseg" element={<BirthStory08/>}/>
            <Route path="/nagy-utazas" element={<BirthStory09/>}/>
            <Route path="/egy-kis-queen" element={<BirthStory10/>}/>
            <Route path="/szules-kozben-ceget-alapitok" element={<BirthStory11/>}/>
            <Route path="/lakoma-koncert-transz-baba" element={<BirthStory12/>}/>
            <Route path="/lena" element={<BirthStory13/>}/>
            <Route path="/talaltam-erot-valahogy-mindig-akadt" element={<BirthStory14/>}/>
            <Route path="/az-ut" element={<BirthStory15/>}/>
            <Route path="/kulonleges-ajandek" element={<BirthStory16/>}/>
          </Routes>

          <Routes>
            <Route path="/otthonszules-vagy-korhazi-szules" element={<Public01/>}/>
            <Route path="/indulas-erkezes" element={<Public02/>}/>
            <Route path="/csaszarmetszes-utan" element={<Public03/>}/>
            <Route path="/nem-konnyu-de-erdemes" element={<Public04/>}/>
            <Route path="/tamogatas-a-szules-alatt" element={<Public05/>}/>
            <Route path="/adventi-gondolatok-az-elfogadasrol" element={<Public06/>}/>
            <Route path="/tango-egy-gyermekert" element={<Public07/>}/>
            <Route path="/a-kicsi-es-a-nagy-szulesbatyuk" element={<Public08/>}/>
            <Route path="/a-hit-amely-vilagra-segiti-a-kisbabakat" element={<Public09/>}/>
            <Route path="/kenyelemre-programozva" element={<Public10/>}/>
            <Route path="/korhazban-vagy-otthonszulesnel-segit-a-dula" element={<Public11/>}/>
            <Route path="/csaszarmetszes-dulaval" element={<Public12/>}/>
            <Route path="/van-e-fealadata-az-apanak-a-szuloszobaban" element={<Public13/>}/>
            <Route path="/kie-a-kisbaba-otthon" element={<Public14/>}/>
            <Route path="/kie-a-kisbaba" element={<Public15/>}/>
            <Route path="/varandosan-nehez-az-alvas" element={<Public16/>}/>
          </Routes>
          
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
