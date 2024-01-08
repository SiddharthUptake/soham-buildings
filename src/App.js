import { Route, Routes } from "react-router-dom";
import "./App.css";
import SvgPlan from "./components/SvgPlan";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SvgPlan />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
