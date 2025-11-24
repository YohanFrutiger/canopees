export default function ContactButton({ btnContent }) {


  return (
    <div className="mt-16 mx-auto text-center max-w-[350px]">
     

      <a href="/contact" className="bg-blue hover:bg-blue/90 text-white px-2 md:px-8 py-4 rounded-xl md:text-xl font-semibold shadow-lg transition ">
      {btnContent}
      </a>

    </div>
  )
}