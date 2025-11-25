// src/components/features/PricingTable.jsx
import { useState } from "react";
import { pricingData } from "../../data/prices";

export default function PricingTable() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mx-auto py-4 px-4">
      {/* Onglets */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {pricingData.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`px-4 py-4 rounded-3xl text-lg md:text-xl font-rosario font-semibold uppercase transition-all w-48 shadow-lg ${
              selected === index
                ? "bg-violet text-white scale-105 shadow-2xl"
                : "bg-violet/20 text-gray-900 hover:bg-violet/30"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Tableau des prix */}
      <div className="rounded-2xl shadow-2xl p-4 md:p-8 bg-violet/10 border-2 border-violet/90 max-w-2xl mx-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-violet/30">
              <th className="py-6 text-2xl font-rosario font-bold text-violet">
                {pricingData[selected].title}
              </th>
              <th className="py-6 text-2xl font-semibold text-blue text-right">
                Tarif H.T.
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingData[selected].details.map((line, i) => (
              <tr key={i} className="border-b border-violet/30">
                <td className="py-5 text-gray-900 md:text-lg">{line.service}</td>
                <td className="py-5 text-right font-bold text-blue md:text-lg">
                  {line.prix}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-8 text-center text-sm md:text-base text-gray-600 italic font-medium">
          {pricingData[selected].info}
        </p>
      </div>
    </div>
  );
}