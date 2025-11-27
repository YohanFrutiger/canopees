import { Link } from 'react-router-dom'
import PrestationCard from "../components/features/PrestationCard";
import { prestations } from "../../src/data/prestations";
import Line from "../components/layout/Line";

export default function Prestations() {
  return (
    <>
      <p className="text-center mt-16"><span className="text-violet font-semibold">Canopées</span> prend soin de vos jardins et espaces verts toute l’année : de la <span className="text-violet font-semibold">conception complète</span> d’un nouvel extérieur à l’<span className="text-violet font-semibold">entretien régulier</span>, en passant par la <span className="text-violet font-semibold">taille</span>, l’<span className="text-violet font-semibold">élagage</span> et la <span className="text-violet font-semibold">gestion des déchets verts</span>. Notre objectif est simple : vous offrir un jardin beau, sain et agréable à vivre, sans que vous ayez à vous en occuper. Un travail soigné et respectueux de la nature, un devis gratuit et rapide. Votre extérieur mérite le meilleur.
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
            alt={presta.alt}
          />
        ))}
      </div>

      <p className="text-center">Besoin d'un devis ? Une question ?  </p>
      <div className="text-center">
        <Link to="/contact" className="text-centermx-auto text-blue font-semibold hover:text-blue/80 transition transform hover:scale-105">
          Cliquez ici!
        </Link>
      </div>
    </>
  )
}