import PrestationCard from "../components/features/PrestationCard";
import ContactButton from "../components/features/ContactButton";
import imgConception from "../assets/images/conception.jpg"
import imgEntretien from "../assets/images/entretien.jpg"
import imgTaille from "../assets/images/taille.jpg"
import imgElagage from "../assets/images/elagage.jpg"
import imgRecyclage from "../assets/images/recyclage.jpg"

export default function Prestations() {
  return (
    <>

      <div className="text-center text-lg">
        <p className="text-gray pt-8 pb-8 text-lg font-semibold"><span className="text-violet">Canopées</span> prend soin de vos jardins et espaces verts toute l’année : de la <span className="text-violet">conception complète</span> d’un nouvel extérieur à l’<span className="text-violet">entretien régulier</span>, en passant par la <span className="text-violet">taille</span>, l’<span className="text-violet">élagage</span> et la <span className="text-violet">gestion des déchets verts</span>. Notre objectif est simple : vous offrir un jardin beau, sain et agréable à vivre, sans que vous ayez à vous en occuper. Un travail soigné et respectueux de la nature, un devis gratuit et rapide. Votre extérieur mérite le meilleur.
          <span className="text-violet"> Découvrez nos prestations dès à présent !</span>
        </p>

        <hr className="border-t border-gray/50 w-14 mx-auto " />
      </div>

      <div className="gap-4 flex flex-wrap justify-center py-8">
        <PrestationCard
          title="Conception & réalisation"
          img={imgConception}
          text="De l’idée au premier arbre planté : étude, plan 3D, choix des végétaux, maçonnerie paysagère, arrosage automatique… Nous concevons et réalisons le jardin ou l’espace professionnel qui vous ressemble, durable, esthétique et parfaitement adapté à votre terrain et à vos envies."
        />

        <PrestationCard
          title="Entretien des espaces verts"
          img={imgEntretien}
          text="Tonte, désherbage manuel, taille légère, nettoyage saisonnier : nous assurons l’entretien régulier de vos jardins, parcs d’entreprise ou espaces publics. Contrats annuels ou interventions ponctuelles, vous gardez un extérieur impeccable toute l’année, sans y penser."
        />




        <PrestationCard
          title="Taille"
          img={imgTaille}
          text="Haies, arbustes, topiaires et arbres fruitiers : nous pratiquons une taille raisonnée qui respecte le cycle naturel de chaque plante. Résultat : forme parfaite, floraison généreuse et santé renforcée, année après année, pour un jardin toujours élégant."

        />
        <PrestationCard
          title="Élagage & abatage"
          img={imgElagage}
          text="Taille douce, réduction de couronne, éclaircie ou abattage complexe par démontage avec rétention : nos cordistes certifiés interviennent en hauteur et en toute sécurité, même près des habitations ou en zone sensible. Votre arbre reste beau, votre propriété protégée."

        />
        <PrestationCard
          title="Valorisation des déchets verts"
          img={imgRecyclage}
          text="Aucun déchet laissé chez vous. Branchages broyés sur place pour paillage naturel, transformés en plaquettes bois-énergie ou compostés : 100 % des rémanents sont recyclés ou réutilisés localement. Zéro mise en décharge, un geste concret pour l’environnement à chaque chantier."

        />
      </div>

     <div className="text-center text-lg">
       <p>Besoin d'un devis? Une question? <a href="/contact" className="text-blue font-semibold">cliquez ici !</a></p>
     </div>



    </>
  )
}