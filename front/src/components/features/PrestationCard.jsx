export default function PrestationCard({ img, title, text }) {
  return (
    <div className="flex flex-col items-center text-center  bg-violet/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:cursor-pointer md:max-w-72">

      {/* Titre */}
      <h3 className="text-xl text-blue hover:text-blue/50 font-semibold underline font-rosario p-4">
        {title}
      </h3>

      {/* Image*/}
      <div className="w-full h-60 overflow-hidden ">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center "
        />
      </div>

      {/* Texte */}
      <p className="p-4">
        {text}
      </p>
    </div>
  );
}