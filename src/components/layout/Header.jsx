import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Accueil" },
    { to: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
    { to: "/prestations", label: "Nos prestations" },
    { to: "/tarifs", label: "Tarifs" },
    { to: "/contact", label: "Contact & Devis" },
  ];

  return (
    <>
      <header className="h-16 bg-green/90 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo + bande verte */}
          <div className="flex items-center">
            <div className="w-6 md:block" />
            <img
              src={logo}
              alt="Canopées - Entreprise de paysagisme"
              className="bg-white h-16 px-5 w-auto max-w-[120px] lg:max-w-[200px] object-contain"
            />
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center justify-center flex-1 md:gap-4 lg:gap-10 ">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  ` font-rosario text-xl font-medium transition-colors hover:text-orange ${isActive ? "text-orange" : "text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>


          {/* BURGER BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Ouvrir le menu de navigation"
            className="md:hidden text-4xl p-2 m-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-green-700 rounded"
          >
            {isOpen ? "" : "☰"}
          </button>
        </div>
      </header>

      {/* Burger menu */}
      <div
        className={`
          fixed inset-0 transition-opacity duration-300 z-40  
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Burger layer */}
      <nav
        className={`
          fixed top-0 right-0 h-[350px] w-60 bg-gray-900 transform transition-transform duration-300 z-50 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* X button */}
        <div className="flex justify-end mt-2 mr-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-5xl text-white hover:text-orange "
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col items-start gap-5 mt-2 p-4 pr-4 bg-gray-900">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl font-semibold font-rosario transition-colors ${isActive ? "text-orange" : "text-white"
                  } hover:text-orange`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}