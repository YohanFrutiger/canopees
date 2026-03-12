// components/features/PriceCard.jsx
import parse from "html-react-parser";

export default function PriceCard({ cat, services }) {
  return (
    <div className="w-full max-w-[320px] mx-auto h-[465px] flex flex-col rounded-lg shadow-md border border-violet/50 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      
      {/* Titre violet */}
      <h2 className="text-base font-semibold text-center mb-4 bg-violet/90 text-white p-3 mt-6">
        {cat.title}
      </h2>

      {/* Contenu qui pousse l'info en bas */}
      <div className="flex flex-col flex-1 px-4 pt-2">
        <ul className="flex-1 space-y-1">
          {services.map((service) => (
            <li
              key={service.id}
              className="flex justify-between border-b border-gray-200 pb-3 last:border-none"
            >
              <span className="text-gray-700 pr-4">{service.title}</span>
              <span className="font-semibold text-gray-900 whitespace-nowrap">
                {service.price}
              </span>
            </li>
          ))}
        </ul>

        {/* INFO TOUT EN BAS */}
        {cat.info && (
          <div className="mt-auto text-center pb-6 pt-4 border-t border-violet/20">
            <p className="text-sm text-gray-600 leading-relaxed">
              {parse(cat.info)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}