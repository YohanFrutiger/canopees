import HeroSlider from "../components/features/HeroSlider";
import TargetCard from "../components/features/TargetCard";
import Carrousel from "../components/features/Carrousel";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <div className="mx-auto max-w-[1300px] px-10">


        
          <p className="container text-center mx-auto py-8 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, reprehenderit dolores eveniet consequatur recusandae totam quasi minima velit quas similique sapiente illo autem sit impedit dolor voluptate tenetur expedita omnis? Quibusdam adipisci laudantium blanditiis sequi libero alias cupiditate, perspiciatis ipsa ullam rerum quaerat asperiores dicta.
          </p>
        


        
          <h1 className="uppercase font-semibold text-center text-xl text-black tracking-wide">Notre savoir-faire au service de tous</h1>
        


        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 py-4">
          <TargetCard
            icon="🏡"
            title="Particuliers"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, reprehenderit dolores eveniet consequatur recusandae totam quasi minima velit quas similique sapiente illo autem sit impedit dolor voluptate tenetur expedita omnis? Quibusdam adipisci laudantium blanditiis sequi libero alias cupiditate, perspiciatis ipsa ullam rerum quaerat asperiores dicta."
            bgColor="bg-violet"
          />
          <TargetCard
            icon="🏢"
            title="Entreprise"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, reprehenderit dolores eveniet consequatur recusandae totam quasi minima velit quas similique sapiente illo autem sit impedit dolor voluptate tenetur expedita omnis? Quibusdam adipisci laudantium blanditiis sequi libero alias cupiditate, perspiciatis ipsa ullam rerum quaerat asperiores dicta."
            bgColor="bg-blue"
          />
          <TargetCard
            icon="🏛️"
            title="Collectivités territoriales"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure, reprehenderit dolores eveniet consequatur recusandae totam quasi minima velit quas similique sapiente illo autem sit impedit dolor voluptate tenetur expedita omnis? Quibusdam adipisci laudantium blanditiis sequi libero alias cupiditate, perspiciatis ipsa ullam rerum quaerat asperiores dicta."
            bgColor="bg-orange"
          />
        </div>
        
          <h1 className="uppercase font-semibold text-center text-xl text-black tracking-wide pt-8 pb-4">Un œil sur nos dernières réalisations</h1>
        

        <Carrousel />


      </div>

    </>
  )
}