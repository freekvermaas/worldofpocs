"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
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
            className={`border-2 rounded-lg aspect-video flex items-center justify-center ${
              theme === "dark" ? "bg-gray-800 border-white" : "bg-gray-200 border-black"
            }`}
          >
            (video van de POC)
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-semibold text-center">STEP 1</h2>
            <div
              className={`border-2 rounded-2xl aspect-video w-full max-w-3xl mx-auto ${
                theme === "dark" ? "bg-gray-800 border-white" : "bg-gray-200 border-black"
              }`}
            ></div>
            <p className="text-center max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-semibold text-center">STEP 2</h2>
            <div
              className={`border-2 rounded-2xl aspect-video w-full max-w-3xl mx-auto ${
                theme === "dark" ? "bg-gray-800 border-white" : "bg-gray-200 border-black"
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div className={`w-full h-0.5 mt-8 ${theme === "dark" ? "bg-white" : "bg-black"}`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <h2 className="text-3xl font-inter font-semibold text-center mb-8">ANDERE POC's</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherFeatures.map((feature) => (
            <Link
              key={feature.id}
              href={feature.link}
              className={`border-2 rounded-2xl aspect-[3/4] ${
                theme === "dark" ? "bg-gray-800 border-white" : "bg-[#D9D9D9] border-black"
              } hover:scale-105 flex items-center justify-center transition-transform duration-200`}
            >
              <span
                className={`text-center font-inter font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
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

