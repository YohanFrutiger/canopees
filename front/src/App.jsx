import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import LegalNotices from "./pages/LegalNotices";

function App() {
  return (
    <BrowserRouter basename="/canopees">  
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow mt-[32px]  mx-auto max-w-6xl px-6 w-full">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/legal-notices" element={<LegalNotices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;