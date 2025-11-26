import HeroSlider from "../components/features/HeroSlider";
import Line from "../components/layout/Line";
import TargetCard from "../components/features/TargetCard";
import Carrousel from "../components/features/Carrousel";

export default function Home() {
  return (
    <>

      <HeroSlider />

      <p className=" text-center font-semibold mt-[436px] ">
        Depuis 2020, <span className="text-violet font-semibold">Canopées</span> met sa passion et le respect de la nature au service de vos espaces verts. <span className="text-violet font-semibold">Conception, entretien, taille, élagage, abattage</span> : nous intervenons avec la même exigence chez les particuliers, les entreprises et les collectivités dans toute la régio Rhône-Alpes. <span className="text-violet font-semibold">Un jardin bien pensé vous ressemble.</span> C’est notre conviction, et c’est ce que nous réalisons chaque jour sur le terrain.
      </p>


      <Line />

      <h2 className="text-center ">Notre savoir-faire au service de tous</h2>



      <div className="gap-4 grid grid-cols-1 md:grid-cols-3  mb-12">
        <TargetCard
          icon="🏡"
          title="Particuliers"
          text="Vous avez un jardin, une résidence secondaire, une grande propriété ou une simple haie à tailler ? Nous entretenons et sublimons votre espace de vie comme si c’était le nôtre : avec soin, discrétion et respect de vos arbres"
          bgColor="bg-violet"
        />
        <TargetCard
          icon="🏢"
          title="Entreprise"
          text="Parcs d’activité, bureaux, hôtels, restaurants, zones commerciales… Des espaces verts impeccables valorisent votre image et accueillent vos clients et collaborateurs dans un cadre agréable toute l’année."
          bgColor="bg-blue"
        />
        <TargetCard
          icon="🏛️"
          title="Collectivités"
          text="Mairies, écoles, cimetières, parcs publics, bords de route… Nous répondons aux marchés publics et intervenons avec rigueur, sécurité et traçabilité pour maintenir le patrimoine arboré de votre commune."
          bgColor="bg-pink"
        />
      </div>

      <Line />

      <h2 className="text-center">Un œil sur nos dernières réalisations</h2>


      <Carrousel />




    </>
  )
}