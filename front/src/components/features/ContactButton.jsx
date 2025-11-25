export default function ContactButton({ btnContent }) {


  return (
    <div className="mt-16 mb-8 text-center max-w-60 mx-auto ">
     

      <a href="/contact" className=" px-4 text-center py-3 bg-blue hover:bg-blue/80 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105">
      {btnContent}
      </a>

    </div>
  )
}