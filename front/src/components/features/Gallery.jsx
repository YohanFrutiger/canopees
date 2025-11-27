// src/components/features/=Gallery.jsx
// import photo from "../../assets/images/realisations/conception-1.jpg"


export default function Gallery({ realisations }) {
  console.log(realisations);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
      {realisations.map((item, index) => (

        <div className="overflow-hidden ">
          <img
            key={index}
            src={item.image}
            alt={item.alt}
            className="w-full h-80 object-cover rounded-xl"
          />
          <p className=" text-center font-semibold h-full p-2  ">{item.legende}</p>
        </div>
      ))}
    </div>
  );
}