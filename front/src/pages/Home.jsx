// Page d'accueil du site
import { useContentSections } from '../hooks/useContentSections';
import HeroSlider from "../components/features/HeroSlider";
import Line from "../components/layout/Line";
import TargetCard from "../components/features/TargetCard";
import Carrousel from "../components/features/Carrousel";

export default function Home() {

  const content = useContentSections();

  // Filtre les sections spécifiques (rapide, en mémoire)
  const homePageIntroSection = content.getSectionByKey('home-presentation');
  const targetCardSection = content.getSectionByKey('target-card');

  // Texte d'introduction de la page d'accueil
  let homeIntroContent;
  if (content.loading) {
    // homeIntroContent = <p>Chargement...</p>;
  } else if (content.error) {
    homeIntroContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (homePageIntroSection) {
    homeIntroContent = (
      <section className="text-center mt-[464px]">
        <p className="prose mx-auto" dangerouslySetInnerHTML={{ __html: homePageIntroSection.content }} />
      </section>
    );
  } else {
    homeIntroContent = <p>Aucune section "home-presentation" trouvée.</p>;
  }
  
  // Titre de la section TargetCard (classes préservées, h2 sans class spécifique comme original)
  let targetCardTitle;
  if (content.loading) {
    // homeIntroContent = <p>Chargement...</p>;
  } else if (content.error) {
    targetCardTitle = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (targetCardSection) {
     targetCardTitle = (
      <h2 className="mx-auto">{targetCardSection.title}</h2>
    );
  } else {
    targetCardTitle = <p>Aucune section "target-card" trouvée.</p>;
  }
  return (
    <>
      <HeroSlider />


      {homeIntroContent}


      <Line />

      {targetCardTitle}

      <div className="gap-4 grid grid-cols-1 md:grid-cols-3  mb-12">
        <TargetCard
          icon="🏡"
          title="Particuliers"
          text="Vous avez un jardin, une résidence secondaire, une grande propriété ou une simple haie à tailler ? Nous entretenons et sublimons votre espace de vie comme si c’était le nôtre : avec soin, discrétion et respect de vos arbres."
          bgColor="bg-violet"
        />
        <TargetCard
          icon="🏢"
          title="Entreprise"
          text="Parcs d’activité, bureaux, hôtels, restaurants, zones commerciales… Des espaces verts impeccables valorisent votre image et accueillent vos clients et collaborateurs dans un cadre agréable toute l’année."
          bgColor="bg-blue"
        />
        <TargetCard
          icon="🏛️"
          title="Collectivités"
          text="Mairies, écoles, cimetières, parcs publics, bords de route… Nous répondons aux marchés publics et intervenons avec rigueur, sécurité et traçabilité pour maintenir le patrimoine arboré de votre commune."
          bgColor="bg-pink"
        />
      </div>

      <Line />

      <h2 className="text-center">Un œil sur nos dernières réalisations</h2>

      <Carrousel />
      
    </>
  )
}