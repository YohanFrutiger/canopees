// Page "Qui sommes-nous?"
import { useContentSections } from '../hooks/useContentSections';
import { useTeamMembers } from '../hooks/useTeamMembers';
import ContactButton from "../components/features/ContactButton";
import Line from "../components/layout/Line";
import parse from "html-react-parser";

export default function About() {
  const contentSections = useContentSections();  // Un seul fetch pour toutes sections
  const team = useTeamMembers();

  // Filtre les sections spécifiques (rapide, en mémoire)
  const introSection = contentSections.getSectionByKey('about-us-introducing');
  const ourValuesSection = contentSections.getSectionByKey('about-us-our-values');
  const teamSectionTitle = contentSections.getSectionByKey('team-section-title');

  // Contenu intro (classes préservées)
  let introContent;
  if (contentSections.loading) {
    // introContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    introContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (introSection) {
    introContent = (
      <section className="mt-16">
        <p className="prose mx-auto">{parse(introSection.content)}</p>
      </section>
    );
  } else {
    introContent = <p>Aucune section "about-us-introducing" trouvée.</p>;
  }

  // Contenu values (classes préservées, h2 sans class spécifique comme original)
  let ourValuesContent;
  if (contentSections.loading) {
    // ourValuesContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    ourValuesContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (ourValuesSection) {
    ourValuesContent = (
      <section>
        <h2>{ourValuesSection.title}</h2>
        <p className="prose mx-auto">{parse(ourValuesSection.content)}</p>
      </section>
    );
  } else {
    ourValuesContent = <p>Aucune section "about-us-our-values" trouvée.</p>;
  }

  // Contenu team title (classes préservées, h2 sans class spécifique comme original)
  let teamTitleContent;
  if (contentSections.loading) {
    // teamTitleContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    teamTitleContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (teamSectionTitle) {
    teamTitleContent = (
      <h2 className="mt-16">{teamSectionTitle.title}</h2>
    );
  } else {
    teamTitleContent = <p>Aucune section "team-section-title" trouvée.</p>;
  } 

  // Contenu team (toutes classes préservées exactement)
  let teamSectionContent;
  if (team.loading) {
    // teamContent = <p>Chargement...</p>;
  } else if (team.error) {
    teamSectionContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (team.data?.member?.length > 0) {
    teamSectionContent = (
      <div className="team-members flex flex-col items-center font-light max-w-5xl mx-auto px-6">
        {team.data.member.map((item, index) => (  // Key sur index comme original, mais id recommandé
          <section key={index} className="team-member mt-4">
            <div className="flex flex-col items-center md:flex-row">
              <img
                src={`http://127.0.0.1:8000/uploads/${item.image}`}
                alt={`${item.firstname} ${item.lastname}`}
                className="max-w-[200px] rounded-full shadow-2xl object-cover"
              />
              <p className="biography px-5 text-right">{parse(item.biography)}</p>
            </div>
          </section>
        ))}
      </div>
    );
  } else {
    teamContent = <p>Aucune donnée reçue de l'API.</p>;
  }

  return (
    <div className="text-center">
      {introContent}
      {/* <Line /> */}
      {ourValuesContent}
      {/* <Line /> */}
      {teamTitleContent}
      {teamSectionContent}
      {/* <Line /> */}
      <ContactButton btnContent="Contactez-nous !" />
    </div>
  );
}