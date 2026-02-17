// Page Tarifs
import { useContentSections } from '../hooks/useContentSections';
import PricingTable from "../components/features/PricingTable";
import ContactButton from "../components/features/ContactButton";
import Line from "../components/layout/Line";
import parse from "html-react-parser";

export default function Tarifs() {
  const content = useContentSections();
  const pricesPageIntroSection = content.getSectionByKey('prices-intro');

  let pricesIntroContent;
  if (content.loading) {
    // pricesIntroContent = <p>Chargement...</p>;
  } else if (content.error) {
    pricesIntroContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (pricesPageIntroSection) {
    pricesIntroContent = (
      <section className="text-center mt-16">
        <p className="prose mx-auto">{parse(pricesPageIntroSection.content)}</p>
      </section>
    );
  } else {
    pricesIntroContent = <p>Aucune section "prices-intro" trouvée.</p>;
  }

  return (
    <div className="text-center pb-8 bg-gray-50 min-h-screen">
      {pricesIntroContent}
      
      <Line />
      <PricingTable />
      <ContactButton
        btnContent="Demandez un devis gratuit !"
      />
    </div>
  );
}