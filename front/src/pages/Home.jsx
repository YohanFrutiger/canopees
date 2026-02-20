//src/pages.home.jsx
// Page d'accueil du site
import { useContentSections } from '../hooks/useContentSections';
import HeroSlider from "../components/features/HeroSlider";
import Line from "../components/layout/Line";
import TargetAudienceCard from "../components/features/TargetAudienceCard";
import Carrousel from "../components/features/Carrousel";
import parse from "html-react-parser";

export default function Home() {

  const contentSections = useContentSections();

  // Filtre les sections spécifiques (rapide, en mémoire)
  const homeIntroSection = contentSections.getSectionByKey('home-presentation');
  const targetCardSection = contentSections.getSectionByKey('target-card');
  const carrouselSection = contentSections.getSectionByKey('carrousel');
  const targetAudienceCard_individual = contentSections.getSectionByKey('target-individual');
  const targetAudienceCard_society = contentSections.getSectionByKey('target-society');
  const targetAudienceCard_community = contentSections.getSectionByKey('target-community');

  // Texte d'introduction de la page d'accueil
  let homeIntroContent;
  if (contentSections.loading) {
    // homeIntroContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    homeIntroContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (homeIntroSection) {
    homeIntroContent = (
      <section className="text-center mt-[464px]">
        <p className="prose mx-auto">{parse(homeIntroSection.content)}</p>
      </section>
    );
  } else {
    homeIntroContent = <p>Aucune section "home-presentation" trouvée.</p>;
  }

  // Titre de la section Publi cible
  let targetCardSectionTitle;
  if (contentSections.loading) {
    // homeIntroContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    targetCardSectionTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (targetCardSection) {
    targetCardSectionTitle = (
      <h2 className="mx-auto">{parse(targetCardSection.title)}</h2>
    );
  } else {
    targetCardSectionTitle = <p>Aucune section "target-card" trouvée.</p>;
  }

  // Titre précédant le carrousel
  let carrouselTitle;
  if (contentSections.loading) {
    // homeIntroContent = <p>Chargement...</p>;   
  } else if (contentSections.error) {
    carrouselTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (carrouselSection) {
    carrouselTitle = (
      <h2 className="text-center mt-16">{parse(carrouselSection.title)}</h2>
    );
  } else {
    carrouselTitle = <p>Aucune section "carrousel" trouvée.</p>;
  }

  // Contenu des cartes pour les publics cibles
  // Particuliers
  let targetAudienceCard_individualContent;
  let targetAudienceCard_individualTitle;
  if (contentSections.loading) {
    // targetAudienceCard_individualContent = <p>Chargement...</p>;
    // targetAudienceCard_individualTitle = <p>Chargement...</p>;
  } else if (contentSections.error) {
    targetAudienceCard_individualContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
    targetAudienceCard_individualTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (targetAudienceCard_individual) {
    targetAudienceCard_individualContent = (
      <p>{parse(targetAudienceCard_individual.content)}</p>
    );
    targetAudienceCard_individualTitle = (
      <h3>{parse(targetAudienceCard_individual.title)}</h3>
    );
  } else {
    targetAudienceCard_individualContent = <p>Aucune section "home-presentation" trouvée.</p>;
  }

  // Entreprises
  let targetAudienceCard_societyContent;
  let targetAudienceCard_societyTitle;
  if (contentSections.loading) {
    // targetAudienceCard_societyContent = <p>Chargement...</p>;
    // targetAudienceCard_societyTitle = <p>Chargement...</p>;
  } else if (contentSections.error) {
    targetAudienceCard_societyContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
    targetAudienceCard_societyTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (targetAudienceCard_society) {
    targetAudienceCard_societyContent = (
      <p>{parse(targetAudienceCard_society.content)}</p>
    );
    targetAudienceCard_societyTitle = (
      <h3>{parse(targetAudienceCard_society.title)}</h3>
    );
  } else {
    targetAudienceCard_societyContent = <p>Aucune section "home-presentation" trouvée.</p>;
  }

  // Collectivités
  let targetAudienceCard_communityContent;
  let targetAudienceCard_communityTitle;
  if (contentSections.loading) {
    // targetAudienceCard_communityContent = <p>Chargement...</p>;
    // targetAudienceCard_communityTitle = <p>Chargement...</p>;
  } else if (contentSections.error) {
    targetAudienceCard_communityContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
    targetAudienceCard_communityTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (targetAudienceCard_community) {
    targetAudienceCard_communityContent = (
      <p>{parse(targetAudienceCard_community.content)}</p>
    );
    targetAudienceCard_communityTitle = (
      <h3>{parse(targetAudienceCard_community.title)}</h3>
    );
  } else {
    targetAudienceCard_communityContent = <p>Aucune section "home-presentation" trouvée.</p>;
  }


  return (
    <>
      <HeroSlider />

      {homeIntroContent}

      {targetCardSectionTitle}

      <div className="gap-4 grid grid-cols-1 md:grid-cols-3  mb-12">
        <TargetAudienceCard
          icon="🏡"
          title={targetAudienceCard_individualTitle}
          text={targetAudienceCard_individualContent}
        />
        <TargetAudienceCard
          icon="🏢"
          title={targetAudienceCard_societyTitle}
          text={targetAudienceCard_societyContent}
        />
        <TargetAudienceCard
          icon="🏛️"
          title={targetAudienceCard_communityTitle}
          text={targetAudienceCard_communityContent}
        />
      </div>

      {carrouselTitle}
      <Carrousel />

    </>
  )
}