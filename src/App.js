import React, { lazy, Suspense, useEffect } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import TabView from "./components/TabView";

const Header = lazy(() => import("./components/Header"));
const Banner = lazy(() => import("./components/Banner/Banner"));
const About = lazy(() => import("./components/About/About"));
const WhySoham = lazy(() => import("./components/Features"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const SvgPlan = lazy(() => import("./components/Phases/PhaseOne"));
const Footer = lazy(() => import("./components/Footer"));

// Loading placeholder component
const ShimmerLoader = () => (
<div class="loader">
  h1
  <div class="square" id="sq1"></div>
  <div class="square" id="sq2"></div>
  <div class="square" id="sq3"></div>
  <div class="square" id="sq4"></div>
  <div class="square" id="sq5"></div>
  <div class="square" id="sq6"></div>
  <div class="square" id="sq7"></div>
  <div class="square" id="sq8"></div>
  <div class="square" id="sq9"></div>
</div>
);

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <Suspense fallback={<ShimmerLoader />}>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <WhySoham />
        <Gallery />
        <TabView/>
        {/* <SvgPlan /> */}
        <Footer />
        {/* <Routes>
          <Route path="/" element={<SvgPlan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> */}
      </div>
    </Suspense>
  );
}

export default App;
