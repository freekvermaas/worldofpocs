"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function DarkMode() {
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
    { id: 2, name: "MOVING LOGO", link: "/movinglogo" },
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
              <source src="/videos/darkmodevideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-inter font-semibold">TOGGLE DARK/LIGHT MODE</h1>
            <div className="flex space-x-10">
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Located on: </span>
                  <Link href="/experiences" className="font-semibold hover:underline">
                    Experiences Page
                  </Link>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Steps: </span>
                  <span className="font-semibold">5</span>
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-inter mb-2">
                  <span className={theme === "dark" ? "text-[#A0A0A0]" : "text-[#696969]"}>Difficulty: </span>
                  <span className="font-semibold">Hard</span>
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
                  The Button to toggle 'Dark' and 'Light' mode on a page, are there to give the user a preference of how they'd like to currently see their screen.
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
                      src="/images/darkmodebutton.png"
                      alt="Step 1 Example Dark"
                      width={200}
                      height={200}
                      className="rounded-2xl"
                    />
                  </div>
                  <p className="text-center max-w-3xl mx-auto">
                    Start by creating a button that toggles between light and dark modes. This button will trigger the theme switch in the app.
                  </p>
                </div>
      
                <div className="space-y-6">
                  <h2 className="text-2xl font-inter font-semibold text-center">STEP 2</h2>
                  <div
                  className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                      theme === "dark" ? "border-white" : "border-black"
                  }`}
                  style={{ width: "400px", height: "150px" }}
                  >
                    <Image
                      src="/images/dark2code.png"
                      alt="Step 2 Example Dark"
                      width={400}
                      height={150}
                      className="rounded-2xl"
                    />
                  </div>
                  <p className="text-center max-w-3xl mx-auto">
                    Next, you'll configure Tailwind to support dark mode. You can do this by modifying the tailwind.config.js file and ensuring the dark mode is available across the entire layout.
                  </p>
                </div>
      
                <div className="space-y-6">
                  <h2 className="text-2xl font-inter font-semibold text-center">STEP 3</h2>
                  <div
                  className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                      theme === "dark" ? "border-white" : "border-black"
                  }`}
                  style={{ width: "700px", height: "250px" }}
                  >
                    <Image
                      src="/images/sickassphoto.png"
                      alt="Step 3 Example Dark"
                      width={700}
                      height={700}
                      className="rounded-2xl"
                    />
                  </div>
                  <p className="text-center max-w-3xl mx-auto">
                    Now that the button and theme system are in place, customize the dark mode styles on the dark mode page.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-inter font-semibold text-center">STEP 4</h2>
                  <div
                  className={`border-2 rounded-2xl max-w-3xl mx-auto overflow-hidden flex items-center justify-center ${
                      theme === "dark" ? "border-white" : "border-black"
                  }`}
                  style={{ width: "500px", height: "85px" }}
                  >
                    <Image
                      src="/images/dark2code2.png"
                      alt="Step 2 Example Dark 2"
                      width={500}
                      height={150}
                      className="rounded-2xl"
                    />
                  </div>
                  <p className="text-center max-w-3xl mx-auto">
                  It's important to ensure the theme is persistent across page loads and that it works on all pages. This is handled by next-themes, which automatically remembers the user's last theme choice and applies it across all pages.
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
                      <source src="/videos/darkmodevideo.mp4" type="video/mp4" />
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
