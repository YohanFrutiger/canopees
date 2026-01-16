// Page "Qui sommes-nous?"

import bobPhoto from "../assets/images/bob.jpg";
import tomPhoto from "../assets/images/tom.jpg"
import ContactButton from "../components/features/ContactButton";
import Line from "../components/layout/Line";

export default function About() {
  return (
    <>
      <>
        <div className=" text-center">

          <p className="mt-16">Depuis 2020, <span className="text-violet font-semibold">Canopées</span> met sa passion et le respect de la nature au service de vos espaces verts. <span className="text-violet font-semibold">Conception, entretien, taille, élagage, abattage</span> : nous intervenons avec la même exigence chez les particuliers, les entreprises et les collectivités dans toute la régio Rhône-Alpes. <span className="text-violet font-semibold">Un jardin bien pensé vous ressemble.</span> C’est notre conviction, et c’est ce que nous réalisons chaque jour sur le terrain.
          </p>

          <Line />

          <h2 >Nos valeurs et nos engagements</h2>

          <p >Nous plaçons <span className="text-violet font-semibold">le respect de l’arbre et de la nature</span> au cœur de chaque intervention : taille raisonnée, zéro produit chimique, recyclage systématique des déchets verts. <span className="text-violet font-semibold">Sécurité absolue</span> grâce à nos cordistes certifiés et à un matériel rigoureusement contrôlé, <span className="text-violet font-semibold">transparence totale</span> avec un interlocuteur unique et des <span className="text-violet font-semibold">devis gratuits sous 48 h</span>, réactivité même en urgence après tempête. <span className="text-violet font-semibold">Particuliers, entreprises ou collectivités</span>, nous travaillons avec la même exigence : faire vivre vos arbres plus longtemps et vos espaces verts plus beaux, tout simplement.
          </p>

          <Line />

          <h2>une équipe de professionnels passionnés à votre écoute</h2>

          <div className="font-light">
            <div className="max-w-5xl mx-auto px-6 gra-900">

              {/* TOM */}
              <div className="flex flex-col items-center md:flex-row">
                <div className="max-w-[200px]">
                  <img
                    src={tomPhoto}
                    alt="Tom – Fondateur de Canopées"
                    className=" rounded-full shadow-2xl object-cover "
                  />
                </div>

                <div>
                  <p className="px-5 text-right">
                    <span className="font-semibold">Tom</span> est un passionné d’arboriculture depuis l’âge de 16 ans. Il commence comme grimpeur-élagueur avant de se former au métier de cordiste en montagne. Diplômé du Certificat de Spécialisation Élagage et titulaire du CQP Cordiste, il crée en 2020 avec une conviction : allier technicité, sécurité et respect de l’arbre.
                    Aujourd’hui, Tom dirige l’équipe sur le terrain et réalise les chantiers
                    les plus techniques.
                  </p>
                </div>
              </div>

              {/* BOB */}
              <div className="flex flex-col items-center md:flex-row mt-8 mb-4">
                <div className="max-w-[200px]">
                  <img
                    src={bobPhoto}
                    alt="Tom – Fondateur de Canopées"
                    className=" rounded-full shadow-2xl object-cover "
                  />
                </div>

                <div className="">
                  <p className="px-5 text-right">
                    <span className="font-semibold">Bob</span> est paysagiste de formation et spécialiste de l’entretien et de la création d’espaces verts depuis plus de 12 ans. Titulaire d’un BTSA Aménagements Paysagers. Il rejoint l’aventure Canopées en 2021. Tonte, taille de haies, création de massifs, arrosage automatique,
                    maçonnerie paysagère : Bob gère tous les chantiers « au sol » avec le même
                    sens du détail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Line />

          <ContactButton
            btnContent="Contactez-nous !"
          />

        </div>
      </>
    </>
  )
}