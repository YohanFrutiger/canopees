// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Import de tes pages (crée-les au fur et à mesure, même vides pour l'instant)
import Home from "./pages/Home";
// import About from "./pages/About";
// import Prestations from "./pages/Prestations";
// import Prices from "./pages/Prices";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/prestations" element={<Services />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />

        {/* Le Footer viendra ici plus tard ici */}
      </div>
    </Router>
  );
}

export default App;
