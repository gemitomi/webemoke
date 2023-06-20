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
          
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
