// COMPOSANT OBSOLETE

// src/components/features/Gallery.jsx
// Composant Gallery (images des différentes réalisations)
// import parse from "html-react-parser";

// export default function Gallery({ realizations }) {
//   // console.log(realizations);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
//       {realizations.map((real, index) => (

//         <div className="overflow-hidden ">
//           <img
//             key={real.id}
//             src={`http://127.0.0.1:8000/uploads/${real.image}`} 
//             alt={real.alt}
//             className="w-full h-80 object-cover rounded-xl"
//           />
//           <p className=" text-center font-semibold h-full p-2  ">{parse(real.description)}</p>
//         </div>
//       ))}
//     </div>
//   );
// }