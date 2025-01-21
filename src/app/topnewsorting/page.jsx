import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TopNewSorting() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
        <div className="space-y-8">
          <div className="bg-gray-200 border-2 border-black rounded-lg aspect-video flex items-center justify-center text-black">
            (video van de POC)
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-inter font-semibold text-black">TOP/NEW SORTING</h1>
            <div className="flex space-x-10 text-black">
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className="text-[#696969]">Located on: </span>
                  <span className="text-black font-semibold">Experiences Page</span>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className="text-[#696969]">Steps: </span>
                  <span className="text-black font-semibold">4</span>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className="text-[#696969]">Difficulty: </span>
                  <span className="text-black font-semibold">Easy</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full h-0.5 bg-black mt-8"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <div className="space-y-12">
          <p className="text-center text-black max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-semibold text-center text-black">STEP 1</h2>
            <div className="bg-gray-200 border-2 border-black rounded-2xl aspect-video w-full max-w-3xl mx-auto"></div>
            <p className="text-center text-black max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-semibold text-center text-black">STEP 2</h2>
            <div className="bg-gray-200 border-2 border-black rounded-2xl aspect-video w-full max-w-3xl mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-black mt-8"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <h2 className="text-3xl font-inter font-semibold text-center text-black mb-8">ANDERE POC's</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-200 border-2 border-black rounded-2xl aspect-[3/4]"></div>
          <div className="bg-gray-200 border-2 border-black rounded-2xl aspect-[3/4]"></div>
          <div className="bg-gray-200 border-2 border-black rounded-2xl aspect-[3/4]"></div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
