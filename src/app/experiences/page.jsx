import Header from "../components/Header";
import Exp from "../components/Exp";
import Footer from "../components/Footer";

export default function Experiences() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Exp />
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/darkmode"
          className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4] transform transition-transform hover:scale-105 flex items-center justify-center"
        >
          <span className="text-black font-inter font-semibold">TOGGLE DARK/LIGHT MODE</span>
        </a>
        <a
          href="/feature1"
          className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4] transform transition-transform hover:scale-105 flex items-center justify-center"
        >
          <span className="text-black font-inter font-semibold">FEATURE 2</span>
        </a>
        <a
          href="/feature2"
          className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4] transform transition-transform hover:scale-105 flex items-center justify-center"
        >
          <span className="text-black font-inter font-semibold">FEATURE 3</span>
        </a>
        <a
          href="/feature3"
          className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4] transform transition-transform hover:scale-105 flex items-center justify-center"
        >
          <span className="text-black font-inter font-semibold">FEATURE 4</span>
        </a>
        <a
          href="/feature4"
          className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4] transform transition-transform hover:scale-105 flex items-center justify-center"
        >
          <span className="text-black font-inter font-semibold">FEATURE 5</span>
        </a>
        <a
          href="/feature5"
          className="bg-[#D9D9D9] border-2 border-black rounded-2xl aspect-[3/4] transform transition-transform hover:scale-105 flex items-center justify-center"
        >
          <span className="text-black font-inter font-semibold">FEATURE 6</span>
        </a>
      </div>
      <Footer />
    </div>
  );
}
