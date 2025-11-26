import ContactForm from "../components/features/ContactForm";
import Map from "../assets/images/map.png"
import Line from "../components/layout/Line";

export default function Contact() {
  return (
    <>


      <div className="mt-8 text-center ">
        <p><strong>Par téléphone, par mail ou directement en agence, nous sommes à l'écoute de toutes vos envies !</strong></p>
        <Line />
        <p ><span className="text-xs">📞</span> Tél. : 04 72 32 45 67</p>
        <p ><span className="text-xs">📧</span> Email : <a href="mailto:contact@canopees.fr" className="text-blue hover:underline">contact@canopees.fr</a></p>
        <p ><span className="text-xs">📍</span> Adresse : 25 rue Rossignol 07320 Saint-Agrève </p>

        <Line />


        <p className="mb-4"><strong>Où nous trouver ?</strong></p>

        <div className="mx-auto md:w-[500px] p-4 shadow-2xl mb-12 border border-gray-500 rounded-xl">
          <img src={Map} alt="" />
        </div>
      </div>

      <Line />

     
        <p className="text-center mb-4">
          <strong>
            Besoin d’un devis ? Une question ?<br />
            Remplissez le formulaire, nous vous répondons sous 48h.
          </strong>
        </p>
      

      <div className="max-w-4xl mx-auto ">



        <ContactForm />


      </div>
    </>
  );
}