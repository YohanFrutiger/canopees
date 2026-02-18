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

        <div className='mt-8'>
          {contactIntroContent}
        </div>

        <div className='mt-8'>
        {contactInfoContent}
        </div>

       

        <div className="mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5641.522447333289!2d4.393774974763695!3d45.00947056366621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f58241422cd037%3A0x9afaf11bcf9d9067!2sSaint-Agr%C3%A8ve!5e0!3m2!1sfr!2sfr!4v1771412853703!5m2!1sfr!2sfr"
            width="550"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mx-auto rounded-lg mt-8 border-2 border-gray-200 shadow-2xl"
            >
            
          </iframe>
        </div>

        {/* <div className="mx-auto md:w-[500px] p-4 shadow-2xl mt-4 mb-12 border border-gray-500 rounded-xl">
          <img src={Map} alt="" />
        </div> */}
      </div>

      {/* <Line /> */}


      {/* <p className="text-center mb-4">
        <strong>
          Besoin d’un devis ? Une question ?<br />
          Remplissez le formulaire, nous vous répondons sous 48h.
        </strong>
      </p> */}

      <div className="max-w-4xl mx-auto mt-8">
        <ContactForm />
      </div>
    </>
  );
}