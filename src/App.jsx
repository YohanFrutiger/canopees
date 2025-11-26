import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Prestations from "./pages/Prestations";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/canopees">  
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[40px] lg:pt-[50px] mx-auto max-w-6xl px-6 w-full">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/tarifs" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;