export default function PrestationCard({ img, title, text }) {
  return (
    <div className="flex flex-col border-4 border-violet/90 bg-violet/10 rounded shadow-lg md:max-w-[350px]">
      
      

      {/* Titre */}
      <h3 className="text-xl text-white font-bold bg-violet/90 font-rosario p-2 text-center shrink-0">
        {title}
      </h3>

      {/* Image*/}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Texte  */}
      <p className="text-center px-6 pt-4 pb-8 flex-1">
        {text}
      </p>

      {/* Bouton  */}
      <div className="px-6 pb-6 mt-auto">
        <a
          href="#"
          className="block w-full text-center py-3 bg-blue hover:bg-blue/80 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
        >
          Voir nos réalisations
        </a>
      </div>
    </div>
  );
}