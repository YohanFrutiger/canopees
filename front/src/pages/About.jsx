// Page "Qui sommes-nous?"
import { useContentSections } from '../hooks/useContentSections';
import { useTeamMembers } from '../hooks/useTeamMembers';
import ContactButton from "../components/features/ContactButton";
import Line from "../components/layout/Line";
import parse from "html-react-parser";

export default function About() {
  const contentSections = useContentSections();
  const teamMembers = useTeamMembers();
  const UPLOADS_URL = import.meta.env.VITE_UPLOADS_URL || ''; // ← fallback vide
  
  // Filtre les sections spécifiques (rapide, en mémoire)
  const introSection = contentSections.getSectionByKey('about-us-introducing');
  const ourValuesSection = contentSections.getSectionByKey('about-us-our-values');
  const teamSectionTitle = contentSections.getSectionByKey('team-section-title');

  //Section "Valeurs et engagements"
  // Gestion loading/error
  let ourValuesContent;
  if (contentSections.loading) {
    // ourValuesContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    ourValuesContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (ourValuesSection) {
    ourValuesContent = (
      <section>
        <h3>{ourValuesSection.title}</h3>
        <p className="prose mx-auto">{parse(ourValuesSection.content)}</p>
      </section>
    );
  } else {
    ourValuesContent = <p>Aucune section "about-us-our-values" trouvée.</p>;
  }

  // Titre avant afichage des membres de l'équipe
  // Gestion loading/error)
  let teamTitleContent;
  if (contentSections.loading) {
    // teamTitleContent = <p>Chargement...</p>;
  } else if (contentSections.error) {
    teamTitleContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (teamSectionTitle) {
    teamTitleContent = (
      <h3 className="">{teamSectionTitle.title}</h3>
    );
  } else {
    teamTitleContent = <p>Aucune section "team-section-title" trouvée.</p>;
  }

  // Affichage des membres de l'équipe et de leur biographie
  let teamSectionContent;
  if (teamMembers.loading) {
    // teamContent = <p>Chargement...</p>;
  } else if (teamMembers.error) {
    teamSectionContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (teamMembers.data?.member?.length > 0) {
    teamSectionContent = (
      <div className="team-members flex flex-col items-center font-light mx-auto">
        {teamMembers.data.member.map((member, index) => (
          <section key={index} className="team-member mt-4">
            <div className="flex flex-col items-center md:flex-row">
              <img
                src={`${UPLOADS_URL}/${member.image}`}
                alt={`${member.firstname} ${member.lastname}`}
                className="max-w-[170px] rounded-full shadow-2xl object-cover"
              />
              <p className="biography px-5 text-right">{parse(member.biography)}</p>
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
      {/* {introContent} */}
      {/* <Line /> */}
      <div className='mt-16'>
        {ourValuesContent}
      </div>
      {/* <Line /> */}
      {teamTitleContent}
      {teamSectionContent}
      {/* <Line /> */}
      <ContactButton btnContent="Contactez-nous !" />
    </div>
  );
}