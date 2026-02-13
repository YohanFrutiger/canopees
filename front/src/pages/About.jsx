// Page "Qui sommes-nous?"
import { useState, useEffect } from "react";
import ContactButton from "../components/features/ContactButton";
import Line from "../components/layout/Line";

export default function About() {

  const [introContentState, setIntroContentState] = useState({
    loading: true,
    error: null,
    data: null
  });
    const [ourValuesContentState, setOurValuesContentState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [teamState, setTeamState] = useState({
    loading: true,
    error: null,
    data: null
  });



  // Fetch IntroContent Sections
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/content_sections")
      .then(res => {
        if (!res.ok) throw new Error("Erreur lors du chargement du contenu");
        return res.json();
      })
      .then(data => setIntroContentState({ loading: false, error: null, data }))
      .catch(err => setIntroContentState({ loading: false, error: err, data: null }));
  }, []);

  // ==================== Extraction de la section "about-us-introducing" ====================
  // const IntroducingAboutSection = contentState.data?.member?.find(
  //   item => item.section_key === "about-us-introducing"
  // );
  let IntroducingAboutSection_content
  if (introContentState.loading) {
    IntroducingAboutSection_content = <p>Chargement...</p>;
  } else if (introContentState.error) {
    IntroducingAboutSection_content = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (introContentState.data?.member?.length > 0) {
    const IntroducingAboutSection = introContentState.data?.member?.find(
      item => item.section_key === "about-us-introducing"
    );
    IntroducingAboutSection_content = (
    <section className="mt-16">
          {/* <h2 className="text-3xl font-bold mb-6">{IntroducingAboutSection.title}</h2> */}
          <p 
            className="prose mx-auto"
            dangerouslySetInnerHTML={{ __html: IntroducingAboutSection.content }}
          />
        </section>
        );
  } else {
    IntroducingAboutSection_content = <p>Aucune donnée reçue de l'API.</p>;
  }

    // Fetch Our Values Content Sections
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/content_sections")
      .then(res => {
        if (!res.ok) throw new Error("Erreur lors du chargement du contenu");
        return res.json();
      })
      .then(data => setOurValuesContentState({ loading: false, error: null, data }))
      .catch(err => setOurValuesContentState({ loading: false, error: err, data: null }));
  }, []);

  // ==================== Extraction de la section "about-us-our-values" ====================
  // const OurValuesAboutSection = ourValuesContentState.data?.member?.find(
  //   item => item.section_key === "about-us-our-values"
  // );
  let OurValuesAboutSection_content
  if (ourValuesContentState.loading) {
    OurValuesAboutSection_content = <p>Chargement...</p>;
  } else if (ourValuesContentState.error) {
    OurValuesAboutSection_content = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (ourValuesContentState.data?.member?.length > 0) {
    const OurValuesAboutSection = ourValuesContentState.data?.member?.find(
      item => item.section_key === "about-us-our-values"
    );
    OurValuesAboutSection_content = (
    <section>
          <h2>{OurValuesAboutSection.title}</h2>
          <p 
            className="prose mx-auto"
            dangerouslySetInnerHTML={{ __html: OurValuesAboutSection.content }}
          />
        </section>
        );
  } else {
    OurValuesAboutSection_content = <p>Aucune donnée reçue de l'API.</p>;
  }

  // Fetch Team Members
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/team_members")
      .then(res => {
        if (!res.ok) throw new Error("Erreur lors du chargement des membres");
        return res.json();
      })
      .then(data => setTeamState({ loading: false, error: null, data }))
      .catch(err => setTeamState({ loading: false, error: err, data: null }));
  }, []);

  // Log pour debug (retire en prod)
  useEffect(() => {
    if (teamState.data) {
      console.log(teamState.data);
    }
  }, [teamState.data]);

  // Content de l'équipe (membres) avec gestion des états (loading, error, data)
  let teamMembers_content;
  if (teamState.loading) {
    teamMembers_content = <p>Chargement...</p>;
  } else if (teamState.error) {
    teamMembers_content = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (teamState.data?.member?.length > 0) {  // Vérifie si member existe et non vide
    teamMembers_content = (

      <div className="team-members flex flex-col items-center font-light max-w-5xl mx-auto px-6 ">  {/* Ajoute une classe pour styling responsive */}
        {teamState.data.member.map((item, index) => (
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





  return (
    <div className="text-center">
      {/* <h1>Qui sommes-nous ?</h1> */}
      {IntroducingAboutSection_content}
      <Line />
      {OurValuesAboutSection_content}
      <Line />
      <h2>Une équipe de professionnels passionnés à votre écoute</h2>
      {teamMembers_content}
      <Line />  {/* Séparateur si needed */}
      <ContactButton btnContent="Contactez-nous !" />  {/* Bouton contact comme dans spec */}
    </div>
  );
}