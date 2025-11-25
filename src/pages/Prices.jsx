// src/pages/Tarifs.jsx
import PricingTable from "../components/features/PricingTable";
import ContactButton from "../components/features/ContactButton";


export default function Tarifs() {
  

  
  return (
    <section className=" py-8 bg-gray-50 min-h-screen">
      <div className="text-center">
        <p className="text-gray pb-8 text-lg font-semibold">Chez Canopées, nous mettons un point d’honneur à pratiquer une transparence totale sur nos tarifs : votre devis gratuit, établi après visite sur place ou analyse de vos éléments, est détaillé poste par poste, avec un prix fixe et définitif qui ne variera que si vous décidez vous-même d’ajouter ou modifier des prestations. Aucun frais caché, aucune mauvaise surprise. Parce que pour nous, créer votre jardin doit rester un plaisir sans ombre, du premier contact jusqu’à la dernière facture.
        </p>

        <hr className="border-t border-gray/50 w-14 mx-auto mb-8" />


        <PricingTable />

        <ContactButton
          btnContent="Demandez un devis gratuit !"
        />
      </div>
    </section>

    // <>
    //   <div className="px-6 pb-6 mx-auto">
    //     <a
    //       href="#"
    //       className="block w-48 text-center py-3 bg-blue hover:bg-blue/80 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
    //       onClick={(e) => handleClick(e)}
    //     >
    //       Voir nos réalisations
    //     </a>
    //   </div>



      
    // </>

  );
}