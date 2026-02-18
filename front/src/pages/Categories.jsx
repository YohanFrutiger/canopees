// src/components/featuresPrestations.jsx
// Carte "Prestation" pour la page Prestations

import { Link } from 'react-router-dom';
import { useContentSections } from '../hooks/useContentSections';
import { useCategories } from '../hooks/useCategories'; 
import PrestationCard from "../components/features/PrestationCard";
import Line from "../components/layout/Line";
import parse from "html-react-parser";

export default function Categories() {
  const content = useContentSections();
  const categories = useCategories();
  const categoriesPageIntroSection = content.getSectionByKey('prestations-intro');

  // Texte d'introduction de la page "Prestations"
  let PrestationsIntroContent; 
  if (content.loading) {
    PrestationsIntroContent = <p>Chargement...</p>;  // Décommenté pour cohérence UX
  } else if (content.error) {
    PrestationsIntroContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (categoriesPageIntroSection) {
    PrestationsIntroContent = (
      <section className="text-center mt-16">
        <p className="prose mx-auto">{parse(categoriesPageIntroSection.content)}</p>
      </section>
    );
  } else {
    PrestationsIntroContent = <p>Aucune section "prestations-intro" trouvée.</p>;
  }

  // Contenu des prestations (gestion loading/error pour éviter crash)
  let PrestationsContent;
  if (categories.loading) {
    PrestationsContent = <p className="text-center">Chargement des catégories...</p>;
  } else if (categories.error) {
    PrestationsContent = <p className="text-center text-red-500">Erreur : Une erreur est survenue lors de la récupération des catégories.</p>;
  } else if (categories.data?.member?.length > 0) {
    PrestationsContent = (
      <div className="gap-4 flex flex-wrap justify-center py-4">
        {categories.data.member.map((cat, index) => (           
            <PrestationCard
              key={cat.id}
              cat={cat}
              // catTitle={cat.title}
              // img={`http://127.0.0.1:8000/uploads/${cat.image}`}  // Ajoute base URL pour images (ajuste si VichUploader)
              // text={cat.description}  // Assume champs de ton Entity\Category ; ajuste si différent (ex: info au lieu de description)
              // tag={cat.tag}
              // alt={cat.title}  // Utilise title comme alt par défaut si pas de champ alt
            />
         
        ))}
      </div>
    );
  } else {
    PrestationsContent = <p className="text-center">Aucune prestation disponible.</p>;
  }

  return (
    <>
      {PrestationsIntroContent}  
      {/* <Line /> */}
      <div className="mt-4">
        {PrestationsContent}
        </div>  {/* Affichage conditionnel des cards */}
      <p className="text-center">Besoin d'un devis ? Une question ?</p>
      <div className="text-center">
        <Link to="/contact" className="text-center mx-auto text-blue font-semibold hover:text-blue/80 transition transform hover:scale-120">
          Cliquez ici !
        </Link>
      </div>
    </>
  );
}