// src/components/layout/Footer.jsx
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="h-[120px] bg-green/90 text-white mt-auto">
      <div className="h-full max-w-7xl lg:mx-auto px-6 flex items-center justify-between relative">

        {/* === COLONNE GAUCHE – toujours à gauche === */}
        <div className="flex flex-col gap-1 lg:gap-3 ml-5">
          
          <p className="">
            Canopées © 2025

          </p>
          <p className="">
            25 rue Rossignol 07320 Saint-Agrève

          </p>
          <p className="">
            04 72 32 45 67
          </p>
          
        </div>



        {/* === COLONNE DROITE – toujours à droite === */}
        <div className="flex flex-col items-end text-right gap-1 lg:gap-3 mr-5">
          <a
            href="mailto:contact@canopees.fr"
            className="hover:text-orange transition"
          >
            contact@canopees.fr
          </a>

          <div className="flex flex-col gap-1 lg:gap-3">
            <NavLink to="/mentions-legales" className="hover:text-orange transition">
              Mentions légales
            </NavLink>
            <NavLink to="/cgu-cgv" className="hover:text-orange transition">
              CGU / CGV
            </NavLink>
          </div>
        </div>
        {/* === LOGO CENTRÉ SUR GRAND ÉCRAN === */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <img
            src={logo}
            alt="Canopées"
            className="p-5 h-[65px] lg:h-[70px] w-auto object-contain"
          // h-24 = 96 px → bien visible mais pas trop imposant
          // opacity-30 → discret, élégant, ne vole pas la vedette au text
          />
        </div>


      </div>

      {/* Copyright en bas */}
      {/* <div className="text-center text-xs py-2 bg-green-800">
        © {new Date().getFullYear()} Canopées – Tous droits réservés
      </div> */}
    </footer>
  );
}