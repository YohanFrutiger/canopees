import bobPhoto from "../assets/images/bob.jpg";
import tomPhoto from "../assets/images/tom.jpg"
import ContactButton from "../components/features/ContactButton";

export default function About() {
  return (
    <>
      <>
        <div className="text-center text-gray">

          <p className="pt-8 pb-8 text-lg font-semibold">Depuis 2020, Canopées met sa passion et le respect de la nature au service de vos espaces verts. Conception, entretien, taille, élagage, abattage : nous intervenons avec la même exigence chez les particuliers, les entreprises et les collectivités dans toute la régio Rhône-Alpes. Un jardin bien pensé vous ressemble.
        C’est notre conviction, et c’est ce que nous réalisons chaque jour sur le terrain.
          </p>

          <hr className="border-t border-gray/50 w-14 mx-auto " />

          <h1 className="text-black uppercase font-semibold text-center text-xl tracking-wide pt-8 pb-2">Nos valeurs et nos engagements</h1>


          <p className=" pb-8 text-lg ">Nous plaçons <span className="text-violet font-semibold">le respect de l’arbre et de la nature</span> au cœur de chaque intervention : taille raisonnée, zéro produit chimique, recyclage systématique des déchets verts. <span className="text-violet font-semibold">Sécurité absolue</span> grâce à nos cordistes certifiés et à un matériel rigoureusement contrôlé, <span className="text-violet font-semibold">transparence totale</span> avec un interlocuteur unique et des <span className="text-violet font-semibold">devis gratuits sous 48 h</span>, réactivité même en urgence après tempête. <span className="text-violet font-semibold">Particuliers, entreprises ou collectivités</span>, nous travaillons avec la même exigence : faire vivre vos arbres plus longtemps et vos espaces verts plus beaux, tout simplement.
          </p>
          <hr className="border-t border-gray/50 w-14 mx-auto " />

          <h1 className="text-black uppercase font-semibold text-center text-xl tracking-wide pb-4 pt-8">une équipe de professionnels passionnés à votre écoute</h1>

          <div className=" bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 text-lg italic">

              {/* TOM */}
              <div className="flex flex-col items-center md:flex-row">
                <div className="max-w-[200px]">
                  <img
                    src={tomPhoto}
                    alt="Tom – Fondateur de Canopées"
                    className=" rounded-full shadow-2xl object-cover "
                  />
                </div>

                <div className="">
                  <p className="px-5 py-4">
                    <strong>Tom</strong> est un passionné d’arboriculture depuis l’âge de 16 ans. Il commence comme grimpeur-élagueur avant de se former au métier de cordiste en montagne. Diplômé du Certificat de Spécialisation Élagage et titulaire du CQP Cordiste, il crée en 2020 avec une conviction : allier technicité, sécurité et respect de l’arbre.
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
                  <p className="px-5 pt-4 ">
                    <strong>Bob</strong> est paysagiste de formation et spécialiste de l’entretien et de la création d’espaces verts depuis plus de 12 ans. Titulaire d’un BTSA Aménagements Paysagers. Il rejoint l’aventure Canopées en 2021. Tonte, taille de haies, création de massifs, arrosage automatique,
                    maçonnerie paysagère : Bob gère tous les chantiers « au sol » avec le même
                    sens du détail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray/50 w-14 mx-auto mt-8 " />

          <ContactButton
            btnContent="Contactez-nous !"
          />


        </div>

      </>

    </>
  )
}