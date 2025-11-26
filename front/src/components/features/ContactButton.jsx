import { Link } from 'react-router-dom'
export default function ContactButton({ btnContent }) {


  return (
    <div className="mt-16 mb-8 text-center max-w-72 mx-auto ">
     

      <Link to="/contact" className=" text-xl px-4 text-center py-3 bg-blue hover:bg-blue/80 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105">
      {btnContent}
      </Link>

    </div>
  )
}