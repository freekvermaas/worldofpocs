"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function MovingLogo() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const otherFeatures = [
    { id: 3, name: "NEW/TOP SORTING", link: "/topnewsorting" },
    { id: 1, name: "TOGGLE DARK/LIGHT MODE", link: "/darkmode" },
    { id: 4, name: "SEARCH ENGINE", link: "/searchengine" },
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
              <source src="/videos/movinglogovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-inter font-semibold">MOVING LOGO</h1>
            <div className="flex space-x-10">
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Located on: </span>
                  <Link href="/" className="font-semibold hover:underline">
                    Start Page
                  </Link>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Steps: </span>
                  <span className="font-semibold">2</span>
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
                              A moving logo on the first page of the website, creates an engaging opening for the user, adding more<br></br>flare and personality to the project.
                            </p>
                  
                            <div className="space-y-6">
                              <h2 className="text-2xl font-inter font-semibold text-center">STEP 1</h2>
                              <div
                              className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                                  theme === "dark" ? "border-white" : "border-black"
                              }`}
                              style={{ width: "400px", height: "320px" }}
                              >
                                <Image
                                  src="/images/worldofpocsiconliving.png"
                                  alt="Step 1 Example Logo"
                                  width={400}
                                  height={400}
                                  className="rounded-2xl"
                                />
                              </div>
                              <p className="text-center max-w-3xl mx-auto">
                              To start, add the logo in your project. Directly placing it on your background will show perspective on how the final result will look.
                              </p>
                            </div>
                  
                            <div className="space-y-6">
                              <h2 className="text-2xl font-inter font-semibold text-center">STEP 2</h2>
                              <div
                              className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                                  theme === "dark" ? "border-white" : "border-black"
                              }`}
                              style={{ width: "400px", height: "225px" }}
                              >
                                <Image
                                  src="/images/logo2code.png"
                                  alt="Step 2 Example Logo"
                                  width={400}
                                  height={150}
                                  className="rounded-2xl"
                                />
                              </div>
                              <p className="text-center max-w-3xl mx-auto">
                              Now, define a custom animation in your Tailwind CSS configuration. This animation will make the logo "bounce" slowly. Using keyframes you can create the exact animation you desire.
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
                                  <source src="/videos/movinglogovideo.mp4" type="video/mp4" />
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
                  feature.name === "NEW/TOP SORTING"
                    ? theme === "dark"
                      ? "/images/darknewtopsortinglogobg.png"
                      : "/images/newtopsortinglogobg.png"
                    : feature.name === "TOGGLE DARK/LIGHT MODE"
                    ? theme === "dark"
                      ? "/images/darkdarkmodebg.png"
                      : "/images/darkmodebg.png"
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
