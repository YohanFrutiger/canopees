// src/components/features/TargertCard.jsx
// Composant : Carte pour le public cible en page d'accueil

export default function TargetAudienceCard({ icon, title, text, bgColor }) {
  return (
    <div className={`flex flex-col items-center  text-center py-8 rounded-md  border-2 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
      {/* Icône */}
      <div className={`mb-2 text-6xl`}>
        {icon}
      </div>

      {/* Titre */}
      <h3 className=" border border-white px-4 mb-8 rounded-lg ">
        {title}
      </h3>

      {/* Texte */}
      <p className="mx-4">
        {text}
      </p>
    </div>
  );
}