// src/pages/Tarifs.jsx
import PricingTable from "../components/features/PricingTable";
import ContactButton from "../components/features/ContactButton";
import Line from "../components/layout/Line";

export default function Tarifs() {
  return (
    <div className="text-center pb-8 pt-16 bg-gray-50 min-h-screen">
      <p >Chez Canopées, nous mettons un point d’honneur à pratiquer une transparence totale sur nos tarifs : votre devis gratuit, établi après visite sur place ou analyse de vos éléments, est détaillé poste par poste, avec un prix fixe et définitif qui ne variera que si vous décidez vous-même d’ajouter ou modifier des prestations. Aucun frais caché, aucune mauvaise surprise. Parce que pour nous, créer votre jardin doit rester un plaisir sans ombre, du premier contact jusqu’à la dernière facture.
      </p>
      <Line />
      <PricingTable />
      <ContactButton
        btnContent="Demandez un devis gratuit !"
      />
    </div>
  );
}