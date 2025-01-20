import Header from "../components/Header"
import Footer from "../components/Footer"

export default function DarkMode() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
        <div className="space-y-8">
          {/* Video Section */}
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-black">
            (video van de POC)
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-inter font-semibold text-black">Moving Logo</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-black">
              <div>
                <h2 className="text-lg font-inter mb-2 text-[#696969]">Located on: Start Page</h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2 text-[#696969]">Steps: 4</h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2 text-[#696969]">Difficulty: Medium</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Black outline that spans the entire width */}
      <div className="w-full h-0.5 bg-black mt-8"></div>
      <Footer />
    </div>
  )
}

