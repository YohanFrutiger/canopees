import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="h-[120px] bg-green/90 text-white mt-8 ">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between relative ">

        {/* COLONNE GAUCHE */}
        <div className="flex flex-col gap-1 lg:gap-3 ml-2 md:ml-5 ">
          
          <p className="text-base">
            Canopées © 2025

          </p>
          <p className="text-base">
            25 rue Rossignol 07320 Saint-Agrève

          </p>
          <p className="text-base">
            04 72 32 45 67
          </p>
          
        </div>



        {/* COLONNE DROITE  */}
        <div className="flex flex-col items-end text-right gap-1 lg:gap-3 mr-2 md:mr-5 ">
          <a
            href="mailto:contact@canopees.fr"
            className="hover:text-orange transition "
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
        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <img
            src={logo}
            alt="Canopées"
            className="p-5 h-[65px] lg:h-[70px] w-auto object-contain"
          
          />
        </div>


      </div>

    </footer>
  );
}