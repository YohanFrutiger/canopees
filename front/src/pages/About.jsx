// Page "Qui sommes-nous?"
import { useContentSections } from '../hooks/useContentSections';
import { useTeamMembers } from '../hooks/useTeamMembers';
import ContactButton from "../components/features/ContactButton";
import Line from "../components/layout/Line";

export default function About() {
  const content = useContentSections();  // Un seul fetch pour toutes sections
  const team = useTeamMembers();

  // Filtre les sections spécifiques (rapide, en mémoire)
  const introSection = content.getSectionByKey('about-us-introducing');
  const valuesSection = content.getSectionByKey('about-us-our-values');

  // Contenu intro (classes préservées)
  let introContent;
  if (content.loading) {
    // introContent = <p>Chargement...</p>;
  } else if (content.error) {
    introContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (introSection) {
    introContent = (
      <section className="mt-16">
        <p className="prose mx-auto" dangerouslySetInnerHTML={{ __html: introSection.content }} />
      </section>
    );
  } else {
    introContent = <p>Aucune section "about-us-introducing" trouvée.</p>;
  }

  // Contenu values (classes préservées, h2 sans class spécifique comme original)
  let valuesContent;
  if (content.loading) {
    // valuesContent = <p>Chargement...</p>;
  } else if (content.error) {
    valuesContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (valuesSection) {
    valuesContent = (
      <section>
        <h2>{valuesSection.title}</h2>
        <p className="prose mx-auto" dangerouslySetInnerHTML={{ __html: valuesSection.content }} />
      </section>
    );
  } else {
    valuesContent = <p>Aucune section "about-us-our-values" trouvée.</p>;
  }

  // Contenu team (toutes classes préservées exactement)
  let teamContent;
  if (team.loading) {
    // teamContent = <p>Chargement...</p>;
  } else if (team.error) {
    teamContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (team.data?.member?.length > 0) {
    teamContent = (
      <div className="team-members flex flex-col items-center font-light max-w-5xl mx-auto px-6">
        {team.data.member.map((item, index) => (  // Key sur index comme original, mais id recommandé
          <section key={index} className="team-member mt-4">
            <div className="flex flex-col items-center md:flex-row">
              <img
                src={`http://127.0.0.1:8000/uploads/${item.image}`}
                alt={`${item.firstname} ${item.lastname}`}
                className="team-photo max-w-[200px] rounded-full shadow-2xl object-cover"
              />
              <p className="biography px-5 text-right" dangerouslySetInnerHTML={{ __html: item.biography }} />
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
      <Line />
      {valuesContent}
      <Line />
      <h2>Une équipe de professionnels passionnés à votre écoute</h2>
      {teamContent}
      <Line />
      <ContactButton btnContent="Contactez-nous !" />
    </div>
  );
}