import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("success");
    setFormData({ nom: "", prenom: "", email: "", message: "" });
  };



  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:w-[600px] mx-auto bg-violet/10">
      <form onSubmit={handleSubmit} className="space-y-8">

        <p className=" text-left text-sm text-gray italic">
          *Tous les champs sont requis
        </p>
        <div className="text-left flex flex-col gap-10 ">

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border border-violet/50 rounded-xl focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet/20 transition"
              placeholder="Dupont"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-violet-700 pb-2">
              Prénom
            </label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border border-violet/50 rounded-xl focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet/20 transition"
              placeholder="Jean"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-violet-700 pb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border border-violet/50 rounded-xl focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet/20 transition"
              placeholder="jean.dupont@gmail.com"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
              Votre message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-violet focus:ring-4 focus:ring-violet/20 transition "
              placeholder="Bonjour, je souhaiterais un devis pour..."
            />
          </div>


        </div>

        {/* Message de succès */}
        {/* {status === "success" && (
          <div className="bg-green/10 border border-green text-green px-6 py-4 rounded-xl text-center font-semibold">
            Merci ! Votre message a bien été envoyé. Nous vous répondons sous 24h
          </div>

        )} */}

        {/* {status === "success" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray/40 mx-auto">
            <div className="rounded-lg text-lg shadow-xl bg-white p-4 border-green border-4">
              
              Votre message a bien été envoyé ! Nous vous répondrons sous 48h.
              <br />
              <button onClick={() => setStatus("")} className="text-lg underline font-semibold">
                Fermer 
              </button>
            </div>
          </div>

        )} */}

        {status === "success" && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setStatus("")} // ferme en cliquant dehors
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-10 w-full md:max-w-md text-center border-4 border-violet animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} // empêche la fermeture si on clique dedans
            >

              <h3 className="text-xl font-rosario font-bold mb-4">
                Votre message a bien été envoyé !
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Nous vous répondons sous 48h.
              </p>
              <button
                onClick={() => setStatus("")}
                className="bg-blue hover:bg-blue/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Fermer
              </button>
            </div>
          </div>
        )}



        <div className="text-center">
          <button
            type="submit"
            className=" mx-auto w-36 text-center py-3 bg-blue hover:bg-blue/80 text-white rounded-lg font-semibold "
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}