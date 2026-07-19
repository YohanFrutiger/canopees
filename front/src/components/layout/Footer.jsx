import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="h-[80px] bg-green/90 text-white mt-16 ">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between ">
        {/* COLONNE GAUCHE */}
        <div className="flex flex-col ml-2 md:ml-5 font-thin text-sm gap-1">
          <p className="text-sm">
            SARL Canopées
          </p>
          <p className="text-sm">
            25 rue Rossignol 07320 Saint-Agrève
          </p>
          <p className="text-sm">
            04 72 32 45 67
          </p>
        </div>
        {/* COLONNE DROITE  */}
        <div className="flex flex-col items-end text-right mr-2 md:mr-5 font-thin gap-1 text-sm">
          <a
            href="mailto:contact@canopees.fr"
            className="hover:text-orange transition "
          >  contact@canopees.fr </a>
          
            <div>
              <NavLink to="/legal-notices" className="hover:text-orange transition">
                Mentions légales
              </NavLink>
            </div>
            <div>
              <NavLink to="/terms-and-conditions" className="hover:text-orange transition">
                CGV / CGU
              </NavLink>
            </div>
         
        </div>
        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <p className="text-md">
            Canopées © 2025
          </p>
          {/* <img
            src={logo}
            alt="Canopées"
            className="p-5 h-[65px] lg:h-[70px] w-auto object-contain"
          /> */}
        </div>
      </div>
    </footer>
  );
}