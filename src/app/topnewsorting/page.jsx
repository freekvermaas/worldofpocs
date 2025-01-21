"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function TopNewSorting() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const otherFeatures = [
    { id: 1, name: "TOGGLE DARK/LIGHT MODE", link: "/darkmode" },
    { id: 2, name: "MOVING LOGO", link: "/feature2" },
    { id: 4, name: "SEARCH ENGINE", link: "/feature4" },
  ]

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
        <div className="space-y-8">
          <div
            className={`border-2 rounded-lg overflow-hidden ${
              theme === "dark" ? "bg-gray-800 border-white" : "bg-gray-200 border-black"
            }`}
          >
            <video className="w-full h-full object-cover" controls playsInline>
              <source src="/videos/topnewsortingvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-inter font-semibold">TOP/NEW SORTING</h1>
            <div className="flex space-x-10">
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Located on: </span>
                  <span className="font-semibold">Experiences Page</span>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Steps: </span>
                  <span className="font-semibold">4</span>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Difficulty: </span>
                  <span className="font-semibold">Easy</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className={`w-full h-0.5 mt-8 ${theme === "dark" ? "bg-white" : "bg-black"}`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <div className="space-y-12">
          <p className="text-center max-w-3xl mx-auto">
            The 'Top' and 'New' buttons are there to help you categorize the items on your website.
            In this case, it helps categorize the proof of concepts I made.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-semibold text-center">STEP 1</h2>
            <div
            className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                theme === "dark" ? "border-white" : "border-black"
            }`}
            style={{ width: "200px", height: "90px" }}
            >
              <Image
                src="/images/newandtop.png"
                alt="Step 1 Example"
                width={200}
                height={200}
                className="rounded-2xl"
              />
            </div>
            <p className="text-center max-w-3xl mx-auto">
              Start by creating the Top and New buttons. These buttons will let the user toggle between two sorting modes.
              The design was already created, so it was just about implementing it.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-semibold text-center">STEP 2</h2>
            <div
            className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                theme === "dark" ? "border-white" : "border-black"
            }`}
            style={{ width: "600px", height: "200px" }}
            >
              <Image
                src="/images/topnew2code.png"
                alt="Step 2 Example"
                width={600}
                height={200}
                className="rounded-2xl"
              />
            </div>
            <p className="text-center max-w-3xl mx-auto">
              Once the buttons are ready, the next step is to display the items in their default order, which is "New".
              This means simply showing the list in the order it was defined.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-semibold text-center">STEP 3</h2>
            <div
            className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                theme === "dark" ? "border-white" : "border-black"
            }`}
            style={{ width: "600px", height: "220px" }}
            >
              <Image
                src="/images/topnew3code.png"
                alt="Step 3 Example"
                width={600}
                height={600}
                className="rounded-2xl"
              />
            </div>
            <p className="text-center max-w-3xl mx-auto">
              Next, define a custom order for the "Top" option. This involves specifying a manual order using an array and sorting the items accordingly.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-semibold text-center">FINAL RESULT</h2>
            <div
                className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                theme === "dark" ? "bg-gray-800 border-white" : "bg-gray-200 border-black"
                }`}
                style={{ aspectRatio: "16/9" }} // Ensures video maintains the rectangle aspect ratio
            >
                <video
                className="w-full h-full object-cover rounded-2xl"
                controls
                playsInline
                >
                <source src="/videos/topnewsortingvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
           </div>

        </div>
      </div>

      <div className={`w-full h-0.5 mt-8 ${theme === "dark" ? "bg-white" : "bg-black"}`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <h2 className="text-3xl font-inter font-semibold text-center mb-8">OTHER POC's</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherFeatures.map((feature) => (
            <Link
              key={feature.id}
              href={feature.link}
              className="block relative border-2 rounded-2xl aspect-[3/4] hover:scale-105 transition-transform duration-200 overflow-hidden"
            >
              <Image
                src={
                  feature.name === "TOGGLE DARK/LIGHT MODE"
                    ? theme === "dark"
                      ? "/images/darkdarkmodebg.png"
                      : "/images/darkmodebg.png"
                    : feature.name === "MOVING LOGO"
                      ? theme === "dark"
                        ? "/images/darkmovinglogobg.png"
                        : "/images/movinglogobg.png"
                      : theme === "dark"
                        ? "/images/darksearchenginebg.png"
                        : "/images/searchenginebg.png"
                }
                alt={`${feature.name} Background`}
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
              />
              <span
                className={`absolute inset-0 flex items-center justify-center text-center font-inter font-semibold z-10 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {feature.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
