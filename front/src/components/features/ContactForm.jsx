import { useState } from "react";

const API_URL = "http://127.0.0.1:8000/api/contact_messages";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // supprime erreur quand on tape
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  // 🔎 VALIDATION FRONT
  function validate() {
    const newErrors = {};

    // nom
    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    } else if (formData.nom.length < 2) {
      newErrors.nom = "Minimum 2 caractères";
    } else if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(formData.nom)) {
      newErrors.nom = "Le nom ne doit contenir que des lettres";
    }

    // prenom
    if (!formData.prenom.trim()) {
      newErrors.prenom = "Le prénom est requis";
    } else if (formData.prenom.length < 2) {
      newErrors.prenom = "Minimum 2 caractères";
    } else if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(formData.prenom)) {
      newErrors.prenom = "Le prénom ne doit contenir que des lettres";
    }

    // email
    if (!formData.email.trim()) {
      newErrors.email = "Email requis";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Email invalide";
    }

    // message
    if (!formData.message.trim()) {
      newErrors.message = "Message requis";
    } else if (formData.message.length < 10) {
      newErrors.message = "Minimum 10 caractères";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Maximum 1000 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
          Accept: "application/ld+json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData["hydra:description"] || `Erreur ${res.status}`);
      }

      setStatus("success");
      setFormData({ nom: "", prenom: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <div className="rounded-3xl shadow-2xl p-8 md:w-[600px] mx-auto bg-violet/10 border border-violet/50">
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        <p className="text-left text-sm font-light">*Tous les champs sont requis</p>

        <div className="text-left flex flex-col gap-10">
          
          {/* NOM */}
          <div>
            <label className="block text-lg font-medium pb-2">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-5 py-4 border border-violet/50 rounded-xl"
              placeholder="Dupont"
            />
            {errors.nom && <p className="text-red-500 mt-2">{errors.nom}</p>}
          </div>

          {/* PRENOM */}
          <div>
            <label className="block text-lg font-medium pb-2">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full px-5 py-4 border border-violet/50 rounded-xl"
              placeholder="Jean"
            />
            {errors.prenom && <p className="text-red-500 mt-2">{errors.prenom}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-lg font-medium pb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 border border-violet/50 rounded-xl"
              placeholder="jean.dupont@gmail.com"
            />
            {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-lg font-medium pb-2">Votre message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-5 py-4 border border-violet/50 rounded-xl"
              placeholder="Votre message..."
            />
            {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
          </div>
        </div>

        {/* BOUTON */}
        <div className="text-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="mx-auto w-36 py-3 bg-blue text-white rounded-lg font-semibold"
          >
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>
        </div>

        {status === "error" && (
          <p className="text-red-600 text-center font-medium">{errorMsg}</p>
        )}
      </form>

      {/* SUCCESS POPUP */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl p-10 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Votre message a bien été envoyé !
            </h3>
            <button
              onClick={() => setStatus("idle")}
              className="bg-blue text-white px-6 py-3 rounded-lg"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
