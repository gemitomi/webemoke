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
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/feedbackparents1" element={<FeedbackParents1/>}/>
            <Route path="/feedbackparents2" element={<FeedbackParents2/>}/>
            <Route path="/feedbackpartners" element={<FeedbackPartners/>}/>
            <Route path="/feedbackDulatrening" element={<FeedbackDulatrening/>}/>
            <Route path="/feedbackDulamuhely" element={<FeedbackDulamuhely/>}/>
            <Route path="/contact" element={<Contact/>}/>
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
          </Routes>
          
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
