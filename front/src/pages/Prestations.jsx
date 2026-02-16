// src/components/featuresPrestations.jsx
// catre "Prestation" pour la page Prestations

import { Link } from 'react-router-dom'
import { useContentSections } from '../hooks/useContentSections';
import PrestationCard from "../components/features/PrestationCard";
import { prestations } from "../../src/data/prestations";
import Line from "../components/layout/Line";

export default function Prestations() {
  const content = useContentSections();
  const prestationsPageIntroSection = content.getSectionByKey('prestations-intro');

  // Texte d'introduction de la page "Prestations"
  let PrestationsIntroContent; 
  if (content.loading) {
    // PrestationsIntroContent = <p>Chargement...</p>;
  } else if (content.error) {
    PrestationsIntroContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (prestationsPageIntroSection) {
    PrestationsIntroContent = (
      <section className="text-center mt-16">
        <p className="prose mx-auto" dangerouslySetInnerHTML={{ __html: prestationsPageIntroSection.content }} />
      </section>
    );
  }
    else {
    PrestationsIntroContent = <p>Aucune section "prestations-intro" trouvée.</p>;
  }
  return (
    <>
      {PrestationsIntroContent}  

      <Line />

      <div className="gap-4 flex flex-wrap justify-center py-4">
        {prestations.map((presta) => (
          <PrestationCard
            key={presta.id}
            title={presta.title}
            img={presta.img}
            text={presta.text}
            tag={presta.tag}
            alt={presta.alt}
          />
        ))}
      </div>

      <p className="text-center">Besoin d'un devis ? Une question ?  </p>
      <div className="text-center">
        <Link to="/contact" className="text-centermx-auto text-blue font-semibold hover:text-blue/80 transition transform hover:scale-105">
          Cliquez ici!
        </Link>
      </div>
    </>
  )
}