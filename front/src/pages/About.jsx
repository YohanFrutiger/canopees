// Page "Qui sommes-nous?"
import { useState, useEffect } from "react";
import ContactButton from "../components/features/ContactButton";
import Line from "../components/layout/Line";

export default function About() {
  const [apiState, setApiState] = useState({
    loading: true,  // Commence directement en loading
    error: null,    // Stocke l'erreur comme objet ou null
    data: null      // Null au départ
  });

  // Requête API des team members au montage du composant
  useEffect(() => {
    // Fetch unique au montage (dépendance vide [])
    fetch("http://127.0.0.1:8000/api/team_members")
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then(data => setApiState({ loading: false, error: null, data }))
      .catch(error => setApiState({ loading: false, error, data: null }));
  }, []);  // Dépendance vide pour exécution unique

  // Log pour debug (retire en prod)
  useEffect(() => {
    if (apiState.data) {
      console.log(apiState.data);
    }
  }, [apiState.data]);

  let teamMembers_content;
  if (apiState.loading) {
    teamMembers_content = <p>Chargement...</p>;
  } else if (apiState.error) {
    teamMembers_content = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (apiState.data?.member?.length > 0) {  // Vérifie si member existe et non vide
    teamMembers_content = (

      <div className="team-members flex flex-col items-center font-light max-w-5xl mx-auto px-6 ">  {/* Ajoute une classe pour styling responsive */}
        {apiState.data.member.map((item, index) => (
          <section key={index} className="team-member mb-8">  {/* Section pour chaque membre */}
            {/* <h2>{item.firstname} {item.lastname}</h2> */}
            <div className="flex flex-col items-center md:flex-row">  {/* Flex pour alignement horizontal sur desktop */}
              <img
                src={`http://127.0.0.1:8000/uploads/${item.image}`}  // Ajuste le chemin si différent (ex: /media/...)
                alt={`${item.firstname} ${item.lastname}`}
                className="team-photo max-w-[200px] rounded-full shadow-2xl object-cover"  // Classe pour responsive (width:100%, max-width:300px...)
              />
              <p
                className="biography px-5 text-right"
                dangerouslySetInnerHTML={{ __html: item.biography }}  // Rendu HTML
              />
            </div>

          </section>
        ))}
      </div>
    );
  } else {
    teamMembers_content = <p>Aucune donnée reçue de l'API.</p>;
  }
////////////////////////////////////////////////////////////////////////////




  return (
    <div>
      {/* <h1>Qui sommes-nous ?</h1> */}
      {teamMembers_content}
      <Line />  {/* Séparateur si needed */}
      <ContactButton btnContent="Contactez-nous !" />  {/* Bouton contact comme dans spec */}
    </div>
  );
}