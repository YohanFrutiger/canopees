// Page "Contact&Devis"

import { useContentSections } from '../hooks/useContentSections';
import ContactForm from "../components/features/ContactForm";
import Map from "../assets/images/map.png"
import Line from "../components/layout/Line";

export default function Contact() {

  const content = useContentSections();
  const contactPageIntroSection = content.getSectionByKey('contact-intro'); 
  const contactPageInfoSection = content.getSectionByKey('contact-info');

  // Texte d'introduction de la page "Contact&Devis"
  let contactIntroContent;
  if (content.loading) {
    // contactIntroContent = <p>Chargement...</p>;
  } else if (content.error) {
    contactIntroContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (contactPageIntroSection) {
    contactIntroContent = (
      <section className="text-center mt-16">
        <p className="prose mx-auto" dangerouslySetInnerHTML={{ __html: contactPageIntroSection.content }} />
      </section>
    );
  } else {
    contactIntroContent = <p>Aucune section "contact-intro" trouvée.</p>;
  }

  // Coordonnées pour la page Contact&Devis
  let contactInfoContent;
  if (content.loading) {
    // contactInfoContent = <p>Chargement...</p>;
  } else if (content.error) {
    contactInfoContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
  } else if (contactPageInfoSection) {
    contactInfoContent = (
      <section className="text-center">
        <p className="prose mx-auto" dangerouslySetInnerHTML={{ __html: contactPageInfoSection.content }} />
      </section>
    );
  } else {
    contactInfoContent = <p>Aucune section "contact-info" trouvée.</p>;
  }



  return (
    <>
      
      <div className="text-center">

        {contactIntroContent}        
        <Line />
        {contactInfoContent}
        {/* <Line />

        <p className="mb-4"><strong>Où nous trouver ?</strong></p> */}

        <div className="mx-auto md:w-[500px] p-4 shadow-2xl mt-4 mb-12 border border-gray-500 rounded-xl">
          <img src={Map} alt="" />
        </div>
      </div>

      <Line />


      {/* <p className="text-center mb-4">
        <strong>
          Besoin d’un devis ? Une question ?<br />
          Remplissez le formulaire, nous vous répondons sous 48h.
        </strong>
      </p> */}

      <div className="max-w-4xl mx-auto ">
        <ContactForm />
      </div>
    </>
  );
}