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
            <Route path="/feedbackparents1" element={<FeedbackParents1/>}/>
            <Route path="/feedbackparents2" element={<FeedbackParents2/>}/>
            <Route path="/feedbackpartners" element={<FeedbackPartners/>}/>
            <Route path="/feedbackDulatrening" element={<FeedbackDulatrening/>}/>
            <Route path="/feedbackDulamuhely" element={<FeedbackDulamuhely/>}/>
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
            <Route path="/feedback1df" element={<FeedBack1DF/>}/>
            <Route path="/feedback2ft" element={<FeedBack2FT/>}/>
            <Route path="/feedback3nzs" element={<FeedBack3NZS/>}/>
            <Route path="/feedback4sgy" element={<FeedBack4SGY/>}/>
            <Route path="/feedback5bb" element={<FeedBack5BB/>}/>
            <Route path="/feedback6dv" element={<FeedBack6DV/>}/>
            <Route path="/feedback7cst" element={<FeedBack7CST/>}/>
            <Route path="/feedback8tp" element={<FeedBack8TP/>}/>
            <Route path="/feedback9mg" element={<FeedBack9MG/>}/>
            <Route path="/feedback90kk" element={<FeedBack90KK/>}/>
            <Route path="/feedback91oh" element={<FeedBack91OH/>}/>
            <Route path="/feedback92he" element={<FeedBack92HE/>}/>
            <Route path="/pfeedback1rzs" element={<PfeedBack1rzs/>}/>
            <Route path="/pfeedback2hb" element={<PfeedBack2hb/>}/>
            <Route path="/pfeedback3aa" element={<PfeedBack3aa/>}/>
            <Route path="/pfeedback4kg" element={<PfeedBack4kg/>}/>
            <Route path="/pfeedback5kr" element={<PfeedBack5kr/>}/>
            <Route path="/storymother1" element={<StoryMother1/>}/>
            <Route path="/storymother2" element={<StoryMother2/>}/>
            <Route path="/storymother3" element={<StoryMother3/>}/>
            
          </Routes>
          <Routes>
            <Route path="/ki-a-dula-es-miben-segit" element={<SubBlog01/>}/>
            <Route path="/dulahatas" element={<SubBlog02/>}/>
            <Route path="/dulatreningre-menni-jo" element={<SubBlog03/>}/>
            <Route path="/a-lany-es-a-kisfiu" element={<SubBlog04/>}/>
            <Route path="/nyilt-hetvege" element={<SubBlog05/>}/>
          </Routes>
          
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
