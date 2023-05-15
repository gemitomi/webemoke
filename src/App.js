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
import Dulakor from "./components/pages/Dulakor";
import Blog from "./components/pages/Blog";
import Feedback from "./components/pages/Feedback";
import Contact from "./components/pages/Contact";

import Anyavallalas from "./components/pages/Anyavallalas";
import Csaladterapia from "./components/pages/Csaladterapia";
import Dulamuhely from "./components/pages/Dulamuhely";
import Dulatrening from "./components/pages/Dulatrening";
import EgyeniKonzultacio from "./components/pages/EgyeniKonzultacio";
import Esetmegbeszelo from "./components/pages/Esetmegbeszelo";
import NevelesiTanacsadas from "./components/pages/NevelesiTanacsadas";
import SzulesElmenyFeldolg from "./components/pages/SzulesElmenyFeldolg";
import SzulesFelkeszites from "./components/pages/SzulesFelkeszites";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header/>

          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/dulakor" element={<Dulakor/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
          <Routes>
            <Route path="/anyavallalas" element={<Anyavallalas/>}/>
            <Route path="/csaladterapia" element={<Csaladterapia/>}/>
            <Route path="/dulamuhely" element={<Dulamuhely/>}/>
            <Route path="/dulatrening" element={<Dulatrening/>}/>
            <Route path="/egyenikonzultacio" element={<EgyeniKonzultacio/>}/>
            <Route path="/esetmegbeszelo" element={<Esetmegbeszelo/>}/>
            <Route path="/nevelesitanacsadas" element={<NevelesiTanacsadas/>}/>
            <Route path="/szuleselmenyfeldolg" element={<SzulesElmenyFeldolg/>}/>
            <Route path="/szulesfelkeszites" element={<SzulesFelkeszites/>}/>
          </Routes>
          
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
