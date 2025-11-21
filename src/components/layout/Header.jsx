import { useState } from "react";           // AJOUTE CETTE LIGNE EN HAUT
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  // état pour ouvrir/fermer le menu mobile
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
      <header className="h-[40px] lg:h-[50px] bg-green/90 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo + bande verte */}
          <div className="flex items-center">
            <div className="w-6 bg-green hidden md:block" />
            <img
              src={logo}
              alt="Canopées"
              className="bg-white h-[76px] px-5 w-auto max-w-[150px] lg:max-w-[200px] object-contain"
            />
          </div>

          {/* Navigation desktop */}

          <nav className="hidden md:flex items-center justify-center flex-1 md:gap-8 lg:gap-10 ">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  ` font-rosario lg:text-lg font-medium transition-colors hover:text-orange ${isActive ? "text-orange" : "text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>


          {/* BOUTON BURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-4xl focus:outline-none mr-6"
            aria-label="Menu"
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
          fixed top-0 right-0 h-[350px] w-60 bg-grey/90 transform transition-transform duration-300 z-50 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* X button */}
        <div className="flex justify-end mr-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-5xl text-white hover:text-orange "
          >
            ×
          </button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col items-end gap-5 mt-6 mr-5">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setIsOpen(false)}   // ferme le menu quand on clique un lien
                className={({ isActive }) =>
                  `text-xl font-rosario transition-colors ${isActive ? "text-orange" : "text-white"
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