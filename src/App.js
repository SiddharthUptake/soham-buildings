import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SvgPlan from "./components/SvgPlan";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import WhySoham from "./components/Features";
import Gallery from "./components/Gallery/Gallery";
import Aos from "aos";
import { useEffect } from "react";
// import Contact from "./components/Contact";
// import About from "./components/Features"

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <WhySoham />
      <Gallery />
      <SvgPlan />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<SvgPlan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<About/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes> */}
    </div>
  );
}

export default App;
