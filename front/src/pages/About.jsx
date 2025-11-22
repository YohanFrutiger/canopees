import bobPhoto from "../assets/images/bob.jpg";
import tomPhoto from "../assets/images/tom.jpg"

export default function About() {
  return (
    <>
      <>
        <div className="container text-center mx-auto">

          <p className="py-8 text-lg text-gray-800 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, reprehenderit dolores eveniet consequatur recusandae totam quasi minima velit quas similique sapiente illo autem sit impedit dolor voluptate tenetur expedita omnis? Quibusdam adipisci laudantium blanditiis sequi libero alias cupiditate, perspiciatis ipsa ullam rerum quaerat asperiores dicta.
          </p>

          <h1 className="uppercase font-semibold text-center text-xl text-black tracking-wide pb-2">Nos valeurs et nos engagements</h1>

          <p className=" pb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, reprehenderit dolores eveniet consequatur recusandae totam quasi minima velit quas similique sapiente illo autem sit impedit dolor voluptate tenetur expedita omnis? Quibusdam adipisci laudantium blanditiis sequi libero alias cupiditate, perspiciatis ipsa ullam rerum quaerat asperiores dicta.
          </p>

          <h1 className="uppercase font-semibold text-center text-xl text-black tracking-wide pb-4">une équipe de passionnées à votre écoute</h1>

          <div className=" bg-gray-50 ">
            <div className="max-w-5xl mx-auto px-6">

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
                    <strong>Tom</strong>, passionné d’arboriculture depuis l’âge de 16 ans,  a commencé
                    comme grimpeur-élagueur avant de se former au métier de cordiste en montagne.


                    Diplômé du Certificat de Spécialisation Élagage et titulaire du CQP Cordiste, il crée en 2020 <strong>Canopées</strong> avec une conviction :
                    allier technicité, sécurité et respect de l’arbre.


                    Aujourd’hui, Tom dirige l’équipe sur le terrain et réalise les chantiers
                    les plus techniques.
                  </p>

                </div>
              </div>

              {/* BOB */}
              <div className="flex flex-col items-center md:flex-row mt-8 mb-8">
                <div className="max-w-[200px]">
                  <img
                    src={bobPhoto}
                    alt="Tom – Fondateur de Canopées"
                    className=" rounded-full shadow-2xl object-cover "
                  />
                </div>

                <div className="">
                  <p className="px-5 py-4 ">
                    <strong>Bob</strong> est paysagiste de formation et spécialiste de l’entretien
                    et de la création d’espaces verts depuis plus de 12 ans. Titulaire d’un BTSA Aménagements Paysagers, il a rejoint l’aventure Canopées en 2021. Tonte, taille de haies, création de massifs, arrosage automatique,
                    maçonnerie paysagère : Bob gère tous les chantiers « au sol » avec le même
                    sens du détail.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <p className=" pb-11">
            <a href="/contact" className="text-violet font-bold">Contactez-nous</a> dès à présent ! 
          </p>
        </div>

      </>

    </>
  )
}