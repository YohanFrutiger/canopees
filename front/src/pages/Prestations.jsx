import PrestationCard from "../components/features/PrestationCard";

import { prestations } from "../../src/data/prestations";
import Line from "../components/layout/Line";

// import imgConception from "../assets/images/conception.jpg"
// import imgEntretien from "../assets/images/entretien.jpg"
// import imgTaille from "../assets/images/taille.jpg"
// import imgElagage from "../assets/images/elagage.jpg"
// import imgRecyclage from "../assets/images/recyclage.jpg"

export default function Prestations() {
  return (
    <>
      <p className="text-center mt-8"><span className="text-violet font-semibold">Canopées</span> prend soin de vos jardins et espaces verts toute l’année : de la <span className="text-violet font-semibold">conception complète</span> d’un nouvel extérieur à l’<span className="text-violet font-semibold">entretien régulier</span>, en passant par la <span className="text-violet font-semibold">taille</span>, l’<span className="text-violet font-semibold">élagage</span> et la <span className="text-violet font-semibold">gestion des déchets verts</span>. Notre objectif est simple : vous offrir un jardin beau, sain et agréable à vivre, sans que vous ayez à vous en occuper. Un travail soigné et respectueux de la nature, un devis gratuit et rapide. Votre extérieur mérite le meilleur.
        <span className="text-violet font-semibold"> Découvrez nos prestations dès à présent !</span>
      </p>
      <Line />


      <div className="gap-4 flex flex-wrap justify-center py-4">
        {prestations.map((presta) => (
          <PrestationCard
            key={presta.id}
            title={presta.title}
            img={presta.img}
            text={presta.text}
            tag={presta.tag}
          />
        ))}
      </div>

     
        <p className="text-center">Besoin d'un devis? Une question? <a href="/contact" className="text-blue font-semibold">cliquez ici !</a></p>
      

    </>
  )
}