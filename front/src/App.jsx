import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));
// import About from "./pages/About";
const About = lazy(() => import("./pages/About"));
// import Categories from "./pages/Categories";
const Categories = lazy(() => import("./pages/Categories"));
const Prices = lazy(() => import("./pages/Prices"));
// import Contact from "./pages/Contact";
const Contact = lazy(() => import("./pages/Contact"));
// import TermsAndConditions from "./pages/TermsAndConditions";
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
// import LegalNotices from "./pages/LegalNotices";
const LegalNotices = lazy(() => import("./pages/LegalNotices"));

function App() {
  return (
    <BrowserRouter basename="/">  
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow mt-[32px]  mx-auto max-w-6xl px-6 w-full">
          <Suspense fallback={<div>Chargement...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/legal-notices" element={<LegalNotices />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;