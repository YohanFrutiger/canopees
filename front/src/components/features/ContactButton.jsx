export default function ContactButton({ btnContent }) {


  return (
    <div className="mt-8 text-center ">
     

      <a href="/contact" className=" mx-auto block w-48 text-center py-3 bg-blue hover:bg-blue/80 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105">
      {btnContent}
      </a>

    </div>
  )
}