// src/pages/Tarifs.jsx
import PricingTable from "../components/features/PricingTable";
import ContactButton from "../components/features/ContactButton";

export default function Tarifs() {
  return (
    <section className=" py-8 bg-gray-50 min-h-screen">
      <div className="text-center">
        <h1 className="uppercase font-semibold text-center text-xl text-black tracking-wide pb-16">
          Des prix transparents adaptés à chaque projet
        </h1>

        <PricingTable />

        <ContactButton
                    btnContent="Demandez un devis gratuit !"
                  />
      </div>
    </section>
  );
}