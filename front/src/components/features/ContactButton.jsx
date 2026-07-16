// src/components/features/ContactButton.jsx
// Composant boutton avec redirection vers la page Contact

import { Link } from 'react-router-dom'

// Composant ContactButton
export default function ContactButton({ btnContent }) {
  return (
    <div className="mt-16 mb-8 text-center w-72 ">
      <Link to="/contact" className=" sm:text-xl p-2 sm:p-4 text-center  bg-blue hover:bg-blue/80 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105">
        {btnContent}
      </Link>
    </div>
  )
}