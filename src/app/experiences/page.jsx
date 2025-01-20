import Header from "../components/Header"
import Exp from "../components/Exp"
import Footer from "../components/Footer"

export default function Experiences() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Exp />

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4]"></div>
        <div className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4]"></div>
        <div className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4]"></div>
        <div className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4]"></div>
        <div className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4]"></div>
        <div className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4]"></div>
      </div>

      <Footer />
    </div>
  )
}

