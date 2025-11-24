export default function TargetCard({ icon, title, text, bgColor}) {
  return (
    <div className={`flex flex-col items-center text-center text-white py-8 ${bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
      {/* Icône */}
      <div className={`mb-6 text-6xl`}>
        {icon}
      </div>

      {/* Titre */}
      <h3 className="text-xl underline font-rosario  mb-4">
        {title}
      </h3>

      {/* Texte */}
      <p className=" px-2 ">
        {text}
      </p>
    </div>
  );
}