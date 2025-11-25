import ContactForm from "../components/features/ContactForm";
import Map from "../assets/images/map.png"

export default function Contact() {
  return (
    <section className="pt-8 bg-gray-50 min-h-screen text-center">


      <div className=" text-gray space-y-4 text-lg font-medium">
        <p><span className=" text-violet text-xl font-semibold">Par téléphone, par mail ou directement en agence</span>, nous sommes à l'écoute de toutes vos envies !</p>
        <p ><span className="text-xs">📞</span> Tél. : 04 72 32 45 67</p>
        <p ><span className="text-xs">📧</span> Email : <a href="mailto:contact@canopees.fr" className="text-blue hover:underline">contact@canopees.fr</a></p>
        <p ><span className="text-xs">📍</span> Adresse : 25 rue Rossignol 07320 Saint-Agrève </p>
        <div className="mx-auto md:w-[500px] p-4 border border-gray rounded-xl">

          <img src={Map} alt="" />
        </div>


        
      </div>


      <div className="max-w-4xl mx-auto px-6 text-center mt-8">

        <p className="text-xl text-gray-700 max-w-2xl mx-auto pb-8">
          Besoin d’un devis ? Une question ?<br />
          Remplissez le formulaire, nous vous répondons sous 48h.
        </p>

        <ContactForm />


      </div>
    </section>
  );
}