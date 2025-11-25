export default function TargetCard({ icon, title, text, bgColor}) {
  return (
    <div className={`flex flex-col items-center text-center text-white py-8 ${bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
      {/* Icône */}
      <div className={`mb-6 text-6xl`}>
        {icon}
      </div>

      {/* Titre */}
      <h2 className=" border border-white px-4 rounded-lg ">
        {title}
      </h2>

      {/* Texte */}
      <p className="mx-4 text-white ">
        {text}
      </p>
    </div>
  );
}