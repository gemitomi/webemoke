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
          
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
